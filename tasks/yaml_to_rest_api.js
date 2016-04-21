/*
 * grunt-yaml-to-rest-api
 * https://github.com/alex/grunt
 *
 * Copyright (c) 2016 Alex Tong
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path'),
	yaml = require('js-yaml'),
	_ = require('lodash'),
	jade = require('jade');
module.exports = function (grunt) {
	var yamlSchema = null;
	var strictOption = false;

	function loadYaml(filepath, options) {
		var data = grunt.file.read(filepath, options);

		try {
			return yaml.safeLoad(data, {
				schema: yamlSchema,
				filename: filepath,
				strict: strictOption
			});
		} catch (e) {
			grunt.warn(e);
			return null;
		}
	}

	function createYamlSchema(customTypes) {
		var yamlTypes = [];
		_.each(customTypes, function (resolver, tagAndKindString) {
			var tagAndKind = tagAndKindString.split(/\s+/);
			var yamlType = new yaml.Type(tagAndKind[0], {
				loadKind: tagAndKind[1],
				loadResolver: function (state) {
					var result = resolver.call(this, state.result, loadYaml);

					if (_.isUndefined(result) || _.isFunction(result)) {
						return false;
					} else {
						state.result = result;
						return true;
					}
				}
			});

			yamlTypes.push(yamlType);
		});

		return yaml.Schema.create(yamlTypes);
	}

	grunt.registerMultiTask('yaml_to_rest_api', 'Compile YAML to Rest API', function () {
		var options = this.options({
			customTypes: {},
			ignored: null,
			space: 2,
			strict: false,
			readEncoding: grunt.file.defaultEncoding,
			writeEncoding: grunt.file.defaultEncoding,
			indexPage: "cola.html"
		});


		var readOptions = {
			encoding: options.readEncoding
		};

		yamlSchema = createYamlSchema(options.customTypes);
		strictOption = options.strict;
		var pages = [];
		var rootFile = {
			isDir: true,
			name: "<ROOT>",
			path: "",
			files: []
		};

		function findDir(dirName, parent) {
			var nFiles = parent.files;
			for (var i = 0; i < nFiles.length; i++) {
				var child = nFiles[i];
				if (child.isDir) {
					if (child.path == dirName) {
						return child
					} else {
						var result = findDir(dirName, child);
						if (result) {
							return result;
						}
					}
				}
			}
		}

		function addDir(dirName) {
			var dirs = dirName.split(path.sep);
			var pathN = "";
			for (var i = 0; i < dirs.length; i++) {
				var pathOld = pathN;
				pathN += path.sep + dirs[i];
				var result = findDir(pathN, rootFile);
				if (!result) {
					if (i == 0) {
						rootFile.files.push({
							name: dirs[i],
							isDir: true,
							path: pathN,
							files: []
						})
					} else {
						findDir(pathOld, rootFile).files.push({
							name: dirs[i],
							isDir: true,
							path: pathN,
							files: []
						});
					}
				}
			}
		}

		function addFile(filePath) {
			var pathObj = path.parse(filePath)
			var dirName = pathObj.dir;
			console.log(pathObj);
			addDir(dirName);
			var parentNode = findDir(path.sep + dirName, rootFile);
			parentNode.files.push({
				name: pathObj.name,
				path: filePath
			})
		}

		_.each(this.files, function (filePair) {
			filePair.src.forEach(function (src) {
				if (grunt.file.isDir(src) || (options.ignored && path.basename(src).match(options.ignored))) {
					return;
				}
				var result = loadYaml(src, readOptions);
				var page = {filePath: src.substring(0, src.length - 4) + "html", interfaces: []};

				function addApi(api) {
					api.activeTab = "response";
					if (api.requestParams) {
						api.activeTab = "requestParams"
					} else if (api.requestBody) {
						api.activeTab = "requestBody"
					}
					api.index = page.interfaces.length;
					page.interfaces.push(api)
				}

				if (_.isArray(result)) {
					_.each(result, function (item) {
						addApi(item)
					})
				} else if (_.isObject(result)) {
					addApi(result)
				}
				pages.push(page);

				addFile(page.filePath);
			});
		});


		var dest = path.join(process.cwd(), options.output);
		var tamplate = path.join(__dirname, "..", "templates", "api.jade");
		var indexHtml = jade.renderFile(path.join(__dirname, "..", "templates", "index.jade"), {contextPath: ""});
		grunt.file.write(path.join(dest, "index.html"), indexHtml);

		for (var i = 0; i < pages.length; i++) {
			var page = pages[i];
			var htmlFile = path.join(dest, page.filePath);

			var filePath = path.parse(page.filePath);
			var cdCount = filePath.dir.split(path.sep).length;

			var contextPath = "";
			for (var j = 0; j < cdCount; j++) {
				contextPath += "../"
			}

			page.contextPath = contextPath;
			var html = jade.renderFile(tamplate, page);
			grunt.file.write(htmlFile, html);
		}

		grunt.file.write(path.join(dest, "menus.json"), JSON.stringify(rootFile.files))
	});
};
