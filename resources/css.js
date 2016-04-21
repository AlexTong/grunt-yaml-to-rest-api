 /*
 * # Semantic UI - 2.1.8
 * https://github.com/Semantic-Org/Semantic-UI
 * http://www.semantic-ui.com/
 *
 * Copyright 2014 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*!
 * # Semantic UI 2.1.8 - Reset
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
             Reset
*******************************/

/* Border-Box */

*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

/* iPad Input Shadows */

input[type="text"],
input[type="email"],
input[type="search"],
input[type="password"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  /* mobile firefox too! */
}

/*******************************
         Theme Overrides
*******************************/

/*! normalize.css v3.0.1 | MIT License | git.io/normalize */

/**
 * Correct `block` display not defined in IE 8/9.
 */

/*! normalize.css v3.0.1 | MIT License | git.io/normalize */

/**
 * 1. Set default font family to sans-serif.
 * 2. Prevent iOS text size adjust after orientation change, without disabling
 *    user zoom.
 */

html {
  font-family: sans-serif;
  /* 1 */
  -ms-text-size-adjust: 100%;
  /* 2 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
}

/**
 * Remove default margin.
 */

body {
  margin: 0;
}

/* HTML5 display definitions
   ========================================================================== */

/**
 * Correct `block` display not defined for any HTML5 element in IE 8/9.
 * Correct `block` display not defined for `details` or `summary` in IE 10/11 and Firefox.
 * Correct `block` display not defined for `main` in IE 11.
 */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}

/**
 * 1. Correct `inline-block` display not defined in IE 8/9.
 * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.
 */

audio,
canvas,
progress,
video {
  display: inline-block;
  /* 1 */
  vertical-align: baseline;
  /* 2 */
}

/**
 * Prevent modern browsers from displaying `audio` without controls.
 * Remove excess height in iOS 5 devices.
 */

audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Address `[hidden]` styling not present in IE 8/9/10.
 * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.
 */

[hidden],
template {
  display: none;
}

/* Links
   ========================================================================== */

/**
 * Remove the gray background color from active links in IE 10.
 */

a {
  background: transparent;
}

/**
 * Improve readability when focused and also mouse hovered in all browsers.
 */

a:active,
a:hover {
  outline: 0;
}

/* Text-level semantics
   ========================================================================== */

/**
 * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
 */

abbr[title] {
  border-bottom: 1px dotted;
}

/**
 * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.
 */

b,
strong {
  font-weight: bold;
}

/**
 * Address styling not present in Safari and Chrome.
 */

dfn {
  font-style: italic;
}

/**
 * Address variable `h1` font-size and margin within `section` and `article`
 * contexts in Firefox 4+, Safari, and Chrome.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/**
 * Address styling not present in IE 8/9.
 */

mark {
  background: #ff0;
  color: #000;
}

/**
 * Address inconsistent and variable font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` affecting `line-height` in all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove border when inside `a` element in IE 8/9/10.
 */

img {
  border: 0;
}

/**
 * Correct overflow not hidden in IE 9/10/11.
 */

svg:not(:root) {
  overflow: hidden;
}

/* Grouping content
   ========================================================================== */

/**
 * Address margin not present in IE 8/9 and Safari.
 */

figure {
  margin: 1em 40px;
}

/**
 * Address differences between Firefox and other browsers.
 */

hr {
  box-sizing: content-box;
  height: 0;
}

/**
 * Contain overflow in all browsers.
 */

pre {
  overflow: auto;
}

/**
 * Address odd `em`-unit font size rendering in all browsers.
 */

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

/* Forms
   ========================================================================== */

/**
 * Known limitation: by default, Chrome and Safari on OS X allow very limited
 * styling of `select`, unless a `border` property is set.
 */

/**
 * 1. Correct color not being inherited.
 *    Known issue: affects color of disabled elements.
 * 2. Correct font properties not being inherited.
 * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
 */

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  /* 1 */
  font: inherit;
  /* 2 */
  margin: 0;
  /* 3 */
}

/**
 * Address `overflow` set to `hidden` in IE 8/9/10/11.
 */

button {
  overflow: visible;
}

/**
 * Address inconsistent `text-transform` inheritance for `button` and `select`.
 * All other form control elements do not inherit `text-transform` values.
 * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.
 * Correct `select` style inheritance in Firefox.
 */

button,
select {
  text-transform: none;
}

/**
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
 *    and `video` controls.
 * 2. Correct inability to style clickable `input` types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *    `input` and others.
 */

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  /* 2 */
  cursor: pointer;
  /* 3 */
}

/**
 * Re-set default cursor for disabled elements.
 */

button[disabled],
html input[disabled] {
  cursor: default;
}

/**
 * Remove inner padding and border in Firefox 4+.
 */

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/**
 * Address Firefox 4+ setting `line-height` on `input` using `!important` in
 * the UA stylesheet.
 */

input {
  line-height: normal;
}

/**
 * It's recommended that you don't attempt to style these elements.
 * Firefox's implementation doesn't respect box-sizing, padding, or width.
 *
 * 1. Address box sizing set to `content-box` in IE 8/9/10.
 * 2. Remove excess padding in IE 8/9/10.
 */

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
}

/**
 * Fix the cursor style for Chrome's increment/decrement buttons. For certain
 * `font-size` values of the `input`, it causes the cursor style of the
 * decrement button to change from `default` to `text`.
 */

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Address `appearance` set to `searchfield` in Safari and Chrome.
 * 2. Address `box-sizing` set to `border-box` in Safari and Chrome
 *    (include `-moz` to future-proof).
 */

input[type="search"] {
  -webkit-appearance: textfield;
  /* 1 */
  /* 2 */
  box-sizing: content-box;
}

/**
 * Remove inner padding and search cancel button in Safari and Chrome on OS X.
 * Safari (but not Chrome) clips the cancel button when the search input has
 * padding (and `textfield` appearance).
 */

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * Define consistent border, margin, and padding.
 */

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/**
 * 1. Correct `color` not being inherited in IE 8/9/10/11.
 * 2. Remove padding so people aren't caught out if they zero out fieldsets.
 */

legend {
  border: 0;
  /* 1 */
  padding: 0;
  /* 2 */
}

/**
 * Remove default vertical scrollbar in IE 8/9/10/11.
 */

textarea {
  overflow: auto;
}

/**
 * Don't inherit the `font-weight` (applied by a rule above).
 * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
 */

optgroup {
  font-weight: bold;
}

/* Tables
   ========================================================================== */

/**
 * Remove most spacing between table cells.
 */

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Site
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
             Page
*******************************/

html,
body {
  height: 100%;
}

html {
  font-size: 14px;
}

body {
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  min-width: 320px;
  background: #FFFFFF;
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  font-smoothing: antialiased;
}

/*******************************
             Headers
*******************************/

h1,
h2,
h3,
h4,
h5 {
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  line-height: 1.2857em;
  margin: calc(2rem -  0.14285em ) 0em 1rem;
  font-weight: bold;
  padding: 0em;
}

h1 {
  min-height: 1rem;
  font-size: 2rem;
}

h2 {
  font-size: 1.714rem;
}

h3 {
  font-size: 1.28rem;
}

h4 {
  font-size: 1.071rem;
}

h5 {
  font-size: 1rem;
}

h1:first-child,
h2:first-child,
h3:first-child,
h4:first-child,
h5:first-child {
  margin-top: 0em;
}

h1:last-child,
h2:last-child,
h3:last-child,
h4:last-child,
h5:last-child {
  margin-bottom: 0em;
}

/*******************************
             Text
*******************************/

p {
  margin: 0em 0em 1em;
  line-height: 1.4285em;
}

p:first-child {
  margin-top: 0em;
}

p:last-child {
  margin-bottom: 0em;
}

/*-------------------
        Links
--------------------*/

a {
  color: #4183C4;
  text-decoration: none;
}

a:hover {
  color: #1e70bf;
  text-decoration: none;
}

/*******************************
          Highlighting
*******************************/

/* Site */

::-webkit-selection {
  background-color: #CCE2FF;
  color: rgba(0, 0, 0, 0.87);
}

::-moz-selection {
  background-color: #CCE2FF;
  color: rgba(0, 0, 0, 0.87);
}

::selection {
  background-color: #CCE2FF;
  color: rgba(0, 0, 0, 0.87);
}

/* Form */

textarea::-webkit-selection,
input::-webkit-selection {
  background-color: rgba(100, 100, 100, 0.4);
  color: rgba(0, 0, 0, 0.87);
}

textarea::-moz-selection,
input::-moz-selection {
  background-color: rgba(100, 100, 100, 0.4);
  color: rgba(0, 0, 0, 0.87);
}

textarea::selection,
input::selection {
  background-color: rgba(100, 100, 100, 0.4);
  color: rgba(0, 0, 0, 0.87);
}

/*******************************
        Global Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Button
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Button
*******************************/

.ui.button {
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: none;
  border: none;
  vertical-align: baseline;
  background: #E0E1E2 none;
  color: rgba(0, 0, 0, 0.6);
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  margin: 0em 0.25em 0em 0em;
  padding: 0.78571429em 1.5em 0.78571429em;
  text-transform: none;
  text-shadow: none;
  font-weight: bold;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;
  box-shadow: 0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
  will-change: '';
  -webkit-tap-highlight-color: transparent;
}

/*******************************
            States
*******************************/

/*--------------
      Hover
---------------*/

.ui.button:hover {
  background-color: #CACBCD;
  background-image: none;
  box-shadow: 0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
  color: rgba(0, 0, 0, 0.8);
}

.ui.button:hover .icon {
  opacity: 0.85;
}

/*--------------
      Focus
---------------*/

.ui.button:focus {
  background-color: #CACBCD;
  color: rgba(0, 0, 0, 0.8);
  background-image: '' !important;
  box-shadow: '' !important;
}

.ui.button:focus .icon {
  opacity: 0.85;
}

/*--------------
      Down
---------------*/

.ui.button:active,
.ui.active.button:active {
  background-color: #BABBBC;
  background-image: '';
  color: rgba(0, 0, 0, 0.9);
  box-shadow: 0px 0px 0px 1px transparent inset, none;
}

/*--------------
     Active
---------------*/

.ui.active.button {
  background-color: #C0C1C2;
  background-image: none;
  box-shadow: 0px 0px 0px 1px transparent inset;
  color: rgba(0, 0, 0, 0.95);
}

.ui.active.button:hover {
  background-color: #C0C1C2;
  background-image: none;
  color: rgba(0, 0, 0, 0.95);
}

.ui.active.button:active {
  background-color: #C0C1C2;
  background-image: none;
}

/*--------------
    Loading
---------------*/

/* Specificity hack */

.ui.loading.loading.loading.loading.loading.loading.button {
  position: relative;
  cursor: default;
  text-shadow: none !important;
  color: transparent !important;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all 0s linear, opacity 0.1s ease;
  transition: all 0s linear, opacity 0.1s ease;
}

.ui.loading.button:before {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  margin: -0.64285714em 0em 0em -0.64285714em;
  width: 1.28571429em;
  height: 1.28571429em;
  border-radius: 500rem;
  border: 0.2em solid rgba(0, 0, 0, 0.15);
}

.ui.loading.button:after {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  margin: -0.64285714em 0em 0em -0.64285714em;
  width: 1.28571429em;
  height: 1.28571429em;
  -webkit-animation: button-spin 0.6s linear;
  animation: button-spin 0.6s linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  border-radius: 500rem;
  border-color: #FFFFFF transparent transparent;
  border-style: solid;
  border-width: 0.2em;
  box-shadow: 0px 0px 0px 1px transparent;
}

.ui.labeled.icon.loading.button .icon {
  background-color: transparent;
  box-shadow: none;
}

@-webkit-keyframes button-spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes button-spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.ui.basic.loading.button:not(.inverted):before {
  border-color: rgba(0, 0, 0, 0.1);
}

.ui.basic.loading.button:not(.inverted):after {
  border-top-color: #767676;
}

/*-------------------
      Disabled
--------------------*/

.ui.buttons .disabled.button,
.ui.disabled.button,
.ui.button:disabled,
.ui.disabled.button:hover,
.ui.disabled.active.button {
  cursor: default;
  opacity: 0.45 !important;
  background-image: none !important;
  box-shadow: none !important;
  pointer-events: none;
}

/* Basic Group With Disabled */

.ui.basic.buttons .ui.disabled.button {
  border-color: rgba(34, 36, 38, 0.5);
}

/*******************************
             Types
*******************************/

/*-------------------
       Animated
--------------------*/

.ui.animated.button {
  position: relative;
  overflow: hidden;
  padding-right: 0em !important;
  vertical-align: middle;
  z-index: 1;
}

.ui.animated.button .content {
  will-change: transform, opacity;
}

.ui.animated.button .visible.content {
  position: relative;
  margin-right: 1.5em;
}

.ui.animated.button .hidden.content {
  position: absolute;
  width: 100%;
}

/* Horizontal */

.ui.animated.button .visible.content,
.ui.animated.button .hidden.content {
  -webkit-transition: right 0.3s ease 0s;
  transition: right 0.3s ease 0s;
}

.ui.animated.button .visible.content {
  left: auto;
  right: 0%;
}

.ui.animated.button .hidden.content {
  top: 50%;
  left: auto;
  right: -100%;
  margin-top: -0.5em;
}

.ui.animated.button:focus .visible.content,
.ui.animated.button:hover .visible.content {
  left: auto;
  right: 200%;
}

.ui.animated.button:focus .hidden.content,
.ui.animated.button:hover .hidden.content {
  left: auto;
  right: 0%;
}

/* Vertical */

.ui.vertical.animated.button .visible.content,
.ui.vertical.animated.button .hidden.content {
  -webkit-transition: top 0.3s ease, -webkit-transform 0.3s ease;
  transition: top 0.3s ease, -webkit-transform 0.3s ease;
  transition: top 0.3s ease, transform 0.3s ease;
  transition: top 0.3s ease, transform 0.3s ease, -webkit-transform 0.3s ease;
}

.ui.vertical.animated.button .visible.content {
  -webkit-transform: translateY(0%);
  transform: translateY(0%);
  right: auto;
}

.ui.vertical.animated.button .hidden.content {
  top: -50%;
  left: 0%;
  right: auto;
}

.ui.vertical.animated.button:focus .visible.content,
.ui.vertical.animated.button:hover .visible.content {
  -webkit-transform: translateY(200%);
  transform: translateY(200%);
  right: auto;
}

.ui.vertical.animated.button:focus .hidden.content,
.ui.vertical.animated.button:hover .hidden.content {
  top: 50%;
  right: auto;
}

/* Fade */

.ui.fade.animated.button .visible.content,
.ui.fade.animated.button .hidden.content {
  -webkit-transition: opacity 0.3s ease, -webkit-transform 0.3s ease;
  transition: opacity 0.3s ease, -webkit-transform 0.3s ease;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transition: opacity 0.3s ease, transform 0.3s ease, -webkit-transform 0.3s ease;
}

.ui.fade.animated.button .visible.content {
  left: auto;
  right: auto;
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.ui.fade.animated.button .hidden.content {
  opacity: 0;
  left: 0%;
  right: auto;
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}

.ui.fade.animated.button:focus .visible.content,
.ui.fade.animated.button:hover .visible.content {
  left: auto;
  right: auto;
  opacity: 0;
  -webkit-transform: scale(0.75);
  transform: scale(0.75);
}

.ui.fade.animated.button:focus .hidden.content,
.ui.fade.animated.button:hover .hidden.content {
  left: 0%;
  right: auto;
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

/*-------------------
       Inverted
--------------------*/

.ui.inverted.button {
  box-shadow: 0px 0px 0px 2px #FFFFFF inset !important;
  background: transparent none;
  color: #FFFFFF;
  text-shadow: none !important;
}

/* Group */

.ui.inverted.buttons .button {
  margin: 0px 0px 0px -2px;
}

.ui.inverted.buttons .button:first-child {
  margin-left: 0em;
}

.ui.inverted.vertical.buttons .button {
  margin: 0px 0px -2px 0px;
}

.ui.inverted.vertical.buttons .button:first-child {
  margin-top: 0em;
}

/* States */

/* Hover */

.ui.inverted.button:hover {
  background: #FFFFFF;
  box-shadow: 0px 0px 0px 2px #FFFFFF inset !important;
  color: rgba(0, 0, 0, 0.8);
}

/* Active / Focus */

.ui.inverted.button:focus,
.ui.inverted.button.active {
  background: #FFFFFF;
  box-shadow: 0px 0px 0px 2px #FFFFFF inset !important;
  color: rgba(0, 0, 0, 0.8);
}

/* Active Focus */

.ui.inverted.button.active:focus {
  background: #DCDDDE;
  box-shadow: 0px 0px 0px 2px #DCDDDE inset !important;
  color: rgba(0, 0, 0, 0.8);
}

/*-------------------
    Labeled Button
--------------------*/

.ui.labeled.button:not(.icon) {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  background: none !important;
  padding: 0px !important;
  border: none !important;
  box-shadow: none !important;
}

.ui.labeled.button > .button {
  margin: 0px;
}

.ui.labeled.button > .label {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0px 0px 0px -1px !important;
  padding: '';
  font-size: 1em;
  border-color: rgba(34, 36, 38, 0.15);
}

/* Tag */

.ui.labeled.button > .tag.label:before {
  width: 1.85em;
  height: 1.85em;
}

/* Right */

.ui.labeled.button:not([class*="left labeled"]) > .button {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.ui.labeled.button:not([class*="left labeled"]) > .label {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

/* Left Side */

.ui[class*="left labeled"].button > .button {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.ui[class*="left labeled"].button > .label {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

/*-------------------
       Social
--------------------*/

/* Facebook */

.ui.facebook.button {
  background-color: #3B5998;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.facebook.button:hover {
  background-color: #304d8a;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.facebook.button:active {
  background-color: #2d4373;
  color: #FFFFFF;
  text-shadow: none;
}

/* Twitter */

.ui.twitter.button {
  background-color: #0084B4;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.twitter.button:hover {
  background-color: #00719b;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.twitter.button:active {
  background-color: #005f81;
  color: #FFFFFF;
  text-shadow: none;
}

/* Google Plus */

.ui.google.plus.button {
  background-color: #DC4A38;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.google.plus.button:hover {
  background-color: #de321d;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.google.plus.button:active {
  background-color: #bf3322;
  color: #FFFFFF;
  text-shadow: none;
}

/* Linked In */

.ui.linkedin.button {
  background-color: #1F88BE;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.linkedin.button:hover {
  background-color: #147baf;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.linkedin.button:active {
  background-color: #186992;
  color: #FFFFFF;
  text-shadow: none;
}

/* YouTube */

.ui.youtube.button {
  background-color: #CC181E;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.youtube.button:hover {
  background-color: #bd0d13;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.youtube.button:active {
  background-color: #9e1317;
  color: #FFFFFF;
  text-shadow: none;
}

/* Instagram */

.ui.instagram.button {
  background-color: #49769C;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.instagram.button:hover {
  background-color: #3d698e;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.instagram.button:active {
  background-color: #395c79;
  color: #FFFFFF;
  text-shadow: none;
}

/* Pinterest */

.ui.pinterest.button {
  background-color: #00ACED;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.pinterest.button:hover {
  background-color: #0099d4;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.pinterest.button:active {
  background-color: #0087ba;
  color: #FFFFFF;
  text-shadow: none;
}

/* VK */

.ui.vk.button {
  background-color: #4D7198;
  color: #FFFFFF;
  background-image: none;
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.vk.button:hover {
  background-color: #41648a;
  color: #FFFFFF;
}

.ui.vk.button:active {
  background-color: #3c5876;
  color: #FFFFFF;
}

/*--------------
     Icon
---------------*/

.ui.button > .icon:not(.button) {
  height: 0.85714286em;
  opacity: 0.8;
  margin: 0em 0.42857143em 0em -0.21428571em;
  -webkit-transition: opacity 0.1s ease;
  transition: opacity 0.1s ease;
  vertical-align: '';
  color: '';
}

.ui.button > .right.icon:not(.button) {
  margin: 0em -0.21428571em 0em 0.42857143em;
}

/*******************************
           Variations
*******************************/

/*-------------------
       Floated
--------------------*/

.ui[class*="left floated"].buttons,
.ui[class*="left floated"].button {
  float: left;
  margin-left: 0em;
  margin-right: 0.25em;
}

.ui[class*="right floated"].buttons,
.ui[class*="right floated"].button {
  float: right;
  margin-right: 0em;
  margin-left: 0.25em;
}

/*-------------------
       Compact
--------------------*/

.ui.compact.buttons .button,
.ui.compact.button {
  padding: 0.58928571em 1.125em 0.58928571em;
}

.ui.compact.icon.buttons .button,
.ui.compact.icon.button {
  padding: 0.58928571em 0.58928571em 0.58928571em;
}

.ui.compact.labeled.icon.buttons .button,
.ui.compact.labeled.icon.button {
  padding: 0.58928571em 3.69642857em 0.58928571em;
}

/*-------------------
        Sizes
--------------------*/

.ui.mini.buttons .button,
.ui.mini.buttons .or,
.ui.mini.button {
  font-size: 0.71428571rem;
}

.ui.tiny.buttons .button,
.ui.tiny.buttons .or,
.ui.tiny.button {
  font-size: 0.85714286rem;
}

.ui.small.buttons .button,
.ui.small.buttons .or,
.ui.small.button {
  font-size: 0.92857143rem;
}

.ui.buttons .button,
.ui.buttons .or,
.ui.button {
  font-size: 1rem;
}

.ui.large.buttons .button,
.ui.large.buttons .or,
.ui.large.button {
  font-size: 1.14285714rem;
}

.ui.big.buttons .button,
.ui.big.buttons .or,
.ui.big.button {
  font-size: 1.28571429rem;
}

.ui.huge.buttons .button,
.ui.huge.buttons .or,
.ui.huge.button {
  font-size: 1.42857143rem;
}

.ui.massive.buttons .button,
.ui.massive.buttons .or,
.ui.massive.button {
  font-size: 1.71428571rem;
}

/*--------------
    Icon Only
---------------*/

.ui.icon.buttons .button,
.ui.icon.button {
  padding: 0.78571429em 0.78571429em 0.78571429em;
}

.ui.icon.buttons .button > .icon,
.ui.icon.button > .icon {
  opacity: 0.9;
  margin: 0em;
  vertical-align: top;
}

/*-------------------
        Basic
--------------------*/

.ui.basic.buttons .button,
.ui.basic.button {
  background: transparent none !important;
  color: rgba(0, 0, 0, 0.6) !important;
  font-weight: normal;
  border-radius: 0.28571429rem;
  text-transform: none;
  text-shadow: none !important;
  box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;
}

.ui.basic.buttons {
  box-shadow: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
}

.ui.basic.buttons .button {
  border-radius: 0em;
}

.ui.basic.buttons .button:hover,
.ui.basic.button:hover {
  background: #FFFFFF !important;
  color: rgba(0, 0, 0, 0.8) !important;
  box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset, 0px 0px 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.basic.buttons .button:focus,
.ui.basic.button:focus {
  background: #FFFFFF !important;
  color: rgba(0, 0, 0, 0.8) !important;
  box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset, 0px 0px 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.basic.buttons .button:active,
.ui.basic.button:active {
  background: #F8F8F8 !important;
  color: rgba(0, 0, 0, 0.9) !important;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15) inset, 0px 1px 4px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.basic.buttons .active.button,
.ui.basic.active.button {
  background: rgba(0, 0, 0, 0.05) !important;
  box-shadow: '' !important;
  color: rgba(0, 0, 0, 0.95);
  box-shadow: rgba(34, 36, 38, 0.35);
}

.ui.basic.buttons .active.button:hover,
.ui.basic.active.button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Vertical */

.ui.basic.buttons .button:hover {
  box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset, 0px 0px 0px 0px rgba(34, 36, 38, 0.15) inset inset;
}

.ui.basic.buttons .button:active {
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15) inset, 0px 1px 4px 0px rgba(34, 36, 38, 0.15) inset inset;
}

.ui.basic.buttons .active.button {
  box-shadow: rgba(34, 36, 38, 0.35) inset;
}

/* Standard Basic Inverted */

.ui.basic.inverted.buttons .button,
.ui.basic.inverted.button {
  background-color: transparent !important;
  color: #F9FAFB !important;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
}

.ui.basic.inverted.buttons .button:hover,
.ui.basic.inverted.button:hover {
  color: #FFFFFF !important;
  box-shadow: 0px 0px 0px 2px #ffffff inset !important;
}

.ui.basic.inverted.buttons .button:focus,
.ui.basic.inverted.button:focus {
  color: #FFFFFF !important;
  box-shadow: 0px 0px 0px 2px #ffffff inset !important;
}

.ui.basic.inverted.buttons .button:active,
.ui.basic.inverted.button:active {
  background-color: rgba(255, 255, 255, 0.08) !important;
  color: #FFFFFF !important;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.9) inset !important;
}

.ui.basic.inverted.buttons .active.button,
.ui.basic.inverted.active.button {
  background-color: rgba(255, 255, 255, 0.08);
  color: #FFFFFF;
  text-shadow: none;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.7) inset;
}

.ui.basic.inverted.buttons .active.button:hover,
.ui.basic.inverted.active.button:hover {
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 0px 0px 2px #ffffff inset !important;
}

/* Basic Group */

.ui.basic.buttons .button {
  border-left: 1px solid rgba(34, 36, 38, 0.15);
  box-shadow: none;
}

.ui.basic.vertical.buttons .button {
  border-left: none;
}

.ui.basic.vertical.buttons .button {
  border-left-width: 0px;
  border-top: 1px solid rgba(34, 36, 38, 0.15);
}

.ui.basic.vertical.buttons .button:first-child {
  border-top-width: 0px;
}

/*--------------
  Labeled Icon
---------------*/

.ui.labeled.icon.buttons .button,
.ui.labeled.icon.button {
  position: relative;
  padding-left: 4.07142857em !important;
  padding-right: 1.5em !important;
}

/* Left Labeled */

.ui.labeled.icon.buttons > .button > .icon,
.ui.labeled.icon.button > .icon {
  position: absolute;
  height: 100%;
  line-height: 1;
  border-radius: 0px;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  text-align: center;
  margin: 0em;
  width: 2.57142857em;
  background-color: rgba(0, 0, 0, 0.05);
  color: '';
  box-shadow: -1px 0px 0px 0px transparent inset;
}

/* Left Labeled */

.ui.labeled.icon.buttons > .button > .icon,
.ui.labeled.icon.button > .icon {
  top: 0em;
  left: 0em;
}

/* Right Labeled */

.ui[class*="right labeled"].icon.button {
  padding-right: 4.07142857em !important;
  padding-left: 1.5em !important;
}

.ui[class*="right labeled"].icon.button > .icon {
  left: auto;
  right: 0em;
  border-radius: 0px;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  box-shadow: 1px 0px 0px 0px transparent inset;
}

.ui.labeled.icon.buttons > .button > .icon:before,
.ui.labeled.icon.button > .icon:before,
.ui.labeled.icon.buttons > .button > .icon:after,
.ui.labeled.icon.button > .icon:after {
  display: block;
  position: absolute;
  width: 100%;
  top: 50%;
  text-align: center;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.ui.labeled.icon.buttons .button > .icon {
  border-radius: 0em;
}

.ui.labeled.icon.buttons .button:first-child > .icon {
  border-top-left-radius: 0.28571429rem;
  border-bottom-left-radius: 0.28571429rem;
}

.ui.labeled.icon.buttons .button:last-child > .icon {
  border-top-right-radius: 0.28571429rem;
  border-bottom-right-radius: 0.28571429rem;
}

.ui.vertical.labeled.icon.buttons .button:first-child > .icon {
  border-radius: 0em;
  border-top-left-radius: 0.28571429rem;
}

.ui.vertical.labeled.icon.buttons .button:last-child > .icon {
  border-radius: 0em;
  border-bottom-left-radius: 0.28571429rem;
}

/* Fluid Labeled */

.ui.fluid[class*="left labeled"].icon.button,
.ui.fluid[class*="right labeled"].icon.button {
  padding-left: 1.5em !important;
  padding-right: 1.5em !important;
}

/*--------------
     Toggle
---------------*/

/* Toggle (Modifies active state to give affordances) */

.ui.toggle.buttons .active.button,
.ui.buttons .button.toggle.active,
.ui.button.toggle.active {
  background-color: #21BA45 !important;
  box-shadow: none !important;
  text-shadow: none;
  color: #FFFFFF !important;
}

.ui.button.toggle.active:hover {
  background-color: #16ab39 !important;
  text-shadow: none;
  color: #FFFFFF !important;
}

/*--------------
    Circular
---------------*/

.ui.circular.button {
  border-radius: 10em;
}

.ui.circular.button > .icon {
  width: 1em;
  vertical-align: baseline;
}

/*-------------------
      Or Buttons
--------------------*/

.ui.buttons .or {
  position: relative;
  width: 0.3em;
  height: 2.57142857em;
  z-index: 3;
}

.ui.buttons .or:before {
  position: absolute;
  text-align: center;
  border-radius: 500rem;
  content: 'or';
  top: 50%;
  left: 50%;
  background-color: #FFFFFF;
  text-shadow: none;
  margin-top: -0.89285714em;
  margin-left: -0.89285714em;
  width: 1.78571429em;
  height: 1.78571429em;
  line-height: 1.78571429em;
  color: rgba(0, 0, 0, 0.4);
  font-style: normal;
  font-weight: bold;
  box-shadow: 0px 0px 0px 1px transparent inset;
}

.ui.buttons .or[data-text]:before {
  content: attr(data-text);
}

/* Fluid Or */

.ui.fluid.buttons .or {
  width: 0em !important;
}

.ui.fluid.buttons .or:after {
  display: none;
}

/*-------------------
       Attached
--------------------*/

/* Singular */

.ui.attached.button {
  position: relative;
  display: block;
  margin: 0em;
  border-radius: 0em;
  box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) !important;
}

/* Top / Bottom */

.ui.attached.top.button {
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

.ui.attached.bottom.button {
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}

/* Left / Right */

.ui.left.attached.button {
  display: inline-block;
  border-left: none;
  text-align: right;
  padding-right: 0.75em;
  border-radius: 0.28571429rem 0em 0em 0.28571429rem;
}

.ui.right.attached.button {
  display: inline-block;
  text-align: left;
  padding-left: 0.75em;
  border-radius: 0em 0.28571429rem 0.28571429rem 0em;
}

/* Plural */

.ui.attached.buttons {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  border-radius: 0em;
  width: auto !important;
  z-index: 2;
  margin-left: -1px;
  margin-right: -1px;
}

.ui.attached.buttons .button {
  margin: 0em;
}

.ui.attached.buttons .button:first-child {
  border-radius: 0em;
}

.ui.attached.buttons .button:last-child {
  border-radius: 0em;
}

/* Top / Bottom */

.ui[class*="top attached"].buttons {
  margin-bottom: -1px;
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

.ui[class*="top attached"].buttons .button:first-child {
  border-radius: 0.28571429rem 0em 0em 0em;
}

.ui[class*="top attached"].buttons .button:last-child {
  border-radius: 0em 0.28571429rem 0em 0em;
}

.ui[class*="bottom attached"].buttons {
  margin-top: -1px;
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}

.ui[class*="bottom attached"].buttons .button:first-child {
  border-radius: 0em 0em 0em 0.28571429rem;
}

.ui[class*="bottom attached"].buttons .button:last-child {
  border-radius: 0em 0em 0.28571429rem 0em;
}

/* Left / Right */

.ui[class*="left attached"].buttons {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin-right: 0em;
  margin-left: -1px;
  border-radius: 0em 0.28571429rem 0.28571429rem 0em;
}

.ui[class*="left attached"].buttons .button:first-child {
  margin-left: -1px;
  border-radius: 0em 0.28571429rem 0em 0em;
}

.ui[class*="left attached"].buttons .button:last-child {
  margin-left: -1px;
  border-radius: 0em 0em 0.28571429rem 0em;
}

.ui[class*="right attached"].buttons {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin-left: 0em;
  margin-right: -1px;
  border-radius: 0.28571429rem 0em 0em 0.28571429rem;
}

.ui[class*="right attached"].buttons .button:first-child {
  margin-left: -1px;
  border-radius: 0.28571429rem 0em 0em 0em;
}

.ui[class*="right attached"].buttons .button:last-child {
  margin-left: -1px;
  border-radius: 0em 0em 0em 0.28571429rem;
}

/*-------------------
        Fluid
--------------------*/

.ui.fluid.buttons,
.ui.fluid.button {
  width: 100%;
}

.ui.fluid.button {
  display: block;
}

.ui.two.buttons {
  width: 100%;
}

.ui.two.buttons > .button {
  width: 50%;
}

.ui.three.buttons {
  width: 100%;
}

.ui.three.buttons > .button {
  width: 33.333%;
}

.ui.four.buttons {
  width: 100%;
}

.ui.four.buttons > .button {
  width: 25%;
}

.ui.five.buttons {
  width: 100%;
}

.ui.five.buttons > .button {
  width: 20%;
}

.ui.six.buttons {
  width: 100%;
}

.ui.six.buttons > .button {
  width: 16.666%;
}

.ui.seven.buttons {
  width: 100%;
}

.ui.seven.buttons > .button {
  width: 14.285%;
}

.ui.eight.buttons {
  width: 100%;
}

.ui.eight.buttons > .button {
  width: 12.500%;
}

.ui.nine.buttons {
  width: 100%;
}

.ui.nine.buttons > .button {
  width: 11.11%;
}

.ui.ten.buttons {
  width: 100%;
}

.ui.ten.buttons > .button {
  width: 10%;
}

.ui.eleven.buttons {
  width: 100%;
}

.ui.eleven.buttons > .button {
  width: 9.09%;
}

.ui.twelve.buttons {
  width: 100%;
}

.ui.twelve.buttons > .button {
  width: 8.3333%;
}

/* Fluid Vertical Buttons */

.ui.fluid.vertical.buttons,
.ui.fluid.vertical.buttons > .button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: auto;
}

.ui.two.vertical.buttons > .button {
  height: 50%;
}

.ui.three.vertical.buttons > .button {
  height: 33.333%;
}

.ui.four.vertical.buttons > .button {
  height: 25%;
}

.ui.five.vertical.buttons > .button {
  height: 20%;
}

.ui.six.vertical.buttons > .button {
  height: 16.666%;
}

.ui.seven.vertical.buttons > .button {
  height: 14.285%;
}

.ui.eight.vertical.buttons > .button {
  height: 12.500%;
}

.ui.nine.vertical.buttons > .button {
  height: 11.11%;
}

.ui.ten.vertical.buttons > .button {
  height: 10%;
}

.ui.eleven.vertical.buttons > .button {
  height: 9.09%;
}

.ui.twelve.vertical.buttons > .button {
  height: 8.3333%;
}

/*-------------------
       Colors
--------------------*/

/*--- Black ---*/

.ui.black.buttons .button,
.ui.black.button {
  background-color: #1B1C1D;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.black.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.black.buttons .button:hover,
.ui.black.button:hover {
  background-color: #27292a;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.black.buttons .button:focus,
.ui.black.button:focus {
  background-color: #2f3032;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.black.buttons .button:active,
.ui.black.button:active {
  background-color: #343637;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.black.buttons .active.button,
.ui.black.buttons .active.button:active,
.ui.black.active.button,
.ui.black.button .active.button:active {
  background-color: #0f0f10;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */

.ui.basic.black.buttons .button,
.ui.basic.black.button {
  box-shadow: 0px 0px 0px 1px #1B1C1D inset !important;
  color: #1B1C1D !important;
}

.ui.basic.black.buttons .button:hover,
.ui.basic.black.button:hover {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #27292a inset !important;
  color: #27292a !important;
}

.ui.basic.black.buttons .button:focus,
.ui.basic.black.button:focus {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #2f3032 inset !important;
  color: #27292a !important;
}

.ui.basic.black.buttons .active.button,
.ui.basic.black.active.button {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #0f0f10 inset !important;
  color: #343637 !important;
}

.ui.basic.black.buttons .button:active,
.ui.basic.black.button:active {
  box-shadow: 0px 0px 0px 1px #343637 inset !important;
  color: #343637 !important;
}

.ui.buttons:not(.vertical) > .basic.black.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */

.ui.inverted.black.buttons .button,
.ui.inverted.black.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px #D4D4D5 inset !important;
  color: #FFFFFF;
}

.ui.inverted.black.buttons .button:hover,
.ui.inverted.black.button:hover,
.ui.inverted.black.buttons .button:focus,
.ui.inverted.black.button:focus,
.ui.inverted.black.buttons .button.active,
.ui.inverted.black.button.active,
.ui.inverted.black.buttons .button:active,
.ui.inverted.black.button:active {
  box-shadow: none !important;
  color: #FFFFFF;
}

.ui.inverted.black.buttons .button:hover,
.ui.inverted.black.button:hover {
  background-color: #000000;
}

.ui.inverted.black.buttons .button:focus,
.ui.inverted.black.button:focus {
  background-color: #000000;
}

.ui.inverted.black.buttons .active.button,
.ui.inverted.black.active.button {
  background-color: #000000;
}

.ui.inverted.black.buttons .button:active,
.ui.inverted.black.button:active {
  background-color: #000000;
}

/* Inverted Basic */

.ui.inverted.black.basic.buttons .button,
.ui.inverted.black.buttons .basic.button,
.ui.inverted.black.basic.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.black.basic.buttons .button:hover,
.ui.inverted.black.buttons .basic.button:hover,
.ui.inverted.black.basic.button:hover {
  box-shadow: 0px 0px 0px 2px #000000 inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.black.basic.buttons .button:focus,
.ui.inverted.black.basic.buttons .button:focus,
.ui.inverted.black.basic.button:focus {
  box-shadow: 0px 0px 0px 2px #000000 inset !important;
  color: #545454 !important;
}

.ui.inverted.black.basic.buttons .active.button,
.ui.inverted.black.buttons .basic.active.button,
.ui.inverted.black.basic.active.button {
  box-shadow: 0px 0px 0px 2px #000000 inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.black.basic.buttons .button:active,
.ui.inverted.black.buttons .basic.button:active,
.ui.inverted.black.basic.button:active {
  box-shadow: 0px 0px 0px 2px #000000 inset !important;
  color: #FFFFFF !important;
}

/*--- Grey ---*/

.ui.grey.buttons .button,
.ui.grey.button {
  background-color: #767676;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.grey.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.grey.buttons .button:hover,
.ui.grey.button:hover {
  background-color: #838383;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.grey.buttons .button:focus,
.ui.grey.button:focus {
  background-color: #8a8a8a;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.grey.buttons .button:active,
.ui.grey.button:active {
  background-color: #909090;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.grey.buttons .active.button,
.ui.grey.buttons .active.button:active,
.ui.grey.active.button,
.ui.grey.button .active.button:active {
  background-color: #696969;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */

.ui.basic.grey.buttons .button,
.ui.basic.grey.button {
  box-shadow: 0px 0px 0px 1px #767676 inset !important;
  color: #767676 !important;
}

.ui.basic.grey.buttons .button:hover,
.ui.basic.grey.button:hover {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #838383 inset !important;
  color: #838383 !important;
}

.ui.basic.grey.buttons .button:focus,
.ui.basic.grey.button:focus {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #8a8a8a inset !important;
  color: #838383 !important;
}

.ui.basic.grey.buttons .active.button,
.ui.basic.grey.active.button {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #696969 inset !important;
  color: #909090 !important;
}

.ui.basic.grey.buttons .button:active,
.ui.basic.grey.button:active {
  box-shadow: 0px 0px 0px 1px #909090 inset !important;
  color: #909090 !important;
}

.ui.buttons:not(.vertical) > .basic.grey.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */

.ui.inverted.grey.buttons .button,
.ui.inverted.grey.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px #D4D4D5 inset !important;
  color: #FFFFFF;
}

.ui.inverted.grey.buttons .button:hover,
.ui.inverted.grey.button:hover,
.ui.inverted.grey.buttons .button:focus,
.ui.inverted.grey.button:focus,
.ui.inverted.grey.buttons .button.active,
.ui.inverted.grey.button.active,
.ui.inverted.grey.buttons .button:active,
.ui.inverted.grey.button:active {
  box-shadow: none !important;
  color: rgba(0, 0, 0, 0.6);
}

.ui.inverted.grey.buttons .button:hover,
.ui.inverted.grey.button:hover {
  background-color: #cfd0d2;
}

.ui.inverted.grey.buttons .button:focus,
.ui.inverted.grey.button:focus {
  background-color: #c7c9cb;
}

.ui.inverted.grey.buttons .active.button,
.ui.inverted.grey.active.button {
  background-color: #cfd0d2;
}

.ui.inverted.grey.buttons .button:active,
.ui.inverted.grey.button:active {
  background-color: #c2c4c5;
}

/* Inverted Basic */

.ui.inverted.grey.basic.buttons .button,
.ui.inverted.grey.buttons .basic.button,
.ui.inverted.grey.basic.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.grey.basic.buttons .button:hover,
.ui.inverted.grey.buttons .basic.button:hover,
.ui.inverted.grey.basic.button:hover {
  box-shadow: 0px 0px 0px 2px #cfd0d2 inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.grey.basic.buttons .button:focus,
.ui.inverted.grey.basic.buttons .button:focus,
.ui.inverted.grey.basic.button:focus {
  box-shadow: 0px 0px 0px 2px #c7c9cb inset !important;
  color: #DCDDDE !important;
}

.ui.inverted.grey.basic.buttons .active.button,
.ui.inverted.grey.buttons .basic.active.button,
.ui.inverted.grey.basic.active.button {
  box-shadow: 0px 0px 0px 2px #cfd0d2 inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.grey.basic.buttons .button:active,
.ui.inverted.grey.buttons .basic.button:active,
.ui.inverted.grey.basic.button:active {
  box-shadow: 0px 0px 0px 2px #c2c4c5 inset !important;
  color: #FFFFFF !important;
}

/*--- Brown ---*/

.ui.brown.buttons .button,
.ui.brown.button {
  background-color: #A5673F;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.brown.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.brown.buttons .button:hover,
.ui.brown.button:hover {
  background-color: #975b33;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.brown.buttons .button:focus,
.ui.brown.button:focus {
  background-color: #90532b;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.brown.buttons .button:active,
.ui.brown.button:active {
  background-color: #805031;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.brown.buttons .active.button,
.ui.brown.buttons .active.button:active,
.ui.brown.active.button,
.ui.brown.button .active.button:active {
  background-color: #995a31;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */

.ui.basic.brown.buttons .button,
.ui.basic.brown.button {
  box-shadow: 0px 0px 0px 1px #A5673F inset !important;
  color: #A5673F !important;
}

.ui.basic.brown.buttons .button:hover,
.ui.basic.brown.button:hover {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #975b33 inset !important;
  color: #975b33 !important;
}

.ui.basic.brown.buttons .button:focus,
.ui.basic.brown.button:focus {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #90532b inset !important;
  color: #975b33 !important;
}

.ui.basic.brown.buttons .active.button,
.ui.basic.brown.active.button {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #995a31 inset !important;
  color: #805031 !important;
}

.ui.basic.brown.buttons .button:active,
.ui.basic.brown.button:active {
  box-shadow: 0px 0px 0px 1px #805031 inset !important;
  color: #805031 !important;
}

.ui.buttons:not(.vertical) > .basic.brown.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */

.ui.inverted.brown.buttons .button,
.ui.inverted.brown.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px #D67C1C inset !important;
  color: #D67C1C;
}

.ui.inverted.brown.buttons .button:hover,
.ui.inverted.brown.button:hover,
.ui.inverted.brown.buttons .button:focus,
.ui.inverted.brown.button:focus,
.ui.inverted.brown.buttons .button.active,
.ui.inverted.brown.button.active,
.ui.inverted.brown.buttons .button:active,
.ui.inverted.brown.button:active {
  box-shadow: none !important;
  color: #FFFFFF;
}

.ui.inverted.brown.buttons .button:hover,
.ui.inverted.brown.button:hover {
  background-color: #c86f11;
}

.ui.inverted.brown.buttons .button:focus,
.ui.inverted.brown.button:focus {
  background-color: #c16808;
}

.ui.inverted.brown.buttons .active.button,
.ui.inverted.brown.active.button {
  background-color: #cc6f0d;
}

.ui.inverted.brown.buttons .button:active,
.ui.inverted.brown.button:active {
  background-color: #a96216;
}

/* Inverted Basic */

.ui.inverted.brown.basic.buttons .button,
.ui.inverted.brown.buttons .basic.button,
.ui.inverted.brown.basic.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.brown.basic.buttons .button:hover,
.ui.inverted.brown.buttons .basic.button:hover,
.ui.inverted.brown.basic.button:hover {
  box-shadow: 0px 0px 0px 2px #c86f11 inset !important;
  color: #D67C1C !important;
}

.ui.inverted.brown.basic.buttons .button:focus,
.ui.inverted.brown.basic.buttons .button:focus,
.ui.inverted.brown.basic.button:focus {
  box-shadow: 0px 0px 0px 2px #c16808 inset !important;
  color: #D67C1C !important;
}

.ui.inverted.brown.basic.buttons .active.button,
.ui.inverted.brown.buttons .basic.active.button,
.ui.inverted.brown.basic.active.button {
  box-shadow: 0px 0px 0px 2px #cc6f0d inset !important;
  color: #D67C1C !important;
}

.ui.inverted.brown.basic.buttons .button:active,
.ui.inverted.brown.buttons .basic.button:active,
.ui.inverted.brown.basic.button:active {
  box-shadow: 0px 0px 0px 2px #a96216 inset !important;
  color: #D67C1C !important;
}

/*--- Blue ---*/

.ui.blue.buttons .button,
.ui.blue.button {
  background-color: #2185D0;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.blue.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.blue.buttons .button:hover,
.ui.blue.button:hover {
  background-color: #1678c2;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.blue.buttons .button:focus,
.ui.blue.button:focus {
  background-color: #0d71bb;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.blue.buttons .button:active,
.ui.blue.button:active {
  background-color: #1a69a4;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.blue.buttons .active.button,
.ui.blue.buttons .active.button:active,
.ui.blue.active.button,
.ui.blue.button .active.button:active {
  background-color: #1279c6;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */

.ui.basic.blue.buttons .button,
.ui.basic.blue.button {
  box-shadow: 0px 0px 0px 1px #2185D0 inset !important;
  color: #2185D0 !important;
}

.ui.basic.blue.buttons .button:hover,
.ui.basic.blue.button:hover {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #1678c2 inset !important;
  color: #1678c2 !important;
}

.ui.basic.blue.buttons .button:focus,
.ui.basic.blue.button:focus {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #0d71bb inset !important;
  color: #1678c2 !important;
}

.ui.basic.blue.buttons .active.button,
.ui.basic.blue.active.button {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #1279c6 inset !important;
  color: #1a69a4 !important;
}

.ui.basic.blue.buttons .button:active,
.ui.basic.blue.button:active {
  box-shadow: 0px 0px 0px 1px #1a69a4 inset !important;
  color: #1a69a4 !important;
}

.ui.buttons:not(.vertical) > .basic.blue.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */

.ui.inverted.blue.buttons .button,
.ui.inverted.blue.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px #54C8FF inset !important;
  color: #54C8FF;
}

.ui.inverted.blue.buttons .button:hover,
.ui.inverted.blue.button:hover,
.ui.inverted.blue.buttons .button:focus,
.ui.inverted.blue.button:focus,
.ui.inverted.blue.buttons .button.active,
.ui.inverted.blue.button.active,
.ui.inverted.blue.buttons .button:active,
.ui.inverted.blue.button:active {
  box-shadow: none !important;
  color: #FFFFFF;
}

.ui.inverted.blue.buttons .button:hover,
.ui.inverted.blue.button:hover {
  background-color: #3ac0ff;
}

.ui.inverted.blue.buttons .button:focus,
.ui.inverted.blue.button:focus {
  background-color: #2bbbff;
}

.ui.inverted.blue.buttons .active.button,
.ui.inverted.blue.active.button {
  background-color: #3ac0ff;
}

.ui.inverted.blue.buttons .button:active,
.ui.inverted.blue.button:active {
  background-color: #21b8ff;
}

/* Inverted Basic */

.ui.inverted.blue.basic.buttons .button,
.ui.inverted.blue.buttons .basic.button,
.ui.inverted.blue.basic.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.blue.basic.buttons .button:hover,
.ui.inverted.blue.buttons .basic.button:hover,
.ui.inverted.blue.basic.button:hover {
  box-shadow: 0px 0px 0px 2px #3ac0ff inset !important;
  color: #54C8FF !important;
}

.ui.inverted.blue.basic.buttons .button:focus,
.ui.inverted.blue.basic.buttons .button:focus,
.ui.inverted.blue.basic.button:focus {
  box-shadow: 0px 0px 0px 2px #2bbbff inset !important;
  color: #54C8FF !important;
}

.ui.inverted.blue.basic.buttons .active.button,
.ui.inverted.blue.buttons .basic.active.button,
.ui.inverted.blue.basic.active.button {
  box-shadow: 0px 0px 0px 2px #3ac0ff inset !important;
  color: #54C8FF !important;
}

.ui.inverted.blue.basic.buttons .button:active,
.ui.inverted.blue.buttons .basic.button:active,
.ui.inverted.blue.basic.button:active {
  box-shadow: 0px 0px 0px 2px #21b8ff inset !important;
  color: #54C8FF !important;
}

/*--- Green ---*/

.ui.green.buttons .button,
.ui.green.button {
  background-color: #21BA45;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.green.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.green.buttons .button:hover,
.ui.green.button:hover {
  background-color: #16ab39;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.green.buttons .button:focus,
.ui.green.button:focus {
  background-color: #0ea432;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.green.buttons .button:active,
.ui.green.button:active {
  background-color: #198f35;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.green.buttons .active.button,
.ui.green.buttons .active.button:active,
.ui.green.active.button,
.ui.green.button .active.button:active {
  background-color: #13ae38;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */

.ui.basic.green.buttons .button,
.ui.basic.green.button {
  box-shadow: 0px 0px 0px 1px #21BA45 inset !important;
  color: #21BA45 !important;
}

.ui.basic.green.buttons .button:hover,
.ui.basic.green.button:hover {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #16ab39 inset !important;
  color: #16ab39 !important;
}

.ui.basic.green.buttons .button:focus,
.ui.basic.green.button:focus {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #0ea432 inset !important;
  color: #16ab39 !important;
}

.ui.basic.green.buttons .active.button,
.ui.basic.green.active.button {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #13ae38 inset !important;
  color: #198f35 !important;
}

.ui.basic.green.buttons .button:active,
.ui.basic.green.button:active {
  box-shadow: 0px 0px 0px 1px #198f35 inset !important;
  color: #198f35 !important;
}

.ui.buttons:not(.vertical) > .basic.green.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */

.ui.inverted.green.buttons .button,
.ui.inverted.green.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px #2ECC40 inset !important;
  color: #2ECC40;
}

.ui.inverted.green.buttons .button:hover,
.ui.inverted.green.button:hover,
.ui.inverted.green.buttons .button:focus,
.ui.inverted.green.button:focus,
.ui.inverted.green.buttons .button.active,
.ui.inverted.green.button.active,
.ui.inverted.green.buttons .button:active,
.ui.inverted.green.button:active {
  box-shadlightOw: none !important;
  color: #FFFFFF;
}

.ui.inverted.green.buttons .button:hover,
.ui.inverted.green.button:hover {
  background-color: #22be34;
}

.ui.inverted.green.buttons .button:focus,
.ui.inverted.green.button:focus {
  background-color: #19b82b;
}

.ui.inverted.green.buttons .active.button,
.ui.inverted.green.active.button {
  background-color: #1fc231;
}

.ui.inverted.green.buttons .button:active,
.ui.inverted.green.button:active {
  background-color: #25a233;
}

/* Inverted Basic */

.ui.inverted.green.basic.buttons .button,
.ui.inverted.green.buttons .basic.button,
.ui.inverted.green.basic.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.green.basic.buttons .button:hover,
.ui.inverted.green.buttons .basic.button:hover,
.ui.inverted.green.basic.button:hover {
  box-shadow: 0px 0px 0px 2px #22be34 inset !important;
  color: #2ECC40 !important;
}

.ui.inverted.green.basic.buttons .button:focus,
.ui.inverted.green.basic.buttons .button:focus,
.ui.inverted.green.basic.button:focus {
  box-shadow: 0px 0px 0px 2px #19b82b inset !important;
  color: #2ECC40 !important;
}

.ui.inverted.green.basic.buttons .active.button,
.ui.inverted.green.buttons .basic.active.button,
.ui.inverted.green.basic.active.button {
  box-shadow: 0px 0px 0px 2px #1fc231 inset !important;
  color: #2ECC40 !important;
}

.ui.inverted.green.basic.buttons .button:active,
.ui.inverted.green.buttons .basic.button:active,
.ui.inverted.green.basic.button:active {
  box-shadow: 0px 0px 0px 2px #25a233 inset !important;
  color: #2ECC40 !important;
}

/*--- Orange ---*/

.ui.orange.buttons .button,
.ui.orange.button {
  background-color: #F2711C;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.orange.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.orange.buttons .button:hover,
.ui.orange.button:hover {
  background-color: #f26202;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.orange.buttons .button:focus,
.ui.orange.button:focus {
  background-color: #e55b00;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.orange.buttons .button:active,
.ui.orange.button:active {
  background-color: #cf590c;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.orange.buttons .active.button,
.ui.orange.buttons .active.button:active,
.ui.orange.active.button,
.ui.orange.button .active.button:active {
  background-color: #f56100;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */

.ui.basic.orange.buttons .button,
.ui.basic.orange.button {
  box-shadow: 0px 0px 0px 1px #F2711C inset !important;
  color: #F2711C !important;
}

.ui.basic.orange.buttons .button:hover,
.ui.basic.orange.button:hover {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #f26202 inset !important;
  color: #f26202 !important;
}

.ui.basic.orange.buttons .button:focus,
.ui.basic.orange.button:focus {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #e55b00 inset !important;
  color: #f26202 !important;
}

.ui.basic.orange.buttons .active.button,
.ui.basic.orange.active.button {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #f56100 inset !important;
  color: #cf590c !important;
}

.ui.basic.orange.buttons .button:active,
.ui.basic.orange.button:active {
  box-shadow: 0px 0px 0px 1px #cf590c inset !important;
  color: #cf590c !important;
}

.ui.buttons:not(.vertical) > .basic.orange.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */

.ui.inverted.orange.buttons .button,
.ui.inverted.orange.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px #FF851B inset !important;
  color: #FF851B;
}

.ui.inverted.orange.buttons .button:hover,
.ui.inverted.orange.button:hover,
.ui.inverted.orange.buttons .button:focus,
.ui.inverted.orange.button:focus,
.ui.inverted.orange.buttons .button.active,
.ui.inverted.orange.button.active,
.ui.inverted.orange.buttons .button:active,
.ui.inverted.orange.button:active {
  box-shadow: none !important;
  color: #FFFFFF;
}

.ui.inverted.orange.buttons .button:hover,
.ui.inverted.orange.button:hover {
  background-color: #ff7701;
}

.ui.inverted.orange.buttons .button:focus,
.ui.inverted.orange.button:focus {
  background-color: #f17000;
}

.ui.inverted.orange.buttons .active.button,
.ui.inverted.orange.active.button {
  background-color: #ff7701;
}

.ui.inverted.orange.buttons .button:active,
.ui.inverted.orange.button:active {
  background-color: #e76b00;
}

/* Inverted Basic */

.ui.inverted.orange.basic.buttons .button,
.ui.inverted.orange.buttons .basic.button,
.ui.inverted.orange.basic.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.orange.basic.buttons .button:hover,
.ui.inverted.orange.buttons .basic.button:hover,
.ui.inverted.orange.basic.button:hover {
  box-shadow: 0px 0px 0px 2px #ff7701 inset !important;
  color: #FF851B !important;
}

.ui.inverted.orange.basic.buttons .button:focus,
.ui.inverted.orange.basic.buttons .button:focus,
.ui.inverted.orange.basic.button:focus {
  box-shadow: 0px 0px 0px 2px #f17000 inset !important;
  color: #FF851B !important;
}

.ui.inverted.orange.basic.buttons .active.button,
.ui.inverted.orange.buttons .basic.active.button,
.ui.inverted.orange.basic.active.button {
  box-shadow: 0px 0px 0px 2px #ff7701 inset !important;
  color: #FF851B !important;
}

.ui.inverted.orange.basic.buttons .button:active,
.ui.inverted.orange.buttons .basic.button:active,
.ui.inverted.orange.basic.button:active {
  box-shadow: 0px 0px 0px 2px #e76b00 inset !important;
  color: #FF851B !important;
}

/*--- Pink ---*/

.ui.pink.buttons .button,
.ui.pink.button {
  background-color: #E03997;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.pink.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.pink.buttons .button:hover,
.ui.pink.button:hover {
  background-color: #e61a8d;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.pink.buttons .button:focus,
.ui.pink.button:focus {
  background-color: #e10f85;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.pink.buttons .button:active,
.ui.pink.button:active {
  background-color: #c71f7e;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.pink.buttons .active.button,
.ui.pink.buttons .active.button:active,
.ui.pink.active.button,
.ui.pink.button .active.button:active {
  background-color: #ea158d;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */

.ui.basic.pink.buttons .button,
.ui.basic.pink.button {
  box-shadow: 0px 0px 0px 1px #E03997 inset !important;
  color: #E03997 !important;
}

.ui.basic.pink.buttons .button:hover,
.ui.basic.pink.button:hover {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #e61a8d inset !important;
  color: #e61a8d !important;
}

.ui.basic.pink.buttons .button:focus,
.ui.basic.pink.button:focus {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #e10f85 inset !important;
  color: #e61a8d !important;
}

.ui.basic.pink.buttons .active.button,
.ui.basic.pink.active.button {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #ea158d inset !important;
  color: #c71f7e !important;
}

.ui.basic.pink.buttons .button:active,
.ui.basic.pink.button:active {
  box-shadow: 0px 0px 0px 1px #c71f7e inset !important;
  color: #c71f7e !important;
}

.ui.buttons:not(.vertical) > .basic.pink.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */

.ui.inverted.pink.buttons .button,
.ui.inverted.pink.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px #FF8EDF inset !important;
  color: #FF8EDF;
}

.ui.inverted.pink.buttons .button:hover,
.ui.inverted.pink.button:hover,
.ui.inverted.pink.buttons .button:focus,
.ui.inverted.pink.button:focus,
.ui.inverted.pink.buttons .button.active,
.ui.inverted.pink.button.active,
.ui.inverted.pink.buttons .button:active,
.ui.inverted.pink.button:active {
  box-shadow: none !important;
  color: #FFFFFF;
}

.ui.inverted.pink.buttons .button:hover,
.ui.inverted.pink.button:hover {
  background-color: #ff74d8;
}

.ui.inverted.pink.buttons .button:focus,
.ui.inverted.pink.button:focus {
  background-color: #ff65d3;
}

.ui.inverted.pink.buttons .active.button,
.ui.inverted.pink.active.button {
  background-color: #ff74d8;
}

.ui.inverted.pink.buttons .button:active,
.ui.inverted.pink.button:active {
  background-color: #ff5bd1;
}

/* Inverted Basic */

.ui.inverted.pink.basic.buttons .button,
.ui.inverted.pink.buttons .basic.button,
.ui.inverted.pink.basic.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.pink.basic.buttons .button:hover,
.ui.inverted.pink.buttons .basic.button:hover,
.ui.inverted.pink.basic.button:hover {
  box-shadow: 0px 0px 0px 2px #ff74d8 inset !important;
  color: #FF8EDF !important;
}

.ui.inverted.pink.basic.buttons .button:focus,
.ui.inverted.pink.basic.buttons .button:focus,
.ui.inverted.pink.basic.button:focus {
  box-shadow: 0px 0px 0px 2px #ff65d3 inset !important;
  color: #FF8EDF !important;
}

.ui.inverted.pink.basic.buttons .active.button,
.ui.inverted.pink.buttons .basic.active.button,
.ui.inverted.pink.basic.active.button {
  box-shadow: 0px 0px 0px 2px #ff74d8 inset !important;
  color: #FF8EDF !important;
}

.ui.inverted.pink.basic.buttons .button:active,
.ui.inverted.pink.buttons .basic.button:active,
.ui.inverted.pink.basic.button:active {
  box-shadow: 0px 0px 0px 2px #ff5bd1 inset !important;
  color: #FF8EDF !important;
}

/*--- Violet ---*/

.ui.violet.buttons .button,
.ui.violet.button {
  background-color: #6435C9;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.violet.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.violet.buttons .button:hover,
.ui.violet.button:hover {
  background-color: #5829bb;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.violet.buttons .button:focus,
.ui.violet.button:focus {
  background-color: #4f20b5;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.violet.buttons .button:active,
.ui.violet.button:active {
  background-color: #502aa1;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.violet.buttons .active.button,
.ui.violet.buttons .active.button:active,
.ui.violet.active.button,
.ui.violet.button .active.button:active {
  background-color: #5626bf;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */

.ui.basic.violet.buttons .button,
.ui.basic.violet.button {
  box-shadow: 0px 0px 0px 1px #6435C9 inset !important;
  color: #6435C9 !important;
}

.ui.basic.violet.buttons .button:hover,
.ui.basic.violet.button:hover {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #5829bb inset !important;
  color: #5829bb !important;
}

.ui.basic.violet.buttons .button:focus,
.ui.basic.violet.button:focus {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #4f20b5 inset !important;
  color: #5829bb !important;
}

.ui.basic.violet.buttons .active.button,
.ui.basic.violet.active.button {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #5626bf inset !important;
  color: #502aa1 !important;
}

.ui.basic.violet.buttons .button:active,
.ui.basic.violet.button:active {
  box-shadow: 0px 0px 0px 1px #502aa1 inset !important;
  color: #502aa1 !important;
}

.ui.buttons:not(.vertical) > .basic.violet.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */

.ui.inverted.violet.buttons .button,
.ui.inverted.violet.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px #A291FB inset !important;
  color: #A291FB;
}

.ui.inverted.violet.buttons .button:hover,
.ui.inverted.violet.button:hover,
.ui.inverted.violet.buttons .button:focus,
.ui.inverted.violet.button:focus,
.ui.inverted.violet.buttons .button.active,
.ui.inverted.violet.button.active,
.ui.inverted.violet.buttons .button:active,
.ui.inverted.violet.button:active {
  box-shadow: none !important;
  color: #FFFFFF;
}

.ui.inverted.violet.buttons .button:hover,
.ui.inverted.violet.button:hover {
  background-color: #8a73ff;
}

.ui.inverted.violet.buttons .button:focus,
.ui.inverted.violet.button:focus {
  background-color: #7d64ff;
}

.ui.inverted.violet.buttons .active.button,
.ui.inverted.violet.active.button {
  background-color: #8a73ff;
}

.ui.inverted.violet.buttons .button:active,
.ui.inverted.violet.button:active {
  background-color: #7860f9;
}

/* Inverted Basic */

.ui.inverted.violet.basic.buttons .button,
.ui.inverted.violet.buttons .basic.button,
.ui.inverted.violet.basic.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.violet.basic.buttons .button:hover,
.ui.inverted.violet.buttons .basic.button:hover,
.ui.inverted.violet.basic.button:hover {
  box-shadow: 0px 0px 0px 2px #8a73ff inset !important;
  color: #A291FB !important;
}

.ui.inverted.violet.basic.buttons .button:focus,
.ui.inverted.violet.basic.buttons .button:focus,
.ui.inverted.violet.basic.button:focus {
  box-shadow: 0px 0px 0px 2px #7d64ff inset !important;
  color: #A291FB !important;
}

.ui.inverted.violet.basic.buttons .active.button,
.ui.inverted.violet.buttons .basic.active.button,
.ui.inverted.violet.basic.active.button {
  box-shadow: 0px 0px 0px 2px #8a73ff inset !important;
  color: #A291FB !important;
}

.ui.inverted.violet.basic.buttons .button:active,
.ui.inverted.violet.buttons .basic.button:active,
.ui.inverted.violet.basic.button:active {
  box-shadow: 0px 0px 0px 2px #7860f9 inset !important;
  color: #A291FB !important;
}

/*--- Purple ---*/

.ui.purple.buttons .button,
.ui.purple.button {
  background-color: #A333C8;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.purple.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.purple.buttons .button:hover,
.ui.purple.button:hover {
  background-color: #9627ba;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.purple.buttons .button:focus,
.ui.purple.button:focus {
  background-color: #8f1eb4;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.purple.buttons .button:active,
.ui.purple.button:active {
  background-color: #82299f;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.purple.buttons .active.button,
.ui.purple.buttons .active.button:active,
.ui.purple.active.button,
.ui.purple.button .active.button:active {
  background-color: #9724be;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */

.ui.basic.purple.buttons .button,
.ui.basic.purple.button {
  box-shadow: 0px 0px 0px 1px #A333C8 inset !important;
  color: #A333C8 !important;
}

.ui.basic.purple.buttons .button:hover,
.ui.basic.purple.button:hover {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #9627ba inset !important;
  color: #9627ba !important;
}

.ui.basic.purple.buttons .button:focus,
.ui.basic.purple.button:focus {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #8f1eb4 inset !important;
  color: #9627ba !important;
}

.ui.basic.purple.buttons .active.button,
.ui.basic.purple.active.button {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #9724be inset !important;
  color: #82299f !important;
}

.ui.basic.purple.buttons .button:active,
.ui.basic.purple.button:active {
  box-shadow: 0px 0px 0px 1px #82299f inset !important;
  color: #82299f !important;
}

.ui.buttons:not(.vertical) > .basic.purple.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */

.ui.inverted.purple.buttons .button,
.ui.inverted.purple.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px #DC73FF inset !important;
  color: #DC73FF;
}

.ui.inverted.purple.buttons .button:hover,
.ui.inverted.purple.button:hover,
.ui.inverted.purple.buttons .button:focus,
.ui.inverted.purple.button:focus,
.ui.inverted.purple.buttons .button.active,
.ui.inverted.purple.button.active,
.ui.inverted.purple.buttons .button:active,
.ui.inverted.purple.button:active {
  box-shadow: none !important;
  color: #FFFFFF;
}

.ui.inverted.purple.buttons .button:hover,
.ui.inverted.purple.button:hover {
  background-color: #d65aff;
}

.ui.inverted.purple.buttons .button:focus,
.ui.inverted.purple.button:focus {
  background-color: #d24aff;
}

.ui.inverted.purple.buttons .active.button,
.ui.inverted.purple.active.button {
  background-color: #d65aff;
}

.ui.inverted.purple.buttons .button:active,
.ui.inverted.purple.button:active {
  background-color: #cf40ff;
}

/* Inverted Basic */

.ui.inverted.purple.basic.buttons .button,
.ui.inverted.purple.buttons .basic.button,
.ui.inverted.purple.basic.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.purple.basic.buttons .button:hover,
.ui.inverted.purple.buttons .basic.button:hover,
.ui.inverted.purple.basic.button:hover {
  box-shadow: 0px 0px 0px 2px #d65aff inset !important;
  color: #DC73FF !important;
}

.ui.inverted.purple.basic.buttons .button:focus,
.ui.inverted.purple.basic.buttons .button:focus,
.ui.inverted.purple.basic.button:focus {
  box-shadow: 0px 0px 0px 2px #d24aff inset !important;
  color: #DC73FF !important;
}

.ui.inverted.purple.basic.buttons .active.button,
.ui.inverted.purple.buttons .basic.active.button,
.ui.inverted.purple.basic.active.button {
  box-shadow: 0px 0px 0px 2px #d65aff inset !important;
  color: #DC73FF !important;
}

.ui.inverted.purple.basic.buttons .button:active,
.ui.inverted.purple.buttons .basic.button:active,
.ui.inverted.purple.basic.button:active {
  box-shadow: 0px 0px 0px 2px #cf40ff inset !important;
  color: #DC73FF !important;
}

/*--- Red ---*/

.ui.red.buttons .button,
.ui.red.button {
  background-color: #DB2828;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.red.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.red.buttons .button:hover,
.ui.red.button:hover {
  background-color: #d01919;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.red.buttons .button:focus,
.ui.red.button:focus {
  background-color: #ca1010;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.red.buttons .button:active,
.ui.red.button:active {
  background-color: #b21e1e;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.red.buttons .active.button,
.ui.red.buttons .active.button:active,
.ui.red.active.button,
.ui.red.button .active.button:active {
  background-color: #d41515;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */

.ui.basic.red.buttons .button,
.ui.basic.red.button {
  box-shadow: 0px 0px 0px 1px #DB2828 inset !important;
  color: #DB2828 !important;
}

.ui.basic.red.buttons .button:hover,
.ui.basic.red.button:hover {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #d01919 inset !important;
  color: #d01919 !important;
}

.ui.basic.red.buttons .button:focus,
.ui.basic.red.button:focus {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #ca1010 inset !important;
  color: #d01919 !important;
}

.ui.basic.red.buttons .active.button,
.ui.basic.red.active.button {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #d41515 inset !important;
  color: #b21e1e !important;
}

.ui.basic.red.buttons .button:active,
.ui.basic.red.button:active {
  box-shadow: 0px 0px 0px 1px #b21e1e inset !important;
  color: #b21e1e !important;
}

.ui.buttons:not(.vertical) > .basic.red.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */

.ui.inverted.red.buttons .button,
.ui.inverted.red.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px #FF695E inset !important;
  color: #FF695E;
}

.ui.inverted.red.buttons .button:hover,
.ui.inverted.red.button:hover,
.ui.inverted.red.buttons .button:focus,
.ui.inverted.red.button:focus,
.ui.inverted.red.buttons .button.active,
.ui.inverted.red.button.active,
.ui.inverted.red.buttons .button:active,
.ui.inverted.red.button:active {
  box-shadow: none !important;
  color: #FFFFFF;
}

.ui.inverted.red.buttons .button:hover,
.ui.inverted.red.button:hover {
  background-color: #ff5144;
}

.ui.inverted.red.buttons .button:focus,
.ui.inverted.red.button:focus {
  background-color: #ff4335;
}

.ui.inverted.red.buttons .active.button,
.ui.inverted.red.active.button {
  background-color: #ff5144;
}

.ui.inverted.red.buttons .button:active,
.ui.inverted.red.button:active {
  background-color: #ff392b;
}

/* Inverted Basic */

.ui.inverted.red.basic.buttons .button,
.ui.inverted.red.buttons .basic.button,
.ui.inverted.red.basic.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.red.basic.buttons .button:hover,
.ui.inverted.red.buttons .basic.button:hover,
.ui.inverted.red.basic.button:hover {
  box-shadow: 0px 0px 0px 2px #ff5144 inset !important;
  color: #FF695E !important;
}

.ui.inverted.red.basic.buttons .button:focus,
.ui.inverted.red.basic.buttons .button:focus,
.ui.inverted.red.basic.button:focus {
  box-shadow: 0px 0px 0px 2px #ff4335 inset !important;
  color: #FF695E !important;
}

.ui.inverted.red.basic.buttons .active.button,
.ui.inverted.red.buttons .basic.active.button,
.ui.inverted.red.basic.active.button {
  box-shadow: 0px 0px 0px 2px #ff5144 inset !important;
  color: #FF695E !important;
}

.ui.inverted.red.basic.buttons .button:active,
.ui.inverted.red.buttons .basic.button:active,
.ui.inverted.red.basic.button:active {
  box-shadow: 0px 0px 0px 2px #ff392b inset !important;
  color: #FF695E !important;
}

/*--- Teal ---*/

.ui.teal.buttons .button,
.ui.teal.button {
  background-color: #00B5AD;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.teal.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.teal.buttons .button:hover,
.ui.teal.button:hover {
  background-color: #009c95;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.teal.buttons .button:focus,
.ui.teal.button:focus {
  background-color: #008c86;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.teal.buttons .button:active,
.ui.teal.button:active {
  background-color: #00827c;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.teal.buttons .active.button,
.ui.teal.buttons .active.button:active,
.ui.teal.active.button,
.ui.teal.button .active.button:active {
  background-color: #009c95;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */

.ui.basic.teal.buttons .button,
.ui.basic.teal.button {
  box-shadow: 0px 0px 0px 1px #00B5AD inset !important;
  color: #00B5AD !important;
}

.ui.basic.teal.buttons .button:hover,
.ui.basic.teal.button:hover {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #009c95 inset !important;
  color: #009c95 !important;
}

.ui.basic.teal.buttons .button:focus,
.ui.basic.teal.button:focus {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #008c86 inset !important;
  color: #009c95 !important;
}

.ui.basic.teal.buttons .active.button,
.ui.basic.teal.active.button {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #009c95 inset !important;
  color: #00827c !important;
}

.ui.basic.teal.buttons .button:active,
.ui.basic.teal.button:active {
  box-shadow: 0px 0px 0px 1px #00827c inset !important;
  color: #00827c !important;
}

.ui.buttons:not(.vertical) > .basic.teal.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */

.ui.inverted.teal.buttons .button,
.ui.inverted.teal.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px #6DFFFF inset !important;
  color: #6DFFFF;
}

.ui.inverted.teal.buttons .button:hover,
.ui.inverted.teal.button:hover,
.ui.inverted.teal.buttons .button:focus,
.ui.inverted.teal.button:focus,
.ui.inverted.teal.buttons .button.active,
.ui.inverted.teal.button.active,
.ui.inverted.teal.buttons .button:active,
.ui.inverted.teal.button:active {
  box-shadow: none !important;
  color: rgba(0, 0, 0, 0.6);
}

.ui.inverted.teal.buttons .button:hover,
.ui.inverted.teal.button:hover {
  background-color: #54ffff;
}

.ui.inverted.teal.buttons .button:focus,
.ui.inverted.teal.button:focus {
  background-color: #44ffff;
}

.ui.inverted.teal.buttons .active.button,
.ui.inverted.teal.active.button {
  background-color: #54ffff;
}

.ui.inverted.teal.buttons .button:active,
.ui.inverted.teal.button:active {
  background-color: #3affff;
}

/* Inverted Basic */

.ui.inverted.teal.basic.buttons .button,
.ui.inverted.teal.buttons .basic.button,
.ui.inverted.teal.basic.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.teal.basic.buttons .button:hover,
.ui.inverted.teal.buttons .basic.button:hover,
.ui.inverted.teal.basic.button:hover {
  box-shadow: 0px 0px 0px 2px #54ffff inset !important;
  color: #6DFFFF !important;
}

.ui.inverted.teal.basic.buttons .button:focus,
.ui.inverted.teal.basic.buttons .button:focus,
.ui.inverted.teal.basic.button:focus {
  box-shadow: 0px 0px 0px 2px #44ffff inset !important;
  color: #6DFFFF !important;
}

.ui.inverted.teal.basic.buttons .active.button,
.ui.inverted.teal.buttons .basic.active.button,
.ui.inverted.teal.basic.active.button {
  box-shadow: 0px 0px 0px 2px #54ffff inset !important;
  color: #6DFFFF !important;
}

.ui.inverted.teal.basic.buttons .button:active,
.ui.inverted.teal.buttons .basic.button:active,
.ui.inverted.teal.basic.button:active {
  box-shadow: 0px 0px 0px 2px #3affff inset !important;
  color: #6DFFFF !important;
}

/*--- Olive ---*/

.ui.olive.buttons .button,
.ui.olive.button {
  background-color: #B5CC18;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.olive.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.olive.buttons .button:hover,
.ui.olive.button:hover {
  background-color: #a7bd0d;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.olive.buttons .button:focus,
.ui.olive.button:focus {
  background-color: #a0b605;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.olive.buttons .button:active,
.ui.olive.button:active {
  background-color: #8d9e13;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.olive.buttons .active.button,
.ui.olive.buttons .active.button:active,
.ui.olive.active.button,
.ui.olive.button .active.button:active {
  background-color: #aac109;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */

.ui.basic.olive.buttons .button,
.ui.basic.olive.button {
  box-shadow: 0px 0px 0px 1px #B5CC18 inset !important;
  color: #B5CC18 !important;
}

.ui.basic.olive.buttons .button:hover,
.ui.basic.olive.button:hover {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #a7bd0d inset !important;
  color: #a7bd0d !important;
}

.ui.basic.olive.buttons .button:focus,
.ui.basic.olive.button:focus {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #a0b605 inset !important;
  color: #a7bd0d !important;
}

.ui.basic.olive.buttons .active.button,
.ui.basic.olive.active.button {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #aac109 inset !important;
  color: #8d9e13 !important;
}

.ui.basic.olive.buttons .button:active,
.ui.basic.olive.button:active {
  box-shadow: 0px 0px 0px 1px #8d9e13 inset !important;
  color: #8d9e13 !important;
}

.ui.buttons:not(.vertical) > .basic.olive.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */

.ui.inverted.olive.buttons .button,
.ui.inverted.olive.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px #D9E778 inset !important;
  color: #D9E778;
}

.ui.inverted.olive.buttons .button:hover,
.ui.inverted.olive.button:hover,
.ui.inverted.olive.buttons .button:focus,
.ui.inverted.olive.button:focus,
.ui.inverted.olive.buttons .button.active,
.ui.inverted.olive.button.active,
.ui.inverted.olive.buttons .button:active,
.ui.inverted.olive.button:active {
  box-shadow: none !important;
  color: rgba(0, 0, 0, 0.6);
}

.ui.inverted.olive.buttons .button:hover,
.ui.inverted.olive.button:hover {
  background-color: #d8ea5c;
}

.ui.inverted.olive.buttons .button:focus,
.ui.inverted.olive.button:focus {
  background-color: #daef47;
}

.ui.inverted.olive.buttons .active.button,
.ui.inverted.olive.active.button {
  background-color: #daed59;
}

.ui.inverted.olive.buttons .button:active,
.ui.inverted.olive.button:active {
  background-color: #cddf4d;
}

/* Inverted Basic */

.ui.inverted.olive.basic.buttons .button,
.ui.inverted.olive.buttons .basic.button,
.ui.inverted.olive.basic.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.olive.basic.buttons .button:hover,
.ui.inverted.olive.buttons .basic.button:hover,
.ui.inverted.olive.basic.button:hover {
  box-shadow: 0px 0px 0px 2px #d8ea5c inset !important;
  color: #D9E778 !important;
}

.ui.inverted.olive.basic.buttons .button:focus,
.ui.inverted.olive.basic.buttons .button:focus,
.ui.inverted.olive.basic.button:focus {
  box-shadow: 0px 0px 0px 2px #daef47 inset !important;
  color: #D9E778 !important;
}

.ui.inverted.olive.basic.buttons .active.button,
.ui.inverted.olive.buttons .basic.active.button,
.ui.inverted.olive.basic.active.button {
  box-shadow: 0px 0px 0px 2px #daed59 inset !important;
  color: #D9E778 !important;
}

.ui.inverted.olive.basic.buttons .button:active,
.ui.inverted.olive.buttons .basic.button:active,
.ui.inverted.olive.basic.button:active {
  box-shadow: 0px 0px 0px 2px #cddf4d inset !important;
  color: #D9E778 !important;
}

/*--- Yellow ---*/

.ui.yellow.buttons .button,
.ui.yellow.button {
  background-color: #FBBD08;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.yellow.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.yellow.buttons .button:hover,
.ui.yellow.button:hover {
  background-color: #eaae00;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.yellow.buttons .button:focus,
.ui.yellow.button:focus {
  background-color: #daa300;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.yellow.buttons .button:active,
.ui.yellow.button:active {
  background-color: #cd9903;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.yellow.buttons .active.button,
.ui.yellow.buttons .active.button:active,
.ui.yellow.active.button,
.ui.yellow.button .active.button:active {
  background-color: #eaae00;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */

.ui.basic.yellow.buttons .button,
.ui.basic.yellow.button {
  box-shadow: 0px 0px 0px 1px #FBBD08 inset !important;
  color: #FBBD08 !important;
}

.ui.basic.yellow.buttons .button:hover,
.ui.basic.yellow.button:hover {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #eaae00 inset !important;
  color: #eaae00 !important;
}

.ui.basic.yellow.buttons .button:focus,
.ui.basic.yellow.button:focus {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #daa300 inset !important;
  color: #eaae00 !important;
}

.ui.basic.yellow.buttons .active.button,
.ui.basic.yellow.active.button {
  background: transparent !important;
  box-shadow: 0px 0px 0px 1px #eaae00 inset !important;
  color: #cd9903 !important;
}

.ui.basic.yellow.buttons .button:active,
.ui.basic.yellow.button:active {
  box-shadow: 0px 0px 0px 1px #cd9903 inset !important;
  color: #cd9903 !important;
}

.ui.buttons:not(.vertical) > .basic.yellow.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */

.ui.inverted.yellow.buttons .button,
.ui.inverted.yellow.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px #FFE21F inset !important;
  color: #FFE21F;
}

.ui.inverted.yellow.buttons .button:hover,
.ui.inverted.yellow.button:hover,
.ui.inverted.yellow.buttons .button:focus,
.ui.inverted.yellow.button:focus,
.ui.inverted.yellow.buttons .button.active,
.ui.inverted.yellow.button.active,
.ui.inverted.yellow.buttons .button:active,
.ui.inverted.yellow.button:active {
  box-shadow: none !important;
  color: rgba(0, 0, 0, 0.6);
}

.ui.inverted.yellow.buttons .button:hover,
.ui.inverted.yellow.button:hover {
  background-color: #ffdf05;
}

.ui.inverted.yellow.buttons .button:focus,
.ui.inverted.yellow.button:focus {
  background-color: #f5d500;
}

.ui.inverted.yellow.buttons .active.button,
.ui.inverted.yellow.active.button {
  background-color: #ffdf05;
}

.ui.inverted.yellow.buttons .button:active,
.ui.inverted.yellow.button:active {
  background-color: #ebcd00;
}

/* Inverted Basic */

.ui.inverted.yellow.basic.buttons .button,
.ui.inverted.yellow.buttons .basic.button,
.ui.inverted.yellow.basic.button {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}

.ui.inverted.yellow.basic.buttons .button:hover,
.ui.inverted.yellow.buttons .basic.button:hover,
.ui.inverted.yellow.basic.button:hover {
  box-shadow: 0px 0px 0px 2px #ffdf05 inset !important;
  color: #FFE21F !important;
}

.ui.inverted.yellow.basic.buttons .button:focus,
.ui.inverted.yellow.basic.buttons .button:focus,
.ui.inverted.yellow.basic.button:focus {
  box-shadow: 0px 0px 0px 2px #f5d500 inset !important;
  color: #FFE21F !important;
}

.ui.inverted.yellow.basic.buttons .active.button,
.ui.inverted.yellow.buttons .basic.active.button,
.ui.inverted.yellow.basic.active.button {
  box-shadow: 0px 0px 0px 2px #ffdf05 inset !important;
  color: #FFE21F !important;
}

.ui.inverted.yellow.basic.buttons .button:active,
.ui.inverted.yellow.buttons .basic.button:active,
.ui.inverted.yellow.basic.button:active {
  box-shadow: 0px 0px 0px 2px #ebcd00 inset !important;
  color: #FFE21F !important;
}

/*-------------------
       Primary
--------------------*/

.ui.primary.buttons .button,
.ui.primary.button {
  background-color: #2185D0;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.primary.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.primary.buttons .button:hover,
.ui.primary.button:hover {
  background-color: #1678c2;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.primary.buttons .button:focus,
.ui.primary.button:focus {
  background-color: #0d71bb;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.primary.buttons .button:active,
.ui.primary.button:active {
  background-color: #1a69a4;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.primary.buttons .active.button,
.ui.primary.active.button {
  background-color: #1279c6;
  color: #FFFFFF;
  text-shadow: none;
}

/*-------------------
      Secondary
--------------------*/

.ui.secondary.buttons .button,
.ui.secondary.button {
  background-color: #1B1C1D;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.secondary.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.secondary.buttons .button:hover,
.ui.secondary.button:hover {
  background-color: #27292a;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.secondary.buttons .button:focus,
.ui.secondary.button:focus {
  background-color: #2e3032;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.secondary.buttons .button:active,
.ui.secondary.button:active {
  background-color: #343637;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.secondary.buttons .active.button,
.ui.secondary.active.button {
  background-color: #27292a;
  color: #FFFFFF;
  text-shadow: none;
}

/*---------------
    Positive
----------------*/

.ui.positive.buttons .button,
.ui.positive.button {
  background-color: #21BA45 !important;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.positive.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.positive.buttons .button:hover,
.ui.positive.button:hover {
  background-color: #16ab39 !important;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.positive.buttons .button:focus,
.ui.positive.button:focus {
  background-color: #0ea432 !important;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.positive.buttons .button:active,
.ui.positive.button:active {
  background-color: #198f35 !important;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.positive.buttons .active.button,
.ui.positive.active.button,
.ui.positive.buttons .active.button:active {
  background-color: #13ae38;
  color: #FFFFFF;
  text-shadow: none;
}

/*---------------
     Negative
----------------*/

.ui.negative.buttons .button,
.ui.negative.button {
  background-color: #DB2828 !important;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}

.ui.negative.button {
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.negative.buttons .button:hover,
.ui.negative.button:hover {
  background-color: #d01919 !important;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.negative.buttons .button:focus,
.ui.negative.button:focus {
  background-color: #ca1010 !important;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.negative.buttons .button:active,
.ui.negative.button:active {
  background-color: #b21e1e !important;
  color: #FFFFFF;
  text-shadow: none;
}

.ui.negative.buttons .active.button,
.ui.negative.active.button,
.ui.negative.buttons .active.button:active {
  background-color: #d41515;
  color: #FFFFFF;
  text-shadow: none;
}

/*******************************
            Groups
*******************************/

.ui.buttons {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  font-size: 0em;
  vertical-align: baseline;
  margin: 0em 0.25em 0em 0em;
}

.ui.buttons:not(.basic):not(.inverted) {
  box-shadow: none;
}

/* Clearfix */

.ui.buttons:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

/* Standard Group */

.ui.buttons .button {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  margin: 0em;
  border-radius: 0em;
  margin: 0px 0px 0px 0px;
}

.ui.buttons > .ui.button:not(.basic):not(.inverted),
.ui.buttons:not(.basic):not(.inverted) > .button {
  box-shadow: 0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}

.ui.buttons .button:first-child {
  border-left: none;
  margin-left: 0em;
  border-top-left-radius: 0.28571429rem;
  border-bottom-left-radius: 0.28571429rem;
}

.ui.buttons .button:last-child {
  border-top-right-radius: 0.28571429rem;
  border-bottom-right-radius: 0.28571429rem;
}

/* Vertical  Style */

.ui.vertical.buttons {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.ui.vertical.buttons .button {
  display: block;
  float: none;
  width: 100%;
  margin: 0px 0px 0px 0px;
  box-shadow: none;
}

.ui.vertical.buttons .button:first-child,
.ui.vertical.buttons .mini.button:first-child,
.ui.vertical.buttons .tiny.button:first-child,
.ui.vertical.buttons .small.button:first-child,
.ui.vertical.buttons .massive.button:first-child,
.ui.vertical.buttons .huge.button:first-child {
  border-radius: 0.28571429rem 0.28571429rem 0px 0px;
}

.ui.vertical.buttons .button:last-child,
.ui.vertical.buttons .mini.button:last-child,
.ui.vertical.buttons .tiny.button:last-child,
.ui.vertical.buttons .small.button:last-child,
.ui.vertical.buttons .massive.button:last-child,
.ui.vertical.buttons .huge.button:last-child,
.ui.vertical.buttons .gigantic.button:last-child {
  margin-bottom: 0px;
  border-radius: 0px 0px 0.28571429rem 0.28571429rem;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Container
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Container
*******************************/

/* All Sizes */

.ui.container {
  display: block;
  max-width: 100% !important;
}

/* Mobile */

@media only screen and (max-width: 767px) {
  .ui.container {
    width: auto !important;
    margin-left: 1em !important;
    margin-right: 1em !important;
  }

  .ui.grid.container {
    width: auto !important;
  }

  .ui.relaxed.grid.container {
    width: auto !important;
  }

  .ui.very.relaxed.grid.container {
    width: auto !important;
  }
}

/* Tablet */

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.container {
    width: 723px;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .ui.grid.container {
    width: calc( 723px  +  2rem ) !important;
  }

  .ui.relaxed.grid.container {
    width: calc( 723px  +  3rem ) !important;
  }

  .ui.very.relaxed.grid.container {
    width: calc( 723px  +  5rem ) !important;
  }
}

/* Small Monitor */

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .ui.container {
    width: 933px;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .ui.grid.container {
    width: calc( 933px  +  2rem ) !important;
  }

  .ui.relaxed.grid.container {
    width: calc( 933px  +  3rem ) !important;
  }

  .ui.very.relaxed.grid.container {
    width: calc( 933px  +  5rem ) !important;
  }
}

/* Large Monitor */

@media only screen and (min-width: 1200px) {
  .ui.container {
    width: 1127px;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .ui.grid.container {
    width: calc( 1127px  +  2rem ) !important;
  }

  .ui.relaxed.grid.container {
    width: calc( 1127px  +  3rem ) !important;
  }

  .ui.very.relaxed.grid.container {
    width: calc( 1127px  +  5rem ) !important;
  }
}

/*******************************
             Types
*******************************/

/* Text Container */

.ui.text.container {
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  max-width: 700px !important;
  line-height: 1.5;
}

.ui.text.container {
  font-size: 1.14285714rem;
}

/* Fluid */

.ui.fluid.container {
  width: 100%;
}

/*******************************
           Variations
*******************************/

.ui[class*="left aligned"].container {
  text-align: left;
}

.ui[class*="center aligned"].container {
  text-align: center;
}

.ui[class*="right aligned"].container {
  text-align: right;
}

.ui.justified.container {
  text-align: justify;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Divider
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Divider
*******************************/

.ui.divider {
  margin: 1rem 0rem;
  line-height: 1;
  height: 0em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(0, 0, 0, 0.85);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/*--------------
      Basic
---------------*/

.ui.divider:not(.vertical):not(.horizontal) {
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/*--------------
    Coupling
---------------*/

/* Allow divider between each column row */

.ui.grid > .column + .divider,
.ui.grid > .row > .column + .divider {
  left: auto;
}

/*--------------
   Horizontal
---------------*/

.ui.horizontal.divider {
  display: table;
  white-space: nowrap;
  height: auto;
  margin: '';
  overflow: hidden;
  line-height: 1;
  text-align: center;
}

.ui.horizontal.divider:before,
.ui.horizontal.divider:after {
  content: '';
  display: table-cell;
  position: relative;
  top: 50%;
  width: 50%;
  background-repeat: no-repeat;
}

.ui.horizontal.divider:before {
  background-position: right 1em top 50%;
}

.ui.horizontal.divider:after {
  background-position: left 1em top 50%;
}

/*--------------
    Vertical
---------------*/

.ui.vertical.divider {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin: 0rem;
  padding: 0em;
  width: auto;
  height: 50%;
  line-height: 0em;
  text-align: center;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.ui.vertical.divider:before,
.ui.vertical.divider:after {
  position: absolute;
  left: 50%;
  content: '';
  z-index: 3;
  border-left: 1px solid rgba(34, 36, 38, 0.15);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  width: 0%;
  height: calc(100% -  1rem );
}

.ui.vertical.divider:before {
  top: -100%;
}

.ui.vertical.divider:after {
  top: auto;
  bottom: 0px;
}

/* Inside grid */

@media only screen and (max-width: 767px) {
  .ui.stackable.grid .ui.vertical.divider,
  .ui.grid .stackable.row .ui.vertical.divider {
    display: table;
    white-space: nowrap;
    height: auto;
    margin: '';
    overflow: hidden;
    line-height: 1;
    text-align: center;
    position: static;
    top: 0;
    left: 0;
    -webkit-transform: none;
    transform: none;
  }

  .ui.stackable.grid .ui.vertical.divider:before,
  .ui.grid .stackable.row .ui.vertical.divider:before,
  .ui.stackable.grid .ui.vertical.divider:after,
  .ui.grid .stackable.row .ui.vertical.divider:after {
    position: static;
    left: 0;
    border-left: none;
    border-right: none;
    content: '';
    display: table-cell;
    position: relative;
    top: 50%;
    width: 50%;
    background-repeat: no-repeat;
  }

  .ui.stackable.grid .ui.vertical.divider:before,
  .ui.grid .stackable.row .ui.vertical.divider:before {
    background-position: right 1em top 50%;
  }

  .ui.stackable.grid .ui.vertical.divider:after,
  .ui.grid .stackable.row .ui.vertical.divider:after {
    background-position: left 1em top 50%;
  }
}

/*--------------
      Icon
---------------*/

.ui.divider > .icon {
  margin: 0rem;
  font-size: 1rem;
  height: 1em;
  vertical-align: middle;
}

/*******************************
          Variations
*******************************/

/*--------------
    Hidden
---------------*/

.ui.hidden.divider {
  border-color: transparent !important;
}

.ui.hidden.divider:before,
.ui.hidden.divider:after {
  display: none;
}

/*--------------
    Inverted
---------------*/

.ui.divider.inverted,
.ui.vertical.inverted.divider,
.ui.horizontal.inverted.divider {
  color: #FFFFFF;
}

.ui.divider.inverted,
.ui.divider.inverted:after,
.ui.divider.inverted:before {
  border-top-color: rgba(34, 36, 38, 0.15) !important;
  border-left-color: rgba(34, 36, 38, 0.15) !important;
  border-bottom-color: rgba(255, 255, 255, 0.15) !important;
  border-right-color: rgba(255, 255, 255, 0.15) !important;
}

/*--------------
    Fitted
---------------*/

.ui.fitted.divider {
  margin: 0em;
}

/*--------------
    Clearing
---------------*/

.ui.clearing.divider {
  clear: both;
}

/*--------------
    Section
---------------*/

.ui.section.divider {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

/*--------------
     Sizes
---------------*/

.ui.divider {
  font-size: 1rem;
}

/*******************************
         Theme Overrides
*******************************/

.ui.horizontal.divider:before,
.ui.horizontal.divider:after {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC");
}

@media only screen and (max-width: 767px) {
  .ui.stackable.grid .ui.vertical.divider:before,
  .ui.grid .stackable.row .ui.vertical.divider:before,
  .ui.stackable.grid .ui.vertical.divider:after,
  .ui.grid .stackable.row .ui.vertical.divider:after {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC");
  }
}

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Flag
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
             Flag
*******************************/

i.flag:not(.icon) {
  display: inline-block;
  width: 16px;
  height: 11px;
  line-height: 11px;
  vertical-align: baseline;
  margin: 0em 0.5em 0em 0em;
  text-decoration: inherit;
  speak: none;
  font-smoothing: antialiased;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* Sprite */

i.flag:not(.icon):before {
  display: inline-block;
  content: '';
  background: url("themes/default/assets/images/flags.png") no-repeat -108px -1976px;
  width: 16px;
  height: 11px;
}

/* Flag Sprite Based On http://www.famfamfam.com/lab/icons/flags/ */

/*******************************
         Theme Overrides
*******************************/

i.flag.ad:before,
i.flag.andorra:before {
  background-position: 0px 0px;
}

i.flag.ae:before,
i.flag.united.arab.emirates:before,
i.flag.uae:before {
  background-position: 0px -26px;
}

i.flag.af:before,
i.flag.afghanistan:before {
  background-position: 0px -52px;
}

i.flag.ag:before,
i.flag.antigua:before {
  background-position: 0px -78px;
}

i.flag.ai:before,
i.flag.anguilla:before {
  background-position: 0px -104px;
}

i.flag.al:before,
i.flag.albania:before {
  background-position: 0px -130px;
}

i.flag.am:before,
i.flag.armenia:before {
  background-position: 0px -156px;
}

i.flag.an:before,
i.flag.netherlands.antilles:before {
  background-position: 0px -182px;
}

i.flag.ao:before,
i.flag.angola:before {
  background-position: 0px -208px;
}

i.flag.ar:before,
i.flag.argentina:before {
  background-position: 0px -234px;
}

i.flag.as:before,
i.flag.american.samoa:before {
  background-position: 0px -260px;
}

i.flag.at:before,
i.flag.austria:before {
  background-position: 0px -286px;
}

i.flag.au:before,
i.flag.australia:before {
  background-position: 0px -312px;
}

i.flag.aw:before,
i.flag.aruba:before {
  background-position: 0px -338px;
}

i.flag.ax:before,
i.flag.aland.islands:before {
  background-position: 0px -364px;
}

i.flag.az:before,
i.flag.azerbaijan:before {
  background-position: 0px -390px;
}

i.flag.ba:before,
i.flag.bosnia:before {
  background-position: 0px -416px;
}

i.flag.bb:before,
i.flag.barbados:before {
  background-position: 0px -442px;
}

i.flag.bd:before,
i.flag.bangladesh:before {
  background-position: 0px -468px;
}

i.flag.be:before,
i.flag.belgium:before {
  background-position: 0px -494px;
}

i.flag.bf:before,
i.flag.burkina.faso:before {
  background-position: 0px -520px;
}

i.flag.bg:before,
i.flag.bulgaria:before {
  background-position: 0px -546px;
}

i.flag.bh:before,
i.flag.bahrain:before {
  background-position: 0px -572px;
}

i.flag.bi:before,
i.flag.burundi:before {
  background-position: 0px -598px;
}

i.flag.bj:before,
i.flag.benin:before {
  background-position: 0px -624px;
}

i.flag.bm:before,
i.flag.bermuda:before {
  background-position: 0px -650px;
}

i.flag.bn:before,
i.flag.brunei:before {
  background-position: 0px -676px;
}

i.flag.bo:before,
i.flag.bolivia:before {
  background-position: 0px -702px;
}

i.flag.br:before,
i.flag.brazil:before {
  background-position: 0px -728px;
}

i.flag.bs:before,
i.flag.bahamas:before {
  background-position: 0px -754px;
}

i.flag.bt:before,
i.flag.bhutan:before {
  background-position: 0px -780px;
}

i.flag.bv:before,
i.flag.bouvet.island:before {
  background-position: 0px -806px;
}

i.flag.bw:before,
i.flag.botswana:before {
  background-position: 0px -832px;
}

i.flag.by:before,
i.flag.belarus:before {
  background-position: 0px -858px;
}

i.flag.bz:before,
i.flag.belize:before {
  background-position: 0px -884px;
}

i.flag.ca:before,
i.flag.canada:before {
  background-position: 0px -910px;
}

i.flag.cc:before,
i.flag.cocos.islands:before {
  background-position: 0px -962px;
}

i.flag.cd:before,
i.flag.congo:before {
  background-position: 0px -988px;
}

i.flag.cf:before,
i.flag.central.african.republic:before {
  background-position: 0px -1014px;
}

i.flag.cg:before,
i.flag.congo.brazzaville:before {
  background-position: 0px -1040px;
}

i.flag.ch:before,
i.flag.switzerland:before {
  background-position: 0px -1066px;
}

i.flag.ci:before,
i.flag.cote.divoire:before {
  background-position: 0px -1092px;
}

i.flag.ck:before,
i.flag.cook.islands:before {
  background-position: 0px -1118px;
}

i.flag.cl:before,
i.flag.chile:before {
  background-position: 0px -1144px;
}

i.flag.cm:before,
i.flag.cameroon:before {
  background-position: 0px -1170px;
}

i.flag.cn:before,
i.flag.china:before {
  background-position: 0px -1196px;
}

i.flag.co:before,
i.flag.colombia:before {
  background-position: 0px -1222px;
}

i.flag.cr:before,
i.flag.costa.rica:before {
  background-position: 0px -1248px;
}

i.flag.cs:before,
i.flag.serbia:before {
  background-position: 0px -1274px;
}

i.flag.cu:before,
i.flag.cuba:before {
  background-position: 0px -1300px;
}

i.flag.cv:before,
i.flag.cape.verde:before {
  background-position: 0px -1326px;
}

i.flag.cx:before,
i.flag.christmas.island:before {
  background-position: 0px -1352px;
}

i.flag.cy:before,
i.flag.cyprus:before {
  background-position: 0px -1378px;
}

i.flag.cz:before,
i.flag.czech.republic:before {
  background-position: 0px -1404px;
}

i.flag.de:before,
i.flag.germany:before {
  background-position: 0px -1430px;
}

i.flag.dj:before,
i.flag.djibouti:before {
  background-position: 0px -1456px;
}

i.flag.dk:before,
i.flag.denmark:before {
  background-position: 0px -1482px;
}

i.flag.dm:before,
i.flag.dominica:before {
  background-position: 0px -1508px;
}

i.flag.do:before,
i.flag.dominican.republic:before {
  background-position: 0px -1534px;
}

i.flag.dz:before,
i.flag.algeria:before {
  background-position: 0px -1560px;
}

i.flag.ec:before,
i.flag.ecuador:before {
  background-position: 0px -1586px;
}

i.flag.ee:before,
i.flag.estonia:before {
  background-position: 0px -1612px;
}

i.flag.eg:before,
i.flag.egypt:before {
  background-position: 0px -1638px;
}

i.flag.eh:before,
i.flag.western.sahara:before {
  background-position: 0px -1664px;
}

i.flag.er:before,
i.flag.eritrea:before {
  background-position: 0px -1716px;
}

i.flag.es:before,
i.flag.spain:before {
  background-position: 0px -1742px;
}

i.flag.et:before,
i.flag.ethiopia:before {
  background-position: 0px -1768px;
}

i.flag.eu:before,
i.flag.european.union:before {
  background-position: 0px -1794px;
}

i.flag.fi:before,
i.flag.finland:before {
  background-position: 0px -1846px;
}

i.flag.fj:before,
i.flag.fiji:before {
  background-position: 0px -1872px;
}

i.flag.fk:before,
i.flag.falkland.islands:before {
  background-position: 0px -1898px;
}

i.flag.fm:before,
i.flag.micronesia:before {
  background-position: 0px -1924px;
}

i.flag.fo:before,
i.flag.faroe.islands:before {
  background-position: 0px -1950px;
}

i.flag.fr:before,
i.flag.france:before {
  background-position: 0px -1976px;
}

i.flag.ga:before,
i.flag.gabon:before {
  background-position: -36px 0px;
}

i.flag.gb:before,
i.flag.united.kingdom:before {
  background-position: -36px -26px;
}

i.flag.gd:before,
i.flag.grenada:before {
  background-position: -36px -52px;
}

i.flag.ge:before,
i.flag.georgia:before {
  background-position: -36px -78px;
}

i.flag.gf:before,
i.flag.french.guiana:before {
  background-position: -36px -104px;
}

i.flag.gh:before,
i.flag.ghana:before {
  background-position: -36px -130px;
}

i.flag.gi:before,
i.flag.gibraltar:before {
  background-position: -36px -156px;
}

i.flag.gl:before,
i.flag.greenland:before {
  background-position: -36px -182px;
}

i.flag.gm:before,
i.flag.gambia:before {
  background-position: -36px -208px;
}

i.flag.gn:before,
i.flag.guinea:before {
  background-position: -36px -234px;
}

i.flag.gp:before,
i.flag.guadeloupe:before {
  background-position: -36px -260px;
}

i.flag.gq:before,
i.flag.equatorial.guinea:before {
  background-position: -36px -286px;
}

i.flag.gr:before,
i.flag.greece:before {
  background-position: -36px -312px;
}

i.flag.gs:before,
i.flag.sandwich.islands:before {
  background-position: -36px -338px;
}

i.flag.gt:before,
i.flag.guatemala:before {
  background-position: -36px -364px;
}

i.flag.gu:before,
i.flag.guam:before {
  background-position: -36px -390px;
}

i.flag.gw:before,
i.flag.guinea-bissau:before {
  background-position: -36px -416px;
}

i.flag.gy:before,
i.flag.guyana:before {
  background-position: -36px -442px;
}

i.flag.hk:before,
i.flag.hong.kong:before {
  background-position: -36px -468px;
}

i.flag.hm:before,
i.flag.heard.island:before {
  background-position: -36px -494px;
}

i.flag.hn:before,
i.flag.honduras:before {
  background-position: -36px -520px;
}

i.flag.hr:before,
i.flag.croatia:before {
  background-position: -36px -546px;
}

i.flag.ht:before,
i.flag.haiti:before {
  background-position: -36px -572px;
}

i.flag.hu:before,
i.flag.hungary:before {
  background-position: -36px -598px;
}

i.flag.id:before,
i.flag.indonesia:before {
  background-position: -36px -624px;
}

i.flag.ie:before,
i.flag.ireland:before {
  background-position: -36px -650px;
}

i.flag.il:before,
i.flag.israel:before {
  background-position: -36px -676px;
}

i.flag.in:before,
i.flag.india:before {
  background-position: -36px -702px;
}

i.flag.io:before,
i.flag.indian.ocean.territory:before {
  background-position: -36px -728px;
}

i.flag.iq:before,
i.flag.iraq:before {
  background-position: -36px -754px;
}

i.flag.ir:before,
i.flag.iran:before {
  background-position: -36px -780px;
}

i.flag.is:before,
i.flag.iceland:before {
  background-position: -36px -806px;
}

i.flag.it:before,
i.flag.italy:before {
  background-position: -36px -832px;
}

i.flag.jm:before,
i.flag.jamaica:before {
  background-position: -36px -858px;
}

i.flag.jo:before,
i.flag.jordan:before {
  background-position: -36px -884px;
}

i.flag.jp:before,
i.flag.japan:before {
  background-position: -36px -910px;
}

i.flag.ke:before,
i.flag.kenya:before {
  background-position: -36px -936px;
}

i.flag.kg:before,
i.flag.kyrgyzstan:before {
  background-position: -36px -962px;
}

i.flag.kh:before,
i.flag.cambodia:before {
  background-position: -36px -988px;
}

i.flag.ki:before,
i.flag.kiribati:before {
  background-position: -36px -1014px;
}

i.flag.km:before,
i.flag.comoros:before {
  background-position: -36px -1040px;
}

i.flag.kn:before,
i.flag.saint.kitts.and.nevis:before {
  background-position: -36px -1066px;
}

i.flag.kp:before,
i.flag.north.korea:before {
  background-position: -36px -1092px;
}

i.flag.kr:before,
i.flag.south.korea:before {
  background-position: -36px -1118px;
}

i.flag.kw:before,
i.flag.kuwait:before {
  background-position: -36px -1144px;
}

i.flag.ky:before,
i.flag.cayman.islands:before {
  background-position: -36px -1170px;
}

i.flag.kz:before,
i.flag.kazakhstan:before {
  background-position: -36px -1196px;
}

i.flag.la:before,
i.flag.laos:before {
  background-position: -36px -1222px;
}

i.flag.lb:before,
i.flag.lebanon:before {
  background-position: -36px -1248px;
}

i.flag.lc:before,
i.flag.saint.lucia:before {
  background-position: -36px -1274px;
}

i.flag.li:before,
i.flag.liechtenstein:before {
  background-position: -36px -1300px;
}

i.flag.lk:before,
i.flag.sri.lanka:before {
  background-position: -36px -1326px;
}

i.flag.lr:before,
i.flag.liberia:before {
  background-position: -36px -1352px;
}

i.flag.ls:before,
i.flag.lesotho:before {
  background-position: -36px -1378px;
}

i.flag.lt:before,
i.flag.lithuania:before {
  background-position: -36px -1404px;
}

i.flag.lu:before,
i.flag.luxembourg:before {
  background-position: -36px -1430px;
}

i.flag.lv:before,
i.flag.latvia:before {
  background-position: -36px -1456px;
}

i.flag.ly:before,
i.flag.libya:before {
  background-position: -36px -1482px;
}

i.flag.ma:before,
i.flag.morocco:before {
  background-position: -36px -1508px;
}

i.flag.mc:before,
i.flag.monaco:before {
  background-position: -36px -1534px;
}

i.flag.md:before,
i.flag.moldova:before {
  background-position: -36px -1560px;
}

i.flag.me:before,
i.flag.montenegro:before {
  background-position: -36px -1586px;
}

i.flag.mg:before,
i.flag.madagascar:before {
  background-position: -36px -1613px;
}

i.flag.mh:before,
i.flag.marshall.islands:before {
  background-position: -36px -1639px;
}

i.flag.mk:before,
i.flag.macedonia:before {
  background-position: -36px -1665px;
}

i.flag.ml:before,
i.flag.mali:before {
  background-position: -36px -1691px;
}

i.flag.mm:before,
i.flag.myanmar:before,
i.flag.burma:before {
  background-position: -36px -1717px;
}

i.flag.mn:before,
i.flag.mongolia:before {
  background-position: -36px -1743px;
}

i.flag.mo:before,
i.flag.macau:before {
  background-position: -36px -1769px;
}

i.flag.mp:before,
i.flag.northern.mariana.islands:before {
  background-position: -36px -1795px;
}

i.flag.mq:before,
i.flag.martinique:before {
  background-position: -36px -1821px;
}

i.flag.mr:before,
i.flag.mauritania:before {
  background-position: -36px -1847px;
}

i.flag.ms:before,
i.flag.montserrat:before {
  background-position: -36px -1873px;
}

i.flag.mt:before,
i.flag.malta:before {
  background-position: -36px -1899px;
}

i.flag.mu:before,
i.flag.mauritius:before {
  background-position: -36px -1925px;
}

i.flag.mv:before,
i.flag.maldives:before {
  background-position: -36px -1951px;
}

i.flag.mw:before,
i.flag.malawi:before {
  background-position: -36px -1977px;
}

i.flag.mx:before,
i.flag.mexico:before {
  background-position: -72px 0px;
}

i.flag.my:before,
i.flag.malaysia:before {
  background-position: -72px -26px;
}

i.flag.mz:before,
i.flag.mozambique:before {
  background-position: -72px -52px;
}

i.flag.na:before,
i.flag.namibia:before {
  background-position: -72px -78px;
}

i.flag.nc:before,
i.flag.new.caledonia:before {
  background-position: -72px -104px;
}

i.flag.ne:before,
i.flag.niger:before {
  background-position: -72px -130px;
}

i.flag.nf:before,
i.flag.norfolk.island:before {
  background-position: -72px -156px;
}

i.flag.ng:before,
i.flag.nigeria:before {
  background-position: -72px -182px;
}

i.flag.ni:before,
i.flag.nicaragua:before {
  background-position: -72px -208px;
}

i.flag.nl:before,
i.flag.netherlands:before {
  background-position: -72px -234px;
}

i.flag.no:before,
i.flag.norway:before {
  background-position: -72px -260px;
}

i.flag.np:before,
i.flag.nepal:before {
  background-position: -72px -286px;
}

i.flag.nr:before,
i.flag.nauru:before {
  background-position: -72px -312px;
}

i.flag.nu:before,
i.flag.niue:before {
  background-position: -72px -338px;
}

i.flag.nz:before,
i.flag.new.zealand:before {
  background-position: -72px -364px;
}

i.flag.om:before,
i.flag.oman:before {
  background-position: -72px -390px;
}

i.flag.pa:before,
i.flag.panama:before {
  background-position: -72px -416px;
}

i.flag.pe:before,
i.flag.peru:before {
  background-position: -72px -442px;
}

i.flag.pf:before,
i.flag.french.polynesia:before {
  background-position: -72px -468px;
}

i.flag.pg:before,
i.flag.new.guinea:before {
  background-position: -72px -494px;
}

i.flag.ph:before,
i.flag.philippines:before {
  background-position: -72px -520px;
}

i.flag.pk:before,
i.flag.pakistan:before {
  background-position: -72px -546px;
}

i.flag.pl:before,
i.flag.poland:before {
  background-position: -72px -572px;
}

i.flag.pm:before,
i.flag.saint.pierre:before {
  background-position: -72px -598px;
}

i.flag.pn:before,
i.flag.pitcairn.islands:before {
  background-position: -72px -624px;
}

i.flag.pr:before,
i.flag.puerto.rico:before {
  background-position: -72px -650px;
}

i.flag.ps:before,
i.flag.palestine:before {
  background-position: -72px -676px;
}

i.flag.pt:before,
i.flag.portugal:before {
  background-position: -72px -702px;
}

i.flag.pw:before,
i.flag.palau:before {
  background-position: -72px -728px;
}

i.flag.py:before,
i.flag.paraguay:before {
  background-position: -72px -754px;
}

i.flag.qa:before,
i.flag.qatar:before {
  background-position: -72px -780px;
}

i.flag.re:before,
i.flag.reunion:before {
  background-position: -72px -806px;
}

i.flag.ro:before,
i.flag.romania:before {
  background-position: -72px -832px;
}

i.flag.rs:before,
i.flag.serbia:before {
  background-position: -72px -858px;
}

i.flag.ru:before,
i.flag.russia:before {
  background-position: -72px -884px;
}

i.flag.rw:before,
i.flag.rwanda:before {
  background-position: -72px -910px;
}

i.flag.sa:before,
i.flag.saudi.arabia:before {
  background-position: -72px -936px;
}

i.flag.sb:before,
i.flag.solomon.islands:before {
  background-position: -72px -962px;
}

i.flag.sc:before,
i.flag.seychelles:before {
  background-position: -72px -988px;
}

i.flag.gb.sct:before,
i.flag.scotland:before {
  background-position: -72px -1014px;
}

i.flag.sd:before,
i.flag.sudan:before {
  background-position: -72px -1040px;
}

i.flag.se:before,
i.flag.sweden:before {
  background-position: -72px -1066px;
}

i.flag.sg:before,
i.flag.singapore:before {
  background-position: -72px -1092px;
}

i.flag.sh:before,
i.flag.saint.helena:before {
  background-position: -72px -1118px;
}

i.flag.si:before,
i.flag.slovenia:before {
  background-position: -72px -1144px;
}

i.flag.sj:before,
i.flag.svalbard:before,
i.flag.jan.mayen:before {
  background-position: -72px -1170px;
}

i.flag.sk:before,
i.flag.slovakia:before {
  background-position: -72px -1196px;
}

i.flag.sl:before,
i.flag.sierra.leone:before {
  background-position: -72px -1222px;
}

i.flag.sm:before,
i.flag.san.marino:before {
  background-position: -72px -1248px;
}

i.flag.sn:before,
i.flag.senegal:before {
  background-position: -72px -1274px;
}

i.flag.so:before,
i.flag.somalia:before {
  background-position: -72px -1300px;
}

i.flag.sr:before,
i.flag.suriname:before {
  background-position: -72px -1326px;
}

i.flag.st:before,
i.flag.sao.tome:before {
  background-position: -72px -1352px;
}

i.flag.sv:before,
i.flag.el.salvador:before {
  background-position: -72px -1378px;
}

i.flag.sy:before,
i.flag.syria:before {
  background-position: -72px -1404px;
}

i.flag.sz:before,
i.flag.swaziland:before {
  background-position: -72px -1430px;
}

i.flag.tc:before,
i.flag.caicos.islands:before {
  background-position: -72px -1456px;
}

i.flag.td:before,
i.flag.chad:before {
  background-position: -72px -1482px;
}

i.flag.tf:before,
i.flag.french.territories:before {
  background-position: -72px -1508px;
}

i.flag.tg:before,
i.flag.togo:before {
  background-position: -72px -1534px;
}

i.flag.th:before,
i.flag.thailand:before {
  background-position: -72px -1560px;
}

i.flag.tj:before,
i.flag.tajikistan:before {
  background-position: -72px -1586px;
}

i.flag.tk:before,
i.flag.tokelau:before {
  background-position: -72px -1612px;
}

i.flag.tl:before,
i.flag.timorleste:before {
  background-position: -72px -1638px;
}

i.flag.tm:before,
i.flag.turkmenistan:before {
  background-position: -72px -1664px;
}

i.flag.tn:before,
i.flag.tunisia:before {
  background-position: -72px -1690px;
}

i.flag.to:before,
i.flag.tonga:before {
  background-position: -72px -1716px;
}

i.flag.tr:before,
i.flag.turkey:before {
  background-position: -72px -1742px;
}

i.flag.tt:before,
i.flag.trinidad:before {
  background-position: -72px -1768px;
}

i.flag.tv:before,
i.flag.tuvalu:before {
  background-position: -72px -1794px;
}

i.flag.tw:before,
i.flag.taiwan:before {
  background-position: -72px -1820px;
}

i.flag.tz:before,
i.flag.tanzania:before {
  background-position: -72px -1846px;
}

i.flag.ua:before,
i.flag.ukraine:before {
  background-position: -72px -1872px;
}

i.flag.ug:before,
i.flag.uganda:before {
  background-position: -72px -1898px;
}

i.flag.um:before,
i.flag.us.minor.islands:before {
  background-position: -72px -1924px;
}

i.flag.us:before,
i.flag.america:before,
i.flag.united.states:before {
  background-position: -72px -1950px;
}

i.flag.uy:before,
i.flag.uruguay:before {
  background-position: -72px -1976px;
}

i.flag.uz:before,
i.flag.uzbekistan:before {
  background-position: -108px 0px;
}

i.flag.va:before,
i.flag.vatican.city:before {
  background-position: -108px -26px;
}

i.flag.vc:before,
i.flag.saint.vincent:before {
  background-position: -108px -52px;
}

i.flag.ve:before,
i.flag.venezuela:before {
  background-position: -108px -78px;
}

i.flag.vg:before,
i.flag.british.virgin.islands:before {
  background-position: -108px -104px;
}

i.flag.vi:before,
i.flag.us.virgin.islands:before {
  background-position: -108px -130px;
}

i.flag.vn:before,
i.flag.vietnam:before {
  background-position: -108px -156px;
}

i.flag.vu:before,
i.flag.vanuatu:before {
  background-position: -108px -182px;
}

i.flag.gb.wls:before,
i.flag.wales:before {
  background-position: -108px -208px;
}

i.flag.wf:before,
i.flag.wallis.and.futuna:before {
  background-position: -108px -234px;
}

i.flag.ws:before,
i.flag.samoa:before {
  background-position: -108px -260px;
}

i.flag.ye:before,
i.flag.yemen:before {
  background-position: -108px -286px;
}

i.flag.yt:before,
i.flag.mayotte:before {
  background-position: -108px -312px;
}

i.flag.za:before,
i.flag.south.africa:before {
  background-position: -108px -338px;
}

i.flag.zm:before,
i.flag.zambia:before {
  background-position: -108px -364px;
}

i.flag.zw:before,
i.flag.zimbabwe:before {
  background-position: -108px -390px;
}

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Header
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Header
*******************************/

/* Standard */

.ui.header {
  border: none;
  margin: calc(2rem -  0.14285em ) 0em 1rem;
  padding: 0em 0em;
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  font-weight: bold;
  line-height: 1.2857em;
  text-transform: none;
  color: rgba(0, 0, 0, 0.87);
}

.ui.header:first-child {
  margin-top: -0.14285em;
}

.ui.header:last-child {
  margin-bottom: 0em;
}

/*--------------
   Sub Header
---------------*/

.ui.header .sub.header {
  display: block;
  font-weight: normal;
  padding: 0em;
  margin: 0em;
  font-size: 1rem;
  line-height: 1.2em;
  color: rgba(0, 0, 0, 0.6);
}

/*--------------
      Icon
---------------*/

.ui.header > .icon {
  display: table-cell;
  opacity: 1;
  font-size: 1.5em;
  padding-top: 0.14285em;
  vertical-align: middle;
}

/* With Text Node */

.ui.header .icon:only-child {
  display: inline-block;
  padding: 0em;
  margin-right: 0.75rem;
}

/*-------------------
        Image
--------------------*/

.ui.header > .image,
.ui.header > img {
  display: inline-block;
  margin-top: 0.14285em;
  width: 2.5em;
  height: auto;
  vertical-align: middle;
}

.ui.header > .image:only-child,
.ui.header > img:only-child {
  margin-right: 0.75rem;
}

/*--------------
     Content
---------------*/

.ui.header .content {
  display: inline-block;
  vertical-align: top;
}

/* After Image */

.ui.header > img + .content,
.ui.header > .image + .content {
  padding-left: 0.75rem;
  vertical-align: middle;
}

/* After Icon */

.ui.header > .icon + .content {
  padding-left: 0.75rem;
  display: table-cell;
  vertical-align: middle;
}

/*--------------
 Loose Coupling
---------------*/

.ui.header .ui.label {
  font-size: '';
  margin-left: 0.5rem;
  vertical-align: middle;
}

/* Positioning */

.ui.header + p {
  margin-top: 0em;
}

/*******************************
            Types
*******************************/

/*--------------
     Page
---------------*/

h1.ui.header {
  font-size: 2rem;
}

h2.ui.header {
  font-size: 1.714rem;
}

h3.ui.header {
  font-size: 1.28rem;
}

h4.ui.header {
  font-size: 1.071rem;
}

h5.ui.header {
  font-size: 1rem;
}

/* Sub Header */

h1.ui.header .sub.header {
  font-size: 1.14285714rem;
}

h2.ui.header .sub.header {
  font-size: 1.14285714rem;
}

h3.ui.header .sub.header {
  font-size: 1rem;
}

h4.ui.header .sub.header {
  font-size: 1rem;
}

h5.ui.header .sub.header {
  font-size: 0.92857143rem;
}

/*--------------
 Content Heading
---------------*/

.ui.huge.header {
  min-height: 1em;
  font-size: 2em;
}

.ui.large.header {
  font-size: 1.714em;
}

.ui.medium.header {
  font-size: 1.28em;
}

.ui.small.header {
  font-size: 1.071em;
}

.ui.tiny.header {
  font-size: 1em;
}

/* Sub Header */

.ui.huge.header .sub.header {
  font-size: 1.14285714rem;
}

.ui.large.header .sub.header {
  font-size: 1.14285714rem;
}

.ui.header .sub.header {
  font-size: 1rem;
}

.ui.small.header .sub.header {
  font-size: 1rem;
}

.ui.tiny.header .sub.header {
  font-size: 0.92857143rem;
}

/*--------------
   Sub Heading
---------------*/

.ui.sub.header {
  padding: 0em;
  margin-bottom: 0.14285714rem;
  font-weight: bold;
  font-size: 0.85714286em;
  text-transform: uppercase;
  color: '';
}

.ui.small.sub.header {
  font-size: 0.71428571em;
}

.ui.sub.header {
  font-size: 0.85714286em;
}

.ui.large.sub.header {
  font-size: 0.92857143em;
}

.ui.huge.sub.header {
  font-size: 1em;
}

/*-------------------
        Icon
--------------------*/

.ui.icon.header {
  display: inline-block;
  text-align: center;
  margin: 2rem 0em 1rem;
}

.ui.icon.header:after {
  content: '';
  display: block;
  height: 0px;
  clear: both;
  visibility: hidden;
}

.ui.icon.header:first-child {
  margin-top: 0em;
}

.ui.icon.header .icon {
  float: none;
  display: block;
  width: auto;
  height: auto;
  line-height: 1;
  padding: 0em;
  font-size: 3em;
  margin: 0em auto 0.5rem;
  opacity: 1;
}

.ui.icon.header .content {
  display: block;
}

.ui.icon.header .circular.icon {
  font-size: 2em;
}

.ui.icon.header .square.icon {
  font-size: 2em;
}

.ui.block.icon.header .icon {
  margin-bottom: 0em;
}

.ui.icon.header.aligned {
  margin-left: auto;
  margin-right: auto;
  display: block;
}

/*******************************
            States
*******************************/

.ui.disabled.header {
  opacity: 0.45;
}

/*******************************
           Variations
*******************************/

/*-------------------
      Inverted
--------------------*/

.ui.inverted.header {
  color: #FFFFFF;
}

.ui.inverted.header .sub.header {
  color: rgba(255, 255, 255, 0.8);
}

.ui.inverted.attached.header {
  background: #545454 -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  background: #545454 linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  box-shadow: none;
  border-color: transparent;
}

.ui.inverted.block.header {
  background: #545454 -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  background: #545454 linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  box-shadow: none;
}

.ui.inverted.block.header {
  border-bottom: none;
}

/*-------------------
       Colors
--------------------*/

/*--- Red ---*/

.ui.red.header {
  color: #DB2828 !important;
}

a.ui.red.header:hover {
  color: #d01919 !important;
}

.ui.red.dividing.header {
  border-bottom: 2px solid #DB2828;
}

/* Inverted */

.ui.inverted.red.header {
  color: #FF695E !important;
}

a.ui.inverted.red.header:hover {
  color: #ff5144 !important;
}

/*--- Orange ---*/

.ui.orange.header {
  color: #F2711C !important;
}

a.ui.orange.header:hover {
  color: #f26202 !important;
}

.ui.orange.dividing.header {
  border-bottom: 2px solid #F2711C;
}

/* Inverted */

.ui.inverted.orange.header {
  color: #FF851B !important;
}

a.ui.inverted.orange.header:hover {
  color: #ff7701 !important;
}

/*--- Olive ---*/

.ui.olive.header {
  color: #B5CC18 !important;
}

a.ui.olive.header:hover {
  color: #a7bd0d !important;
}

.ui.olive.dividing.header {
  border-bottom: 2px solid #B5CC18;
}

/* Inverted */

.ui.inverted.olive.header {
  color: #D9E778 !important;
}

a.ui.inverted.olive.header:hover {
  color: #d8ea5c !important;
}

/*--- Yellow ---*/

.ui.yellow.header {
  color: #FBBD08 !important;
}

a.ui.yellow.header:hover {
  color: #eaae00 !important;
}

.ui.yellow.dividing.header {
  border-bottom: 2px solid #FBBD08;
}

/* Inverted */

.ui.inverted.yellow.header {
  color: #FFE21F !important;
}

a.ui.inverted.yellow.header:hover {
  color: #ffdf05 !important;
}

/*--- Green ---*/

.ui.green.header {
  color: #21BA45 !important;
}

a.ui.green.header:hover {
  color: #16ab39 !important;
}

.ui.green.dividing.header {
  border-bottom: 2px solid #21BA45;
}

/* Inverted */

.ui.inverted.green.header {
  color: #2ECC40 !important;
}

a.ui.inverted.green.header:hover {
  color: #22be34 !important;
}

/*--- Teal ---*/

.ui.teal.header {
  color: #00B5AD !important;
}

a.ui.teal.header:hover {
  color: #009c95 !important;
}

.ui.teal.dividing.header {
  border-bottom: 2px solid #00B5AD;
}

/* Inverted */

.ui.inverted.teal.header {
  color: #6DFFFF !important;
}

a.ui.inverted.teal.header:hover {
  color: #54ffff !important;
}

/*--- Blue ---*/

.ui.blue.header {
  color: #2185D0 !important;
}

a.ui.blue.header:hover {
  color: #1678c2 !important;
}

.ui.blue.dividing.header {
  border-bottom: 2px solid #2185D0;
}

/* Inverted */

.ui.inverted.blue.header {
  color: #54C8FF !important;
}

a.ui.inverted.blue.header:hover {
  color: #3ac0ff !important;
}

/*--- Violet ---*/

.ui.violet.header {
  color: #6435C9 !important;
}

a.ui.violet.header:hover {
  color: #5829bb !important;
}

.ui.violet.dividing.header {
  border-bottom: 2px solid #6435C9;
}

/* Inverted */

.ui.inverted.violet.header {
  color: #A291FB !important;
}

a.ui.inverted.violet.header:hover {
  color: #8a73ff !important;
}

/*--- Purple ---*/

.ui.purple.header {
  color: #A333C8 !important;
}

a.ui.purple.header:hover {
  color: #9627ba !important;
}

.ui.purple.dividing.header {
  border-bottom: 2px solid #A333C8;
}

/* Inverted */

.ui.inverted.purple.header {
  color: #DC73FF !important;
}

a.ui.inverted.purple.header:hover {
  color: #d65aff !important;
}

/*--- Pink ---*/

.ui.pink.header {
  color: #E03997 !important;
}

a.ui.pink.header:hover {
  color: #e61a8d !important;
}

.ui.pink.dividing.header {
  border-bottom: 2px solid #E03997;
}

/* Inverted */

.ui.inverted.pink.header {
  color: #FF8EDF !important;
}

a.ui.inverted.pink.header:hover {
  color: #ff74d8 !important;
}

/*--- Brown ---*/

.ui.brown.header {
  color: #A5673F !important;
}

a.ui.brown.header:hover {
  color: #975b33 !important;
}

.ui.brown.dividing.header {
  border-bottom: 2px solid #A5673F;
}

/* Inverted */

.ui.inverted.brown.header {
  color: #D67C1C !important;
}

a.ui.inverted.brown.header:hover {
  color: #c86f11 !important;
}

/*--- Grey ---*/

.ui.grey.header {
  color: #767676 !important;
}

a.ui.grey.header:hover {
  color: #838383 !important;
}

.ui.grey.dividing.header {
  border-bottom: 2px solid #767676;
}

/* Inverted */

.ui.inverted.grey.header {
  color: #DCDDDE !important;
}

a.ui.inverted.grey.header:hover {
  color: #cfd0d2 !important;
}

/*-------------------
       Aligned
--------------------*/

.ui.left.aligned.header {
  text-align: left;
}

.ui.right.aligned.header {
  text-align: right;
}

.ui.centered.header,
.ui.center.aligned.header {
  text-align: center;
}

.ui.justified.header {
  text-align: justify;
}

.ui.justified.header:after {
  display: inline-block;
  content: '';
  width: 100%;
}

/*-------------------
       Floated
--------------------*/

.ui.floated.header,
.ui[class*="left floated"].header {
  float: left;
  margin-top: 0em;
  margin-right: 0.5em;
}

.ui[class*="right floated"].header {
  float: right;
  margin-top: 0em;
  margin-left: 0.5em;
}

/*-------------------
       Fittted
--------------------*/

.ui.fitted.header {
  padding: 0em;
}

/*-------------------
      Dividing
--------------------*/

.ui.dividing.header {
  padding-bottom: 0.21428571rem;
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
}

.ui.dividing.header .sub.header {
  padding-bottom: 0.21428571rem;
}

.ui.dividing.header .icon {
  margin-bottom: 0em;
}

.ui.inverted.dividing.header {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

/*-------------------
        Block
--------------------*/

.ui.block.header {
  background: #F3F4F5;
  padding: 0.71428571rem 1rem;
  box-shadow: none;
  border: 1px solid #D4D4D5;
  border-radius: 0.28571429rem;
}

.ui.tiny.block.header {
  font-size: 0.85714286rem;
}

.ui.small.block.header {
  font-size: 0.92857143rem;
}

.ui.block.header:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6) {
  font-size: 1rem;
}

.ui.large.block.header {
  font-size: 1.14285714rem;
}

.ui.huge.block.header {
  font-size: 1.42857143rem;
}

/*-------------------
       Attached
--------------------*/

.ui.attached.header {
  background: #FFFFFF;
  padding: 0.71428571rem 1rem;
  margin-left: -1px;
  margin-right: -1px;
  box-shadow: none;
  border: 1px solid #D4D4D5;
}

.ui.attached.block.header {
  background: #F3F4F5;
}

.ui.attached:not(.top):not(.bottom).header {
  margin-top: 0em;
  margin-bottom: 0em;
  border-top: none;
  border-radius: 0em;
}

.ui.top.attached.header {
  margin-bottom: 0em;
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

.ui.bottom.attached.header {
  margin-top: 0em;
  border-top: none;
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}

/* Attached Sizes */

.ui.tiny.attached.header {
  font-size: 0.85714286em;
}

.ui.small.attached.header {
  font-size: 0.92857143em;
}

.ui.attached.header:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6) {
  font-size: 1em;
}

.ui.large.attached.header {
  font-size: 1.14285714em;
}

.ui.huge.attached.header {
  font-size: 1.42857143em;
}

/*-------------------
        Sizing
--------------------*/

.ui.header:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6) {
  font-size: 1.28em;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Icon
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
             Icon
*******************************/

@font-face {
  font-family: 'Icons';
  src: url("themes/default/assets/fonts/icons.eot");
  src: url("themes/default/assets/fonts/icons.eot?#iefix") format('embedded-opentype'), url("themes/default/assets/fonts/icons.woff2") format('woff2'), url("themes/default/assets/fonts/icons.woff") format('woff'), url("themes/default/assets/fonts/icons.ttf") format('truetype'), url("themes/default/assets/fonts/icons.svg#icons") format('svg');
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-decoration: inherit;
  text-transform: none;
}

i.icon {
  display: inline-block;
  opacity: 1;
  margin: 0em 0.25rem 0em 0em;
  width: 1.18em;
  height: 1em;
  font-family: 'Icons';
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  text-align: center;
  speak: none;
  font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

i.icon:before {
  background: none !important;
}

/*******************************
             Types
*******************************/

/*--------------
    Loading
---------------*/

i.icon.loading {
  height: 1em;
  line-height: 1;
  -webkit-animation: icon-loading 2s linear infinite;
  animation: icon-loading 2s linear infinite;
}

@-webkit-keyframes icon-loading {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes icon-loading {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/*******************************
             States
*******************************/

i.icon.hover {
  opacity: 1 !important;
}

i.icon.active {
  opacity: 1 !important;
}

i.emphasized.icon {
  opacity: 1 !important;
}

i.disabled.icon {
  opacity: 0.45 !important;
}

/*******************************
           Variations
*******************************/

/*-------------------
        Fitted
--------------------*/

i.fitted.icon {
  width: auto;
  margin: 0em;
}

/*-------------------
         Link
--------------------*/

i.link.icon {
  cursor: pointer;
  opacity: 0.8;
  -webkit-transition: opacity 0.1s ease;
  transition: opacity 0.1s ease;
}

i.link.icon:hover {
  opacity: 1 !important;
}

/*-------------------
      Circular
--------------------*/

i.circular.icon {
  border-radius: 500em !important;
  line-height: 1 !important;
  padding: 0.5em 0.5em !important;
  box-shadow: 0em 0em 0em 0.1em rgba(0, 0, 0, 0.1) inset;
  width: 2em !important;
  height: 2em !important;
}

i.circular.inverted.icon {
  border: none;
  box-shadow: none;
}

/*-------------------
      Flipped
--------------------*/

i.flipped.icon,
i.horizontally.flipped.icon {
  -webkit-transform: scale(-1, 1);
  transform: scale(-1, 1);
}

i.vertically.flipped.icon {
  -webkit-transform: scale(1, -1);
  transform: scale(1, -1);
}

/*-------------------
      Rotated
--------------------*/

i.rotated.icon,
i.right.rotated.icon,
i.clockwise.rotated.icon {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

i.left.rotated.icon,
i.counterclockwise.rotated.icon {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

/*-------------------
      Bordered
--------------------*/

i.bordered.icon {
  line-height: 1;
  vertical-align: baseline;
  width: 2em;
  height: 2em;
  padding: 0.5em 0.41em !important;
  box-shadow: 0em 0em 0em 0.1em rgba(0, 0, 0, 0.1) inset;
}

i.bordered.inverted.icon {
  border: none;
  box-shadow: none;
}

/*-------------------
      Inverted
--------------------*/

/* Inverted Shapes */

i.inverted.bordered.icon,
i.inverted.circular.icon {
  background-color: #1B1C1D !important;
  color: #FFFFFF !important;
}

i.inverted.icon {
  color: #FFFFFF;
}

/*-------------------
       Colors
--------------------*/

/* Red */

i.red.icon {
  color: #DB2828 !important;
}

i.inverted.red.icon {
  color: #FF695E !important;
}

i.inverted.bordered.red.icon,
i.inverted.circular.red.icon {
  background-color: #DB2828 !important;
  color: #FFFFFF !important;
}

/* Orange */

i.orange.icon {
  color: #F2711C !important;
}

i.inverted.orange.icon {
  color: #FF851B !important;
}

i.inverted.bordered.orange.icon,
i.inverted.circular.orange.icon {
  background-color: #F2711C !important;
  color: #FFFFFF !important;
}

/* Yellow */

i.yellow.icon {
  color: #FBBD08 !important;
}

i.inverted.yellow.icon {
  color: #FFE21F !important;
}

i.inverted.bordered.yellow.icon,
i.inverted.circular.yellow.icon {
  background-color: #FBBD08 !important;
  color: #FFFFFF !important;
}

/* Olive */

i.olive.icon {
  color: #B5CC18 !important;
}

i.inverted.olive.icon {
  color: #D9E778 !important;
}

i.inverted.bordered.olive.icon,
i.inverted.circular.olive.icon {
  background-color: #B5CC18 !important;
  color: #FFFFFF !important;
}

/* Green */

i.green.icon {
  color: #21BA45 !important;
}

i.inverted.green.icon {
  color: #2ECC40 !important;
}

i.inverted.bordered.green.icon,
i.inverted.circular.green.icon {
  background-color: #21BA45 !important;
  color: #FFFFFF !important;
}

/* Teal */

i.teal.icon {
  color: #00B5AD !important;
}

i.inverted.teal.icon {
  color: #6DFFFF !important;
}

i.inverted.bordered.teal.icon,
i.inverted.circular.teal.icon {
  background-color: #00B5AD !important;
  color: #FFFFFF !important;
}

/* Blue */

i.blue.icon {
  color: #2185D0 !important;
}

i.inverted.blue.icon {
  color: #54C8FF !important;
}

i.inverted.bordered.blue.icon,
i.inverted.circular.blue.icon {
  background-color: #2185D0 !important;
  color: #FFFFFF !important;
}

/* Violet */

i.violet.icon {
  color: #6435C9 !important;
}

i.inverted.violet.icon {
  color: #A291FB !important;
}

i.inverted.bordered.violet.icon,
i.inverted.circular.violet.icon {
  background-color: #6435C9 !important;
  color: #FFFFFF !important;
}

/* Purple */

i.purple.icon {
  color: #A333C8 !important;
}

i.inverted.purple.icon {
  color: #DC73FF !important;
}

i.inverted.bordered.purple.icon,
i.inverted.circular.purple.icon {
  background-color: #A333C8 !important;
  color: #FFFFFF !important;
}

/* Pink */

i.pink.icon {
  color: #E03997 !important;
}

i.inverted.pink.icon {
  color: #FF8EDF !important;
}

i.inverted.bordered.pink.icon,
i.inverted.circular.pink.icon {
  background-color: #E03997 !important;
  color: #FFFFFF !important;
}

/* Brown */

i.brown.icon {
  color: #A5673F !important;
}

i.inverted.brown.icon {
  color: #D67C1C !important;
}

i.inverted.bordered.brown.icon,
i.inverted.circular.brown.icon {
  background-color: #A5673F !important;
  color: #FFFFFF !important;
}

/* Grey */

i.grey.icon {
  color: #767676 !important;
}

i.inverted.grey.icon {
  color: #DCDDDE !important;
}

i.inverted.bordered.grey.icon,
i.inverted.circular.grey.icon {
  background-color: #767676 !important;
  color: #FFFFFF !important;
}

/* Black */

i.black.icon {
  color: #1B1C1D !important;
}

i.inverted.black.icon {
  color: #545454 !important;
}

i.inverted.bordeblack.black.icon,
i.inverted.circular.black.icon {
  background-color: #1B1C1D !important;
  color: #FFFFFF !important;
}

/*-------------------
        Sizes
--------------------*/

i.mini.icon,
i.mini.icons {
  line-height: 1;
  font-size: 0.71428571rem;
}

i.tiny.icon,
i.tiny.icons {
  line-height: 1;
  font-size: 0.85714286rem;
}

i.small.icon,
i.small.icons {
  line-height: 1;
  font-size: 0.92857143em;
}

i.icon,
i.icons {
  font-size: 1em;
}

i.large.icon,
i.large.icons {
  line-height: 1;
  vertical-align: middle;
  font-size: 1.5em;
}

i.big.icon,
i.big.icons {
  line-height: 1;
  vertical-align: middle;
  font-size: 2em;
}

i.huge.icon,
i.huge.icons {
  line-height: 1;
  vertical-align: middle;
  font-size: 4em;
}

i.massive.icon,
i.massive.icons {
  line-height: 1;
  vertical-align: middle;
  font-size: 8em;
}

/*******************************
            Groups
*******************************/

i.icons {
  display: inline-block;
  position: relative;
  line-height: 1;
}

i.icons .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  margin: 0em;
  margin: 0;
}

i.icons .icon:first-child {
  position: static;
  width: auto;
  height: auto;
  vertical-align: top;
  -webkit-transform: none;
  transform: none;
  margin-right: 0.25rem;
}

/* Corner Icon */

i.icons .corner.icon {
  top: auto;
  left: auto;
  right: 0;
  bottom: 0;
  -webkit-transform: none;
  transform: none;
  font-size: 0.45em;
  text-shadow: -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF;
}

i.icons .inverted.corner.icon {
  text-shadow: -1px -1px 0 #1B1C1D, 1px -1px 0 #1B1C1D, -1px 1px 0 #1B1C1D, 1px 1px 0 #1B1C1D;
}

/*
 * Font Awesome 4.3.0 by @davegandy - http://fontawesome.io - @fontawesome
 * License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */

/*******************************

Semantic-UI integration of font-awesome :

///class names are separated
i.icon.circle => i.icon.circle
i.icon.circle-o => i.icon.circle.outline

//abbreviation are replaced by full letters:
i.icon.ellipsis-h => i.icon.ellipsis.horizontal
i.icon.ellipsis-v => i.icon.ellipsis.vertical
.alpha => .i.icon.alphabet
.asc => .i.icon.ascending
.desc => .i.icon.descending
.alt =>.alternate

ASCII order is conserved for easier maintenance.

Icons that only have one style 'outline', 'square' etc do not require this class
for instance `lemon icon` not `lemon outline icon` since there is only one lemon

*******************************/

/*******************************
            Icons
*******************************/

/* Web Content */

i.icon.search:before {
  content: "\f002";
}

i.icon.mail.outline:before {
  content: "\f003";
}

i.icon.external:before {
  content: "\f08e";
}

i.icon.signal:before {
  content: "\f012";
}

i.icon.setting:before {
  content: "\f013";
}

i.icon.home:before {
  content: "\f015";
}

i.icon.inbox:before {
  content: "\f01c";
}

i.icon.browser:before {
  content: "\f022";
}

i.icon.tag:before {
  content: "\f02b";
}

i.icon.tags:before {
  content: "\f02c";
}

i.icon.calendar:before {
  content: "\f073";
}

i.icon.comment:before {
  content: "\f075";
}

i.icon.comments:before {
  content: "\f086";
}

i.icon.shop:before {
  content: "\f07a";
}

i.icon.privacy:before {
  content: "\f084";
}

i.icon.settings:before {
  content: "\f085";
}

i.icon.trophy:before {
  content: "\f091";
}

i.icon.payment:before {
  content: "\f09d";
}

i.icon.feed:before {
  content: "\f09e";
}

i.icon.alarm.outline:before {
  content: "\f0a2";
}

i.icon.tasks:before {
  content: "\f0ae";
}

i.icon.cloud:before {
  content: "\f0c2";
}

i.icon.lab:before {
  content: "\f0c3";
}

i.icon.mail:before {
  content: "\f0e0";
}

i.icon.idea:before {
  content: "\f0eb";
}

i.icon.dashboard:before {
  content: "\f0e4";
}

i.icon.sitemap:before {
  content: "\f0e8";
}

i.icon.alarm:before {
  content: "\f0f3";
}

i.icon.terminal:before {
  content: "\f120";
}

i.icon.code:before {
  content: "\f121";
}

i.icon.protect:before {
  content: "\f132";
}

i.icon.calendar.outline:before {
  content: "\f133";
}

i.icon.ticket:before {
  content: "\f145";
}

i.icon.external.square:before {
  content: "\f14c";
}

i.icon.map:before {
  content: "\f14e";
}

i.icon.bug:before {
  content: "\f188";
}

i.icon.mail.square:before {
  content: "\f199";
}

i.icon.history:before {
  content: "\f1da";
}

i.icon.options:before {
  content: "\f1de";
}

i.icon.comment.outline:before {
  content: "\f0e5";
}

i.icon.comments.outline:before {
  content: "\f0e6";
}

i.icon.text.telephone:before {
  content: "\f1e4";
}

i.icon.find:before {
  content: "\f1e5";
}

i.icon.wifi:before {
  content: "\f1eb";
}

i.icon.alarm.slash:before {
  content: "\f1f6";
}

i.icon.alarm.slash.outline:before {
  content: "\f1f7";
}

i.icon.copyright:before {
  content: "\f1f9";
}

i.icon.at:before {
  content: "\f1fa";
}

i.icon.eyedropper:before {
  content: "\f1fb";
}

i.icon.paint.brush:before {
  content: "\f1fc";
}

i.icon.heartbeat:before {
  content: "\f21e";
}

/* User Actions */

i.icon.download:before {
  content: "\f019";
}

i.icon.repeat:before {
  content: "\f01e";
}

i.icon.refresh:before {
  content: "\f021";
}

i.icon.lock:before {
  content: "\f023";
}

i.icon.bookmark:before {
  content: "\f02e";
}

i.icon.print:before {
  content: "\f02f";
}

i.icon.write:before {
  content: "\f040";
}

i.icon.theme:before {
  content: "\f043";
}

i.icon.adjust:before {
  content: "\f042";
}

i.icon.edit:before {
  content: "\f044";
}

i.icon.external.share:before {
  content: "\f045";
}

i.icon.ban:before {
  content: "\f05e";
}

i.icon.mail.forward:before {
  content: "\f064";
}

i.icon.share:before {
  content: "\f064";
}

i.icon.expand:before {
  content: "\f065";
}

i.icon.compress:before {
  content: "\f066";
}

i.icon.unhide:before {
  content: "\f06e";
}

i.icon.hide:before {
  content: "\f070";
}

i.icon.random:before {
  content: "\f074";
}

i.icon.retweet:before {
  content: "\f079";
}

i.icon.sign.out:before {
  content: "\f08b";
}

i.icon.pin:before {
  content: "\f08d";
}

i.icon.sign.in:before {
  content: "\f090";
}

i.icon.upload:before {
  content: "\f093";
}

i.icon.call:before {
  content: "\f095";
}

i.icon.call.square:before {
  content: "\f098";
}

i.icon.remove.bookmark:before {
  content: "\f097";
}

i.icon.unlock:before {
  content: "\f09c";
}

i.icon.configure:before {
  content: "\f0ad";
}

i.icon.filter:before {
  content: "\f0b0";
}

i.icon.wizard:before {
  content: "\f0d0";
}

i.icon.undo:before {
  content: "\f0e2";
}

i.icon.exchange:before {
  content: "\f0ec";
}

i.icon.cloud.download:before {
  content: "\f0ed";
}

i.icon.cloud.upload:before {
  content: "\f0ee";
}

i.icon.reply:before {
  content: "\f112";
}

i.icon.reply.all:before {
  content: "\f122";
}

i.icon.erase:before {
  content: "\f12d";
}

i.icon.unlock.alternate:before {
  content: "\f13e";
}

i.icon.archive:before {
  content: "\f187";
}

i.icon.translate:before {
  content: "\f1ab";
}

i.icon.recycle:before {
  content: "\f1b8";
}

i.icon.send:before {
  content: "\f1d8";
}

i.icon.send.outline:before {
  content: "\f1d9";
}

i.icon.share.alternate:before {
  content: "\f1e0";
}

i.icon.share.alternate.square:before {
  content: "\f1e1";
}

i.icon.wait:before {
  content: "\f017";
}

i.icon.write.square:before {
  content: "\f14b";
}

i.icon.share.square:before {
  content: "\f14d";
}

i.icon.add.to.cart:before {
  content: "\f217";
}

i.icon.in.cart:before {
  content: "\f218";
}

i.icon.add.user:before {
  content: "\f234";
}

i.icon.remove.user:before {
  content: "\f235";
}

/* Messages */

i.icon.help.circle:before {
  content: "\f059";
}

i.icon.info.circle:before {
  content: "\f05a";
}

i.icon.warning:before {
  content: "\f12a";
}

i.icon.warning.circle:before {
  content: "\f06a";
}

i.icon.warning.sign:before {
  content: "\f071";
}

i.icon.help:before {
  content: "\f128";
}

i.icon.info:before {
  content: "\f129";
}

i.icon.announcement:before {
  content: "\f0a1";
}

i.icon.birthday:before {
  content: "\f1fd";
}

/* Users */

i.icon.users:before {
  content: "\f0c0";
}

i.icon.doctor:before {
  content: "\f0f0";
}

i.icon.child:before {
  content: "\f1ae";
}

i.icon.user:before {
  content: "\f007";
}

i.icon.handicap:before {
  content: "\f193";
}

i.icon.student:before {
  content: "\f19d";
}

i.icon.spy:before {
  content: "\f21b";
}

/* Gender & Sexuality */

i.icon.female:before {
  content: "\f182";
}

i.icon.male:before {
  content: "\f183";
}

i.icon.woman:before {
  content: "\f221";
}

i.icon.man:before {
  content: "\f222";
}

i.icon.non.binary.transgender:before {
  content: "\f223";
}

i.icon.intergender:before {
  content: "\f224";
}

i.icon.transgender:before {
  content: "\f225";
}

i.icon.lesbian:before {
  content: "\f226";
}

i.icon.gay:before {
  content: "\f227";
}

i.icon.heterosexual:before {
  content: "\f228";
}

i.icon.other.gender:before {
  content: "\f229";
}

i.icon.other.gender.vertical:before {
  content: "\f22a";
}

i.icon.other.gender.horizontal:before {
  content: "\f22b";
}

i.icon.neuter:before {
  content: "\f22c";
}

/* View Adjustment */

i.icon.grid.layout:before {
  content: "\f00a";
}

i.icon.list.layout:before {
  content: "\f00b";
}

i.icon.block.layout:before {
  content: "\f009";
}

i.icon.zoom:before {
  content: "\f00e";
}

i.icon.zoom.out:before {
  content: "\f010";
}

i.icon.resize.vertical:before {
  content: "\f07d";
}

i.icon.resize.horizontal:before {
  content: "\f07e";
}

i.icon.maximize:before {
  content: "\f0b2";
}

i.icon.crop:before {
  content: "\f125";
}

/* Literal Objects */

i.icon.cocktail:before {
  content: "\f000";
}

i.icon.road:before {
  content: "\f018";
}

i.icon.flag:before {
  content: "\f024";
}

i.icon.book:before {
  content: "\f02d";
}

i.icon.gift:before {
  content: "\f06b";
}

i.icon.leaf:before {
  content: "\f06c";
}

i.icon.fire:before {
  content: "\f06d";
}

i.icon.plane:before {
  content: "\f072";
}

i.icon.magnet:before {
  content: "\f076";
}

i.icon.legal:before {
  content: "\f0e3";
}

i.icon.lemon:before {
  content: "\f094";
}

i.icon.world:before {
  content: "\f0ac";
}

i.icon.travel:before {
  content: "\f0b1";
}

i.icon.shipping:before {
  content: "\f0d1";
}

i.icon.money:before {
  content: "\f0d6";
}

i.icon.lightning:before {
  content: "\f0e7";
}

i.icon.rain:before {
  content: "\f0e9";
}

i.icon.treatment:before {
  content: "\f0f1";
}

i.icon.suitcase:before {
  content: "\f0f2";
}

i.icon.bar:before {
  content: "\f0fc";
}

i.icon.flag.outline:before {
  content: "\f11d";
}

i.icon.flag.checkered:before {
  content: "\f11e";
}

i.icon.puzzle:before {
  content: "\f12e";
}

i.icon.fire.extinguisher:before {
  content: "\f134";
}

i.icon.rocket:before {
  content: "\f135";
}

i.icon.anchor:before {
  content: "\f13d";
}

i.icon.bullseye:before {
  content: "\f140";
}

i.icon.sun:before {
  content: "\f185";
}

i.icon.moon:before {
  content: "\f186";
}

i.icon.fax:before {
  content: "\f1ac";
}

i.icon.life.ring:before {
  content: "\f1cd";
}

i.icon.bomb:before {
  content: "\f1e2";
}

i.icon.soccer:before {
  content: "\f1e3";
}

i.icon.calculator:before {
  content: "\f1ec";
}

i.icon.diamond:before {
  content: "\f219";
}

/* Shapes */

i.icon.crosshairs:before {
  content: "\f05b";
}

i.icon.asterisk:before {
  content: "\f069";
}

i.icon.certificate:before {
  content: "\f0a3";
}

i.icon.circle:before {
  content: "\f111";
}

i.icon.quote.left:before {
  content: "\f10d";
}

i.icon.quote.right:before {
  content: "\f10e";
}

i.icon.ellipsis.horizontal:before {
  content: "\f141";
}

i.icon.ellipsis.vertical:before {
  content: "\f142";
}

i.icon.cube:before {
  content: "\f1b2";
}

i.icon.cubes:before {
  content: "\f1b3";
}

i.icon.circle.notched:before {
  content: "\f1ce";
}

i.icon.circle.thin:before {
  content: "\f1db";
}

i.icon.square.outline:before {
  content: "\f096";
}

i.icon.square:before {
  content: "\f0c8";
}

/* Item Selection */

i.icon.checkmark:before {
  content: "\f00c";
}

i.icon.remove:before {
  content: "\f00d";
}

i.icon.checkmark.box:before {
  content: "\f046";
}

i.icon.move:before {
  content: "\f047";
}

i.icon.add.circle:before {
  content: "\f055";
}

i.icon.minus.circle:before {
  content: "\f056";
}

i.icon.remove.circle:before {
  content: "\f057";
}

i.icon.check.circle:before {
  content: "\f058";
}

i.icon.remove.circle.outline:before {
  content: "\f05c";
}

i.icon.check.circle.outline:before {
  content: "\f05d";
}

i.icon.plus:before {
  content: "\f067";
}

i.icon.minus:before {
  content: "\f068";
}

i.icon.add.square:before {
  content: "\f0fe";
}

i.icon.radio:before {
  content: "\f10c";
}

i.icon.selected.radio:before {
  content: "\f192";
}

i.icon.minus.square:before {
  content: "\f146";
}

i.icon.minus.square.outline:before {
  content: "\f147";
}

i.icon.check.square:before {
  content: "\f14a";
}

i.icon.plus.square.outline:before {
  content: "\f196";
}

i.icon.toggle.off:before {
  content: "\f204";
}

i.icon.toggle.on:before {
  content: "\f205";
}

/* Media */

i.icon.film:before {
  content: "\f008";
}

i.icon.sound:before {
  content: "\f025";
}

i.icon.photo:before {
  content: "\f030";
}

i.icon.bar.chart:before {
  content: "\f080";
}

i.icon.camera.retro:before {
  content: "\f083";
}

i.icon.newspaper:before {
  content: "\f1ea";
}

i.icon.area.chart:before {
  content: "\f1fe";
}

i.icon.pie.chart:before {
  content: "\f200";
}

i.icon.line.chart:before {
  content: "\f201";
}

/* Pointers */

i.icon.arrow.circle.outline.down:before {
  content: "\f01a";
}

i.icon.arrow.circle.outline.up:before {
  content: "\f01b";
}

i.icon.chevron.left:before {
  content: "\f053";
}

i.icon.chevron.right:before {
  content: "\f054";
}

i.icon.arrow.left:before {
  content: "\f060";
}

i.icon.arrow.right:before {
  content: "\f061";
}

i.icon.arrow.up:before {
  content: "\f062";
}

i.icon.arrow.down:before {
  content: "\f063";
}

i.icon.chevron.up:before {
  content: "\f077";
}

i.icon.chevron.down:before {
  content: "\f078";
}

i.icon.pointing.right:before {
  content: "\f0a4";
}

i.icon.pointing.left:before {
  content: "\f0a5";
}

i.icon.pointing.up:before {
  content: "\f0a6";
}

i.icon.pointing.down:before {
  content: "\f0a7";
}

i.icon.arrow.circle.left:before {
  content: "\f0a8";
}

i.icon.arrow.circle.right:before {
  content: "\f0a9";
}

i.icon.arrow.circle.up:before {
  content: "\f0aa";
}

i.icon.arrow.circle.down:before {
  content: "\f0ab";
}

i.icon.caret.down:before {
  content: "\f0d7";
}

i.icon.caret.up:before {
  content: "\f0d8";
}

i.icon.caret.left:before {
  content: "\f0d9";
}

i.icon.caret.right:before {
  content: "\f0da";
}

i.icon.angle.double.left:before {
  content: "\f100";
}

i.icon.angle.double.right:before {
  content: "\f101";
}

i.icon.angle.double.up:before {
  content: "\f102";
}

i.icon.angle.double.down:before {
  content: "\f103";
}

i.icon.angle.left:before {
  content: "\f104";
}

i.icon.angle.right:before {
  content: "\f105";
}

i.icon.angle.up:before {
  content: "\f106";
}

i.icon.angle.down:before {
  content: "\f107";
}

i.icon.chevron.circle.left:before {
  content: "\f137";
}

i.icon.chevron.circle.right:before {
  content: "\f138";
}

i.icon.chevron.circle.up:before {
  content: "\f139";
}

i.icon.chevron.circle.down:before {
  content: "\f13a";
}

i.icon.toggle.down:before {
  content: "\f150";
}

i.icon.toggle.up:before {
  content: "\f151";
}

i.icon.toggle.right:before {
  content: "\f152";
}

i.icon.long.arrow.down:before {
  content: "\f175";
}

i.icon.long.arrow.up:before {
  content: "\f176";
}

i.icon.long.arrow.left:before {
  content: "\f177";
}

i.icon.long.arrow.right:before {
  content: "\f178";
}

i.icon.arrow.circle.outline.right:before {
  content: "\f18e";
}

i.icon.arrow.circle.outline.left:before {
  content: "\f190";
}

i.icon.toggle.left:before {
  content: "\f191";
}

/* Computer */

i.icon.power:before {
  content: "\f011";
}

i.icon.trash:before {
  content: "\f1f8";
}

i.icon.trash.outline:before {
  content: "\f014";
}

i.icon.disk.outline:before {
  content: "\f0a0";
}

i.icon.desktop:before {
  content: "\f108";
}

i.icon.laptop:before {
  content: "\f109";
}

i.icon.tablet:before {
  content: "\f10a";
}

i.icon.mobile:before {
  content: "\f10b";
}

i.icon.game:before {
  content: "\f11b";
}

i.icon.keyboard:before {
  content: "\f11c";
}

i.icon.plug:before {
  content: "\f1e6";
}

/* File System */

i.icon.folder:before {
  content: "\f07b";
}

i.icon.folder.open:before {
  content: "\f07c";
}

i.icon.level.up:before {
  content: "\f148";
}

i.icon.level.down:before {
  content: "\f149";
}

i.icon.file:before {
  content: "\f15b";
}

i.icon.file.outline:before {
  content: "\f016";
}

i.icon.file.text:before {
  content: "\f15c";
}

i.icon.file.text.outline:before {
  content: "\f0f6";
}

i.icon.folder.outline:before {
  content: "\f114";
}

i.icon.folder.open.outline:before {
  content: "\f115";
}

i.icon.file.pdf.outline:before {
  content: "\f1c1";
}

i.icon.file.word.outline:before {
  content: "\f1c2";
}

i.icon.file.excel.outline:before {
  content: "\f1c3";
}

i.icon.file.powerpoint.outline:before {
  content: "\f1c4";
}

i.icon.file.image.outline:before {
  content: "\f1c5";
}

i.icon.file.archive.outline:before {
  content: "\f1c6";
}

i.icon.file.audio.outline:before {
  content: "\f1c7";
}

i.icon.file.video.outline:before {
  content: "\f1c8";
}

i.icon.file.code.outline:before {
  content: "\f1c9";
}

/* Technologies */

i.icon.barcode:before {
  content: "\f02a";
}

i.icon.qrcode:before {
  content: "\f029";
}

i.icon.fork:before {
  content: "\f126";
}

i.icon.html5:before {
  content: "\f13b";
}

i.icon.css3:before {
  content: "\f13c";
}

i.icon.rss:before {
  content: "\f09e";
}

i.icon.rss.square:before {
  content: "\f143";
}

i.icon.openid:before {
  content: "\f19b";
}

i.icon.database:before {
  content: "\f1c0";
}

i.icon.server:before {
  content: "\f233";
}

/* Rating */

i.icon.heart:before {
  content: "\f004";
}

i.icon.star:before {
  content: "\f005";
}

i.icon.empty.star:before {
  content: "\f006";
}

i.icon.thumbs.outline.up:before {
  content: "\f087";
}

i.icon.thumbs.outline.down:before {
  content: "\f088";
}

i.icon.star.half:before {
  content: "\f089";
}

i.icon.empty.heart:before {
  content: "\f08a";
}

i.icon.smile:before {
  content: "\f118";
}

i.icon.frown:before {
  content: "\f119";
}

i.icon.meh:before {
  content: "\f11a";
}

i.icon.star.half.empty:before {
  content: "\f123";
}

i.icon.thumbs.up:before {
  content: "\f164";
}

i.icon.thumbs.down:before {
  content: "\f165";
}

/* Audio */

i.icon.music:before {
  content: "\f001";
}

i.icon.video.play.outline:before {
  content: "\f01d";
}

i.icon.volume.off:before {
  content: "\f026";
}

i.icon.volume.down:before {
  content: "\f027";
}

i.icon.volume.up:before {
  content: "\f028";
}

i.icon.record:before {
  content: "\f03d";
}

i.icon.step.backward:before {
  content: "\f048";
}

i.icon.fast.backward:before {
  content: "\f049";
}

i.icon.backward:before {
  content: "\f04a";
}

i.icon.play:before {
  content: "\f04b";
}

i.icon.pause:before {
  content: "\f04c";
}

i.icon.stop:before {
  content: "\f04d";
}

i.icon.forward:before {
  content: "\f04e";
}

i.icon.fast.forward:before {
  content: "\f050";
}

i.icon.step.forward:before {
  content: "\f051";
}

i.icon.eject:before {
  content: "\f052";
}

i.icon.unmute:before {
  content: "\f130";
}

i.icon.mute:before {
  content: "\f131";
}

i.icon.video.play:before {
  content: "\f144";
}

i.icon.closed.captioning:before {
  content: "\f20a";
}

/* Map, Locations, & Transportation */

i.icon.marker:before {
  content: "\f041";
}

i.icon.coffee:before {
  content: "\f0f4";
}

i.icon.food:before {
  content: "\f0f5";
}

i.icon.building.outline:before {
  content: "\f0f7";
}

i.icon.hospital:before {
  content: "\f0f8";
}

i.icon.emergency:before {
  content: "\f0f9";
}

i.icon.first.aid:before {
  content: "\f0fa";
}

i.icon.military:before {
  content: "\f0fb";
}

i.icon.h:before {
  content: "\f0fd";
}

i.icon.location.arrow:before {
  content: "\f124";
}

i.icon.space.shuttle:before {
  content: "\f197";
}

i.icon.university:before {
  content: "\f19c";
}

i.icon.building:before {
  content: "\f1ad";
}

i.icon.paw:before {
  content: "\f1b0";
}

i.icon.spoon:before {
  content: "\f1b1";
}

i.icon.car:before {
  content: "\f1b9";
}

i.icon.taxi:before {
  content: "\f1ba";
}

i.icon.tree:before {
  content: "\f1bb";
}

i.icon.bicycle:before {
  content: "\f206";
}

i.icon.bus:before {
  content: "\f207";
}

i.icon.ship:before {
  content: "\f21a";
}

i.icon.motorcycle:before {
  content: "\f21c";
}

i.icon.street.view:before {
  content: "\f21d";
}

i.icon.hotel:before {
  content: "\f236";
}

i.icon.train:before {
  content: "\f238";
}

i.icon.subway:before {
  content: "\f239";
}

/* Tables */

i.icon.table:before {
  content: "\f0ce";
}

i.icon.columns:before {
  content: "\f0db";
}

i.icon.sort:before {
  content: "\f0dc";
}

i.icon.sort.ascending:before {
  content: "\f0de";
}

i.icon.sort.descending:before {
  content: "\f0dd";
}

i.icon.sort.alphabet.ascending:before {
  content: "\f15d";
}

i.icon.sort.alphabet.descending:before {
  content: "\f15e";
}

i.icon.sort.content.ascending:before {
  content: "\f160";
}

i.icon.sort.content.descending:before {
  content: "\f161";
}

i.icon.sort.numeric.ascending:before {
  content: "\f162";
}

i.icon.sort.numeric.descending:before {
  content: "\f163";
}

/* Text Editor */

i.icon.font:before {
  content: "\f031";
}

i.icon.bold:before {
  content: "\f032";
}

i.icon.italic:before {
  content: "\f033";
}

i.icon.text.height:before {
  content: "\f034";
}

i.icon.text.width:before {
  content: "\f035";
}

i.icon.align.left:before {
  content: "\f036";
}

i.icon.align.center:before {
  content: "\f037";
}

i.icon.align.right:before {
  content: "\f038";
}

i.icon.align.justify:before {
  content: "\f039";
}

i.icon.list:before {
  content: "\f03a";
}

i.icon.outdent:before {
  content: "\f03b";
}

i.icon.indent:before {
  content: "\f03c";
}

i.icon.linkify:before {
  content: "\f0c1";
}

i.icon.cut:before {
  content: "\f0c4";
}

i.icon.copy:before {
  content: "\f0c5";
}

i.icon.attach:before {
  content: "\f0c6";
}

i.icon.save:before {
  content: "\f0c7";
}

i.icon.content:before {
  content: "\f0c9";
}

i.icon.unordered.list:before {
  content: "\f0ca";
}

i.icon.ordered.list:before {
  content: "\f0cb";
}

i.icon.strikethrough:before {
  content: "\f0cc";
}

i.icon.underline:before {
  content: "\f0cd";
}

i.icon.paste:before {
  content: "\f0ea";
}

i.icon.unlink:before {
  content: "\f127";
}

i.icon.superscript:before {
  content: "\f12b";
}

i.icon.subscript:before {
  content: "\f12c";
}

i.icon.header:before {
  content: "\f1dc";
}

i.icon.paragraph:before {
  content: "\f1dd";
}

/* Currency */

i.icon.euro:before {
  content: "\f153";
}

i.icon.pound:before {
  content: "\f154";
}

i.icon.dollar:before {
  content: "\f155";
}

i.icon.rupee:before {
  content: "\f156";
}

i.icon.yen:before {
  content: "\f157";
}

i.icon.ruble:before {
  content: "\f158";
}

i.icon.won:before {
  content: "\f159";
}

i.icon.lira:before {
  content: "\f195";
}

i.icon.shekel:before {
  content: "\f20b";
}

/* Payment Options */

i.icon.paypal:before {
  content: "\f1ed";
}

i.icon.paypal.card:before {
  content: "\f1f4";
}

i.icon.google.wallet:before {
  content: "\f1ee";
}

i.icon.visa:before {
  content: "\f1f0";
}

i.icon.mastercard:before {
  content: "\f1f1";
}

i.icon.discover:before {
  content: "\f1f2";
}

i.icon.american.express:before {
  content: "\f1f3";
}

i.icon.stripe:before {
  content: "\f1f5";
}

/* Networks and Websites*/

i.icon.twitter.square:before {
  content: "\f081";
}

i.icon.facebook.square:before {
  content: "\f082";
}

i.icon.linkedin.square:before {
  content: "\f08c";
}

i.icon.github.square:before {
  content: "\f092";
}

i.icon.twitter:before {
  content: "\f099";
}

i.icon.facebook:before {
  content: "\f09a";
}

i.icon.github:before {
  content: "\f09b";
}

i.icon.pinterest:before {
  content: "\f0d2";
}

i.icon.pinterest.square:before {
  content: "\f0d3";
}

i.icon.google.plus.square:before {
  content: "\f0d4";
}

i.icon.google.plus:before {
  content: "\f0d5";
}

i.icon.linkedin:before {
  content: "\f0e1";
}

i.icon.github.alternate:before {
  content: "\f113";
}

i.icon.maxcdn:before {
  content: "\f136";
}

i.icon.bitcoin:before {
  content: "\f15a";
}

i.icon.youtube.square:before {
  content: "\f166";
}

i.icon.youtube:before {
  content: "\f167";
}

i.icon.xing:before {
  content: "\f168";
}

i.icon.xing.square:before {
  content: "\f169";
}

i.icon.youtube.play:before {
  content: "\f16a";
}

i.icon.dropbox:before {
  content: "\f16b";
}

i.icon.stack.overflow:before {
  content: "\f16c";
}

i.icon.instagram:before {
  content: "\f16d";
}

i.icon.flickr:before {
  content: "\f16e";
}

i.icon.adn:before {
  content: "\f170";
}

i.icon.bitbucket:before {
  content: "\f171";
}

i.icon.bitbucket.square:before {
  content: "\f172";
}

i.icon.tumblr:before {
  content: "\f173";
}

i.icon.tumblr.square:before {
  content: "\f174";
}

i.icon.apple:before {
  content: "\f179";
}

i.icon.windows:before {
  content: "\f17a";
}

i.icon.android:before {
  content: "\f17b";
}

i.icon.linux:before {
  content: "\f17c";
}

i.icon.dribbble:before {
  content: "\f17d";
}

i.icon.skype:before {
  content: "\f17e";
}

i.icon.foursquare:before {
  content: "\f180";
}

i.icon.trello:before {
  content: "\f181";
}

i.icon.gittip:before {
  content: "\f184";
}

i.icon.vk:before {
  content: "\f189";
}

i.icon.weibo:before {
  content: "\f18a";
}

i.icon.renren:before {
  content: "\f18b";
}

i.icon.pagelines:before {
  content: "\f18c";
}

i.icon.stack.exchange:before {
  content: "\f18d";
}

i.icon.vimeo:before {
  content: "\f194";
}

i.icon.slack:before {
  content: "\f198";
}

i.icon.wordpress:before {
  content: "\f19a";
}

i.icon.yahoo:before {
  content: "\f19e";
}

i.icon.google:before {
  content: "\f1a0";
}

i.icon.reddit:before {
  content: "\f1a1";
}

i.icon.reddit.square:before {
  content: "\f1a2";
}

i.icon.stumbleupon.circle:before {
  content: "\f1a3";
}

i.icon.stumbleupon:before {
  content: "\f1a4";
}

i.icon.delicious:before {
  content: "\f1a5";
}

i.icon.digg:before {
  content: "\f1a6";
}

i.icon.pied.piper:before {
  content: "\f1a7";
}

i.icon.pied.piper.alternate:before {
  content: "\f1a8";
}

i.icon.drupal:before {
  content: "\f1a9";
}

i.icon.joomla:before {
  content: "\f1aa";
}

i.icon.behance:before {
  content: "\f1b4";
}

i.icon.behance.square:before {
  content: "\f1b5";
}

i.icon.steam:before {
  content: "\f1b6";
}

i.icon.steam.square:before {
  content: "\f1b7";
}

i.icon.spotify:before {
  content: "\f1bc";
}

i.icon.deviantart:before {
  content: "\f1bd";
}

i.icon.soundcloud:before {
  content: "\f1be";
}

i.icon.vine:before {
  content: "\f1ca";
}

i.icon.codepen:before {
  content: "\f1cb";
}

i.icon.jsfiddle:before {
  content: "\f1cc";
}

i.icon.rebel:before {
  content: "\f1d0";
}

i.icon.empire:before {
  content: "\f1d1";
}

i.icon.git.square:before {
  content: "\f1d2";
}

i.icon.git:before {
  content: "\f1d3";
}

i.icon.hacker.news:before {
  content: "\f1d4";
}

i.icon.tencent.weibo:before {
  content: "\f1d5";
}

i.icon.qq:before {
  content: "\f1d6";
}

i.icon.wechat:before {
  content: "\f1d7";
}

i.icon.slideshare:before {
  content: "\f1e7";
}

i.icon.twitch:before {
  content: "\f1e8";
}

i.icon.yelp:before {
  content: "\f1e9";
}

i.icon.lastfm:before {
  content: "\f202";
}

i.icon.lastfm.square:before {
  content: "\f203";
}

i.icon.ioxhost:before {
  content: "\f208";
}

i.icon.angellist:before {
  content: "\f209";
}

i.icon.meanpath:before {
  content: "\f20c";
}

i.icon.buysellads:before {
  content: "\f20d";
}

i.icon.connectdevelop:before {
  content: "\f20e";
}

i.icon.dashcube:before {
  content: "\f210";
}

i.icon.forumbee:before {
  content: "\f211";
}

i.icon.leanpub:before {
  content: "\f212";
}

i.icon.sellsy:before {
  content: "\f213";
}

i.icon.shirtsinbulk:before {
  content: "\f214";
}

i.icon.simplybuilt:before {
  content: "\f215";
}

i.icon.skyatlas:before {
  content: "\f216";
}

i.icon.whatsapp:before {
  content: "\f232";
}

i.icon.viacoin:before {
  content: "\f237";
}

i.icon.medium:before {
  content: "\f23a";
}

/*******************************
            Aliases
*******************************/

i.icon.like:before {
  content: "\f004";
}

i.icon.favorite:before {
  content: "\f005";
}

i.icon.video:before {
  content: "\f008";
}

i.icon.check:before {
  content: "\f00c";
}

i.icon.close:before {
  content: "\f00d";
}

i.icon.cancel:before {
  content: "\f00d";
}

i.icon.delete:before {
  content: "\f00d";
}

i.icon.x:before {
  content: "\f00d";
}

i.icon.user.times:before {
  content: "\f235";
}

i.icon.user.close:before {
  content: "\f235";
}

i.icon.user.cancel:before {
  content: "\f235";
}

i.icon.user.delete:before {
  content: "\f235";
}

i.icon.user.x:before {
  content: "\f235";
}

i.icon.zoom.in:before {
  content: "\f00e";
}

i.icon.magnify:before {
  content: "\f00e";
}

i.icon.shutdown:before {
  content: "\f011";
}

i.icon.clock:before {
  content: "\f017";
}

i.icon.time:before {
  content: "\f017";
}

i.icon.play.circle.outline:before {
  content: "\f01d";
}

i.icon.headphone:before {
  content: "\f025";
}

i.icon.camera:before {
  content: "\f030";
}

i.icon.video.camera:before {
  content: "\f03d";
}

i.icon.picture:before {
  content: "\f03e";
}

i.icon.pencil:before {
  content: "\f040";
}

i.icon.compose:before {
  content: "\f040";
}

i.icon.point:before {
  content: "\f041";
}

i.icon.tint:before {
  content: "\f043";
}

i.icon.signup:before {
  content: "\f044";
}

i.icon.plus.circle:before {
  content: "\f055";
}

i.icon.dont:before {
  content: "\f05e";
}

i.icon.minimize:before {
  content: "\f066";
}

i.icon.add:before {
  content: "\f067";
}

i.icon.eye:before {
  content: "\f06e";
}

i.icon.attention:before {
  content: "\f06a";
}

i.icon.cart:before {
  content: "\f07a";
}

i.icon.shuffle:before {
  content: "\f074";
}

i.icon.talk:before {
  content: "\f075";
}

i.icon.chat:before {
  content: "\f075";
}

i.icon.shopping.cart:before {
  content: "\f07a";
}

i.icon.bar.graph:before {
  content: "\f080";
}

i.icon.area.graph:before {
  content: "\f1fe";
}

i.icon.pie.graph:before {
  content: "\f200";
}

i.icon.line.graph:before {
  content: "\f201";
}

i.icon.key:before {
  content: "\f084";
}

i.icon.cogs:before {
  content: "\f085";
}

i.icon.discussions:before {
  content: "\f086";
}

i.icon.like.outline:before {
  content: "\f087";
}

i.icon.dislike.outline:before {
  content: "\f088";
}

i.icon.heart.outline:before {
  content: "\f08a";
}

i.icon.log.out:before {
  content: "\f08b";
}

i.icon.thumb.tack:before {
  content: "\f08d";
}

i.icon.winner:before {
  content: "\f091";
}

i.icon.bookmark.outline:before {
  content: "\f097";
}

i.icon.phone:before {
  content: "\f095";
}

i.icon.phone.square:before {
  content: "\f098";
}

i.icon.credit.card:before {
  content: "\f09d";
}

i.icon.hdd.outline:before {
  content: "\f0a0";
}

i.icon.bullhorn:before {
  content: "\f0a1";
}

i.icon.bell:before {
  content: "\f0f3";
}

i.icon.bell.outline:before {
  content: "\f0a2";
}

i.icon.bell.slash:before {
  content: "\f1f6";
}

i.icon.bell.slash.outline:before {
  content: "\f1f7";
}

i.icon.hand.outline.right:before {
  content: "\f0a4";
}

i.icon.hand.outline.left:before {
  content: "\f0a5";
}

i.icon.hand.outline.up:before {
  content: "\f0a6";
}

i.icon.hand.outline.down:before {
  content: "\f0a7";
}

i.icon.globe:before {
  content: "\f0ac";
}

i.icon.wrench:before {
  content: "\f0ad";
}

i.icon.briefcase:before {
  content: "\f0b1";
}

i.icon.group:before {
  content: "\f0c0";
}

i.icon.flask:before {
  content: "\f0c3";
}

i.icon.sidebar:before {
  content: "\f0c9";
}

i.icon.bars:before {
  content: "\f0c9";
}

i.icon.list.ul:before {
  content: "\f0ca";
}

i.icon.list.ol:before {
  content: "\f0cb";
}

i.icon.numbered.list:before {
  content: "\f0cb";
}

i.icon.magic:before {
  content: "\f0d0";
}

i.icon.truck:before {
  content: "\f0d1";
}

i.icon.currency:before {
  content: "\f0d6";
}

i.icon.triangle.down:before {
  content: "\f0d7";
}

i.icon.dropdown:before {
  content: "\f0d7";
}

i.icon.triangle.up:before {
  content: "\f0d8";
}

i.icon.triangle.left:before {
  content: "\f0d9";
}

i.icon.triangle.right:before {
  content: "\f0da";
}

i.icon.envelope:before {
  content: "\f0e0";
}

i.icon.conversation:before {
  content: "\f0e6";
}

i.icon.umbrella:before {
  content: "\f0e9";
}

i.icon.clipboard:before {
  content: "\f0ea";
}

i.icon.lightbulb:before {
  content: "\f0eb";
}

i.icon.ambulance:before {
  content: "\f0f9";
}

i.icon.medkit:before {
  content: "\f0fa";
}

i.icon.fighter.jet:before {
  content: "\f0fb";
}

i.icon.beer:before {
  content: "\f0fc";
}

i.icon.plus.square:before {
  content: "\f0fe";
}

i.icon.computer:before {
  content: "\f108";
}

i.icon.circle.outline:before {
  content: "\f10c";
}

i.icon.intersex:before {
  content: "\f10c";
}

i.icon.asexual:before {
  content: "\f10c";
}

i.icon.spinner:before {
  content: "\f110";
}

i.icon.gamepad:before {
  content: "\f11b";
}

i.icon.star.half.full:before {
  content: "\f123";
}

i.icon.question:before {
  content: "\f128";
}

i.icon.eraser:before {
  content: "\f12d";
}

i.icon.microphone:before {
  content: "\f130";
}

i.icon.microphone.slash:before {
  content: "\f131";
}

i.icon.shield:before {
  content: "\f132";
}

i.icon.target:before {
  content: "\f140";
}

i.icon.play.circle:before {
  content: "\f144";
}

i.icon.pencil.square:before {
  content: "\f14b";
}

i.icon.compass:before {
  content: "\f14e";
}

i.icon.amex:before {
  content: "\f1f3";
}

i.icon.eur:before {
  content: "\f153";
}

i.icon.gbp:before {
  content: "\f154";
}

i.icon.usd:before {
  content: "\f155";
}

i.icon.inr:before {
  content: "\f156";
}

i.icon.cny:before,
i.icon.rmb:before,
i.icon.jpy:before {
  content: "\f157";
}

i.icon.rouble:before,
i.icon.rub:before {
  content: "\f158";
}

i.icon.krw:before {
  content: "\f159";
}

i.icon.btc:before {
  content: "\f15a";
}

i.icon.sheqel:before,
i.icon.ils:before {
  content: "\f20b";
}

i.icon.try:before {
  content: "\f195";
}

i.icon.zip:before {
  content: "\f187";
}

i.icon.dot.circle.outline:before {
  content: "\f192";
}

i.icon.sliders:before {
  content: "\f1de";
}

i.icon.wi-fi:before {
  content: "\f1eb";
}

i.icon.graduation:before {
  content: "\f19d";
}

i.icon.weixin:before {
  content: "\f1d7";
}

i.icon.binoculars:before {
  content: "\f1e5";
}

i.icon.gratipay:before {
  content: "\f184";
}

i.icon.genderless:before {
  content: "\f1db";
}

i.icon.teletype:before {
  content: "\f1e4";
}

i.icon.power.cord:before {
  content: "\f1e6";
}

i.icon.tty:before {
  content: "\f1e4";
}

i.icon.cc:before {
  content: "\f20a";
}

i.icon.plus.cart:before {
  content: "\f217";
}

i.icon.arrow.down.cart:before {
  content: "\f218";
}

i.icon.detective:before {
  content: "\f21b";
}

i.icon.venus:before {
  content: "\f221";
}

i.icon.mars:before {
  content: "\f222";
}

i.icon.mercury:before {
  content: "\f223";
}

i.icon.venus.double:before {
  content: "\f226";
}

i.icon.female.homosexual:before {
  content: "\f226";
}

i.icon.mars.double:before {
  content: "\f227";
}

i.icon.male.homosexual:before {
  content: "\f227";
}

i.icon.venus.mars:before {
  content: "\f228";
}

i.icon.mars.stroke:before {
  content: "\f229";
}

i.icon.mars.alternate:before {
  content: "\f229";
}

i.icon.mars.vertical:before {
  content: "\f22a";
}

i.icon.mars.horizontal:before {
  content: "\f22b";
}

i.icon.mars.stroke.vertical:before {
  content: "\f22a";
}

i.icon.mars.stroke.horizontal:before {
  content: "\f22b";
}

i.icon.facebook.official {
  content: "\f230";
}

i.icon.pinterest.official {
  content: "\f231";
}

i.icon.bed:before {
  content: "\f236";
}

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Image
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
             Image
*******************************/

.ui.image {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  background-color: transparent;
}

img.ui.image {
  display: block;
}

.ui.image svg,
.ui.image img {
  display: block;
  max-width: 100%;
  height: auto;
}

/*******************************
            States
*******************************/

.ui.hidden.images,
.ui.hidden.image {
  display: none;
}

.ui.disabled.images,
.ui.disabled.image {
  cursor: default;
  opacity: 0.45;
}

/*******************************
          Variations
*******************************/

/*--------------
     Inline
---------------*/

.ui.inline.image,
.ui.inline.image svg,
.ui.inline.image img {
  display: inline-block;
}

/*------------------
  Vertical Aligned
-------------------*/

.ui.top.aligned.images .image,
.ui.top.aligned.image,
.ui.top.aligned.image svg,
.ui.top.aligned.image img {
  display: inline-block;
  vertical-align: top;
}

.ui.middle.aligned.images .image,
.ui.middle.aligned.image,
.ui.middle.aligned.image svg,
.ui.middle.aligned.image img {
  display: inline-block;
  vertical-align: middle;
}

.ui.bottom.aligned.images .image,
.ui.bottom.aligned.image,
.ui.bottom.aligned.image svg,
.ui.bottom.aligned.image img {
  display: inline-block;
  vertical-align: bottom;
}

/*--------------
     Rounded
---------------*/

.ui.rounded.images .image,
.ui.rounded.image,
.ui.rounded.images .image > *,
.ui.rounded.image > * {
  border-radius: 0.3125em;
}

/*--------------
    Bordered
---------------*/

.ui.bordered.images .image,
.ui.bordered.images img,
.ui.bordered.images svg,
.ui.bordered.image img,
.ui.bordered.image svg,
img.ui.bordered.image {
  border: 1px solid rgba(0, 0, 0, 0.1);
}

/*--------------
    Circular
---------------*/

.ui.circular.images,
.ui.circular.image {
  overflow: hidden;
}

.ui.circular.images .image,
.ui.circular.image,
.ui.circular.images .image > *,
.ui.circular.image > * {
  border-radius: 500rem;
}

/*--------------
     Fluid
---------------*/

.ui.fluid.images,
.ui.fluid.image,
.ui.fluid.images img,
.ui.fluid.images svg,
.ui.fluid.image svg,
.ui.fluid.image img {
  display: block;
  width: 100%;
  height: auto;
}

/*--------------
     Avatar
---------------*/

.ui.avatar.images .image,
.ui.avatar.images img,
.ui.avatar.images svg,
.ui.avatar.image img,
.ui.avatar.image svg,
.ui.avatar.image {
  margin-right: 0.25em;
  display: inline-block;
  width: 2em;
  height: 2em;
  border-radius: 500rem;
}

/*-------------------
       Spaced
--------------------*/

.ui.spaced.image {
  display: inline-block !important;
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.ui[class*="left spaced"].image {
  margin-left: 0.5em;
  margin-right: 0em;
}

.ui[class*="right spaced"].image {
  margin-left: 0em;
  margin-right: 0.5em;
}

/*-------------------
       Floated
--------------------*/

.ui.floated.image,
.ui.floated.images {
  float: left;
  margin-right: 1em;
  margin-bottom: 1em;
}

.ui.right.floated.images,
.ui.right.floated.image {
  float: right;
  margin-right: 0em;
  margin-bottom: 1em;
  margin-left: 1em;
}

.ui.floated.images:last-child,
.ui.floated.image:last-child {
  margin-bottom: 0em;
}

.ui.centered.images,
.ui.centered.image {
  margin-left: auto;
  margin-right: auto;
}

/*--------------
     Sizes
---------------*/

.ui.mini.images .image,
.ui.mini.images img,
.ui.mini.images svg,
.ui.mini.image {
  width: 35px;
  height: auto;
  font-size: 0.71428571rem;
}

.ui.tiny.images .image,
.ui.tiny.images img,
.ui.tiny.images svg,
.ui.tiny.image {
  width: 80px;
  height: auto;
  font-size: 0.85714286rem;
}

.ui.small.images .image,
.ui.small.images img,
.ui.small.images svg,
.ui.small.image {
  width: 150px;
  height: auto;
  font-size: 0.92857143rem;
}

.ui.medium.images .image,
.ui.medium.images img,
.ui.medium.images svg,
.ui.medium.image {
  width: 300px;
  height: auto;
  font-size: 1rem;
}

.ui.large.images .image,
.ui.large.images img,
.ui.large.images svg,
.ui.large.image {
  width: 450px;
  height: auto;
  font-size: 1.14285714rem;
}

.ui.big.images .image,
.ui.big.images img,
.ui.big.images svg,
.ui.big.image {
  width: 600px;
  height: auto;
  font-size: 1.28571429rem;
}

.ui.huge.images .image,
.ui.huge.images img,
.ui.huge.images svg,
.ui.huge.image {
  width: 800px;
  height: auto;
  font-size: 1.42857143rem;
}

.ui.massive.images .image,
.ui.massive.images img,
.ui.massive.images svg,
.ui.massive.image {
  width: 960px;
  height: auto;
  font-size: 1.71428571rem;
}

/*******************************
              Groups
*******************************/

.ui.images {
  font-size: 0em;
  margin: 0em -0.25rem 0rem;
}

.ui.images .image,
.ui.images img,
.ui.images svg {
  display: inline-block;
  margin: 0em 0.25rem 0.5rem;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Input
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
           Standard
*******************************/

/*--------------------
        Inputs
---------------------*/

.ui.input {
  position: relative;
  font-weight: normal;
  font-style: normal;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  color: rgba(0, 0, 0, 0.87);
}

.ui.input input {
  margin: 0em;
  max-width: 100%;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  text-align: left;
  line-height: 1.2142em;
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  padding: 0.67861429em 1em;
  background: #FFFFFF;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  -webkit-transition: box-shadow 0.1s ease, border-color 0.1s ease;
  transition: box-shadow 0.1s ease, border-color 0.1s ease;
  box-shadow: none;
}

/*--------------------
      Placeholder
---------------------*/

/* browsers require these rules separate */

.ui.input input::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.4);
}

.ui.input input::-moz-placeholder {
  color: rgba(0, 0, 0, 0.4);
}

.ui.input input::-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.4);
}

/*******************************
            States
*******************************/

/*--------------------
        Disabled
---------------------*/

.ui.disabled.input,
.ui.input input[disabled] {
  opacity: 0.45;
}

.ui.disabled.input input {
  pointer-events: none;
}

/*--------------------
        Active
---------------------*/

.ui.input input:active,
.ui.input.down input {
  border-color: rgba(0, 0, 0, 0.3);
  background: #FAFAFA;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
}

/*--------------------
       Loading
---------------------*/

.ui.loading.loading.input > i.icon:before {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  margin: -0.64285714em 0em 0em -0.64285714em;
  width: 1.28571429em;
  height: 1.28571429em;
  border-radius: 500rem;
  border: 0.2em solid rgba(0, 0, 0, 0.1);
}

.ui.loading.loading.input > i.icon:after {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  margin: -0.64285714em 0em 0em -0.64285714em;
  width: 1.28571429em;
  height: 1.28571429em;
  -webkit-animation: button-spin 0.6s linear;
  animation: button-spin 0.6s linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  border-radius: 500rem;
  border-color: #767676 transparent transparent;
  border-style: solid;
  border-width: 0.2em;
  box-shadow: 0px 0px 0px 1px transparent;
}

/*--------------------
        Focus
---------------------*/

.ui.input.focus input,
.ui.input input:focus {
  border-color: #85B7D9;
  background: #FFFFFF;
  color: rgba(0, 0, 0, 0.8);
  box-shadow: none;
}

.ui.input.focus input::-webkit-input-placeholder,
.ui.input input:focus::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.87);
}

.ui.input.focus input::-moz-placeholder,
.ui.input input:focus::-moz-placeholder {
  color: rgba(0, 0, 0, 0.87);
}

.ui.input.focus input::-ms-input-placeholder,
.ui.input input:focus::-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.87);
}

/*--------------------
        Error
---------------------*/

.ui.input.error input {
  background-color: #FFF6F6;
  border-color: #E0B4B4;
  color: #9F3A38;
  box-shadow: none;
}

/* Error Placeholder */

.ui.input.error input::-webkit-input-placeholder {
  color: #e7bdbc;
}

.ui.input.error input::-moz-placeholder {
  color: #e7bdbc;
}

.ui.input.error input::-ms-input-placeholder {
  color: #e7bdbc;
}

/* Focused Error Placeholder */

.ui.input.error input:focus::-webkit-input-placeholder {
  color: #da9796;
}

.ui.input.error input:focus::-moz-placeholder {
  color: #da9796;
}

.ui.input.error input:focus::-ms-input-placeholder {
  color: #da9796;
}

/*******************************
           Variations
*******************************/

/*--------------------
      Transparent
---------------------*/

.ui.transparent.input input {
  border-color: transparent !important;
  background-color: transparent !important;
  padding: 0em !important;
  box-shadow: none !important;
}

/* Transparent Icon */

.ui.transparent.icon.input > i.icon {
  width: 1.1em;
}

.ui.transparent.icon.input > input {
  padding-left: 0em !important;
  padding-right: 2em !important;
}

.ui.transparent[class*="left icon"].input > input {
  padding-left: 2em !important;
  padding-right: 0em !important;
}

/* Transparent Inverted */

.ui.transparent.inverted.input {
  color: #FFFFFF;
}

.ui.transparent.inverted.input input {
  color: inherit;
}

.ui.transparent.inverted.input input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.ui.transparent.inverted.input input::-moz-placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.ui.transparent.inverted.input input::-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.5);
}

/*--------------------
         Icon
---------------------*/

.ui.icon.input > i.icon {
  cursor: default;
  position: absolute;
  line-height: 1;
  text-align: center;
  top: 0px;
  right: 0px;
  margin: 0em;
  height: 100%;
  width: 2.67142857em;
  opacity: 0.5;
  border-radius: 0em 0.28571429rem 0.28571429rem 0em;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}

.ui.icon.input > i.icon:not(.link) {
  pointer-events: none;
}

.ui.icon.input input {
  padding-right: 2.67142857em !important;
}

.ui.icon.input > i.icon:before,
.ui.icon.input > i.icon:after {
  left: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
  margin-top: -0.5em;
}

.ui.icon.input > i.link.icon {
  cursor: pointer;
}

.ui.icon.input > i.circular.icon {
  top: 0.35em;
  right: 0.5em;
}

/* Left Icon Input */

.ui[class*="left icon"].input > i.icon {
  right: auto;
  left: 1px;
  border-radius: 0.28571429rem 0em 0em 0.28571429rem;
}

.ui[class*="left icon"].input > i.circular.icon {
  right: auto;
  left: 0.5em;
}

.ui[class*="left icon"].input > input {
  padding-left: 2.67142857em !important;
  padding-right: 1em !important;
}

/* Focus */

.ui.icon.input > input:focus ~ i.icon {
  opacity: 1;
}

/*--------------------
        Labeled
---------------------*/

/* Adjacent Label */

.ui.labeled.input > .label {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  margin: 0;
  font-size: 1em;
}

.ui.labeled.input > .label:not(.corner) {
  padding-top: 0.78571429em;
  padding-bottom: 0.78571429em;
}

/* Regular Label on Left */

.ui.labeled.input:not([class*="corner labeled"]) .label:first-child {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.ui.labeled.input:not([class*="corner labeled"]) .label:first-child + input {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-left-color: transparent;
}

.ui.labeled.input:not([class*="corner labeled"]) .label:first-child + input:focus {
  border-left-color: #85B7D9;
}

/* Regular Label on Right */

.ui[class*="right labeled"].input input {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  border-right-color: transparent !important;
}

.ui[class*="right labeled"].input input + .label {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.ui[class*="right labeled"].input input:focus {
  border-right-color: #85B7D9 !important;
}

/* Corner Label */

.ui.labeled.input .corner.label {
  top: 1px;
  right: 1px;
  font-size: 0.64285714em;
  border-radius: 0em 0.28571429rem 0em 0em;
}

/* Spacing with corner label */

.ui[class*="corner labeled"]:not([class*="left corner labeled"]).labeled.input input {
  padding-right: 2.5em !important;
}

.ui[class*="corner labeled"].icon.input:not([class*="left corner labeled"]) > input {
  padding-right: 3.25em !important;
}

.ui[class*="corner labeled"].icon.input:not([class*="left corner labeled"]) > .icon {
  margin-right: 1.25em;
}

/* Left Labeled */

.ui[class*="left corner labeled"].labeled.input input {
  padding-left: 2.5em !important;
}

.ui[class*="left corner labeled"].icon.input > input {
  padding-left: 3.25em !important;
}

.ui[class*="left corner labeled"].icon.input > .icon {
  margin-left: 1.25em;
}

/* Corner Label Position  */

.ui.input > .ui.corner.label {
  top: 1px;
  right: 1px;
}

.ui.input > .ui.left.corner.label {
  right: auto;
  left: 1px;
}

/*--------------------
        Action
---------------------*/

.ui.action.input > .button,
.ui.action.input > .buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.ui.action.input > .button,
.ui.action.input > .buttons > .button {
  padding-top: 0.78571429em;
  padding-bottom: 0.78571429em;
  margin: 0;
}

/* Button on Right */

.ui.action.input:not([class*="left action"]) > input {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  border-right-color: transparent !important;
}

.ui.action.input:not([class*="left action"]) > .dropdown,
.ui.action.input:not([class*="left action"]) > .button,
.ui.action.input:not([class*="left action"]) > .buttons > .button {
  border-radius: 0px;
}

.ui.action.input:not([class*="left action"]) > .dropdown:last-child,
.ui.action.input:not([class*="left action"]) > .button:last-child,
.ui.action.input:not([class*="left action"]) > .buttons:last-child > .button {
  border-radius: 0px 0.28571429rem 0.28571429rem 0px;
}

/* Input Focus */

.ui.action.input:not([class*="left action"]) input:focus {
  border-right-color: #85B7D9 !important;
}

/* Button on Left */

.ui[class*="left action"].input > input {
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  border-left-color: transparent !important;
}

.ui[class*="left action"].input > .dropdown,
.ui[class*="left action"].input > .button,
.ui[class*="left action"].input > .buttons > .button {
  border-radius: 0px;
}

.ui[class*="left action"].input > .dropdown:first-child,
.ui[class*="left action"].input > .button:first-child,
.ui[class*="left action"].input > .buttons:first-child > .button {
  border-radius: 0.28571429rem 0px 0px 0.28571429rem;
}

/* Input Focus */

.ui[class*="left action"].input > input:focus {
  border-left-color: #85B7D9 !important;
}

/*--------------------
       Inverted
---------------------*/

/* Standard */

.ui.inverted.input input {
  border: none;
}

/*--------------------
        Fluid
---------------------*/

.ui.fluid.input {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.ui.fluid.input > input {
  width: 0px !important;
}

/*--------------------
        Size
---------------------*/

.ui.mini.input {
  font-size: 0.71428571em;
}

.ui.small.input {
  font-size: 0.92857143em;
}

.ui.input {
  font-size: 1em;
}

.ui.large.input {
  font-size: 1.14285714em;
}

.ui.big.input {
  font-size: 1.28571429em;
}

.ui.huge.input {
  font-size: 1.42857143em;
}

.ui.massive.input {
  font-size: 1.71428571em;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Label
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Label
*******************************/

.ui.label {
  display: inline-block;
  line-height: 1;
  vertical-align: baseline;
  margin: 0em 0.14285714em;
  background-color: #E8E8E8;
  background-image: none;
  padding: 0.5833em 0.833em;
  color: rgba(0, 0, 0, 0.6);
  text-transform: none;
  font-weight: bold;
  border: 0px solid transparent;
  border-radius: 0.28571429rem;
  -webkit-transition: background 0.1s ease;
  transition: background 0.1s ease;
}

.ui.label:first-child {
  margin-left: 0em;
}

.ui.label:last-child {
  margin-right: 0em;
}

/* Link */

a.ui.label {
  cursor: pointer;
}

/* Inside Link */

.ui.label > a {
  cursor: pointer;
  color: inherit;
  opacity: 0.5;
  -webkit-transition: 0.1s opacity ease;
  transition: 0.1s opacity ease;
}

.ui.label > a:hover {
  opacity: 1;
}

/* Image */

.ui.label > img {
  width: auto !important;
  vertical-align: middle;
  height: 2.1666em !important;
}

/* Icon */

.ui.label > .icon {
  width: auto;
  margin: 0em 0.75em 0em 0em;
}

/* Detail */

.ui.label > .detail {
  display: inline-block;
  vertical-align: top;
  font-weight: bold;
  margin-left: 1em;
  opacity: 0.8;
}

.ui.label > .detail .icon {
  margin: 0em 0.25em 0em 0em;
}

/* Removable label */

.ui.label > .close.icon,
.ui.label > .delete.icon {
  cursor: pointer;
  margin-right: 0em;
  margin-left: 0.5em;
  font-size: 0.92857143em;
  opacity: 0.5;
  -webkit-transition: background 0.1s ease;
  transition: background 0.1s ease;
}

.ui.label > .delete.icon:hover {
  opacity: 1;
}

/*-------------------
       Group
--------------------*/

.ui.labels > .label {
  margin: 0em 0.5em 0.5em 0em;
}

/*-------------------
       Coupling
--------------------*/

.ui.header > .ui.label {
  margin-top: -0.29165em;
}

/* Remove border radius on attached segment */

.ui.attached.segment > .ui.top.left.attached.label,
.ui.bottom.attached.segment > .ui.top.left.attached.label {
  border-top-left-radius: 0;
}

.ui.attached.segment > .ui.top.right.attached.label,
.ui.bottom.attached.segment > .ui.top.right.attached.label {
  border-top-right-radius: 0;
}

.ui.top.attached.segment > .ui.bottom.left.attached.label {
  border-bottom-left-radius: 0;
}

.ui.top.attached.segment > .ui.bottom.right.attached.label {
  border-bottom-right-radius: 0;
}

/* Padding on next content after a label */

.ui.top.attached.label:first-child + :not(.attached) {
  margin-top: 2rem !important;
}

.ui.bottom.attached.label:first-child ~ :last-child:not(.attached) {
  margin-top: 0em;
  margin-bottom: 2rem !important;
}

/*******************************
             Types
*******************************/

.ui.image.label {
  width: auto !important;
  margin-top: 0em;
  margin-bottom: 0em;
  max-width: 9999px;
  vertical-align: baseline;
  text-transform: none;
  background: #E8E8E8;
  padding: 0.5833em 0.833em 0.5833em 0.5em;
  border-radius: 0.28571429rem;
  box-shadow: none;
}

.ui.image.label img {
  display: inline-block;
  vertical-align: top;
  height: 2.1666em;
  margin: -0.5833em 0.5em -0.5833em -0.5em;
  border-radius: 0.28571429rem 0em 0em 0.28571429rem;
}

.ui.image.label .detail {
  background: rgba(0, 0, 0, 0.1);
  margin: -0.5833em -0.833em -0.5833em 0.5em;
  padding: 0.5833em 0.833em;
  border-radius: 0em 0.28571429rem 0.28571429rem 0em;
}

/*-------------------
         Tag
--------------------*/

.ui.tag.labels .label,
.ui.tag.label {
  margin-left: 1em;
  position: relative;
  padding-left: 1.5em;
  padding-right: 1.5em;
  border-radius: 0em 0.28571429rem 0.28571429rem 0em;
  -webkit-transition: none;
  transition: none;
}

.ui.tag.labels .label:before,
.ui.tag.label:before {
  position: absolute;
  -webkit-transform: translateY(-50%) translateX(50%) rotate(-45deg);
  transform: translateY(-50%) translateX(50%) rotate(-45deg);
  top: 50%;
  right: 100%;
  content: '';
  background-color: inherit;
  background-image: none;
  width: 1.56em;
  height: 1.56em;
  -webkit-transition: none;
  transition: none;
}

.ui.tag.labels .label:after,
.ui.tag.label:after {
  position: absolute;
  content: '';
  top: 50%;
  left: -0.25em;
  margin-top: -0.25em;
  background-color: #FFFFFF !important;
  width: 0.5em;
  height: 0.5em;
  box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.3);
  border-radius: 500rem;
}

/*-------------------
    Corner Label
--------------------*/

.ui.corner.label {
  position: absolute;
  top: 0em;
  right: 0em;
  margin: 0em;
  padding: 0em;
  text-align: center;
  border-color: #E8E8E8;
  width: 4em;
  height: 4em;
  z-index: 1;
  -webkit-transition: border-color 0.1s ease;
  transition: border-color 0.1s ease;
}

/* Icon Label */

.ui.corner.label {
  background-color: transparent !important;
}

.ui.corner.label:after {
  position: absolute;
  content: "";
  right: 0em;
  top: 0em;
  z-index: -1;
  width: 0em;
  height: 0em;
  background-color: transparent !important;
  border-top: 0em solid transparent;
  border-right: 4em solid transparent;
  border-bottom: 4em solid transparent;
  border-left: 0em solid transparent;
  border-right-color: inherit;
  -webkit-transition: border-color 0.1s ease;
  transition: border-color 0.1s ease;
}

.ui.corner.label .icon {
  cursor: default;
  position: relative;
  top: 0.64285714em;
  left: 0.78571429em;
  font-size: 1.14285714em;
  margin: 0em;
}

/* Left Corner */

.ui.left.corner.label,
.ui.left.corner.label:after {
  right: auto;
  left: 0em;
}

.ui.left.corner.label:after {
  border-top: 4em solid transparent;
  border-right: 4em solid transparent;
  border-bottom: 0em solid transparent;
  border-left: 0em solid transparent;
  border-top-color: inherit;
}

.ui.left.corner.label .icon {
  left: -0.78571429em;
}

/* Segment */

.ui.segment > .ui.corner.label {
  top: -1px;
  right: -1px;
}

.ui.segment > .ui.left.corner.label {
  right: auto;
  left: -1px;
}

/*-------------------
       Ribbon
--------------------*/

.ui.ribbon.label {
  position: relative;
  margin: 0em;
  min-width: -webkit-max-content;
  min-width: -moz-max-content;
  min-width: max-content;
  border-radius: 0em 0.28571429rem 0.28571429rem 0em;
  border-color: rgba(0, 0, 0, 0.15);
}

.ui.ribbon.label:after {
  position: absolute;
  content: '';
  top: 100%;
  left: 0%;
  background-color: transparent !important;
  border-style: solid;
  border-width: 0em 1.2em 1.2em 0em;
  border-color: transparent;
  border-right-color: inherit;
  width: 0em;
  height: 0em;
}

/* Positioning */

.ui.ribbon.label {
  left: calc( -1rem  -  1.2em );
  margin-right: -1.2em;
  padding-left: calc( 1rem  +  1.2em );
  padding-right: 1.2em;
}

.ui[class*="right ribbon"].label {
  left: calc(100% +  1rem  +  1.2em );
  padding-left: 1.2em;
  padding-right: calc( 1rem  +  1.2em );
}

/* Right Ribbon */

.ui[class*="right ribbon"].label {
  text-align: left;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  border-radius: 0.28571429rem 0em 0em 0.28571429rem;
}

.ui[class*="right ribbon"].label:after {
  left: auto;
  right: 0%;
  border-style: solid;
  border-width: 1.2em 1.2em 0em 0em;
  border-color: transparent;
  border-top-color: inherit;
}

/* Inside Table */

.ui.image > .ribbon.label,
.ui.card .image > .ribbon.label {
  position: absolute;
  top: 1rem;
}

.ui.card .image > .ui.ribbon.label,
.ui.image > .ui.ribbon.label {
  left: calc( 0.05rem  -  1.2em );
}

.ui.card .image > .ui[class*="right ribbon"].label,
.ui.image > .ui[class*="right ribbon"].label {
  left: calc(100% +  -0.05rem  +  1.2em );
  padding-left: 0.833em;
}

/* Inside Table */

.ui.table td > .ui.ribbon.label {
  left: calc( -0.71428571em  -  1.2em );
}

.ui.table td > .ui[class*="right ribbon"].label {
  left: calc(100% +  0.71428571em  +  1.2em );
  padding-left: 0.833em;
}

/*-------------------
      Attached
--------------------*/

.ui[class*="top attached"].label,
.ui.attached.label {
  width: 100%;
  position: absolute;
  margin: 0em;
  top: 0em;
  left: 0em;
  padding: 0.75em 1em;
  border-radius: 0.21428571rem 0.21428571rem 0em 0em;
}

.ui[class*="bottom attached"].label {
  top: auto;
  bottom: 0em;
  border-radius: 0em 0em 0.21428571rem 0.21428571rem;
}

.ui[class*="top left attached"].label {
  width: auto;
  margin-top: 0em !important;
  border-radius: 0.21428571rem 0em 0.28571429rem 0em;
}

.ui[class*="top right attached"].label {
  width: auto;
  left: auto;
  right: 0em;
  border-radius: 0em 0.21428571rem 0em 0.28571429rem;
}

.ui[class*="bottom left attached"].label {
  width: auto;
  top: auto;
  bottom: 0em;
  border-radius: 0em 0.28571429rem 0em 0.21428571rem;
}

.ui[class*="bottom right attached"].label {
  top: auto;
  bottom: 0em;
  left: auto;
  right: 0em;
  width: auto;
  border-radius: 0.28571429rem 0em 0.21428571rem 0em;
}

/*******************************
             States
*******************************/

/*-------------------
      Disabled
--------------------*/

.ui.label.disabled {
  opacity: 0.5;
}

/*-------------------
        Hover
--------------------*/

a.ui.labels .label:hover,
a.ui.label:hover {
  background-color: #E0E0E0;
  border-color: #E0E0E0;
  background-image: none;
  color: rgba(0, 0, 0, 0.8);
}

.ui.labels a.label:hover:before,
a.ui.label:hover:before {
  color: rgba(0, 0, 0, 0.8);
}

/*-------------------
        Active
--------------------*/

.ui.active.label {
  background-color: #D0D0D0;
  border-color: #D0D0D0;
  background-image: none;
  color: rgba(0, 0, 0, 0.95);
}

.ui.active.label:before {
  background-color: #D0D0D0;
  background-image: none;
  color: rgba(0, 0, 0, 0.95);
}

/*-------------------
     Active Hover
--------------------*/

a.ui.labels .active.label:hover,
a.ui.active.label:hover {
  background-color: #C8C8C8;
  border-color: #C8C8C8;
  background-image: none;
  color: rgba(0, 0, 0, 0.95);
}

.ui.labels a.active.label:ActiveHover:before,
a.ui.active.label:ActiveHover:before {
  background-color: #C8C8C8;
  background-image: none;
  color: rgba(0, 0, 0, 0.95);
}

/*-------------------
      Visible
--------------------*/

.ui.labels.visible .label,
.ui.label.visible {
  display: inline-block !important;
}

/*-------------------
      Hidden
--------------------*/

.ui.labels.hidden .label,
.ui.label.hidden {
  display: none !important;
}

/*******************************
           Variations
*******************************/

/*-------------------
       Colors
--------------------*/

/*--- Red ---*/

.ui.red.labels .label,
.ui.red.label {
  background-color: #DB2828 !important;
  border-color: #DB2828 !important;
  color: #FFFFFF !important;
}

/* Link */

.ui.red.labels .label:hover,
a.ui.red.label:hover {
  background-color: #d01919 !important;
  border-color: #d01919 !important;
  color: #FFFFFF !important;
}

/* Corner */

.ui.red.corner.label,
.ui.red.corner.label:hover {
  background-color: transparent !important;
}

/* Ribbon */

.ui.red.ribbon.label {
  border-color: #b21e1e !important;
}

/* Basic */

.ui.basic.red.label {
  background-color: #FFFFFF !important;
  color: #DB2828 !important;
  border-color: #DB2828 !important;
}

.ui.basic.red.labels a.label:hover,
a.ui.basic.red.label:hover {
  background-color: #FFFFFF !important;
  color: #d01919 !important;
  border-color: #d01919 !important;
}

/*--- Orange ---*/

.ui.orange.labels .label,
.ui.orange.label {
  background-color: #F2711C !important;
  border-color: #F2711C !important;
  color: #FFFFFF !important;
}

/* Link */

.ui.orange.labels .label:hover,
a.ui.orange.label:hover {
  background-color: #f26202 !important;
  border-color: #f26202 !important;
  color: #FFFFFF !important;
}

/* Corner */

.ui.orange.corner.label,
.ui.orange.corner.label:hover {
  background-color: transparent !important;
}

/* Ribbon */

.ui.orange.ribbon.label {
  border-color: #cf590c !important;
}

/* Basic */

.ui.basic.orange.label {
  background-color: #FFFFFF !important;
  color: #F2711C !important;
  border-color: #F2711C !important;
}

.ui.basic.orange.labels a.label:hover,
a.ui.basic.orange.label:hover {
  background-color: #FFFFFF !important;
  color: #f26202 !important;
  border-color: #f26202 !important;
}

/*--- Yellow ---*/

.ui.yellow.labels .label,
.ui.yellow.label {
  background-color: #FBBD08 !important;
  border-color: #FBBD08 !important;
  color: #FFFFFF !important;
}

/* Link */

.ui.yellow.labels .label:hover,
a.ui.yellow.label:hover {
  background-color: #eaae00 !important;
  border-color: #eaae00 !important;
  color: #FFFFFF !important;
}

/* Corner */

.ui.yellow.corner.label,
.ui.yellow.corner.label:hover {
  background-color: transparent !important;
}

/* Ribbon */

.ui.yellow.ribbon.label {
  border-color: #cd9903 !important;
}

/* Basic */

.ui.basic.yellow.label {
  background-color: #FFFFFF !important;
  color: #FBBD08 !important;
  border-color: #FBBD08 !important;
}

.ui.basic.yellow.labels a.label:hover,
a.ui.basic.yellow.label:hover {
  background-color: #FFFFFF !important;
  color: #eaae00 !important;
  border-color: #eaae00 !important;
}

/*--- Olive ---*/

.ui.olive.labels .label,
.ui.olive.label {
  background-color: #B5CC18 !important;
  border-color: #B5CC18 !important;
  color: #FFFFFF !important;
}

/* Link */

.ui.olive.labels .label:hover,
a.ui.olive.label:hover {
  background-color: #a7bd0d !important;
  border-color: #a7bd0d !important;
  color: #FFFFFF !important;
}

/* Corner */

.ui.olive.corner.label,
.ui.olive.corner.label:hover {
  background-color: transparent !important;
}

/* Ribbon */

.ui.olive.ribbon.label {
  border-color: #198f35 !important;
}

/* Basic */

.ui.basic.olive.label {
  background-color: #FFFFFF !important;
  color: #B5CC18 !important;
  border-color: #B5CC18 !important;
}

.ui.basic.olive.labels a.label:hover,
a.ui.basic.olive.label:hover {
  background-color: #FFFFFF !important;
  color: #a7bd0d !important;
  border-color: #a7bd0d !important;
}

/*--- Green ---*/

.ui.green.labels .label,
.ui.green.label {
  background-color: #21BA45 !important;
  border-color: #21BA45 !important;
  color: #FFFFFF !important;
}

/* Link */

.ui.green.labels .label:hover,
a.ui.green.label:hover {
  background-color: #16ab39 !important;
  border-color: #16ab39 !important;
  color: #FFFFFF !important;
}

/* Corner */

.ui.green.corner.label,
.ui.green.corner.label:hover {
  background-color: transparent !important;
}

/* Ribbon */

.ui.green.ribbon.label {
  border-color: #198f35 !important;
}

/* Basic */

.ui.basic.green.label {
  background-color: #FFFFFF !important;
  color: #21BA45 !important;
  border-color: #21BA45 !important;
}

.ui.basic.green.labels a.label:hover,
a.ui.basic.green.label:hover {
  background-color: #FFFFFF !important;
  color: #16ab39 !important;
  border-color: #16ab39 !important;
}

/*--- Teal ---*/

.ui.teal.labels .label,
.ui.teal.label {
  background-color: #00B5AD !important;
  border-color: #00B5AD !important;
  color: #FFFFFF !important;
}

/* Link */

.ui.teal.labels .label:hover,
a.ui.teal.label:hover {
  background-color: #009c95 !important;
  border-color: #009c95 !important;
  color: #FFFFFF !important;
}

/* Corner */

.ui.teal.corner.label,
.ui.teal.corner.label:hover {
  background-color: transparent !important;
}

/* Ribbon */

.ui.teal.ribbon.label {
  border-color: #00827c !important;
}

/* Basic */

.ui.basic.teal.label {
  background-color: #FFFFFF !important;
  color: #00B5AD !important;
  border-color: #00B5AD !important;
}

.ui.basic.teal.labels a.label:hover,
a.ui.basic.teal.label:hover {
  background-color: #FFFFFF !important;
  color: #009c95 !important;
  border-color: #009c95 !important;
}

/*--- Blue ---*/

.ui.blue.labels .label,
.ui.blue.label {
  background-color: #2185D0 !important;
  border-color: #2185D0 !important;
  color: #FFFFFF !important;
}

/* Link */

.ui.blue.labels .label:hover,
a.ui.blue.label:hover {
  background-color: #1678c2 !important;
  border-color: #1678c2 !important;
  color: #FFFFFF !important;
}

/* Corner */

.ui.blue.corner.label,
.ui.blue.corner.label:hover {
  background-color: transparent !important;
}

/* Ribbon */

.ui.blue.ribbon.label {
  border-color: #1a69a4 !important;
}

/* Basic */

.ui.basic.blue.label {
  background-color: #FFFFFF !important;
  color: #2185D0 !important;
  border-color: #2185D0 !important;
}

.ui.basic.blue.labels a.label:hover,
a.ui.basic.blue.label:hover {
  background-color: #FFFFFF !important;
  color: #1678c2 !important;
  border-color: #1678c2 !important;
}

/*--- Violet ---*/

.ui.violet.labels .label,
.ui.violet.label {
  background-color: #6435C9 !important;
  border-color: #6435C9 !important;
  color: #FFFFFF !important;
}

/* Link */

.ui.violet.labels .label:hover,
a.ui.violet.label:hover {
  background-color: #5829bb !important;
  border-color: #5829bb !important;
  color: #FFFFFF !important;
}

/* Corner */

.ui.violet.corner.label,
.ui.violet.corner.label:hover {
  background-color: transparent !important;
}

/* Ribbon */

.ui.violet.ribbon.label {
  border-color: #502aa1 !important;
}

/* Basic */

.ui.basic.violet.label {
  background-color: #FFFFFF !important;
  color: #6435C9 !important;
  border-color: #6435C9 !important;
}

.ui.basic.violet.labels a.label:hover,
a.ui.basic.violet.label:hover {
  background-color: #FFFFFF !important;
  color: #5829bb !important;
  border-color: #5829bb !important;
}

/*--- Purple ---*/

.ui.purple.labels .label,
.ui.purple.label {
  background-color: #A333C8 !important;
  border-color: #A333C8 !important;
  color: #FFFFFF !important;
}

/* Link */

.ui.purple.labels .label:hover,
a.ui.purple.label:hover {
  background-color: #9627ba !important;
  border-color: #9627ba !important;
  color: #FFFFFF !important;
}

/* Corner */

.ui.purple.corner.label,
.ui.purple.corner.label:hover {
  background-color: transparent !important;
}

/* Ribbon */

.ui.purple.ribbon.label {
  border-color: #82299f !important;
}

/* Basic */

.ui.basic.purple.label {
  background-color: #FFFFFF !important;
  color: #A333C8 !important;
  border-color: #A333C8 !important;
}

.ui.basic.purple.labels a.label:hover,
a.ui.basic.purple.label:hover {
  background-color: #FFFFFF !important;
  color: #9627ba !important;
  border-color: #9627ba !important;
}

/*--- Pink ---*/

.ui.pink.labels .label,
.ui.pink.label {
  background-color: #E03997 !important;
  border-color: #E03997 !important;
  color: #FFFFFF !important;
}

/* Link */

.ui.pink.labels .label:hover,
a.ui.pink.label:hover {
  background-color: #e61a8d !important;
  border-color: #e61a8d !important;
  color: #FFFFFF !important;
}

/* Corner */

.ui.pink.corner.label,
.ui.pink.corner.label:hover {
  background-color: transparent !important;
}

/* Ribbon */

.ui.pink.ribbon.label {
  border-color: #c71f7e !important;
}

/* Basic */

.ui.basic.pink.label {
  background-color: #FFFFFF !important;
  color: #E03997 !important;
  border-color: #E03997 !important;
}

.ui.basic.pink.labels a.label:hover,
a.ui.basic.pink.label:hover {
  background-color: #FFFFFF !important;
  color: #e61a8d !important;
  border-color: #e61a8d !important;
}

/*--- Brown ---*/

.ui.brown.labels .label,
.ui.brown.label {
  background-color: #A5673F !important;
  border-color: #A5673F !important;
  color: #FFFFFF !important;
}

/* Link */

.ui.brown.labels .label:hover,
a.ui.brown.label:hover {
  background-color: #975b33 !important;
  border-color: #975b33 !important;
  color: #FFFFFF !important;
}

/* Corner */

.ui.brown.corner.label,
.ui.brown.corner.label:hover {
  background-color: transparent !important;
}

/* Ribbon */

.ui.brown.ribbon.label {
  border-color: #805031 !important;
}

/* Basic */

.ui.basic.brown.label {
  background-color: #FFFFFF !important;
  color: #A5673F !important;
  border-color: #A5673F !important;
}

.ui.basic.brown.labels a.label:hover,
a.ui.basic.brown.label:hover {
  background-color: #FFFFFF !important;
  color: #975b33 !important;
  border-color: #975b33 !important;
}

/*--- Grey ---*/

.ui.grey.labels .label,
.ui.grey.label {
  background-color: #767676 !important;
  border-color: #767676 !important;
  color: #FFFFFF !important;
}

/* Link */

.ui.grey.labels .label:hover,
a.ui.grey.label:hover {
  background-color: #838383 !important;
  border-color: #838383 !important;
  color: #FFFFFF !important;
}

/* Corner */

.ui.grey.corner.label,
.ui.grey.corner.label:hover {
  background-color: transparent !important;
}

/* Ribbon */

.ui.grey.ribbon.label {
  border-color: #805031 !important;
}

/* Basic */

.ui.basic.grey.label {
  background-color: #FFFFFF !important;
  color: #767676 !important;
  border-color: #767676 !important;
}

.ui.basic.grey.labels a.label:hover,
a.ui.basic.grey.label:hover {
  background-color: #FFFFFF !important;
  color: #838383 !important;
  border-color: #838383 !important;
}

/*--- Black ---*/

.ui.black.labels .label,
.ui.black.label {
  background-color: #1B1C1D !important;
  border-color: #1B1C1D !important;
  color: #FFFFFF !important;
}

/* Link */

.ui.black.labels .label:hover,
a.ui.black.label:hover {
  background-color: #27292a !important;
  border-color: #27292a !important;
  color: #FFFFFF !important;
}

/* Corner */

.ui.black.corner.label,
.ui.black.corner.label:hover {
  background-color: transparent !important;
}

/* Ribbon */

.ui.black.ribbon.label {
  border-color: #805031 !important;
}

/* Basic */

.ui.basic.black.label {
  background-color: #FFFFFF !important;
  color: #1B1C1D !important;
  border-color: #1B1C1D !important;
}

.ui.basic.black.labels a.label:hover,
a.ui.basic.black.label:hover {
  background-color: #FFFFFF !important;
  color: #27292a !important;
  border-color: #27292a !important;
}

/*-------------------
        Basic
--------------------*/

.ui.basic.label {
  background: none #FFFFFF;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
}

/* Link */

a.ui.basic.label:hover {
  text-decoration: none;
  background: none #FFFFFF;
  color: #1e70bf;
  box-shadow: 1px solid rgba(34, 36, 38, 0.15);
  box-shadow: none;
}

/* Pointing */

.ui.basic.pointing.label:before {
  border-color: inherit;
}

/*-------------------
       Fluid
--------------------*/

.ui.label.fluid,
.ui.fluid.labels > .label {
  width: 100%;
  box-sizing: border-box;
}

/*-------------------
       Inverted
--------------------*/

.ui.inverted.labels .label,
.ui.inverted.label {
  color: rgba(255, 255, 255, 0.9) !important;
}

/*-------------------
     Horizontal
--------------------*/

.ui.horizontal.labels .label,
.ui.horizontal.label {
  margin: 0em 0.5em 0em 0em;
  padding: 0.4em 0.833em;
  min-width: 3em;
  text-align: center;
}

/*-------------------
       Circular
--------------------*/

.ui.circular.labels .label,
.ui.circular.label {
  min-width: 2em;
  min-height: 2em;
  padding: 0.5em !important;
  line-height: 1em;
  text-align: center;
  border-radius: 500rem;
}

.ui.empty.circular.labels .label,
.ui.empty.circular.label {
  min-width: 0em;
  min-height: 0em;
  overflow: hidden;
  width: 0.5em;
  height: 0.5em;
  vertical-align: baseline;
}

/*-------------------
       Pointing
--------------------*/

.ui.pointing.label {
  position: relative;
}

.ui.attached.pointing.label {
  position: absolute;
}

.ui.pointing.label:before {
  background-color: inherit;
  background-image: inherit;
  border-width: none;
  border-style: solid;
  border-color: inherit;
}

/* Arrow */

.ui.pointing.label:before {
  position: absolute;
  content: '';
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background-image: none;
  z-index: 2;
  width: 0.6666em;
  height: 0.6666em;
  -webkit-transition: background 0.1s ease;
  transition: background 0.1s ease;
}

/*--- Above ---*/

.ui.pointing.label,
.ui[class*="pointing above"].label {
  margin-top: 1em;
}

.ui.pointing.label:before,
.ui[class*="pointing above"].label:before {
  border-width: 1px 0px 0px 1px;
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  top: 0%;
  left: 50%;
}

/*--- Below ---*/

.ui[class*="bottom pointing"].label,
.ui[class*="pointing below"].label {
  margin-top: 0em;
  margin-bottom: 1em;
}

.ui[class*="bottom pointing"].label:before,
.ui[class*="pointing below"].label:before {
  border-width: 0px 1px 1px 0px;
  top: auto;
  right: auto;
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  top: 100%;
  left: 50%;
}

/*--- Left ---*/

.ui[class*="left pointing"].label {
  margin-top: 0em;
  margin-left: 0.6666em;
}

.ui[class*="left pointing"].label:before {
  border-width: 0px 0px 1px 1px;
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  bottom: auto;
  right: auto;
  top: 50%;
  left: 0em;
}

/*--- Right ---*/

.ui[class*="right pointing"].label {
  margin-top: 0em;
  margin-right: 0.6666em;
}

.ui[class*="right pointing"].label:before {
  border-width: 1px 1px 0px 0px;
  -webkit-transform: translateX(50%) translateY(-50%) rotate(45deg);
  transform: translateX(50%) translateY(-50%) rotate(45deg);
  top: 50%;
  right: 0%;
  bottom: auto;
  left: auto;
}

/* Basic Pointing */

/*--- Above ---*/

.ui.basic.pointing.label:before,
.ui.basic[class*="pointing above"].label:before {
  margin-top: -1px;
}

/*--- Below ---*/

.ui.basic[class*="bottom pointing"].label:before,
.ui.basic[class*="pointing below"].label:before {
  bottom: auto;
  top: 100%;
  margin-top: 1px;
}

/*--- Left ---*/

.ui.basic[class*="left pointing"].label:before {
  top: 50%;
  left: -1px;
}

/*--- Right ---*/

.ui.basic[class*="right pointing"].label:before {
  top: 50%;
  right: -1px;
}

/*------------------
   Floating Label
-------------------*/

.ui.floating.label {
  position: absolute;
  z-index: 100;
  top: -1em;
  left: 100%;
  margin: 0em 0em 0em -1.5em !important;
}

/*-------------------
        Sizes
--------------------*/

.ui.mini.labels .label,
.ui.mini.label {
  font-size: 0.64285714rem;
}

.ui.tiny.labels .label,
.ui.tiny.label {
  font-size: 0.71428571rem;
}

.ui.small.labels .label,
.ui.small.label {
  font-size: 0.78571429rem;
}

.ui.labels .label,
.ui.label {
  font-size: 0.85714286rem;
}

.ui.large.labels .label,
.ui.large.label {
  font-size: 1rem;
}

.ui.big.labels .label,
.ui.big.label {
  font-size: 1.28571429rem;
}

.ui.huge.labels .label,
.ui.huge.label {
  font-size: 1.42857143rem;
}

.ui.massive.labels .label,
.ui.massive.label {
  font-size: 1.71428571rem;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - List
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            List
*******************************/

ul.ui.list,
ol.ui.list,
.ui.list {
  list-style-type: none;
  margin: 1em 0em;
  padding: 0em 0em;
}

ul.ui.list:first-child,
ol.ui.list:first-child,
.ui.list:first-child {
  margin-top: 0em;
  padding-top: 0em;
}

ul.ui.list:last-child,
ol.ui.list:last-child,
.ui.list:last-child {
  margin-bottom: 0em;
  padding-bottom: 0em;
}

/*******************************
            Content
*******************************/

/* List Item */

ul.ui.list li,
ol.ui.list li,
.ui.list > .item,
.ui.list .list > .item {
  display: list-item;
  table-layout: fixed;
  list-style-type: none;
  list-style-position: outside;
  padding: 0.21428571em 0em;
  line-height: 1.14285714em;
}

ul.ui.list > li:first-child:after,
ol.ui.list > li:first-child:after,
.ui.list > .list > .item,
.ui.list > .item:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

ul.ui.list li:first-child,
ol.ui.list li:first-child,
.ui.list .list > .item:first-child,
.ui.list > .item:first-child {
  padding-top: 0em;
}

ul.ui.list li:last-child,
ol.ui.list li:last-child,
.ui.list .list > .item:last-child,
.ui.list > .item:last-child {
  padding-bottom: 0em;
}

/* Child List */

ul.ui.list ul,
ol.ui.list ol,
.ui.list .list {
  clear: both;
  margin: 0em;
  padding: 0.75em 0em 0.25em 0.5em;
}

/* Child Item */

ul.ui.list ul li,
ol.ui.list ol li,
.ui.list .list > .item {
  padding: 0.14285714em 0em;
  line-height: inherit;
}

/* Icon */

.ui.list .list > .item > i.icon,
.ui.list > .item > i.icon {
  display: table-cell;
  margin: 0em;
  padding-top: 0.07142857em;
  padding-right: 0.28571429em;
  vertical-align: top;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}

.ui.list .list > .item > i.icon:only-child,
.ui.list > .item > i.icon:only-child {
  display: inline-block;
  vertical-align: top;
}

/* Image */

.ui.list .list > .item > .image,
.ui.list > .item > .image {
  display: table-cell;
  background-color: transparent;
  margin: 0em;
  vertical-align: top;
}

.ui.list .list > .item > .image:not(:only-child):not(img),
.ui.list > .item > .image:not(:only-child):not(img) {
  padding-right: 0.5em;
}

.ui.list .list > .item > .image img,
.ui.list > .item > .image img {
  vertical-align: top;
}

.ui.list .list > .item > img.image,
.ui.list .list > .item > .image:only-child,
.ui.list > .item > img.image,
.ui.list > .item > .image:only-child {
  display: inline-block;
}

/* Content */

.ui.list .list > .item > .content,
.ui.list > .item > .content {
  line-height: 1.14285714em;
}

.ui.list .list > .item > .image + .content,
.ui.list .list > .item > .icon + .content,
.ui.list > .item > .image + .content,
.ui.list > .item > .icon + .content {
  display: table-cell;
  padding: 0em 0em 0em 0.5em;
  vertical-align: top;
}

.ui.list .list > .item > img.image + .content,
.ui.list > .item > img.image + .content {
  display: inline-block;
}

.ui.list .list > .item > .content > .list,
.ui.list > .item > .content > .list {
  margin-left: 0em;
  padding-left: 0em;
}

/* Header */

.ui.list .list > .item .header,
.ui.list > .item .header {
  display: block;
  margin: 0em;
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.87);
}

/* Description */

.ui.list .list > .item .description,
.ui.list > .item .description {
  display: block;
  color: rgba(0, 0, 0, 0.7);
}

/* Child Link */

.ui.list > .item a,
.ui.list .list > .item a {
  cursor: pointer;
}

/* Linking Item */

.ui.list .list > a.item,
.ui.list > a.item {
  cursor: pointer;
  color: #4183C4;
}

.ui.list .list > a.item:hover,
.ui.list > a.item:hover {
  color: #1e70bf;
}

/* Linked Item Icons */

.ui.list .list > a.item i.icon,
.ui.list > a.item i.icon {
  color: rgba(0, 0, 0, 0.4);
}

/* Header Link */

.ui.list .list > .item a.header,
.ui.list > .item a.header {
  cursor: pointer;
  color: #4183C4 !important;
}

.ui.list .list > .item a.header:hover,
.ui.list > .item a.header:hover {
  color: #1e70bf !important;
}

/* Floated Content */

.ui[class*="left floated"].list {
  float: left;
}

.ui[class*="right floated"].list {
  float: right;
}

.ui.list .list > .item [class*="left floated"],
.ui.list > .item [class*="left floated"] {
  float: left;
  margin: 0em 1em 0em 0em;
}

.ui.list .list > .item [class*="right floated"],
.ui.list > .item [class*="right floated"] {
  float: right;
  margin: 0em 0em 0em 1em;
}

/*******************************
            Coupling
*******************************/

.ui.menu .ui.list > .item,
.ui.menu .ui.list .list > .item {
  display: list-item;
  table-layout: fixed;
  background-color: transparent;
  list-style-type: none;
  list-style-position: outside;
  padding: 0.21428571em 0em;
  line-height: 1.14285714em;
}

.ui.menu .ui.list .list > .item:before,
.ui.menu .ui.list > .item:before {
  border: none;
  background: none;
}

.ui.menu .ui.list .list > .item:first-child,
.ui.menu .ui.list > .item:first-child {
  padding-top: 0em;
}

.ui.menu .ui.list .list > .item:last-child,
.ui.menu .ui.list > .item:last-child {
  padding-bottom: 0em;
}

/*******************************
            Types
*******************************/

/*-------------------
      Horizontal
--------------------*/

.ui.horizontal.list {
  display: inline-block;
  font-size: 0em;
}

.ui.horizontal.list > .item {
  display: inline-block;
  margin-left: 1em;
  font-size: 1rem;
}

.ui.horizontal.list:not(.celled) > .item:first-child {
  margin-left: 0em !important;
  padding-left: 0em !important;
}

.ui.horizontal.list .list {
  padding-left: 0em;
  padding-bottom: 0em;
}

.ui.horizontal.list > .item > .image,
.ui.horizontal.list .list > .item > .image,
.ui.horizontal.list > .item > .icon,
.ui.horizontal.list .list > .item > .icon,
.ui.horizontal.list > .item > .content,
.ui.horizontal.list .list > .item > .content {
  vertical-align: middle;
}

/* Padding on all elements */

.ui.horizontal.list > .item:first-child,
.ui.horizontal.list > .item:last-child {
  padding-top: 0.21428571em;
  padding-bottom: 0.21428571em;
}

/* Horizontal List */

.ui.horizontal.list > .item > i.icon {
  margin: 0em;
  padding: 0em 0.25em 0em 0em;
}

.ui.horizontal.list > .item > .icon,
.ui.horizontal.list > .item > .icon + .content {
  float: none;
  display: inline-block;
}

/*******************************
             States
*******************************/

/*-------------------
       Disabled
--------------------*/

.ui.list .list > .disabled.item,
.ui.list > .disabled.item {
  pointer-events: none;
  color: rgba(40, 40, 40, 0.3) !important;
}

.ui.inverted.list .list > .disabled.item,
.ui.inverted.list > .disabled.item {
  color: rgba(225, 225, 225, 0.3) !important;
}

/*-------------------
        Hover
--------------------*/

.ui.list .list > a.item:hover .icon,
.ui.list > a.item:hover .icon {
  color: rgba(0, 0, 0, 0.87);
}

/*******************************
           Variations
*******************************/

/*-------------------
       Inverted
--------------------*/

.ui.inverted.list .list > a.item > .icon,
.ui.inverted.list > a.item > .icon {
  color: rgba(255, 255, 255, 0.7);
}

.ui.inverted.list .list > .item .header,
.ui.inverted.list > .item .header {
  color: rgba(255, 255, 255, 0.9);
}

.ui.inverted.list .list > .item .description,
.ui.inverted.list > .item .description {
  color: rgba(255, 255, 255, 0.7);
}

/* Item Link */

.ui.inverted.list .list > a.item,
.ui.inverted.list > a.item {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
}

.ui.inverted.list .list > a.item:hover,
.ui.inverted.list > a.item:hover {
  color: #1e70bf;
}

/* Linking Content */

.ui.inverted.list .item a:not(.ui) {
  color: rgba(255, 255, 255, 0.9) !important;
}

.ui.inverted.list .item a:not(.ui):hover {
  color: #1e70bf !important;
}

/*-------------------
       Aligned
--------------------*/

.ui.list[class*="top aligned"] .image,
.ui.list[class*="top aligned"] .content,
.ui.list [class*="top aligned"] {
  vertical-align: top !important;
}

.ui.list[class*="middle aligned"] .image,
.ui.list[class*="middle aligned"] .content,
.ui.list [class*="middle aligned"] {
  vertical-align: middle !important;
}

.ui.list[class*="bottom aligned"] .image,
.ui.list[class*="bottom aligned"] .content,
.ui.list [class*="bottom aligned"] {
  vertical-align: bottom !important;
}

/*-------------------
       Link
--------------------*/

.ui.link.list .item,
.ui.link.list a.item,
.ui.link.list .item a:not(.ui) {
  color: rgba(0, 0, 0, 0.4);
  -webkit-transition: 0.1s color ease;
  transition: 0.1s color ease;
}

.ui.link.list a.item:hover,
.ui.link.list .item a:not(.ui):hover {
  color: rgba(0, 0, 0, 0.8);
}

.ui.link.list a.item:active,
.ui.link.list .item a:not(.ui):active {
  color: rgba(0, 0, 0, 0.9);
}

.ui.link.list .active.item,
.ui.link.list .active.item a:not(.ui) {
  color: rgba(0, 0, 0, 0.95);
}

/* Inverted */

.ui.inverted.link.list .item,
.ui.inverted.link.list a.item,
.ui.inverted.link.list .item a:not(.ui) {
  color: rgba(255, 255, 255, 0.5);
}

.ui.inverted.link.list a.item:hover,
.ui.inverted.link.list .item a:not(.ui):hover {
  color: #ffffff;
}

.ui.inverted.link.list a.item:active,
.ui.inverted.link.list .item a:not(.ui):active {
  color: #ffffff;
}

.ui.inverted.link.list a.active.item,
.ui.inverted.link.list .active.item a:not(.ui) {
  color: #ffffff;
}

/*-------------------
      Selection
--------------------*/

.ui.selection.list .list > .item,
.ui.selection.list > .item {
  cursor: pointer;
  background: transparent;
  padding: 0.5em 0.5em;
  margin: 0em;
  color: rgba(0, 0, 0, 0.4);
  border-radius: 0.5em;
  -webkit-transition: 0.1s color ease, 0.1s padding-left ease, 0.1s background-color ease;
  transition: 0.1s color ease, 0.1s padding-left ease, 0.1s background-color ease;
}

.ui.selection.list .list > .item:last-child,
.ui.selection.list > .item:last-child {
  margin-bottom: 0em;
}

.ui.selection.list.list > .item:hover,
.ui.selection.list > .item:hover {
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.8);
}

.ui.selection.list .list > .item:active,
.ui.selection.list > .item:active {
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.9);
}

.ui.selection.list .list > .item.active,
.ui.selection.list > .item.active {
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
}

/* Inverted */

.ui.inverted.selection.list > .item,
.ui.inverted.selection.list > .item {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}

.ui.inverted.selection.list > .item:hover,
.ui.inverted.selection.list > .item:hover {
  background: rgba(255, 255, 255, 0.02);
  color: #ffffff;
}

.ui.inverted.selection.list > .item:active,
.ui.inverted.selection.list > .item:active {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.ui.inverted.selection.list > .item.active,
.ui.inverted.selection.list > .item.active {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

/* Celled / Divided Selection List */

.ui.celled.selection.list .list > .item,
.ui.divided.selection.list .list > .item,
.ui.celled.selection.list > .item,
.ui.divided.selection.list > .item {
  border-radius: 0em;
}

/*-------------------
       Animated
--------------------*/

.ui.animated.list > .item {
  -webkit-transition: 0.25s color ease 0.1s, 0.25s padding-left ease 0.1s, 0.25s background-color ease 0.1s;
  transition: 0.25s color ease 0.1s, 0.25s padding-left ease 0.1s, 0.25s background-color ease 0.1s;
}

.ui.animated.list:not(.horizontal) > .item:hover {
  padding-left: 1em;
}

/*-------------------
       Fitted
--------------------*/

.ui.fitted.list:not(.selection) .list > .item,
.ui.fitted.list:not(.selection) > .item {
  padding-left: 0em;
  padding-right: 0em;
}

.ui.fitted.selection.list .list > .item,
.ui.fitted.selection.list > .item {
  margin-left: -0.5em;
  margin-right: -0.5em;
}

/*-------------------
      Bulleted
--------------------*/

ul.ui.list,
.ui.bulleted.list {
  margin-left: 1.25rem;
}

ul.ui.list li,
.ui.bulleted.list .list > .item,
.ui.bulleted.list > .item {
  position: relative;
}

ul.ui.list li:before,
.ui.bulleted.list .list > .item:before,
.ui.bulleted.list > .item:before {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
  position: absolute;
  top: auto;
  left: auto;
  margin-left: -1.25rem;
  content: '•';
  opacity: 1;
  color: inherit;
  vertical-align: top;
}

ul.ui.list ul,
.ui.bulleted.list .list {
  padding-left: 1.25rem;
}

/* Horizontal Bulleted */

ul.ui.horizontal.bulleted.list,
.ui.horizontal.bulleted.list {
  margin-left: 0em;
}

ul.ui.horizontal.bulleted.list li,
.ui.horizontal.bulleted.list > .item {
  margin-left: 1.75rem;
}

ul.ui.horizontal.bulleted.list li:first-child,
.ui.horizontal.bulleted.list > .item:first-child {
  margin-left: 0em;
}

ul.ui.horizontal.bulleted.list li::before,
.ui.horizontal.bulleted.list > .item::before {
  color: rgba(0, 0, 0, 0.87);
}

ul.ui.horizontal.bulleted.list li:first-child::before,
.ui.horizontal.bulleted.list > .item:first-child::before {
  display: none;
}

/*-------------------
       Ordered
--------------------*/

ol.ui.list,
.ui.ordered.list,
.ui.ordered.list .list,
ol.ui.list ol {
  counter-reset: ordered;
  margin-left: 1.25rem;
  list-style-type: none;
}

ol.ui.list li,
.ui.ordered.list .list > .item,
.ui.ordered.list > .item {
  list-style-type: none;
  position: relative;
}

ol.ui.list li:before,
.ui.ordered.list .list > .item:before,
.ui.ordered.list > .item:before {
  position: absolute;
  top: auto;
  left: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
  margin-left: -1.25rem;
  counter-increment: ordered;
  content: counters(ordered, ".") " ";
  text-align: right;
  color: rgba(0, 0, 0, 0.87);
  vertical-align: middle;
  opacity: 0.8;
}

ol.ui.inverted.list li:before,
.ui.ordered.inverted.list .list > .item:before,
.ui.ordered.inverted.list > .item:before {
  color: rgba(255, 255, 255, 0.7);
}

/* Value */

.ui.ordered.list > .list > .item[data-value],
.ui.ordered.list > .item[data-value] {
  content: attr(data-value);
}

ol.ui.list li[value]:before {
  content: attr(value);
}

/* Child Lists */

ol.ui.list ol,
.ui.ordered.list .list {
  margin-left: 1em;
}

ol.ui.list ol li:before,
.ui.ordered.list .list > .item:before {
  margin-left: -2em;
}

/* Horizontal Ordered */

ol.ui.horizontal.list,
.ui.ordered.horizontal.list {
  margin-left: 0em;
}

ol.ui.horizontal.list li:before,
.ui.ordered.horizontal.list .list > .item:before,
.ui.ordered.horizontal.list > .item:before {
  position: static;
  margin: 0em 0.5em 0em 0em;
}

/*-------------------
       Divided
--------------------*/

.ui.divided.list > .item {
  border-top: 1px solid rgba(34, 36, 38, 0.15);
}

.ui.divided.list .list > .item {
  border-top: none;
}

.ui.divided.list .item .list > .item {
  border-top: none;
}

.ui.divided.list .list > .item:first-child,
.ui.divided.list > .item:first-child {
  border-top: none;
}

/* Sub Menu */

.ui.divided.list:not(.horizontal) .list > .item:first-child {
  border-top-width: 1px;
}

/* Divided bulleted */

.ui.divided.bulleted.list:not(.horizontal),
.ui.divided.bulleted.list .list {
  margin-left: 0em;
  padding-left: 0em;
}

.ui.divided.bulleted.list > .item:not(.horizontal) {
  padding-left: 1.25rem;
}

/* Divided Ordered */

.ui.divided.ordered.list {
  margin-left: 0em;
}

.ui.divided.ordered.list .list > .item,
.ui.divided.ordered.list > .item {
  padding-left: 1.25rem;
}

.ui.divided.ordered.list .item .list {
  margin-left: 0em;
  margin-right: 0em;
  padding-bottom: 0.21428571em;
}

.ui.divided.ordered.list .item .list > .item {
  padding-left: 1em;
}

/* Divided Selection */

.ui.divided.selection.list .list > .item,
.ui.divided.selection.list > .item {
  margin: 0em;
  border-radius: 0em;
}

/* Divided horizontal */

.ui.divided.horizontal.list {
  margin-left: 0em;
}

.ui.divided.horizontal.list > .item {
  border-top: none;
  border-left: 1px solid rgba(34, 36, 38, 0.15);
  margin: 0em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  line-height: 0.6;
}

.ui.horizontal.divided.list > .item:first-child {
  border-left: none;
}

/* Inverted */

.ui.divided.inverted.list > .item,
.ui.divided.inverted.list > .list,
.ui.divided.inverted.horizontal.list > .item {
  border-color: rgba(255, 255, 255, 0.1);
}

/*-------------------
        Celled
--------------------*/

.ui.celled.list > .item,
.ui.celled.list > .list {
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  padding-left: 0.5em;
  padding-right: 0.5em;
}

.ui.celled.list > .item:last-child {
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
}

/* Padding on all elements */

.ui.celled.list > .item:first-child,
.ui.celled.list > .item:last-child {
  padding-top: 0.21428571em;
  padding-bottom: 0.21428571em;
}

/* Sub Menu */

.ui.celled.list .item .list > .item {
  border-width: 0px;
}

.ui.celled.list .list > .item:first-child {
  border-top-width: 0px;
}

/* Celled Bulleted */

.ui.celled.bulleted.list {
  margin-left: 0em;
}

.ui.celled.bulleted.list .list > .item,
.ui.celled.bulleted.list > .item {
  padding-left: 1.25rem;
}

.ui.celled.bulleted.list .item .list {
  margin-left: -1.25rem;
  margin-right: -1.25rem;
  padding-bottom: 0.21428571em;
}

/* Celled Ordered */

.ui.celled.ordered.list {
  margin-left: 0em;
}

.ui.celled.ordered.list .list > .item,
.ui.celled.ordered.list > .item {
  padding-left: 1.25rem;
}

.ui.celled.ordered.list .item .list {
  margin-left: 0em;
  margin-right: 0em;
  padding-bottom: 0.21428571em;
}

.ui.celled.ordered.list .list > .item {
  padding-left: 1em;
}

/* Celled Horizontal */

.ui.horizontal.celled.list {
  margin-left: 0em;
}

.ui.horizontal.celled.list .list > .item,
.ui.horizontal.celled.list > .item {
  border-top: none;
  border-left: 1px solid rgba(34, 36, 38, 0.15);
  margin: 0em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  line-height: 0.6;
}

.ui.horizontal.celled.list .list > .item:last-child,
.ui.horizontal.celled.list > .item:last-child {
  border-bottom: none;
  border-right: 1px solid rgba(34, 36, 38, 0.15);
}

/* Inverted */

.ui.celled.inverted.list > .item,
.ui.celled.inverted.list > .list {
  border-color: 1px solid rgba(255, 255, 255, 0.1);
}

.ui.celled.inverted.horizontal.list .list > .item,
.ui.celled.inverted.horizontal.list > .item {
  border-color: 1px solid rgba(255, 255, 255, 0.1);
}

/*-------------------
       Relaxed
--------------------*/

.ui.relaxed.list:not(.horizontal) > .item {
  padding-top: 0.42857143em;
  padding-bottom: 0.42857143em;
}

.ui.relaxed.list:not(.horizontal) .list > .item {
  padding-top: 0.21428571em;
  padding-bottom: 0.21428571em;
}

.ui.horizontal.relaxed.list > .item {
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Very Relaxed */

.ui[class*="very relaxed"].list:not(.horizontal) > .item {
  padding-top: 0.85714286em;
  padding-bottom: 0.85714286em;
}

.ui[class*="very relaxed"].list:not(.horizontal) .list > .item {
  padding-top: 0.28571429em;
  padding-bottom: 0.28571429em;
}

.ui.horizontal[class*="very relaxed"].list .list > .item,
.ui.horizontal[class*="very relaxed"].list > .item {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

/*-------------------
      Sizes
--------------------*/

.ui.mini.list {
  font-size: 0.71428571em;
}

.ui.tiny.list {
  font-size: 0.85714286em;
}

.ui.small.list {
  font-size: 0.92857143em;
}

.ui.list {
  font-size: 1em;
}

.ui.large.list {
  font-size: 1.14285714em;
}

.ui.big.list {
  font-size: 1.28571429em;
}

.ui.huge.list {
  font-size: 1.42857143em;
}

.ui.massive.list {
  font-size: 1.71428571em;
}

.ui.mini.horizontal.list .list > .item,
.ui.mini.horizontal.list > .item {
  font-size: 0.71428571rem;
}

.ui.tiny.horizontal.list .list > .item,
.ui.tiny.horizontal.list > .item {
  font-size: 0.85714286rem;
}

.ui.small.horizontal.list .list > .item,
.ui.small.horizontal.list > .item {
  font-size: 0.92857143rem;
}

.ui.horizontal.list .list > .item,
.ui.horizontal.list > .item {
  font-size: 1rem;
}

.ui.large.horizontal.list .list > .item,
.ui.large.horizontal.list > .item {
  font-size: 1.14285714rem;
}

.ui.big.horizontal.list .list > .item,
.ui.big.horizontal.list > .item {
  font-size: 1.28571429rem;
}

.ui.huge.horizontal.list .list > .item,
.ui.huge.horizontal.list > .item {
  font-size: 1.42857143rem;
}

.ui.massive.horizontal.list .list > .item,
.ui.massive.horizontal.list > .item {
  font-size: 1.71428571rem;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
    User Variable Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Loader
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Loader
*******************************/

/* Standard Size */

.ui.loader {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0px;
  text-align: center;
  z-index: 1000;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

/* Static Shape */

.ui.loader:before {
  position: absolute;
  content: '';
  top: 0%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 500rem;
  border: 0.2em solid rgba(0, 0, 0, 0.1);
}

/* Active Shape */

.ui.loader:after {
  position: absolute;
  content: '';
  top: 0%;
  left: 50%;
  width: 100%;
  height: 100%;
  -webkit-animation: loader 0.6s linear;
  animation: loader 0.6s linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  border-radius: 500rem;
  border-color: #767676 transparent transparent;
  border-style: solid;
  border-width: 0.2em;
  box-shadow: 0px 0px 0px 1px transparent;
}

/* Active Animation */

@-webkit-keyframes loader {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loader {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/* Sizes */

.ui.loader:before,
.ui.loader:after {
  width: 2.2585em;
  height: 2.2585em;
  margin: 0em 0em 0em -1.12925em;
}

.ui.mini.loader:before,
.ui.mini.loader:after {
  width: 1.2857em;
  height: 1.2857em;
  margin: 0em 0em 0em -0.64285em;
}

.ui.small.loader:before,
.ui.small.loader:after {
  width: 1.7142em;
  height: 1.7142em;
  margin: 0em 0em 0em -0.8571em;
}

.ui.large.loader:before,
.ui.large.loader:after {
  width: 4.5714em;
  height: 4.5714em;
  margin: 0em 0em 0em -2.2857em;
}

/*-------------------
      Coupling
--------------------*/

/* Show inside active dimmer */

.ui.dimmer .loader {
  display: block;
}

/* Black Dimmer */

.ui.dimmer .ui.loader {
  color: rgba(255, 255, 255, 0.9);
}

.ui.dimmer .ui.loader:before {
  border-color: rgba(255, 255, 255, 0.15);
}

.ui.dimmer .ui.loader:after {
  border-color: #FFFFFF transparent transparent;
}

/* White Dimmer (Inverted) */

.ui.inverted.dimmer .ui.loader {
  color: rgba(0, 0, 0, 0.87);
}

.ui.inverted.dimmer .ui.loader:before {
  border-color: rgba(0, 0, 0, 0.1);
}

.ui.inverted.dimmer .ui.loader:after {
  border-color: #767676 transparent transparent;
}

/*******************************
             Types
*******************************/

/*-------------------
        Text
--------------------*/

.ui.text.loader {
  width: auto !important;
  height: auto !important;
  text-align: center;
  font-style: normal;
}

/*******************************
            States
*******************************/

.ui.indeterminate.loader:after {
  -webkit-animation-direction: reverse;
  animation-direction: reverse;
  -webkit-animation-duration: 1.2s;
  animation-duration: 1.2s;
}

.ui.loader.active,
.ui.loader.visible {
  display: block;
}

.ui.loader.disabled,
.ui.loader.hidden {
  display: none;
}

/*******************************
            Variations
*******************************/

/*-------------------
        Sizes
--------------------*/

/* Loader */

.ui.inverted.dimmer .ui.mini.loader,
.ui.mini.loader {
  width: 1.2857em;
  height: 1.2857em;
  font-size: 0.71428571em;
}

.ui.inverted.dimmer .ui.small.loader,
.ui.small.loader {
  width: 1.7142em;
  height: 1.7142em;
  font-size: 0.92857143em;
}

.ui.inverted.dimmer .ui.loader,
.ui.loader {
  width: 2.2585em;
  height: 2.2585em;
  font-size: 1em;
}

.ui.inverted.dimmer .ui.loader.large,
.ui.loader.large {
  width: 4.5714em;
  height: 4.5714em;
  font-size: 1.14285714em;
}

/* Text Loader */

.ui.mini.text.loader {
  min-width: 1.2857em;
  padding-top: 1.99998571em;
}

.ui.small.text.loader {
  min-width: 1.7142em;
  padding-top: 2.42848571em;
}

.ui.text.loader {
  min-width: 2.2585em;
  padding-top: 2.97278571em;
}

.ui.large.text.loader {
  min-width: 4.5714em;
  padding-top: 5.28568571em;
}

/*-------------------
       Inverted
--------------------*/

.ui.inverted.loader {
  color: rgba(255, 255, 255, 0.9);
}

.ui.inverted.loader:before {
  border-color: rgba(255, 255, 255, 0.15);
}

.ui.inverted.loader:after {
  border-top-color: #FFFFFF;
}

/*-------------------
       Inline
--------------------*/

.ui.inline.loader {
  position: relative;
  vertical-align: middle;
  margin: 0em;
  left: 0em;
  top: 0em;
  -webkit-transform: none;
  transform: none;
}

.ui.inline.loader.active,
.ui.inline.loader.visible {
  display: inline-block;
}

/* Centered Inline */

.ui.centered.inline.loader.active,
.ui.centered.inline.loader.visible {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Rail
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
             Rails
*******************************/

.ui.rail {
  position: absolute;
  top: 0%;
  width: 300px;
  height: 100%;
}

.ui.left.rail {
  left: auto;
  right: 100%;
  padding: 0em 2rem 0em 0em;
  margin: 0em 2rem 0em 0em;
}

.ui.right.rail {
  left: 100%;
  right: auto;
  padding: 0em 0em 0em 2rem;
  margin: 0em 0em 0em 2rem;
}

/*******************************
           Variations
*******************************/

/*--------------
     Internal
---------------*/

.ui.left.internal.rail {
  left: 0%;
  right: auto;
  padding: 0em 0em 0em 2rem;
  margin: 0em 0em 0em 2rem;
}

.ui.right.internal.rail {
  left: auto;
  right: 0%;
  padding: 0em 2rem 0em 0em;
  margin: 0em 2rem 0em 0em;
}

/*--------------
    Dividing
---------------*/

.ui.dividing.rail {
  width: 302.5px;
}

.ui.left.dividing.rail {
  padding: 0em 2.5rem 0em 0em;
  margin: 0em 2.5rem 0em 0em;
  border-right: 1px solid rgba(34, 36, 38, 0.15);
}

.ui.right.dividing.rail {
  border-left: 1px solid rgba(34, 36, 38, 0.15);
  padding: 0em 0em 0em 2.5rem;
  margin: 0em 0em 0em 2.5rem;
}

/*--------------
    Distance
---------------*/

.ui.close.rail {
  width: 301px;
}

.ui.close.left.rail {
  padding: 0em 1em 0em 0em;
  margin: 0em 1em 0em 0em;
}

.ui.close.right.rail {
  padding: 0em 0em 0em 1em;
  margin: 0em 0em 0em 1em;
}

.ui.very.close.rail {
  width: 300.5px;
}

.ui.very.close.left.rail {
  padding: 0em 0.5em 0em 0em;
  margin: 0em 0.5em 0em 0em;
}

.ui.very.close.right.rail {
  padding: 0em 0em 0em 0.5em;
  margin: 0em 0em 0em 0.5em;
}

/*--------------
    Attached
---------------*/

.ui.attached.left.rail,
.ui.attached.right.rail {
  padding: 0em;
  margin: 0em;
}

/*--------------
     Sizing
---------------*/

.ui.rail {
  font-size: 1rem;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Reveal
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Reveal
*******************************/

.ui.reveal {
  display: inherit;
  position: relative !important;
  font-size: 0em !important;
}

.ui.reveal > .visible.content {
  position: absolute !important;
  top: 0em !important;
  left: 0em !important;
  z-index: 3 !important;
  -webkit-transition: all 0.5s ease 0.1s;
  transition: all 0.5s ease 0.1s;
}

.ui.reveal > .hidden.content {
  position: relative !important;
  z-index: 2 !important;
}

/* Make sure hovered element is on top of other reveal */

.ui.active.reveal .visible.content,
.ui.reveal:hover .visible.content {
  z-index: 4 !important;
}

/*******************************
              Types
*******************************/

/*--------------
      Slide
---------------*/

.ui.slide.reveal {
  position: relative !important;
  overflow: hidden !important;
  white-space: nowrap;
}

.ui.slide.reveal > .content {
  display: block;
  width: 100%;
  float: left;
  margin: 0em;
  -webkit-transition: -webkit-transform 0.5s ease 0.1s;
  transition: -webkit-transform 0.5s ease 0.1s;
  transition: transform 0.5s ease 0.1s;
  transition: transform 0.5s ease 0.1s, -webkit-transform 0.5s ease 0.1s;
}

.ui.slide.reveal > .visible.content {
  position: relative !important;
}

.ui.slide.reveal > .hidden.content {
  position: absolute !important;
  left: 0% !important;
  width: 100% !important;
  -webkit-transform: translateX(100%) !important;
  transform: translateX(100%) !important;
}

.ui.slide.active.reveal > .visible.content,
.ui.slide.reveal:hover > .visible.content {
  -webkit-transform: translateX(-100%) !important;
  transform: translateX(-100%) !important;
}

.ui.slide.active.reveal > .hidden.content,
.ui.slide.reveal:hover > .hidden.content {
  -webkit-transform: translateX(0%) !important;
  transform: translateX(0%) !important;
}

.ui.slide.right.reveal > .visible.content {
  -webkit-transform: translateX(0%) !important;
  transform: translateX(0%) !important;
}

.ui.slide.right.reveal > .hidden.content {
  -webkit-transform: translateX(-100%) !important;
  transform: translateX(-100%) !important;
}

.ui.slide.right.active.reveal > .visible.content,
.ui.slide.right.reveal:hover > .visible.content {
  -webkit-transform: translateX(100%) !important;
  transform: translateX(100%) !important;
}

.ui.slide.right.active.reveal > .hidden.content,
.ui.slide.right.reveal:hover > .hidden.content {
  -webkit-transform: translateX(0%) !important;
  transform: translateX(0%) !important;
}

.ui.slide.up.reveal > .hidden.content {
  -webkit-transform: translateY(100%) !important;
  transform: translateY(100%) !important;
}

.ui.slide.up.active.reveal > .visible.content,
.ui.slide.up.reveal:hover > .visible.content {
  -webkit-transform: translateY(-100%) !important;
  transform: translateY(-100%) !important;
}

.ui.slide.up.active.reveal > .hidden.content,
.ui.slide.up.reveal:hover > .hidden.content {
  -webkit-transform: translateY(0%) !important;
  transform: translateY(0%) !important;
}

.ui.slide.down.reveal > .hidden.content {
  -webkit-transform: translateY(-100%) !important;
  transform: translateY(-100%) !important;
}

.ui.slide.down.active.reveal > .visible.content,
.ui.slide.down.reveal:hover > .visible.content {
  -webkit-transform: translateY(100%) !important;
  transform: translateY(100%) !important;
}

.ui.slide.down.active.reveal > .hidden.content,
.ui.slide.down.reveal:hover > .hidden.content {
  -webkit-transform: translateY(0%) !important;
  transform: translateY(0%) !important;
}

/*--------------
      Fade
---------------*/

.ui.fade.reveal > .visible.content {
  opacity: 1;
}

.ui.fade.active.reveal > .visible.content,
.ui.fade.reveal:hover > .visible.content {
  opacity: 0;
}

/*--------------
      Move
---------------*/

.ui.move.reveal {
  position: relative !important;
  overflow: hidden !important;
  white-space: nowrap;
}

.ui.move.reveal > .content {
  display: block;
  float: left;
  margin: 0em;
  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.1s;
  transition: -webkit-transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.1s;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.1s;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.1s, -webkit-transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.1s;
}

.ui.move.reveal > .visible.content {
  position: relative !important;
}

.ui.move.reveal > .hidden.content {
  position: absolute !important;
  left: 0% !important;
  width: 100% !important;
}

.ui.move.active.reveal > .visible.content,
.ui.move.reveal:hover > .visible.content {
  -webkit-transform: translateX(-100%) !important;
  transform: translateX(-100%) !important;
}

.ui.move.right.active.reveal > .visible.content,
.ui.move.right.reveal:hover > .visible.content {
  -webkit-transform: translateX(100%) !important;
  transform: translateX(100%) !important;
}

.ui.move.up.active.reveal > .visible.content,
.ui.move.up.reveal:hover > .visible.content {
  -webkit-transform: translateY(-100%) !important;
  transform: translateY(-100%) !important;
}

.ui.move.down.active.reveal > .visible.content,
.ui.move.down.reveal:hover > .visible.content {
  -webkit-transform: translateY(100%) !important;
  transform: translateY(100%) !important;
}

/*--------------
     Rotate
---------------*/

.ui.rotate.reveal > .visible.content {
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}

.ui.rotate.reveal > .visible.content,
.ui.rotate.right.reveal > .visible.content {
  -webkit-transform-origin: bottom right;
  transform-origin: bottom right;
}

.ui.rotate.active.reveal > .visible.conten,
.ui.rotate.reveal:hover > .visible.content,
.ui.rotate.right.active.reveal > .visible.content,
.ui.rotate.right.reveal:hover > .visible.content {
  -webkit-transform: rotate(110deg);
  transform: rotate(110deg);
}

.ui.rotate.left.reveal > .visible.content {
  -webkit-transform-origin: bottom left;
  transform-origin: bottom left;
}

.ui.rotate.left.active.reveal > .visible.content,
.ui.rotate.left.reveal:hover > .visible.content {
  -webkit-transform: rotate(-110deg);
  transform: rotate(-110deg);
}

/*******************************
              States
*******************************/

.ui.disabled.reveal:hover > .visible.visible.content {
  position: static !important;
  display: block !important;
  opacity: 1 !important;
  top: 0 !important;
  left: 0 !important;
  right: auto !important;
  bottom: auto !important;
  -webkit-transform: none !important;
  transform: none !important;
}

.ui.disabled.reveal:hover > .hidden.hidden.content {
  display: none !important;
}

/*******************************
           Variations
*******************************/

/*--------------
     Visible
---------------*/

.ui.visible.reveal {
  overflow: visible;
}

/*--------------
     Instant
---------------*/

.ui.instant.reveal > .content {
  -webkit-transition-delay: 0s !important;
  transition-delay: 0s !important;
}

/*--------------
     Sizing
---------------*/

.ui.reveal > .content {
  font-size: 1rem !important;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Segment
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Segment
*******************************/

.ui.segment {
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
  margin: 1rem 0em;
  padding: 1em 1em;
  border-radius: 0.28571429rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
}

.ui.segment:first-child {
  margin-top: 0em;
}

.ui.segment:last-child {
  margin-bottom: 0em;
}

/* Vertical */

.ui.vertical.segment {
  margin: 0em;
  padding-left: 0em;
  padding-right: 0em;
  background: none transparent;
  border-radius: 0px;
  box-shadow: none;
  border: none;
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
}

.ui.vertical.segment:last-child {
  border-bottom: none;
}

/*-------------------
    Loose Coupling
--------------------*/

/* Header */

.ui.inverted.segment > .ui.header {
  color: #FFFFFF;
}

/* Label */

.ui[class*="bottom attached"].segment > [class*="top attached"].label {
  border-top-left-radius: 0em;
  border-top-right-radius: 0em;
}

.ui[class*="top attached"].segment > [class*="bottom attached"].label {
  border-bottom-left-radius: 0em;
  border-bottom-right-radius: 0em;
}

.ui.attached.segment:not(.top):not(.bottom) > [class*="top attached"].label {
  border-top-left-radius: 0em;
  border-top-right-radius: 0em;
}

.ui.attached.segment:not(.top):not(.bottom) > [class*="bottom attached"].label {
  border-bottom-left-radius: 0em;
  border-bottom-right-radius: 0em;
}

/* Grid */

.ui.page.grid.segment,
.ui.grid > .row > .ui.segment.column,
.ui.grid > .ui.segment.column {
  padding-top: 2em;
  padding-bottom: 2em;
}

.ui.grid.segment {
  margin: 1rem 0em;
  border-radius: 0.28571429rem;
}

/* Table */

.ui.basic.table.segment {
  background: #FFFFFF;
  border: 1px solid rgba(34, 36, 38, 0.15);
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
}

.ui[class*="very basic"].table.segment {
  padding: 1em 1em;
}

/*******************************
             Types
*******************************/

/*-------------------
        Piled
--------------------*/

.ui.piled.segments,
.ui.piled.segment {
  margin: 3em 0em;
  box-shadow: '';
  z-index: auto;
}

.ui.piled.segment:first-child {
  margin-top: 0em;
}

.ui.piled.segment:last-child {
  margin-bottom: 0em;
}

.ui.piled.segments:after,
.ui.piled.segments:before,
.ui.piled.segment:after,
.ui.piled.segment:before {
  background-color: #FFFFFF;
  visibility: visible;
  content: '';
  display: block;
  height: 100%;
  left: 0px;
  position: absolute;
  width: 100%;
  border: 1px solid rgba(34, 36, 38, 0.15);
  box-shadow: '';
}

.ui.piled.segments:before,
.ui.piled.segment:before {
  -webkit-transform: rotate(-1.2deg);
  transform: rotate(-1.2deg);
  top: 0;
  z-index: -2;
}

.ui.piled.segments:after,
.ui.piled.segment:after {
  -webkit-transform: rotate(1.2deg);
  transform: rotate(1.2deg);
  top: 0;
  z-index: -1;
}

/* Piled Attached */

.ui[class*="top attached"].piled.segment {
  margin-top: 3em;
  margin-bottom: 0em;
}

.ui.piled.segment[class*="top attached"]:first-child {
  margin-top: 0em;
}

.ui.piled.segment[class*="bottom attached"] {
  margin-top: 0em;
  margin-bottom: 3em;
}

.ui.piled.segment[class*="bottom attached"]:last-child {
  margin-bottom: 0em;
}

/*-------------------
       Stacked
--------------------*/

.ui.stacked.segment {
  padding-bottom: 1.4em;
}

.ui.stacked.segments:before,
.ui.stacked.segments:after,
.ui.stacked.segment:before,
.ui.stacked.segment:after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0%;
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  background: rgba(0, 0, 0, 0.03);
  width: 100%;
  height: 6px;
  visibility: visible;
}

.ui.stacked.segments:before,
.ui.stacked.segment:before {
  display: none;
}

/* Add additional page */

.ui.tall.stacked.segments:before,
.ui.tall.stacked.segment:before {
  display: block;
  bottom: 0px;
}

/* Inverted */

.ui.stacked.inverted.segments:before,
.ui.stacked.inverted.segments:after,
.ui.stacked.inverted.segment:before,
.ui.stacked.inverted.segment:after {
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(34, 36, 38, 0.35);
}

/*-------------------
       Padded
--------------------*/

.ui.padded.segment {
  padding: 1.5em;
}

.ui[class*="very padded"].segment {
  padding: 3em;
}

/*-------------------
       Compact
--------------------*/

.ui.compact.segment {
  display: table;
}

/* Compact Group */

.ui.compact.segments {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

.ui.compact.segments .segment,
.ui.segments .compact.segment {
  display: block;
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
}

/*-------------------
       Circular
--------------------*/

.ui.circular.segment {
  display: table-cell;
  padding: 2em;
  text-align: center;
  vertical-align: middle;
  border-radius: 500em;
}

/*-------------------
       Raised
--------------------*/

.ui.raised.segments,
.ui.raised.segment {
  box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.08);
}

/*******************************
            Groups
*******************************/

/* Group */

.ui.segments {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  margin: 1rem 0em;
  border: 1px solid rgba(34, 36, 38, 0.15);
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
}

.ui.segments:first-child {
  margin-top: 0em;
}

.ui.segments:last-child {
  margin-bottom: 0em;
}

/* Nested Segment */

.ui.segments > .segment {
  top: 0px;
  bottom: 0px;
  border-radius: 0px;
  margin: 0em;
  width: auto;
  box-shadow: none;
  border: none;
  border-top: 1px solid rgba(34, 36, 38, 0.15);
}

.ui.segments:not(.horizontal) > .segment:first-child {
  border-top: none;
  margin-top: 0em;
  bottom: 0px;
  margin-bottom: 0em;
  top: 0px;
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

/* Bottom */

.ui.segments:not(.horizontal) > .segment:last-child {
  top: 0px;
  bottom: 0px;
  margin-top: 0em;
  margin-bottom: 0em;
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15), none;
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}

/* Nested Group */

.ui.segments > .ui.segments {
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  margin: 1rem 1rem;
}

.ui.segments > .segments:first-child {
  border-top: none;
}

.ui.segments > .segment + .segments:not(.horizontal) {
  margin-top: 0em;
}

/* Horizontal Group */

.ui.horizontal.segments {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  background-color: transparent;
  border-radius: 0px;
  padding: 0em;
  background-color: #FFFFFF;
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
  margin: 1rem 0em;
  border-radius: 0.28571429rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
}

/* Nested Horizontal Group */

.ui.segments > .horizontal.segments {
  margin: 0em;
  background-color: transparent;
  border-radius: 0px;
  border: none;
  box-shadow: none;
  border-top: 1px solid rgba(34, 36, 38, 0.15);
}

/* Horizontal Segment */

.ui.horizontal.segments > .segment {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  -ms-flex: 1 1 0px;
  /* Solves #2550 MS Flex */
  margin: 0em;
  min-width: 0px;
  background-color: transparent;
  border-radius: 0px;
  border: none;
  box-shadow: none;
  border-left: 1px solid rgba(34, 36, 38, 0.15);
}

/* Border Fixes */

.ui.segments > .horizontal.segments:first-child {
  border-top: none;
}

.ui.horizontal.segments > .segment:first-child {
  border-left: none;
}

/*******************************
            States
*******************************/

/*--------------
    Disabled
---------------*/

.ui.disabled.segment {
  opacity: 0.45;
  color: rgba(40, 40, 40, 0.3);
}

/*--------------
    Loading
---------------*/

.ui.loading.segment {
  position: relative;
  cursor: default;
  point-events: none;
  text-shadow: none !important;
  color: transparent !important;
  -webkit-transition: all 0s linear;
  transition: all 0s linear;
}

.ui.loading.segment:before {
  position: absolute;
  content: '';
  top: 0%;
  left: 0%;
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  border-radius: 0.28571429rem;
  z-index: 100;
}

.ui.loading.segment:after {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  margin: -1.5em 0em 0em -1.5em;
  width: 3em;
  height: 3em;
  -webkit-animation: segment-spin 0.6s linear;
  animation: segment-spin 0.6s linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  border-radius: 500rem;
  border-color: #767676 rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-width: 0.2em;
  box-shadow: 0px 0px 0px 1px transparent;
  visibility: visible;
  z-index: 101;
}

@-webkit-keyframes segment-spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes segment-spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/*******************************
           Variations
*******************************/

/*-------------------
       Basic
--------------------*/

.ui.basic.segment {
  background: none transparent;
  box-shadow: none;
  border: none;
  border-radius: 0px;
}

/*-------------------
       Clearing
--------------------*/

.ui.clearing.segment:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

/*-------------------
       Colors
--------------------*/

/* Red */

.ui.red.segment:not(.inverted) {
  border-top: 2px solid #DB2828;
}

.ui.inverted.red.segment {
  background-color: #DB2828 !important;
  color: #FFFFFF !important;
}

/* Orange */

.ui.orange.segment:not(.inverted) {
  border-top: 2px solid #F2711C;
}

.ui.inverted.orange.segment {
  background-color: #F2711C !important;
  color: #FFFFFF !important;
}

/* Yellow */

.ui.yellow.segment:not(.inverted) {
  border-top: 2px solid #FBBD08;
}

.ui.inverted.yellow.segment {
  background-color: #FBBD08 !important;
  color: #FFFFFF !important;
}

/* Olive */

.ui.olive.segment:not(.inverted) {
  border-top: 2px solid #B5CC18;
}

.ui.inverted.olive.segment {
  background-color: #B5CC18 !important;
  color: #FFFFFF !important;
}

/* Green */

.ui.green.segment:not(.inverted) {
  border-top: 2px solid #21BA45;
}

.ui.inverted.green.segment {
  background-color: #21BA45 !important;
  color: #FFFFFF !important;
}

/* Teal */

.ui.teal.segment:not(.inverted) {
  border-top: 2px solid #00B5AD;
}

.ui.inverted.teal.segment {
  background-color: #00B5AD !important;
  color: #FFFFFF !important;
}

/* Blue */

.ui.blue.segment:not(.inverted) {
  border-top: 2px solid #2185D0;
}

.ui.inverted.blue.segment {
  background-color: #2185D0 !important;
  color: #FFFFFF !important;
}

/* Violet */

.ui.violet.segment:not(.inverted) {
  border-top: 2px solid #6435C9;
}

.ui.inverted.violet.segment {
  background-color: #6435C9 !important;
  color: #FFFFFF !important;
}

/* Purple */

.ui.purple.segment:not(.inverted) {
  border-top: 2px solid #A333C8;
}

.ui.inverted.purple.segment {
  background-color: #A333C8 !important;
  color: #FFFFFF !important;
}

/* Pink */

.ui.pink.segment:not(.inverted) {
  border-top: 2px solid #E03997;
}

.ui.inverted.pink.segment {
  background-color: #E03997 !important;
  color: #FFFFFF !important;
}

/* Brown */

.ui.brown.segment:not(.inverted) {
  border-top: 2px solid #A5673F;
}

.ui.inverted.brown.segment {
  background-color: #A5673F !important;
  color: #FFFFFF !important;
}

/* Grey */

.ui.grey.segment:not(.inverted) {
  border-top: 2px solid #767676;
}

.ui.inverted.grey.segment {
  background-color: #767676 !important;
  color: #FFFFFF !important;
}

/* Black */

.ui.black.segment:not(.inverted) {
  border-top: 2px solid #1B1C1D;
}

.ui.inverted.black.segment {
  background-color: #1B1C1D !important;
  color: #FFFFFF !important;
}

/*-------------------
       Aligned
--------------------*/

.ui[class*="left aligned"].segment {
  text-align: left;
}

.ui[class*="right aligned"].segment {
  text-align: right;
}

.ui[class*="center aligned"].segment {
  text-align: center;
}

/*-------------------
       Floated
--------------------*/

.ui.floated.segment,
.ui[class*="left floated"].segment {
  float: left;
  margin-right: 1em;
}

.ui[class*="right floated"].segment {
  float: right;
  margin-left: 1em;
}

/*-------------------
      Inverted
--------------------*/

.ui.inverted.segment {
  border: none;
  box-shadow: none;
}

.ui.inverted.segment,
.ui.primary.inverted.segment {
  background: #1B1C1D;
  color: rgba(255, 255, 255, 0.9);
}

/* Nested */

.ui.inverted.segment .segment {
  color: rgba(0, 0, 0, 0.87);
}

.ui.inverted.segment .inverted.segment {
  color: rgba(255, 255, 255, 0.9);
}

/* Attached */

.ui.inverted.attached.segment {
  border-color: #555555;
}

/*-------------------
     Emphasis
--------------------*/

/* Secondary */

.ui.secondary.segment {
  background: #F3F4F5;
  color: rgba(0, 0, 0, 0.6);
}

.ui.secondary.inverted.segment {
  background: #4c4f52 -webkit-linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%);
  background: #4c4f52 linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%);
  color: rgba(255, 255, 255, 0.8);
}

/* Tertiary */

.ui.tertiary.segment {
  background: #DCDDDE;
  color: rgba(0, 0, 0, 0.6);
}

.ui.tertiary.inverted.segment {
  background: #717579 -webkit-linear-gradient(rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.35) 100%);
  background: #717579 linear-gradient(rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.35) 100%);
  color: rgba(255, 255, 255, 0.8);
}

/*-------------------
      Attached
--------------------*/

/* Middle */

.ui.attached.segment {
  top: 0px;
  bottom: 0px;
  border-radius: 0px;
  margin: 0em -1px;
  width: calc(100% +  2px );
  max-width: calc(100% +  2px );
  box-shadow: none;
  border: 1px solid #D4D4D5;
}

.ui.attached + .ui.attached.segment:not(.top) {
  border-top: none;
}

/* Top */

.ui[class*="top attached"].segment {
  bottom: 0px;
  margin-bottom: 0em;
  top: 0px;
  margin-top: 1rem;
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

.ui.segment[class*="top attached"]:first-child {
  margin-top: 0em;
}

/* Bottom */

.ui.segment[class*="bottom attached"] {
  bottom: 0px;
  margin-top: 0em;
  top: 0px;
  margin-bottom: 1rem;
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15), none;
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}

.ui.segment[class*="bottom attached"]:last-child {
  margin-bottom: 0em;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Step
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Plural
*******************************/

.ui.steps {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  margin: 1em 0em;
  background: '';
  box-shadow: none;
  line-height: 1.14285714em;
  border-radius: 0.28571429rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
}

/* First Steps */

.ui.steps:first-child {
  margin-top: 0em;
}

/* Last Steps */

.ui.steps:last-child {
  margin-bottom: 0em;
}

/*******************************
           Singular
*******************************/

.ui.steps .step {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  vertical-align: middle;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0em 0em;
  padding: 1.14285714em 2em;
  background: #FFFFFF;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
  border-radius: 0em;
  border: none;
  border-right: 1px solid rgba(34, 36, 38, 0.15);
  -webkit-transition: background-color 0.1s ease, opacity 0.1s ease, color 0.1s ease, box-shadow 0.1s ease;
  transition: background-color 0.1s ease, opacity 0.1s ease, color 0.1s ease, box-shadow 0.1s ease;
}

/* Arrow */

.ui.steps .step:after {
  display: none;
  position: absolute;
  z-index: 2;
  content: '';
  top: 50%;
  right: 0%;
  border: medium none;
  background-color: #FFFFFF;
  width: 1.14285714em;
  height: 1.14285714em;
  border-style: solid;
  border-color: rgba(34, 36, 38, 0.15);
  border-width: 0px 1px 1px 0px;
  -webkit-transition: background-color 0.1s ease, opacity 0.1s ease, color 0.1s ease, box-shadow 0.1s ease;
  transition: background-color 0.1s ease, opacity 0.1s ease, color 0.1s ease, box-shadow 0.1s ease;
  -webkit-transform: translateY(-50%) translateX(50%) rotate(-45deg);
  transform: translateY(-50%) translateX(50%) rotate(-45deg);
}

/* First Step */

.ui.steps .step:first-child {
  padding-left: 2em;
  border-radius: 0.28571429rem 0em 0em 0.28571429rem;
}

/* Last Step */

.ui.steps .step:last-child {
  border-radius: 0em 0.28571429rem 0.28571429rem 0em;
}

.ui.steps .step:last-child {
  border-right: none;
  margin-right: 0em;
}

/* Only Step */

.ui.steps .step:only-child {
  border-radius: 0.28571429rem;
}

/*******************************
            Content
*******************************/

/* Title */

.ui.steps .step .title {
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  font-size: 1.14285714em;
  font-weight: bold;
}

.ui.steps .step > .title {
  width: 100%;
}

/* Description */

.ui.steps .step .description {
  font-weight: normal;
  font-size: 0.92857143em;
  color: rgba(0, 0, 0, 0.87);
}

.ui.steps .step > .description {
  width: 100%;
}

.ui.steps .step .title ~ .description {
  margin-top: 0.25em;
}

/* Icon */

.ui.steps .step > .icon {
  line-height: 1;
  font-size: 2.5em;
  margin: 0em 1rem 0em 0em;
}

.ui.steps .step > .icon,
.ui.steps .step > .icon ~ .content {
  display: block;
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: middle;
  -ms-flex-item-align: middle;
  align-self: middle;
}

.ui.steps .step > .icon ~ .content {
  -webkit-box-flex: 1 0 auto;
  -webkit-flex-grow: 1 0 auto;
  -ms-flex-positive: 1 0 auto;
  flex-grow: 1 0 auto;
}

/* Horizontal Icon */

.ui.steps:not(.vertical) .step > .icon {
  width: auto;
}

/* Link */

.ui.steps .link.step,
.ui.steps a.step {
  cursor: pointer;
}

/*******************************
            Types
*******************************/

/*--------------
     Ordered
---------------*/

.ui.ordered.steps {
  counter-reset: ordered;
}

.ui.ordered.steps .step:before {
  display: block;
  position: static;
  text-align: center;
  content: counters(ordered, ".");
  -webkit-align-self: middle;
  -ms-flex-item-align: middle;
  align-self: middle;
  margin-right: 1rem;
  font-size: 2.5em;
  counter-increment: ordered;
  font-family: inherit;
  font-weight: bold;
}

.ui.ordered.steps .step > * {
  display: block;
  -webkit-align-self: middle;
  -ms-flex-item-align: middle;
  align-self: middle;
}

/*--------------
    Vertical
---------------*/

.ui.vertical.steps {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: visible;
}

.ui.vertical.steps .step {
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  border-radius: 0em;
  padding: 1.14285714em 2em;
  border-right: none;
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
}

.ui.vertical.steps .step:first-child {
  padding: 1.14285714em 2em;
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

.ui.vertical.steps .step:last-child {
  border-bottom: none;
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}

.ui.vertical.steps .step:only-child {
  border-radius: 0.28571429rem;
}

/* Arrow */

.ui.vertical.steps .step:after {
  display: none;
}

.ui.vertical.steps .step:after {
  top: 50%;
  right: 0%;
  border-width: 0px 1px 1px 0px;
}

.ui.vertical.steps .step:after {
  display: none;
}

.ui.vertical.steps .active.step:after {
  display: block;
}

.ui.vertical.steps .step:last-child:after {
  display: none;
}

.ui.vertical.steps .active.step:last-child:after {
  display: block;
}

/*---------------
    Responsive
----------------*/

/* Mobile (Default) */

@media only screen and (max-width: 767px) {
  .ui.steps {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    overflow: visible;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .ui.steps .step {
    width: 100% !important;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    border-radius: 0em;
    padding: 1.14285714em 2em;
  }

  .ui.steps .step:first-child {
    padding: 1.14285714em 2em;
    border-radius: 0.28571429rem 0.28571429rem 0em 0em;
  }

  .ui.steps .step:last-child {
    border-radius: 0em 0em 0.28571429rem 0.28571429rem;
  }

  /* Arrow */

  .ui.steps .step:after {
    display: none !important;
  }

  /* Content */

  .ui.steps .step .content {
    text-align: center;
  }

  /* Icon */

  .ui.steps .step > .icon,
  .ui.ordered.steps .step:before {
    margin: 0em 0em 1rem 0em;
  }
}

/*******************************
             States
*******************************/

/* Link Hover */

.ui.steps .link.step:hover::after,
.ui.steps .link.step:hover,
.ui.steps a.step:hover::after,
.ui.steps a.step:hover {
  background: #F9FAFB;
  color: rgba(0, 0, 0, 0.8);
}

/* Link Down */

.ui.steps .link.step:active::after,
.ui.steps .link.step:active,
.ui.steps a.step:active::after,
.ui.steps a.step:active {
  background: #F3F4F5;
  color: rgba(0, 0, 0, 0.9);
}

/* Active */

.ui.steps .step.active {
  cursor: auto;
  background: #F3F4F5;
}

.ui.steps .step.active:after {
  background: #F3F4F5;
}

.ui.steps .step.active .title {
  color: #4183C4;
}

.ui.ordered.steps .step.active:before,
.ui.steps .active.step .icon {
  color: rgba(0, 0, 0, 0.85);
}

/* Active Arrow */

.ui.steps .step:after {
  display: block;
}

.ui.steps .active.step:after {
  display: block;
}

.ui.steps .step:last-child:after {
  display: none;
}

.ui.steps .active.step:last-child:after {
  display: none;
}

/* Active Hover */

.ui.steps .link.active.step:hover::after,
.ui.steps .link.active.step:hover,
.ui.steps a.active.step:hover::after,
.ui.steps a.active.step:hover {
  cursor: pointer;
  background: #DCDDDE;
  color: rgba(0, 0, 0, 0.87);
}

/* Completed */

.ui.steps .step.completed > .icon:before,
.ui.ordered.steps .step.completed:before {
  color: #21BA45;
}

/* Disabled */

.ui.steps .disabled.step {
  cursor: auto;
  background: #FFFFFF;
  pointer-events: none;
}

.ui.steps .disabled.step,
.ui.steps .disabled.step .title,
.ui.steps .disabled.step .description {
  color: rgba(40, 40, 40, 0.3);
}

.ui.steps .disabled.step:after {
  background: #FFFFFF;
}

/*******************************
           Variations
*******************************/

/*--------------
   Stackable
---------------*/

/* Tablet Or Below */

@media only screen and (max-width: 991px) {
  .ui[class*="tablet stackable"].steps {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    overflow: visible;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  /* Steps */

  .ui[class*="tablet stackable"].steps .step {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    border-radius: 0em;
    padding: 1.14285714em 2em;
  }

  .ui[class*="tablet stackable"].steps .step:first-child {
    padding: 1.14285714em 2em;
    border-radius: 0.28571429rem 0.28571429rem 0em 0em;
  }

  .ui[class*="tablet stackable"].steps .step:last-child {
    border-radius: 0em 0em 0.28571429rem 0.28571429rem;
  }

  /* Arrow */

  .ui[class*="tablet stackable"].steps .step:after {
    display: none !important;
  }

  /* Content */

  .ui[class*="tablet stackable"].steps .step .content {
    text-align: center;
  }

  /* Icon */

  .ui[class*="tablet stackable"].steps .step > .icon,
  .ui[class*="tablet stackable"].ordered.steps .step:before {
    margin: 0em 0em 1rem 0em;
  }
}

/*--------------
      Fluid
---------------*/

/* Fluid */

.ui.fluid.steps {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}

/*--------------
    Attached
---------------*/

/* Top */

.ui.attached.steps {
  width: calc(100% +  2px ) !important;
  margin: 0em -1px -1px;
  max-width: calc(100% +  2px );
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

.ui.attached.steps .step:first-child {
  border-radius: 0.28571429rem 0em 0em 0em;
}

.ui.attached.steps .step:last-child {
  border-radius: 0em 0.28571429rem 0em 0em;
}

/* Bottom */

.ui.bottom.attached.steps {
  margin: -1px -1px 0em;
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}

.ui.bottom.attached.steps .step:first-child {
  border-radius: 0em 0em 0em 0.28571429rem;
}

.ui.bottom.attached.steps .step:last-child {
  border-radius: 0em 0em 0.28571429rem 0em;
}

/*-------------------
    Evenly Divided
--------------------*/

.ui.one.steps,
.ui.two.steps,
.ui.three.steps,
.ui.four.steps,
.ui.five.steps,
.ui.six.steps,
.ui.seven.steps,
.ui.eight.steps {
  width: 100%;
}

.ui.one.steps > .step,
.ui.two.steps > .step,
.ui.three.steps > .step,
.ui.four.steps > .step,
.ui.five.steps > .step,
.ui.six.steps > .step,
.ui.seven.steps > .step,
.ui.eight.steps > .step {
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
}

.ui.one.steps > .step {
  width: 100%;
}

.ui.two.steps > .step {
  width: 50%;
}

.ui.three.steps > .step {
  width: 33.333%;
}

.ui.four.steps > .step {
  width: 25%;
}

.ui.five.steps > .step {
  width: 20%;
}

.ui.six.steps > .step {
  width: 16.666%;
}

.ui.seven.steps > .step {
  width: 14.285%;
}

.ui.eight.steps > .step {
  width: 12.500%;
}

/*-------------------
       Sizes
--------------------*/

.ui.small.step,
.ui.small.steps .step {
  font-size: 0.92857143rem;
}

.ui.step,
.ui.steps .step {
  font-size: 1rem;
}

.ui.large.step,
.ui.large.steps .step {
  font-size: 1.14285714rem;
}

/*******************************
         Theme Overrides
*******************************/

@font-face {
  font-family: 'Step';
  src: url("data:application/x-font-ttf;charset=utf-8;;base64,AAEAAAAOAIAAAwBgT1MvMj3hSQEAAADsAAAAVmNtYXDQEhm3AAABRAAAAUpjdnQgBkn/lAAABuwAAAAcZnBnbYoKeDsAAAcIAAAJkWdhc3AAAAAQAAAG5AAAAAhnbHlm32cEdgAAApAAAAC2aGVhZAErPHsAAANIAAAANmhoZWEHUwNNAAADgAAAACRobXR4CykAAAAAA6QAAAAMbG9jYQA4AFsAAAOwAAAACG1heHAApgm8AAADuAAAACBuYW1lzJ0aHAAAA9gAAALNcG9zdK69QJgAAAaoAAAAO3ByZXCSoZr/AAAQnAAAAFYAAQO4AZAABQAIAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA6ADoAQNS/2oAWgMLAE8AAAABAAAAAAAAAAAAAwAAAAMAAAAcAAEAAAAAAEQAAwABAAAAHAAEACgAAAAGAAQAAQACAADoAf//AAAAAOgA//8AABgBAAEAAAAAAAAAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAADpAKYABUAHEAZDwEAAQFCAAIBAmoAAQABagAAAGEUFxQDEisBFAcBBiInASY0PwE2Mh8BATYyHwEWA6QP/iAQLBD+6g8PTBAsEKQBbhAsEEwPAhYWEP4gDw8BFhAsEEwQEKUBbxAQTBAAAAH//f+xA18DCwAMABJADwABAQpDAAAACwBEFRMCESsBFA4BIi4CPgEyHgEDWXLG6MhuBnq89Lp+AV51xHR0xOrEdHTEAAAAAAEAAAABAADDeRpdXw889QALA+gAAAAAzzWYjQAAAADPNWBN//3/sQOkAwsAAAAIAAIAAAAAAAAAAQAAA1L/agBaA+gAAP/3A6QAAQAAAAAAAAAAAAAAAAAAAAMD6AAAA+gAAANZAAAAAAAAADgAWwABAAAAAwAWAAEAAAAAAAIABgATAG4AAAAtCZEAAAAAAAAAEgDeAAEAAAAAAAAANQAAAAEAAAAAAAEACAA1AAEAAAAAAAIABwA9AAEAAAAAAAMACABEAAEAAAAAAAQACABMAAEAAAAAAAUACwBUAAEAAAAAAAYACABfAAEAAAAAAAoAKwBnAAEAAAAAAAsAEwCSAAMAAQQJAAAAagClAAMAAQQJAAEAEAEPAAMAAQQJAAIADgEfAAMAAQQJAAMAEAEtAAMAAQQJAAQAEAE9AAMAAQQJAAUAFgFNAAMAAQQJAAYAEAFjAAMAAQQJAAoAVgFzAAMAAQQJAAsAJgHJQ29weXJpZ2h0IChDKSAyMDE0IGJ5IG9yaWdpbmFsIGF1dGhvcnMgQCBmb250ZWxsby5jb21mb250ZWxsb1JlZ3VsYXJmb250ZWxsb2ZvbnRlbGxvVmVyc2lvbiAxLjBmb250ZWxsb0dlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAEMAbwBwAHkAcgBpAGcAaAB0ACAAKABDACkAIAAyADAAMQA0ACAAYgB5ACAAbwByAGkAZwBpAG4AYQBsACAAYQB1AHQAaABvAHIAcwAgAEAAIABmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQBmAG8AbgB0AGUAbABsAG8AUgBlAGcAdQBsAGEAcgBmAG8AbgB0AGUAbABsAG8AZgBvAG4AdABlAGwAbABvAFYAZQByAHMAaQBvAG4AIAAxAC4AMABmAG8AbgB0AGUAbABsAG8ARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAQIBAwljaGVja21hcmsGY2lyY2xlAAAAAAEAAf//AA8AAAAAAAAAAAAAAAAAAAAAADIAMgML/7EDC/+xsAAssCBgZi2wASwgZCCwwFCwBCZasARFW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCwCkVhZLAoUFghsApFILAwUFghsDBZGyCwwFBYIGYgiophILAKUFhgGyCwIFBYIbAKYBsgsDZQWCGwNmAbYFlZWRuwACtZWSOwAFBYZVlZLbACLCBFILAEJWFkILAFQ1BYsAUjQrAGI0IbISFZsAFgLbADLCMhIyEgZLEFYkIgsAYjQrIKAAIqISCwBkMgiiCKsAArsTAFJYpRWGBQG2FSWVgjWSEgsEBTWLAAKxshsEBZI7AAUFhlWS2wBCywB0MrsgACAENgQi2wBSywByNCIyCwACNCYbCAYrABYLAEKi2wBiwgIEUgsAJFY7ABRWJgRLABYC2wBywgIEUgsAArI7ECBCVgIEWKI2EgZCCwIFBYIbAAG7AwUFiwIBuwQFlZI7AAUFhlWbADJSNhRESwAWAtsAgssQUFRbABYUQtsAkssAFgICCwCUNKsABQWCCwCSNCWbAKQ0qwAFJYILAKI0JZLbAKLCC4BABiILgEAGOKI2GwC0NgIIpgILALI0IjLbALLEtUWLEHAURZJLANZSN4LbAMLEtRWEtTWLEHAURZGyFZJLATZSN4LbANLLEADENVWLEMDEOwAWFCsAorWbAAQ7ACJUKxCQIlQrEKAiVCsAEWIyCwAyVQWLEBAENgsAQlQoqKIIojYbAJKiEjsAFhIIojYbAJKiEbsQEAQ2CwAiVCsAIlYbAJKiFZsAlDR7AKQ0dgsIBiILACRWOwAUViYLEAABMjRLABQ7AAPrIBAQFDYEItsA4ssQAFRVRYALAMI0IgYLABYbUNDQEACwBCQopgsQ0FK7BtKxsiWS2wDyyxAA4rLbAQLLEBDistsBEssQIOKy2wEiyxAw4rLbATLLEEDistsBQssQUOKy2wFSyxBg4rLbAWLLEHDistsBcssQgOKy2wGCyxCQ4rLbAZLLAIK7EABUVUWACwDCNCIGCwAWG1DQ0BAAsAQkKKYLENBSuwbSsbIlktsBossQAZKy2wGyyxARkrLbAcLLECGSstsB0ssQMZKy2wHiyxBBkrLbAfLLEFGSstsCAssQYZKy2wISyxBxkrLbAiLLEIGSstsCMssQkZKy2wJCwgPLABYC2wJSwgYLANYCBDI7ABYEOwAiVhsAFgsCQqIS2wJiywJSuwJSotsCcsICBHICCwAkVjsAFFYmAjYTgjIIpVWCBHICCwAkVjsAFFYmAjYTgbIVktsCgssQAFRVRYALABFrAnKrABFTAbIlktsCkssAgrsQAFRVRYALABFrAnKrABFTAbIlktsCosIDWwAWAtsCssALADRWOwAUVisAArsAJFY7ABRWKwACuwABa0AAAAAABEPiM4sSoBFSotsCwsIDwgRyCwAkVjsAFFYmCwAENhOC2wLSwuFzwtsC4sIDwgRyCwAkVjsAFFYmCwAENhsAFDYzgtsC8ssQIAFiUgLiBHsAAjQrACJUmKikcjRyNhIFhiGyFZsAEjQrIuAQEVFCotsDAssAAWsAQlsAQlRyNHI2GwBkUrZYouIyAgPIo4LbAxLLAAFrAEJbAEJSAuRyNHI2EgsAQjQrAGRSsgsGBQWCCwQFFYswIgAyAbswImAxpZQkIjILAIQyCKI0cjRyNhI0ZgsARDsIBiYCCwACsgiophILACQ2BkI7ADQ2FkUFiwAkNhG7ADQ2BZsAMlsIBiYSMgILAEJiNGYTgbI7AIQ0awAiWwCENHI0cjYWAgsARDsIBiYCMgsAArI7AEQ2CwACuwBSVhsAUlsIBisAQmYSCwBCVgZCOwAyVgZFBYIRsjIVkjICCwBCYjRmE4WS2wMiywABYgICCwBSYgLkcjRyNhIzw4LbAzLLAAFiCwCCNCICAgRiNHsAArI2E4LbA0LLAAFrADJbACJUcjRyNhsABUWC4gPCMhG7ACJbACJUcjRyNhILAFJbAEJUcjRyNhsAYlsAUlSbACJWGwAUVjIyBYYhshWWOwAUViYCMuIyAgPIo4IyFZLbA1LLAAFiCwCEMgLkcjRyNhIGCwIGBmsIBiIyAgPIo4LbA2LCMgLkawAiVGUlggPFkusSYBFCstsDcsIyAuRrACJUZQWCA8WS6xJgEUKy2wOCwjIC5GsAIlRlJYIDxZIyAuRrACJUZQWCA8WS6xJgEUKy2wOSywMCsjIC5GsAIlRlJYIDxZLrEmARQrLbA6LLAxK4ogIDywBCNCijgjIC5GsAIlRlJYIDxZLrEmARQrsARDLrAmKy2wOyywABawBCWwBCYgLkcjRyNhsAZFKyMgPCAuIzixJgEUKy2wPCyxCAQlQrAAFrAEJbAEJSAuRyNHI2EgsAQjQrAGRSsgsGBQWCCwQFFYswIgAyAbswImAxpZQkIjIEewBEOwgGJgILAAKyCKimEgsAJDYGQjsANDYWRQWLACQ2EbsANDYFmwAyWwgGJhsAIlRmE4IyA8IzgbISAgRiNHsAArI2E4IVmxJgEUKy2wPSywMCsusSYBFCstsD4ssDErISMgIDywBCNCIzixJgEUK7AEQy6wJistsD8ssAAVIEewACNCsgABARUUEy6wLCotsEAssAAVIEewACNCsgABARUUEy6wLCotsEEssQABFBOwLSotsEIssC8qLbBDLLAAFkUjIC4gRoojYTixJgEUKy2wRCywCCNCsEMrLbBFLLIAADwrLbBGLLIAATwrLbBHLLIBADwrLbBILLIBATwrLbBJLLIAAD0rLbBKLLIAAT0rLbBLLLIBAD0rLbBMLLIBAT0rLbBNLLIAADkrLbBOLLIAATkrLbBPLLIBADkrLbBQLLIBATkrLbBRLLIAADsrLbBSLLIAATsrLbBTLLIBADsrLbBULLIBATsrLbBVLLIAAD4rLbBWLLIAAT4rLbBXLLIBAD4rLbBYLLIBAT4rLbBZLLIAADorLbBaLLIAATorLbBbLLIBADorLbBcLLIBATorLbBdLLAyKy6xJgEUKy2wXiywMiuwNistsF8ssDIrsDcrLbBgLLAAFrAyK7A4Ky2wYSywMysusSYBFCstsGIssDMrsDYrLbBjLLAzK7A3Ky2wZCywMyuwOCstsGUssDQrLrEmARQrLbBmLLA0K7A2Ky2wZyywNCuwNystsGgssDQrsDgrLbBpLLA1Ky6xJgEUKy2waiywNSuwNistsGsssDUrsDcrLbBsLLA1K7A4Ky2wbSwrsAhlsAMkUHiwARUwLQAAAEu4AMhSWLEBAY5ZuQgACABjILABI0SwAyNwsgQoCUVSRLIKAgcqsQYBRLEkAYhRWLBAiFixBgNEsSYBiFFYuAQAiFixBgFEWVlZWbgB/4WwBI2xBQBEAAA=") format('truetype'), url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAoUAA4AAAAAEPQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABRAAAAEQAAABWPeFJAWNtYXAAAAGIAAAAOgAAAUrQEhm3Y3Z0IAAAAcQAAAAUAAAAHAZJ/5RmcGdtAAAB2AAABPkAAAmRigp4O2dhc3AAAAbUAAAACAAAAAgAAAAQZ2x5ZgAABtwAAACuAAAAtt9nBHZoZWFkAAAHjAAAADUAAAA2ASs8e2hoZWEAAAfEAAAAIAAAACQHUwNNaG10eAAAB+QAAAAMAAAADAspAABsb2NhAAAH8AAAAAgAAAAIADgAW21heHAAAAf4AAAAIAAAACAApgm8bmFtZQAACBgAAAF3AAACzcydGhxwb3N0AAAJkAAAACoAAAA7rr1AmHByZXAAAAm8AAAAVgAAAFaSoZr/eJxjYGTewTiBgZWBg6mKaQ8DA0MPhGZ8wGDIyMTAwMTAysyAFQSkuaYwOLxgeMHIHPQ/iyGKmZvBHyjMCJIDAPe9C2B4nGNgYGBmgGAZBkYGEHAB8hjBfBYGDSDNBqQZGZgYGF4w/v8PUvCCAURLMELVAwEjG8OIBwBk5AavAAB4nGNgQANGDEbM3P83gjAAELQD4XicnVXZdtNWFJU8ZHASOmSgoA7X3DhQ68qEKRgwaSrFdiEdHAitBB2kDHTkncc+62uOQrtWH/m07n09JLR0rbYsls++R1tn2DrnRhwjKn0aiGvUoZKXA6msPZZK90lc13Uvj5UMBnFdthJPSZuonSRKat3sUC7xWOsqWSdYJ+PlIFZPVZ5noAziFB5lSUQbRBuplyZJ4onjJ4kWZxAfJUkgJaMQp9LIUEI1GsRS1aFM6dCr1xNx00DKRqMedVhU90PFJ8c1p9SsA0YqVznCFevVRr4bpwMve5DEOsGzrYcxHnisfpQqkIqR6cg/dkpOlIaBVHHUoVbi6DCTX/eRTCrNQKaMYkWl7oG43f102xYxPXQ6vi5KlUaqurnOKJrt0fGogygP2cbppNzQ2fbw5RlTVKtdcbPtQGYNXErJbHSfRAAdJlLj6QFONZwCqRn1R8XZ588BEslclKo8VTKHegOZMzt7cTHtbiersnCknwcyb3Z2452HQ6dXh3/R+hdM4cxHj+Jifj5C+lBqfiJOJKVGWMzyp4YfcVcgQrkxiAsXyuBThDl0RdrZZl3jtTH2hs/5SqlhPQna6KP4fgr9TiQrHGdRo/VInM1j13Wt3GdQS7W7Fzsyr0OVIu7vCwuuM+eEYZ4WC1VfnvneBTT/Bohn/EDeNIVL+5YpSrRvm6JMu2iKCu0SVKVdNsUU7YoppmnPmmKG9h1TzNKeMzLj/8vc55H7HN7xkJv2XeSmfQ+5ad9HbtoPkJtWITdtHblpLyA3rUZu2lWjOnYEGgZpF1IVQdA0svph3Fab9UDWjDR8aWDyLmLI+upER521tcofxX914gsHcmmip7siF5viLq/bFj483e6rj5pG3bDV+MaR8jAeRnocmtBZ+c3hv+1N3S6a7jKqMugBFUwKwABl7UAC0zrbCaT1mqf48gdgXIZ4zkpDtVSfO4am7+V5X/exOfG+x+3GLrdcd3kJWdYNcmP28N9SZKrrH+UtrVQnR6wrJ49VaxhDKrwour6SlHu0tRu/KKmy8l6U1srnk5CbPYMbQlu27mGwI0xpyiUeXlOlKD3UUo6yQyxvKco84JSLC1qGxLgOdQ9qa8TpoXoYGwshhqG0vRBwSCldFd+0ynfxHqtr2Oj4xRXh6XpyEhGf4ir7UfBU10b96A7avGbdMoMpVaqn+4xPsa/b9lFZaaSOsxe3VAfXNOsaORXTT+Rr4HRvOGjdAz1UfDRBI1U1x+jGKGM0ljXl3wR0MVZ+w2jVYvs93E+dpFWsuUuY7JsT9+C0u/0q+7WcW0bW/dcGvW3kip8jMb8tCvw7B2K3ZA3UO5OBGAvIWdAYxhYmdxiug23EbfY/Jqf/34aFRXJXOxq7eerD1ZNRJXfZ8rjLTXZZ16M2R9VOGvsIjS0PN+bY4XIstsRgQbb+wf8x7gF3aVEC4NDIZZiI2nShnurh6h6rsW04VxIBds2x43QAegAuQd8cu9bzCYD13CPnLsB9cgh2yCH4lByCz8i5BfA5OQRfkEMwIIdgl5w7AA/IIXhIDsEeOQSPyNkE+JIcgq/IIYjJIUjIuQ3wmByCJ+QQfE0OwTdGrk5k/pYH2QD6zqKbQKmdGhzaOGRGrk3Y+zxY9oFFZB9aROqRkesT6lMeLPV7i0j9wSJSfzRyY0L9iQdL/dkiUn+xiNRnxpeZIymvDp7zjg7+BJfqrV4AAAAAAQAB//8AD3icY2BkAALmJUwzGEQZZBwk+RkZGBmdGJgYmbIYgMwsoGSiiLgIs5A2owg7I5uSOqOaiT2jmZE8I5gQY17C/09BQEfg3yt+fh8gvYQxD0j68DOJiQn8U+DnZxQDcQUEljLmCwBpBgbG/3//b2SOZ+Zm4GEQcuAH2sblDLSEm8FFVJhJEGgLH6OSHpMdo5EcI3Nk0bEXJ/LYqvZ82VXHGFd6pKTkyCsQwQAAq+QkqAAAeJxjYGRgYADiw5VSsfH8Nl8ZuJlfAEUYzpvO6IXQCb7///7fyLyEmRvI5WBgAokCAFb/DJAAAAB4nGNgZGBgDvqfxRDF/IKB4f935iUMQBEUwAwAi5YFpgPoAAAD6AAAA1kAAAAAAAAAOABbAAEAAAADABYAAQAAAAAAAgAGABMAbgAAAC0JkQAAAAB4nHWQy2rCQBSG//HSi0JbWui2sypKabxgN4IgWHTTbqS4LTHGJBIzMhkFX6Pv0IfpS/RZ+puMpShNmMx3vjlz5mQAXOMbAvnzxJGzwBmjnAs4Rc9ykf7Zcon8YrmMKt4sn9C/W67gAYHlKm7wwQqidM5ogU/LAlfi0nIBF+LOcpH+0XKJ3LNcxq14tXxC71muYCJSy1Xci6+BWm11FIRG1gZ12W62OnK6lYoqStxYumsTKp3KvpyrxPhxrBxPLfc89oN17Op9uJ8nvk4jlciW09yrkZ/42jX+bFc93QRtY+ZyrtVSDm2GXGm18D3jhMasuo3G3/MwgMIKW2hEvKoQBhI12jrnNppooUOaMkMyM8+KkMBFTONizR1htpIy7nPMGSW0PjNisgOP3+WRH5MC7o9ZRR+tHsYT0u6MKPOSfTns7jBrREqyTDezs9/eU2x4WpvWcNeuS511JTE8qCF5H7u1BY1H72S3Ymi7aPD95/9+AN1fhEsAeJxjYGKAAC4G7ICZgYGRiZGZMzkjNTk7N7Eomy05syg5J5WBAQBE1QZBAABLuADIUlixAQGOWbkIAAgAYyCwASNEsAMjcLIEKAlFUkSyCgIHKrEGAUSxJAGIUViwQIhYsQYDRLEmAYhRWLgEAIhYsQYBRFlZWVm4Af+FsASNsQUARAAA") format('woff');
}

.ui.steps .step.completed > .icon:before,
.ui.ordered.steps .step.completed:before {
  font-family: 'Step';
  content: '\e800';
  /* '' */
}

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Breadcrumb
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
           Breadcrumb
*******************************/

.ui.breadcrumb {
  line-height: 1;
  display: inline-block;
  margin: 0em 0em;
  vertical-align: middle;
}

.ui.breadcrumb:first-child {
  margin-top: 0em;
}

.ui.breadcrumb:last-child {
  margin-bottom: 0em;
}

/*******************************
          Content
*******************************/

/* Divider */

.ui.breadcrumb .divider {
  display: inline-block;
  opacity: 0.7;
  margin: 0em 0.21428571rem 0em;
  font-size: 0.92857143em;
  color: rgba(0, 0, 0, 0.4);
  vertical-align: baseline;
}

/* Link */

.ui.breadcrumb a {
  color: #4183C4;
}

.ui.breadcrumb a:hover {
  color: #1e70bf;
}

/* Icon Divider */

.ui.breadcrumb .icon.divider {
  font-size: 0.85714286em;
  vertical-align: baseline;
}

/* Section */

.ui.breadcrumb a.section {
  cursor: pointer;
}

.ui.breadcrumb .section {
  display: inline-block;
  margin: 0em;
  padding: 0em;
}

/* Loose Coupling */

.ui.breadcrumb.segment {
  display: inline-block;
  padding: 0.71428571em 1em;
}

/*******************************
            States
*******************************/

.ui.breadcrumb .active.section {
  font-weight: bold;
}

/*******************************
           Variations
*******************************/

.ui.mini.breadcrumb {
  font-size: 0.71428571rem;
}

.ui.tiny.breadcrumb {
  font-size: 0.85714286rem;
}

.ui.small.breadcrumb {
  font-size: 0.92857143rem;
}

.ui.breadcrumb {
  font-size: 1rem;
}

.ui.large.breadcrumb {
  font-size: 1.14285714rem;
}

.ui.big.breadcrumb {
  font-size: 1.28571429rem;
}

.ui.huge.breadcrumb {
  font-size: 1.42857143rem;
}

.ui.massive.breadcrumb {
  font-size: 1.71428571rem;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Form
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Elements
*******************************/

/*--------------------
        Form
---------------------*/

.ui.form {
  position: relative;
  max-width: 100%;
}

/*--------------------
        Content
---------------------*/

.ui.form > p {
  margin: 1em 0em;
}

/*--------------------
        Field
---------------------*/

.ui.form .field {
  clear: both;
  margin: 0em 0em 1em;
}

.ui.form .field:last-child,
.ui.form .fields:last-child .field {
  margin-bottom: 0em;
}

.ui.form .fields .field {
  clear: both;
  margin: 0em 0em 1em;
}

/*--------------------
        Labels
---------------------*/

.ui.form .field > label {
  display: block;
  margin: 0em 0em 0.28571429rem 0em;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.92857143em;
  font-weight: bold;
  text-transform: none;
}

/*--------------------
    Standard Inputs
---------------------*/

.ui.form textarea,
.ui.form input:not([type]),
.ui.form input[type="date"],
.ui.form input[type="datetime-local"],
.ui.form input[type="email"],
.ui.form input[type="number"],
.ui.form input[type="password"],
.ui.form input[type="search"],
.ui.form input[type="tel"],
.ui.form input[type="time"],
.ui.form input[type="text"],
.ui.form input[type="url"] {
  width: 100%;
  vertical-align: top;
}

/* Set max height on unusual input */

.ui.form ::-webkit-datetime-edit,
.ui.form ::-webkit-inner-spin-button {
  height: 1.2142em;
}

.ui.form input:not([type]),
.ui.form input[type="date"],
.ui.form input[type="datetime-local"],
.ui.form input[type="email"],
.ui.form input[type="number"],
.ui.form input[type="password"],
.ui.form input[type="search"],
.ui.form input[type="tel"],
.ui.form input[type="time"],
.ui.form input[type="text"],
.ui.form input[type="url"] {
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  margin: 0em;
  outline: none;
  -webkit-appearance: none;
  tap-highlight-color: rgba(255, 255, 255, 0);
  line-height: 1.2142em;
  padding: 0.67861429em 1em;
  font-size: 1em;
  background: #FFFFFF;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0em 0em 0em 0em transparent inset;
  -webkit-transition: color 0.1s ease, border-color 0.1s ease;
  transition: color 0.1s ease, border-color 0.1s ease;
}

/* Text Area */

.ui.form textarea {
  margin: 0em;
  -webkit-appearance: none;
  tap-highlight-color: rgba(255, 255, 255, 0);
  padding: 0.78571429em 1em;
  background: #FFFFFF;
  border: 1px solid rgba(34, 36, 38, 0.15);
  outline: none;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0em 0em 0em 0em transparent inset;
  -webkit-transition: color 0.1s ease, border-color 0.1s ease;
  transition: color 0.1s ease, border-color 0.1s ease;
  font-size: 1em;
  line-height: 1.2857;
  resize: vertical;
}

.ui.form textarea:not([rows]) {
  height: 12em;
  min-height: 8em;
  max-height: 24em;
}

.ui.form textarea,
.ui.form input[type="checkbox"] {
  vertical-align: top;
}

/*--------------------------
  Input w/ attached Button
---------------------------*/

.ui.form input.attached {
  width: auto;
}

/*--------------------
     Basic Select
---------------------*/

.ui.form select {
  display: block;
  height: auto;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
  box-shadow: 0em 0em 0em 0em transparent inset;
  padding: 0.62em 1em;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: color 0.1s ease, border-color 0.1s ease;
  transition: color 0.1s ease, border-color 0.1s ease;
}

/*--------------------
       Dropdown
---------------------*/

/* Block */

.ui.form .field > .selection.dropdown {
  width: 100%;
}

.ui.form .field > .selection.dropdown > .dropdown.icon {
  float: right;
}

/* Inline */

.ui.form .inline.fields .field > .selection.dropdown,
.ui.form .inline.field > .selection.dropdown {
  width: auto;
}

.ui.form .inline.fields .field > .selection.dropdown > .dropdown.icon,
.ui.form .inline.field > .selection.dropdown > .dropdown.icon {
  float: none;
}

/*--------------------
       UI Input
---------------------*/

/* Block */

.ui.form .field .ui.input,
.ui.form .fields .field .ui.input,
.ui.form .wide.field .ui.input {
  width: 100%;
}

/* Inline  */

.ui.form .inline.fields .field:not(.wide) .ui.input,
.ui.form .inline.field:not(.wide) .ui.input {
  width: auto;
  vertical-align: middle;
}

/* Auto Input */

.ui.form .fields .field .ui.input input,
.ui.form .field .ui.input input {
  width: auto;
}

/* Full Width Input */

.ui.form .ten.fields .ui.input input,
.ui.form .nine.fields .ui.input input,
.ui.form .eight.fields .ui.input input,
.ui.form .seven.fields .ui.input input,
.ui.form .six.fields .ui.input input,
.ui.form .five.fields .ui.input input,
.ui.form .four.fields .ui.input input,
.ui.form .three.fields .ui.input input,
.ui.form .two.fields .ui.input input,
.ui.form .wide.field .ui.input input {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  width: 0px;
}

/*--------------------
   Types of Messages
---------------------*/

.ui.form .success.message,
.ui.form .warning.message,
.ui.form .error.message {
  display: none;
}

/* Assumptions */

.ui.form .message:first-child {
  margin-top: 0px;
}

/*--------------------
   Validation Prompt
---------------------*/

.ui.form .field .prompt.label {
  white-space: normal;
  background: #FFFFFF !important;
  border: 1px solid #E0B4B4 !important;
  color: #9F3A38 !important;
}

.ui.form .inline.fields .field .prompt,
.ui.form .inline.field .prompt {
  vertical-align: top;
  margin: -0.25em 0em -0.5em 0.5em;
}

.ui.form .inline.fields .field .prompt:before,
.ui.form .inline.field .prompt:before {
  border-width: 0px 0px 1px 1px;
  bottom: auto;
  right: auto;
  top: 50%;
  left: 0em;
}

/*******************************
            States
*******************************/

/*--------------------
      Autofilled
---------------------*/

.ui.form .field.field input:-webkit-autofill {
  box-shadow: 0px 0px 0px 100px #FFFFF0 inset !important;
  border-color: #E5DFA1 !important;
}

/* Focus */

.ui.form .field.field input:-webkit-autofill:focus {
  box-shadow: 0px 0px 0px 100px #FFFFF0 inset !important;
  border-color: #D5C315 !important;
}

/* Error */

.ui.form .error.error input:-webkit-autofill {
  box-shadow: 0px 0px 0px 100px #FFFAF0 inset !important;
  border-color: #E0B4B4 !important;
}

/*--------------------
      Placeholder
---------------------*/

/* browsers require these rules separate */

.ui.form ::-webkit-input-placeholder {
  color: rgba(140, 140, 140, 0.87);
}

.ui.form ::-ms-input-placeholder {
  color: rgba(140, 140, 140, 0.87);
}

.ui.form ::-moz-placeholder {
  color: rgba(140, 140, 140, 0.87);
}

.ui.form :focus::-webkit-input-placeholder {
  color: rgba(89, 89, 89, 0.87);
}

.ui.form :focus::-ms-input-placeholder {
  color: rgba(89, 89, 89, 0.87);
}

.ui.form :focus::-moz-placeholder {
  color: rgba(89, 89, 89, 0.87);
}

/* Error Placeholder */

.ui.form .error ::-webkit-input-placeholder {
  color: #e7bdbc;
}

.ui.form .error ::-ms-input-placeholder {
  color: #e7bdbc;
}

.ui.form .error ::-moz-placeholder {
  color: #e7bdbc;
}

.ui.form .error :focus::-webkit-input-placeholder {
  color: #da9796;
}

.ui.form .error :focus::-ms-input-placeholder {
  color: #da9796;
}

.ui.form .error :focus::-moz-placeholder {
  color: #da9796;
}

/*--------------------
        Focus
---------------------*/

.ui.form input:not([type]):focus,
.ui.form input[type="date"]:focus,
.ui.form input[type="datetime-local"]:focus,
.ui.form input[type="email"]:focus,
.ui.form input[type="number"]:focus,
.ui.form input[type="password"]:focus,
.ui.form input[type="search"]:focus,
.ui.form input[type="tel"]:focus,
.ui.form input[type="time"]:focus,
.ui.form input[type="text"]:focus,
.ui.form input[type="url"]:focus {
  color: rgba(0, 0, 0, 0.95);
  border-color: #85B7D9;
  border-radius: 0.28571429rem;
  background: #FFFFFF;
  box-shadow: 0px 0em 0em 0em rgba(34, 36, 38, 0.35) inset;
}

.ui.form textarea:focus {
  color: rgba(0, 0, 0, 0.95);
  border-color: #85B7D9;
  border-radius: 0.28571429rem;
  background: #FFFFFF;
  box-shadow: 0px 0em 0em 0em rgba(34, 36, 38, 0.35) inset;
  -webkit-appearance: none;
}

/*--------------------
        Success
---------------------*/

/* On Form */

.ui.form.success .success.message:not(:empty) {
  display: block;
}

.ui.form.success .icon.success.message:not(:empty) {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

/*--------------------
        Warning
---------------------*/

/* On Form */

.ui.form.warning .warning.message:not(:empty) {
  display: block;
}

.ui.form.warning .icon.warning.message:not(:empty) {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

/*--------------------
        Error
---------------------*/

/* On Form */

.ui.form.error .error.message:not(:empty) {
  display: block;
}

.ui.form.error .icon.error.message:not(:empty) {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

/* On Field(s) */

.ui.form .fields.error .field label,
.ui.form .field.error label,
.ui.form .fields.error .field .input,
.ui.form .field.error .input {
  color: #9F3A38;
}

.ui.form .fields.error .field .corner.label,
.ui.form .field.error .corner.label {
  border-color: #9F3A38;
  color: #FFFFFF;
}

.ui.form .fields.error .field textarea,
.ui.form .fields.error .field select,
.ui.form .fields.error .field input:not([type]),
.ui.form .fields.error .field input[type="date"],
.ui.form .fields.error .field input[type="datetime-local"],
.ui.form .fields.error .field input[type="email"],
.ui.form .fields.error .field input[type="number"],
.ui.form .fields.error .field input[type="password"],
.ui.form .fields.error .field input[type="search"],
.ui.form .fields.error .field input[type="tel"],
.ui.form .fields.error .field input[type="time"],
.ui.form .fields.error .field input[type="text"],
.ui.form .fields.error .field input[type="url"],
.ui.form .field.error textarea,
.ui.form .field.error select,
.ui.form .field.error input:not([type]),
.ui.form .field.error input[type="date"],
.ui.form .field.error input[type="datetime-local"],
.ui.form .field.error input[type="email"],
.ui.form .field.error input[type="number"],
.ui.form .field.error input[type="password"],
.ui.form .field.error input[type="search"],
.ui.form .field.error input[type="tel"],
.ui.form .field.error input[type="time"],
.ui.form .field.error input[type="text"],
.ui.form .field.error input[type="url"] {
  background: #FFF6F6;
  border-color: #E0B4B4;
  color: #9F3A38;
  border-radius: '';
  box-shadow: none;
}

.ui.form .field.error textarea:focus,
.ui.form .field.error select:focus,
.ui.form .field.error input:not([type]):focus,
.ui.form .field.error input[type="date"]:focus,
.ui.form .field.error input[type="datetime-local"]:focus,
.ui.form .field.error input[type="email"]:focus,
.ui.form .field.error input[type="number"]:focus,
.ui.form .field.error input[type="password"]:focus,
.ui.form .field.error input[type="search"]:focus,
.ui.form .field.error input[type="tel"]:focus,
.ui.form .field.error input[type="time"]:focus,
.ui.form .field.error input[type="text"]:focus,
.ui.form .field.error input[type="url"]:focus {
  background: #FFF6F6;
  border-color: #E0B4B4;
  color: #9F3A38;
  -webkit-appearance: none;
  box-shadow: none;
}

/* Preserve Native Select Stylings */

.ui.form .field.error select {
  -webkit-appearance: menulist-button;
}

/*------------------
    Dropdown Error
--------------------*/

.ui.form .fields.error .field .ui.dropdown,
.ui.form .fields.error .field .ui.dropdown .item,
.ui.form .field.error .ui.dropdown,
.ui.form .field.error .ui.dropdown .text,
.ui.form .field.error .ui.dropdown .item {
  background: #FFF6F6;
  color: #9F3A38;
}

.ui.form .fields.error .field .ui.dropdown,
.ui.form .field.error .ui.dropdown {
  border-color: #E0B4B4 !important;
}

.ui.form .fields.error .field .ui.dropdown:hover,
.ui.form .field.error .ui.dropdown:hover {
  border-color: #E0B4B4 !important;
}

.ui.form .fields.error .field .ui.dropdown:hover .menu,
.ui.form .field.error .ui.dropdown:hover .menu {
  border-color: #E0B4B4;
}

.ui.form .fields.error .field .ui.multiple.selection.dropdown > .label,
.ui.form .field.error .ui.multiple.selection.dropdown > .label {
  background-color: #EACBCB;
  color: #9F3A38;
}

/* Hover */

.ui.form .fields.error .field .ui.dropdown .menu .item:hover,
.ui.form .field.error .ui.dropdown .menu .item:hover {
  background-color: #FBE7E7;
}

/* Selected */

.ui.form .fields.error .field .ui.dropdown .menu .selected.item,
.ui.form .field.error .ui.dropdown .menu .selected.item {
  background-color: #FBE7E7;
}

/* Active */

.ui.form .fields.error .field .ui.dropdown .menu .active.item,
.ui.form .field.error .ui.dropdown .menu .active.item {
  background-color: #FDCFCF !important;
}

/*--------------------
    Checkbox Error
---------------------*/

.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) label,
.ui.form .field.error .checkbox:not(.toggle):not(.slider) label,
.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) .box,
.ui.form .field.error .checkbox:not(.toggle):not(.slider) .box {
  color: #9F3A38;
}

.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) label:before,
.ui.form .field.error .checkbox:not(.toggle):not(.slider) label:before,
.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) .box:before,
.ui.form .field.error .checkbox:not(.toggle):not(.slider) .box:before {
  background: #FFF6F6;
  border-color: #E0B4B4;
}

.ui.form .fields.error .field .checkbox label:after,
.ui.form .field.error .checkbox label:after,
.ui.form .fields.error .field .checkbox .box:after,
.ui.form .field.error .checkbox .box:after {
  color: #9F3A38;
}

/*--------------------
       Disabled
---------------------*/

.ui.form .disabled.fields .field,
.ui.form .disabled.field,
.ui.form .field :disabled {
  pointer-events: none;
  opacity: 0.45;
}

.ui.form .field.disabled label {
  opacity: 0.45;
}

.ui.form .field.disabled :disabled {
  opacity: 1;
}

/*--------------
    Loading
---------------*/

.ui.loading.form {
  position: relative;
  cursor: default;
  point-events: none;
}

.ui.loading.form:before {
  position: absolute;
  content: '';
  top: 0%;
  left: 0%;
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  z-index: 100;
}

.ui.loading.form:after {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  margin: -1.5em 0em 0em -1.5em;
  width: 3em;
  height: 3em;
  -webkit-animation: form-spin 0.6s linear;
  animation: form-spin 0.6s linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  border-radius: 500rem;
  border-color: #767676 rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-width: 0.2em;
  box-shadow: 0px 0px 0px 1px transparent;
  visibility: visible;
  z-index: 101;
}

@-webkit-keyframes form-spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes form-spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/*******************************
         Element Types
*******************************/

/*--------------------
     Required Field
---------------------*/

.ui.form .required.fields:not(.grouped) > .field > label:after,
.ui.form .required.fields.grouped > label:after,
.ui.form .required.field > label:after,
.ui.form .required.fields:not(.grouped) > .field > .checkbox:after,
.ui.form .required.field > .checkbox:after {
  margin: -0.2em 0em 0em 0.2em;
  content: '*';
  color: #DB2828;
}

.ui.form .required.fields:not(.grouped) > .field > label:after,
.ui.form .required.fields.grouped > label:after,
.ui.form .required.field > label:after {
  display: inline-block;
  vertical-align: top;
}

.ui.form .required.fields:not(.grouped) > .field > .checkbox:after,
.ui.form .required.field > .checkbox:after {
  position: absolute;
  top: 0%;
  left: 100%;
}

/*******************************
           Variations
*******************************/

/*--------------------
    Inverted Colors
---------------------*/

.ui.inverted.form label,
.ui.form .inverted.segment label,
.ui.form .inverted.segment .ui.checkbox label,
.ui.form .inverted.segment .ui.checkbox .box,
.ui.inverted.form .ui.checkbox label,
.ui.inverted.form .ui.checkbox .box {
  color: rgba(255, 255, 255, 0.9);
}

/* Inverted Field */

.ui.inverted.form input:not([type]),
.ui.inverted.form input[type="date"],
.ui.inverted.form input[type="datetime-local"],
.ui.inverted.form input[type="email"],
.ui.inverted.form input[type="number"],
.ui.inverted.form input[type="password"],
.ui.inverted.form input[type="search"],
.ui.inverted.form input[type="tel"],
.ui.inverted.form input[type="time"],
.ui.inverted.form input[type="text"],
.ui.inverted.form input[type="url"] {
  background: #FFFFFF;
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
}

/*--------------------
     Field Groups
---------------------*/

/* Grouped Vertically */

.ui.form .grouped.fields {
  display: block;
  margin: 0em 0em 1em;
}

.ui.form .grouped.fields:last-child {
  margin-bottom: 0em;
}

.ui.form .grouped.fields > label {
  margin: 0em 0em 0.28571429rem 0em;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.92857143em;
  font-weight: bold;
  text-transform: none;
}

.ui.form .grouped.fields .field,
.ui.form .grouped.inline.fields .field {
  display: block;
  margin: 0.5em 0em;
  padding: 0em;
}

/*--------------------
        Fields
---------------------*/

/* Split fields */

.ui.form .fields {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}

.ui.form .fields > .field {
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  padding-left: 0.5em;
  padding-right: 0.5em;
}

.ui.form .fields > .field:first-child {
  border-left: none;
  box-shadow: none;
}

/* Other Combinations */

.ui.form .two.fields > .fields,
.ui.form .two.fields > .field {
  width: 50%;
}

.ui.form .three.fields > .fields,
.ui.form .three.fields > .field {
  width: 33.33333333%;
}

.ui.form .four.fields > .fields,
.ui.form .four.fields > .field {
  width: 25%;
}

.ui.form .five.fields > .fields,
.ui.form .five.fields > .field {
  width: 20%;
}

.ui.form .six.fields > .fields,
.ui.form .six.fields > .field {
  width: 16.66666667%;
}

.ui.form .seven.fields > .fields,
.ui.form .seven.fields > .field {
  width: 14.28571429%;
}

.ui.form .eight.fields > .fields,
.ui.form .eight.fields > .field {
  width: 12.5%;
}

.ui.form .nine.fields > .fields,
.ui.form .nine.fields > .field {
  width: 11.11111111%;
}

.ui.form .ten.fields > .fields,
.ui.form .ten.fields > .field {
  width: 10%;
}

/* Swap to full width on mobile */

@media only screen and (max-width: 767px) {
  .ui.form .fields {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .ui.form .two.fields > .fields,
  .ui.form .two.fields > .field,
  .ui.form .three.fields > .fields,
  .ui.form .three.fields > .field,
  .ui.form .four.fields > .fields,
  .ui.form .four.fields > .field,
  .ui.form .five.fields > .fields,
  .ui.form .five.fields > .field,
  .ui.form .six.fields > .fields,
  .ui.form .six.fields > .field,
  .ui.form .seven.fields > .fields,
  .ui.form .seven.fields > .field,
  .ui.form .eight.fields > .fields,
  .ui.form .eight.fields > .field,
  .ui.form .nine.fields > .fields,
  .ui.form .nine.fields > .field,
  .ui.form .ten.fields > .fields,
  .ui.form .ten.fields > .field {
    width: 100% !important;
    margin: 0em 0em 1em;
    padding-left: 0%;
    padding-right: 0%;
  }
}

.ui.form .fields .field:first-child {
  padding-left: 0%;
}

.ui.form .fields .field:last-child {
  padding-right: 0%;
}

/* Sizing Combinations */

.ui.form .fields .wide.field {
  width: 6.25%;
  padding-left: 0.5em;
  padding-right: 0.5em;
}

.ui.form .fields .wide.field:first-child {
  padding-left: 0%;
}

.ui.form .fields .wide.field:last-child {
  padding-right: 0%;
}

.ui.form .one.wide.field {
  width: 6.25% !important;
}

.ui.form .two.wide.field {
  width: 12.5% !important;
}

.ui.form .three.wide.field {
  width: 18.75% !important;
}

.ui.form .four.wide.field {
  width: 25% !important;
}

.ui.form .five.wide.field {
  width: 31.25% !important;
}

.ui.form .six.wide.field {
  width: 37.5% !important;
}

.ui.form .seven.wide.field {
  width: 43.75% !important;
}

.ui.form .eight.wide.field {
  width: 50% !important;
}

.ui.form .nine.wide.field {
  width: 56.25% !important;
}

.ui.form .ten.wide.field {
  width: 62.5% !important;
}

.ui.form .eleven.wide.field {
  width: 68.75% !important;
}

.ui.form .twelve.wide.field {
  width: 75% !important;
}

.ui.form .thirteen.wide.field {
  width: 81.25% !important;
}

.ui.form .fourteen.wide.field {
  width: 87.5% !important;
}

.ui.form .fifteen.wide.field {
  width: 93.75% !important;
}

.ui.form .sixteen.wide.field {
  width: 100% !important;
}

/* Swap to full width on mobile */

@media only screen and (max-width: 767px) {
  .ui.form .two.fields > .fields,
  .ui.form .two.fields > .field,
  .ui.form .three.fields > .fields,
  .ui.form .three.fields > .field,
  .ui.form .four.fields > .fields,
  .ui.form .four.fields > .field,
  .ui.form .five.fields > .fields,
  .ui.form .five.fields > .field,
  .ui.form .fields > .two.wide.field,
  .ui.form .fields > .three.wide.field,
  .ui.form .fields > .four.wide.field,
  .ui.form .fields > .five.wide.field,
  .ui.form .fields > .six.wide.field,
  .ui.form .fields > .seven.wide.field,
  .ui.form .fields > .eight.wide.field,
  .ui.form .fields > .nine.wide.field,
  .ui.form .fields > .ten.wide.field,
  .ui.form .fields > .eleven.wide.field,
  .ui.form .fields > .twelve.wide.field,
  .ui.form .fields > .thirteen.wide.field,
  .ui.form .fields > .fourteen.wide.field,
  .ui.form .fields > .fifteen.wide.field,
  .ui.form .fields > .sixteen.wide.field {
    width: 100% !important;
    margin: 0em 0em 1em;
    padding-left: 0%;
    padding-right: 0%;
  }
}

/*--------------------
     Equal Width
---------------------*/

.ui[class*="equal width"].form .fields > .field,
.ui.form [class*="equal width"].fields > .field {
  width: 100%;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

/*--------------------
    Inline Fields
---------------------*/

.ui.form .inline.fields {
  margin: 0em 0em 1em;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  -ms-grid-row-align: center;
  align-items: center;
}

.ui.form .inline.fields .field {
  margin: 0em;
  padding: 0em 1em 0em 0em;
}

/* Inline Label */

.ui.form .inline.fields > label,
.ui.form .inline.fields .field > label,
.ui.form .inline.fields .field > p,
.ui.form .inline.field > label,
.ui.form .inline.field > p {
  display: inline-block;
  width: auto;
  margin-top: 0em;
  margin-bottom: 0em;
  vertical-align: baseline;
  font-size: 0.92857143em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.87);
  text-transform: none;
}

/* Grouped Inline Label */

.ui.form .inline.fields > label {
  margin: 0.035714em 1em 0em 0em;
}

/* Inline Input */

.ui.form .inline.fields .field > input,
.ui.form .inline.fields .field > select,
.ui.form .inline.field > input,
.ui.form .inline.field > select {
  display: inline-block;
  width: auto;
  margin-top: 0em;
  margin-bottom: 0em;
  vertical-align: middle;
  font-size: 1em;
}

/* Label */

.ui.form .inline.fields .field > :first-child,
.ui.form .inline.field > :first-child {
  margin: 0em 0.85714286em 0em 0em;
}

.ui.form .inline.fields .field > :only-child,
.ui.form .inline.field > :only-child {
  margin: 0em;
}

/* Wide */

.ui.form .inline.fields .wide.field {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.ui.form .inline.fields .wide.field > input,
.ui.form .inline.fields .wide.field > select {
  width: 100%;
}

/*--------------------
        Sizes
---------------------*/

/* Standard */

.ui.small.form {
  font-size: 0.92857143rem;
}

/* Medium */

.ui.form {
  font-size: 1rem;
}

/* Large */

.ui.large.form {
  font-size: 1.14285714rem;
}

/* Huge */

.ui.huge.form {
  font-size: 1.42857143rem;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Grid
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Standard
*******************************/

.ui.grid {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  padding: 0em;
}

/*----------------------
      Remove Gutters
-----------------------*/

.ui.grid {
  margin-top: -1rem;
  margin-bottom: -1rem;
  margin-left: -1rem;
  margin-right: -1rem;
}

.ui.relaxed.grid {
  margin-left: -1.5rem;
  margin-right: -1.5rem;
}

.ui[class*="very relaxed"].grid {
  margin-left: -2.5rem;
  margin-right: -2.5rem;
}

/* Preserve Rows Spacing on Consecutive Grids */

.ui.grid + .grid {
  margin-top: 1rem;
}

/*-------------------
       Columns
--------------------*/

/* Standard 16 column */

.ui.grid > .column:not(.row),
.ui.grid > .row > .column {
  position: relative;
  display: inline-block;
  width: 6.25%;
  padding-left: 1rem;
  padding-right: 1rem;
  vertical-align: top;
}

.ui.grid > * {
  padding-left: 1rem;
  padding-right: 1rem;
}

/*-------------------
        Rows
--------------------*/

.ui.grid > .row {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: inherit;
  -webkit-justify-content: inherit;
  -ms-flex-pack: inherit;
  justify-content: inherit;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  width: 100% !important;
  padding: 0rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/*-------------------
       Columns
--------------------*/

/* Vertical padding when no rows */

.ui.grid > .column:not(.row) {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.ui.grid > .row > .column {
  margin-top: 0em;
  margin-bottom: 0em;
}

/*-------------------
      Content
--------------------*/

.ui.grid > .row > img,
.ui.grid > .row > .column > img {
  max-width: 100%;
}

/*-------------------
    Loose Coupling
--------------------*/

/* Collapse Margin on Consecutive Grid */

.ui.grid > .ui.grid:first-child {
  margin-top: 0em;
}

.ui.grid > .ui.grid:last-child {
  margin-bottom: 0em;
}

/* Segment inside Aligned Grid */

.ui.grid .aligned.row > .column > .segment:not(.compact):not(.attached),
.ui.aligned.grid .column > .segment:not(.compact):not(.attached) {
  width: 100%;
}

/* Align Dividers with Gutter */

.ui.grid .row + .ui.divider {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  margin: 1rem 1rem;
}

.ui.grid .column + .ui.vertical.divider {
  height: calc(50% -  1rem );
}

/* Remove Border on Last Horizontal Segment */

.ui.grid > .row > .column:last-child > .horizontal.segment,
.ui.grid > .column:last-child > .horizontal.segment {
  box-shadow: none;
}

/*******************************
           Variations
*******************************/

/*-----------------------
       Page Grid
-------------------------*/

@media only screen and (max-width: 767px) {
  .ui.page.grid {
    width: auto;
    padding-left: 0em;
    padding-right: 0em;
    margin-left: 0em;
    margin-right: 0em;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.page.grid {
    width: auto;
    margin-left: 0em;
    margin-right: 0em;
    padding-left: 2em;
    padding-right: 2em;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .ui.page.grid {
    width: auto;
    margin-left: 0em;
    margin-right: 0em;
    padding-left: 3%;
    padding-right: 3%;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1919px) {
  .ui.page.grid {
    width: auto;
    margin-left: 0em;
    margin-right: 0em;
    padding-left: 15%;
    padding-right: 15%;
  }
}

@media only screen and (min-width: 1920px) {
  .ui.page.grid {
    width: auto;
    margin-left: 0em;
    margin-right: 0em;
    padding-left: 23%;
    padding-right: 23%;
  }
}

/*-------------------
     Column Count
--------------------*/

/* Assume full width with one column */

.ui.grid > .column:only-child,
.ui.grid > .row > .column:only-child {
  width: 100%;
}

/* Grid Based */

.ui[class*="one column"].grid > .row > .column,
.ui[class*="one column"].grid > .column:not(.row) {
  width: 100%;
}

.ui[class*="two column"].grid > .row > .column,
.ui[class*="two column"].grid > .column:not(.row) {
  width: 50%;
}

.ui[class*="three column"].grid > .row > .column,
.ui[class*="three column"].grid > .column:not(.row) {
  width: 33.33333333%;
}

.ui[class*="four column"].grid > .row > .column,
.ui[class*="four column"].grid > .column:not(.row) {
  width: 25%;
}

.ui[class*="five column"].grid > .row > .column,
.ui[class*="five column"].grid > .column:not(.row) {
  width: 20%;
}

.ui[class*="six column"].grid > .row > .column,
.ui[class*="six column"].grid > .column:not(.row) {
  width: 16.66666667%;
}

.ui[class*="seven column"].grid > .row > .column,
.ui[class*="seven column"].grid > .column:not(.row) {
  width: 14.28571429%;
}

.ui[class*="eight column"].grid > .row > .column,
.ui[class*="eight column"].grid > .column:not(.row) {
  width: 12.5%;
}

.ui[class*="nine column"].grid > .row > .column,
.ui[class*="nine column"].grid > .column:not(.row) {
  width: 11.11111111%;
}

.ui[class*="ten column"].grid > .row > .column,
.ui[class*="ten column"].grid > .column:not(.row) {
  width: 10%;
}

.ui[class*="eleven column"].grid > .row > .column,
.ui[class*="eleven column"].grid > .column:not(.row) {
  width: 9.09090909%;
}

.ui[class*="twelve column"].grid > .row > .column,
.ui[class*="twelve column"].grid > .column:not(.row) {
  width: 8.33333333%;
}

.ui[class*="thirteen column"].grid > .row > .column,
.ui[class*="thirteen column"].grid > .column:not(.row) {
  width: 7.69230769%;
}

.ui[class*="fourteen column"].grid > .row > .column,
.ui[class*="fourteen column"].grid > .column:not(.row) {
  width: 7.14285714%;
}

.ui[class*="fifteen column"].grid > .row > .column,
.ui[class*="fifteen column"].grid > .column:not(.row) {
  width: 6.66666667%;
}

.ui[class*="sixteen column"].grid > .row > .column,
.ui[class*="sixteen column"].grid > .column:not(.row) {
  width: 6.25%;
}

/* Row Based Overrides */

.ui.grid > [class*="one column"].row > .column {
  width: 100% !important;
}

.ui.grid > [class*="two column"].row > .column {
  width: 50% !important;
}

.ui.grid > [class*="three column"].row > .column {
  width: 33.33333333% !important;
}

.ui.grid > [class*="four column"].row > .column {
  width: 25% !important;
}

.ui.grid > [class*="five column"].row > .column {
  width: 20% !important;
}

.ui.grid > [class*="six column"].row > .column {
  width: 16.66666667% !important;
}

.ui.grid > [class*="seven column"].row > .column {
  width: 14.28571429% !important;
}

.ui.grid > [class*="eight column"].row > .column {
  width: 12.5% !important;
}

.ui.grid > [class*="nine column"].row > .column {
  width: 11.11111111% !important;
}

.ui.grid > [class*="ten column"].row > .column {
  width: 10% !important;
}

.ui.grid > [class*="eleven column"].row > .column {
  width: 9.09090909% !important;
}

.ui.grid > [class*="twelve column"].row > .column {
  width: 8.33333333% !important;
}

.ui.grid > [class*="thirteen column"].row > .column {
  width: 7.69230769% !important;
}

.ui.grid > [class*="fourteen column"].row > .column {
  width: 7.14285714% !important;
}

.ui.grid > [class*="fifteen column"].row > .column {
  width: 6.66666667% !important;
}

.ui.grid > [class*="sixteen column"].row > .column {
  width: 6.25% !important;
}

/* Celled Page */

.ui.celled.page.grid {
  box-shadow: none;
}

/*-------------------
    Column Width
--------------------*/

/* Sizing Combinations */

.ui.grid > .row > [class*="one wide"].column,
.ui.grid > .column.row > [class*="one wide"].column,
.ui.grid > [class*="one wide"].column,
.ui.column.grid > [class*="one wide"].column {
  width: 6.25% !important;
}

.ui.grid > .row > [class*="two wide"].column,
.ui.grid > .column.row > [class*="two wide"].column,
.ui.grid > [class*="two wide"].column,
.ui.column.grid > [class*="two wide"].column {
  width: 12.5% !important;
}

.ui.grid > .row > [class*="three wide"].column,
.ui.grid > .column.row > [class*="three wide"].column,
.ui.grid > [class*="three wide"].column,
.ui.column.grid > [class*="three wide"].column {
  width: 18.75% !important;
}

.ui.grid > .row > [class*="four wide"].column,
.ui.grid > .column.row > [class*="four wide"].column,
.ui.grid > [class*="four wide"].column,
.ui.column.grid > [class*="four wide"].column {
  width: 25% !important;
}

.ui.grid > .row > [class*="five wide"].column,
.ui.grid > .column.row > [class*="five wide"].column,
.ui.grid > [class*="five wide"].column,
.ui.column.grid > [class*="five wide"].column {
  width: 31.25% !important;
}

.ui.grid > .row > [class*="six wide"].column,
.ui.grid > .column.row > [class*="six wide"].column,
.ui.grid > [class*="six wide"].column,
.ui.column.grid > [class*="six wide"].column {
  width: 37.5% !important;
}

.ui.grid > .row > [class*="seven wide"].column,
.ui.grid > .column.row > [class*="seven wide"].column,
.ui.grid > [class*="seven wide"].column,
.ui.column.grid > [class*="seven wide"].column {
  width: 43.75% !important;
}

.ui.grid > .row > [class*="eight wide"].column,
.ui.grid > .column.row > [class*="eight wide"].column,
.ui.grid > [class*="eight wide"].column,
.ui.column.grid > [class*="eight wide"].column {
  width: 50% !important;
}

.ui.grid > .row > [class*="nine wide"].column,
.ui.grid > .column.row > [class*="nine wide"].column,
.ui.grid > [class*="nine wide"].column,
.ui.column.grid > [class*="nine wide"].column {
  width: 56.25% !important;
}

.ui.grid > .row > [class*="ten wide"].column,
.ui.grid > .column.row > [class*="ten wide"].column,
.ui.grid > [class*="ten wide"].column,
.ui.column.grid > [class*="ten wide"].column {
  width: 62.5% !important;
}

.ui.grid > .row > [class*="eleven wide"].column,
.ui.grid > .column.row > [class*="eleven wide"].column,
.ui.grid > [class*="eleven wide"].column,
.ui.column.grid > [class*="eleven wide"].column {
  width: 68.75% !important;
}

.ui.grid > .row > [class*="twelve wide"].column,
.ui.grid > .column.row > [class*="twelve wide"].column,
.ui.grid > [class*="twelve wide"].column,
.ui.column.grid > [class*="twelve wide"].column {
  width: 75% !important;
}

.ui.grid > .row > [class*="thirteen wide"].column,
.ui.grid > .column.row > [class*="thirteen wide"].column,
.ui.grid > [class*="thirteen wide"].column,
.ui.column.grid > [class*="thirteen wide"].column {
  width: 81.25% !important;
}

.ui.grid > .row > [class*="fourteen wide"].column,
.ui.grid > .column.row > [class*="fourteen wide"].column,
.ui.grid > [class*="fourteen wide"].column,
.ui.column.grid > [class*="fourteen wide"].column {
  width: 87.5% !important;
}

.ui.grid > .row > [class*="fifteen wide"].column,
.ui.grid > .column.row > [class*="fifteen wide"].column,
.ui.grid > [class*="fifteen wide"].column,
.ui.column.grid > [class*="fifteen wide"].column {
  width: 93.75% !important;
}

.ui.grid > .row > [class*="sixteen wide"].column,
.ui.grid > .column.row > [class*="sixteen wide"].column,
.ui.grid > [class*="sixteen wide"].column,
.ui.column.grid > [class*="sixteen wide"].column {
  width: 100% !important;
}

/*----------------------
    Width per Device
-----------------------*/

/* Mobile Sizing Combinations */

@media only screen and (min-width: 320px) and (max-width: 767px) {
  .ui.grid > .row > [class*="one wide mobile"].column,
  .ui.grid > .column.row > [class*="one wide mobile"].column,
  .ui.grid > [class*="one wide mobile"].column,
  .ui.column.grid > [class*="one wide mobile"].column {
    width: 6.25% !important;
  }

  .ui.grid > .row > [class*="two wide mobile"].column,
  .ui.grid > .column.row > [class*="two wide mobile"].column,
  .ui.grid > [class*="two wide mobile"].column,
  .ui.column.grid > [class*="two wide mobile"].column {
    width: 12.5% !important;
  }

  .ui.grid > .row > [class*="three wide mobile"].column,
  .ui.grid > .column.row > [class*="three wide mobile"].column,
  .ui.grid > [class*="three wide mobile"].column,
  .ui.column.grid > [class*="three wide mobile"].column {
    width: 18.75% !important;
  }

  .ui.grid > .row > [class*="four wide mobile"].column,
  .ui.grid > .column.row > [class*="four wide mobile"].column,
  .ui.grid > [class*="four wide mobile"].column,
  .ui.column.grid > [class*="four wide mobile"].column {
    width: 25% !important;
  }

  .ui.grid > .row > [class*="five wide mobile"].column,
  .ui.grid > .column.row > [class*="five wide mobile"].column,
  .ui.grid > [class*="five wide mobile"].column,
  .ui.column.grid > [class*="five wide mobile"].column {
    width: 31.25% !important;
  }

  .ui.grid > .row > [class*="six wide mobile"].column,
  .ui.grid > .column.row > [class*="six wide mobile"].column,
  .ui.grid > [class*="six wide mobile"].column,
  .ui.column.grid > [class*="six wide mobile"].column {
    width: 37.5% !important;
  }

  .ui.grid > .row > [class*="seven wide mobile"].column,
  .ui.grid > .column.row > [class*="seven wide mobile"].column,
  .ui.grid > [class*="seven wide mobile"].column,
  .ui.column.grid > [class*="seven wide mobile"].column {
    width: 43.75% !important;
  }

  .ui.grid > .row > [class*="eight wide mobile"].column,
  .ui.grid > .column.row > [class*="eight wide mobile"].column,
  .ui.grid > [class*="eight wide mobile"].column,
  .ui.column.grid > [class*="eight wide mobile"].column {
    width: 50% !important;
  }

  .ui.grid > .row > [class*="nine wide mobile"].column,
  .ui.grid > .column.row > [class*="nine wide mobile"].column,
  .ui.grid > [class*="nine wide mobile"].column,
  .ui.column.grid > [class*="nine wide mobile"].column {
    width: 56.25% !important;
  }

  .ui.grid > .row > [class*="ten wide mobile"].column,
  .ui.grid > .column.row > [class*="ten wide mobile"].column,
  .ui.grid > [class*="ten wide mobile"].column,
  .ui.column.grid > [class*="ten wide mobile"].column {
    width: 62.5% !important;
  }

  .ui.grid > .row > [class*="eleven wide mobile"].column,
  .ui.grid > .column.row > [class*="eleven wide mobile"].column,
  .ui.grid > [class*="eleven wide mobile"].column,
  .ui.column.grid > [class*="eleven wide mobile"].column {
    width: 68.75% !important;
  }

  .ui.grid > .row > [class*="twelve wide mobile"].column,
  .ui.grid > .column.row > [class*="twelve wide mobile"].column,
  .ui.grid > [class*="twelve wide mobile"].column,
  .ui.column.grid > [class*="twelve wide mobile"].column {
    width: 75% !important;
  }

  .ui.grid > .row > [class*="thirteen wide mobile"].column,
  .ui.grid > .column.row > [class*="thirteen wide mobile"].column,
  .ui.grid > [class*="thirteen wide mobile"].column,
  .ui.column.grid > [class*="thirteen wide mobile"].column {
    width: 81.25% !important;
  }

  .ui.grid > .row > [class*="fourteen wide mobile"].column,
  .ui.grid > .column.row > [class*="fourteen wide mobile"].column,
  .ui.grid > [class*="fourteen wide mobile"].column,
  .ui.column.grid > [class*="fourteen wide mobile"].column {
    width: 87.5% !important;
  }

  .ui.grid > .row > [class*="fifteen wide mobile"].column,
  .ui.grid > .column.row > [class*="fifteen wide mobile"].column,
  .ui.grid > [class*="fifteen wide mobile"].column,
  .ui.column.grid > [class*="fifteen wide mobile"].column {
    width: 93.75% !important;
  }

  .ui.grid > .row > [class*="sixteen wide mobile"].column,
  .ui.grid > .column.row > [class*="sixteen wide mobile"].column,
  .ui.grid > [class*="sixteen wide mobile"].column,
  .ui.column.grid > [class*="sixteen wide mobile"].column {
    width: 100% !important;
  }
}

/* Tablet Sizing Combinations */

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.grid > .row > [class*="one wide tablet"].column,
  .ui.grid > .column.row > [class*="one wide tablet"].column,
  .ui.grid > [class*="one wide tablet"].column,
  .ui.column.grid > [class*="one wide tablet"].column {
    width: 6.25% !important;
  }

  .ui.grid > .row > [class*="two wide tablet"].column,
  .ui.grid > .column.row > [class*="two wide tablet"].column,
  .ui.grid > [class*="two wide tablet"].column,
  .ui.column.grid > [class*="two wide tablet"].column {
    width: 12.5% !important;
  }

  .ui.grid > .row > [class*="three wide tablet"].column,
  .ui.grid > .column.row > [class*="three wide tablet"].column,
  .ui.grid > [class*="three wide tablet"].column,
  .ui.column.grid > [class*="three wide tablet"].column {
    width: 18.75% !important;
  }

  .ui.grid > .row > [class*="four wide tablet"].column,
  .ui.grid > .column.row > [class*="four wide tablet"].column,
  .ui.grid > [class*="four wide tablet"].column,
  .ui.column.grid > [class*="four wide tablet"].column {
    width: 25% !important;
  }

  .ui.grid > .row > [class*="five wide tablet"].column,
  .ui.grid > .column.row > [class*="five wide tablet"].column,
  .ui.grid > [class*="five wide tablet"].column,
  .ui.column.grid > [class*="five wide tablet"].column {
    width: 31.25% !important;
  }

  .ui.grid > .row > [class*="six wide tablet"].column,
  .ui.grid > .column.row > [class*="six wide tablet"].column,
  .ui.grid > [class*="six wide tablet"].column,
  .ui.column.grid > [class*="six wide tablet"].column {
    width: 37.5% !important;
  }

  .ui.grid > .row > [class*="seven wide tablet"].column,
  .ui.grid > .column.row > [class*="seven wide tablet"].column,
  .ui.grid > [class*="seven wide tablet"].column,
  .ui.column.grid > [class*="seven wide tablet"].column {
    width: 43.75% !important;
  }

  .ui.grid > .row > [class*="eight wide tablet"].column,
  .ui.grid > .column.row > [class*="eight wide tablet"].column,
  .ui.grid > [class*="eight wide tablet"].column,
  .ui.column.grid > [class*="eight wide tablet"].column {
    width: 50% !important;
  }

  .ui.grid > .row > [class*="nine wide tablet"].column,
  .ui.grid > .column.row > [class*="nine wide tablet"].column,
  .ui.grid > [class*="nine wide tablet"].column,
  .ui.column.grid > [class*="nine wide tablet"].column {
    width: 56.25% !important;
  }

  .ui.grid > .row > [class*="ten wide tablet"].column,
  .ui.grid > .column.row > [class*="ten wide tablet"].column,
  .ui.grid > [class*="ten wide tablet"].column,
  .ui.column.grid > [class*="ten wide tablet"].column {
    width: 62.5% !important;
  }

  .ui.grid > .row > [class*="eleven wide tablet"].column,
  .ui.grid > .column.row > [class*="eleven wide tablet"].column,
  .ui.grid > [class*="eleven wide tablet"].column,
  .ui.column.grid > [class*="eleven wide tablet"].column {
    width: 68.75% !important;
  }

  .ui.grid > .row > [class*="twelve wide tablet"].column,
  .ui.grid > .column.row > [class*="twelve wide tablet"].column,
  .ui.grid > [class*="twelve wide tablet"].column,
  .ui.column.grid > [class*="twelve wide tablet"].column {
    width: 75% !important;
  }

  .ui.grid > .row > [class*="thirteen wide tablet"].column,
  .ui.grid > .column.row > [class*="thirteen wide tablet"].column,
  .ui.grid > [class*="thirteen wide tablet"].column,
  .ui.column.grid > [class*="thirteen wide tablet"].column {
    width: 81.25% !important;
  }

  .ui.grid > .row > [class*="fourteen wide tablet"].column,
  .ui.grid > .column.row > [class*="fourteen wide tablet"].column,
  .ui.grid > [class*="fourteen wide tablet"].column,
  .ui.column.grid > [class*="fourteen wide tablet"].column {
    width: 87.5% !important;
  }

  .ui.grid > .row > [class*="fifteen wide tablet"].column,
  .ui.grid > .column.row > [class*="fifteen wide tablet"].column,
  .ui.grid > [class*="fifteen wide tablet"].column,
  .ui.column.grid > [class*="fifteen wide tablet"].column {
    width: 93.75% !important;
  }

  .ui.grid > .row > [class*="sixteen wide tablet"].column,
  .ui.grid > .column.row > [class*="sixteen wide tablet"].column,
  .ui.grid > [class*="sixteen wide tablet"].column,
  .ui.column.grid > [class*="sixteen wide tablet"].column {
    width: 100% !important;
  }
}

/* Computer/Desktop Sizing Combinations */

@media only screen and (min-width: 992px) {
  .ui.grid > .row > [class*="one wide computer"].column,
  .ui.grid > .column.row > [class*="one wide computer"].column,
  .ui.grid > [class*="one wide computer"].column,
  .ui.column.grid > [class*="one wide computer"].column {
    width: 6.25% !important;
  }

  .ui.grid > .row > [class*="two wide computer"].column,
  .ui.grid > .column.row > [class*="two wide computer"].column,
  .ui.grid > [class*="two wide computer"].column,
  .ui.column.grid > [class*="two wide computer"].column {
    width: 12.5% !important;
  }

  .ui.grid > .row > [class*="three wide computer"].column,
  .ui.grid > .column.row > [class*="three wide computer"].column,
  .ui.grid > [class*="three wide computer"].column,
  .ui.column.grid > [class*="three wide computer"].column {
    width: 18.75% !important;
  }

  .ui.grid > .row > [class*="four wide computer"].column,
  .ui.grid > .column.row > [class*="four wide computer"].column,
  .ui.grid > [class*="four wide computer"].column,
  .ui.column.grid > [class*="four wide computer"].column {
    width: 25% !important;
  }

  .ui.grid > .row > [class*="five wide computer"].column,
  .ui.grid > .column.row > [class*="five wide computer"].column,
  .ui.grid > [class*="five wide computer"].column,
  .ui.column.grid > [class*="five wide computer"].column {
    width: 31.25% !important;
  }

  .ui.grid > .row > [class*="six wide computer"].column,
  .ui.grid > .column.row > [class*="six wide computer"].column,
  .ui.grid > [class*="six wide computer"].column,
  .ui.column.grid > [class*="six wide computer"].column {
    width: 37.5% !important;
  }

  .ui.grid > .row > [class*="seven wide computer"].column,
  .ui.grid > .column.row > [class*="seven wide computer"].column,
  .ui.grid > [class*="seven wide computer"].column,
  .ui.column.grid > [class*="seven wide computer"].column {
    width: 43.75% !important;
  }

  .ui.grid > .row > [class*="eight wide computer"].column,
  .ui.grid > .column.row > [class*="eight wide computer"].column,
  .ui.grid > [class*="eight wide computer"].column,
  .ui.column.grid > [class*="eight wide computer"].column {
    width: 50% !important;
  }

  .ui.grid > .row > [class*="nine wide computer"].column,
  .ui.grid > .column.row > [class*="nine wide computer"].column,
  .ui.grid > [class*="nine wide computer"].column,
  .ui.column.grid > [class*="nine wide computer"].column {
    width: 56.25% !important;
  }

  .ui.grid > .row > [class*="ten wide computer"].column,
  .ui.grid > .column.row > [class*="ten wide computer"].column,
  .ui.grid > [class*="ten wide computer"].column,
  .ui.column.grid > [class*="ten wide computer"].column {
    width: 62.5% !important;
  }

  .ui.grid > .row > [class*="eleven wide computer"].column,
  .ui.grid > .column.row > [class*="eleven wide computer"].column,
  .ui.grid > [class*="eleven wide computer"].column,
  .ui.column.grid > [class*="eleven wide computer"].column {
    width: 68.75% !important;
  }

  .ui.grid > .row > [class*="twelve wide computer"].column,
  .ui.grid > .column.row > [class*="twelve wide computer"].column,
  .ui.grid > [class*="twelve wide computer"].column,
  .ui.column.grid > [class*="twelve wide computer"].column {
    width: 75% !important;
  }

  .ui.grid > .row > [class*="thirteen wide computer"].column,
  .ui.grid > .column.row > [class*="thirteen wide computer"].column,
  .ui.grid > [class*="thirteen wide computer"].column,
  .ui.column.grid > [class*="thirteen wide computer"].column {
    width: 81.25% !important;
  }

  .ui.grid > .row > [class*="fourteen wide computer"].column,
  .ui.grid > .column.row > [class*="fourteen wide computer"].column,
  .ui.grid > [class*="fourteen wide computer"].column,
  .ui.column.grid > [class*="fourteen wide computer"].column {
    width: 87.5% !important;
  }

  .ui.grid > .row > [class*="fifteen wide computer"].column,
  .ui.grid > .column.row > [class*="fifteen wide computer"].column,
  .ui.grid > [class*="fifteen wide computer"].column,
  .ui.column.grid > [class*="fifteen wide computer"].column {
    width: 93.75% !important;
  }

  .ui.grid > .row > [class*="sixteen wide computer"].column,
  .ui.grid > .column.row > [class*="sixteen wide computer"].column,
  .ui.grid > [class*="sixteen wide computer"].column,
  .ui.column.grid > [class*="sixteen wide computer"].column {
    width: 100% !important;
  }
}

/* Large Monitor Sizing Combinations */

@media only screen and (min-width: 1200px) and (max-width: 1919px) {
  .ui.grid > .row > [class*="one wide large screen"].column,
  .ui.grid > .column.row > [class*="one wide large screen"].column,
  .ui.grid > [class*="one wide large screen"].column,
  .ui.column.grid > [class*="one wide large screen"].column {
    width: 6.25% !important;
  }

  .ui.grid > .row > [class*="two wide large screen"].column,
  .ui.grid > .column.row > [class*="two wide large screen"].column,
  .ui.grid > [class*="two wide large screen"].column,
  .ui.column.grid > [class*="two wide large screen"].column {
    width: 12.5% !important;
  }

  .ui.grid > .row > [class*="three wide large screen"].column,
  .ui.grid > .column.row > [class*="three wide large screen"].column,
  .ui.grid > [class*="three wide large screen"].column,
  .ui.column.grid > [class*="three wide large screen"].column {
    width: 18.75% !important;
  }

  .ui.grid > .row > [class*="four wide large screen"].column,
  .ui.grid > .column.row > [class*="four wide large screen"].column,
  .ui.grid > [class*="four wide large screen"].column,
  .ui.column.grid > [class*="four wide large screen"].column {
    width: 25% !important;
  }

  .ui.grid > .row > [class*="five wide large screen"].column,
  .ui.grid > .column.row > [class*="five wide large screen"].column,
  .ui.grid > [class*="five wide large screen"].column,
  .ui.column.grid > [class*="five wide large screen"].column {
    width: 31.25% !important;
  }

  .ui.grid > .row > [class*="six wide large screen"].column,
  .ui.grid > .column.row > [class*="six wide large screen"].column,
  .ui.grid > [class*="six wide large screen"].column,
  .ui.column.grid > [class*="six wide large screen"].column {
    width: 37.5% !important;
  }

  .ui.grid > .row > [class*="seven wide large screen"].column,
  .ui.grid > .column.row > [class*="seven wide large screen"].column,
  .ui.grid > [class*="seven wide large screen"].column,
  .ui.column.grid > [class*="seven wide large screen"].column {
    width: 43.75% !important;
  }

  .ui.grid > .row > [class*="eight wide large screen"].column,
  .ui.grid > .column.row > [class*="eight wide large screen"].column,
  .ui.grid > [class*="eight wide large screen"].column,
  .ui.column.grid > [class*="eight wide large screen"].column {
    width: 50% !important;
  }

  .ui.grid > .row > [class*="nine wide large screen"].column,
  .ui.grid > .column.row > [class*="nine wide large screen"].column,
  .ui.grid > [class*="nine wide large screen"].column,
  .ui.column.grid > [class*="nine wide large screen"].column {
    width: 56.25% !important;
  }

  .ui.grid > .row > [class*="ten wide large screen"].column,
  .ui.grid > .column.row > [class*="ten wide large screen"].column,
  .ui.grid > [class*="ten wide large screen"].column,
  .ui.column.grid > [class*="ten wide large screen"].column {
    width: 62.5% !important;
  }

  .ui.grid > .row > [class*="eleven wide large screen"].column,
  .ui.grid > .column.row > [class*="eleven wide large screen"].column,
  .ui.grid > [class*="eleven wide large screen"].column,
  .ui.column.grid > [class*="eleven wide large screen"].column {
    width: 68.75% !important;
  }

  .ui.grid > .row > [class*="twelve wide large screen"].column,
  .ui.grid > .column.row > [class*="twelve wide large screen"].column,
  .ui.grid > [class*="twelve wide large screen"].column,
  .ui.column.grid > [class*="twelve wide large screen"].column {
    width: 75% !important;
  }

  .ui.grid > .row > [class*="thirteen wide large screen"].column,
  .ui.grid > .column.row > [class*="thirteen wide large screen"].column,
  .ui.grid > [class*="thirteen wide large screen"].column,
  .ui.column.grid > [class*="thirteen wide large screen"].column {
    width: 81.25% !important;
  }

  .ui.grid > .row > [class*="fourteen wide large screen"].column,
  .ui.grid > .column.row > [class*="fourteen wide large screen"].column,
  .ui.grid > [class*="fourteen wide large screen"].column,
  .ui.column.grid > [class*="fourteen wide large screen"].column {
    width: 87.5% !important;
  }

  .ui.grid > .row > [class*="fifteen wide large screen"].column,
  .ui.grid > .column.row > [class*="fifteen wide large screen"].column,
  .ui.grid > [class*="fifteen wide large screen"].column,
  .ui.column.grid > [class*="fifteen wide large screen"].column {
    width: 93.75% !important;
  }

  .ui.grid > .row > [class*="sixteen wide large screen"].column,
  .ui.grid > .column.row > [class*="sixteen wide large screen"].column,
  .ui.grid > [class*="sixteen wide large screen"].column,
  .ui.column.grid > [class*="sixteen wide large screen"].column {
    width: 100% !important;
  }
}

/* Widescreen Sizing Combinations */

@media only screen and (min-width: 1920px) {
  .ui.grid > .row > [class*="one wide widescreen"].column,
  .ui.grid > .column.row > [class*="one wide widescreen"].column,
  .ui.grid > [class*="one wide widescreen"].column,
  .ui.column.grid > [class*="one wide widescreen"].column {
    width: 6.25% !important;
  }

  .ui.grid > .row > [class*="two wide widescreen"].column,
  .ui.grid > .column.row > [class*="two wide widescreen"].column,
  .ui.grid > [class*="two wide widescreen"].column,
  .ui.column.grid > [class*="two wide widescreen"].column {
    width: 12.5% !important;
  }

  .ui.grid > .row > [class*="three wide widescreen"].column,
  .ui.grid > .column.row > [class*="three wide widescreen"].column,
  .ui.grid > [class*="three wide widescreen"].column,
  .ui.column.grid > [class*="three wide widescreen"].column {
    width: 18.75% !important;
  }

  .ui.grid > .row > [class*="four wide widescreen"].column,
  .ui.grid > .column.row > [class*="four wide widescreen"].column,
  .ui.grid > [class*="four wide widescreen"].column,
  .ui.column.grid > [class*="four wide widescreen"].column {
    width: 25% !important;
  }

  .ui.grid > .row > [class*="five wide widescreen"].column,
  .ui.grid > .column.row > [class*="five wide widescreen"].column,
  .ui.grid > [class*="five wide widescreen"].column,
  .ui.column.grid > [class*="five wide widescreen"].column {
    width: 31.25% !important;
  }

  .ui.grid > .row > [class*="six wide widescreen"].column,
  .ui.grid > .column.row > [class*="six wide widescreen"].column,
  .ui.grid > [class*="six wide widescreen"].column,
  .ui.column.grid > [class*="six wide widescreen"].column {
    width: 37.5% !important;
  }

  .ui.grid > .row > [class*="seven wide widescreen"].column,
  .ui.grid > .column.row > [class*="seven wide widescreen"].column,
  .ui.grid > [class*="seven wide widescreen"].column,
  .ui.column.grid > [class*="seven wide widescreen"].column {
    width: 43.75% !important;
  }

  .ui.grid > .row > [class*="eight wide widescreen"].column,
  .ui.grid > .column.row > [class*="eight wide widescreen"].column,
  .ui.grid > [class*="eight wide widescreen"].column,
  .ui.column.grid > [class*="eight wide widescreen"].column {
    width: 50% !important;
  }

  .ui.grid > .row > [class*="nine wide widescreen"].column,
  .ui.grid > .column.row > [class*="nine wide widescreen"].column,
  .ui.grid > [class*="nine wide widescreen"].column,
  .ui.column.grid > [class*="nine wide widescreen"].column {
    width: 56.25% !important;
  }

  .ui.grid > .row > [class*="ten wide widescreen"].column,
  .ui.grid > .column.row > [class*="ten wide widescreen"].column,
  .ui.grid > [class*="ten wide widescreen"].column,
  .ui.column.grid > [class*="ten wide widescreen"].column {
    width: 62.5% !important;
  }

  .ui.grid > .row > [class*="eleven wide widescreen"].column,
  .ui.grid > .column.row > [class*="eleven wide widescreen"].column,
  .ui.grid > [class*="eleven wide widescreen"].column,
  .ui.column.grid > [class*="eleven wide widescreen"].column {
    width: 68.75% !important;
  }

  .ui.grid > .row > [class*="twelve wide widescreen"].column,
  .ui.grid > .column.row > [class*="twelve wide widescreen"].column,
  .ui.grid > [class*="twelve wide widescreen"].column,
  .ui.column.grid > [class*="twelve wide widescreen"].column {
    width: 75% !important;
  }

  .ui.grid > .row > [class*="thirteen wide widescreen"].column,
  .ui.grid > .column.row > [class*="thirteen wide widescreen"].column,
  .ui.grid > [class*="thirteen wide widescreen"].column,
  .ui.column.grid > [class*="thirteen wide widescreen"].column {
    width: 81.25% !important;
  }

  .ui.grid > .row > [class*="fourteen wide widescreen"].column,
  .ui.grid > .column.row > [class*="fourteen wide widescreen"].column,
  .ui.grid > [class*="fourteen wide widescreen"].column,
  .ui.column.grid > [class*="fourteen wide widescreen"].column {
    width: 87.5% !important;
  }

  .ui.grid > .row > [class*="fifteen wide widescreen"].column,
  .ui.grid > .column.row > [class*="fifteen wide widescreen"].column,
  .ui.grid > [class*="fifteen wide widescreen"].column,
  .ui.column.grid > [class*="fifteen wide widescreen"].column {
    width: 93.75% !important;
  }

  .ui.grid > .row > [class*="sixteen wide widescreen"].column,
  .ui.grid > .column.row > [class*="sixteen wide widescreen"].column,
  .ui.grid > [class*="sixteen wide widescreen"].column,
  .ui.column.grid > [class*="sixteen wide widescreen"].column {
    width: 100% !important;
  }
}

/*----------------------
        Centered
-----------------------*/

.ui.centered.grid,
.ui.centered.grid > .row,
.ui.grid > .centered.row {
  text-align: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.ui.centered.grid > .column:not(.aligned):not(.row),
.ui.centered.grid > .row > .column:not(.aligned),
.ui.grid .centered.row > .column:not(.aligned) {
  text-align: left;
}

.ui.grid > .centered.column,
.ui.grid > .row > .centered.column {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/*----------------------
        Relaxed
-----------------------*/

.ui.relaxed.grid > .column:not(.row),
.ui.relaxed.grid > .row > .column,
.ui.grid > .relaxed.row > .column {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.ui[class*="very relaxed"].grid > .column:not(.row),
.ui[class*="very relaxed"].grid > .row > .column,
.ui.grid > [class*="very relaxed"].row > .column {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

/* Coupling with UI Divider */

.ui.relaxed.grid .row + .ui.divider,
.ui.grid .relaxed.row + .ui.divider {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.ui[class*="very relaxed"].grid .row + .ui.divider,
.ui.grid [class*="very relaxed"].row + .ui.divider {
  margin-left: 2.5rem;
  margin-right: 2.5rem;
}

/*----------------------
        Padded
-----------------------*/

.ui.padded.grid:not(.vertically):not(.horizontally) {
  margin: 0em !important;
}

[class*="horizontally padded"].ui.grid {
  margin-left: 0em !important;
  margin-right: 0em !important;
}

[class*="vertically padded"].ui.grid {
  margin-top: 0em !important;
  margin-bottom: 0em !important;
}

/*----------------------
       "Floated"
-----------------------*/

.ui.grid [class*="left floated"].column {
  margin-right: auto;
}

.ui.grid [class*="right floated"].column {
  margin-left: auto;
}

/*----------------------
        Divided
-----------------------*/

.ui.divided.grid:not([class*="vertically divided"]) > .column:not(.row),
.ui.divided.grid:not([class*="vertically divided"]) > .row > .column {
  box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.15);
}

/* Swap from padding to margin on columns to have dividers align */

.ui[class*="vertically divided"].grid > .column:not(.row),
.ui[class*="vertically divided"].grid > .row > .column {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-top: 0rem;
  padding-bottom: 0rem;
}

.ui[class*="vertically divided"].grid > .row {
  margin-top: 0em;
  margin-bottom: 0em;
}

/* No divider on first column on row */

.ui.divided.grid:not([class*="vertically divided"]) > .column:first-child,
.ui.divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
  box-shadow: none;
}

/* Divided Row */

.ui.grid > .divided.row > .column {
  box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.15);
}

.ui.grid > .divided.row > .column:first-child {
  box-shadow: none;
}

/* Vertically Divided */

.ui[class*="vertically divided"].grid > .row {
  position: relative;
}

.ui[class*="vertically divided"].grid > .row:before {
  position: absolute;
  content: "";
  top: 0em;
  left: 0px;
  width: calc(100% -  2rem );
  height: 1px;
  margin: 0% 1rem;
  box-shadow: 0px -1px 0px 0px rgba(34, 36, 38, 0.15);
}

/* Padded Horizontally Divided */

[class*="horizontally padded"].ui.divided.grid,
.ui.padded.divided.grid:not(.vertically):not(.horizontally) {
  width: 100%;
}

/* First Row Vertically Divided */

.ui[class*="vertically divided"].grid > .row:first-child:before {
  box-shadow: none;
}

/* Inverted Divided */

.ui.inverted.divided.grid:not([class*="vertically divided"]) > .column:not(.row),
.ui.inverted.divided.grid:not([class*="vertically divided"]) > .row > .column {
  box-shadow: -1px 0px 0px 0px rgba(255, 255, 255, 0.1);
}

.ui.inverted.divided.grid:not([class*="vertically divided"]) > .column:not(.row):first-child,
.ui.inverted.divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
  box-shadow: none;
}

.ui.inverted[class*="vertically divided"].grid > .row:before {
  box-shadow: 0px -1px 0px 0px rgba(255, 255, 255, 0.1);
}

/* Relaxed */

.ui.relaxed[class*="vertically divided"].grid > .row:before {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  width: calc(100% -  3rem );
}

.ui[class*="very relaxed"][class*="vertically divided"].grid > .row:before {
  margin-left: 5rem;
  margin-right: 5rem;
  width: calc(100% -  5rem );
}

/*----------------------
         Celled
-----------------------*/

.ui.celled.grid {
  width: 100%;
  margin: 1em 0em;
  box-shadow: 0px 0px 0px 1px #D4D4D5;
}

.ui.celled.grid > .row {
  width: 100% !important;
  margin: 0em;
  padding: 0em;
  box-shadow: 0px -1px 0px 0px #D4D4D5;
}

.ui.celled.grid > .column:not(.row),
.ui.celled.grid > .row > .column {
  box-shadow: -1px 0px 0px 0px #D4D4D5;
}

.ui.celled.grid > .column:first-child,
.ui.celled.grid > .row > .column:first-child {
  box-shadow: none;
}

.ui.celled.grid > .column:not(.row),
.ui.celled.grid > .row > .column {
  padding: 1em;
}

.ui.relaxed.celled.grid > .column:not(.row),
.ui.relaxed.celled.grid > .row > .column {
  padding: 1.5em;
}

.ui[class*="very relaxed"].celled.grid > .column:not(.row),
.ui[class*="very relaxed"].celled.grid > .row > .column {
  padding: 2em;
}

/* Internally Celled */

.ui[class*="internally celled"].grid {
  box-shadow: none;
  margin: 0em;
}

.ui[class*="internally celled"].grid > .row:first-child {
  box-shadow: none;
}

.ui[class*="internally celled"].grid > .row > .column:first-child {
  box-shadow: none;
}

/*----------------------
   Vertically Aligned
-----------------------*/

/* Top Aligned */

.ui[class*="top aligned"].grid > .column:not(.row),
.ui[class*="top aligned"].grid > .row > .column,
.ui.grid > [class*="top aligned"].row > .column,
.ui.grid > [class*="top aligned"].column:not(.row),
.ui.grid > .row > [class*="top aligned"].column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  vertical-align: top;
  -webkit-align-self: flex-start !important;
  -ms-flex-item-align: start !important;
  align-self: flex-start !important;
}

/* Middle Aligned */

.ui[class*="middle aligned"].grid > .column:not(.row),
.ui[class*="middle aligned"].grid > .row > .column,
.ui.grid > [class*="middle aligned"].row > .column,
.ui.grid > [class*="middle aligned"].column:not(.row),
.ui.grid > .row > [class*="middle aligned"].column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  vertical-align: middle;
  -webkit-align-self: center !important;
  -ms-flex-item-align: center !important;
  align-self: center !important;
}

/* Bottom Aligned */

.ui[class*="bottom aligned"].grid > .column:not(.row),
.ui[class*="bottom aligned"].grid > .row > .column,
.ui.grid > [class*="bottom aligned"].row > .column,
.ui.grid > [class*="bottom aligned"].column:not(.row),
.ui.grid > .row > [class*="bottom aligned"].column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  vertical-align: bottom;
  -webkit-align-self: flex-end !important;
  -ms-flex-item-align: end !important;
  align-self: flex-end !important;
}

/* Stretched */

.ui.stretched.grid > .row > .column,
.ui.stretched.grid > .column,
.ui.grid > .stretched.row > .column,
.ui.grid > .stretched.column:not(.row),
.ui.grid > .row > .stretched.column {
  display: -webkit-inline-box !important;
  display: -webkit-inline-flex !important;
  display: -ms-inline-flexbox !important;
  display: inline-flex !important;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.ui.stretched.grid > .row > .column > *,
.ui.stretched.grid > .column > *,
.ui.grid > .stretched.row > .column > *,
.ui.grid > .stretched.column:not(.row) > *,
.ui.grid > .row > .stretched.column > * {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

/*----------------------
  Horizontally Centered
-----------------------*/

/* Left Aligned */

.ui[class*="left aligned"].grid > .column,
.ui[class*="left aligned"].grid > .row > .column,
.ui.grid > [class*="left aligned"].row > .column,
.ui.grid > [class*="left aligned"].column.column,
.ui.grid > .row > [class*="left aligned"].column {
  text-align: left;
  -webkit-align-self: inherit;
  -ms-flex-item-align: inherit;
  align-self: inherit;
}

/* Center Aligned */

.ui[class*="center aligned"].grid > .column,
.ui[class*="center aligned"].grid > .row > .column,
.ui.grid > [class*="center aligned"].row > .column,
.ui.grid > [class*="center aligned"].column.column,
.ui.grid > .row > [class*="center aligned"].column {
  text-align: center;
  -webkit-align-self: inherit;
  -ms-flex-item-align: inherit;
  align-self: inherit;
}

.ui[class*="center aligned"].grid {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

/* Right Aligned */

.ui[class*="right aligned"].grid > .column,
.ui[class*="right aligned"].grid > .row > .column,
.ui.grid > [class*="right aligned"].row > .column,
.ui.grid > [class*="right aligned"].column.column,
.ui.grid > .row > [class*="right aligned"].column {
  text-align: right;
  -webkit-align-self: inherit;
  -ms-flex-item-align: inherit;
  align-self: inherit;
}

/* Justified */

.ui.justified.grid > .column,
.ui.justified.grid > .row > .column,
.ui.grid > .justified.row > .column,
.ui.grid > .justified.column.column,
.ui.grid > .row > .justified.column {
  text-align: justify;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}

/*----------------------
         Colored
-----------------------*/

.ui.grid > .row > .red.column,
.ui.grid > .row > .orange.column,
.ui.grid > .row > .yellow.column,
.ui.grid > .row > .olive.column,
.ui.grid > .row > .green.column,
.ui.grid > .row > .teal.column,
.ui.grid > .row > .blue.column,
.ui.grid > .row > .violet.column,
.ui.grid > .row > .purple.column,
.ui.grid > .row > .pink.column,
.ui.grid > .row > .brown.column,
.ui.grid > .row > .grey.column,
.ui.grid > .row > .black.column {
  margin-top: -1rem;
  margin-bottom: -1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* Red */

.ui.grid > .red.row,
.ui.grid > .red.column,
.ui.grid > .row > .red.column {
  background-color: #DB2828 !important;
  color: #FFFFFF;
}

/* Orange */

.ui.grid > .orange.row,
.ui.grid > .orange.column,
.ui.grid > .row > .orange.column {
  background-color: #F2711C !important;
  color: #FFFFFF;
}

/* Yellow */

.ui.grid > .yellow.row,
.ui.grid > .yellow.column,
.ui.grid > .row > .yellow.column {
  background-color: #FBBD08 !important;
  color: #FFFFFF;
}

/* Olive */

.ui.grid > .olive.row,
.ui.grid > .olive.column,
.ui.grid > .row > .olive.column {
  background-color: #B5CC18 !important;
  color: #FFFFFF;
}

/* Green */

.ui.grid > .green.row,
.ui.grid > .green.column,
.ui.grid > .row > .green.column {
  background-color: #21BA45 !important;
  color: #FFFFFF;
}

/* Teal */

.ui.grid > .teal.row,
.ui.grid > .teal.column,
.ui.grid > .row > .teal.column {
  background-color: #00B5AD !important;
  color: #FFFFFF;
}

/* Blue */

.ui.grid > .blue.row,
.ui.grid > .blue.column,
.ui.grid > .row > .blue.column {
  background-color: #2185D0 !important;
  color: #FFFFFF;
}

/* Violet */

.ui.grid > .violet.row,
.ui.grid > .violet.column,
.ui.grid > .row > .violet.column {
  background-color: #6435C9 !important;
  color: #FFFFFF;
}

/* Purple */

.ui.grid > .purple.row,
.ui.grid > .purple.column,
.ui.grid > .row > .purple.column {
  background-color: #A333C8 !important;
  color: #FFFFFF;
}

/* Pink */

.ui.grid > .pink.row,
.ui.grid > .pink.column,
.ui.grid > .row > .pink.column {
  background-color: #E03997 !important;
  color: #FFFFFF;
}

/* Brown */

.ui.grid > .brown.row,
.ui.grid > .brown.column,
.ui.grid > .row > .brown.column {
  background-color: #A5673F !important;
  color: #FFFFFF;
}

/* Grey */

.ui.grid > .grey.row,
.ui.grid > .grey.column,
.ui.grid > .row > .grey.column {
  background-color: #767676 !important;
  color: #FFFFFF;
}

/* Black */

.ui.grid > .black.row,
.ui.grid > .black.column,
.ui.grid > .row > .black.column {
  background-color: #1B1C1D !important;
  color: #FFFFFF;
}

/*----------------------
      Equal Width
-----------------------*/

.ui[class*="equal width"].grid > .column:not(.row),
.ui[class*="equal width"].grid > .row > .column,
.ui.grid > [class*="equal width"].row > .column {
  display: inline-block;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.ui[class*="equal width"].grid > .wide.column,
.ui[class*="equal width"].grid > .row > .wide.column,
.ui.grid > [class*="equal width"].row > .wide.column {
  -webkit-box-flex: 0;
  -webkit-flex-grow: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
}

/*----------------------
        Reverse
-----------------------*/

/* Mobile */

@media only screen and (max-width: 767px) {
  .ui[class*="mobile reversed"].grid,
  .ui[class*="mobile reversed"].grid > .row,
  .ui.grid > [class*="mobile reversed"].row {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .ui[class*="mobile vertically reversed"].grid,
  .ui.stackable[class*="mobile reversed"] {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }

  /* Divided Reversed */

  .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"]) > .column:first-child,
  .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
    box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.15);
  }

  .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"]) > .column:last-child,
  .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:last-child {
    box-shadow: none;
  }

  /* Vertically Divided Reversed */

  .ui.grid[class*="vertically divided"][class*="mobile vertically reversed"] > .row:first-child:before {
    box-shadow: 0px -1px 0px 0px rgba(34, 36, 38, 0.15);
  }

  .ui.grid[class*="vertically divided"][class*="mobile vertically reversed"] > .row:last-child:before {
    box-shadow: none;
  }

  /* Celled Reversed */

  .ui[class*="mobile reversed"].celled.grid > .row > .column:first-child {
    box-shadow: -1px 0px 0px 0px #D4D4D5;
  }

  .ui[class*="mobile reversed"].celled.grid > .row > .column:last-child {
    box-shadow: none;
  }
}

/* Tablet */

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui[class*="tablet reversed"].grid,
  .ui[class*="tablet reversed"].grid > .row,
  .ui.grid > [class*="tablet reversed"].row {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .ui[class*="tablet vertically reversed"].grid {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }

  /* Divided Reversed */

  .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"]) > .column:first-child,
  .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
    box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.15);
  }

  .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"]) > .column:last-child,
  .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:last-child {
    box-shadow: none;
  }

  /* Vertically Divided Reversed */

  .ui.grid[class*="vertically divided"][class*="tablet vertically reversed"] > .row:first-child:before {
    box-shadow: 0px -1px 0px 0px rgba(34, 36, 38, 0.15);
  }

  .ui.grid[class*="vertically divided"][class*="tablet vertically reversed"] > .row:last-child:before {
    box-shadow: none;
  }

  /* Celled Reversed */

  .ui[class*="tablet reversed"].celled.grid > .row > .column:first-child {
    box-shadow: -1px 0px 0px 0px #D4D4D5;
  }

  .ui[class*="tablet reversed"].celled.grid > .row > .column:last-child {
    box-shadow: none;
  }
}

/* Computer */

@media only screen and (min-width: 992px) {
  .ui[class*="computer reversed"].grid,
  .ui[class*="computer reversed"].grid > .row,
  .ui.grid > [class*="computer reversed"].row {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .ui[class*="computer vertically reversed"].grid {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }

  /* Divided Reversed */

  .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"]) > .column:first-child,
  .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
    box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.15);
  }

  .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"]) > .column:last-child,
  .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:last-child {
    box-shadow: none;
  }

  /* Vertically Divided Reversed */

  .ui.grid[class*="vertically divided"][class*="computer vertically reversed"] > .row:first-child:before {
    box-shadow: 0px -1px 0px 0px rgba(34, 36, 38, 0.15);
  }

  .ui.grid[class*="vertically divided"][class*="computer vertically reversed"] > .row:last-child:before {
    box-shadow: none;
  }

  /* Celled Reversed */

  .ui[class*="computer reversed"].celled.grid > .row > .column:first-child {
    box-shadow: -1px 0px 0px 0px #D4D4D5;
  }

  .ui[class*="computer reversed"].celled.grid > .row > .column:last-child {
    box-shadow: none;
  }
}

/*-------------------
      Doubling
--------------------*/

/* Tablet Only */

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.doubling.grid {
    width: auto;
  }

  .ui.grid > .doubling.row,
  .ui.doubling.grid > .row {
    margin: 0em !important;
    padding: 0em !important;
  }

  .ui.grid > .doubling.row > .column,
  .ui.doubling.grid > .row > .column {
    display: inline-block !important;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    box-shadow: none !important;
    margin: 0em;
  }

  .ui[class*="two column"].doubling.grid > .row > .column,
  .ui[class*="two column"].doubling.grid > .column:not(.row),
  .ui.grid > [class*="two column"].doubling.row.row > .column {
    width: 100% !important;
  }

  .ui[class*="three column"].doubling.grid > .row > .column,
  .ui[class*="three column"].doubling.grid > .column:not(.row),
  .ui.grid > [class*="three column"].doubling.row.row > .column {
    width: 50% !important;
  }

  .ui[class*="four column"].doubling.grid > .row > .column,
  .ui[class*="four column"].doubling.grid > .column:not(.row),
  .ui.grid > [class*="four column"].doubling.row.row > .column {
    width: 50% !important;
  }

  .ui[class*="five column"].doubling.grid > .row > .column,
  .ui[class*="five column"].doubling.grid > .column:not(.row),
  .ui.grid > [class*="five column"].doubling.row.row > .column {
    width: 33.33333333% !important;
  }

  .ui[class*="six column"].doubling.grid > .row > .column,
  .ui[class*="six column"].doubling.grid > .column:not(.row),
  .ui.grid > [class*="six column"].doubling.row.row > .column {
    width: 33.33333333% !important;
  }

  .ui[class*="seven column"].doubling.grid > .row > .column,
  .ui[class*="seven column"].doubling.grid > .column:not(.row),
  .ui.grid > [class*="seven column"].doubling.row.row > .column {
    width: 33.33333333% !important;
  }

  .ui[class*="eight column"].doubling.grid > .row > .column,
  .ui[class*="eight column"].doubling.grid > .column:not(.row),
  .ui.grid > [class*="eight column"].doubling.row.row > .column {
    width: 25% !important;
  }

  .ui[class*="nine column"].doubling.grid > .row > .column,
  .ui[class*="nine column"].doubling.grid > .column:not(.row),
  .ui.grid > [class*="nine column"].doubling.row.row > .column {
    width: 25% !important;
  }

  .ui[class*="ten column"].doubling.grid > .row > .column,
  .ui[class*="ten column"].doubling.grid > .column:not(.row),
  .ui.grid > [class*="ten column"].doubling.row.row > .column {
    width: 20% !important;
  }

  .ui[class*="eleven column"].doubling.grid > .row > .column,
  .ui[class*="eleven column"].doubling.grid > .column:not(.row),
  .ui.grid > [class*="eleven column"].doubling.row.row > .column {
    width: 20% !important;
  }

  .ui[class*="twelve column"].doubling.grid > .row > .column,
  .ui[class*="twelve column"].doubling.grid > .column:not(.row),
  .ui.grid > [class*="twelve column"].doubling.row.row > .column {
    width: 16.66666667% !important;
  }

  .ui[class*="thirteen column"].doubling.grid > .row > .column,
  .ui[class*="thirteen column"].doubling.grid > .column:not(.row),
  .ui.grid > [class*="thirteen column"].doubling.row.row > .column {
    width: 16.66666667% !important;
  }

  .ui[class*="fourteen column"].doubling.grid > .row > .column,
  .ui[class*="fourteen column"].doubling.grid > .column:not(.row),
  .ui.grid > [class*="fourteen column"].doubling.row.row > .column {
    width: 14.28571429% !important;
  }

  .ui[class*="fifteen column"].doubling.grid > .row > .column,
  .ui[class*="fifteen column"].doubling.grid > .column:not(.row),
  .ui.grid > [class*="fifteen column"].doubling.row.row > .column {
    width: 14.28571429% !important;
  }

  .ui[class*="sixteen column"].doubling.grid > .row > .column,
  .ui[class*="sixteen column"].doubling.grid > .column:not(.row),
  .ui.grid > [class*="sixteen column"].doubling.row.row > .column {
    width: 12.5% !important;
  }
}

/* Mobily Only */

@media only screen and (max-width: 767px) {
  .ui.grid > .doubling.row,
  .ui.doubling.grid > .row {
    margin: 0em !important;
    padding: 0em !important;
  }

  .ui.grid > .doubling.row > .column,
  .ui.doubling.grid > .row > .column {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    margin: 0em !important;
    box-shadow: none !important;
  }

  .ui[class*="two column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="two column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui.grid > [class*="two column"].doubling:not(.stackable).row.row > .column {
    width: 100% !important;
  }

  .ui[class*="three column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="three column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui.grid > [class*="three column"].doubling:not(.stackable).row.row > .column {
    width: 50% !important;
  }

  .ui[class*="four column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="four column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui.grid > [class*="four column"].doubling:not(.stackable).row.row > .column {
    width: 50% !important;
  }

  .ui[class*="five column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="five column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui.grid > [class*="five column"].doubling:not(.stackable).row.row > .column {
    width: 50% !important;
  }

  .ui[class*="six column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="six column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui.grid > [class*="six column"].doubling:not(.stackable).row.row > .column {
    width: 50% !important;
  }

  .ui[class*="seven column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="seven column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui.grid > [class*="seven column"].doubling:not(.stackable).row.row > .column {
    width: 50% !important;
  }

  .ui[class*="eight column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="eight column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui.grid > [class*="eight column"].doubling:not(.stackable).row.row > .column {
    width: 50% !important;
  }

  .ui[class*="nine column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="nine column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui.grid > [class*="nine column"].doubling:not(.stackable).row.row > .column {
    width: 33.33333333% !important;
  }

  .ui[class*="ten column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="ten column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui.grid > [class*="ten column"].doubling:not(.stackable).row.row > .column {
    width: 33.33333333% !important;
  }

  .ui[class*="eleven column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="eleven column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui.grid > [class*="eleven column"].doubling:not(.stackable).row.row > .column {
    width: 33.33333333% !important;
  }

  .ui[class*="twelve column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="twelve column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui.grid > [class*="twelve column"].doubling:not(.stackable).row.row > .column {
    width: 33.33333333% !important;
  }

  .ui[class*="thirteen column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="thirteen column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui.grid > [class*="thirteen column"].doubling:not(.stackable).row.row > .column {
    width: 33.33333333% !important;
  }

  .ui[class*="fourteen column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="fourteen column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui.grid > [class*="fourteen column"].doubling:not(.stackable).row.row > .column {
    width: 25% !important;
  }

  .ui[class*="fifteen column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="fifteen column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui.grid > [class*="fifteen column"].doubling:not(.stackable).row.row > .column {
    width: 25% !important;
  }

  .ui[class*="sixteen column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="sixteen column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui.grid > [class*="sixteen column"].doubling:not(.stackable).row.row > .column {
    width: 25% !important;
  }
}

/*-------------------
      Stackable
--------------------*/

@media only screen and (max-width: 767px) {
  .ui.stackable.grid {
    width: auto;
    margin-left: 0em !important;
    margin-right: 0em !important;
  }

  .ui.stackable.grid > .row > .wide.column,
  .ui.stackable.grid > .wide.column,
  .ui.stackable.grid > .column.grid > .column,
  .ui.stackable.grid > .column.row > .column,
  .ui.stackable.grid > .row > .column,
  .ui.stackable.grid > .column:not(.row),
  .ui.grid > .stackable.stackable.row > .column {
    width: 100% !important;
    margin: 0em 0em !important;
    box-shadow: none !important;
    padding: 1rem 1rem !important;
  }

  .ui.stackable.grid:not(.vertically) > .row {
    margin: 0em;
    padding: 0em;
  }

  /* Coupling */

  .ui.container > .ui.stackable.grid > .column,
  .ui.container > .ui.stackable.grid > .row > .column {
    padding-left: 0em !important;
    padding-right: 0em !important;
  }

  /* Don't pad inside segment or nested grid */

  .ui.grid .ui.stackable.grid,
  .ui.segment:not(.vertical) .ui.stackable.page.grid {
    margin-left: -1rem !important;
    margin-right: -1rem !important;
  }

  /* Divided Stackable */

  .ui.stackable.divided.grid > .row:first-child > .column:first-child,
  .ui.stackable.celled.grid > .row:first-child > .column:first-child,
  .ui.stackable.divided.grid > .column:not(.row):first-child,
  .ui.stackable.celled.grid > .column:not(.row):first-child {
    border-top: none !important;
  }

  .ui.inverted.stackable.celled.grid > .column:not(.row),
  .ui.inverted.stackable.divided.grid > .column:not(.row),
  .ui.inverted.stackable.celled.grid > .row > .column,
  .ui.inverted.stackable.divided.grid > .row > .column {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .ui.stackable.celled.grid > .column:not(.row),
  .ui.stackable.divided:not(.vertically).grid > .column:not(.row),
  .ui.stackable.celled.grid > .row > .column,
  .ui.stackable.divided:not(.vertically).grid > .row > .column {
    border-top: 1px solid rgba(34, 36, 38, 0.15);
    box-shadow: none !important;
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }

  .ui.stackable.celled.grid > .row {
    box-shadow: none !important;
  }

  .ui.stackable.divided:not(.vertically).grid > .column:not(.row),
  .ui.stackable.divided:not(.vertically).grid > .row > .column {
    padding-left: 0em !important;
    padding-right: 0em !important;
  }
}

/*----------------------
     Only (Device)
-----------------------*/

/* These include arbitrary class repetitions for forced specificity */

/* Mobile Only Hide */

@media only screen and (max-width: 767px) {
  .ui[class*="tablet only"].grid.grid.grid:not(.mobile),
  .ui.grid.grid.grid > [class*="tablet only"].row:not(.mobile),
  .ui.grid.grid.grid > [class*="tablet only"].column:not(.mobile),
  .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.mobile) {
    display: none !important;
  }

  .ui[class*="computer only"].grid.grid.grid:not(.mobile),
  .ui.grid.grid.grid > [class*="computer only"].row:not(.mobile),
  .ui.grid.grid.grid > [class*="computer only"].column:not(.mobile),
  .ui.grid.grid.grid > .row > [class*="computer only"].column:not(.mobile) {
    display: none !important;
  }

  .ui[class*="large screen only"].grid.grid.grid:not(.mobile),
  .ui.grid.grid.grid > [class*="large screen only"].row:not(.mobile),
  .ui.grid.grid.grid > [class*="large screen only"].column:not(.mobile),
  .ui.grid.grid.grid > .row > [class*="large screen only"].column:not(.mobile) {
    display: none !important;
  }

  .ui[class*="widescreen only"].grid.grid.grid:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
  .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile) {
    display: none !important;
  }
}

/* Tablet Only Hide */

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui[class*="mobile only"].grid.grid.grid:not(.tablet),
  .ui.grid.grid.grid > [class*="mobile only"].row:not(.tablet),
  .ui.grid.grid.grid > [class*="mobile only"].column:not(.tablet),
  .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.tablet) {
    display: none !important;
  }

  .ui[class*="computer only"].grid.grid.grid:not(.tablet),
  .ui.grid.grid.grid > [class*="computer only"].row:not(.tablet),
  .ui.grid.grid.grid > [class*="computer only"].column:not(.tablet),
  .ui.grid.grid.grid > .row > [class*="computer only"].column:not(.tablet) {
    display: none !important;
  }

  .ui[class*="large screen only"].grid.grid.grid:not(.mobile),
  .ui.grid.grid.grid > [class*="large screen only"].row:not(.mobile),
  .ui.grid.grid.grid > [class*="large screen only"].column:not(.mobile),
  .ui.grid.grid.grid > .row > [class*="large screen only"].column:not(.mobile) {
    display: none !important;
  }

  .ui[class*="widescreen only"].grid.grid.grid:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
  .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile) {
    display: none !important;
  }
}

/* Computer Only Hide */

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .ui[class*="mobile only"].grid.grid.grid:not(.computer),
  .ui.grid.grid.grid > [class*="mobile only"].row:not(.computer),
  .ui.grid.grid.grid > [class*="mobile only"].column:not(.computer),
  .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.computer) {
    display: none !important;
  }

  .ui[class*="tablet only"].grid.grid.grid:not(.computer),
  .ui.grid.grid.grid > [class*="tablet only"].row:not(.computer),
  .ui.grid.grid.grid > [class*="tablet only"].column:not(.computer),
  .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.computer) {
    display: none !important;
  }

  .ui[class*="large screen only"].grid.grid.grid:not(.mobile),
  .ui.grid.grid.grid > [class*="large screen only"].row:not(.mobile),
  .ui.grid.grid.grid > [class*="large screen only"].column:not(.mobile),
  .ui.grid.grid.grid > .row > [class*="large screen only"].column:not(.mobile) {
    display: none !important;
  }

  .ui[class*="widescreen only"].grid.grid.grid:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
  .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile) {
    display: none !important;
  }
}

/* Large Screen Only Hide */

@media only screen and (min-width: 1200px) and (max-width: 1919px) {
  .ui[class*="mobile only"].grid.grid.grid:not(.computer),
  .ui.grid.grid.grid > [class*="mobile only"].row:not(.computer),
  .ui.grid.grid.grid > [class*="mobile only"].column:not(.computer),
  .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.computer) {
    display: none !important;
  }

  .ui[class*="tablet only"].grid.grid.grid:not(.computer),
  .ui.grid.grid.grid > [class*="tablet only"].row:not(.computer),
  .ui.grid.grid.grid > [class*="tablet only"].column:not(.computer),
  .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.computer) {
    display: none !important;
  }

  .ui[class*="widescreen only"].grid.grid.grid:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
  .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile) {
    display: none !important;
  }
}

/* Widescreen Only Hide */

@media only screen and (min-width: 1920px) {
  .ui[class*="mobile only"].grid.grid.grid:not(.computer),
  .ui.grid.grid.grid > [class*="mobile only"].row:not(.computer),
  .ui.grid.grid.grid > [class*="mobile only"].column:not(.computer),
  .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.computer) {
    display: none !important;
  }

  .ui[class*="tablet only"].grid.grid.grid:not(.computer),
  .ui.grid.grid.grid > [class*="tablet only"].row:not(.computer),
  .ui.grid.grid.grid > [class*="tablet only"].column:not(.computer),
  .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.computer) {
    display: none !important;
  }
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*
 * # Semantic - Menu
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributor
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Standard
*******************************/

/*--------------
      Menu
---------------*/

.ui.menu {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 1rem 0em;
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  background: #FFFFFF;
  font-weight: normal;
  border: 1px solid rgba(34, 36, 38, 0.15);
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
  min-height: 2.85714286em;
}

.ui.menu:after {
  content: '';
  display: block;
  height: 0px;
  clear: both;
  visibility: hidden;
}

.ui.menu:first-child {
  margin-top: 0rem;
}

.ui.menu:last-child {
  margin-bottom: 0rem;
}

/*--------------
    Sub-Menu
---------------*/

.ui.menu .menu {
  margin: 0em;
}

.ui.menu:not(.vertical) > .menu {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

/*--------------
      Item
---------------*/

.ui.menu:not(.vertical) .item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.ui.menu .item {
  position: relative;
  vertical-align: middle;
  line-height: 1;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: none;
  padding: 0.92857143em 1.14285714em;
  text-transform: none;
  color: rgba(0, 0, 0, 0.87);
  font-weight: normal;
  -webkit-transition: background 0.1s ease, box-shadow 0.1s ease, color 0.1s ease;
  transition: background 0.1s ease, box-shadow 0.1s ease, color 0.1s ease;
}

.ui.menu > .item:first-child {
  border-radius: 0.28571429rem 0px 0px 0.28571429rem;
}

/* Border */

.ui.menu .item:before {
  position: absolute;
  content: '';
  top: 0%;
  right: 0px;
  height: 100%;
  width: 1px;
  background: rgba(34, 36, 38, 0.1);
}

/*--------------
  Text Content
---------------*/

.ui.menu .text.item > *,
.ui.menu .item > a:not(.ui),
.ui.menu .item > p:only-child {
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  line-height: 1.3;
}

.ui.menu .item > p:first-child {
  margin-top: 0;
}

.ui.menu .item > p:last-child {
  margin-bottom: 0;
}

/*--------------
      Icons
---------------*/

.ui.menu .item > i.icon {
  opacity: 0.9;
  float: none;
  margin: 0em 0.35714286em 0em 0em;
}

/*--------------
     Button
---------------*/

.ui.menu:not(.vertical) .item > .button {
  position: relative;
  top: 0em;
  margin: -0.5em 0em;
  padding-bottom: 0.71428571em;
  padding-top: 0.71428571em;
  font-size: 1em;
}

/*----------------
 Grid / Container
-----------------*/

.ui.menu > .grid,
.ui.menu > .container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: inherit;
  -webkit-align-items: inherit;
  -ms-flex-align: inherit;
  align-items: inherit;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: inherit;
  -ms-flex-direction: inherit;
  flex-direction: inherit;
}

/*--------------
     Inputs
---------------*/

.ui.menu .item > .input {
  width: 100%;
}

.ui.menu:not(.vertical) .item > .input {
  position: relative;
  top: 0em;
  margin: -0.5em 0em;
}

.ui.menu .item > .input input {
  font-size: 1em;
  padding-top: 0.57142857em;
  padding-bottom: 0.57142857em;
}

/*--------------
     Header
---------------*/

.ui.menu .header.item,
.ui.vertical.menu .header.item {
  margin: 0em;
  background: '';
  text-transform: normal;
  font-weight: bold;
}

.ui.vertical.menu .item > .header:not(.ui) {
  margin: 0em 0em 0.5em;
  font-size: 1em;
  font-weight: bold;
}

/*--------------
     Popup
---------------*/

.ui.menu .ui.popup {
  display: none;
}

.ui.menu .ui.visible.popup {
  display: block;
}

/*--------------
    Dropdowns
---------------*/

/* Dropdown Icon */

.ui.menu .item > i.dropdown.icon {
  padding: 0em;
  float: right;
  margin: 0em 0em 0em 1em;
}

/* Menu */

.ui.menu .dropdown.item .menu {
  left: 0px;
  min-width: calc(100% - 1px);
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
  background: #FFFFFF;
  margin: 0em 0px 0px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  -webkit-flex-direction: column !important;
  -ms-flex-direction: column !important;
  flex-direction: column !important;
}

/* Menu Items */

.ui.menu .ui.dropdown .menu > .item {
  margin: 0;
  text-align: left;
  font-size: 1em !important;
  padding: 0.71428571em 1.14285714em !important;
  background: transparent !important;
  color: rgba(0, 0, 0, 0.87) !important;
  text-transform: none !important;
  font-weight: normal !important;
  box-shadow: none !important;
  -webkit-transition: none !important;
  transition: none !important;
}

.ui.menu .ui.dropdown .menu > .item:hover {
  background: rgba(0, 0, 0, 0.05) !important;
  color: rgba(0, 0, 0, 0.95) !important;
}

.ui.menu .ui.dropdown .menu > .selected.item {
  background: rgba(0, 0, 0, 0.05) !important;
  color: rgba(0, 0, 0, 0.95) !important;
}

.ui.menu .ui.dropdown .menu > .active.item {
  background: rgba(0, 0, 0, 0.03) !important;
  font-weight: bold !important;
  color: rgba(0, 0, 0, 0.95) !important;
}

.ui.menu .ui.dropdown.item .menu .item:not(.filtered) {
  display: block;
}

.ui.menu .ui.dropdown .menu > .item .icon:not(.dropdown) {
  display: inline-block;
  font-size: 1em !important;
  float: none;
  margin: 0em 0.75em 0em 0em;
}

/* Secondary */

.ui.secondary.menu .dropdown.item > .menu,
.ui.text.menu .dropdown.item > .menu {
  border-radius: 0.28571429rem;
  margin-top: 0.35714286em;
}

/* Pointing */

.ui.menu .pointing.dropdown.item .menu {
  margin-top: 0.75em;
}

/* Inverted */

.ui.inverted.menu .search.dropdown.item > .search,
.ui.inverted.menu .search.dropdown.item > .text {
  color: rgba(255, 255, 255, 0.9);
}

/* Vertical */

.ui.vertical.menu .dropdown.item > .icon {
  float: right;
  content: "\f0da";
  margin-left: 1em;
}

.ui.vertical.menu .dropdown.item .menu {
  top: 0% !important;
  left: 100%;
  min-width: 0;
  margin: 0em 0em 0em 0em;
  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.08);
  border-radius: 0em 0.28571429rem 0.28571429rem 0.28571429rem;
}

.ui.vertical.menu .active.dropdown.item {
  border-top-right-radius: 0em;
  border-bottom-right-radius: 0em;
}

.ui.vertical.menu .dropdown.active.item {
  box-shadow: none;
}

/* Evenly Divided */

.ui.item.menu .dropdown .menu .item {
  width: 100%;
}

/*--------------
     Labels
---------------*/

.ui.menu .item > .label {
  background: #999999;
  color: #FFFFFF;
  margin-left: 1em;
  padding: 0.3em 0.71428571em;
}

.ui.vertical.menu .item > .label {
  background: #999999;
  color: #FFFFFF;
  margin-top: -0.15em;
  margin-bottom: -0.15em;
  padding: 0.3em 0.71428571em;
}

.ui.menu .item > .floating.label {
  padding: 0.3em 0.71428571em;
}

/*--------------
     Images
---------------*/

.ui.menu .item > img:not(.ui) {
  display: inline-block;
  vertical-align: middle;
  margin: -0.3em 0em;
  width: 2.5em;
}

.ui.vertical.menu .item > img:not(.ui):only-child {
  display: block;
  max-width: 100%;
  width: auto;
}

/*******************************
          Coupling
*******************************/

/*--------------
     Sidebar
---------------*/

/* Show vertical dividers below last */

.ui.vertical.sidebar.menu > .item:first-child:before {
  display: block !important;
}

.ui.vertical.sidebar.menu > .item::before {
  top: auto;
  bottom: 0px;
}

/*--------------
    Container
---------------*/

@media only screen and (max-width: 767px) {
  .ui.menu > .ui.container {
    width: 100% !important;
    margin-left: 0em !important;
    margin-right: 0em !important;
  }
}

@media only screen and (min-width: 768px) {
  .ui.menu:not(.secondary):not(.text):not(.tabular):not(.borderless) > .container > .item:not(.right):not(.borderless):first-child {
    border-left: 1px solid rgba(34, 36, 38, 0.1);
  }
}

/*******************************
             States
*******************************/

/*--------------
      Hover
---------------*/

.ui.link.menu .item:hover,
.ui.menu .dropdown.item:hover,
.ui.menu .link.item:hover,
.ui.menu a.item:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.95);
}

/*--------------
     Pressed
---------------*/

.ui.link.menu .item:active,
.ui.menu .link.item:active,
.ui.menu a.item:active {
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.95);
}

/*--------------
     Active
---------------*/

.ui.menu .active.item {
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
  font-weight: normal;
  box-shadow: none;
}

.ui.menu .active.item > i.icon {
  opacity: 1;
}

/*--------------
  Active Hover
---------------*/

.ui.menu .active.item:hover,
.ui.vertical.menu .active.item:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
}

/*--------------
     Disabled
---------------*/

.ui.menu .item.disabled,
.ui.menu .item.disabled:hover {
  cursor: default;
  background-color: transparent !important;
  color: rgba(40, 40, 40, 0.3);
}

/*******************************
             Types
*******************************/

/*------------------
Floated Menu / Item
-------------------*/

/* Left Floated */

.ui.menu:not(.vertical) .left.item,
.ui.menu:not(.vertical) .left.menu {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: auto !important;
}

/* Right Floated */

.ui.menu:not(.vertical) .right.item,
.ui.menu:not(.vertical) .right.menu {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-left: auto !important;
}

/* Swapped Borders */

.ui.menu .right.item::before,
.ui.menu .right.menu > .item::before {
  right: auto;
  left: 0;
}

/*--------------
    Vertical
---------------*/

.ui.vertical.menu {
  display: block;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
}

/*--- Item ---*/

.ui.vertical.menu .item {
  display: block;
  background: none;
  border-top: none;
  border-right: none;
}

.ui.vertical.menu > .item:first-child {
  border-radius: 0.28571429rem 0.28571429rem 0px 0px;
}

.ui.vertical.menu > .item:last-child {
  border-radius: 0px 0px 0.28571429rem 0.28571429rem;
}

/*--- Label ---*/

.ui.vertical.menu .item > .label {
  float: right;
  text-align: center;
}

/*--- Icon ---*/

.ui.vertical.menu .item > i.icon {
  width: 1.18em;
  float: right;
  margin: 0em 0em 0em 0.5em;
}

.ui.vertical.menu .item > .label + i.icon {
  float: none;
  margin: 0em 0.5em 0em 0em;
}

/*--- Border ---*/

.ui.vertical.menu .item:before {
  position: absolute;
  content: '';
  top: 0%;
  left: 0px;
  width: 100%;
  background: rgba(34, 36, 38, 0.1);
  height: 1px;
}

.ui.vertical.menu .item:first-child:before {
  display: none !important;
}

/*--- Sub Menu ---*/

.ui.vertical.menu .item > .menu {
  margin: 0.5em -1.14285714em 0em;
}

.ui.vertical.menu .menu .item {
  background: none;
  padding: 0.5em 1.33333333em;
  font-size: 0.85714286em;
  color: rgba(0, 0, 0, 0.5);
}

.ui.vertical.menu .item .menu a.item:hover,
.ui.vertical.menu .item .menu .link.item:hover {
  color: rgba(0, 0, 0, 0.85);
}

.ui.vertical.menu .menu .item:before {
  display: none;
}

/* Vertical Active */

.ui.vertical.menu .active.item {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0em;
  box-shadow: none;
}

.ui.vertical.menu > .active.item:first-child {
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

.ui.vertical.menu > .active.item:last-child {
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}

.ui.vertical.menu > .active.item:only-child {
  border-radius: 0.28571429rem;
}

.ui.vertical.menu .active.item .menu .active.item {
  border-left: none;
}

.ui.vertical.menu .item .menu .active.item {
  background-color: transparent;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.95);
}

/*--------------
     Tabular
---------------*/

.ui.tabular.menu {
  border-radius: 0em;
  box-shadow: none !important;
  border: none;
  background: none transparent;
  border-bottom: 1px solid #D4D4D5;
}

.ui.tabular.fluid.menu {
  width: calc(100% +  2px ) !important;
}

.ui.tabular.menu .item {
  background: transparent;
  border-bottom: none;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 2px solid transparent;
  padding: 0.92857143em 1.42857143em;
  color: rgba(0, 0, 0, 0.87);
}

.ui.tabular.menu .item:before {
  display: none;
}

/* Hover */

.ui.tabular.menu .item:hover {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.8);
}

/* Active */

.ui.tabular.menu .active.item {
  background: none #FFFFFF;
  color: rgba(0, 0, 0, 0.95);
  border-top-width: 1px;
  border-color: #D4D4D5;
  font-weight: bold;
  margin-bottom: -1px;
  box-shadow: none;
  border-radius: 0.28571429rem 0.28571429rem 0px 0px !important;
}

/* Coupling with segment for attachment */

.ui.tabular.menu + .attached:not(.top).segment,
.ui.tabular.menu + .attached:not(.top).segment + .attached:not(.top).segment {
  border-top: none;
  margin: 0px;
  width: 100%;
}

.top.attached.segment + .ui.bottom.tabular.menu {
  position: relative;
  width: calc(100% +  2px );
  left: -1px;
}

/* Bottom Vertical Tabular */

.ui.bottom.tabular.menu {
  background: none transparent;
  border-radius: 0em;
  box-shadow: none !important;
  border-bottom: none;
  border-top: 1px solid #D4D4D5;
}

.ui.bottom.tabular.menu .item {
  background: none;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-top: none;
}

.ui.bottom.tabular.menu .active.item {
  background: none #FFFFFF;
  color: rgba(0, 0, 0, 0.95);
  border-color: #D4D4D5;
  margin: -1px 0px 0px 0px;
  border-radius: 0px 0px 0.28571429rem 0.28571429rem !important;
}

/* Vertical Tabular (Left) */

.ui.vertical.tabular.menu {
  background: none transparent;
  border-radius: 0em;
  box-shadow: none !important;
  border-bottom: none;
  border-right: 1px solid #D4D4D5;
}

.ui.vertical.tabular.menu .item {
  background: none;
  border-left: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  border-right: none;
}

.ui.vertical.tabular.menu .active.item {
  background: none #FFFFFF;
  color: rgba(0, 0, 0, 0.95);
  border-color: #D4D4D5;
  margin: 0px -1px 0px 0px;
  border-radius: 0.28571429rem 0px 0px 0.28571429rem !important;
}

/* Vertical Right Tabular */

.ui.vertical.right.tabular.menu {
  background: none transparent;
  border-radius: 0em;
  box-shadow: none !important;
  border-bottom: none;
  border-right: none;
  border-left: 1px solid #D4D4D5;
}

.ui.vertical.right.tabular.menu .item {
  background: none;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  border-left: none;
}

.ui.vertical.right.tabular.menu .active.item {
  background: none #FFFFFF;
  color: rgba(0, 0, 0, 0.95);
  border-color: #D4D4D5;
  margin: 0px 0px 0px -1px;
  border-radius: 0px 0.28571429rem 0.28571429rem 0px !important;
}

/* Dropdown */

.ui.tabular.menu .active.dropdown.item {
  margin-bottom: 0px;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 2px solid transparent;
  border-bottom: none;
}

/*--------------
   Pagination
---------------*/

.ui.pagination.menu {
  margin: 0em;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
}

.ui.pagination.menu .item:last-child {
  border-radius: 0em 0.28571429rem 0.28571429rem 0em;
}

.ui.compact.menu .item:last-child {
  border-radius: 0em 0.28571429rem 0.28571429rem 0em;
}

.ui.pagination.menu .item:last-child:before {
  display: none;
}

.ui.pagination.menu .item {
  min-width: 3em;
  text-align: center;
}

.ui.pagination.menu .icon.item i.icon {
  vertical-align: top;
}

/* Active */

.ui.pagination.menu .active.item {
  border-top: none;
  padding-top: 0.92857143em;
  background-color: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
  box-shadow: none;
}

/*--------------
   Secondary
---------------*/

.ui.secondary.menu {
  background: none;
  margin-left: -0.35714286em;
  margin-right: -0.35714286em;
  border-radius: 0em;
  border: none;
  box-shadow: none;
}

/* Item */

.ui.secondary.menu .item {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  box-shadow: none;
  border: none;
  padding: 0.71428571em 0.92857143em;
  margin: 0em 0.35714286em;
  background: none;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
  border-radius: 0.28571429rem;
}

/* No Divider */

.ui.secondary.menu .item:before {
  display: none !important;
}

/* Header */

.ui.secondary.menu .header.item {
  border-radius: 0em;
  border-right: none;
  background: none transparent;
}

/* Image */

.ui.secondary.menu .item > img:not(.ui) {
  margin: 0em;
}

/* Hover */

.ui.secondary.menu .dropdown.item:hover,
.ui.secondary.menu .link.item:hover,
.ui.secondary.menu a.item:hover {
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
}

/* Active */

.ui.secondary.menu .active.item {
  box-shadow: none;
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
  border-radius: 0.28571429rem;
}

/* Active Hover */

.ui.secondary.menu .active.item:hover {
  box-shadow: none;
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
}

/* Inverted */

.ui.secondary.inverted.menu .link.item,
.ui.secondary.inverted.menu a.item {
  color: rgba(255, 255, 255, 0.7) !important;
}

.ui.secondary.inverted.menu .dropdown.item:hover,
.ui.secondary.inverted.menu .link.item:hover,
.ui.secondary.inverted.menu a.item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff !important;
}

.ui.secondary.inverted.menu .active.item {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff !important;
}

/* Fix item margins */

.ui.secondary.item.menu {
  margin-left: 0em;
  margin-right: 0em;
}

.ui.secondary.item.menu .item:last-child {
  margin-right: 0em;
}

.ui.secondary.attached.menu {
  box-shadow: none;
}

/* Sub Menu */

.ui.vertical.secondary.menu .item:not(.dropdown) > .menu {
  margin: 0em -0.92857143em;
}

.ui.vertical.secondary.menu .item:not(.dropdown) > .menu > .item {
  margin: 0em;
  padding: 0.5em 1.33333333em;
}

/*---------------------
   Secondary Vertical
-----------------------*/

.ui.secondary.vertical.menu > .item {
  border: none;
  margin: 0em 0em 0.35714286em;
  border-radius: 0.28571429rem !important;
}

.ui.secondary.vertical.menu > .header.item {
  border-radius: 0em;
}

/* Sub Menu */

.ui.vertical.secondary.menu .item > .menu .item {
  background-color: transparent;
}

/* Inverted */

.ui.secondary.inverted.menu {
  background-color: transparent;
}

/*---------------------
   Secondary Pointing
-----------------------*/

.ui.secondary.pointing.menu {
  margin-left: 0em;
  margin-right: 0em;
  border-bottom: 2px solid rgba(34, 36, 38, 0.15);
}

.ui.secondary.pointing.menu .item {
  border-bottom-color: transparent;
  border-bottom-style: solid;
  border-radius: 0em;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  margin: 0em 0em -2px;
  padding: 0.85714286em 1.14285714em;
  border-bottom-width: 2px;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}

/* Item Types */

.ui.secondary.pointing.menu .header.item {
  color: rgba(0, 0, 0, 0.85) !important;
}

.ui.secondary.pointing.menu .text.item {
  box-shadow: none !important;
}

.ui.secondary.pointing.menu .item:after {
  display: none;
}

/* Hover */

.ui.secondary.pointing.menu .dropdown.item:hover,
.ui.secondary.pointing.menu .link.item:hover,
.ui.secondary.pointing.menu a.item:hover {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.87);
}

/* Pressed */

.ui.secondary.pointing.menu .dropdown.item:active,
.ui.secondary.pointing.menu .link.item:active,
.ui.secondary.pointing.menu a.item:active {
  background-color: transparent;
  border-color: rgba(34, 36, 38, 0.15);
}

/* Active */

.ui.secondary.pointing.menu .active.item {
  background-color: transparent;
  box-shadow: none;
  border-color: #1B1C1D;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.95);
}

/* Active Hover */

.ui.secondary.pointing.menu .active.item:hover {
  border-color: #1B1C1D;
  color: rgba(0, 0, 0, 0.95);
}

/* Active Dropdown */

.ui.secondary.pointing.menu .active.dropdown.item {
  border-color: transparent;
}

/* Vertical Pointing */

.ui.secondary.vertical.pointing.menu {
  border-bottom-width: 0px;
  border-right-width: 2px;
  border-right-style: solid;
  border-right-color: rgba(34, 36, 38, 0.15);
}

.ui.secondary.vertical.pointing.menu .item {
  border-bottom: none;
  border-right-style: solid;
  border-right-color: transparent;
  border-radius: 0em !important;
  margin: 0em -2px 0em 0em;
  border-right-width: 2px;
}

/* Vertical Active */

.ui.secondary.vertical.pointing.menu .active.item {
  border-color: #1B1C1D;
}

/* Inverted */

.ui.secondary.inverted.pointing.menu {
  border-color: rgba(255, 255, 255, 0.1);
}

.ui.secondary.inverted.pointing.menu {
  border-width: 2px;
  border-color: rgba(34, 36, 38, 0.15);
}

.ui.secondary.inverted.pointing.menu .item {
  color: rgba(255, 255, 255, 0.9);
}

.ui.secondary.inverted.pointing.menu .header.item {
  color: #FFFFFF !important;
}

/* Hover */

.ui.secondary.inverted.pointing.menu .item:hover {
  color: rgba(0, 0, 0, 0.95);
}

/* Active */

.ui.secondary.inverted.pointing.menu .active.item {
  border-color: #FFFFFF;
  color: #ffffff;
}

/*--------------
    Text Menu
---------------*/

.ui.text.menu {
  background: none transparent;
  border-radius: 0px;
  box-shadow: none;
  border: none;
  margin: 1em -0.5em;
}

.ui.text.menu .item {
  border-radius: 0px;
  box-shadow: none;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  margin: 0em 0em;
  padding: 0.35714286em 0.5em;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.6);
  -webkit-transition: opacity 0.1s ease;
  transition: opacity 0.1s ease;
}

/* Border */

.ui.text.menu .item:before,
.ui.text.menu .menu .item:before {
  display: none !important;
}

/* Header */

.ui.text.menu .header.item {
  background-color: transparent;
  opacity: 1;
  color: rgba(0, 0, 0, 0.85);
  font-size: 0.92857143em;
  text-transform: uppercase;
  font-weight: bold;
}

/* Image */

.ui.text.menu .item > img:not(.ui) {
  margin: 0em;
}

/*--- fluid text ---*/

.ui.text.item.menu .item {
  margin: 0em;
}

/*--- vertical text ---*/

.ui.vertical.text.menu {
  margin: 1em 0em;
}

.ui.vertical.text.menu:first-child {
  margin-top: 0rem;
}

.ui.vertical.text.menu:last-child {
  margin-bottom: 0rem;
}

.ui.vertical.text.menu .item {
  margin: 0.57142857em 0em;
}

.ui.vertical.text.menu .item > i.icon {
  float: none;
  margin: 0em 0.35714286em 0em 0em;
}

.ui.vertical.text.menu .header.item {
  margin: 0.57142857em 0em 0.71428571em;
}

/* Vertical Sub Menu */

.ui.vertical.text.menu .item:not(.dropdown) > .menu {
  margin: 0em;
}

.ui.vertical.text.menu .item:not(.dropdown) > .menu > .item {
  margin: 0em;
  padding: 0.5em 0em;
}

/*--- hover ---*/

.ui.text.menu .item:hover {
  opacity: 1;
  background-color: transparent;
}

/*--- active ---*/

.ui.text.menu .active.item {
  background-color: transparent;
  border: none;
  box-shadow: none;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.95);
}

/*--- active hover ---*/

.ui.text.menu .active.item:hover {
  background-color: transparent;
}

/* Disable Bariations */

.ui.text.pointing.menu .active.item:after {
  box-shadow: none;
}

.ui.text.attached.menu {
  box-shadow: none;
}

/* Inverted */

.ui.inverted.text.menu,
.ui.inverted.text.menu .item,
.ui.inverted.text.menu .item:hover,
.ui.inverted.text.menu .active.item {
  background-color: transparent !important;
}

/* Fluid */

.ui.fluid.text.menu {
  margin-left: 0em;
  margin-right: 0em;
}

/*--------------
    Icon Only
---------------*/

/* Vertical Menu */

.ui.vertical.icon.menu {
  display: inline-block;
  width: auto;
}

/* Item */

.ui.icon.menu .item {
  height: auto;
  text-align: center;
  color: #1B1C1D;
}

/* Icon */

.ui.icon.menu .item > .icon:not(.dropdown) {
  margin: 0;
  opacity: 1;
}

/* Icon Gylph */

.ui.icon.menu .icon:before {
  opacity: 1;
}

/* (x) Item Icon */

.ui.menu .icon.item > .icon {
  width: auto;
  margin: 0em auto;
}

/* Vertical Icon */

.ui.vertical.icon.menu .item > .icon:not(.dropdown) {
  display: block;
  opacity: 1;
  margin: 0em auto;
  float: none;
}

/* Inverted */

.ui.inverted.icon.menu .item {
  color: #FFFFFF;
}

/*--------------
   Labeled Icon
---------------*/

/* Menu */

.ui.labeled.icon.menu {
  text-align: center;
}

/* Item */

.ui.labeled.icon.menu .item {
  min-width: 6em;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

/* Icon */

.ui.labeled.icon.menu .item > .icon:not(.dropdown) {
  height: 1em;
  display: block;
  font-size: 1.71428571em !important;
  margin: 0em auto 0.5rem !important;
}

/* Fluid */

.ui.fluid.labeled.icon.menu > .item {
  min-width: 0em;
}

/*******************************
           Variations
*******************************/

/*--------------
    Stackable
---------------*/

@media only screen and (max-width: 767px) {
  .ui.stackable.menu {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .ui.stackable.menu .item {
    width: 100% !important;
  }

  .ui.stackable.menu .item:before {
    position: absolute;
    content: '';
    top: auto;
    bottom: 0px;
    left: 0px;
    width: 100%;
    background: rgba(34, 36, 38, 0.1);
    height: 1px;
  }
}

/*--------------
     Colors
---------------*/

/*--- Standard Colors  ---*/

.ui.menu .red.active.item,
.ui.red.menu .active.item {
  border-color: #DB2828 !important;
  color: #DB2828 !important;
}

.ui.menu .orange.active.item,
.ui.orange.menu .active.item {
  border-color: #F2711C !important;
  color: #F2711C !important;
}

.ui.menu .yellow.active.item,
.ui.yellow.menu .active.item {
  border-color: #FBBD08 !important;
  color: #FBBD08 !important;
}

.ui.menu .olive.active.item,
.ui.olive.menu .active.item {
  border-color: #B5CC18 !important;
  color: #B5CC18 !important;
}

.ui.menu .green.active.item,
.ui.green.menu .active.item {
  border-color: #21BA45 !important;
  color: #21BA45 !important;
}

.ui.menu .teal.active.item,
.ui.teal.menu .active.item {
  border-color: #00B5AD !important;
  color: #00B5AD !important;
}

.ui.menu .blue.active.item,
.ui.blue.menu .active.item {
  border-color: #2185D0 !important;
  color: #2185D0 !important;
}

.ui.menu .violet.active.item,
.ui.violet.menu .active.item {
  border-color: #6435C9 !important;
  color: #6435C9 !important;
}

.ui.menu .purple.active.item,
.ui.purple.menu .active.item {
  border-color: #A333C8 !important;
  color: #A333C8 !important;
}

.ui.menu .pink.active.item,
.ui.pink.menu .active.item {
  border-color: #E03997 !important;
  color: #E03997 !important;
}

.ui.menu .brown.active.item,
.ui.brown.menu .active.item {
  border-color: #A5673F !important;
  color: #A5673F !important;
}

.ui.menu .grey.active.item,
.ui.grey.menu .active.item {
  border-color: #767676 !important;
  color: #767676 !important;
}

/*--------------
    Inverted
---------------*/

.ui.inverted.menu {
  border: 0px solid transparent;
  background: #1B1C1D;
  box-shadow: none;
}

/* Menu Item */

.ui.inverted.menu .item,
.ui.inverted.menu .item > a:not(.ui) {
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
}

.ui.inverted.menu .item.menu {
  background: transparent;
}

/*--- Border ---*/

.ui.inverted.menu .item:before {
  background: rgba(255, 255, 255, 0.08);
}

.ui.vertical.inverted.menu .item:before {
  background: rgba(255, 255, 255, 0.08);
}

/* Sub Menu */

.ui.vertical.inverted.menu .menu .item,
.ui.vertical.inverted.menu .menu .item a:not(.ui) {
  color: rgba(255, 255, 255, 0.5);
}

/* Header */

.ui.inverted.menu .header.item {
  margin: 0em;
  background: transparent;
  box-shadow: none;
}

/* Disabled */

.ui.inverted.menu .item.disabled,
.ui.inverted.menu .item.disabled:hover {
  color: rgba(225, 225, 225, 0.3);
}

/*--- Hover ---*/

.ui.link.inverted.menu .item:hover,
.ui.inverted.menu .dropdown.item:hover,
.ui.inverted.menu .link.item:hover,
.ui.inverted.menu a.item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.ui.vertical.inverted.menu .item .menu a.item:hover,
.ui.vertical.inverted.menu .item .menu .link.item:hover {
  background: transparent;
  color: #ffffff;
}

/*--- Pressed ---*/

.ui.inverted.menu a.item:active,
.ui.inverted.menu .link.item:active,
.ui.inverted.menu a.item:active {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

/*--- Active ---*/

.ui.inverted.menu .active.item {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff !important;
}

.ui.inverted.vertical.menu .item .menu .active.item {
  background: transparent;
  color: #FFFFFF;
}

.ui.inverted.pointing.menu .active.item:after {
  background: #3D3E3F !important;
  margin: 0em !important;
  box-shadow: none !important;
  border: none !important;
}

/*--- Active Hover ---*/

.ui.inverted.menu .active.item:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #FFFFFF !important;
}

.ui.inverted.pointing.menu .active.item:hover:after {
  background: #3D3E3F !important;
}

/*--------------
     Floated
---------------*/

.ui.floated.menu {
  float: left;
  margin: 0rem 0.5rem 0rem 0rem;
}

.ui.floated.menu .item:last-child:before {
  display: none;
}

.ui.right.floated.menu {
  float: right;
  margin: 0rem 0rem 0rem 0.5rem;
}

/*--------------
    Inverted
---------------*/

/* Red */

.ui.inverted.menu .red.active.item,
.ui.inverted.red.menu {
  background-color: #DB2828;
}

.ui.inverted.red.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}

.ui.inverted.red.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Orange */

.ui.inverted.menu .orange.active.item,
.ui.inverted.orange.menu {
  background-color: #F2711C;
}

.ui.inverted.orange.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}

.ui.inverted.orange.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Yellow */

.ui.inverted.menu .yellow.active.item,
.ui.inverted.yellow.menu {
  background-color: #FBBD08;
}

.ui.inverted.yellow.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}

.ui.inverted.yellow.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Olive */

.ui.inverted.menu .olive.active.item,
.ui.inverted.olive.menu {
  background-color: #B5CC18;
}

.ui.inverted.olive.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}

.ui.inverted.olive.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Green */

.ui.inverted.menu .green.active.item,
.ui.inverted.green.menu {
  background-color: #21BA45;
}

.ui.inverted.green.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}

.ui.inverted.green.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Teal */

.ui.inverted.menu .teal.active.item,
.ui.inverted.teal.menu {
  background-color: #00B5AD;
}

.ui.inverted.teal.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}

.ui.inverted.teal.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Blue */

.ui.inverted.menu .blue.active.item,
.ui.inverted.blue.menu {
  background-color: #2185D0;
}

.ui.inverted.blue.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}

.ui.inverted.blue.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Violet */

.ui.inverted.menu .violet.active.item,
.ui.inverted.violet.menu {
  background-color: #6435C9;
}

.ui.inverted.violet.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}

.ui.inverted.violet.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Purple */

.ui.inverted.menu .purple.active.item,
.ui.inverted.purple.menu {
  background-color: #A333C8;
}

.ui.inverted.purple.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}

.ui.inverted.purple.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Pink */

.ui.inverted.menu .pink.active.item,
.ui.inverted.pink.menu {
  background-color: #E03997;
}

.ui.inverted.pink.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}

.ui.inverted.pink.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Brown */

.ui.inverted.menu .brown.active.item,
.ui.inverted.brown.menu {
  background-color: #A5673F;
}

.ui.inverted.brown.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}

.ui.inverted.brown.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Grey */

.ui.inverted.menu .grey.active.item,
.ui.inverted.grey.menu {
  background-color: #767676;
}

.ui.inverted.grey.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}

.ui.inverted.grey.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/*--------------
     Fitted
---------------*/

.ui.fitted.menu .item,
.ui.fitted.menu .item .menu .item,
.ui.menu .fitted.item {
  padding: 0em;
}

.ui.horizontally.fitted.menu .item,
.ui.horizontally.fitted.menu .item .menu .item,
.ui.menu .horizontally.fitted.item {
  padding-top: 0.92857143em;
  padding-bottom: 0.92857143em;
}

.ui.vertically.fitted.menu .item,
.ui.vertically.fitted.menu .item .menu .item,
.ui.menu .vertically.fitted.item {
  padding-left: 1.14285714em;
  padding-right: 1.14285714em;
}

/*--------------
   Borderless
---------------*/

.ui.borderless.menu .item:before,
.ui.borderless.menu .item .menu .item:before,
.ui.menu .borderless.item:before {
  background: none !important;
}

/*-------------------
       Compact
--------------------*/

.ui.compact.menu {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin: 0em;
  vertical-align: middle;
}

.ui.compact.vertical.menu {
  display: inline-block;
}

.ui.compact.menu .item:last-child {
  border-radius: 0em 0.28571429rem 0.28571429rem 0em;
}

.ui.compact.menu .item:last-child:before {
  display: none;
}

.ui.compact.vertical.menu {
  width: auto !important;
}

.ui.compact.vertical.menu .item:last-child::before {
  display: block;
}

/*-------------------
        Fluid
--------------------*/

.ui.menu.fluid,
.ui.vertical.menu.fluid {
  width: 100% !important;
}

/*-------------------
      Evenly Sized
--------------------*/

.ui.item.menu,
.ui.item.menu .item {
  width: 100%;
  padding-left: 0em !important;
  padding-right: 0em !important;
  margin-left: 0em !important;
  margin-right: 0em !important;
  text-align: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.ui.item.menu .item:last-child:before {
  display: none;
}

.ui.menu.two.item .item {
  width: 50%;
}

.ui.menu.three.item .item {
  width: 33.333%;
}

.ui.menu.four.item .item {
  width: 25%;
}

.ui.menu.five.item .item {
  width: 20%;
}

.ui.menu.six.item .item {
  width: 16.666%;
}

.ui.menu.seven.item .item {
  width: 14.285%;
}

.ui.menu.eight.item .item {
  width: 12.500%;
}

.ui.menu.nine.item .item {
  width: 11.11%;
}

.ui.menu.ten.item .item {
  width: 10.0%;
}

.ui.menu.eleven.item .item {
  width: 9.09%;
}

.ui.menu.twelve.item .item {
  width: 8.333%;
}

/*--------------
     Fixed
---------------*/

.ui.menu.fixed {
  position: fixed;
  z-index: 101;
  margin: 0em;
  width: 100%;
}

.ui.menu.fixed,
.ui.menu.fixed .item:first-child,
.ui.menu.fixed .item:last-child {
  border-radius: 0px !important;
}

.ui.fixed.menu,
.ui[class*="top fixed"].menu {
  top: 0px;
  left: 0px;
  right: auto;
  bottom: auto;
}

.ui[class*="top fixed"].menu {
  border-top: none;
  border-left: none;
  border-right: none;
}

.ui[class*="right fixed"].menu {
  border-top: none;
  border-bottom: none;
  border-right: none;
  top: 0px;
  right: 0px;
  left: auto;
  bottom: auto;
  width: auto;
  height: 100%;
}

.ui[class*="bottom fixed"].menu {
  border-bottom: none;
  border-left: none;
  border-right: none;
  bottom: 0px;
  left: 0px;
  top: auto;
  right: auto;
}

.ui[class*="left fixed"].menu {
  border-top: none;
  border-bottom: none;
  border-left: none;
  top: 0px;
  left: 0px;
  right: auto;
  bottom: auto;
  width: auto;
  height: 100%;
}

/* Coupling with Grid */

.ui.fixed.menu + .ui.grid {
  padding-top: 2.75rem;
}

/*-------------------
       Pointing
--------------------*/

.ui.pointing.menu .item:after {
  visibility: hidden;
  position: absolute;
  content: '';
  top: 100%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  background: none;
  margin: 0.5px 0em 0em;
  width: 0.57142857em;
  height: 0.57142857em;
  border: none;
  border-bottom: 1px solid #D4D4D5;
  border-right: 1px solid #D4D4D5;
  z-index: 2;
  -webkit-transition: background 0.1s ease;
  transition: background 0.1s ease;
}

.ui.vertical.pointing.menu .item:after {
  position: absolute;
  top: 50%;
  right: 0%;
  bottom: auto;
  left: auto;
  -webkit-transform: translateX(50%) translateY(-50%) rotate(45deg);
  transform: translateX(50%) translateY(-50%) rotate(45deg);
  margin: 0em -0.5px 0em 0em;
  border: none;
  border-top: 1px solid #D4D4D5;
  border-right: 1px solid #D4D4D5;
}

/* Active */

.ui.pointing.menu .active.item:after {
  visibility: visible;
}

.ui.pointing.menu .active.dropdown.item:after {
  visibility: hidden;
}

/* Don't double up pointers */

.ui.pointing.menu .dropdown.active.item:after,
.ui.pointing.menu .active.item .menu .active.item:after {
  display: none;
}

/* Colors */

.ui.pointing.menu .active.item:hover:after {
  background-color: #F2F2F2;
}

.ui.pointing.menu .active.item:after {
  background-color: #F2F2F2;
}

.ui.pointing.menu .active.item:hover:after {
  background-color: #F2F2F2;
}

.ui.vertical.pointing.menu .active.item:hover:after {
  background-color: #F2F2F2;
}

.ui.vertical.pointing.menu .active.item:after {
  background-color: #F2F2F2;
}

.ui.vertical.pointing.menu .menu .active.item:after {
  background-color: #FFFFFF;
}

/*--------------
    Attached
---------------*/

/* Middle */

.ui.attached.menu {
  top: 0px;
  bottom: 0px;
  border-radius: 0px;
  margin: 0em -1px;
  width: calc(100% +  2px );
  max-width: calc(100% +  2px );
  box-shadow: none;
}

.ui.attached + .ui.attached.menu:not(.top) {
  border-top: none;
}

/* Top */

.ui[class*="top attached"].menu {
  bottom: 0px;
  margin-bottom: 0em;
  top: 0px;
  margin-top: 1rem;
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

.ui.menu[class*="top attached"]:first-child {
  margin-top: 0em;
}

/* Bottom */

.ui[class*="bottom attached"].menu {
  bottom: 0px;
  margin-top: 0em;
  top: 0px;
  margin-bottom: 1rem;
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15), none;
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}

.ui[class*="bottom attached"].menu:last-child {
  margin-bottom: 0em;
}

/* Attached Menu Item */

.ui.top.attached.menu > .item:first-child {
  border-radius: 0.28571429rem 0em 0em 0em;
}

.ui.bottom.attached.menu > .item:first-child {
  border-radius: 0em 0em 0em 0.28571429rem;
}

/* Tabular Attached */

.ui.attached.menu:not(.tabular) {
  border: 1px solid #D4D4D5;
}

.ui.attached.inverted.menu {
  border: none;
}

.ui.attached.tabular.menu {
  margin-left: 0;
  margin-right: 0;
  width: 100%;
}

/*--------------
     Sizes
---------------*/

/* Small */

.ui.small.menu {
  font-size: 0.92857143rem;
}

.ui.small.vertical.menu {
  width: 13rem;
}

/* Medium */

.ui.menu {
  font-size: 1rem;
}

.ui.vertical.menu {
  width: 15rem;
}

/* Large */

.ui.large.menu {
  font-size: 1.14285714rem;
}

.ui.large.vertical.menu {
  width: 18rem;
}

/* Huge */

.ui.huge.menu {
  font-size: 1.42857143rem;
}

.ui.huge.vertical.menu {
  width: 20rem;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Message
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Message
*******************************/

.ui.message {
  position: relative;
  min-height: 1em;
  margin: 1em 0em;
  background: #F8F8F9;
  padding: 1em 1.5em;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease, box-shadow 0.1s ease;
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease, box-shadow 0.1s ease;
  border-radius: 0.28571429rem;
  box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.22) inset, 0px 0px 0px 0px rgba(0, 0, 0, 0);
}

.ui.message:first-child {
  margin-top: 0em;
}

.ui.message:last-child {
  margin-bottom: 0em;
}

/*--------------
     Content
---------------*/

/* Header */

.ui.message .header {
  display: block;
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  font-weight: bold;
  margin: -0.14285em 0em 0rem 0em;
}

/* Default font size */

.ui.message .header:not(.ui) {
  font-size: 1.14285714em;
}

/* Paragraph */

.ui.message p {
  opacity: 0.85;
  margin: 0.75em 0em;
}

.ui.message p:first-child {
  margin-top: 0em;
}

.ui.message p:last-child {
  margin-bottom: 0em;
}

.ui.message .header + p {
  margin-top: 0.25em;
}

/* List */

.ui.message .list:not(.ui) {
  text-align: left;
  padding: 0em;
  opacity: 0.85;
  list-style-position: inside;
  margin: 0.5em 0em 0em;
}

.ui.message .list:not(.ui):first-child {
  margin-top: 0em;
}

.ui.message .list:not(.ui):last-child {
  margin-bottom: 0em;
}

.ui.message .list:not(.ui) li {
  position: relative;
  list-style-type: none;
  margin: 0em 0em 0.3em 1em;
  padding: 0em;
}

.ui.message .list:not(.ui) li:before {
  position: absolute;
  content: '•';
  left: -1em;
  height: 100%;
  vertical-align: baseline;
}

.ui.message .list:not(.ui) li:last-child {
  margin-bottom: 0em;
}

/* Icon */

.ui.message > .icon {
  margin-right: 0.6em;
}

/* Close Icon */

.ui.message > .close.icon {
  cursor: pointer;
  position: absolute;
  margin: 0em;
  top: 0.78575em;
  right: 0.5em;
  opacity: 0.7;
  -webkit-transition: opacity 0.1s ease;
  transition: opacity 0.1s ease;
}

.ui.message > .close.icon:hover {
  opacity: 1;
}

/* First / Last Element */

.ui.message > :first-child {
  margin-top: 0em;
}

.ui.message > :last-child {
  margin-bottom: 0em;
}

/*******************************
            Coupling
*******************************/

.ui.dropdown .menu > .message {
  margin: 0px -1px;
}

/*******************************
            States
*******************************/

/*--------------
    Visible
---------------*/

.ui.visible.visible.visible.visible.message {
  display: block;
}

.ui.icon.visible.visible.visible.visible.message {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

/*--------------
     Hidden
---------------*/

.ui.hidden.hidden.hidden.hidden.message {
  display: none;
}

/*******************************
            Variations
*******************************/

/*--------------
    Compact
---------------*/

.ui.compact.message {
  display: inline-block;
}

/*--------------
    Attached
---------------*/

.ui.attached.message {
  margin-bottom: -1px;
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
  box-shadow: 0em 0em 0em 1px rgba(34, 36, 38, 0.15) inset;
  margin-left: -1px;
  margin-right: -1px;
}

.ui.attached + .ui.attached.message:not(.top):not(.bottom) {
  margin-top: -1px;
  border-radius: 0em;
}

.ui.bottom.attached.message {
  margin-top: -1px;
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
  box-shadow: 0em 0em 0em 1px rgba(34, 36, 38, 0.15) inset, 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
}

.ui.bottom.attached.message:not(:last-child) {
  margin-bottom: 1em;
}

.ui.attached.icon.message {
  width: auto;
}

/*--------------
      Icon
---------------*/

.ui.icon.message {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.ui.icon.message > .icon:not(.close) {
  display: block;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: auto;
  line-height: 1;
  vertical-align: middle;
  font-size: 3em;
  opacity: 0.8;
}

.ui.icon.message > .content {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  vertical-align: middle;
}

.ui.icon.message .icon:not(.close) + .content {
  padding-left: 0rem;
}

.ui.icon.message .circular.icon {
  width: 1em;
}

/*--------------
    Floating
---------------*/

.ui.floating.message {
  box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.22) inset, 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.08);
}

/*--------------
     Colors
---------------*/

.ui.black.message {
  background-color: #1B1C1D;
  color: rgba(255, 255, 255, 0.9);
}

/*--------------
     Types
---------------*/

/* Positive */

.ui.positive.message {
  background-color: #FCFFF5;
  color: #2C662D;
}

.ui.positive.message,
.ui.attached.positive.message {
  box-shadow: 0px 0px 0px 1px #A3C293 inset, 0px 0px 0px 0px rgba(0, 0, 0, 0);
}

.ui.positive.message .header {
  color: #1A531B;
}

/* Negative */

.ui.negative.message {
  background-color: #FFF6F6;
  color: #9F3A38;
}

.ui.negative.message,
.ui.attached.negative.message {
  box-shadow: 0px 0px 0px 1px #E0B4B4 inset, 0px 0px 0px 0px rgba(0, 0, 0, 0);
}

.ui.negative.message .header {
  color: #912D2B;
}

/* Info */

.ui.info.message {
  background-color: #F8FFFF;
  color: #276F86;
}

.ui.info.message,
.ui.attached.info.message {
  box-shadow: 0px 0px 0px 1px #A9D5DE inset, 0px 0px 0px 0px rgba(0, 0, 0, 0);
}

.ui.info.message .header {
  color: #0E566C;
}

/* Warning */

.ui.warning.message {
  background-color: #FFFAF3;
  color: #573A08;
}

.ui.warning.message,
.ui.attached.warning.message {
  box-shadow: 0px 0px 0px 1px #C9BA9B inset, 0px 0px 0px 0px rgba(0, 0, 0, 0);
}

.ui.warning.message .header {
  color: #794B02;
}

/* Error */

.ui.error.message {
  background-color: #FFF6F6;
  color: #9F3A38;
}

.ui.error.message,
.ui.attached.error.message {
  box-shadow: 0px 0px 0px 1px #E0B4B4 inset, 0px 0px 0px 0px rgba(0, 0, 0, 0);
}

.ui.error.message .header {
  color: #912D2B;
}

/* Success */

.ui.success.message {
  background-color: #FCFFF5;
  color: #2C662D;
}

.ui.success.message,
.ui.attached.success.message {
  box-shadow: 0px 0px 0px 1px #A3C293 inset, 0px 0px 0px 0px rgba(0, 0, 0, 0);
}

.ui.success.message .header {
  color: #1A531B;
}

/* Colors */

.ui.inverted.message,
.ui.black.message {
  background-color: #1B1C1D;
  color: rgba(255, 255, 255, 0.9);
}

.ui.red.message {
  background-color: #FFE8E6;
  color: #DB2828;
}

.ui.red.message .header {
  color: #c82121;
}

.ui.orange.message {
  background-color: #FFEDDE;
  color: #F2711C;
}

.ui.orange.message .header {
  color: #e7640d;
}

.ui.yellow.message {
  background-color: #FFF8DB;
  color: #B58105;
}

.ui.yellow.message .header {
  color: #9c6f04;
}

.ui.olive.message {
  background-color: #FBFDEF;
  color: #8ABC1E;
}

.ui.olive.message .header {
  color: #7aa61a;
}

.ui.green.message {
  background-color: #E5F9E7;
  color: #1EBC30;
}

.ui.green.message .header {
  color: #1aa62a;
}

.ui.teal.message {
  background-color: #E1F7F7;
  color: #10A3A3;
}

.ui.teal.message .header {
  color: #0e8c8c;
}

.ui.blue.message {
  background-color: #DFF0FF;
  color: #2185D0;
}

.ui.blue.message .header {
  color: #1e77ba;
}

.ui.violet.message {
  background-color: #EAE7FF;
  color: #6435C9;
}

.ui.violet.message .header {
  color: #5a30b5;
}

.ui.purple.message {
  background-color: #F6E7FF;
  color: #A333C8;
}

.ui.purple.message .header {
  color: #922eb4;
}

.ui.pink.message {
  background-color: #FFE3FB;
  color: #E03997;
}

.ui.pink.message .header {
  color: #dd238b;
}

.ui.brown.message {
  background-color: #F1E2D3;
  color: #A5673F;
}

.ui.brown.message .header {
  color: #935b38;
}

/*--------------
     Sizes
---------------*/

.ui.small.message {
  font-size: 0.92857143em;
}

.ui.message {
  font-size: 1em;
}

.ui.large.message {
  font-size: 1.14285714em;
}

.ui.huge.message {
  font-size: 1.42857143em;
}

.ui.massive.message {
  font-size: 1.71428571em;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
        Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Table
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
             Table
*******************************/

/* Prototype */

.ui.table {
  width: 100%;
  background: #FFFFFF;
  margin: 1em 0em;
  border: 1px solid rgba(34, 36, 38, 0.15);
  box-shadow: none;
  border-radius: 0.28571429rem;
  text-align: left;
  color: rgba(0, 0, 0, 0.87);
  border-collapse: separate;
  border-spacing: 0px;
}

.ui.table:first-child {
  margin-top: 0em;
}

.ui.table:last-child {
  margin-bottom: 0em;
}

/*******************************
             Parts
*******************************/

/* Table Content */

.ui.table th,
.ui.table td {
  -webkit-transition: background 0.1s ease, color 0.1s ease;
  transition: background 0.1s ease, color 0.1s ease;
}

/* Headers */

.ui.table thead {
  box-shadow: none;
}

.ui.table thead th {
  cursor: auto;
  background: #F9FAFB;
  text-align: inherit;
  color: rgba(0, 0, 0, 0.87);
  padding: 0.92857143em 0.71428571em;
  vertical-align: inherit;
  font-style: none;
  font-weight: bold;
  text-transform: none;
  border-bottom: 1px solid rgba(34, 36, 38, 0.1);
  border-left: none;
}

.ui.table thead tr > th:first-child {
  border-left: none;
}

.ui.table thead tr:first-child > th:first-child {
  border-radius: 0.28571429rem 0em 0em 0em;
}

.ui.table thead tr:first-child > th:last-child {
  border-radius: 0em 0.28571429rem 0em 0em;
}

.ui.table thead tr:first-child > th:only-child {
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

/* Footer */

.ui.table tfoot {
  box-shadow: none;
}

.ui.table tfoot th {
  cursor: auto;
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  background: #F9FAFB;
  text-align: inherit;
  color: rgba(0, 0, 0, 0.87);
  padding: 0.71428571em 0.71428571em;
  vertical-align: middle;
  font-style: normal;
  font-weight: normal;
  text-transform: none;
}

.ui.table tfoot tr > th:first-child {
  border-left: none;
}

.ui.table tfoot tr:first-child > th:first-child {
  border-radius: 0em 0em 0em 0.28571429rem;
}

.ui.table tfoot tr:first-child > th:last-child {
  border-radius: 0em 0em 0.28571429rem 0em;
}

.ui.table tfoot tr:first-child > th:only-child {
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}

/* Table Row */

.ui.table tr td {
  border-top: 1px solid rgba(34, 36, 38, 0.1);
}

.ui.table tr:first-child td {
  border-top: none;
}

/* Table Cells */

.ui.table td {
  padding: 0.71428571em 0.71428571em;
  text-align: inherit;
}

/* Icons */

.ui.table > .icon {
  vertical-align: baseline;
}

.ui.table > .icon:only-child {
  margin: 0em;
}

/* Table Segment */

.ui.table.segment {
  padding: 0em;
}

.ui.table.segment:after {
  display: none;
}

.ui.table.segment.stacked:after {
  display: block;
}

/* Responsive */

@media only screen and (max-width: 767px) {
  .ui.table:not(.unstackable) {
    width: 100%;
  }

  .ui.table:not(.unstackable) tbody,
  .ui.table:not(.unstackable) tr,
  .ui.table:not(.unstackable) tr > th,
  .ui.table:not(.unstackable) tr > td {
    width: auto !important;
    display: block !important;
  }

  .ui.table:not(.unstackable) {
    padding: 0em;
  }

  .ui.table:not(.unstackable) thead {
    display: block;
  }

  .ui.table:not(.unstackable) tfoot {
    display: block;
  }

  .ui.table:not(.unstackable) tr {
    padding-top: 1em;
    padding-bottom: 1em;
    box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;
  }

  .ui.table:not(.unstackable) tr > th,
  .ui.table:not(.unstackable) tr > td {
    background: none;
    border: none !important;
    padding: 0.25em 0.75em !important;
    box-shadow: none !important;
  }

  .ui.table:not(.unstackable) th:first-child,
  .ui.table:not(.unstackable) td:first-child {
    font-weight: bold;
  }

  /* Definition Table */

  .ui.definition.table:not(.unstackable) thead th:first-child {
    box-shadow: none !important;
  }
}

/*******************************
            Coupling
*******************************/

/* UI Image */

.ui.table th .image,
.ui.table th .image img,
.ui.table td .image,
.ui.table td .image img {
  max-width: none;
}

/*******************************
             Types
*******************************/

/*--------------
    Complex
---------------*/

.ui.structured.table {
  border-collapse: collapse;
}

.ui.structured.table thead th {
  border-left: none;
  border-right: none;
}

.ui.structured.sortable.table thead th {
  border-left: 1px solid rgba(34, 36, 38, 0.15);
  border-right: 1px solid rgba(34, 36, 38, 0.15);
}

.ui.structured.basic.table th {
  border-left: none;
  border-right: none;
}

.ui.structured.celled.table tr th,
.ui.structured.celled.table tr td {
  border-left: 1px solid rgba(34, 36, 38, 0.1);
  border-right: 1px solid rgba(34, 36, 38, 0.1);
}

/*--------------
   Definition
---------------*/

.ui.definition.table thead:not(.full-width) th:first-child {
  pointer-events: none;
  background: transparent;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.4);
  box-shadow: -1px -1px 0px 1px #FFFFFF;
}

.ui.definition.table tfoot:not(.full-width) th:first-child {
  pointer-events: none;
  background: transparent;
  font-weight: rgba(0, 0, 0, 0.4);
  color: normal;
  box-shadow: 1px 1px 0px 1px #FFFFFF;
}

/* Remove Border */

.ui.celled.definition.table thead:not(.full-width) th:first-child {
  box-shadow: 0px -1px 0px 1px #FFFFFF;
}

.ui.celled.definition.table tfoot:not(.full-width) th:first-child {
  box-shadow: 0px 1px 0px 1px #FFFFFF;
}

/* Highlight Defining Column */

.ui.definition.table tr td:first-child {
  background: rgba(0, 0, 0, 0.03);
  font-weight: bold;
  color: rgba(0, 0, 0, 0.95);
}

/* Fix 2nd Column */

.ui.definition.table thead:not(.full-width) th:nth-child(2) {
  border-left: 1px solid rgba(34, 36, 38, 0.15);
}

.ui.definition.table tfoot:not(.full-width) th:nth-child(2) {
  border-left: 1px solid rgba(34, 36, 38, 0.15);
}

.ui.definition.table td:nth-child(2) {
  border-left: 1px solid rgba(34, 36, 38, 0.15);
}

/*******************************
             States
*******************************/

/*--------------
    Positive
---------------*/

.ui.table tr.positive,
.ui.table td.positive {
  box-shadow: 0px 0px 0px #A3C293 inset;
}

.ui.table tr.positive,
.ui.table td.positive {
  background: #FCFFF5 !important;
  color: #2C662D !important;
}

/*--------------
     Negative
---------------*/

.ui.table tr.negative,
.ui.table td.negative {
  box-shadow: 0px 0px 0px #E0B4B4 inset;
}

.ui.table tr.negative,
.ui.table td.negative {
  background: #FFF6F6 !important;
  color: #9F3A38 !important;
}

/*--------------
      Error
---------------*/

.ui.table tr.error,
.ui.table td.error {
  box-shadow: 0px 0px 0px #E0B4B4 inset;
}

.ui.table tr.error,
.ui.table td.error {
  background: #FFF6F6 !important;
  color: #9F3A38 !important;
}

/*--------------
     Warning
---------------*/

.ui.table tr.warning,
.ui.table td.warning {
  box-shadow: 0px 0px 0px #C9BA9B inset;
}

.ui.table tr.warning,
.ui.table td.warning {
  background: #FFFAF3 !important;
  color: #573A08 !important;
}

/*--------------
     Active
---------------*/

.ui.table tr.active,
.ui.table td.active {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.87) inset;
}

.ui.table tr.active,
.ui.table td.active {
  background: #E0E0E0 !important;
  color: rgba(0, 0, 0, 0.87) !important;
}

/*--------------
     Disabled
---------------*/

.ui.table tr.disabled td,
.ui.table tr td.disabled,
.ui.table tr.disabled:hover,
.ui.table tr:hover td.disabled {
  pointer-events: none;
  color: rgba(40, 40, 40, 0.3);
}

/*******************************
          Variations
*******************************/

/*--------------
    Stackable
---------------*/

@media only screen and (max-width: 991px) {
  .ui[class*="tablet stackable"].table,
  .ui[class*="tablet stackable"].table tbody,
  .ui[class*="tablet stackable"].table tr,
  .ui[class*="tablet stackable"].table tr > th,
  .ui[class*="tablet stackable"].table tr > td {
    width: 100% !important;
    display: block !important;
  }

  .ui[class*="tablet stackable"].table {
    padding: 0em;
  }

  .ui[class*="tablet stackable"].table thead {
    display: block;
  }

  .ui[class*="tablet stackable"].table tfoot {
    display: block;
  }

  .ui[class*="tablet stackable"].table tr {
    padding-top: 1em;
    padding-bottom: 1em;
    box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;
  }

  .ui[class*="tablet stackable"].table tr > th,
  .ui[class*="tablet stackable"].table tr > td {
    background: none;
    border: none !important;
    padding: 0.25em 0.75em;
    box-shadow: none !important;
  }

  /* Definition Table */

  .ui.definition[class*="tablet stackable"].table thead th:first-child {
    box-shadow: none !important;
  }
}

/*--------------
 Text Alignment
---------------*/

.ui.table[class*="left aligned"],
.ui.table [class*="left aligned"] {
  text-align: left;
}

.ui.table[class*="center aligned"],
.ui.table [class*="center aligned"] {
  text-align: center;
}

.ui.table[class*="right aligned"],
.ui.table [class*="right aligned"] {
  text-align: right;
}

/*------------------
 Vertical Alignment
------------------*/

.ui.table[class*="top aligned"],
.ui.table [class*="top aligned"] {
  vertical-align: top;
}

.ui.table[class*="middle aligned"],
.ui.table [class*="middle aligned"] {
  vertical-align: middle;
}

.ui.table[class*="bottom aligned"],
.ui.table [class*="bottom aligned"] {
  vertical-align: bottom;
}

/*--------------
    Collapsing
---------------*/

.ui.table th.collapsing,
.ui.table td.collapsing {
  width: 1px;
  white-space: nowrap;
}

/*--------------
     Fixed
---------------*/

.ui.fixed.table {
  table-layout: fixed;
}

.ui.fixed.table th,
.ui.fixed.table td {
  overflow: hidden;
  text-overflow: ellipsis;
}

/*--------------
   Selectable
---------------*/

.ui.selectable.table tbody tr:hover,
.ui.table tbody tr td.selectable:hover {
  background: rgba(0, 0, 0, 0.05) !important;
  color: rgba(0, 0, 0, 0.95) !important;
}

.ui.selectable.inverted.table tbody tr:hover,
.ui.inverted.table tbody tr td.selectable:hover {
  background: rgba(255, 255, 255, 0.08) !important;
  color: #ffffff !important;
}

/* Selectable Cell Link */

.ui.table tbody tr td.selectable {
  padding: 0em;
}

.ui.table tbody tr td.selectable > a:not(.ui) {
  display: block;
  color: inherit;
  padding: 0.71428571em 0.71428571em;
}

/* Other States */

.ui.selectable.table tr.error:hover,
.ui.table tr td.selectable.error:hover,
.ui.selectable.table tr:hover td.error {
  background: #ffe7e7 !important;
  color: #943634 !important;
}

.ui.selectable.table tr.warning:hover,
.ui.table tr td.selectable.warning:hover,
.ui.selectable.table tr:hover td.warning {
  background: #fff4e4 !important;
  color: #493107 !important;
}

.ui.selectable.table tr.active:hover,
.ui.table tr td.selectable.active:hover,
.ui.selectable.table tr:hover td.active {
  background: #E0E0E0 !important;
  color: rgba(0, 0, 0, 0.87) !important;
}

.ui.selectable.table tr.positive:hover,
.ui.table tr td.selectable.positive:hover,
.ui.selectable.table tr:hover td.positive {
  background: #f7ffe6 !important;
  color: #275b28 !important;
}

.ui.selectable.table tr.negative:hover,
.ui.table tr td.selectable.negative:hover,
.ui.selectable.table tr:hover td.negative {
  background: #ffe7e7 !important;
  color: #943634 !important;
}

/*-------------------
      Attached
--------------------*/

/* Middle */

.ui.attached.table {
  top: 0px;
  bottom: 0px;
  border-radius: 0px;
  margin: 0em -1px;
  width: calc(100% +  2px );
  max-width: calc(100% +  2px );
  box-shadow: none;
  border: 1px solid #D4D4D5;
}

.ui.attached + .ui.attached.table:not(.top) {
  border-top: none;
}

/* Top */

.ui[class*="top attached"].table {
  bottom: 0px;
  margin-bottom: 0em;
  top: 0px;
  margin-top: 1em;
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

.ui.table[class*="top attached"]:first-child {
  margin-top: 0em;
}

/* Bottom */

.ui[class*="bottom attached"].table {
  bottom: 0px;
  margin-top: 0em;
  top: 0px;
  margin-bottom: 1em;
  box-shadow: none, none;
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}

.ui[class*="bottom attached"].table:last-child {
  margin-bottom: 0em;
}

/*--------------
     Striped
---------------*/

/* Table Striping */

.ui.striped.table > tr:nth-child(2n),
.ui.striped.table tbody tr:nth-child(2n) {
  background-color: rgba(0, 0, 50, 0.02);
}

/* Stripes */

.ui.inverted.striped.table > tr:nth-child(2n),
.ui.inverted.striped.table tbody tr:nth-child(2n) {
  background-color: rgba(255, 255, 255, 0.05);
}

/*--------------
   Single Line
---------------*/

.ui.table[class*="single line"],
.ui.table [class*="single line"] {
  white-space: nowrap;
}

.ui.table[class*="single line"],
.ui.table [class*="single line"] {
  white-space: nowrap;
}

/*-------------------
       Colors
--------------------*/

/* Red */

.ui.red.table {
  border-top: 0.2em solid #DB2828;
}

.ui.inverted.red.table {
  background-color: #DB2828 !important;
  color: #FFFFFF !important;
}

/* Orange */

.ui.orange.table {
  border-top: 0.2em solid #F2711C;
}

.ui.inverted.orange.table {
  background-color: #F2711C !important;
  color: #FFFFFF !important;
}

/* Yellow */

.ui.yellow.table {
  border-top: 0.2em solid #FBBD08;
}

.ui.inverted.yellow.table {
  background-color: #FBBD08 !important;
  color: #FFFFFF !important;
}

/* Olive */

.ui.olive.table {
  border-top: 0.2em solid #B5CC18;
}

.ui.inverted.olive.table {
  background-color: #B5CC18 !important;
  color: #FFFFFF !important;
}

/* Green */

.ui.green.table {
  border-top: 0.2em solid #21BA45;
}

.ui.inverted.green.table {
  background-color: #21BA45 !important;
  color: #FFFFFF !important;
}

/* Teal */

.ui.teal.table {
  border-top: 0.2em solid #00B5AD;
}

.ui.inverted.teal.table {
  background-color: #00B5AD !important;
  color: #FFFFFF !important;
}

/* Blue */

.ui.blue.table {
  border-top: 0.2em solid #2185D0;
}

.ui.inverted.blue.table {
  background-color: #2185D0 !important;
  color: #FFFFFF !important;
}

/* Violet */

.ui.violet.table {
  border-top: 0.2em solid #6435C9;
}

.ui.inverted.violet.table {
  background-color: #6435C9 !important;
  color: #FFFFFF !important;
}

/* Purple */

.ui.purple.table {
  border-top: 0.2em solid #A333C8;
}

.ui.inverted.purple.table {
  background-color: #A333C8 !important;
  color: #FFFFFF !important;
}

/* Pink */

.ui.pink.table {
  border-top: 0.2em solid #E03997;
}

.ui.inverted.pink.table {
  background-color: #E03997 !important;
  color: #FFFFFF !important;
}

/* Brown */

.ui.brown.table {
  border-top: 0.2em solid #A5673F;
}

.ui.inverted.brown.table {
  background-color: #A5673F !important;
  color: #FFFFFF !important;
}

/* Grey */

.ui.grey.table {
  border-top: 0.2em solid #767676;
}

.ui.inverted.grey.table {
  background-color: #767676 !important;
  color: #FFFFFF !important;
}

/* Black */

.ui.black.table {
  border-top: 0.2em solid #1B1C1D;
}

.ui.inverted.black.table {
  background-color: #1B1C1D !important;
  color: #FFFFFF !important;
}

/*--------------
  Column Count
---------------*/

/* Grid Based */

.ui.one.column.table td {
  width: 100%;
}

.ui.two.column.table td {
  width: 50%;
}

.ui.three.column.table td {
  width: 33.33333333%;
}

.ui.four.column.table td {
  width: 25%;
}

.ui.five.column.table td {
  width: 20%;
}

.ui.six.column.table td {
  width: 16.66666667%;
}

.ui.seven.column.table td {
  width: 14.28571429%;
}

.ui.eight.column.table td {
  width: 12.5%;
}

.ui.nine.column.table td {
  width: 11.11111111%;
}

.ui.ten.column.table td {
  width: 10%;
}

.ui.eleven.column.table td {
  width: 9.09090909%;
}

.ui.twelve.column.table td {
  width: 8.33333333%;
}

.ui.thirteen.column.table td {
  width: 7.69230769%;
}

.ui.fourteen.column.table td {
  width: 7.14285714%;
}

.ui.fifteen.column.table td {
  width: 6.66666667%;
}

.ui.sixteen.column.table td {
  width: 6.25%;
}

/* Column Width */

.ui.table th.one.wide,
.ui.table td.one.wide {
  width: 6.25%;
}

.ui.table th.two.wide,
.ui.table td.two.wide {
  width: 12.5%;
}

.ui.table th.three.wide,
.ui.table td.three.wide {
  width: 18.75%;
}

.ui.table th.four.wide,
.ui.table td.four.wide {
  width: 25%;
}

.ui.table th.five.wide,
.ui.table td.five.wide {
  width: 31.25%;
}

.ui.table th.six.wide,
.ui.table td.six.wide {
  width: 37.5%;
}

.ui.table th.seven.wide,
.ui.table td.seven.wide {
  width: 43.75%;
}

.ui.table th.eight.wide,
.ui.table td.eight.wide {
  width: 50%;
}

.ui.table th.nine.wide,
.ui.table td.nine.wide {
  width: 56.25%;
}

.ui.table th.ten.wide,
.ui.table td.ten.wide {
  width: 62.5%;
}

.ui.table th.eleven.wide,
.ui.table td.eleven.wide {
  width: 68.75%;
}

.ui.table th.twelve.wide,
.ui.table td.twelve.wide {
  width: 75%;
}

.ui.table th.thirteen.wide,
.ui.table td.thirteen.wide {
  width: 81.25%;
}

.ui.table th.fourteen.wide,
.ui.table td.fourteen.wide {
  width: 87.5%;
}

.ui.table th.fifteen.wide,
.ui.table td.fifteen.wide {
  width: 93.75%;
}

.ui.table th.sixteen.wide,
.ui.table td.sixteen.wide {
  width: 100%;
}

/*--------------
    Sortable
---------------*/

.ui.sortable.table thead th {
  cursor: pointer;
  white-space: nowrap;
  border-left: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
}

.ui.sortable.table thead th:first-child {
  border-left: none;
}

.ui.sortable.table thead th.sorted,
.ui.sortable.table thead th.sorted:hover {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.ui.sortable.table thead th:after {
  display: none;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  content: '';
  height: 1em;
  width: auto;
  opacity: 0.8;
  margin: 0em 0em 0em 0.5em;
  font-family: 'Icons';
}

.ui.sortable.table thead th.ascending:after {
  content: '\f0d8';
}

.ui.sortable.table thead th.descending:after {
  content: '\f0d7';
}

/* Hover */

.ui.sortable.table th.disabled:hover {
  cursor: auto;
  color: rgba(40, 40, 40, 0.3);
}

.ui.sortable.table thead th:hover {
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.8);
}

/* Sorted */

.ui.sortable.table thead th.sorted {
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
}

.ui.sortable.table thead th.sorted:after {
  display: inline-block;
}

/* Sorted Hover */

.ui.sortable.table thead th.sorted:hover {
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
}

/* Inverted */

.ui.inverted.sortable.table thead th.sorted {
  background: rgba(255, 255, 255, 0.15) -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  background: rgba(255, 255, 255, 0.15) linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  color: #ffffff;
}

.ui.inverted.sortable.table thead th:hover {
  background: rgba(255, 255, 255, 0.08) -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  background: rgba(255, 255, 255, 0.08) linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  color: #ffffff;
}

.ui.inverted.sortable.table thead th {
  border-left-color: transparent;
  border-right-color: transparent;
}

/*--------------
    Inverted
---------------*/

/* Text Color */

.ui.inverted.table {
  background: #333333;
  color: rgba(255, 255, 255, 0.9);
  border: none;
}

.ui.inverted.table th {
  background-color: rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 255, 255, 0.1) !important;
  color: rgba(255, 255, 255, 0.9);
}

.ui.inverted.table tr td {
  border-color: rgba(255, 255, 255, 0.1) !important;
}

.ui.inverted.table tr.disabled td,
.ui.inverted.table tr td.disabled,
.ui.inverted.table tr.disabled:hover td,
.ui.inverted.table tr:hover td.disabled {
  pointer-events: none;
  color: rgba(225, 225, 225, 0.3);
}

/* Definition */

.ui.inverted.definition.table tfoot:not(.full-width) th:first-child,
.ui.inverted.definition.table thead:not(.full-width) th:first-child {
  background: #FFFFFF;
}

.ui.inverted.definition.table tr td:first-child {
  background: rgba(255, 255, 255, 0.02);
  color: #ffffff;
}

/*--------------
   Collapsing
---------------*/

.ui.collapsing.table {
  width: auto;
}

/*--------------
      Basic
---------------*/

.ui.basic.table {
  background: transparent;
  border: 1px solid rgba(34, 36, 38, 0.15);
  box-shadow: none;
}

.ui.basic.table thead,
.ui.basic.table tfoot {
  box-shadow: none;
}

.ui.basic.table th {
  background: transparent;
  border-left: none;
}

.ui.basic.table tbody tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.ui.basic.table td {
  background: transparent;
}

.ui.basic.striped.table tbody tr:nth-child(2n) {
  background-color: rgba(0, 0, 0, 0.05) !important;
}

/* Very Basic */

.ui[class*="very basic"].table {
  border: none;
}

.ui[class*="very basic"].table:not(.sortable):not(.striped) th,
.ui[class*="very basic"].table:not(.sortable):not(.striped) td {
  padding: '';
}

.ui[class*="very basic"].table:not(.sortable):not(.striped) th:first-child,
.ui[class*="very basic"].table:not(.sortable):not(.striped) td:first-child {
  padding-left: 0em;
}

.ui[class*="very basic"].table:not(.sortable):not(.striped) th:last-child,
.ui[class*="very basic"].table:not(.sortable):not(.striped) td:last-child {
  padding-right: 0em;
}

.ui[class*="very basic"].table:not(.sortable):not(.striped) thead tr:first-child th {
  padding-top: 0em;
}

/*--------------
     Celled
---------------*/

.ui.celled.table tr th,
.ui.celled.table tr td {
  border-left: 1px solid rgba(34, 36, 38, 0.1);
}

.ui.celled.table tr th:first-child,
.ui.celled.table tr td:first-child {
  border-left: none;
}

/*--------------
     Padded
---------------*/

.ui.padded.table th {
  padding-left: 1em;
  padding-right: 1em;
}

.ui.padded.table th,
.ui.padded.table td {
  padding: 1em 1em;
}

/* Very */

.ui[class*="very padded"].table th {
  padding-left: 1.5em;
  padding-right: 1.5em;
}

.ui[class*="very padded"].table td {
  padding: 1.5em 1.5em;
}

/*--------------
     Compact
---------------*/

.ui.compact.table th {
  padding-left: 0.7em;
  padding-right: 0.7em;
}

.ui.compact.table td {
  padding: 0.5em 0.7em;
}

/* Very */

.ui[class*="very compact"].table th {
  padding-left: 0.6em;
  padding-right: 0.6em;
}

.ui[class*="very compact"].table td {
  padding: 0.4em 0.6em;
}

/*--------------
      Sizes
---------------*/

/* Small */

.ui.small.table {
  font-size: 0.9em;
}

/* Standard */

.ui.table {
  font-size: 1em;
}

/* Large */

.ui.large.table {
  font-size: 1.1em;
}

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Ad
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
         Advertisement
*******************************/

.ui.ad {
  display: block;
  overflow: hidden;
  margin: 1em 0em;
}

.ui.ad:first-child {
  margin: 0em;
}

.ui.ad:last-child {
  margin: 0em;
}

.ui.ad iframe {
  margin: 0em;
  padding: 0em;
  border: none;
  overflow: hidden;
}

/*--------------
     Common
---------------*/

/* Leaderboard */

.ui.leaderboard.ad {
  width: 728px;
  height: 90px;
}

/* Medium Rectangle */

.ui[class*="medium rectangle"].ad {
  width: 300px;
  height: 250px;
}

/* Large Rectangle */

.ui[class*="large rectangle"].ad {
  width: 336px;
  height: 280px;
}

/* Half Page */

.ui[class*="half page"].ad {
  width: 300px;
  height: 600px;
}

/*--------------
     Square
---------------*/

/* Square */

.ui.square.ad {
  width: 250px;
  height: 250px;
}

/* Small Square */

.ui[class*="small square"].ad {
  width: 200px;
  height: 200px;
}

/*--------------
    Rectangle
---------------*/

/* Small Rectangle */

.ui[class*="small rectangle"].ad {
  width: 180px;
  height: 150px;
}

/* Vertical Rectangle */

.ui[class*="vertical rectangle"].ad {
  width: 240px;
  height: 400px;
}

/*--------------
     Button
---------------*/

.ui.button.ad {
  width: 120px;
  height: 90px;
}

.ui[class*="square button"].ad {
  width: 125px;
  height: 125px;
}

.ui[class*="small button"].ad {
  width: 120px;
  height: 60px;
}

/*--------------
   Skyscrapers
---------------*/

/* Skyscraper */

.ui.skyscraper.ad {
  width: 120px;
  height: 600px;
}

/* Wide Skyscraper */

.ui[class*="wide skyscraper"].ad {
  width: 160px;
}

/*--------------
     Banners
---------------*/

/* Banner */

.ui.banner.ad {
  width: 468px;
  height: 60px;
}

/* Vertical Banner */

.ui[class*="vertical banner"].ad {
  width: 120px;
  height: 240px;
}

/* Top Banner */

.ui[class*="top banner"].ad {
  width: 930px;
  height: 180px;
}

/* Half Banner */

.ui[class*="half banner"].ad {
  width: 234px;
  height: 60px;
}

/*--------------
    Boards
---------------*/

/* Leaderboard */

.ui[class*="large leaderboard"].ad {
  width: 970px;
  height: 90px;
}

/* Billboard */

.ui.billboard.ad {
  width: 970px;
  height: 250px;
}

/*--------------
    Panorama
---------------*/

/* Panorama */

.ui.panorama.ad {
  width: 980px;
  height: 120px;
}

/*--------------
     Netboard
---------------*/

/* Netboard */

.ui.netboard.ad {
  width: 580px;
  height: 400px;
}

/*--------------
     Mobile
---------------*/

/* Large Mobile Banner */

.ui[class*="large mobile banner"].ad {
  width: 320px;
  height: 100px;
}

/* Mobile Leaderboard */

.ui[class*="mobile leaderboard"].ad {
  width: 320px;
  height: 50px;
}

/*******************************
             Types
*******************************/

/* Mobile Sizes */

.ui.mobile.ad {
  display: none;
}

@media only screen and (max-width: 767px) {
  .ui.mobile.ad {
    display: block;
  }
}

/*******************************
           Variations
*******************************/

.ui.centered.ad {
  margin-left: auto;
  margin-right: auto;
}

.ui.test.ad {
  position: relative;
  background: #545454;
}

.ui.test.ad:after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  content: 'Ad';
  color: #FFFFFF;
  font-size: 1em;
  font-weight: bold;
}

.ui.mobile.test.ad:after {
  font-size: 0.85714286em;
}

.ui.test.ad[data-text]:after {
  content: attr(data-text);
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
    User Variable Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Item
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Standard
*******************************/

/*--------------
      Card
---------------*/

.ui.cards > .card,
.ui.card {
  max-width: 100%;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 290px;
  min-height: 0px;
  background: #FFFFFF;
  padding: 0em;
  border: none;
  border-radius: 0.28571429rem;
  box-shadow: 0px 1px 3px 0px #D4D4D5, 0px 0px 0px 1px #D4D4D5;
  -webkit-transition: box-shadow 0.1s ease, -webkit-transform 0.1s ease;
  transition: box-shadow 0.1s ease, -webkit-transform 0.1s ease;
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  transition: box-shadow 0.1s ease, transform 0.1s ease, -webkit-transform 0.1s ease;
  z-index: '';
}

.ui.card {
  margin: 1em 0em;
}

.ui.cards > .card a,
.ui.card a {
  cursor: pointer;
}

.ui.card:first-child {
  margin-top: 0em;
}

.ui.card:last-child {
  margin-bottom: 0em;
}

/*--------------
      Cards
---------------*/

.ui.cards {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: -0.875em -0.5em;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.ui.cards > .card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 0.875em 0.5em;
  float: none;
}

/* Clearing */

.ui.cards:after,
.ui.card:after {
  display: block;
  content: ' ';
  height: 0px;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}

/* Consecutive Card Groups Preserve Row Spacing */

.ui.cards ~ .ui.cards {
  margin-top: 0.875em;
}

/*--------------
  Rounded Edges
---------------*/

.ui.cards > .card > :first-child,
.ui.card > :first-child {
  border-radius: 0.28571429rem 0.28571429rem 0em 0em !important;
  border-top: none !important;
}

.ui.cards > .card > :last-child,
.ui.card > :last-child {
  border-radius: 0em 0em 0.28571429rem 0.28571429rem !important;
}

.ui.cards > .card > :only-child,
.ui.card > :only-child {
  border-radius: 0.28571429rem !important;
}

/*--------------
     Images
---------------*/

.ui.cards > .card > .image,
.ui.card > .image {
  position: relative;
  display: block;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding: 0em;
  background: rgba(0, 0, 0, 0.05);
}

.ui.cards > .card > .image > img,
.ui.card > .image > img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: inherit;
}

.ui.cards > .card > .image:not(.ui) > img,
.ui.card > .image:not(.ui) > img {
  border: none;
}

/*--------------
     Content
---------------*/

.ui.cards > .card > .content,
.ui.card > .content {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border: none;
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  background: none;
  margin: 0em;
  padding: 1em 1em;
  box-shadow: none;
  font-size: 1em;
  border-radius: 0em;
}

.ui.cards > .card > .content:after,
.ui.card > .content:after {
  display: block;
  content: ' ';
  height: 0px;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}

.ui.cards > .card > .content > .header,
.ui.card > .content > .header {
  display: block;
  margin: '';
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  color: rgba(0, 0, 0, 0.85);
}

/* Default Header Size */

.ui.cards > .card > .content > .header:not(.ui),
.ui.card > .content > .header:not(.ui) {
  font-weight: bold;
  font-size: 1.28571429em;
  margin-top: -0.21425em;
  line-height: 1.2857em;
}

.ui.cards > .card > .content > .meta + .description,
.ui.cards > .card > .content > .header + .description,
.ui.card > .content > .meta + .description,
.ui.card > .content > .header + .description {
  margin-top: 0.5em;
}

/*----------------
 Floated Content
-----------------*/

.ui.cards > .card [class*="left floated"],
.ui.card [class*="left floated"] {
  float: left;
}

.ui.cards > .card [class*="right floated"],
.ui.card [class*="right floated"] {
  float: right;
}

/*--------------
     Aligned
---------------*/

.ui.cards > .card [class*="left aligned"],
.ui.card [class*="left aligned"] {
  text-align: left;
}

.ui.cards > .card [class*="center aligned"],
.ui.card [class*="center aligned"] {
  text-align: center;
}

.ui.cards > .card [class*="right aligned"],
.ui.card [class*="right aligned"] {
  text-align: right;
}

/*--------------
  Content Image
---------------*/

.ui.cards > .card .content img,
.ui.card .content img {
  display: inline-block;
  vertical-align: middle;
  width: '';
}

.ui.cards > .card img.avatar,
.ui.cards > .card .avatar img,
.ui.card img.avatar,
.ui.card .avatar img {
  width: 2em;
  height: 2em;
  border-radius: 500rem;
}

/*--------------
   Description
---------------*/

.ui.cards > .card > .content > .description,
.ui.card > .content > .description {
  clear: both;
  color: rgba(0, 0, 0, 0.68);
}

/*--------------
    Paragraph
---------------*/

.ui.cards > .card > .content p,
.ui.card > .content p {
  margin: 0em 0em 0.5em;
}

.ui.cards > .card > .content p:last-child,
.ui.card > .content p:last-child {
  margin-bottom: 0em;
}

/*--------------
      Meta
---------------*/

.ui.cards > .card .meta,
.ui.card .meta {
  font-size: 1em;
  color: rgba(0, 0, 0, 0.4);
}

.ui.cards > .card .meta *,
.ui.card .meta * {
  margin-right: 0.3em;
}

.ui.cards > .card .meta :last-child,
.ui.card .meta :last-child {
  margin-right: 0em;
}

.ui.cards > .card .meta [class*="right floated"],
.ui.card .meta [class*="right floated"] {
  margin-right: 0em;
  margin-left: 0.3em;
}

/*--------------
      Links
---------------*/

/* Generic */

.ui.cards > .card > .content a:not(.ui),
.ui.card > .content a:not(.ui) {
  color: '';
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}

.ui.cards > .card > .content a:not(.ui):hover,
.ui.card > .content a:not(.ui):hover {
  color: '';
}

/* Header */

.ui.cards > .card > .content > a.header,
.ui.card > .content > a.header {
  color: rgba(0, 0, 0, 0.85);
}

.ui.cards > .card > .content > a.header:hover,
.ui.card > .content > a.header:hover {
  color: #1e70bf;
}

/* Meta */

.ui.cards > .card .meta > a:not(.ui),
.ui.card .meta > a:not(.ui) {
  color: rgba(0, 0, 0, 0.4);
}

.ui.cards > .card .meta > a:not(.ui):hover,
.ui.card .meta > a:not(.ui):hover {
  color: rgba(0, 0, 0, 0.87);
}

/*--------------
     Buttons
---------------*/

.ui.cards > .card > .buttons,
.ui.card > .buttons,
.ui.cards > .card > .button,
.ui.card > .button {
  margin: 0px -1px;
  width: calc(100% +  2px );
}

/*--------------
      Dimmer
---------------*/

.ui.cards > .card .dimmer,
.ui.card .dimmer {
  background-color: '';
  z-index: 10;
}

/*--------------
     Labels
---------------*/

/*-----Star----- */

/* Icon */

.ui.cards > .card > .content .star.icon,
.ui.card > .content .star.icon {
  cursor: pointer;
  opacity: 0.75;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}

.ui.cards > .card > .content .star.icon:hover,
.ui.card > .content .star.icon:hover {
  opacity: 1;
  color: #FFB70A;
}

.ui.cards > .card > .content .active.star.icon,
.ui.card > .content .active.star.icon {
  color: #FFE623;
}

/*-----Like----- */

/* Icon */

.ui.cards > .card > .content .like.icon,
.ui.card > .content .like.icon {
  cursor: pointer;
  opacity: 0.75;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}

.ui.cards > .card > .content .like.icon:hover,
.ui.card > .content .like.icon:hover {
  opacity: 1;
  color: #FF2733;
}

.ui.cards > .card > .content .active.like.icon,
.ui.card > .content .active.like.icon {
  color: #FF2733;
}

/*----------------
  Extra Content
-----------------*/

.ui.cards > .card > .extra,
.ui.card > .extra {
  max-width: 100%;
  min-height: 0em !important;
  -webkit-box-flex: 0;
  -webkit-flex-grow: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05) !important;
  position: static;
  background: none;
  width: auto;
  margin: 0em 0em;
  padding: 0.75em 1em;
  top: 0em;
  left: 0em;
  color: rgba(0, 0, 0, 0.4);
  box-shadow: none;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}

.ui.cards > .card > .extra a:not(.ui),
.ui.card > .extra a:not(.ui) {
  color: rgba(0, 0, 0, 0.4);
}

.ui.cards > .card > .extra a:not(.ui):hover,
.ui.card > .extra a:not(.ui):hover {
  color: #1e70bf;
}

/*******************************
           Variations
*******************************/

/*-------------------
       Centered
--------------------*/

.ui.centered.cards {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.ui.centered.card {
  margin-left: auto;
  margin-right: auto;
}

/*-------------------
        Fluid
--------------------*/

.ui.fluid.card {
  width: 100%;
  max-width: 9999px;
}

/*-------------------
        Link
--------------------*/

.ui.cards a.card,
.ui.link.cards .card,
a.ui.card,
.ui.link.card {
  -webkit-transform: none;
  transform: none;
}

.ui.cards a.card:hover,
.ui.link.cards .card:hover,
a.ui.card:hover,
.ui.link.card:hover {
  cursor: pointer;
  z-index: 5;
  background: #FFFFFF;
  border: none;
  box-shadow: 0px 1px 3px 0px #BCBDBD, 0px 0px 0px 1px #D4D4D5;
  -webkit-transform: translateY(-3px);
  transform: translateY(-3px);
}

/*-------------------
       Colors
--------------------*/

/* Red */

.ui.red.cards > .card,
.ui.cards > .red.card,
.ui.red.card {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #DB2828, 0px 1px 3px 0px #D4D4D5;
}

.ui.red.cards > .card:hover,
.ui.cards > .red.card:hover,
.ui.red.card:hover {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #d01919, 0px 1px 3px 0px #BCBDBD;
}

/* Orange */

.ui.orange.cards > .card,
.ui.cards > .orange.card,
.ui.orange.card {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #F2711C, 0px 1px 3px 0px #D4D4D5;
}

.ui.orange.cards > .card:hover,
.ui.cards > .orange.card:hover,
.ui.orange.card:hover {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #f26202, 0px 1px 3px 0px #BCBDBD;
}

/* Yellow */

.ui.yellow.cards > .card,
.ui.cards > .yellow.card,
.ui.yellow.card {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #FBBD08, 0px 1px 3px 0px #D4D4D5;
}

.ui.yellow.cards > .card:hover,
.ui.cards > .yellow.card:hover,
.ui.yellow.card:hover {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #eaae00, 0px 1px 3px 0px #BCBDBD;
}

/* Olive */

.ui.olive.cards > .card,
.ui.cards > .olive.card,
.ui.olive.card {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #B5CC18, 0px 1px 3px 0px #D4D4D5;
}

.ui.olive.cards > .card:hover,
.ui.cards > .olive.card:hover,
.ui.olive.card:hover {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #a7bd0d, 0px 1px 3px 0px #BCBDBD;
}

/* Green */

.ui.green.cards > .card,
.ui.cards > .green.card,
.ui.green.card {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #21BA45, 0px 1px 3px 0px #D4D4D5;
}

.ui.green.cards > .card:hover,
.ui.cards > .green.card:hover,
.ui.green.card:hover {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #16ab39, 0px 1px 3px 0px #BCBDBD;
}

/* Teal */

.ui.teal.cards > .card,
.ui.cards > .teal.card,
.ui.teal.card {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #00B5AD, 0px 1px 3px 0px #D4D4D5;
}

.ui.teal.cards > .card:hover,
.ui.cards > .teal.card:hover,
.ui.teal.card:hover {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #009c95, 0px 1px 3px 0px #BCBDBD;
}

/* Blue */

.ui.blue.cards > .card,
.ui.cards > .blue.card,
.ui.blue.card {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #2185D0, 0px 1px 3px 0px #D4D4D5;
}

.ui.blue.cards > .card:hover,
.ui.cards > .blue.card:hover,
.ui.blue.card:hover {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #1678c2, 0px 1px 3px 0px #BCBDBD;
}

/* Violet */

.ui.violet.cards > .card,
.ui.cards > .violet.card,
.ui.violet.card {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #6435C9, 0px 1px 3px 0px #D4D4D5;
}

.ui.violet.cards > .card:hover,
.ui.cards > .violet.card:hover,
.ui.violet.card:hover {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #5829bb, 0px 1px 3px 0px #BCBDBD;
}

/* Purple */

.ui.purple.cards > .card,
.ui.cards > .purple.card,
.ui.purple.card {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #A333C8, 0px 1px 3px 0px #D4D4D5;
}

.ui.purple.cards > .card:hover,
.ui.cards > .purple.card:hover,
.ui.purple.card:hover {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #9627ba, 0px 1px 3px 0px #BCBDBD;
}

/* Pink */

.ui.pink.cards > .card,
.ui.cards > .pink.card,
.ui.pink.card {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #E03997, 0px 1px 3px 0px #D4D4D5;
}

.ui.pink.cards > .card:hover,
.ui.cards > .pink.card:hover,
.ui.pink.card:hover {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #e61a8d, 0px 1px 3px 0px #BCBDBD;
}

/* Brown */

.ui.brown.cards > .card,
.ui.cards > .brown.card,
.ui.brown.card {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #A5673F, 0px 1px 3px 0px #D4D4D5;
}

.ui.brown.cards > .card:hover,
.ui.cards > .brown.card:hover,
.ui.brown.card:hover {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #975b33, 0px 1px 3px 0px #BCBDBD;
}

/* Grey */

.ui.grey.cards > .card,
.ui.cards > .grey.card,
.ui.grey.card {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #767676, 0px 1px 3px 0px #D4D4D5;
}

.ui.grey.cards > .card:hover,
.ui.cards > .grey.card:hover,
.ui.grey.card:hover {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #838383, 0px 1px 3px 0px #BCBDBD;
}

/* Black */

.ui.black.cards > .card,
.ui.cards > .black.card,
.ui.black.card {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #1B1C1D, 0px 1px 3px 0px #D4D4D5;
}

.ui.black.cards > .card:hover,
.ui.cards > .black.card:hover,
.ui.black.card:hover {
  box-shadow: 0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #27292a, 0px 1px 3px 0px #BCBDBD;
}

/*--------------
   Card Count
---------------*/

.ui.one.cards {
  margin-left: 0em;
  margin-right: 0em;
}

.ui.one.cards > .card {
  width: 100%;
}

.ui.two.cards {
  margin-left: -1em;
  margin-right: -1em;
}

.ui.two.cards > .card {
  width: calc( 50%  -  2em );
  margin-left: 1em;
  margin-right: 1em;
}

.ui.three.cards {
  margin-left: -1em;
  margin-right: -1em;
}

.ui.three.cards > .card {
  width: calc( 33.33333333%  -  2em );
  margin-left: 1em;
  margin-right: 1em;
}

.ui.four.cards {
  margin-left: -0.75em;
  margin-right: -0.75em;
}

.ui.four.cards > .card {
  width: calc( 25%  -  1.5em );
  margin-left: 0.75em;
  margin-right: 0.75em;
}

.ui.five.cards {
  margin-left: -0.75em;
  margin-right: -0.75em;
}

.ui.five.cards > .card {
  width: calc( 20%  -  1.5em );
  margin-left: 0.75em;
  margin-right: 0.75em;
}

.ui.six.cards {
  margin-left: -0.75em;
  margin-right: -0.75em;
}

.ui.six.cards > .card {
  width: calc( 16.66666667%  -  1.5em );
  margin-left: 0.75em;
  margin-right: 0.75em;
}

.ui.seven.cards {
  margin-left: -0.5em;
  margin-right: -0.5em;
}

.ui.seven.cards > .card {
  width: calc( 14.28571429%  -  1em );
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.ui.eight.cards {
  margin-left: -0.5em;
  margin-right: -0.5em;
}

.ui.eight.cards > .card {
  width: calc( 12.5%  -  1em );
  margin-left: 0.5em;
  margin-right: 0.5em;
  font-size: 11px;
}

.ui.nine.cards {
  margin-left: -0.5em;
  margin-right: -0.5em;
}

.ui.nine.cards > .card {
  width: calc( 11.11111111%  -  1em );
  margin-left: 0.5em;
  margin-right: 0.5em;
  font-size: 10px;
}

.ui.ten.cards {
  margin-left: -0.5em;
  margin-right: -0.5em;
}

.ui.ten.cards > .card {
  width: calc( 10%  -  1em );
  margin-left: 0.5em;
  margin-right: 0.5em;
}

/*-------------------
      Doubling
--------------------*/

/* Mobily Only */

@media only screen and (max-width: 767px) {
  .ui.two.doubling.cards {
    margin-left: 0em;
    margin-right: 0em;
  }

  .ui.two.doubling.cards .card {
    width: 100%;
    margin-left: 0em;
    margin-right: 0em;
  }

  .ui.three.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.three.doubling.cards .card {
    width: calc( 50%  -  2em );
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.four.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.four.doubling.cards .card {
    width: calc( 50%  -  2em );
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.five.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.five.doubling.cards .card {
    width: calc( 50%  -  2em );
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.six.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.six.doubling.cards .card {
    width: calc( 50%  -  2em );
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.seven.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.seven.doubling.cards .card {
    width: calc( 33.33333333%  -  2em );
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.eight.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.eight.doubling.cards .card {
    width: calc( 33.33333333%  -  2em );
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.nine.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.nine.doubling.cards .card {
    width: calc( 33.33333333%  -  2em );
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.ten.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.ten.doubling.cards .card {
    width: calc( 33.33333333%  -  2em );
    margin-left: 1em;
    margin-right: 1em;
  }
}

/* Tablet Only */

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.two.doubling.cards {
    margin-left: 0em;
    margin-right: 0em;
  }

  .ui.two.doubling.cards .card {
    width: 100%;
    margin-left: 0em;
    margin-right: 0em;
  }

  .ui.three.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.three.doubling.cards .card {
    width: calc( 50%  -  2em );
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.four.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.four.doubling.cards .card {
    width: calc( 50%  -  2em );
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.five.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.five.doubling.cards .card {
    width: calc( 33.33333333%  -  2em );
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.six.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.six.doubling.cards .card {
    width: calc( 33.33333333%  -  2em );
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.eight.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.eight.doubling.cards .card {
    width: calc( 33.33333333%  -  2em );
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.eight.doubling.cards {
    margin-left: -0.75em;
    margin-right: -0.75em;
  }

  .ui.eight.doubling.cards .card {
    width: calc( 25%  -  1.5em );
    margin-left: 0.75em;
    margin-right: 0.75em;
  }

  .ui.nine.doubling.cards {
    margin-left: -0.75em;
    margin-right: -0.75em;
  }

  .ui.nine.doubling.cards .card {
    width: calc( 25%  -  1.5em );
    margin-left: 0.75em;
    margin-right: 0.75em;
  }

  .ui.ten.doubling.cards {
    margin-left: -0.75em;
    margin-right: -0.75em;
  }

  .ui.ten.doubling.cards .card {
    width: calc( 20%  -  1.5em );
    margin-left: 0.75em;
    margin-right: 0.75em;
  }
}

/*-------------------
      Stackable
--------------------*/

@media only screen and (max-width: 767px) {
  .ui.stackable.cards {
    display: block !important;
  }

  .ui.stackable.cards .card:first-child {
    margin-top: 0em !important;
  }

  .ui.stackable.cards > .card {
    display: block !important;
    height: auto !important;
    margin: 1em 1em;
    padding: 0 !important;
    width: calc( 100%  -  2em ) !important;
  }
}

/*--------------
      Size
---------------*/

.ui.cards > .card {
  font-size: 1em;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
    User Variable Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Comment
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Standard
*******************************/

/*--------------
    Comments
---------------*/

.ui.comments {
  margin: 1.5em 0em;
  max-width: 650px;
}

.ui.comments:first-child {
  margin-top: 0em;
}

.ui.comments:last-child {
  margin-bottom: 0em;
}

/*--------------
     Comment
---------------*/

.ui.comments .comment {
  position: relative;
  background: none;
  margin: 0.5em 0em 0em;
  padding: 0.5em 0em 0em;
  border: none;
  border-top: none;
  line-height: 1.2;
}

.ui.comments .comment:first-child {
  margin-top: 0em;
  padding-top: 0em;
}

/*--------------------
    Nested Comments
---------------------*/

.ui.comments .comment .comments {
  margin: 0em 0em 0.5em 0.5em;
  padding: 1em 0em 1em 1em;
}

.ui.comments .comment .comments:before {
  position: absolute;
  top: 0px;
  left: 0px;
}

.ui.comments .comment .comments .comment {
  border: none;
  border-top: none;
  background: none;
}

/*--------------
     Avatar
---------------*/

.ui.comments .comment .avatar {
  display: block;
  width: 2.5em;
  height: auto;
  float: left;
  margin: 0.2em 0em 0em;
}

.ui.comments .comment img.avatar,
.ui.comments .comment .avatar img {
  display: block;
  margin: 0em auto;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
}

/*--------------
     Content
---------------*/

.ui.comments .comment > .content {
  display: block;
}

/* If there is an avatar move content over */

.ui.comments .comment > .avatar ~ .content {
  margin-left: 3.5em;
}

/*--------------
     Author
---------------*/

.ui.comments .comment .author {
  font-size: 1em;
  color: rgba(0, 0, 0, 0.87);
  font-weight: bold;
}

.ui.comments .comment a.author {
  cursor: pointer;
}

.ui.comments .comment a.author:hover {
  color: #1e70bf;
}

/*--------------
     Metadata
---------------*/

.ui.comments .comment .metadata {
  display: inline-block;
  margin-left: 0.5em;
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.875em;
}

.ui.comments .comment .metadata > * {
  display: inline-block;
  margin: 0em 0.5em 0em 0em;
}

.ui.comments .comment .metadata > :last-child {
  margin-right: 0em;
}

/*--------------------
     Comment Text
---------------------*/

.ui.comments .comment .text {
  margin: 0.25em 0em 0.5em;
  font-size: 1em;
  word-wrap: break-word;
  color: rgba(0, 0, 0, 0.87);
  line-height: 1.3;
}

/*--------------------
     User Actions
---------------------*/

.ui.comments .comment .actions {
  font-size: 0.875em;
}

.ui.comments .comment .actions a {
  cursor: pointer;
  display: inline-block;
  margin: 0em 0.75em 0em 0em;
  color: rgba(0, 0, 0, 0.4);
}

.ui.comments .comment .actions a:last-child {
  margin-right: 0em;
}

.ui.comments .comment .actions a.active,
.ui.comments .comment .actions a:hover {
  color: rgba(0, 0, 0, 0.8);
}

/*--------------------
      Reply Form
---------------------*/

.ui.comments > .reply.form {
  margin-top: 1em;
}

.ui.comments .comment .reply.form {
  width: 100%;
  margin-top: 1em;
}

.ui.comments .reply.form textarea {
  font-size: 1em;
  height: 12em;
}

/*******************************
            State
*******************************/

.ui.collapsed.comments,
.ui.comments .collapsed.comments,
.ui.comments .collapsed.comment {
  display: none;
}

/*******************************
           Variations
*******************************/

/*--------------------
        Threaded
---------------------*/

.ui.threaded.comments .comment .comments {
  margin: -1.5em 0 -1em 1.25em;
  padding: 3em 0em 2em 2.25em;
  box-shadow: -1px 0px 0px rgba(34, 36, 38, 0.15);
}

/*--------------------
        Minimal
---------------------*/

.ui.minimal.comments .comment .actions {
  opacity: 0;
  position: absolute;
  top: 0px;
  right: 0px;
  left: auto;
  -webkit-transition: opacity 0.2s ease;
  transition: opacity 0.2s ease;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

.ui.minimal.comments .comment > .content:hover > .actions {
  opacity: 1;
}

/*--------------------
       Sizes
---------------------*/

.ui.small.comments {
  font-size: 0.9em;
}

.ui.comments {
  font-size: 1em;
}

.ui.large.comments {
  font-size: 1.1em;
}

.ui.huge.comments {
  font-size: 1.2em;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
    User Variable Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Feed
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
         Activity Feed
*******************************/

.ui.feed {
  margin: 1em 0em;
}

.ui.feed:first-child {
  margin-top: 0em;
}

.ui.feed:last-child {
  margin-bottom: 0em;
}

/*******************************
            Content
*******************************/

/* Event */

.ui.feed > .event {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  width: 100%;
  padding: 0.21428571rem 0em;
  margin: 0em;
  background: none;
  border-top: none;
}

.ui.feed > .event:first-child {
  border-top: 0px;
  padding-top: 0em;
}

.ui.feed > .event:last-child {
  padding-bottom: 0em;
}

/* Event Label */

.ui.feed > .event > .label {
  display: block;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: 2.5em;
  height: auto;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  text-align: left;
}

.ui.feed > .event > .label .icon {
  opacity: 1;
  font-size: 1.5em;
  width: 100%;
  padding: 0.25em;
  background: none;
  border: none;
  border-radius: none;
  color: rgba(0, 0, 0, 0.6);
}

.ui.feed > .event > .label img {
  width: 100%;
  height: auto;
  border-radius: 500rem;
}

.ui.feed > .event > .label + .content {
  margin: 0.5em 0em 0.35714286em 1.14285714em;
}

/*--------------
     Content
---------------*/

/* Content */

.ui.feed > .event > .content {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  text-align: left;
  word-wrap: break-word;
}

.ui.feed > .event:last-child > .content {
  padding-bottom: 0em;
}

/* Link */

.ui.feed > .event > .content a {
  cursor: pointer;
}

/*--------------
      Date
---------------*/

.ui.feed > .event > .content .date {
  margin: -0.5rem 0em 0em;
  padding: 0em;
  font-weight: normal;
  font-size: 1em;
  font-style: normal;
  color: rgba(0, 0, 0, 0.4);
}

/*--------------
     Summary
---------------*/

.ui.feed > .event > .content .summary {
  margin: 0em;
  font-size: 1em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.87);
}

/* Summary Image */

.ui.feed > .event > .content .summary img {
  display: inline-block;
  width: auto;
  height: 10em;
  margin: -0.25em 0.25em 0em 0em;
  border-radius: 0.25em;
  vertical-align: middle;
}

/*--------------
      User
---------------*/

.ui.feed > .event > .content .user {
  display: inline-block;
  font-weight: bold;
  margin-right: 0em;
  vertical-align: baseline;
}

.ui.feed > .event > .content .user img {
  margin: -0.25em 0.25em 0em 0em;
  width: auto;
  height: 10em;
  vertical-align: middle;
}

/*--------------
   Inline Date
---------------*/

/* Date inside Summary */

.ui.feed > .event > .content .summary > .date {
  display: inline-block;
  float: none;
  font-weight: normal;
  font-size: 0.85714286em;
  font-style: normal;
  margin: 0em 0em 0em 0.5em;
  padding: 0em;
  color: rgba(0, 0, 0, 0.4);
}

/*--------------
  Extra Summary
---------------*/

.ui.feed > .event > .content .extra {
  margin: 0.5em 0em 0em;
  background: none;
  padding: 0em;
  color: rgba(0, 0, 0, 0.87);
}

/* Images */

.ui.feed > .event > .content .extra.images img {
  display: inline-block;
  margin: 0em 0.25em 0em 0em;
  width: 6em;
}

/* Text */

.ui.feed > .event > .content .extra.text {
  padding: 0em;
  border-left: none;
  font-size: 1em;
  max-width: 500px;
  line-height: 1.4285em;
}

/*--------------
      Meta
---------------*/

.ui.feed > .event > .content .meta {
  display: inline-block;
  font-size: 0.85714286em;
  margin: 0.5em 0em 0em;
  background: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  padding: 0em;
  color: rgba(0, 0, 0, 0.6);
}

.ui.feed > .event > .content .meta > * {
  position: relative;
  margin-left: 0.75em;
}

.ui.feed > .event > .content .meta > *:after {
  content: '';
  color: rgba(0, 0, 0, 0.2);
  top: 0em;
  left: -1em;
  opacity: 1;
  position: absolute;
  vertical-align: top;
}

.ui.feed > .event > .content .meta .like {
  color: '';
  -webkit-transition: 0.2s color ease;
  transition: 0.2s color ease;
}

.ui.feed > .event > .content .meta .like:hover .icon {
  color: #FF2733;
}

.ui.feed > .event > .content .meta .active.like .icon {
  color: #EF404A;
}

/* First element */

.ui.feed > .event > .content .meta > :first-child {
  margin-left: 0em;
}

.ui.feed > .event > .content .meta > :first-child::after {
  display: none;
}

/* Action */

.ui.feed > .event > .content .meta a,
.ui.feed > .event > .content .meta > .icon {
  cursor: pointer;
  opacity: 1;
  color: rgba(0, 0, 0, 0.5);
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}

.ui.feed > .event > .content .meta a:hover,
.ui.feed > .event > .content .meta a:hover .icon,
.ui.feed > .event > .content .meta > .icon:hover {
  color: rgba(0, 0, 0, 0.95);
}

/*******************************
            Variations
*******************************/

.ui.small.feed {
  font-size: 0.92857143rem;
}

.ui.feed {
  font-size: 1rem;
}

.ui.large.feed {
  font-size: 1.14285714rem;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
    User Variable Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Item
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Standard
*******************************/

/*--------------
      Item
---------------*/

.ui.items > .item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 1em 0em;
  width: 100%;
  min-height: 0px;
  background: transparent;
  padding: 0em;
  border: none;
  border-radius: 0rem;
  box-shadow: none;
  -webkit-transition: box-shadow 0.1s ease;
  transition: box-shadow 0.1s ease;
  z-index: '';
}

.ui.items > .item a {
  cursor: pointer;
}

/*--------------
      Items
---------------*/

.ui.items {
  margin: 1.5em 0em;
}

.ui.items:first-child {
  margin-top: 0em !important;
}

.ui.items:last-child {
  margin-bottom: 0em !important;
}

/*--------------
      Item
---------------*/

.ui.items > .item:after {
  display: block;
  content: ' ';
  height: 0px;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}

.ui.items > .item:first-child {
  margin-top: 0em;
}

.ui.items > .item:last-child {
  margin-bottom: 0em;
}

/*--------------
     Images
---------------*/

.ui.items > .item > .image {
  position: relative;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  display: block;
  float: none;
  margin: 0em;
  padding: 0em;
  max-height: '';
  -webkit-align-self: top;
  -ms-flex-item-align: top;
  align-self: top;
}

.ui.items > .item > .image > img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 0.125rem;
  border: none;
}

.ui.items > .item > .image:only-child > img {
  border-radius: 0rem;
}

/*--------------
     Content
---------------*/

.ui.items > .item > .content {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  background: none;
  margin: 0em;
  padding: 0em;
  box-shadow: none;
  font-size: 1em;
  border: none;
  border-radius: 0em;
}

.ui.items > .item > .content:after {
  display: block;
  content: ' ';
  height: 0px;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}

.ui.items > .item > .image + .content {
  min-width: 0;
  width: auto;
  display: block;
  margin-left: 0em;
  -webkit-align-self: top;
  -ms-flex-item-align: top;
  align-self: top;
  padding-left: 1.5em;
}

.ui.items > .item > .content > .header {
  display: inline-block;
  margin: -0.21425em 0em 0em;
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.85);
}

/* Default Header Size */

.ui.items > .item > .content > .header:not(.ui) {
  font-size: 1.28571429em;
}

/*--------------
     Floated
---------------*/

.ui.items > .item [class*="left floated"] {
  float: left;
}

.ui.items > .item [class*="right floated"] {
  float: right;
}

/*--------------
  Content Image
---------------*/

.ui.items > .item .content img {
  -webkit-align-self: middle;
  -ms-flex-item-align: middle;
  align-self: middle;
  width: '';
}

.ui.items > .item img.avatar,
.ui.items > .item .avatar img {
  width: '';
  height: '';
  border-radius: 500rem;
}

/*--------------
   Description
---------------*/

.ui.items > .item > .content > .description {
  margin-top: 0.6em;
  max-width: auto;
  font-size: 1em;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
}

/*--------------
    Paragraph
---------------*/

.ui.items > .item > .content p {
  margin: 0em 0em 0.5em;
}

.ui.items > .item > .content p:last-child {
  margin-bottom: 0em;
}

/*--------------
      Meta
---------------*/

.ui.items > .item .meta {
  margin: 0.5em 0em 0.5em;
  font-size: 1em;
  line-height: 1em;
  color: rgba(0, 0, 0, 0.6);
}

.ui.items > .item .meta * {
  margin-right: 0.3em;
}

.ui.items > .item .meta :last-child {
  margin-right: 0em;
}

.ui.items > .item .meta [class*="right floated"] {
  margin-right: 0em;
  margin-left: 0.3em;
}

/*--------------
      Links
---------------*/

/* Generic */

.ui.items > .item > .content a:not(.ui) {
  color: '';
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}

.ui.items > .item > .content a:not(.ui):hover {
  color: '';
}

/* Header */

.ui.items > .item > .content > a.header {
  color: rgba(0, 0, 0, 0.85);
}

.ui.items > .item > .content > a.header:hover {
  color: #1e70bf;
}

/* Meta */

.ui.items > .item .meta > a:not(.ui) {
  color: rgba(0, 0, 0, 0.4);
}

.ui.items > .item .meta > a:not(.ui):hover {
  color: rgba(0, 0, 0, 0.87);
}

/*--------------
     Labels
---------------*/

/*-----Star----- */

/* Icon */

.ui.items > .item > .content .favorite.icon {
  cursor: pointer;
  opacity: 0.75;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}

.ui.items > .item > .content .favorite.icon:hover {
  opacity: 1;
  color: #FFB70A;
}

.ui.items > .item > .content .active.favorite.icon {
  color: #FFE623;
}

/*-----Like----- */

/* Icon */

.ui.items > .item > .content .like.icon {
  cursor: pointer;
  opacity: 0.75;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}

.ui.items > .item > .content .like.icon:hover {
  opacity: 1;
  color: #FF2733;
}

.ui.items > .item > .content .active.like.icon {
  color: #FF2733;
}

/*----------------
  Extra Content
-----------------*/

.ui.items > .item .extra {
  display: block;
  position: relative;
  background: none;
  margin: 0.5rem 0em 0em;
  width: 100%;
  padding: 0em 0em 0em;
  top: 0em;
  left: 0em;
  color: rgba(0, 0, 0, 0.4);
  box-shadow: none;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
  border-top: none;
}

.ui.items > .item .extra > * {
  margin: 0.25rem 0.5rem 0.25rem 0em;
}

.ui.items > .item .extra > [class*="right floated"] {
  margin: 0.25rem 0em 0.25rem 0.5rem;
}

.ui.items > .item .extra:after {
  display: block;
  content: ' ';
  height: 0px;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}

/*******************************
          Responsive
*******************************/

/* Default Image Width */

.ui.items > .item > .image:not(.ui) {
  width: 175px;
}

/* Tablet Only */

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.items > .item {
    margin: 1em 0em;
  }

  .ui.items > .item > .image:not(.ui) {
    width: 150px;
  }

  .ui.items > .item > .image + .content {
    display: block;
    padding: 0em 0em 0em 1em;
  }
}

/* Mobily Only */

@media only screen and (max-width: 767px) {
  .ui.items > .item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 2em 0em;
  }

  .ui.items > .item > .image {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .ui.items > .item > .image,
  .ui.items > .item > .image > img {
    max-width: 100% !important;
    width: auto !important;
    max-height: 250px !important;
  }

  .ui.items > .item > .image + .content {
    display: block;
    padding: 1.5em 0em 0em;
  }
}

/*******************************
           Variations
*******************************/

/*-------------------
       Aligned
--------------------*/

.ui.items > .item > .image + [class*="top aligned"].content {
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
}

.ui.items > .item > .image + [class*="middle aligned"].content {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
}

.ui.items > .item > .image + [class*="bottom aligned"].content {
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
}

/*--------------
     Relaxed
---------------*/

.ui.relaxed.items > .item {
  margin: 1.5em 0em;
}

.ui[class*="very relaxed"].items > .item {
  margin: 2em 0em;
}

/*-------------------
      Divided
--------------------*/

.ui.divided.items > .item {
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  margin: 0em;
  padding: 1em 0em;
}

.ui.divided.items > .item:first-child {
  border-top: none;
  margin-top: 0em !important;
  padding-top: 0em !important;
}

.ui.divided.items > .item:last-child {
  margin-bottom: 0em !important;
  padding-bottom: 0em !important;
}

/* Relaxed Divided */

.ui.relaxed.divided.items > .item {
  margin: 0em;
  padding: 1.5em 0em;
}

.ui[class*="very relaxed"].divided.items > .item {
  margin: 0em;
  padding: 2em 0em;
}

/*-------------------
        Link
--------------------*/

.ui.items a.item:hover,
.ui.link.items > .item:hover {
  cursor: pointer;
}

.ui.items a.item:hover .content .header,
.ui.link.items > .item:hover .content .header {
  color: #1e70bf;
}

/*--------------
      Size
---------------*/

.ui.items > .item {
  font-size: 1em;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
    User Variable Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Statistic
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
           Statistic
*******************************/

/* Standalone */

.ui.statistic {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 1em 0em;
  max-width: auto;
}

.ui.statistic + .ui.statistic {
  margin: 0em 0em 0em 1.5em;
}

.ui.statistic:first-child {
  margin-top: 0em;
}

.ui.statistic:last-child {
  margin-bottom: 0em;
}

/*******************************
            Group
*******************************/

/* Grouped */

.ui.statistics {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.ui.statistics > .statistic {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0em 1.5em 2em;
  max-width: auto;
}

.ui.statistics {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 1em -1.5em -2em;
}

/* Clearing */

.ui.statistics:after {
  display: block;
  content: ' ';
  height: 0px;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}

.ui.statistics:first-child {
  margin-top: 0em;
}

.ui.statistics:last-child {
  margin-bottom: 0em;
}

/*******************************
            Content
*******************************/

/*--------------
      Value
---------------*/

.ui.statistics .statistic > .value,
.ui.statistic > .value {
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  font-size: 4rem;
  font-weight: normal;
  line-height: 1em;
  color: #1B1C1D;
  text-transform: uppercase;
  text-align: center;
}

/*--------------
     Label
---------------*/

.ui.statistics .statistic > .label,
.ui.statistic > .label {
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  font-size: 1em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  text-align: center;
}

/* Top Label */

.ui.statistics .statistic > .label ~ .value,
.ui.statistic > .label ~ .value {
  margin-top: 0rem;
}

/* Bottom Label */

.ui.statistics .statistic > .value ~ .label,
.ui.statistic > .value ~ .label {
  margin-top: 0rem;
}

/*******************************
             Types
*******************************/

/*--------------
   Icon Value
---------------*/

.ui.statistics .statistic > .value .icon,
.ui.statistic > .value .icon {
  opacity: 1;
  width: auto;
  margin: 0em;
}

/*--------------
   Text Value
---------------*/

.ui.statistics .statistic > .text.value,
.ui.statistic > .text.value {
  line-height: 1em;
  min-height: 2em;
  font-weight: bold;
  text-align: center;
}

.ui.statistics .statistic > .text.value + .label,
.ui.statistic > .text.value + .label {
  text-align: center;
}

/*--------------
   Image Value
---------------*/

.ui.statistics .statistic > .value img,
.ui.statistic > .value img {
  max-height: 3rem;
  vertical-align: baseline;
}

/*******************************
            Variations
*******************************/

/*--------------
      Count
---------------*/

.ui.ten.statistics {
  margin: 0em 0em -2em;
}

.ui.ten.statistics .statistic {
  min-width: 10%;
  margin: 0em 0em 2em;
}

.ui.nine.statistics {
  margin: 0em 0em -2em;
}

.ui.nine.statistics .statistic {
  min-width: 11.11111111%;
  margin: 0em 0em 2em;
}

.ui.eight.statistics {
  margin: 0em 0em -2em;
}

.ui.eight.statistics .statistic {
  min-width: 12.5%;
  margin: 0em 0em 2em;
}

.ui.seven.statistics {
  margin: 0em 0em -2em;
}

.ui.seven.statistics .statistic {
  min-width: 14.28571429%;
  margin: 0em 0em 2em;
}

.ui.six.statistics {
  margin: 0em 0em -2em;
}

.ui.six.statistics .statistic {
  min-width: 16.66666667%;
  margin: 0em 0em 2em;
}

.ui.five.statistics {
  margin: 0em 0em -2em;
}

.ui.five.statistics .statistic {
  min-width: 20%;
  margin: 0em 0em 2em;
}

.ui.four.statistics {
  margin: 0em 0em -2em;
}

.ui.four.statistics .statistic {
  min-width: 25%;
  margin: 0em 0em 2em;
}

.ui.three.statistics {
  margin: 0em 0em -2em;
}

.ui.three.statistics .statistic {
  min-width: 33.33333333%;
  margin: 0em 0em 2em;
}

.ui.two.statistics {
  margin: 0em 0em -2em;
}

.ui.two.statistics .statistic {
  min-width: 50%;
  margin: 0em 0em 2em;
}

.ui.one.statistics {
  margin: 0em 0em -2em;
}

.ui.one.statistics .statistic {
  min-width: 100%;
  margin: 0em 0em 2em;
}

/*--------------
   Horizontal
---------------*/

.ui.horizontal.statistic {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  -ms-grid-row-align: center;
  align-items: center;
}

.ui.horizontal.statistics {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0em;
  max-width: none;
}

.ui.horizontal.statistics .statistic {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  -ms-grid-row-align: center;
  align-items: center;
  max-width: none;
  margin: 1em 0em;
}

.ui.horizontal.statistic > .text.value,
.ui.horizontal.statistics > .statistic > .text.value {
  min-height: 0em !important;
}

.ui.horizontal.statistics .statistic > .value .icon,
.ui.horizontal.statistic > .value .icon {
  width: 1.18em;
}

.ui.horizontal.statistics .statistic > .value,
.ui.horizontal.statistic > .value {
  display: inline-block;
  vertical-align: middle;
}

.ui.horizontal.statistics .statistic > .label,
.ui.horizontal.statistic > .label {
  display: inline-block;
  vertical-align: middle;
  margin: 0em 0em 0em 0.75em;
}

/*--------------
     Colors
---------------*/

.ui.red.statistics .statistic > .value,
.ui.statistics .red.statistic > .value,
.ui.red.statistic > .value {
  color: #DB2828;
}

.ui.orange.statistics .statistic > .value,
.ui.statistics .orange.statistic > .value,
.ui.orange.statistic > .value {
  color: #F2711C;
}

.ui.yellow.statistics .statistic > .value,
.ui.statistics .yellow.statistic > .value,
.ui.yellow.statistic > .value {
  color: #FBBD08;
}

.ui.olive.statistics .statistic > .value,
.ui.statistics .olive.statistic > .value,
.ui.olive.statistic > .value {
  color: #B5CC18;
}

.ui.green.statistics .statistic > .value,
.ui.statistics .green.statistic > .value,
.ui.green.statistic > .value {
  color: #21BA45;
}

.ui.teal.statistics .statistic > .value,
.ui.statistics .teal.statistic > .value,
.ui.teal.statistic > .value {
  color: #00B5AD;
}

.ui.blue.statistics .statistic > .value,
.ui.statistics .blue.statistic > .value,
.ui.blue.statistic > .value {
  color: #2185D0;
}

.ui.violet.statistics .statistic > .value,
.ui.statistics .violet.statistic > .value,
.ui.violet.statistic > .value {
  color: #6435C9;
}

.ui.purple.statistics .statistic > .value,
.ui.statistics .purple.statistic > .value,
.ui.purple.statistic > .value {
  color: #A333C8;
}

.ui.pink.statistics .statistic > .value,
.ui.statistics .pink.statistic > .value,
.ui.pink.statistic > .value {
  color: #E03997;
}

.ui.brown.statistics .statistic > .value,
.ui.statistics .brown.statistic > .value,
.ui.brown.statistic > .value {
  color: #A5673F;
}

.ui.grey.statistics .statistic > .value,
.ui.statistics .grey.statistic > .value,
.ui.grey.statistic > .value {
  color: #767676;
}

/*--------------
    Inverted
---------------*/

.ui.inverted.statistics .statistic > .value,
.ui.inverted.statistic .value {
  color: #FFFFFF;
}

.ui.inverted.statistics .statistic > .label,
.ui.inverted.statistic .label {
  color: rgba(255, 255, 255, 0.9);
}

.ui.inverted.red.statistics .statistic > .value,
.ui.statistics .inverted.red.statistic > .value,
.ui.inverted.red.statistic > .value {
  color: #FF695E;
}

.ui.inverted.orange.statistics .statistic > .value,
.ui.statistics .inverted.orange.statistic > .value,
.ui.inverted.orange.statistic > .value {
  color: #FF851B;
}

.ui.inverted.yellow.statistics .statistic > .value,
.ui.statistics .inverted.yellow.statistic > .value,
.ui.inverted.yellow.statistic > .value {
  color: #FFE21F;
}

.ui.inverted.olive.statistics .statistic > .value,
.ui.statistics .inverted.olive.statistic > .value,
.ui.inverted.olive.statistic > .value {
  color: #D9E778;
}

.ui.inverted.green.statistics .statistic > .value,
.ui.statistics .inverted.green.statistic > .value,
.ui.inverted.green.statistic > .value {
  color: #2ECC40;
}

.ui.inverted.teal.statistics .statistic > .value,
.ui.statistics .inverted.teal.statistic > .value,
.ui.inverted.teal.statistic > .value {
  color: #6DFFFF;
}

.ui.inverted.blue.statistics .statistic > .value,
.ui.statistics .inverted.blue.statistic > .value,
.ui.inverted.blue.statistic > .value {
  color: #54C8FF;
}

.ui.inverted.violet.statistics .statistic > .value,
.ui.statistics .inverted.violet.statistic > .value,
.ui.inverted.violet.statistic > .value {
  color: #A291FB;
}

.ui.inverted.purple.statistics .statistic > .value,
.ui.statistics .inverted.purple.statistic > .value,
.ui.inverted.purple.statistic > .value {
  color: #DC73FF;
}

.ui.inverted.pink.statistics .statistic > .value,
.ui.statistics .inverted.pink.statistic > .value,
.ui.inverted.pink.statistic > .value {
  color: #FF8EDF;
}

.ui.inverted.brown.statistics .statistic > .value,
.ui.statistics .inverted.brown.statistic > .value,
.ui.inverted.brown.statistic > .value {
  color: #D67C1C;
}

.ui.inverted.grey.statistics .statistic > .value,
.ui.statistics .inverted.grey.statistic > .value,
.ui.inverted.grey.statistic > .value {
  color: #DCDDDE;
}

/*--------------
    Floated
---------------*/

.ui[class*="left floated"].statistic {
  float: left;
  margin: 0em 2em 1em 0em;
}

.ui[class*="right floated"].statistic {
  float: right;
  margin: 0em 0em 1em 2em;
}

.ui.floated.statistic:last-child {
  margin-bottom: 0em;
}

/*--------------
     Sizes
---------------*/

/* Mini */

.ui.mini.statistics .statistic > .value,
.ui.mini.statistic > .value {
  font-size: 1.5rem;
}

.ui.mini.horizontal.statistics .statistic > .value,
.ui.mini.horizontal.statistic > .value {
  font-size: 1.5rem;
}

.ui.mini.statistics .statistic > .text.value,
.ui.mini.statistic > .text.value {
  font-size: 1rem;
}

/* Tiny */

.ui.tiny.statistics .statistic > .value,
.ui.tiny.statistic > .value {
  font-size: 2rem;
}

.ui.tiny.horizontal.statistics .statistic > .value,
.ui.tiny.horizontal.statistic > .value {
  font-size: 2rem;
}

.ui.tiny.statistics .statistic > .text.value,
.ui.tiny.statistic > .text.value {
  font-size: 1rem;
}

/* Small */

.ui.small.statistics .statistic > .value,
.ui.small.statistic > .value {
  font-size: 3rem;
}

.ui.small.horizontal.statistics .statistic > .value,
.ui.small.horizontal.statistic > .value {
  font-size: 2rem;
}

.ui.small.statistics .statistic > .text.value,
.ui.small.statistic > .text.value {
  font-size: 1rem;
}

/* Medium */

.ui.statistics .statistic > .value,
.ui.statistic > .value {
  font-size: 4rem;
}

.ui.horizontal.statistics .statistic > .value,
.ui.horizontal.statistic > .value {
  font-size: 3rem;
}

.ui.statistics .statistic > .text.value,
.ui.statistic > .text.value {
  font-size: 2rem;
}

/* Large */

.ui.large.statistics .statistic > .value,
.ui.large.statistic > .value {
  font-size: 5rem;
}

.ui.large.horizontal.statistics .statistic > .value,
.ui.large.horizontal.statistic > .value {
  font-size: 4rem;
}

.ui.large.statistics .statistic > .text.value,
.ui.large.statistic > .text.value {
  font-size: 2.5rem;
}

/* Huge */

.ui.huge.statistics .statistic > .value,
.ui.huge.statistic > .value {
  font-size: 6rem;
}

.ui.huge.horizontal.statistics .statistic > .value,
.ui.huge.horizontal.statistic > .value {
  font-size: 5rem;
}

.ui.huge.statistics .statistic > .text.value,
.ui.huge.statistic > .text.value {
  font-size: 2.5rem;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
    User Variable Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Accordion
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Accordion
*******************************/

.ui.accordion,
.ui.accordion .accordion {
  max-width: 100%;
}

.ui.accordion .accordion {
  margin: 1em 0em 0em;
  padding: 0em;
}

/* Title */

.ui.accordion .title,
.ui.accordion .accordion .title {
  cursor: pointer;
}

/* Default Styling */

.ui.accordion .title:not(.ui) {
  padding: 0.5em 0em;
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.87);
}

/* Content */

.ui.accordion .title ~ .content,
.ui.accordion .accordion .title ~ .content {
  display: none;
}

/* Default Styling */

.ui.accordion:not(.styled) .title ~ .content:not(.ui),
.ui.accordion:not(.styled) .accordion .title ~ .content:not(.ui) {
  margin: '';
  padding: 0.5em 0em 1em;
}

.ui.accordion:not(.styled) .title ~ .content:not(.ui):last-child {
  padding-bottom: 0em;
}

/* Arrow */

.ui.accordion .title .dropdown.icon,
.ui.accordion .accordion .title .dropdown.icon {
  display: inline-block;
  float: none;
  opacity: 1;
  width: 1.25em;
  height: 1em;
  margin: 0em 0.25rem 0em 0rem;
  padding: 0em;
  font-size: 1em;
  -webkit-transition: opacity 0.1s ease, -webkit-transform 0.1s ease;
  transition: opacity 0.1s ease, -webkit-transform 0.1s ease;
  transition: transform 0.1s ease, opacity 0.1s ease;
  transition: transform 0.1s ease, opacity 0.1s ease, -webkit-transform 0.1s ease;
  vertical-align: baseline;
  -webkit-transform: none;
  transform: none;
}

/*--------------
    Coupling
---------------*/

/* Menu */

.ui.accordion.menu .item .title {
  display: block;
  padding: 0em;
}

.ui.accordion.menu .item .title > .dropdown.icon {
  float: right;
  margin: 0.21425em 0em 0em 1em;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

/* Header */

.ui.accordion .ui.header .dropdown.icon {
  font-size: 1em;
  margin: 0em 0.25rem 0em 0rem;
}

/*******************************
            States
*******************************/

.ui.accordion .active.title .dropdown.icon,
.ui.accordion .accordion .active.title .dropdown.icon {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.ui.accordion.menu .item .active.title > .dropdown.icon {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

/*******************************
            Types
*******************************/

/*--------------
     Styled
---------------*/

.ui.styled.accordion {
  width: 600px;
}

.ui.styled.accordion,
.ui.styled.accordion .accordion {
  border-radius: 0.28571429rem;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15), 0px 0px 0px 1px rgba(34, 36, 38, 0.15);
}

.ui.styled.accordion .title,
.ui.styled.accordion .accordion .title {
  margin: 0em;
  padding: 0.75em 1em;
  color: rgba(0, 0, 0, 0.4);
  font-weight: bold;
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  -webkit-transition: background 0.1s ease, color 0.1s ease;
  transition: background 0.1s ease, color 0.1s ease;
}

.ui.styled.accordion > .title:first-child,
.ui.styled.accordion .accordion .title:first-child {
  border-top: none;
}

/* Content */

.ui.styled.accordion .content,
.ui.styled.accordion .accordion .content {
  margin: 0em;
  padding: 0.5em 1em 1.5em;
}

.ui.styled.accordion .accordion .content {
  padding: 0em;
  padding: 0.5em 1em 1.5em;
}

/* Hover */

.ui.styled.accordion .title:hover,
.ui.styled.accordion .active.title,
.ui.styled.accordion .accordion .title:hover,
.ui.styled.accordion .accordion .active.title {
  background: transparent;
  color: rgba(0, 0, 0, 0.87);
}

.ui.styled.accordion .accordion .title:hover,
.ui.styled.accordion .accordion .active.title {
  background: transparent;
  color: rgba(0, 0, 0, 0.87);
}

/* Active */

.ui.styled.accordion .active.title {
  background: transparent;
  color: rgba(0, 0, 0, 0.95);
}

.ui.styled.accordion .accordion .active.title {
  background: transparent;
  color: rgba(0, 0, 0, 0.95);
}

/*******************************
            States
*******************************/

/*--------------
     Active
---------------*/

.ui.accordion .active.content,
.ui.accordion .accordion .active.content {
  display: block;
}

/*******************************
           Variations
*******************************/

/*--------------
     Fluid
---------------*/

.ui.fluid.accordion,
.ui.fluid.accordion .accordion {
  width: 100%;
}

/*--------------
     Inverted
---------------*/

.ui.inverted.accordion .title:not(.ui) {
  color: rgba(255, 255, 255, 0.9);
}

/*******************************
         Theme Overrides
*******************************/

@font-face {
  font-family: 'Accordion';
  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMggjB5AAAAC8AAAAYGNtYXAPfOIKAAABHAAAAExnYXNwAAAAEAAAAWgAAAAIZ2x5Zryj6HgAAAFwAAAAyGhlYWT/0IhHAAACOAAAADZoaGVhApkB5wAAAnAAAAAkaG10eAJuABIAAAKUAAAAGGxvY2EAjABWAAACrAAAAA5tYXhwAAgAFgAAArwAAAAgbmFtZfC1n04AAALcAAABPHBvc3QAAwAAAAAEGAAAACAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADw2gHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIPDa//3//wAAAAAAIPDZ//3//wAB/+MPKwADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQASAEkAtwFuABMAADc0PwE2FzYXFh0BFAcGJwYvASY1EgaABQgHBQYGBQcIBYAG2wcGfwcBAQcECf8IBAcBAQd/BgYAAAAAAQAAAEkApQFuABMAADcRNDc2MzIfARYVFA8BBiMiJyY1AAUGBwgFgAYGgAUIBwYFWwEACAUGBoAFCAcFgAYGBQcAAAABAAAAAQAAqWYls18PPPUACwIAAAAAAM/9o+4AAAAAz/2j7gAAAAAAtwFuAAAACAACAAAAAAAAAAEAAAHg/+AAAAIAAAAAAAC3AAEAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAQAAAAC3ABIAtwAAAAAAAAAKABQAHgBCAGQAAAABAAAABgAUAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADAAAAAEAAAAAAAIADgBAAAEAAAAAAAMADAAiAAEAAAAAAAQADABOAAEAAAAAAAUAFgAMAAEAAAAAAAYABgAuAAEAAAAAAAoANABaAAMAAQQJAAEADAAAAAMAAQQJAAIADgBAAAMAAQQJAAMADAAiAAMAAQQJAAQADABOAAMAAQQJAAUAFgAMAAMAAQQJAAYADAA0AAMAAQQJAAoANABaAHIAYQB0AGkAbgBnAFYAZQByAHMAaQBvAG4AIAAxAC4AMAByAGEAdABpAG4AZ3JhdGluZwByAGEAdABpAG4AZwBSAGUAZwB1AGwAYQByAHIAYQB0AGkAbgBnAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA") format('truetype'), url("data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AAASwAAoAAAAABGgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAS0AAAEtFpovuE9TLzIAAAIkAAAAYAAAAGAIIweQY21hcAAAAoQAAABMAAAATA984gpnYXNwAAAC0AAAAAgAAAAIAAAAEGhlYWQAAALYAAAANgAAADb/0IhHaGhlYQAAAxAAAAAkAAAAJAKZAedobXR4AAADNAAAABgAAAAYAm4AEm1heHAAAANMAAAABgAAAAYABlAAbmFtZQAAA1QAAAE8AAABPPC1n05wb3N0AAAEkAAAACAAAAAgAAMAAAEABAQAAQEBB3JhdGluZwABAgABADr4HAL4GwP4GAQeCgAZU/+Lix4KABlT/4uLDAeLa/iU+HQFHQAAAHkPHQAAAH4RHQAAAAkdAAABJBIABwEBBw0PERQZHnJhdGluZ3JhdGluZ3UwdTF1MjB1RjBEOXVGMERBAAACAYkABAAGAQEEBwoNVp38lA78lA78lA77lA773Z33bxWLkI2Qj44I9xT3FAWOj5CNkIuQi4+JjoePiI2Gi4YIi/uUBYuGiYeHiIiHh4mGi4aLho2Ijwj7FPcUBYeOiY+LkAgO+92L5hWL95QFi5CNkI6Oj4+PjZCLkIuQiY6HCPcU+xQFj4iNhouGi4aJh4eICPsU+xQFiIeGiYaLhouHjYePiI6Jj4uQCA74lBT4lBWLDAoAAAAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADw2gHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIPDa//3//wAAAAAAIPDZ//3//wAB/+MPKwADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAEAADfYOJZfDzz1AAsCAAAAAADP/aPuAAAAAM/9o+4AAAAAALcBbgAAAAgAAgAAAAAAAAABAAAB4P/gAAACAAAAAAAAtwABAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAEAAAAAtwASALcAAAAAUAAABgAAAAAADgCuAAEAAAAAAAEADAAAAAEAAAAAAAIADgBAAAEAAAAAAAMADAAiAAEAAAAAAAQADABOAAEAAAAAAAUAFgAMAAEAAAAAAAYABgAuAAEAAAAAAAoANABaAAMAAQQJAAEADAAAAAMAAQQJAAIADgBAAAMAAQQJAAMADAAiAAMAAQQJAAQADABOAAMAAQQJAAUAFgAMAAMAAQQJAAYADAA0AAMAAQQJAAoANABaAHIAYQB0AGkAbgBnAFYAZQByAHMAaQBvAG4AIAAxAC4AMAByAGEAdABpAG4AZ3JhdGluZwByAGEAdABpAG4AZwBSAGUAZwB1AGwAYQByAHIAYQB0AGkAbgBnAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA") format('woff');
  font-weight: normal;
  font-style: normal;
}

/* Dropdown Icon */

.ui.accordion .title .dropdown.icon,
.ui.accordion .accordion .title .dropdown.icon {
  font-family: Accordion;
  line-height: 1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-weight: normal;
  font-style: normal;
  text-align: center;
}

.ui.accordion .title .dropdown.icon:before,
.ui.accordion .accordion .title .dropdown.icon:before {
  content: '\f0da' ;
}

/*******************************
        User Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Checkbox
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
           Checkbox
*******************************/

/*--------------
    Content
---------------*/

.ui.checkbox {
  position: relative;
  display: inline-block;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  outline: none;
  vertical-align: baseline;
  font-style: normal;
  min-height: 17px;
  font-size: 1rem;
  line-height: 17px;
  min-width: 17px;
}

/* HTML Checkbox */

.ui.checkbox input[type="checkbox"],
.ui.checkbox input[type="radio"] {
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0 !important;
  outline: none;
  z-index: 3;
  width: 17px;
  height: 17px;
}

/*--------------
      Box
---------------*/

.ui.checkbox .box,
.ui.checkbox label {
  cursor: auto;
  position: relative;
  display: block;
  padding-left: 1.85714em;
  outline: none;
  font-size: 1em;
}

.ui.checkbox .box:before,
.ui.checkbox label:before {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 17px;
  height: 17px;
  content: '';
  background: #FFFFFF;
  border-radius: 0.21428571rem;
  -webkit-transition: border 0.1s ease, opacity 0.1s ease, box-shadow 0.1s ease, -webkit-transform 0.1s ease;
  transition: border 0.1s ease, opacity 0.1s ease, box-shadow 0.1s ease, -webkit-transform 0.1s ease;
  transition: border 0.1s ease, opacity 0.1s ease, transform 0.1s ease, box-shadow 0.1s ease;
  transition: border 0.1s ease, opacity 0.1s ease, transform 0.1s ease, box-shadow 0.1s ease, -webkit-transform 0.1s ease;
  border: 1px solid #D4D4D5;
}

/*--------------
    Checkmark
---------------*/

.ui.checkbox .box:after,
.ui.checkbox label:after {
  position: absolute;
  font-size: 14px;
  top: 0px;
  left: 0px;
  width: 17px;
  height: 17px;
  text-align: center;
  opacity: 0;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: border 0.1s ease, opacity 0.1s ease, box-shadow 0.1s ease, -webkit-transform 0.1s ease;
  transition: border 0.1s ease, opacity 0.1s ease, box-shadow 0.1s ease, -webkit-transform 0.1s ease;
  transition: border 0.1s ease, opacity 0.1s ease, transform 0.1s ease, box-shadow 0.1s ease;
  transition: border 0.1s ease, opacity 0.1s ease, transform 0.1s ease, box-shadow 0.1s ease, -webkit-transform 0.1s ease;
}

/*--------------
      Label
---------------*/

/* Inside */

.ui.checkbox label,
.ui.checkbox + label {
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}

/* Outside */

.ui.checkbox + label {
  vertical-align: middle;
}

/*******************************
           States
*******************************/

/*--------------
      Hover
---------------*/

.ui.checkbox .box:hover::before,
.ui.checkbox label:hover::before {
  background: #FFFFFF;
  border-color: rgba(34, 36, 38, 0.35);
}

.ui.checkbox label:hover,
.ui.checkbox + label:hover {
  color: rgba(0, 0, 0, 0.8);
}

/*--------------
      Down
---------------*/

.ui.checkbox .box:active::before,
.ui.checkbox label:active::before {
  background: #F9FAFB;
  border-color: rgba(34, 36, 38, 0.35);
}

.ui.checkbox .box:active::after,
.ui.checkbox label:active::after {
  color: rgba(0, 0, 0, 0.95);
}

.ui.checkbox input:active ~ label {
  color: rgba(0, 0, 0, 0.95);
}

/*--------------
     Focus
---------------*/

.ui.checkbox input:focus ~ .box:before,
.ui.checkbox input:focus ~ label:before {
  background: #FFFFFF;
  border-color: #96C8DA;
}

.ui.checkbox input:focus ~ .box:after,
.ui.checkbox input:focus ~ label:after {
  color: rgba(0, 0, 0, 0.95);
}

.ui.checkbox input:focus ~ label {
  color: rgba(0, 0, 0, 0.95);
}

/*--------------
     Active
---------------*/

.ui.checkbox input:checked ~ .box:before,
.ui.checkbox input:checked ~ label:before {
  background: #FFFFFF;
  border-color: rgba(34, 36, 38, 0.35);
}

.ui.checkbox input:checked ~ .box:after,
.ui.checkbox input:checked ~ label:after {
  opacity: 1;
  color: rgba(0, 0, 0, 0.95);
}

/*--------------
  Indeterminate
---------------*/

.ui.checkbox input:indeterminate ~ .box:before,
.ui.checkbox input:indeterminate ~ label:before {
  background: #FFFFFF;
  border-color: rgba(34, 36, 38, 0.35);
}

.ui.checkbox input:indeterminate ~ .box:after,
.ui.checkbox input:indeterminate ~ label:after {
  opacity: 1;
  color: rgba(0, 0, 0, 0.95);
}

/*--------------
  Active Focus
---------------*/

.ui.checkbox input:indeterminate:focus ~ .box:before,
.ui.checkbox input:indeterminate:focus ~ label:before,
.ui.checkbox input:checked:focus ~ .box:before,
.ui.checkbox input:checked:focus ~ label:before {
  background: #FFFFFF;
  border-color: #96C8DA;
}

.ui.checkbox input:indeterminate:focus ~ .box:after,
.ui.checkbox input:indeterminate:focus ~ label:after,
.ui.checkbox input:checked:focus ~ .box:after,
.ui.checkbox input:checked:focus ~ label:after {
  color: rgba(0, 0, 0, 0.95);
}

/*--------------
    Read-Only
---------------*/

.ui.read-only.checkbox,
.ui.read-only.checkbox label {
  cursor: default;
}

/*--------------
     Disabled
---------------*/

.ui.disabled.checkbox .box:after,
.ui.disabled.checkbox label,
.ui.checkbox input[disabled] ~ .box:after,
.ui.checkbox input[disabled] ~ label {
  cursor: default;
  opacity: 0.5;
  color: #000000;
}

/*--------------
     Hidden
---------------*/

/* Initialized checkbox moves input below element
 to prevent manually triggering */

.ui.checkbox input.hidden {
  z-index: -1;
}

/* Selectable Label */

.ui.checkbox input.hidden + label {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/*******************************
             Types
*******************************/

/*--------------
     Radio
---------------*/

.ui.radio.checkbox {
  min-height: 15px;
}

.ui.radio.checkbox .box,
.ui.radio.checkbox label {
  padding-left: 1.85714em;
}

/* Box */

.ui.radio.checkbox .box:before,
.ui.radio.checkbox label:before {
  content: '';
  -webkit-transform: none;
  transform: none;
  width: 15px;
  height: 15px;
  border-radius: 500rem;
  top: 1px;
  left: 0px;
}

/* Bullet */

.ui.radio.checkbox .box:after,
.ui.radio.checkbox label:after {
  border: none;
  content: '' !important;
  width: 15px;
  height: 15px;
  line-height: 15px;
}

/* Radio Checkbox */

.ui.radio.checkbox .box:after,
.ui.radio.checkbox label:after {
  top: 1px;
  left: 0px;
  width: 15px;
  height: 15px;
  border-radius: 500rem;
  -webkit-transform: scale(0.46666667);
  transform: scale(0.46666667);
  background-color: rgba(0, 0, 0, 0.87);
}

/* Focus */

.ui.radio.checkbox input:focus ~ .box:before,
.ui.radio.checkbox input:focus ~ label:before {
  background-color: #FFFFFF;
}

.ui.radio.checkbox input:focus ~ .box:after,
.ui.radio.checkbox input:focus ~ label:after {
  background-color: rgba(0, 0, 0, 0.95);
}

/* Indeterminate */

.ui.radio.checkbox input:indeterminate ~ .box:after,
.ui.radio.checkbox input:indeterminate ~ label:after {
  opacity: 0;
}

/* Active */

.ui.radio.checkbox input:checked ~ .box:before,
.ui.radio.checkbox input:checked ~ label:before {
  background-color: #FFFFFF;
}

.ui.radio.checkbox input:checked ~ .box:after,
.ui.radio.checkbox input:checked ~ label:after {
  background-color: rgba(0, 0, 0, 0.95);
}

/* Active Focus */

.ui.radio.checkbox input:focus:checked ~ .box:before,
.ui.radio.checkbox input:focus:checked ~ label:before {
  background-color: #FFFFFF;
}

.ui.radio.checkbox input:focus:checked ~ .box:after,
.ui.radio.checkbox input:focus:checked ~ label:after {
  background-color: rgba(0, 0, 0, 0.95);
}

/*--------------
     Slider
---------------*/

.ui.slider.checkbox {
  min-height: 1.25rem;
}

/* Input */

.ui.slider.checkbox input {
  width: 3.5rem;
  height: 1.25rem;
}

/* Label */

.ui.slider.checkbox .box,
.ui.slider.checkbox label {
  padding-left: 4.5rem;
  line-height: 1rem;
  color: rgba(0, 0, 0, 0.4);
}

/* Line */

.ui.slider.checkbox .box:before,
.ui.slider.checkbox label:before {
  display: block;
  position: absolute;
  content: '';
  border: none !important;
  left: 0em;
  z-index: 1;
  top: 0.4rem;
  background-color: rgba(0, 0, 0, 0.05);
  width: 3.5rem;
  height: 0.21428571rem;
  -webkit-transform: none;
  transform: none;
  border-radius: 500rem;
  -webkit-transition: background 0.3s ease;
  transition: background 0.3s ease;
}

/* Handle */

.ui.slider.checkbox .box:after,
.ui.slider.checkbox label:after {
  background: #FFFFFF -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  background: #FFFFFF linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  position: absolute;
  content: '' !important;
  opacity: 1;
  z-index: 2;
  border: none;
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15), 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;
  width: 1.5rem;
  height: 1.5rem;
  top: -0.25rem;
  left: 0em;
  -webkit-transform: none;
  transform: none;
  border-radius: 500rem;
  -webkit-transition: left 0.3s ease;
  transition: left 0.3s ease;
}

/* Focus */

.ui.slider.checkbox input:focus ~ .box:before,
.ui.slider.checkbox input:focus ~ label:before {
  background-color: rgba(0, 0, 0, 0.15);
  border: none;
}

/* Hover */

.ui.slider.checkbox .box:hover,
.ui.slider.checkbox label:hover {
  color: rgba(0, 0, 0, 0.8);
}

.ui.slider.checkbox .box:hover::before,
.ui.slider.checkbox label:hover::before {
  background: rgba(0, 0, 0, 0.15);
}

/* Active */

.ui.slider.checkbox input:checked ~ .box,
.ui.slider.checkbox input:checked ~ label {
  color: rgba(0, 0, 0, 0.95) !important;
}

.ui.slider.checkbox input:checked ~ .box:before,
.ui.slider.checkbox input:checked ~ label:before {
  background-color: #545454 !important;
}

.ui.slider.checkbox input:checked ~ .box:after,
.ui.slider.checkbox input:checked ~ label:after {
  left: 2rem;
}

/* Active Focus */

.ui.slider.checkbox input:focus:checked ~ .box,
.ui.slider.checkbox input:focus:checked ~ label {
  color: rgba(0, 0, 0, 0.95) !important;
}

.ui.slider.checkbox input:focus:checked ~ .box:before,
.ui.slider.checkbox input:focus:checked ~ label:before {
  background-color: #000000 !important;
}

/*--------------
     Toggle
---------------*/

.ui.toggle.checkbox {
  min-height: 1.5rem;
}

/* Input */

.ui.toggle.checkbox input {
  width: 3.5rem;
  height: 1.5rem;
}

/* Label */

.ui.toggle.checkbox .box,
.ui.toggle.checkbox label {
  min-height: 1.5rem;
  padding-left: 4.5rem;
  color: rgba(0, 0, 0, 0.87);
}

.ui.toggle.checkbox label {
  padding-top: 0.15em;
}

/* Switch */

.ui.toggle.checkbox .box:before,
.ui.toggle.checkbox label:before {
  display: block;
  position: absolute;
  content: '';
  z-index: 1;
  -webkit-transform: none;
  transform: none;
  border: none;
  top: 0rem;
  background: rgba(0, 0, 0, 0.05);
  width: 3.5rem;
  height: 1.5rem;
  border-radius: 500rem;
}

/* Handle */

.ui.toggle.checkbox .box:after,
.ui.toggle.checkbox label:after {
  background: #FFFFFF -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  background: #FFFFFF linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  position: absolute;
  content: '' !important;
  opacity: 1;
  z-index: 2;
  border: none;
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15), 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;
  width: 1.5rem;
  height: 1.5rem;
  top: 0rem;
  left: 0em;
  border-radius: 500rem;
  -webkit-transition: background 0.3s ease, left 0.3s ease;
  transition: background 0.3s ease, left 0.3s ease;
}

.ui.toggle.checkbox input ~ .box:after,
.ui.toggle.checkbox input ~ label:after {
  left: -0.05rem;
}

/* Focus */

.ui.toggle.checkbox input:focus ~ .box:before,
.ui.toggle.checkbox input:focus ~ label:before {
  background-color: rgba(0, 0, 0, 0.15);
  border: none;
}

/* Hover */

.ui.toggle.checkbox .box:hover::before,
.ui.toggle.checkbox label:hover::before {
  background-color: rgba(0, 0, 0, 0.15);
  border: none;
}

/* Active */

.ui.toggle.checkbox input:checked ~ .box,
.ui.toggle.checkbox input:checked ~ label {
  color: rgba(0, 0, 0, 0.95) !important;
}

.ui.toggle.checkbox input:checked ~ .box:before,
.ui.toggle.checkbox input:checked ~ label:before {
  background-color: #2185D0 !important;
}

.ui.toggle.checkbox input:checked ~ .box:after,
.ui.toggle.checkbox input:checked ~ label:after {
  left: 2.15rem;
}

/* Active Focus */

.ui.toggle.checkbox input:focus:checked ~ .box,
.ui.toggle.checkbox input:focus:checked ~ label {
  color: rgba(0, 0, 0, 0.95) !important;
}

.ui.toggle.checkbox input:focus:checked ~ .box:before,
.ui.toggle.checkbox input:focus:checked ~ label:before {
  background-color: #0d71bb !important;
}

/*******************************
            Variations
*******************************/

/*--------------
     Fitted
---------------*/

.ui.fitted.checkbox .box,
.ui.fitted.checkbox label {
  padding-left: 0em !important;
}

.ui.fitted.toggle.checkbox,
.ui.fitted.toggle.checkbox {
  width: 3.5rem;
}

.ui.fitted.slider.checkbox,
.ui.fitted.slider.checkbox {
  width: 3.5rem;
}

/*******************************
         Theme Overrides
*******************************/

@font-face {
  font-family: 'Checkbox';
  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBD8AAAC8AAAAYGNtYXAYVtCJAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zn4huwUAAAF4AAABYGhlYWQGPe1ZAAAC2AAAADZoaGVhB30DyAAAAxAAAAAkaG10eBBKAEUAAAM0AAAAHGxvY2EAmgESAAADUAAAABBtYXhwAAkALwAAA2AAAAAgbmFtZSC8IugAAAOAAAABknBvc3QAAwAAAAAFFAAAACAAAwMTAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADoAgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6AL//f//AAAAAAAg6AD//f//AAH/4xgEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAEUAUQO7AvgAGgAAARQHAQYjIicBJjU0PwE2MzIfAQE2MzIfARYVA7sQ/hQQFhcQ/uMQEE4QFxcQqAF2EBcXEE4QAnMWEP4UEBABHRAXFhBOEBCoAXcQEE4QFwAAAAABAAABbgMlAkkAFAAAARUUBwYjISInJj0BNDc2MyEyFxYVAyUQEBf9SRcQEBAQFwK3FxAQAhJtFxAQEBAXbRcQEBAQFwAAAAABAAAASQMlA24ALAAAARUUBwYrARUUBwYrASInJj0BIyInJj0BNDc2OwE1NDc2OwEyFxYdATMyFxYVAyUQEBfuEBAXbhYQEO4XEBAQEBfuEBAWbhcQEO4XEBACEm0XEBDuFxAQEBAX7hAQF20XEBDuFxAQEBAX7hAQFwAAAQAAAAIAAHRSzT9fDzz1AAsEAAAAAADRsdR3AAAAANGx1HcAAAAAA7sDbgAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAADuwABAAAAAAAAAAAAAAAAAAAABwQAAAAAAAAAAAAAAAIAAAAEAABFAyUAAAMlAAAAAAAAAAoAFAAeAE4AcgCwAAEAAAAHAC0AAQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAIAAAAAQAAAAAAAgAHAGkAAQAAAAAAAwAIADkAAQAAAAAABAAIAH4AAQAAAAAABQALABgAAQAAAAAABgAIAFEAAQAAAAAACgAaAJYAAwABBAkAAQAQAAgAAwABBAkAAgAOAHAAAwABBAkAAwAQAEEAAwABBAkABAAQAIYAAwABBAkABQAWACMAAwABBAkABgAQAFkAAwABBAkACgA0ALBDaGVja2JveABDAGgAZQBjAGsAYgBvAHhWZXJzaW9uIDIuMABWAGUAcgBzAGkAbwBuACAAMgAuADBDaGVja2JveABDAGgAZQBjAGsAYgBvAHhDaGVja2JveABDAGgAZQBjAGsAYgBvAHhSZWd1bGFyAFIAZQBnAHUAbABhAHJDaGVja2JveABDAGgAZQBjAGsAYgBvAHhGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA") format('truetype');
}

/* Checkmark */

.ui.checkbox label:after,
.ui.checkbox .box:after {
  font-family: 'Checkbox';
}

/* Checked */

.ui.checkbox input:checked ~ .box:after,
.ui.checkbox input:checked ~ label:after {
  content: '\e800';
}

/* Indeterminate */

.ui.checkbox input:indeterminate ~ .box:after,
.ui.checkbox input:indeterminate ~ label:after {
  font-size: 12px;
  content: '\e801';
}

/*  UTF Reference
.check:before { content: '\e800'; }
.dash:before  { content: '\e801'; }
.plus:before { content: '\e802'; }
*/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Dimmer
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Dimmer
*******************************/

.dimmable {
  position: relative;
}

.ui.dimmer {
  display: none;
  position: absolute;
  top: 0em !important;
  left: 0em !important;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  background-color: rgba(0, 0, 0, 0.85);
  opacity: 0;
  line-height: 1;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-transition: background-color 0.5s linear;
  transition: background-color 0.5s linear;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  will-change: opacity;
  z-index: 1000;
}

/* Dimmer Content */

.ui.dimmer > .content {
  width: 100%;
  height: 100%;
  display: table;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

.ui.dimmer > .content > * {
  display: table-cell;
  vertical-align: middle;
  color: #FFFFFF;
}

/* Loose Coupling */

.ui.segment > .ui.dimmer {
  border-radius: inherit !important;
}

/*******************************
            States
*******************************/

.animating.dimmable:not(body),
.dimmed.dimmable:not(body) {
  overflow: hidden;
}

.dimmed.dimmable > .ui.animating.dimmer,
.dimmed.dimmable > .ui.visible.dimmer,
.ui.active.dimmer {
  display: block;
  opacity: 1;
}

.ui.disabled.dimmer {
  width: 0 !important;
  height: 0 !important;
}

/*******************************
           Variations
*******************************/

/*--------------
      Page
---------------*/

.ui.page.dimmer {
  position: fixed;
  -webkit-transform-style: '';
  transform-style: '';
  -webkit-perspective: 2000px;
  perspective: 2000px;
  -webkit-transform-origin: center center;
  transform-origin: center center;
}

body.animating.in.dimmable,
body.dimmed.dimmable {
  overflow: hidden;
}

body.dimmable > .dimmer {
  position: fixed;
}

/*--------------
    Blurring
---------------*/

.blurring.dimmable > :not(.dimmer) {
  -webkit-filter: blur(0px) grayscale(0);
  filter: blur(0px) grayscale(0);
  -webkit-transition: 800ms filter ease;
  transition: 800ms filter ease;
}

.blurring.dimmed.dimmable > :not(.dimmer) {
  -webkit-filter: blur(5px) grayscale(0.7);
  filter: blur(5px) grayscale(0.7);
}

/* Dimmer Color */

.blurring.dimmable > .dimmer {
  background-color: rgba(0, 0, 0, 0.6);
}

.blurring.dimmable > .inverted.dimmer {
  background-color: rgba(255, 255, 255, 0.6);
}

/*--------------
    Aligned
---------------*/

.ui.dimmer > .top.aligned.content > * {
  vertical-align: top;
}

.ui.dimmer > .bottom.aligned.content > * {
  vertical-align: bottom;
}

/*--------------
    Inverted
---------------*/

.ui.inverted.dimmer {
  background-color: rgba(255, 255, 255, 0.85);
}

.ui.inverted.dimmer > .content > * {
  color: #FFFFFF;
}

/*--------------
     Simple
---------------*/

/* Displays without javascript */

.ui.simple.dimmer {
  display: block;
  overflow: hidden;
  opacity: 1;
  width: 0%;
  height: 0%;
  z-index: -100;
  background-color: rgba(0, 0, 0, 0);
}

.dimmed.dimmable > .ui.simple.dimmer {
  overflow: visible;
  opacity: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1;
}

.ui.simple.inverted.dimmer {
  background-color: rgba(255, 255, 255, 0);
}

.dimmed.dimmable > .ui.simple.inverted.dimmer {
  background-color: rgba(255, 255, 255, 0.85);
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
        User Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Dropdown
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Dropdown
*******************************/

.ui.dropdown {
  cursor: pointer;
  position: relative;
  display: inline-block;
  outline: none;
  text-align: left;
  -webkit-transition: box-shadow 0.1s ease, width 0.1s ease;
  transition: box-shadow 0.1s ease, width 0.1s ease;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/*******************************
            Content
*******************************/

/*--------------
      Menu
---------------*/

.ui.dropdown .menu {
  cursor: auto;
  position: absolute;
  display: none;
  outline: none;
  top: 100%;
  min-width: -webkit-max-content;
  min-width: -moz-max-content;
  min-width: max-content;
  margin: 0em;
  padding: 0em 0em;
  background: #FFFFFF;
  font-size: 1em;
  text-shadow: none;
  text-align: left;
  box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
  -webkit-transition: opacity 0.1s ease;
  transition: opacity 0.1s ease;
  z-index: 11;
  will-change: transform, opacity;
}

.ui.dropdown .menu > * {
  white-space: nowrap;
}

/*--------------
  Hidden Input
---------------*/

.ui.dropdown > input:not(.search):first-child,
.ui.dropdown > select {
  display: none !important;
}

/*--------------
 Dropdown Icon
---------------*/

.ui.dropdown > .dropdown.icon {
  position: relative;
  width: auto;
  font-size: 0.85714286em;
  margin: 0em 0em 0em 1em;
}

.ui.dropdown .menu > .item .dropdown.icon {
  width: auto;
  float: right;
  margin: 0em 0em 0em 1em;
}

.ui.dropdown .menu > .item .dropdown.icon + .text {
  margin-right: 1em;
}

/*--------------
      Text
---------------*/

.ui.dropdown > .text {
  display: inline-block;
  -webkit-transition: none;
  transition: none;
}

/*--------------
    Menu Item
---------------*/

.ui.dropdown .menu > .item {
  position: relative;
  cursor: pointer;
  display: block;
  border: none;
  height: auto;
  text-align: left;
  border-top: none;
  line-height: 1em;
  color: rgba(0, 0, 0, 0.87);
  padding: 0.71428571rem 1.14285714rem !important;
  font-size: 1rem;
  text-transform: none;
  font-weight: normal;
  box-shadow: none;
  -webkit-touch-callout: none;
}

.ui.dropdown .menu > .item:first-child {
  border-top-width: 0px;
}

/*--------------
  Floated Content
---------------*/

.ui.dropdown > .text > [class*="right floated"],
.ui.dropdown .menu .item > [class*="right floated"] {
  float: right !important;
  margin-right: 0em !important;
  margin-left: 1em !important;
}

.ui.dropdown > .text > [class*="left floated"],
.ui.dropdown .menu .item > [class*="left floated"] {
  float: left !important;
  margin-left: 0em !important;
  margin-right: 1em !important;
}

.ui.dropdown .menu .item > .icon.floated,
.ui.dropdown .menu .item > .flag.floated,
.ui.dropdown .menu .item > .image.floated,
.ui.dropdown .menu .item > img.floated {
  margin-top: 0em;
}

/*--------------
  Menu Divider
---------------*/

.ui.dropdown .menu > .header {
  margin: 1rem 0rem 0.75rem;
  padding: 0em 1.14285714rem;
  color: rgba(0, 0, 0, 0.85);
  font-size: 0.78571429em;
  font-weight: bold;
  text-transform: uppercase;
}

.ui.dropdown .menu > .divider {
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  height: 0em;
  margin: 0.5em 0em;
}

.ui.dropdown .menu > .input {
  width: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 1.14285714rem 0.71428571rem;
  min-width: 10rem;
}

.ui.dropdown .menu > .header + .input {
  margin-top: 0em;
}

.ui.dropdown .menu > .input:not(.transparent) input {
  padding: 0.5em 1em;
}

.ui.dropdown .menu > .input:not(.transparent) .button,
.ui.dropdown .menu > .input:not(.transparent) .icon,
.ui.dropdown .menu > .input:not(.transparent) .label {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

/*-----------------
  Item Description
-------------------*/

.ui.dropdown > .text > .description,
.ui.dropdown .menu > .item > .description {
  float: right;
  margin: 0em 0em 0em 1em;
  color: rgba(0, 0, 0, 0.4);
}

/*-----------------
       Message
-------------------*/

.ui.dropdown .menu > .message {
  padding: 0.71428571rem 1.14285714rem;
  font-weight: normal;
}

.ui.dropdown .menu > .message:not(.ui) {
  color: rgba(0, 0, 0, 0.4);
}

/*--------------
    Sub Menu
---------------*/

.ui.dropdown .menu .menu {
  top: 0% !important;
  left: 100% !important;
  right: auto !important;
  margin: 0em 0em 0em -0.5em !important;
  border-radius: 0.28571429rem !important;
  z-index: 21 !important;
}

/* Hide Arrow */

.ui.dropdown .menu .menu:after {
  display: none;
}

/*--------------
   Sub Elements
---------------*/

/* Icons / Flags / Labels / Image */

.ui.dropdown > .text > .icon,
.ui.dropdown > .text > .label,
.ui.dropdown > .text > .flag,
.ui.dropdown > .text > img,
.ui.dropdown > .text > .image {
  margin-top: 0em;
}

.ui.dropdown .menu > .item > .icon,
.ui.dropdown .menu > .item > .label,
.ui.dropdown .menu > .item > .flag,
.ui.dropdown .menu > .item > .image,
.ui.dropdown .menu > .item > img {
  margin-top: 0em;
}

.ui.dropdown > .text > .icon,
.ui.dropdown > .text > .label,
.ui.dropdown > .text > .flag,
.ui.dropdown > .text > img,
.ui.dropdown > .text > .image,
.ui.dropdown .menu > .item > .icon,
.ui.dropdown .menu > .item > .label,
.ui.dropdown .menu > .item > .flag,
.ui.dropdown .menu > .item > .image,
.ui.dropdown .menu > .item > img {
  margin-left: 0em;
  float: none;
  margin-right: 0.71428571rem;
}

/*--------------
     Image
---------------*/

.ui.dropdown > .text > img,
.ui.dropdown > .text > .image,
.ui.dropdown .menu > .item > .image,
.ui.dropdown .menu > .item > img {
  display: inline-block;
  vertical-align: middle;
  width: auto;
  max-height: 2em;
}

/*******************************
            Coupling
*******************************/

/*--------------
      Menu
---------------*/

/* Remove Menu Item Divider */

.ui.dropdown .ui.menu > .item:before,
.ui.menu .ui.dropdown .menu > .item:before {
  display: none;
}

/* Prevent Menu Item Border */

.ui.menu .ui.dropdown .menu .active.item {
  border-left: none;
}

/* Automatically float dropdown menu right on last menu item */

.ui.menu .right.menu .dropdown:last-child .menu,
.ui.menu .right.dropdown.item .menu,
.ui.buttons > .ui.dropdown:last-child .menu {
  left: auto;
  right: 0em;
}

/*--------------
      Label
---------------*/

/* Dropdown Menu */

.ui.label.dropdown .menu {
  min-width: 100%;
}

/*--------------
     Button
---------------*/

/* No Margin On Icon Button */

.ui.dropdown.icon.button > .dropdown.icon {
  margin: 0em;
}

.ui.button.dropdown .menu {
  min-width: 100%;
}

/*******************************
              Types
*******************************/

/*--------------
    Selection
---------------*/

/* Displays like a select box */

.ui.selection.dropdown {
  cursor: pointer;
  word-wrap: break-word;
  line-height: 1em;
  white-space: normal;
  outline: 0;
  -webkit-transform: rotateZ(0deg);
  transform: rotateZ(0deg);
  min-width: 14em;
  min-height: 2.7142em;
  background: #FFFFFF;
  display: inline-block;
  padding: 0.78571429em 2.6em 0.78571429em 1em;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
  -webkit-transition: box-shadow 0.1s ease, width 0.1s ease;
  transition: box-shadow 0.1s ease, width 0.1s ease;
}

.ui.selection.dropdown.visible,
.ui.selection.dropdown.active {
  z-index: 10;
}

select.ui.dropdown {
  height: 38px;
  padding: 0.5em;
  border: 1px solid rgba(34, 36, 38, 0.15);
  visibility: visible;
}

.ui.selection.dropdown > .search.icon,
.ui.selection.dropdown > .delete.icon,
.ui.selection.dropdown > .dropdown.icon {
  cursor: pointer;
  position: absolute;
  top: auto;
  width: auto;
  z-index: 3;
  margin: -0.78571429em;
  padding: 0.78571429em;
  right: 1em;
  opacity: 0.8;
  -webkit-transition: opacity 0.1s ease;
  transition: opacity 0.1s ease;
}

/* Compact */

.ui.compact.selection.dropdown {
  min-width: 0px;
}

/*  Selection Menu */

.ui.selection.dropdown .menu {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-overflow-scrolling: touch;
  border-top-width: 0px !important;
  width: auto;
  outline: none;
  margin: 0px -1px;
  min-width: calc(100% +  2px );
  width: calc(100% +  2px );
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
  box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
  -webkit-transition: opacity 0.1s ease;
  transition: opacity 0.1s ease;
}

.ui.selection.dropdown .menu:after,
.ui.selection.dropdown .menu:before {
  display: none;
}

/*--------------
    Message
---------------*/

.ui.selection.dropdown .menu > .message {
  padding: 0.71428571rem 1.14285714rem;
}

@media only screen and (max-width: 767px) {
  .ui.selection.dropdown .menu {
    max-height: 7.58571429rem;
  }
}

@media only screen and (min-width: 768px) {
  .ui.selection.dropdown .menu {
    max-height: 10.11428571rem;
  }
}

@media only screen and (min-width: 992px) {
  .ui.selection.dropdown .menu {
    max-height: 15.17142857rem;
  }
}

@media only screen and (min-width: 1920px) {
  .ui.selection.dropdown .menu {
    max-height: 20.22857143rem;
  }
}

/* Menu Item */

.ui.selection.dropdown .menu > .item {
  border-top: 1px solid #FAFAFA;
  padding: 0.71428571rem 1.14285714rem !important;
  white-space: normal;
  word-wrap: normal;
}

/* Hover */

.ui.selection.dropdown:hover {
  border-color: rgba(34, 36, 38, 0.35);
  box-shadow: none;
}

/* Active */

.ui.selection.active.dropdown {
  border-color: #96C8DA;
  box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
}

.ui.selection.active.dropdown .menu {
  border-color: #96C8DA;
  box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
}

/* Focus */

.ui.selection.dropdown:focus {
  border-color: #96C8DA;
  box-shadow: none;
}

.ui.selection.dropdown:focus .menu {
  border-color: #96C8DA;
  box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
}

/* Visible */

.ui.selection.visible.dropdown > .text:not(.default) {
  font-weight: normal;
  color: rgba(0, 0, 0, 0.8);
}

/* Visible Hover */

.ui.selection.active.dropdown:hover {
  border-color: #96C8DA;
  box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
}

.ui.selection.active.dropdown:hover .menu {
  border-color: #96C8DA;
  box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
}

/* Dropdown Icon */

.ui.active.selection.dropdown > .dropdown.icon,
.ui.visible.selection.dropdown > .dropdown.icon {
  opacity: 1;
  z-index: 3;
}

/* Connecting Border */

.ui.active.selection.dropdown {
  border-bottom-left-radius: 0em !important;
  border-bottom-right-radius: 0em !important;
}

/*--------------
   Searchable
---------------*/

/* Search Selection */

.ui.search.dropdown {
  min-width: '';
}

/* Search Dropdown */

.ui.search.dropdown > input.search {
  background: none transparent !important;
  border: none !important;
  box-shadow: none !important;
  cursor: pointer;
  top: 0em;
  left: 0em;
  width: 100%;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  padding: inherit;
}

/* Text Layering */

.ui.search.dropdown > input.search {
  position: absolute;
  z-index: 2;
}

.ui.search.dropdown > .text {
  cursor: text;
  position: relative;
  z-index: 3;
}

/* Search Selection */

.ui.search.selection.dropdown > input.search {
  line-height: 1.2142em;
  padding: 0.67861429em 2.6em 0.67861429em 1em;
}

/* Active/Visible Search */

.ui.search.dropdown.active > input.search,
.ui.search.dropdown.visible > input.search {
  cursor: auto;
}

.ui.search.dropdown.active > .text,
.ui.search.dropdown.visible > .text {
  pointer-events: none;
}

/* Filtered Text */

.ui.active.search.dropdown input.search:focus + .text .icon,
.ui.active.search.dropdown input.search:focus + .text .flag {
  opacity: 0.45;
}

.ui.active.search.dropdown input.search:focus + .text {
  color: rgba(0, 0, 0, 0.4) !important;
}

/* Search Menu */

.ui.search.dropdown .menu {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-overflow-scrolling: touch;
}

@media only screen and (max-width: 767px) {
  .ui.search.dropdown .menu {
    max-height: 7.58571429rem;
  }
}

@media only screen and (min-width: 768px) {
  .ui.search.dropdown .menu {
    max-height: 10.11428571rem;
  }
}

@media only screen and (min-width: 992px) {
  .ui.search.dropdown .menu {
    max-height: 15.17142857rem;
  }
}

@media only screen and (min-width: 1920px) {
  .ui.search.dropdown .menu {
    max-height: 20.22857143rem;
  }
}

/*--------------
    Multiple
---------------*/

/* Multiple Selection */

.ui.multiple.dropdown {
  padding: 0.22620476em 2.6em 0.22620476em 0.28571429em;
}

.ui.multiple.dropdown .menu {
  cursor: auto;
}

/* Multiple Search Selection */

.ui.multiple.search.dropdown,
.ui.multiple.search.dropdown > input.search {
  cursor: text;
}

/* Selection Label */

.ui.multiple.dropdown > .label {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-block;
  vertical-align: top;
  white-space: normal;
  font-size: 1em;
  padding: 0.35714286em 0.71428571em;
  margin: 0.21428571em 0.28571429rem 0.21428571em 0em;
  box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;
}

/* Dropdown Icon */

.ui.multiple.dropdown .dropdown.icon {
  margin: 0em -0.71428571em 0em 0em;
  padding: 0.5em;
}

/* Text */

.ui.multiple.dropdown > .text {
  position: static;
  padding: 0;
  max-width: 100%;
  margin: 0.45240952em 0em 0.45240952em 0.71428571em;
  line-height: 1.2142em;
}

.ui.multiple.dropdown > .label ~ .text {
  display: none;
}

/*-----------------
  Multiple Search
-----------------*/

/* Prompt Text */

.ui.multiple.search.dropdown > .text {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  padding: inherit;
  margin: 0.45240952em 0em 0.45240952em 0.71428571em;
  line-height: 1.2142em;
}

.ui.multiple.search.dropdown > .label ~ .text {
  display: none;
}

/* Search */

.ui.multiple.search.dropdown > input.search {
  position: static;
  padding: 0;
  max-width: 100%;
  margin: 0.45240952em 0em 0.45240952em 0.71428571em;
  width: 2.2em;
  line-height: 1.2142em;
}

/*--------------
     Inline
---------------*/

.ui.inline.dropdown {
  cursor: pointer;
  display: inline-block;
  color: inherit;
}

.ui.inline.dropdown .dropdown.icon {
  margin: 0em 0.5em 0em 0.25em;
  vertical-align: baseline;
}

.ui.inline.dropdown > .text {
  font-weight: bold;
}

.ui.inline.dropdown .menu {
  cursor: auto;
  margin-top: 0.25em;
  border-radius: 0.28571429rem;
}

/*******************************
            States
*******************************/

/*--------------------
        Active
----------------------*/

/* Menu Item Active */

.ui.dropdown .menu .active.item {
  background: transparent;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.95);
  box-shadow: none;
  z-index: 12;
}

/*--------------------
        Hover
----------------------*/

/* Menu Item Hover */

.ui.dropdown .menu > .item:hover {
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
  z-index: 13;
}

/*--------------------
       Loading
---------------------*/

/* Positioning */

.ui.loading.dropdown > i.icon:before,
.ui.loading.dropdown > i.icon:after {
  left: 30% !important;
}

.ui.loading.dropdown > i.icon {
  top: 50% !important;
}

.ui.multiple.loading.dropdown > i.icon:before,
.ui.multiple.loading.dropdown > i.icon:after {
  top: 0% !important;
  left: 0% !important;
}

.ui.loading.dropdown > i.icon:before {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  margin: -0.64285714em 0em 0em -0.64285714em;
  width: 1.28571429em;
  height: 1.28571429em;
  border-radius: 500rem;
  border: 0.2em solid rgba(0, 0, 0, 0.1);
}

.ui.loading.dropdown > i.icon:after {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  box-shadow: 0px 0px 0px 1px transparent;
  margin: -0.64285714em 0em 0em -0.64285714em;
  width: 1.28571429em;
  height: 1.28571429em;
  -webkit-animation: dropdown-spin 0.6s linear;
  animation: dropdown-spin 0.6s linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  border-radius: 500rem;
  border-color: #767676 transparent transparent;
  border-style: solid;
  border-width: 0.2em;
}

/* Coupling */

.ui.loading.dropdown.button > i.icon:before,
.ui.loading.dropdown.button > i.icon:after {
  display: none;
}

@-webkit-keyframes dropdown-spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes dropdown-spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/*--------------------
     Default Text
----------------------*/

.ui.dropdown > .default.text,
.ui.default.dropdown > .text {
  color: rgba(179, 179, 179, 0.7);
}

.ui.dropdown:hover > .default.text,
.ui.default.dropdown:hover > .text {
  color: rgba(179, 179, 179, 0.7);
}

/*--------------------
        Loading
----------------------*/

.ui.loading.dropdown > .text {
  -webkit-transition: none;
  transition: none;
}

/* Used To Check Position */

.ui.dropdown .loading.menu {
  display: block;
  visibility: hidden;
  z-index: -1;
}

/*--------------------
    Keyboard Select
----------------------*/

/* Selected Item */

.ui.dropdown.selected,
.ui.dropdown .menu .selected.item {
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.95);
}

/*--------------------
    Search Filtered
----------------------*/

/* Filtered Item */

.ui.dropdown > .filtered.text {
  visibility: hidden;
}

.ui.dropdown .filtered.item {
  display: none !important;
}

/*--------------------
        Error
----------------------*/

.ui.dropdown.error,
.ui.dropdown.error > .text,
.ui.dropdown.error > .default.text {
  color: #9F3A38;
}

.ui.selection.dropdown.error {
  background: #FFF6F6;
  border-color: #E0B4B4;
}

.ui.selection.dropdown.error:hover {
  border-color: #E0B4B4;
}

.ui.dropdown.error > .menu,
.ui.dropdown.error > .menu .menu {
  border-color: #E0B4B4;
}

.ui.dropdown.error > .menu > .item {
  color: #9F3A38;
}

.ui.multiple.selection.error.dropdown > .label {
  border-color: #E0B4B4;
}

/* Item Hover */

.ui.dropdown.error > .menu > .item:hover {
  background-color: #FFF2F2;
}

/* Item Active */

.ui.dropdown.error > .menu .active.item {
  background-color: #FDCFCF;
}

/*--------------------
        Disabled
----------------------*/

/* Disabled */

.ui.disabled.dropdown,
.ui.dropdown .menu > .disabled.item {
  cursor: default;
  pointer-events: none;
  opacity: 0.45;
}

/*******************************
           Variations
*******************************/

/*--------------
    Direction
---------------*/

/* Flyout Direction */

.ui.dropdown .menu {
  left: 0px;
}

/* Default Side (Right) */

.ui.dropdown .right.menu > .menu,
.ui.dropdown .menu .right.menu {
  left: 100% !important;
  right: auto !important;
  border-radius: 0.28571429rem !important;
}

/* Left Flyout Menu */

.ui.dropdown > .left.menu .menu,
.ui.dropdown .menu .left.menu {
  left: auto !important;
  right: 100% !important;
  border-radius: 0.28571429rem !important;
}

.ui.dropdown .item .left.dropdown.icon,
.ui.dropdown .left.menu .item .dropdown.icon {
  width: auto;
  float: left;
  margin: 0em 0.71428571rem 0em 0em;
}

.ui.dropdown .item .left.dropdown.icon,
.ui.dropdown .left.menu .item .dropdown.icon {
  width: auto;
  float: left;
  margin: 0em 0.71428571rem 0em 0em;
}

.ui.dropdown .item .left.dropdown.icon + .text,
.ui.dropdown .left.menu .item .dropdown.icon + .text {
  margin-left: 1em;
}

/*--------------
     Upward
---------------*/

/* Upward Main Menu */

.ui.upward.dropdown > .menu {
  top: auto;
  bottom: 100%;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

/* Upward Sub Menu */

.ui.dropdown .upward.menu {
  top: auto !important;
  bottom: 0 !important;
}

/* Active Upward */

.ui.simple.upward.active.dropdown,
.ui.simple.upward.dropdown:hover {
  border-radius: 0.28571429rem 0.28571429rem 0em 0em !important;
}

.ui.upward.dropdown.button:not(.pointing):not(.floating).active {
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

/* Selection */

.ui.upward.selection.dropdown .menu {
  border-top-width: 1px !important;
  border-bottom-width: 0px !important;
  box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);
}

.ui.upward.selection.dropdown:hover {
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);
}

/* Active Upward */

.ui.active.upward.selection.dropdown {
  border-radius: 0em 0em 0.28571429rem 0.28571429rem !important;
}

/* Visible Upward */

.ui.upward.selection.dropdown.visible {
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);
  border-radius: 0em 0em 0.28571429rem 0.28571429rem !important;
}

/* Visible Hover Upward */

.ui.upward.active.selection.dropdown:hover {
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
}

.ui.upward.active.selection.dropdown:hover .menu {
  box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);
}

/*--------------
     Simple
---------------*/

/*  Selection Menu */

.ui.scrolling.dropdown .menu,
.ui.dropdown .scrolling.menu {
  overflow-x: hidden;
  overflow-y: auto;
}

.ui.scrolling.dropdown .menu {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-overflow-scrolling: touch;
  min-width: 100% !important;
  width: auto !important;
}

.ui.dropdown .scrolling.menu {
  position: static;
  overflow-y: auto;
  border: none;
  box-shadow: none !important;
  border-radius: 0 !important;
  margin: 0 !important;
  min-width: 100% !important;
  width: auto !important;
  border-top: 1px solid rgba(34, 36, 38, 0.15);
}

.ui.scrolling.dropdown .menu .item.item.item,
.ui.dropdown .scrolling.menu > .item.item.item {
  border-top: none;
  padding-right: calc( 1.14285714rem  +  17px ) !important;
}

.ui.scrolling.dropdown .menu .item:first-child,
.ui.dropdown .scrolling.menu .item:first-child {
  border-top: none;
}

.ui.dropdown > .animating.menu .scrolling.menu,
.ui.dropdown > .visible.menu .scrolling.menu {
  display: block;
}

/* Scrollbar in IE */

@media all and (-ms-high-contrast: none) {
  .ui.scrolling.dropdown .menu,
  .ui.dropdown .scrolling.menu {
    min-width: calc(100% -  17px );
  }
}

@media only screen and (max-width: 767px) {
  .ui.scrolling.dropdown .menu,
  .ui.dropdown .scrolling.menu {
    max-height: 9.71428571rem;
  }
}

@media only screen and (min-width: 768px) {
  .ui.scrolling.dropdown .menu,
  .ui.dropdown .scrolling.menu {
    max-height: 14.57142857rem;
  }
}

@media only screen and (min-width: 992px) {
  .ui.scrolling.dropdown .menu,
  .ui.dropdown .scrolling.menu {
    max-height: 19.42857143rem;
  }
}

@media only screen and (min-width: 1920px) {
  .ui.scrolling.dropdown .menu,
  .ui.dropdown .scrolling.menu {
    max-height: 19.42857143rem;
  }
}

/*--------------
     Simple
---------------*/

/* Displays without javascript */

.ui.simple.dropdown .menu:before,
.ui.simple.dropdown .menu:after {
  display: none;
}

.ui.simple.dropdown .menu {
  position: absolute;
  display: block;
  overflow: hidden;
  top: -9999px !important;
  opacity: 0;
  width: 0;
  height: 0;
  -webkit-transition: opacity 0.1s ease;
  transition: opacity 0.1s ease;
}

.ui.simple.active.dropdown,
.ui.simple.dropdown:hover {
  border-bottom-left-radius: 0em !important;
  border-bottom-right-radius: 0em !important;
}

.ui.simple.active.dropdown > .menu,
.ui.simple.dropdown:hover > .menu {
  overflow: visible;
  width: auto;
  height: auto;
  top: 100% !important;
  opacity: 1;
}

.ui.simple.dropdown > .menu > .item:active > .menu,
.ui.simple.dropdown:hover > .menu > .item:hover > .menu {
  overflow: visible;
  width: auto;
  height: auto;
  top: 0% !important;
  left: 100% !important;
  opacity: 1;
}

.ui.simple.disabled.dropdown:hover .menu {
  display: none;
  height: 0px;
  width: 0px;
  overflow: hidden;
}

/* Visible */

.ui.simple.visible.dropdown > .menu {
  display: block;
}

/*--------------
      Fluid
---------------*/

.ui.fluid.dropdown {
  display: block;
  width: 100%;
  min-width: 0em;
}

.ui.fluid.dropdown > .dropdown.icon {
  float: right;
}

/*--------------
    Floating
---------------*/

.ui.floating.dropdown .menu {
  left: 0;
  right: auto;
  box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.08) !important;
  border-radius: 0.28571429rem !important;
}

.ui.floating.dropdown > .menu {
  margin-top: 0.5em !important;
  border-radius: 0.28571429rem !important;
}

/*--------------
     Pointing
---------------*/

.ui.pointing.dropdown > .menu {
  top: 100%;
  margin-top: 0.71428571rem;
  border-radius: 0.28571429rem;
}

.ui.pointing.dropdown > .menu:after {
  display: block;
  position: absolute;
  pointer-events: none;
  content: '';
  visibility: visible;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 0.5em;
  height: 0.5em;
  box-shadow: -1px -1px 0px 1px rgba(34, 36, 38, 0.15);
  background: #FFFFFF;
  z-index: 2;
}

.ui.pointing.dropdown > .menu:after {
  top: -0.25em;
  left: 50%;
  margin: 0em 0em 0em -0.25em;
}

/* Top Left Pointing */

.ui.top.left.pointing.dropdown > .menu {
  top: 100%;
  bottom: auto;
  left: 0%;
  right: auto;
  margin: 1em 0em 0em;
}

.ui.top.left.pointing.dropdown > .menu {
  top: 100%;
  bottom: auto;
  left: 0%;
  right: auto;
  margin: 1em 0em 0em;
}

.ui.top.left.pointing.dropdown > .menu:after {
  top: -0.25em;
  left: 1em;
  right: auto;
  margin: 0em;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* Top Right  Pointing */

.ui.top.right.pointing.dropdown > .menu {
  top: 100%;
  bottom: auto;
  right: 0%;
  left: auto;
  margin: 1em 0em 0em;
}

.ui.top.right.pointing.dropdown > .menu:after {
  top: -0.25em;
  left: auto;
  right: 1em;
  margin: 0em;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* Left Pointing */

.ui.left.pointing.dropdown > .menu {
  top: 0%;
  left: 100%;
  right: auto;
  margin: 0em 0em 0em 1em;
}

.ui.left.pointing.dropdown > .menu:after {
  top: 1em;
  left: -0.25em;
  margin: 0em 0em 0em 0em;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

/* Right Pointing */

.ui.right.pointing.dropdown > .menu {
  top: 0%;
  left: auto;
  right: 100%;
  margin: 0em 1em 0em 0em;
}

.ui.right.pointing.dropdown > .menu:after {
  top: 1em;
  left: auto;
  right: -0.25em;
  margin: 0em 0em 0em 0em;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}

/* Bottom Pointing */

.ui.bottom.pointing.dropdown > .menu {
  top: auto;
  bottom: 100%;
  left: 0%;
  right: auto;
  margin: 0em 0em 1em;
}

.ui.bottom.pointing.dropdown > .menu:after {
  top: auto;
  bottom: -0.25em;
  right: auto;
  margin: 0em;
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

/* Reverse Sub-Menu Direction */

.ui.bottom.pointing.dropdown > .menu .menu {
  top: auto !important;
  bottom: 0px !important;
}

/* Bottom Left */

.ui.bottom.left.pointing.dropdown > .menu {
  left: 0%;
  right: auto;
}

.ui.bottom.left.pointing.dropdown > .menu:after {
  left: 1em;
  right: auto;
}

/* Bottom Right */

.ui.bottom.right.pointing.dropdown > .menu {
  right: 0%;
  left: auto;
}

.ui.bottom.right.pointing.dropdown > .menu:after {
  left: auto;
  right: 1em;
}

/* Upward pointing */

.ui.upward.pointing.dropdown > .menu,
.ui.upward.top.pointing.dropdown > .menu {
  top: auto;
  bottom: 100%;
  margin: 0em 0em 0.71428571rem;
  border-radius: 0.28571429rem;
}

.ui.upward.pointing.dropdown > .menu:after,
.ui.upward.top.pointing.dropdown > .menu:after {
  top: 100%;
  bottom: auto;
  box-shadow: 1px 1px 0px 1px rgba(34, 36, 38, 0.15);
  margin: -0.25em 0em 0em;
}

/*******************************
         Theme Overrides
*******************************/

/* Dropdown Carets */

@font-face {
  font-family: 'Dropdown';
  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMggjB5AAAAC8AAAAYGNtYXAPfuIIAAABHAAAAExnYXNwAAAAEAAAAWgAAAAIZ2x5Zjo82LgAAAFwAAABVGhlYWQAQ88bAAACxAAAADZoaGVhAwcB6QAAAvwAAAAkaG10eAS4ABIAAAMgAAAAIGxvY2EBNgDeAAADQAAAABJtYXhwAAoAFgAAA1QAAAAgbmFtZVcZpu4AAAN0AAABRXBvc3QAAwAAAAAEvAAAACAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADw2gHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIPDa//3//wAAAAAAIPDX//3//wAB/+MPLQADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAIABJQElABMAABM0NzY3BTYXFhUUDwEGJwYvASY1AAUGBwEACAUGBoAFCAcGgAUBEgcGBQEBAQcECQYHfwYBAQZ/BwYAAQAAAG4BJQESABMAADc0PwE2MzIfARYVFAcGIyEiJyY1AAWABgcIBYAGBgUI/wAHBgWABwaABQWABgcHBgUFBgcAAAABABIASQC3AW4AEwAANzQ/ATYXNhcWHQEUBwYnBi8BJjUSBoAFCAcFBgYFBwgFgAbbBwZ/BwEBBwQJ/wgEBwEBB38GBgAAAAABAAAASQClAW4AEwAANxE0NzYzMh8BFhUUDwEGIyInJjUABQYHCAWABgaABQgHBgVbAQAIBQYGgAUIBwWABgYFBwAAAAEAAAABAADZuaKOXw889QALAgAAAAAA0ABHWAAAAADQAEdYAAAAAAElAW4AAAAIAAIAAAAAAAAAAQAAAeD/4AAAAgAAAAAAASUAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAABAAAAASUAAAElAAAAtwASALcAAAAAAAAACgAUAB4AQgBkAIgAqgAAAAEAAAAIABQAAQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAOAAAAAQAAAAAAAgAOAEcAAQAAAAAAAwAOACQAAQAAAAAABAAOAFUAAQAAAAAABQAWAA4AAQAAAAAABgAHADIAAQAAAAAACgA0AGMAAwABBAkAAQAOAAAAAwABBAkAAgAOAEcAAwABBAkAAwAOACQAAwABBAkABAAOAFUAAwABBAkABQAWAA4AAwABBAkABgAOADkAAwABBAkACgA0AGMAaQBjAG8AbQBvAG8AbgBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AbgBSAGUAZwB1AGwAYQByAGkAYwBvAG0AbwBvAG4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format('truetype'), url("data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AAAVwAAoAAAAABSgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAdkAAAHZLDXE/09TLzIAAALQAAAAYAAAAGAIIweQY21hcAAAAzAAAABMAAAATA9+4ghnYXNwAAADfAAAAAgAAAAIAAAAEGhlYWQAAAOEAAAANgAAADYAQ88baGhlYQAAA7wAAAAkAAAAJAMHAelobXR4AAAD4AAAACAAAAAgBLgAEm1heHAAAAQAAAAABgAAAAYACFAAbmFtZQAABAgAAAFFAAABRVcZpu5wb3N0AAAFUAAAACAAAAAgAAMAAAEABAQAAQEBCGljb21vb24AAQIAAQA6+BwC+BsD+BgEHgoAGVP/i4seCgAZU/+LiwwHi2v4lPh0BR0AAACIDx0AAACNER0AAAAJHQAAAdASAAkBAQgPERMWGyAlKmljb21vb25pY29tb29udTB1MXUyMHVGMEQ3dUYwRDh1RjBEOXVGMERBAAACAYkABgAIAgABAAQABwAKAA0AVgCfAOgBL/yUDvyUDvyUDvuUDvtvi/emFYuQjZCOjo+Pj42Qiwj3lIsFkIuQiY6Hj4iNhouGi4aJh4eHCPsU+xQFiIiGiYaLhouHjYeOCPsU9xQFiI+Jj4uQCA77b4v3FBWLkI2Pjo8I9xT3FAWPjo+NkIuQi5CJjogI9xT7FAWPh42Hi4aLhomHh4eIiIaJhosI+5SLBYaLh42HjoiPiY+LkAgO+92d928Vi5CNkI+OCPcU9xQFjo+QjZCLkIuPiY6Hj4iNhouGCIv7lAWLhomHh4iIh4eJhouGi4aNiI8I+xT3FAWHjomPi5AIDvvdi+YVi/eUBYuQjZCOjo+Pj42Qi5CLkImOhwj3FPsUBY+IjYaLhouGiYeHiAj7FPsUBYiHhomGi4aLh42Hj4iOiY+LkAgO+JQU+JQViwwKAAAAAAMCAAGQAAUAAAFMAWYAAABHAUwBZgAAAPUAGQCEAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8NoB4P/g/+AB4AAgAAAAAQAAAAAAAAAAAAAAIAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAA4AAAACgAIAAIAAgABACDw2v/9//8AAAAAACDw1//9//8AAf/jDy0AAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAABAAA5emozXw889QALAgAAAAAA0ABHWAAAAADQAEdYAAAAAAElAW4AAAAIAAIAAAAAAAAAAQAAAeD/4AAAAgAAAAAAASUAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAABAAAAASUAAAElAAAAtwASALcAAAAAUAAACAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIADgBHAAEAAAAAAAMADgAkAAEAAAAAAAQADgBVAAEAAAAAAAUAFgAOAAEAAAAAAAYABwAyAAEAAAAAAAoANABjAAMAAQQJAAEADgAAAAMAAQQJAAIADgBHAAMAAQQJAAMADgAkAAMAAQQJAAQADgBVAAMAAQQJAAUAFgAOAAMAAQQJAAYADgA5AAMAAQQJAAoANABjAGkAYwBvAG0AbwBvAG4AVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG4AUgBlAGcAdQBsAGEAcgBpAGMAbwBtAG8AbwBuAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA") format('woff');
  font-weight: normal;
  font-style: normal;
}

.ui.dropdown > .dropdown.icon {
  font-family: 'Dropdown';
  line-height: 1;
  height: 1em;
  width: 1.23em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-weight: normal;
  font-style: normal;
  text-align: center;
}

.ui.dropdown > .dropdown.icon {
  width: auto;
}

.ui.dropdown > .dropdown.icon:before {
  content: '\f0d7';
}

/* Sub Menu */

.ui.dropdown .menu .item .dropdown.icon:before {
  content: '\f0da' ;
}

.ui.dropdown .item .left.dropdown.icon:before,
.ui.dropdown .left.menu .item .dropdown.icon:before {
  content: "\f0d9" ;
}

/* Vertical Menu Dropdown */

.ui.vertical.menu .dropdown.item > .dropdown.icon:before {
  content: "\f0da" ;
}

/* Icons for Reference
.dropdown.down.icon {
  content: "\f0d7";
}
.dropdown.up.icon {
  content: "\f0d8";
}
.dropdown.left.icon {
  content: "\f0d9";
}
.dropdown.icon.icon {
  content: "\f0da";
}
*/

/*******************************
        User Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Video
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Types
*******************************/

.ui.embed {
  position: relative;
  max-width: 100%;
  height: 0px;
  overflow: hidden;
  background: #DCDDDE;
  padding-bottom: 56.25%;
}

/*-----------------
  Embedded Content
------------------*/

.ui.embed iframe,
.ui.embed embed,
.ui.embed object {
  position: absolute;
  border: none;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  margin: 0em;
  padding: 0em;
}

/*-----------------
      Embed
------------------*/

.ui.embed > .embed {
  display: none;
}

/*--------------
   Placeholder
---------------*/

.ui.embed > .placeholder {
  position: absolute;
  cursor: pointer;
  top: 0px;
  left: 0px;
  display: block;
  width: 100%;
  height: 100%;
  background-color: radial-gradient(transparent 45%, rgba(0, 0, 0, 0.3));
}

/*--------------
      Icon
---------------*/

.ui.embed > .icon {
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.ui.embed > .icon:after {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  z-index: 3;
  content: '';
  background: -webkit-radial-gradient(transparent 45%, rgba(0, 0, 0, 0.3));
  background: radial-gradient(transparent 45%, rgba(0, 0, 0, 0.3));
  opacity: 0.5;
  -webkit-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
}

.ui.embed > .icon:before {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 4;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  color: #FFFFFF;
  font-size: 6rem;
  text-shadow: 0px 2px 10px rgba(34, 36, 38, 0.2);
  -webkit-transition: opacity 0.5s ease, color 0.5s ease;
  transition: opacity 0.5s ease, color 0.5s ease;
  z-index: 10;
}

/*******************************
            States
*******************************/

/*--------------
     Hover
---------------*/

.ui.embed .icon:hover:after {
  background: -webkit-radial-gradient(transparent 45%, rgba(0, 0, 0, 0.3));
  background: radial-gradient(transparent 45%, rgba(0, 0, 0, 0.3));
  opacity: 1;
}

.ui.embed .icon:hover:before {
  color: #FFFFFF;
}

/*--------------
     Active
---------------*/

.ui.active.embed > .icon,
.ui.active.embed > .placeholder {
  display: none;
}

.ui.active.embed > .embed {
  display: block;
}

/*******************************
        Video Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/

/*******************************
          Variations
*******************************/

.ui.square.embed {
  padding-bottom: 100%;
}

.ui[class*="4:3"].embed {
  padding-bottom: 75%;
}

.ui[class*="16:9"].embed {
  padding-bottom: 56.25%;
}

.ui[class*="21:9"].embed {
  padding-bottom: 42.85714286%;
}
/*!
 * # Semantic UI 2.1.8 - Modal
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
             Modal
*******************************/

.ui.modal {
  display: none;
  position: fixed;
  z-index: 1001;
  top: 50%;
  left: 50%;
  text-align: left;
  background: #FFFFFF;
  border: none;
  box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.2), 1px 3px 15px 2px rgba(0, 0, 0, 0.2);
  -webkit-transform-origin: 50% 25%;
  transform-origin: 50% 25%;
  border-radius: 0.28571429rem;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  will-change: top, left, margin, transform, opacity;
}

.ui.modal > :first-child:not(.icon),
.ui.modal > .icon:first-child + * {
  border-top-left-radius: 0.28571429rem;
  border-top-right-radius: 0.28571429rem;
}

.ui.modal > :last-child {
  border-bottom-left-radius: 0.28571429rem;
  border-bottom-right-radius: 0.28571429rem;
}

/*******************************
            Content
*******************************/

/*--------------
     Close
---------------*/

.ui.modal > .close {
  cursor: pointer;
  position: absolute;
  top: -2.5rem;
  right: -2.5rem;
  z-index: 1;
  opacity: 0.8;
  font-size: 1.25em;
  color: #FFFFFF;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0.625rem 0rem 0rem 0rem;
}

.ui.modal > .close:hover {
  opacity: 1;
}

/*--------------
     Header
---------------*/

.ui.modal > .header {
  display: block;
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  background: #FFFFFF;
  margin: 0em;
  padding: 1.25rem 1.5rem;
  box-shadow: none;
  color: rgba(0, 0, 0, 0.85);
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
}

.ui.modal > .header:not(.ui) {
  font-size: 1.42857143rem;
  line-height: 1.2857em;
  font-weight: bold;
}

/*--------------
     Content
---------------*/

.ui.modal > .content {
  display: block;
  width: 100%;
  font-size: 1em;
  line-height: 1.4;
  padding: 1.5rem;
  background: #FFFFFF;
}

.ui.modal > .image.content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}

/* Image */

.ui.modal > .content > .image {
  display: block;
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: '';
  -webkit-align-self: top;
  -ms-flex-item-align: top;
  align-self: top;
}

.ui.modal > [class*="top aligned"] {
  -webkit-align-self: top;
  -ms-flex-item-align: top;
  align-self: top;
}

.ui.modal > [class*="middle aligned"] {
  -webkit-align-self: middle;
  -ms-flex-item-align: middle;
  align-self: middle;
}

.ui.modal > [class*="stretched"] {
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
}

/* Description */

.ui.modal > .content > .description {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  min-width: 0px;
  -webkit-align-self: top;
  -ms-flex-item-align: top;
  align-self: top;
}

.ui.modal > .content > .icon + .description,
.ui.modal > .content > .image + .description {
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  min-width: '';
  width: auto;
  padding-left: 2em;
}

/*rtl:ignore*/

.ui.modal > .content > .image > i.icon {
  margin: 0em;
  opacity: 1;
  width: auto;
  line-height: 1;
  font-size: 8rem;
}

/*--------------
     Actions
---------------*/

.ui.modal > .actions {
  background: #F9FAFB;
  padding: 1rem 1rem;
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  text-align: right;
}

.ui.modal .actions > .button {
  margin-left: 0.75em;
}

/*-------------------
       Responsive
--------------------*/

/* Modal Width */

@media only screen and (max-width: 767px) {
  .ui.modal {
    width: 95%;
    margin: 0em 0em 0em -47.5%;
  }
}

@media only screen and (min-width: 768px) {
  .ui.modal {
    width: 88%;
    margin: 0em 0em 0em -44%;
  }
}

@media only screen and (min-width: 992px) {
  .ui.modal {
    width: 850px;
    margin: 0em 0em 0em -425px;
  }
}

@media only screen and (min-width: 1200px) {
  .ui.modal {
    width: 900px;
    margin: 0em 0em 0em -450px;
  }
}

@media only screen and (min-width: 1920px) {
  .ui.modal {
    width: 950px;
    margin: 0em 0em 0em -475px;
  }
}

/* Tablet and Mobile */

@media only screen and (max-width: 991px) {
  .ui.modal > .header {
    padding-right: 2.25rem;
  }

  .ui.modal > .close {
    top: 1.0535rem;
    right: 1rem;
    color: rgba(0, 0, 0, 0.87);
  }
}

/* Mobile */

@media only screen and (max-width: 767px) {
  .ui.modal > .header {
    padding: 0.75rem 1rem !important;
    padding-right: 2.25rem !important;
  }

  .ui.modal > .content {
    display: block;
    padding: 1rem !important;
  }

  .ui.modal > .close {
    top: 0.5rem !important;
    right: 0.5rem !important;
  }

  /*rtl:ignore*/

  .ui.modal .image.content {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .ui.modal .content > .image {
    display: block;
    max-width: 100%;
    margin: 0em auto !important;
    text-align: center;
    padding: 0rem 0rem 1rem !important;
  }

  .ui.modal > .content > .image > i.icon {
    font-size: 5rem;
    text-align: center;
  }

  /*rtl:ignore*/

  .ui.modal .content > .description {
    display: block;
    width: 100% !important;
    margin: 0em !important;
    padding: 1rem 0rem !important;
    box-shadow: none;
  }

  /* Let Buttons Stack */

  .ui.modal > .actions {
    padding: 1rem 1rem 0rem !important;
  }

  .ui.modal .actions > .buttons,
  .ui.modal .actions > .button {
    margin-bottom: 1rem;
  }
}

/*--------------
    Coupling
---------------*/

.ui.inverted.dimmer > .ui.modal {
  box-shadow: 1px 3px 10px 2px rgba(0, 0, 0, 0.2);
}

/*******************************
             Types
*******************************/

.ui.basic.modal {
  background-color: transparent;
  border: none;
  border-radius: 0em;
  box-shadow: none !important;
  color: #FFFFFF;
}

.ui.basic.modal > .header,
.ui.basic.modal > .content,
.ui.basic.modal > .actions {
  background-color: transparent;
}

.ui.basic.modal > .header {
  color: #FFFFFF;
}

.ui.basic.modal > .close {
  top: 1rem;
  right: 1.5rem;
}

.ui.inverted.dimmer > .basic.modal {
  color: rgba(0, 0, 0, 0.87);
}

.ui.inverted.dimmer > .ui.basic.modal > .header {
  color: rgba(0, 0, 0, 0.85);
}

/* Tablet and Mobile */

@media only screen and (max-width: 991px) {
  .ui.basic.modal > .close {
    color: #FFFFFF;
  }
}

/*******************************
             States
*******************************/

.ui.active.modal {
  display: block;
}

/*******************************
           Variations
*******************************/

/*--------------
    Scrolling
---------------*/

/* A modal that cannot fit on the page */

.scrolling.dimmable.dimmed {
  overflow: hidden;
}

.scrolling.dimmable.dimmed > .dimmer {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.scrolling.dimmable > .dimmer {
  position: fixed;
}

.modals.dimmer .ui.scrolling.modal {
  position: static !important;
  margin: 3.5rem auto !important;
}

/* undetached scrolling */

.scrolling.undetached.dimmable.dimmed {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.scrolling.undetached.dimmable.dimmed > .dimmer {
  overflow: hidden;
}

.scrolling.undetached.dimmable .ui.scrolling.modal {
  position: absolute;
  left: 50%;
  margin-top: 3.5rem !important;
}

/* Coupling with Sidebar */

.undetached.dimmable.dimmed > .pusher {
  z-index: auto;
}

@media only screen and (max-width: 991px) {
  .modals.dimmer .ui.scrolling.modal {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
}

/*--------------
   Full Screen
---------------*/

.ui.fullscreen.modal {
  width: 95% !important;
  left: 2.5% !important;
  margin: 1em auto;
}

.ui.fullscreen.scrolling.modal {
  left: 0em !important;
}

.ui.fullscreen.modal > .header {
  padding-right: 2.25rem;
}

.ui.fullscreen.modal > .close {
  top: 1.0535rem;
  right: 1rem;
  color: rgba(0, 0, 0, 0.87);
}

/*--------------
      Size
---------------*/

.ui.modal {
  font-size: 1rem;
}

/* Small */

.ui.small.modal > .header:not(.ui) {
  font-size: 1.3em;
}

/* Small Modal Width */

@media only screen and (max-width: 767px) {
  .ui.small.modal {
    width: 95%;
    margin: 0em 0em 0em -47.5%;
  }
}

@media only screen and (min-width: 768px) {
  .ui.small.modal {
    width: 70.4%;
    margin: 0em 0em 0em -35.2%;
  }
}

@media only screen and (min-width: 992px) {
  .ui.small.modal {
    width: 680px;
    margin: 0em 0em 0em -340px;
  }
}

@media only screen and (min-width: 1200px) {
  .ui.small.modal {
    width: 720px;
    margin: 0em 0em 0em -360px;
  }
}

@media only screen and (min-width: 1920px) {
  .ui.small.modal {
    width: 760px;
    margin: 0em 0em 0em -380px;
  }
}

/* Large Modal Width */

.ui.large.modal > .header {
  font-size: 1.6em;
}

@media only screen and (max-width: 767px) {
  .ui.large.modal {
    width: 95%;
    margin: 0em 0em 0em -47.5%;
  }
}

@media only screen and (min-width: 768px) {
  .ui.large.modal {
    width: 88%;
    margin: 0em 0em 0em -44%;
  }
}

@media only screen and (min-width: 992px) {
  .ui.large.modal {
    width: 1020px;
    margin: 0em 0em 0em -510px;
  }
}

@media only screen and (min-width: 1200px) {
  .ui.large.modal {
    width: 1080px;
    margin: 0em 0em 0em -540px;
  }
}

@media only screen and (min-width: 1920px) {
  .ui.large.modal {
    width: 1140px;
    margin: 0em 0em 0em -570px;
  }
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Nag
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
             Nag
*******************************/

.ui.nag {
  display: none;
  opacity: 0.95;
  position: relative;
  top: 0em;
  left: 0px;
  z-index: 999;
  min-height: 0em;
  width: 100%;
  margin: 0em;
  padding: 0.75em 1em;
  background: #555555;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
  -webkit-transition: 0.2s background ease;
  transition: 0.2s background ease;
}

a.ui.nag {
  cursor: pointer;
}

.ui.nag > .title {
  display: inline-block;
  margin: 0em 0.5em;
  color: #FFFFFF;
}

.ui.nag > .close.icon {
  cursor: pointer;
  opacity: 0.4;
  position: absolute;
  top: 50%;
  right: 1em;
  font-size: 1em;
  margin: -0.5em 0em 0em;
  color: #FFFFFF;
  -webkit-transition: opacity 0.2s ease;
  transition: opacity 0.2s ease;
}

/*******************************
             States
*******************************/

/* Hover */

.ui.nag:hover {
  background: #555555;
  opacity: 1;
}

.ui.nag .close:hover {
  opacity: 1;
}

/*******************************
           Variations
*******************************/

/*--------------
     Static
---------------*/

.ui.overlay.nag {
  position: absolute;
  display: block;
}

/*--------------
     Fixed
---------------*/

.ui.fixed.nag {
  position: fixed;
}

/*--------------
     Bottom
---------------*/

.ui.bottom.nags,
.ui.bottom.nag {
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
  top: auto;
  bottom: 0em;
}

/*--------------
     White
---------------*/

.ui.inverted.nags .nag,
.ui.inverted.nag {
  background-color: #F3F4F5;
  color: rgba(0, 0, 0, 0.85);
}

.ui.inverted.nags .nag .close,
.ui.inverted.nags .nag .title,
.ui.inverted.nag .close,
.ui.inverted.nag .title {
  color: rgba(0, 0, 0, 0.4);
}

/*******************************
           Groups
*******************************/

.ui.nags .nag {
  border-radius: 0em !important;
}

.ui.nags .nag:last-child {
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}

.ui.bottom.nags .nag:last-child {
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
        User Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Popup
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Popup
*******************************/

.ui.popup {
  display: none;
  position: absolute;
  top: 0px;
  right: 0px;
  /* Fixes content being squished when inline (moz only) */
  min-width: -webkit-min-content;
  min-width: -moz-min-content;
  min-width: min-content;
  z-index: 1900;
  border: 1px solid #D4D4D5;
  line-height: 1.4285em;
  max-width: 250px;
  background: #FFFFFF;
  padding: 0.833em 1em;
  font-weight: normal;
  font-style: normal;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.08);
}

.ui.popup > .header {
  padding: 0em;
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  font-size: 1.125em;
  line-height: 1.2;
  font-weight: bold;
}

.ui.popup > .header + .content {
  padding-top: 0.5em;
}

.ui.popup:before {
  position: absolute;
  content: '';
  width: 0.75em;
  height: 0.75em;
  background: #FFFFFF;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 2;
  box-shadow: 1px 1px 0px 0px #bababc;
}

/*******************************
            Types
*******************************/

/*--------------
     Spacing
---------------*/

.ui.popup {
  margin: 0em;
}

/* Extending from Top */

.ui.top.popup {
  margin: 0em 0em 0.75em;
}

.ui.top.left.popup {
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
}

.ui.top.center.popup {
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}

.ui.top.right.popup {
  -webkit-transform-origin: right bottom;
  transform-origin: right bottom;
}

/* Extending from Vertical Center */

.ui.left.center.popup {
  margin: 0em 0.75em 0em 0em;
  -webkit-transform-origin: right 50%;
  transform-origin: right 50%;
}

.ui.right.center.popup {
  margin: 0em 0em 0em 0.75em;
  -webkit-transform-origin: left 50%;
  transform-origin: left 50%;
}

/* Extending from Bottom */

.ui.bottom.popup {
  margin: 0.75em 0em 0em;
}

.ui.bottom.left.popup {
  -webkit-transform-origin: left top;
  transform-origin: left top;
}

.ui.bottom.center.popup {
  -webkit-transform-origin: center top;
  transform-origin: center top;
}

.ui.bottom.right.popup {
  -webkit-transform-origin: right top;
  transform-origin: right top;
}

/*--------------
     Pointer
---------------*/

/*--- Below ---*/

.ui.bottom.center.popup:before {
  margin-left: -0.325em;
  top: -0.325em;
  left: 50%;
  right: auto;
  bottom: auto;
  box-shadow: -1px -1px 0px 0px #bababc;
}

.ui.bottom.left.popup {
  margin-left: 0em;
}

/*rtl:rename*/

.ui.bottom.left.popup:before {
  top: -0.325em;
  left: 1em;
  right: auto;
  bottom: auto;
  margin-left: 0em;
  box-shadow: -1px -1px 0px 0px #bababc;
}

.ui.bottom.right.popup {
  margin-right: 0em;
}

/*rtl:rename*/

.ui.bottom.right.popup:before {
  top: -0.325em;
  right: 1em;
  bottom: auto;
  left: auto;
  margin-left: 0em;
  box-shadow: -1px -1px 0px 0px #bababc;
}

/*--- Above ---*/

.ui.top.center.popup:before {
  top: auto;
  right: auto;
  bottom: -0.325em;
  left: 50%;
  margin-left: -0.325em;
}

.ui.top.left.popup {
  margin-left: 0em;
}

/*rtl:rename*/

.ui.top.left.popup:before {
  bottom: -0.325em;
  left: 1em;
  top: auto;
  right: auto;
  margin-left: 0em;
}

.ui.top.right.popup {
  margin-right: 0em;
}

/*rtl:rename*/

.ui.top.right.popup:before {
  bottom: -0.325em;
  right: 1em;
  top: auto;
  left: auto;
  margin-left: 0em;
}

/*--- Left Center ---*/

/*rtl:rename*/

.ui.left.center.popup:before {
  top: 50%;
  right: -0.325em;
  bottom: auto;
  left: auto;
  margin-top: -0.325em;
  box-shadow: 1px -1px 0px 0px #bababc;
}

/*--- Right Center  ---*/

/*rtl:rename*/

.ui.right.center.popup:before {
  top: 50%;
  left: -0.325em;
  bottom: auto;
  right: auto;
  margin-top: -0.325em;
  box-shadow: -1px 1px 0px 0px #bababc;
}

/* Arrow Color By Location */

.ui.bottom.popup:before {
  background: #FFFFFF;
}

.ui.right.center.popup:before,
.ui.left.center.popup:before {
  background: #FFFFFF;
}

.ui.top.popup:before {
  background: #FFFFFF;
}

/* Inverted Arrow Color */

.ui.inverted.bottom.popup:before {
  background: #1B1C1D;
}

.ui.inverted.right.center.popup:before,
.ui.inverted.left.center.popup:before {
  background: #1B1C1D;
}

.ui.inverted.top.popup:before {
  background: #1B1C1D;
}

/*******************************
            Coupling
*******************************/

/* Immediate Nested Grid */

.ui.popup > .ui.grid:not(.padded) {
  width: calc(100% + 1.75rem);
  margin: -0.7rem -0.875rem;
}

/*******************************
            States
*******************************/

.ui.loading.popup {
  display: block;
  visibility: hidden;
  z-index: -1;
}

.ui.animating.popup,
.ui.visible.popup {
  display: block;
}

.ui.visible.popup {
  -webkit-transform: translateZ(0px);
  transform: translateZ(0px);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

/*******************************
            Variations
*******************************/

/*--------------
     Basic
---------------*/

.ui.basic.popup:before {
  display: none;
}

/*--------------
     Wide
---------------*/

.ui.wide.popup {
  max-width: 350px;
}

.ui[class*="very wide"].popup {
  max-width: 550px;
}

@media only screen and (max-width: 767px) {
  .ui.wide.popup,
  .ui[class*="very wide"].popup {
    max-width: 250px;
  }
}

/*--------------
     Fluid
---------------*/

.ui.fluid.popup {
  width: 100%;
  max-width: none;
}

/*--------------
     Colors
---------------*/

/* Inverted colors  */

.ui.inverted.popup {
  background: #1B1C1D;
  color: #FFFFFF;
  border: none;
  box-shadow: none;
}

.ui.inverted.popup .header {
  background-color: none;
  color: #FFFFFF;
}

.ui.inverted.popup:before {
  background-color: #1B1C1D;
  box-shadow: none !important;
}

/*--------------
     Flowing
---------------*/

.ui.flowing.popup {
  max-width: none;
}

/*--------------
     Sizes
---------------*/

.ui.mini.popup {
  font-size: 0.71428571rem;
}

.ui.tiny.popup {
  font-size: 0.85714286rem;
}

.ui.small.popup {
  font-size: 0.92857143rem;
}

.ui.popup {
  font-size: 1rem;
}

.ui.large.popup {
  font-size: 1.14285714rem;
}

.ui.huge.popup {
  font-size: 1.42857143rem;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
        User Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Progress Bar
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Progress
*******************************/

.ui.progress {
  position: relative;
  display: block;
  max-width: 100%;
  border: none;
  margin: 1em 0em 2.5em;
  box-shadow: none;
  background: rgba(0, 0, 0, 0.1);
  padding: 0em;
  border-radius: 0.28571429rem;
}

.ui.progress:first-child {
  margin: 0em 0em 2.5em;
}

.ui.progress:last-child {
  margin: 0em 0em 1.5em;
}

/*******************************
            Content
*******************************/

/* Activity Bar */

.ui.progress .bar {
  display: block;
  line-height: 1;
  position: relative;
  width: 0%;
  min-width: 2em;
  background: #888888;
  border-radius: 0.28571429rem;
  -webkit-transition: width 0.1s ease, background-color 0.1s ease;
  transition: width 0.1s ease, background-color 0.1s ease;
}

/* Percent Complete */

.ui.progress .bar > .progress {
  white-space: nowrap;
  position: absolute;
  width: auto;
  font-size: 0.92857143em;
  top: 50%;
  right: 0.5em;
  left: auto;
  bottom: auto;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: none;
  margin-top: -0.5em;
  font-weight: bold;
  text-align: left;
}

/* Label */

.ui.progress > .label {
  position: absolute;
  width: 100%;
  font-size: 1em;
  top: 100%;
  right: auto;
  left: 0%;
  bottom: auto;
  color: rgba(0, 0, 0, 0.87);
  font-weight: bold;
  text-shadow: none;
  margin-top: 0.2em;
  text-align: center;
  -webkit-transition: color 0.4s ease;
  transition: color 0.4s ease;
}

/*******************************
            Types
*******************************/

/* Indicating */

.ui.indicating.progress[data-percent^="1"] .bar,
.ui.indicating.progress[data-percent^="2"] .bar {
  background-color: #D95C5C;
}

.ui.indicating.progress[data-percent^="3"] .bar {
  background-color: #EFBC72;
}

.ui.indicating.progress[data-percent^="4"] .bar,
.ui.indicating.progress[data-percent^="5"] .bar {
  background-color: #E6BB48;
}

.ui.indicating.progress[data-percent^="6"] .bar {
  background-color: #DDC928;
}

.ui.indicating.progress[data-percent^="7"] .bar,
.ui.indicating.progress[data-percent^="8"] .bar {
  background-color: #B4D95C;
}

.ui.indicating.progress[data-percent^="9"] .bar,
.ui.indicating.progress[data-percent^="100"] .bar {
  background-color: #66DA81;
}

/* Indicating Label */

.ui.indicating.progress[data-percent^="1"] .label,
.ui.indicating.progress[data-percent^="2"] .label {
  color: rgba(0, 0, 0, 0.87);
}

.ui.indicating.progress[data-percent^="3"] .label {
  color: rgba(0, 0, 0, 0.87);
}

.ui.indicating.progress[data-percent^="4"] .label,
.ui.indicating.progress[data-percent^="5"] .label {
  color: rgba(0, 0, 0, 0.87);
}

.ui.indicating.progress[data-percent^="6"] .label {
  color: rgba(0, 0, 0, 0.87);
}

.ui.indicating.progress[data-percent^="7"] .label,
.ui.indicating.progress[data-percent^="8"] .label {
  color: rgba(0, 0, 0, 0.87);
}

.ui.indicating.progress[data-percent^="9"] .label,
.ui.indicating.progress[data-percent^="100"] .label {
  color: rgba(0, 0, 0, 0.87);
}

/* Single Digits */

.ui.indicating.progress[data-percent="1"] .bar,
.ui.indicating.progress[data-percent="2"] .bar,
.ui.indicating.progress[data-percent="3"] .bar,
.ui.indicating.progress[data-percent="4"] .bar,
.ui.indicating.progress[data-percent="5"] .bar,
.ui.indicating.progress[data-percent="6"] .bar,
.ui.indicating.progress[data-percent="7"] .bar,
.ui.indicating.progress[data-percent="8"] .bar,
.ui.indicating.progress[data-percent="9"] .bar {
  background-color: #D95C5C;
}

.ui.indicating.progress[data-percent="1"] .label,
.ui.indicating.progress[data-percent="2"] .label,
.ui.indicating.progress[data-percent="3"] .label,
.ui.indicating.progress[data-percent="4"] .label,
.ui.indicating.progress[data-percent="5"] .label,
.ui.indicating.progress[data-percent="6"] .label,
.ui.indicating.progress[data-percent="7"] .label,
.ui.indicating.progress[data-percent="8"] .label,
.ui.indicating.progress[data-percent="9"] .label {
  color: rgba(0, 0, 0, 0.87);
}

/* Indicating Success */

.ui.indicating.progress.success .label {
  color: #1A531B;
}

/*******************************
             States
*******************************/

/*--------------
     Success
---------------*/

.ui.progress.success .bar {
  background-color: #21BA45 !important;
}

.ui.progress.success .bar,
.ui.progress.success .bar::after {
  -webkit-animation: none !important;
  animation: none !important;
}

.ui.progress.success > .label {
  color: #1A531B;
}

/*--------------
     Warning
---------------*/

.ui.progress.warning .bar {
  background-color: #F2C037 !important;
}

.ui.progress.warning .bar,
.ui.progress.warning .bar::after {
  -webkit-animation: none !important;
  animation: none !important;
}

.ui.progress.warning > .label {
  color: #794B02;
}

/*--------------
     Error
---------------*/

.ui.progress.error .bar {
  background-color: #DB2828 !important;
}

.ui.progress.error .bar,
.ui.progress.error .bar::after {
  -webkit-animation: none !important;
  animation: none !important;
}

.ui.progress.error > .label {
  color: #912D2B;
}

/*--------------
     Active
---------------*/

.ui.active.progress .bar {
  position: relative;
  min-width: 2em;
}

.ui.active.progress .bar::after {
  content: '';
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #FFFFFF;
  border-radius: 0.28571429rem;
  -webkit-animation: progress-active 2s ease infinite;
  animation: progress-active 2s ease infinite;
}

@-webkit-keyframes progress-active {
  0% {
    opacity: 0.3;
    width: 0;
  }

  100% {
    opacity: 0;
    width: 100%;
  }
}

@keyframes progress-active {
  0% {
    opacity: 0.3;
    width: 0;
  }

  100% {
    opacity: 0;
    width: 100%;
  }
}

/*--------------
    Disabled
---------------*/

.ui.disabled.progress {
  opacity: 0.35;
}

.ui.disabled.progress .bar,
.ui.disabled.progress .bar::after {
  -webkit-animation: none !important;
  animation: none !important;
}

/*******************************
           Variations
*******************************/

/*--------------
    Inverted
---------------*/

.ui.inverted.progress {
  background: rgba(255, 255, 255, 0.08);
  border: none;
}

.ui.inverted.progress .bar {
  background: #888888;
}

.ui.inverted.progress .bar > .progress {
  color: #F9FAFB;
}

.ui.inverted.progress > .label {
  color: #FFFFFF;
}

.ui.inverted.progress.success > .label {
  color: #21BA45;
}

.ui.inverted.progress.warning > .label {
  color: #F2C037;
}

.ui.inverted.progress.error > .label {
  color: #DB2828;
}

/*--------------
    Attached
---------------*/

/* bottom attached */

.ui.progress.attached {
  background: transparent;
  position: relative;
  border: none;
  margin: 0em;
}

.ui.progress.attached,
.ui.progress.attached .bar {
  display: block;
  height: 0.2rem;
  padding: 0px;
  overflow: hidden;
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}

.ui.progress.attached .bar {
  border-radius: 0em;
}

/* top attached */

.ui.progress.top.attached,
.ui.progress.top.attached .bar {
  top: 0px;
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

.ui.progress.top.attached .bar {
  border-radius: 0em;
}

/* Coupling */

.ui.segment > .ui.attached.progress,
.ui.card > .ui.attached.progress {
  position: absolute;
  top: auto;
  left: 0;
  bottom: 100%;
  width: 100%;
}

.ui.segment > .ui.bottom.attached.progress,
.ui.card > .ui.bottom.attached.progress {
  top: 100%;
  bottom: auto;
}

/*--------------
     Colors
---------------*/

/* Red */

.ui.red.progress .bar {
  background-color: #DB2828;
}

.ui.red.inverted.progress .bar {
  background-color: #FF695E;
}

/* Orange */

.ui.orange.progress .bar {
  background-color: #F2711C;
}

.ui.orange.inverted.progress .bar {
  background-color: #FF851B;
}

/* Yellow */

.ui.yellow.progress .bar {
  background-color: #FBBD08;
}

.ui.yellow.inverted.progress .bar {
  background-color: #FFE21F;
}

/* Olive */

.ui.olive.progress .bar {
  background-color: #B5CC18;
}

.ui.olive.inverted.progress .bar {
  background-color: #D9E778;
}

/* Green */

.ui.green.progress .bar {
  background-color: #21BA45;
}

.ui.green.inverted.progress .bar {
  background-color: #2ECC40;
}

/* Teal */

.ui.teal.progress .bar {
  background-color: #00B5AD;
}

.ui.teal.inverted.progress .bar {
  background-color: #6DFFFF;
}

/* Blue */

.ui.blue.progress .bar {
  background-color: #2185D0;
}

.ui.blue.inverted.progress .bar {
  background-color: #54C8FF;
}

/* Violet */

.ui.violet.progress .bar {
  background-color: #6435C9;
}

.ui.violet.inverted.progress .bar {
  background-color: #A291FB;
}

/* Purple */

.ui.purple.progress .bar {
  background-color: #A333C8;
}

.ui.purple.inverted.progress .bar {
  background-color: #DC73FF;
}

/* Pink */

.ui.pink.progress .bar {
  background-color: #E03997;
}

.ui.pink.inverted.progress .bar {
  background-color: #FF8EDF;
}

/* Brown */

.ui.brown.progress .bar {
  background-color: #A5673F;
}

.ui.brown.inverted.progress .bar {
  background-color: #D67C1C;
}

/* Grey */

.ui.grey.progress .bar {
  background-color: #767676;
}

.ui.grey.inverted.progress .bar {
  background-color: #DCDDDE;
}

/* Black */

.ui.black.progress .bar {
  background-color: #1B1C1D;
}

.ui.black.inverted.progress .bar {
  background-color: #545454;
}

/*--------------
     Sizes
---------------*/

.ui.tiny.progress {
  font-size: 0.85714286rem;
}

.ui.tiny.progress .bar {
  height: 0.5em;
}

.ui.small.progress {
  font-size: 0.92857143rem;
}

.ui.small.progress .bar {
  height: 1em;
}

.ui.progress {
  font-size: 1rem;
}

.ui.progress .bar {
  height: 1.75em;
}

.ui.large.progress {
  font-size: 1.14285714rem;
}

.ui.large.progress .bar {
  height: 2.5em;
}

.ui.big.progress {
  font-size: 1.28571429rem;
}

.ui.big.progress .bar {
  height: 3.5em;
}

/*******************************
            Progress
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Rating
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
           Rating
*******************************/

.ui.rating {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  white-space: nowrap;
  vertical-align: baseline;
}

.ui.rating:last-child {
  margin-right: 0em;
}

/* Icon */

.ui.rating .icon {
  padding: 0em;
  margin: 0em;
  text-align: center;
  font-weight: normal;
  font-style: normal;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  cursor: pointer;
  width: 1.25em;
  height: auto;
  -webkit-transition: opacity 0.1s ease, background 0.1s ease, text-shadow 0.1s ease, color 0.1s ease;
  transition: opacity 0.1s ease, background 0.1s ease, text-shadow 0.1s ease, color 0.1s ease;
}

/*******************************
             Types
*******************************/

/*-------------------
      Standard
--------------------*/

/* Inactive Icon */

.ui.rating .icon {
  background: transparent;
  color: rgba(0, 0, 0, 0.15);
}

/* Active Icon */

.ui.rating .active.icon {
  background: transparent;
  color: rgba(0, 0, 0, 0.85);
}

/* Selected Icon */

.ui.rating .icon.selected,
.ui.rating .icon.selected.active {
  background: transparent;
  color: rgba(0, 0, 0, 0.87);
}

/*-------------------
        Star
--------------------*/

/* Inactive */

.ui.star.rating .icon {
  width: 1.25em;
  height: auto;
  background: transparent;
  color: rgba(0, 0, 0, 0.15);
  text-shadow: none;
}

/* Active Star */

.ui.star.rating .active.icon {
  background: transparent !important;
  color: #FFE623 !important;
  text-shadow: 0px -1px 0px #DDC507, -1px 0px 0px #DDC507, 0px 1px 0px #DDC507, 1px 0px 0px #DDC507 !important;
}

/* Selected Star */

.ui.star.rating .icon.selected,
.ui.star.rating .icon.selected.active {
  background: transparent !important;
  color: #FFCC00 !important;
  text-shadow: 0px -1px 0px #E6A200, -1px 0px 0px #E6A200, 0px 1px 0px #E6A200, 1px 0px 0px #E6A200 !important;
}

/*-------------------
        Heart
--------------------*/

.ui.heart.rating .icon {
  width: 1.4em;
  height: auto;
  background: transparent;
  color: rgba(0, 0, 0, 0.15);
  text-shadow: none !important;
}

/* Active Heart */

.ui.heart.rating .active.icon {
  background: transparent !important;
  color: #FF6D75 !important;
  text-shadow: 0px -1px 0px #CD0707, -1px 0px 0px #CD0707, 0px 1px 0px #CD0707, 1px 0px 0px #CD0707 !important;
}

/* Selected Heart */

.ui.heart.rating .icon.selected,
.ui.heart.rating .icon.selected.active {
  background: transparent !important;
  color: #FF3000 !important;
  text-shadow: 0px -1px 0px #AA0101, -1px 0px 0px #AA0101, 0px 1px 0px #AA0101, 1px 0px 0px #AA0101 !important;
}

/*******************************
             States
*******************************/

/*-------------------
       Disabled
--------------------*/

/* disabled rating */

.ui.disabled.rating .icon {
  cursor: default;
}

/*-------------------
   User Interactive
--------------------*/

/* Selected Rating */

.ui.rating.selected .active.icon {
  opacity: 1;
}

.ui.rating.selected .icon.selected,
.ui.rating .icon.selected {
  opacity: 1;
}

/*******************************
          Variations
*******************************/

.ui.mini.rating {
  font-size: 0.71428571rem;
}

.ui.tiny.rating {
  font-size: 0.85714286rem;
}

.ui.small.rating {
  font-size: 0.92857143rem;
}

.ui.rating {
  font-size: 1rem;
}

.ui.large.rating {
  font-size: 1.14285714rem;
}

.ui.huge.rating {
  font-size: 1.42857143rem;
}

.ui.massive.rating {
  font-size: 2rem;
}

/*******************************
         Theme Overrides
*******************************/

@font-face {
  font-family: 'Rating';
  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMggjCBsAAAC8AAAAYGNtYXCj2pm8AAABHAAAAKRnYXNwAAAAEAAAAcAAAAAIZ2x5ZlJbXMYAAAHIAAARnGhlYWQBGAe5AAATZAAAADZoaGVhA+IB/QAAE5wAAAAkaG10eCzgAEMAABPAAAAAcGxvY2EwXCxOAAAUMAAAADptYXhwACIAnAAAFGwAAAAgbmFtZfC1n04AABSMAAABPHBvc3QAAwAAAAAVyAAAACAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADxZQHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEAJAAAAAgACAABAAAAAEAIOYF8AbwDfAj8C7wbvBw8Irwl/Cc8SPxZf/9//8AAAAAACDmAPAE8AzwI/Au8G7wcPCH8JfwnPEj8WT//f//AAH/4xoEEAYQAQ/sD+IPow+iD4wPgA98DvYOtgADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAIAAP/tAgAB0wAKABUAAAEvAQ8BFwc3Fyc3BQc3Jz8BHwEHFycCALFPT7GAHp6eHoD/AHAWW304OH1bFnABGRqgoBp8sFNTsHyyOnxYEnFxElh8OgAAAAACAAD/7QIAAdMACgASAAABLwEPARcHNxcnNwUxER8BBxcnAgCxT0+xgB6enh6A/wA4fVsWcAEZGqCgGnywU1OwfLIBHXESWHw6AAAAAQAA/+0CAAHTAAoAAAEvAQ8BFwc3Fyc3AgCxT0+xgB6enh6AARkaoKAafLBTU7B8AAAAAAEAAAAAAgABwAArAAABFA4CBzEHDgMjIi4CLwEuAzU0PgIzMh4CFz4DMzIeAhUCAAcMEgugBgwMDAYGDAwMBqALEgwHFyg2HhAfGxkKChkbHxAeNigXAS0QHxsZCqAGCwkGBQkLBqAKGRsfEB42KBcHDBILCxIMBxcoNh4AAAAAAgAAAAACAAHAACsAWAAAATQuAiMiDgIHLgMjIg4CFRQeAhcxFx4DMzI+Aj8BPgM1DwEiFCIGMTAmIjQjJy4DNTQ+AjMyHgIfATc+AzMyHgIVFA4CBwIAFyg2HhAfGxkKChkbHxAeNigXBwwSC6AGDAwMBgYMDAwGoAsSDAdbogEBAQEBAaIGCgcEDRceEQkREA4GLy8GDhARCREeFw0EBwoGAS0eNigXBwwSCwsSDAcXKDYeEB8bGQqgBgsJBgUJCwagChkbHxA+ogEBAQGiBg4QEQkRHhcNBAcKBjQ0BgoHBA0XHhEJERAOBgABAAAAAAIAAcAAMQAAARQOAgcxBw4DIyIuAi8BLgM1ND4CMzIeAhcHFwc3Jzc+AzMyHgIVAgAHDBILoAYMDAwGBgwMDAagCxIMBxcoNh4KFRMSCC9wQLBwJwUJCgkFHjYoFwEtEB8bGQqgBgsJBgUJCwagChkbHxAeNigXAwUIBUtAoMBAOwECAQEXKDYeAAABAAAAAAIAAbcAKgAAEzQ3NjMyFxYXFhcWFzY3Njc2NzYzMhcWFRQPAQYjIi8BJicmJyYnJicmNQAkJUARExIQEAsMCgoMCxAQEhMRQCUkQbIGBwcGsgMFBQsKCQkGBwExPyMkBgYLCgkKCgoKCQoLBgYkIz8/QawFBawCBgUNDg4OFRQTAAAAAQAAAA0B2wHSACYAABM0PwI2FzYfAhYVFA8BFxQVFAcGByYvAQcGByYnJjU0PwEnJjUAEI9BBQkIBkCPEAdoGQMDBgUGgIEGBQYDAwEYaAcBIwsCFoEMAQEMgRYCCwYIZJABBQUFAwEBAkVFAgEBAwUFAwOQZAkFAAAAAAIAAAANAdsB0gAkAC4AABM0PwI2FzYfAhYVFA8BFxQVFAcmLwEHBgcmJyY1ND8BJyY1HwEHNxcnNy8BBwAQj0EFCQgGQI8QB2gZDAUGgIEGBQYDAwEYaAc/WBVsaxRXeDY2ASMLAhaBDAEBDIEWAgsGCGSQAQUNAQECRUUCAQEDBQUDA5BkCQURVXg4OHhVEW5uAAABACMAKQHdAXwAGgAANzQ/ATYXNh8BNzYXNh8BFhUUDwEGByYvASY1IwgmCAwLCFS8CAsMCCYICPUIDAsIjgjSCwkmCQEBCVS7CQEBCSYJCg0H9gcBAQePBwwAAAEAHwAfAXMBcwAsAAA3ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFRQPAQYjIi8BBwYjIi8BJjUfCFRUCAgnCAwLCFRUCAwLCCcICFRUCAgnCAsMCFRUCAsMCCcIYgsIVFQIDAsIJwgIVFQICCcICwwIVFQICwwIJwgIVFQICCcIDAAAAAACAAAAJQFJAbcAHwArAAA3NTQ3NjsBNTQ3NjMyFxYdATMyFxYdARQHBiMhIicmNTczNTQnJiMiBwYdAQAICAsKJSY1NCYmCQsICAgIC/7tCwgIW5MWFR4fFRZApQsICDc0JiYmJjQ3CAgLpQsICAgIC8A3HhYVFRYeNwAAAQAAAAcBbgG3ACEAADcRNDc2NzYzITIXFhcWFREUBwYHBiMiLwEHBiMiJyYnJjUABgUKBgYBLAYGCgUGBgUKBQcOCn5+Cg4GBgoFBicBcAoICAMDAwMICAr+kAoICAQCCXl5CQIECAgKAAAAAwAAACUCAAFuABgAMQBKAAA3NDc2NzYzMhcWFxYVFAcGBwYjIicmJyY1MxYXFjMyNzY3JicWFRQHBiMiJyY1NDcGBzcUFxYzMjc2NTQ3NjMyNzY1NCcmIyIHBhUABihDREtLREMoBgYoQ0RLS0RDKAYlJjk5Q0M5OSYrQREmJTU1JSYRQSuEBAQGBgQEEREZBgQEBAQGJBkayQoKQSgoKChBCgoKCkEoJycoQQoKOiMjIyM6RCEeIjUmJSUmNSIeIUQlBgQEBAQGGBIRBAQGBgQEGhojAAAABQAAAAkCAAGJACwAOABRAGgAcAAANzQ3Njc2MzIXNzYzMhcWFxYXFhcWFxYVFDEGBwYPAQYjIicmNTQ3JicmJyY1MxYXNyYnJjU0NwYHNxQXFjMyNzY1NDc2MzI3NjU0JyYjIgcGFRc3Njc2NyYnNxYXFhcWFRQHBgcGBwYjPwEWFRQHBgcABitBQU0ZGhADBQEEBAUFBAUEBQEEHjw8Hg4DBQQiBQ0pIyIZBiUvSxYZDg4RQSuEBAQGBgQEEREZBgQEBAQGJBkaVxU9MzQiIDASGxkZEAYGCxQrODk/LlACFxYlyQsJQycnBRwEAgEDAwIDAwIBAwUCNmxsNhkFFAMFBBUTHh8nCQtKISgSHBsfIh4hRCUGBAQEBAYYEhEEBAYGBAQaGiPJJQUiIjYzISASGhkbCgoKChIXMRsbUZANCyghIA8AAAMAAAAAAbcB2wA5AEoAlAAANzU0NzY7ATY3Njc2NzY3Njc2MzIXFhcWFRQHMzIXFhUUBxYVFAcUFRQHFgcGKwEiJyYnJisBIicmNTcUFxYzMjc2NTQnJiMiBwYVFzMyFxYXFhcWFxYXFhcWOwEyNTQnNjc2NTQnNjU0JyYnNjc2NTQnJisBNDc2NTQnJiMGBwYHBgcGBwYHBgcGBwYHBgcGBwYrARUACwoQTgodEQ4GBAMFBgwLDxgTEwoKDjMdFhYOAgoRARkZKCUbGxsjIQZSEAoLJQUFCAcGBQUGBwgFBUkJBAUFBAQHBwMDBwcCPCUjNwIJBQUFDwMDBAkGBgsLDmUODgoJGwgDAwYFDAYQAQUGAwQGBgYFBgUGBgQJSbcPCwsGJhUPCBERExMMCgkJFBQhGxwWFR4ZFQoKFhMGBh0WKBcXBgcMDAoLDxIHBQYGBQcIBQYGBQgSAQEBAQICAQEDAgEULwgIBQoLCgsJDhQHCQkEAQ0NCg8LCxAdHREcDQ4IEBETEw0GFAEHBwUECAgFBQUFAgO3AAADAAD/2wG3AbcAPABNAJkAADc1NDc2OwEyNzY3NjsBMhcWBxUWFRQVFhUUBxYVFAcGKwEWFRQHBgcGIyInJicmJyYnJicmJyYnIyInJjU3FBcWMzI3NjU0JyYjIgcGFRczMhcWFxYXFhcWFxYXFhcWFxYXFhcWFzI3NjU0JyY1MzI3NjU0JyYjNjc2NTQnNjU0JyYnNjU0JyYrASIHIgcGBwYHBgcGIwYrARUACwoQUgYhJRsbHiAoGRkBEQoCDhYWHTMOCgoTExgPCwoFBgIBBAMFDhEdCk4QCgslBQUIBwYFBQYHCAUFSQkEBgYFBgUGBgYEAwYFARAGDAUGAwMIGwkKDg5lDgsLBgYJBAMDDwUFBQkCDg4ZJSU8AgcHAwMHBwQEBQUECbe3DwsKDAwHBhcWJwIWHQYGExYKChUZHhYVHRoiExQJCgsJDg4MDAwNBg4WJQcLCw+kBwUGBgUHCAUGBgUIpAMCBQYFBQcIBAUHBwITBwwTExERBw0OHBEdHRALCw8KDQ0FCQkHFA4JCwoLCgUICBgMCxUDAgEBAgMBAQG3AAAAAQAAAA0A7gHSABQAABM0PwI2FxEHBgcmJyY1ND8BJyY1ABCPQQUJgQYFBgMDARhoBwEjCwIWgQwB/oNFAgEBAwUFAwOQZAkFAAAAAAIAAAAAAgABtwAqAFkAABM0NzYzMhcWFxYXFhc2NzY3Njc2MzIXFhUUDwEGIyIvASYnJicmJyYnJjUzFB8BNzY1NCcmJyYnJicmIyIHBgcGBwYHBiMiJyYnJicmJyYjIgcGBwYHBgcGFQAkJUARExIQEAsMCgoMCxAQEhMRQCUkQbIGBwcGsgMFBQsKCQkGByU1pqY1BgYJCg4NDg0PDhIRDg8KCgcFCQkFBwoKDw4REg4PDQ4NDgoJBgYBMT8jJAYGCwoJCgoKCgkKCwYGJCM/P0GsBQWsAgYFDQ4ODhUUEzA1oJ82MBcSEgoLBgcCAgcHCwsKCQgHBwgJCgsLBwcCAgcGCwoSEhcAAAACAAAABwFuAbcAIQAoAAA3ETQ3Njc2MyEyFxYXFhURFAcGBwYjIi8BBwYjIicmJyY1PwEfAREhEQAGBQoGBgEsBgYKBQYGBQoFBw4Kfn4KDgYGCgUGJZIZef7cJwFwCggIAwMDAwgICv6QCggIBAIJeXkJAgQICAoIjRl0AWP+nQAAAAABAAAAJQHbAbcAMgAANzU0NzY7ATU0NzYzMhcWHQEUBwYrASInJj0BNCcmIyIHBh0BMzIXFh0BFAcGIyEiJyY1AAgIC8AmJjQ1JiUFBQgSCAUFFhUfHhUWHAsICAgIC/7tCwgIQKULCAg3NSUmJiU1SQgFBgYFCEkeFhUVFh43CAgLpQsICAgICwAAAAIAAQANAdsB0gAiAC0AABM2PwI2MzIfAhYXFg8BFxYHBiMiLwEHBiMiJyY/AScmNx8CLwE/AS8CEwEDDJBABggJBUGODgIDCmcYAgQCCAMIf4IFBgYEAgEZaQgC7hBbEgINSnkILgEBJggCFYILC4IVAggICWWPCgUFA0REAwUFCo9lCQipCTBmEw1HEhFc/u0AAAADAAAAAAHJAbcAFAAlAHkAADc1NDc2OwEyFxYdARQHBisBIicmNTcUFxYzMjc2NTQnJiMiBwYVFzU0NzYzNjc2NzY3Njc2NzY3Njc2NzY3NjMyFxYXFhcWFxYXFhUUFRQHBgcGBxQHBgcGBzMyFxYVFAcWFRYHFgcGBxYHBgcjIicmJyYnJiciJyY1AAUGB1MHBQYGBQdTBwYFJQUFCAcGBQUGBwgFBWQFBQgGDw8OFAkFBAQBAQMCAQIEBAYFBw4KCgcHBQQCAwEBAgMDAgYCAgIBAU8XEBAQBQEOBQUECwMREiYlExYXDAwWJAoHBQY3twcGBQUGB7cIBQUFBQgkBwYFBQYHCAUGBgUIJLcHBQYBEBATGQkFCQgGBQwLBgcICQUGAwMFBAcHBgYICQQEBwsLCwYGCgIDBAMCBBEQFhkSDAoVEhAREAsgFBUBBAUEBAcMAQUFCAAAAAADAAD/2wHJAZIAFAAlAHkAADcUFxYXNxY3Nj0BNCcmBycGBwYdATc0NzY3FhcWFRQHBicGJyY1FzU0NzY3Fjc2NzY3NjcXNhcWBxYXFgcWBxQHFhUUBwYHJxYXFhcWFRYXFhcWFRQVFAcGBwYHBgcGBwYnBicmJyYnJicmJyYnJicmJyYnJiciJyY1AAUGB1MHBQYGBQdTBwYFJQUFCAcGBQUGBwgFBWQGBQcKJBYMDBcWEyUmEhEDCwQFBQ4BBRAQEBdPAQECAgIGAgMDAgEBAwIEBQcHCgoOBwUGBAQCAQIDAQEEBAUJFA4PDwYIBQWlBwYFAQEBBwQJtQkEBwEBAQUGB7eTBwYEAQEEBgcJBAYBAQYECZS4BwYEAgENBwUCBgMBAQEXEyEJEhAREBcIDhAaFhEPAQEFAgQCBQELBQcKDAkIBAUHCgUGBwgDBgIEAQEHBQkIBwUMCwcECgcGCRoREQ8CBgQIAAAAAQAAAAEAAJth57dfDzz1AAsCAAAAAADP/GODAAAAAM/8Y4MAAP/bAgAB2wAAAAgAAgAAAAAAAAABAAAB4P/gAAACAAAAAAACAAABAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAEAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAdwAAAHcAAACAAAjAZMAHwFJAAABbgAAAgAAAAIAAAACAAAAAgAAAAEAAAACAAAAAW4AAAHcAAAB3AABAdwAAAHcAAAAAAAAAAoAFAAeAEoAcACKAMoBQAGIAcwCCgJUAoICxgMEAzoDpgRKBRgF7AYSBpgG2gcgB2oIGAjOAAAAAQAAABwAmgAFAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAwAAAABAAAAAAACAA4AQAABAAAAAAADAAwAIgABAAAAAAAEAAwATgABAAAAAAAFABYADAABAAAAAAAGAAYALgABAAAAAAAKADQAWgADAAEECQABAAwAAAADAAEECQACAA4AQAADAAEECQADAAwAIgADAAEECQAEAAwATgADAAEECQAFABYADAADAAEECQAGAAwANAADAAEECQAKADQAWgByAGEAdABpAG4AZwBWAGUAcgBzAGkAbwBuACAAMQAuADAAcgBhAHQAaQBuAGdyYXRpbmcAcgBhAHQAaQBuAGcAUgBlAGcAdQBsAGEAcgByAGEAdABpAG4AZwBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format('truetype'), url("data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AABcUAAoAAAAAFswAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAEuEAABLho6TvIE9TLzIAABPYAAAAYAAAAGAIIwgbY21hcAAAFDgAAACkAAAApKPambxnYXNwAAAU3AAAAAgAAAAIAAAAEGhlYWQAABTkAAAANgAAADYBGAe5aGhlYQAAFRwAAAAkAAAAJAPiAf1obXR4AAAVQAAAAHAAAABwLOAAQ21heHAAABWwAAAABgAAAAYAHFAAbmFtZQAAFbgAAAE8AAABPPC1n05wb3N0AAAW9AAAACAAAAAgAAMAAAEABAQAAQEBB3JhdGluZwABAgABADr4HAL4GwP4GAQeCgAZU/+Lix4KABlT/4uLDAeLZviU+HQFHQAAAP0PHQAAAQIRHQAAAAkdAAAS2BIAHQEBBw0PERQZHiMoLTI3PEFGS1BVWl9kaW5zeH2Ch4xyYXRpbmdyYXRpbmd1MHUxdTIwdUU2MDB1RTYwMXVFNjAydUU2MDN1RTYwNHVFNjA1dUYwMDR1RjAwNXVGMDA2dUYwMEN1RjAwRHVGMDIzdUYwMkV1RjA2RXVGMDcwdUYwODd1RjA4OHVGMDg5dUYwOEF1RjA5N3VGMDlDdUYxMjN1RjE2NHVGMTY1AAACAYkAGgAcAgABAAQABwAKAA0AVgCWAL0BAgGMAeQCbwLwA4cD5QR0BQMFdgZgB8MJkQtxC7oM2Q1jDggOmRAYEZr8lA78lA78lA77lA74lPetFftFpTz3NDz7NPtFcfcU+xBt+0T3Mt73Mjht90T3FPcQBfuU+0YV+wRRofcQMOP3EZ3D9wXD+wX3EXkwM6H7EPsExQUO+JT3rRX7RaU89zQ8+zT7RXH3FPsQbftE9zLe9zI4bfdE9xT3EAX7lPtGFYuLi/exw/sF9xF5MDOh+xD7BMUFDviU960V+0WlPPc0PPs0+0Vx9xT7EG37RPcy3vcyOG33RPcU9xAFDviU98EVi2B4ZG5wCIuL+zT7NAV7e3t7e4t7i3ube5sI+zT3NAVupniyi7aL3M3N3Iu2i7J4pm6mqLKetovci81JizoIDviU98EVi9xJzTqLYItkeHBucKhknmCLOotJSYs6i2CeZKhwCIuL9zT7NAWbe5t7m4ubi5ubm5sI9zT3NAWopp6yi7YIME0V+zb7NgWKioqKiouKi4qMiowI+zb3NgV6m4Ghi6OLubCwuYuji6GBm3oIule6vwWbnKGVo4u5i7Bmi12Lc4F1ensIDviU98EVi2B4ZG5wCIuL+zT7NAV7e3t7e4t7i3ube5sI+zT3NAVupniyi7aL3M3N3Iuni6WDoX4IXED3BEtL+zT3RPdU+wTLssYFl46YjZiL3IvNSYs6CA6L98UVi7WXrKOio6Otl7aLlouXiZiHl4eWhZaEloSUhZKFk4SShZKEkpKSkZOSkpGUkZaSCJaSlpGXj5iPl42Wi7aLrX+jc6N0l2qLYYthdWBgYAj7RvtABYeIh4mGi4aLh42Hjgj7RvdABYmNiY2Hj4iOhpGDlISUhZWFlIWVhpaHmYaYiZiLmAgOZ4v3txWLkpCPlo0I9yOgzPcWBY6SkI+Ri5CLkIePhAjL+xb3I3YFlomQh4uEi4aJh4aGCCMmpPsjBYuKi4mLiIuHioiJiImIiIqHi4iLh4yHjQj7FM/7FUcFh4mHioiLh4uIjImOiY6KjouPi4yLjYyOCKP3IyPwBYaQiZCLjwgOZ4v3txWLkpCPlo0I9yOgzPcWBY6SkI+Ri5CLkIePhAjL+xb3I3YFlomQh4uEi4aJh4aGCCMmpPsjBYuKi4mLiIuCh4aDi4iLh4yHjQj7FM/7FUcFh4mHioiLh4uIjImOiY6KjouPi4yLjYyOCKP3IyPwBYaQiZCLjwjKeRXjN3b7DfcAxPZSd/cN4t/7DJ1V9wFV+wEFDq73ZhWLk42RkZEIsbIFkZCRjpOLkouSiJCGCN8291D3UAWQkJKOkouTi5GIkYYIsWQFkYaNhIuEi4OJhYWFCPuJ+4kFhYWFiYOLhIuEjYaRCPsi9yIFhZCJkouSCA77AartFYuSjpKQkAjf3zffBYaQiJKLk4uSjpKQkAiysgWRkJGOk4uSi5KIkIYI3zff3wWQkJKOk4uSi5KIkIYIsmQFkIaOhIuEi4OIhIaGCDc33zcFkIaOhIuEi4OIhYaFCGRkBYaGhIiEi4OLhI6GkAg33zc3BYaGhIiEi4OLhY6FkAhksgWGkYiRi5MIDvtLi8sVi/c5BYuSjpKQkJCQko6SiwiVi4vCBYuul6mkpKSkqpiui66LqX6kcqRymG2LaAiLVJSLBZKLkoiQhpCGjoSLhAiL+zkFi4OIhYaGhoWEiYSLCPuniwWEi4SNhpGGkIiRi5MI5vdUFfcni4vCBYufhJx8mn2ZepJ3i3aLeoR9fX18g3qLdwiLVAUO+yaLshWL+AQFi5GNkY+RjpCQj5KNj42PjI+LCPfAiwWPi4+Kj4mRiZCHj4aPhY2Fi4UIi/wEBYuEiYWHhoeGhoeFiIiKhoqHi4GLhI6EkQj7EvcN+xL7DQWEhYOIgouHi4eLh42EjoaPiJCHkImRi5IIDov3XRWLko2Rj5Kltq+vuKW4pbuZvYu9i7t9uHG4ca9npWCPhI2Fi4SLhYmEh4RxYGdoXnAIXnFbflmLWYtbmF6lXqZnrnG2h5KJkouRCLCLFaRkq2yxdLF0tH+4i7iLtJexorGiq6qksm64Z61goZZ3kXaLdItnfm1ycnJybX9oiwhoi22XcqRypH6pi6+LopGglp9gdWdpbl4I9xiwFYuHjIiOiI6IjoqPi4+LjoyOjo2OjY6Lj4ubkJmXl5eWmZGbi4+LjoyOjo2OjY6LjwiLj4mOiY6IjYiNh4tzi3eCenp6eoJ3i3MIDov3XRWLko2Sj5GouK+utqW3pbqYvouci5yJnIgIm6cFjY6NjI+LjIuNi42JjYqOio+JjomOiY6KjomOiY6JjoqNioyKjomMiYuHi4qLiouLCHdnbVVjQ2NDbVV3Zwh9cgWJiIiJiIuJi36SdJiIjYmOi46LjY+UlJlvl3KcdJ90oHeie6WHkYmSi5IIsIsVqlq0Z711CKGzBXqXfpqCnoKdhp6LoIuikaCWn2B1Z2luXgj3GLAVi4eMiI6IjoiOio+Lj4uOjI6OjY6NjouPi5uQmZeXl5aZkZuLj4uOjI6OjY6NjouPCIuPiY6JjoiNiI2Hi3OLd4J6enp6gneLcwji+10VoLAFtI+wmK2hrqKnqKKvdq1wp2uhCJ2rBZ1/nHycepx6mHqWeY+EjYWLhIuEiYWHhIR/gH1+fG9qaXJmeWV5Y4Jhiwi53BXb9yQFjIKMg4uEi3CDc3x1fHV3fHOBCA6L1BWL90sFi5WPlJKSkpKTj5aLCNmLBZKPmJqepJaZlZeVlY+Qj5ONl42WjpeOmI+YkZWTk5OSk46Vi5uLmYiYhZiFlIGSfgiSfo55i3WLeYd5gXgIvosFn4uchJl8mn2Seot3i3qGfIJ9jYSLhYuEi3yIfoR+i4eLh4uHi3eGen99i3CDdnt8CHt8dYNwiwhmiwV5i3mNeY95kHeRc5N1k36Ph4sIOYsFgIuDjoSShJKHlIuVCLCdFYuGjIePiI+Hj4mQi5CLj42Pj46OjY+LkIuQiZCIjoePh42Gi4aLh4mHh4eIioaLhgjUeRWUiwWNi46Lj4qOi4+KjYqOi4+Kj4mQio6KjYqNio+Kj4mQio6KjIqzfquEpIsIrosFr4uemouri5CKkYqQkY6QkI6SjpKNkouSi5KJkoiRlZWQlouYi5CKkImRiZGJj4iOCJGMkI+PlI+UjZKLkouViJODk4SSgo+CiwgmiwWLlpCalJ6UnpCbi5aLnoiYhJSFlH+QeYuGhoeDiYCJf4h/h3+IfoWBg4KHh4SCgH4Ii4qIiYiGh4aIh4mIiIiIh4eGh4aHh4eHiIiHiIeHiIiHiIeKh4mIioiLCIKLi/tLBQ6L90sVi/dLBYuVj5OSk5KSk46WiwjdiwWPi5iPoZOkk6CRnZCdj56Nn4sIq4sFpougg5x8m3yTd4txCIuJBZd8kHuLd4uHi4eLh5J+jn6LfIuEi4SJhZR9kHyLeot3hHp8fH19eoR3iwhYiwWVeI95i3mLdIh6hH6EfoKBfoV+hX2He4uBi4OPg5KFkYaTh5SHlYiTipOKk4qTiJMIiZSIkYiPgZSBl4CaeKR+moSPCD2LBYCLg4+EkoSSh5SLlQiw9zgVi4aMh4+Ij4ePiZCLkIuPjY+Pjo6Nj4uQi5CJkIiOh4+HjYaLhouHiYeHh4iKhouGCNT7OBWUiwWOi46Kj4mPio+IjoiPh4+IjoePiI+Hj4aPho6HjoiNiI6Hj4aOho6Ii4qWfpKDj4YIk4ORgY5+j36OgI1/jYCPg5CGnYuXj5GUkpSOmYuei5aGmoKfgp6GmouWCPCLBZSLlI+SkpOTjpOLlYuSiZKHlIeUho+Fi46PjY+NkY2RjJCLkIuYhpaBlY6RjZKLkgiLkomSiJKIkoaQhY6MkIyRi5CLm4aXgpOBkn6Pe4sIZosFcotrhGN9iouIioaJh4qHiomKiYqIioaKh4mHioiKiYuHioiLh4qIi4mLCIKLi/tLBQ77lIv3txWLkpCPlo0I9yOgzPcWBY6SkI+RiwiL/BL7FUcFh4mHioiLh4uIjImOiY6KjouPi4yLjYyOCKP3IyPwBYaQiZCLjwgOi/fFFYu1l6yjoqOjrZe2i5aLl4mYh5eHloWWhJaElIWShZOEkoWShJKSkpGTkpKRlJGWkgiWkpaRl4+Yj5eNlou2i61/o3OjdJdqi2GLYXVgYGAI+0b7QAWHiIeJhouGi4eNh44I+0b3QAWJjYmNh4+IjoaRg5SElIWVhZSFlYaWh5mGmImYi5gIsIsVi2ucaa9oCPc6+zT3OvczBa+vnK2Lq4ubiZiHl4eXhpSFkoSSg5GCj4KQgo2CjYONgYuBi4KLgIl/hoCGgIWChAiBg4OFhISEhYaFhoaIhoaJhYuFi4aNiJCGkIaRhJGEkoORgZOCkoCRgJB/kICNgosIgYuBi4OJgomCiYKGgoeDhYSEhYSGgod/h3+Jfot7CA77JouyFYv4BAWLkY2Rj5GOkJCPko2PjY+Mj4sI98CLBY+Lj4qPiZGJkIePho+FjYWLhQiL/AQFi4SJhYeGh4aGh4WIiIqGioeLgYuEjoSRCPsS9w37EvsNBYSFg4iCi4eLh4uHjYSOho+IkIeQiZGLkgiwkxX3JvchpHL3DfsIi/f3+7iLi/v3BQ5ni8sVi/c5BYuSjpKQkJCQko6Siwj3VIuLwgWLrpippKSkpKmYrouvi6l+pHKkcpdti2gIi0IFi4aKhoeIh4eHiYaLCHmLBYaLh42Hj4eOipCLkAiL1AWLn4OcfZp9mXqSdot3i3qEfX18fIR6i3cIi1SniwWSi5KIkIaQho6Ei4QIi/s5BYuDiIWGhoaFhImEiwj7p4sFhIuEjYaRhpCIkYuTCA5njPe6FYyQkI6UjQj3I6DM9xYFj5KPj5GLkIuQh4+ECMv7FvcjdgWUiZCIjYaNhoiFhYUIIyak+yMFjIWKhomHiYiIiYaLiIuHjIeNCPsUz/sVRwWHiYeKiIuHi4eNiY6Jj4uQjJEIo/cjI/AFhZGJkY2QCPeB+z0VnILlW3rxiJ6ZmNTS+wydgpxe54v7pwUOZ4vCFYv3SwWLkI2Pjo+Pjo+NkIsI3osFkIuPiY6Ij4eNh4uGCIv7SwWLhomHh4eIh4eKhosIOIsFhouHjIePiI+Jj4uQCLCvFYuGjIePh46IkImQi5CLj42Pjo6PjY+LkIuQiZCIjoePh42Gi4aLhomIh4eIioaLhgjvZxWL90sFi5CNj46Oj4+PjZCLj4ySkJWWlZaVl5SXmJuVl5GRjo6OkI6RjZCNkIyPjI6MkY2TCIySjJGMj4yPjZCOkY6RjpCPjo6Pj42Qi5SLk4qSiZKJkYiPiJCIjoiPho6GjYeMhwiNh4yGjIaMhYuHi4iLiIuHi4eLg4uEiYSJhImFiYeJh4mFh4WLioqJiomJiIqJiokIi4qKiIqJCNqLBZqLmIWWgJaAkH+LfIt6hn2Af46DjYSLhIt9h36Cf4+Bi3+HgImAhYKEhI12hnmAfgh/fXiDcosIZosFfot+jHyOfI5/joOOg41/j32Qc5N8j4SMhouHjYiOh4+Jj4uQCA5ni/c5FYuGjYaOiI+Hj4mQiwjeiwWQi4+Njo+Pjo2Qi5AIi/dKBYuQiZCHjoiPh42Giwg4iwWGi4eJh4eIiImGi4YIi/tKBbD3JhWLkIyPj4+OjpCNkIuQi4+Jj4iOh42Hi4aLhomHiIeHh4eKhouGi4aMiI+Hj4qPi5AI7/snFYv3SwWLkI2Qj46Oj4+NkIuSi5qPo5OZkJePk46TjZeOmo6ajpiMmIsIsIsFpIueg5d9ln6Qeol1koSRgo2Aj4CLgIeAlH+Pfot9i4WJhIiCloCQfIt7i3yFfoGACICAfoZ8iwg8iwWMiIyJi4mMiYyJjYmMiIyKi4mPhI2GjYeNh42GjYOMhIyEi4SLhouHi4iLiYuGioYIioWKhomHioeJh4iGh4eIh4aIh4iFiISJhImDioKLhouHjYiPh4+Ij4iRiJGJkIqPCIqPipGKkomTipGKj4qOiZCJkYiQiJCIjoWSgZZ+nIKXgZaBloGWhJGHi4aLh42HjwiIjomQi48IDviUFPiUFYsMCgAAAAADAgABkAAFAAABTAFmAAAARwFMAWYAAAD1ABkAhAAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAPFlAeD/4P/gAeAAIAAAAAEAAAAAAAAAAAAAACAAAAAAAAIAAAADAAAAFAADAAEAAAAUAAQAkAAAACAAIAAEAAAAAQAg5gXwBvAN8CPwLvBu8HDwivCX8JzxI/Fl//3//wAAAAAAIOYA8ATwDPAj8C7wbvBw8Ifwl/Cc8SPxZP/9//8AAf/jGgQQBhABD+wP4g+jD6IPjA+AD3wO9g62AAMAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAEAAJrVlLJfDzz1AAsCAAAAAADP/GODAAAAAM/8Y4MAAP/bAgAB2wAAAAgAAgAAAAAAAAABAAAB4P/gAAACAAAAAAACAAABAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAEAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAdwAAAHcAAACAAAjAZMAHwFJAAABbgAAAgAAAAIAAAACAAAAAgAAAAEAAAACAAAAAW4AAAHcAAAB3AABAdwAAAHcAAAAAFAAABwAAAAAAA4ArgABAAAAAAABAAwAAAABAAAAAAACAA4AQAABAAAAAAADAAwAIgABAAAAAAAEAAwATgABAAAAAAAFABYADAABAAAAAAAGAAYALgABAAAAAAAKADQAWgADAAEECQABAAwAAAADAAEECQACAA4AQAADAAEECQADAAwAIgADAAEECQAEAAwATgADAAEECQAFABYADAADAAEECQAGAAwANAADAAEECQAKADQAWgByAGEAdABpAG4AZwBWAGUAcgBzAGkAbwBuACAAMQAuADAAcgBhAHQAaQBuAGdyYXRpbmcAcgBhAHQAaQBuAGcAUgBlAGcAdQBsAGEAcgByAGEAdABpAG4AZwBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format('woff');
  font-weight: normal;
  font-style: normal;
}

.ui.rating .icon {
  font-family: 'Rating';
  line-height: 1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-weight: normal;
  font-style: normal;
  text-align: center;
}

/* Empty Star */

.ui.rating .icon:before {
  content: '\f006';
}

/* Active Star */

.ui.rating .active.icon:before {
  content: '\f005';
}

/*-------------------
        Star
--------------------*/

/* Unfilled Star */

.ui.star.rating .icon:before {
  content: '\f005';
}

/* Active Star */

.ui.star.rating .active.icon:before {
  content: '\f005';
}

/* Partial */

.ui.star.rating .partial.icon:before {
  content: '\f006';
}

.ui.star.rating .partial.icon {
  content: '\f005';
}

/*-------------------
        Heart
--------------------*/

/* Empty Heart
.ui.heart.rating .icon:before {
  content: '\f08a';
}
*/

.ui.heart.rating .icon:before {
  content: '\f004';
}

/* Active */

.ui.heart.rating .active.icon:before {
  content: '\f004';
}

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Search
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
             Search
*******************************/

.ui.search {
  position: relative;
}

.ui.search > .prompt {
  margin: 0em;
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  text-shadow: none;
  font-style: normal;
  font-weight: normal;
  line-height: 1.2142em;
  padding: 0.67861429em 1em;
  font-size: 1em;
  background: #FFFFFF;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0em 0em 0em 0em transparent inset;
  -webkit-transition: background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, border-color 0.1s ease;
  transition: background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, border-color 0.1s ease;
}

.ui.search .prompt {
  border-radius: 500rem;
}

/*--------------
     Icon
---------------*/

.ui.search .prompt ~ .search.icon {
  cursor: pointer;
}

/*--------------
    Results
---------------*/

.ui.search > .results {
  display: none;
  position: absolute;
  top: 100%;
  left: 0%;
  -webkit-transform-origin: center top;
  transform-origin: center top;
  background: #FFFFFF;
  margin-top: 0.5em;
  width: 18em;
  border-radius: 0.28571429rem;
  box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.08);
  border: 1px solid #D4D4D5;
  z-index: 998;
}

.ui.search > .results > :first-child {
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}

.ui.search > .results > :last-child {
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}

/*--------------
    Result
---------------*/

.ui.search > .results .result {
  cursor: pointer;
  display: block;
  overflow: hidden;
  font-size: 1em;
  padding: 0.85714286em 1.14285714em;
  color: rgba(0, 0, 0, 0.87);
  line-height: 1.33;
  border-bottom: 1px solid rgba(34, 36, 38, 0.1);
}

.ui.search > .results .result:last-child {
  border-bottom: none !important;
}

/* Image */

.ui.search > .results .result .image {
  float: right;
  overflow: hidden;
  background: none;
  width: 5em;
  height: 3em;
  border-radius: 0.25em;
}

.ui.search > .results .result .image img {
  display: block;
  width: auto;
  height: 100%;
}

/*--------------
      Info
---------------*/

.ui.search > .results .result .image + .content {
  margin: 0em 6em 0em 0em;
}

.ui.search > .results .result .title {
  margin: -0.14285em 0em 0em;
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  font-weight: bold;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.85);
}

.ui.search > .results .result .description {
  margin-top: 0;
  font-size: 0.92857143em;
  color: rgba(0, 0, 0, 0.4);
}

.ui.search > .results .result .price {
  float: right;
  color: #21BA45;
}

/*--------------
    Message
---------------*/

.ui.search > .results > .message {
  padding: 1em 1em;
}

.ui.search > .results > .message .header {
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.87);
}

.ui.search > .results > .message .description {
  margin-top: 0.25rem;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.87);
}

/* View All Results */

.ui.search > .results > .action {
  display: block;
  border-top: none;
  background: #F3F4F5;
  padding: 0.92857143em 1em;
  color: rgba(0, 0, 0, 0.87);
  font-weight: bold;
  text-align: center;
}

/*******************************
            States
*******************************/

/*--------------------
       Focus
---------------------*/

.ui.search > .prompt:focus {
  border-color: rgba(34, 36, 38, 0.35);
  background: #FFFFFF;
  color: rgba(0, 0, 0, 0.95);
}

/*--------------------
       Loading
---------------------*/

.ui.loading.search .input > i.icon:before {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  margin: -0.64285714em 0em 0em -0.64285714em;
  width: 1.28571429em;
  height: 1.28571429em;
  border-radius: 500rem;
  border: 0.2em solid rgba(0, 0, 0, 0.1);
}

.ui.loading.search .input > i.icon:after {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  margin: -0.64285714em 0em 0em -0.64285714em;
  width: 1.28571429em;
  height: 1.28571429em;
  -webkit-animation: button-spin 0.6s linear;
  animation: button-spin 0.6s linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  border-radius: 500rem;
  border-color: #767676 transparent transparent;
  border-style: solid;
  border-width: 0.2em;
  box-shadow: 0px 0px 0px 1px transparent;
}

/*--------------
      Hover
---------------*/

.ui.search > .results .result:hover,
.ui.category.search > .results .category .result:hover {
  background: #F9FAFB;
}

.ui.search .action:hover {
  background: #E0E0E0;
}

/*--------------
      Active
---------------*/

.ui.category.search > .results .category.active {
  background: #F3F4F5;
}

.ui.category.search > .results .category.active > .name {
  color: rgba(0, 0, 0, 0.87);
}

.ui.search > .results .result.active,
.ui.category.search > .results .category .result.active {
  position: relative;
  border-left-color: rgba(34, 36, 38, 0.1);
  background: #F3F4F5;
  box-shadow: none;
}

.ui.search > .results .result.active .title {
  color: rgba(0, 0, 0, 0.85);
}

.ui.search > .results .result.active .description {
  color: rgba(0, 0, 0, 0.85);
}

/*******************************
           Types
*******************************/

/*--------------
    Selection
---------------*/

.ui.search.selection .prompt {
  border-radius: 0.28571429rem;
}

/* Remove input */

.ui.search.selection > .icon.input > .remove.icon {
  pointer-events: none;
  position: absolute;
  left: auto;
  opacity: 0;
  color: '';
  top: 0em;
  right: 0em;
  -webkit-transition: color 0.1s ease, opacity 0.1s ease;
  transition: color 0.1s ease, opacity 0.1s ease;
}

.ui.search.selection > .icon.input > .active.remove.icon {
  cursor: pointer;
  opacity: 0.8;
  pointer-events: auto;
}

.ui.search.selection > .icon.input:not([class*="left icon"]) > .icon ~ .remove.icon {
  right: 1.85714em;
}

.ui.search.selection > .icon.input > .remove.icon:hover {
  opacity: 1;
  color: #DB2828;
}

/*--------------
    Category
---------------*/

.ui.category.search .results {
  width: 28em;
}

/* Category */

.ui.category.search > .results .category {
  background: #F3F4F5;
  box-shadow: none;
  border-bottom: 1px solid rgba(34, 36, 38, 0.1);
  -webkit-transition: background 0.1s ease, border-color 0.1s ease;
  transition: background 0.1s ease, border-color 0.1s ease;
}

/* Last Category */

.ui.category.search > .results .category:last-child {
  border-bottom: none;
}

/* First / Last */

.ui.category.search > .results .category:first-child .name + .result {
  border-radius: 0em 0.28571429rem 0em 0em;
}

.ui.category.search > .results .category:last-child .result:last-child {
  border-radius: 0em 0em 0.28571429rem 0em;
}

/* Category Result */

.ui.category.search > .results .category .result {
  background: #FFFFFF;
  margin-left: 100px;
  border-left: 1px solid rgba(34, 36, 38, 0.15);
  border-bottom: 1px solid rgba(34, 36, 38, 0.1);
  -webkit-transition: background 0.1s ease, border-color 0.1s ease;
  transition: background 0.1s ease, border-color 0.1s ease;
  padding: 0.85714286em 1.14285714em;
}

.ui.category.search > .results .category:last-child .result:last-child {
  border-bottom: none;
}

/* Category Result Name */

.ui.category.search > .results .category > .name {
  width: 100px;
  background: transparent;
  font-family: sans-serif, "Helvetica Neue", Arial, "Hiragino Sans GB", 'Lato', "Microsoft YaHei", Helvetica, sans-serif;
  font-size: 1em;
  float: 1em;
  float: left;
  padding: 0.4em 1em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.4);
}

/*******************************
           Variations
*******************************/

/*-------------------
     Left / Right
--------------------*/

.ui[class*="left aligned"].search > .results {
  right: auto;
  left: 0%;
}

.ui[class*="right aligned"].search > .results {
  right: 0%;
  left: auto;
}

/*--------------
    Fluid
---------------*/

.ui.fluid.search .results {
  width: 100%;
}

/*--------------
      Sizes
---------------*/

.ui.mini.search {
  font-size: 0.71428571em;
}

.ui.small.search {
  font-size: 0.92857143em;
}

.ui.search {
  font-size: 1em;
}

.ui.large.search {
  font-size: 1.14285714em;
}

.ui.big.search {
  font-size: 1.28571429em;
}

.ui.huge.search {
  font-size: 1.42857143em;
}

.ui.massive.search {
  font-size: 1.71428571em;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Shape
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
              Shape
*******************************/

.ui.shape {
  position: relative;
  vertical-align: top;
  display: inline-block;
  -webkit-perspective: 2000px;
  perspective: 2000px;
  -webkit-transition: left 0.6s ease-in-out, width 0.6s ease-in-out, height 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  transition: left 0.6s ease-in-out, width 0.6s ease-in-out, height 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, left 0.6s ease-in-out, width 0.6s ease-in-out, height 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, left 0.6s ease-in-out, width 0.6s ease-in-out, height 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.ui.shape .sides {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.ui.shape .side {
  opacity: 1;
  width: 100%;
  margin: 0em !important;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.ui.shape .side {
  display: none;
}

.ui.shape .side * {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}

/*******************************
             Types
*******************************/

.ui.cube.shape .side {
  min-width: 15em;
  height: 15em;
  padding: 2em;
  background-color: #E6E6E6;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
}

.ui.cube.shape .side > .content {
  width: 100%;
  height: 100%;
  display: table;
  text-align: center;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

.ui.cube.shape .side > .content > div {
  display: table-cell;
  vertical-align: middle;
  font-size: 2em;
}

/*******************************
          Variations
*******************************/

.ui.text.shape.animating .sides {
  position: static;
}

.ui.text.shape .side {
  white-space: nowrap;
}

.ui.text.shape .side > * {
  white-space: normal;
}

/*******************************
             States
*******************************/

/*--------------
    Loading
---------------*/

.ui.loading.shape {
  position: absolute;
  top: -9999px;
  left: -9999px;
}

/*--------------
    Animating
---------------*/

.ui.shape .animating.side {
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
  z-index: 100;
}

.ui.shape .hidden.side {
  opacity: 0.6;
}

/*--------------
      CSS
---------------*/

.ui.shape.animating .sides {
  position: absolute;
}

.ui.shape.animating .sides {
  -webkit-transition: left 0.6s ease-in-out, width 0.6s ease-in-out, height 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  transition: left 0.6s ease-in-out, width 0.6s ease-in-out, height 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, left 0.6s ease-in-out, width 0.6s ease-in-out, height 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, left 0.6s ease-in-out, width 0.6s ease-in-out, height 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.ui.shape.animating .side {
  -webkit-transition: opacity 0.6s ease-in-out;
  transition: opacity 0.6s ease-in-out;
}

/*--------------
     Active
---------------*/

.ui.shape .active.side {
  display: block;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
        User Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Sidebar
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Sidebar
*******************************/

/* Sidebar Menu */

.ui.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: none;
  transition: none;
  will-change: transform;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  visibility: hidden;
  -webkit-overflow-scrolling: touch;
  height: 100% !important;
  max-height: 100%;
  border-radius: 0em !important;
  margin: 0em !important;
  overflow-y: auto !important;
  z-index: 102;
}

/* GPU Layers for Child Elements */

.ui.sidebar > * {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

/*--------------
   Direction
---------------*/

.ui.left.sidebar {
  right: auto;
  left: 0px;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}

.ui.right.sidebar {
  right: 0px !important;
  left: auto !important;
  -webkit-transform: translate3d(100%, 0%, 0);
  transform: translate3d(100%, 0%, 0);
}

.ui.top.sidebar,
.ui.bottom.sidebar {
  width: 100% !important;
  height: auto !important;
}

.ui.top.sidebar {
  top: 0px !important;
  bottom: auto !important;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

.ui.bottom.sidebar {
  top: auto !important;
  bottom: 0px !important;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

/*--------------
     Pushable
---------------*/

.pushable {
  height: 100%;
  overflow-x: hidden;
  padding: 0em !important;
}

/* Whole Page */

body.pushable {
  background: #545454 !important;
}

/* Page Context */

.pushable:not(body) {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.pushable:not(body) > .ui.sidebar,
.pushable:not(body) > .fixed,
.pushable:not(body) > .pusher:after {
  position: absolute;
}

/*--------------
     Fixed
---------------*/

.pushable > .fixed {
  position: fixed;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: -webkit-transform 500ms ease;
  transition: -webkit-transform 500ms ease;
  transition: transform 500ms ease;
  transition: transform 500ms ease, -webkit-transform 500ms ease;
  will-change: transform;
  z-index: 101;
}

/*--------------
     Page
---------------*/

.pushable > .pusher {
  position: relative;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  min-height: 100%;
  -webkit-transition: -webkit-transform 500ms ease;
  transition: -webkit-transform 500ms ease;
  transition: transform 500ms ease;
  transition: transform 500ms ease, -webkit-transform 500ms ease;
  z-index: 2;
}

body.pushable > .pusher {
  background: #FFFFFF;
}

/* Pusher should inherit background from context */

.pushable > .pusher {
  background: inherit;
}

/*--------------
     Dimmer
---------------*/

.pushable > .pusher:after {
  position: fixed;
  top: 0px;
  right: 0px;
  content: '';
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  opacity: 0;
  -webkit-transition: opacity 500ms;
  transition: opacity 500ms;
  will-change: opacity;
  z-index: 1000;
}

/*--------------
    Coupling
---------------*/

.ui.sidebar.menu .item {
  border-radius: 0em !important;
}

/*******************************
            States
*******************************/

/*--------------
     Dimmed
---------------*/

.pushable > .pusher.dimmed:after {
  width: 100% !important;
  height: 100% !important;
  opacity: 1 !important;
}

/*--------------
    Animating
---------------*/

.ui.animating.sidebar {
  visibility: visible;
}

/*--------------
     Visible
---------------*/

.ui.visible.sidebar {
  visibility: visible;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/* Shadow Direction */

.ui.left.visible.sidebar,
.ui.right.visible.sidebar {
  box-shadow: 0px 0px 20px rgba(34, 36, 38, 0.15);
}

.ui.top.visible.sidebar,
.ui.bottom.visible.sidebar {
  box-shadow: 0px 0px 20px rgba(34, 36, 38, 0.15);
}

/* Visible On Load */

.ui.visible.left.sidebar ~ .fixed,
.ui.visible.left.sidebar ~ .pusher {
  -webkit-transform: translate3d(260px, 0, 0);
  transform: translate3d(260px, 0, 0);
}

.ui.visible.right.sidebar ~ .fixed,
.ui.visible.right.sidebar ~ .pusher {
  -webkit-transform: translate3d(-260px, 0, 0);
  transform: translate3d(-260px, 0, 0);
}

.ui.visible.top.sidebar ~ .fixed,
.ui.visible.top.sidebar ~ .pusher {
  -webkit-transform: translate3d(0, 36px, 0);
  transform: translate3d(0, 36px, 0);
}

.ui.visible.bottom.sidebar ~ .fixed,
.ui.visible.bottom.sidebar ~ .pusher {
  -webkit-transform: translate3d(0, -36px, 0);
  transform: translate3d(0, -36px, 0);
}

/* opposite sides visible forces content overlay */

.ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .fixed,
.ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher,
.ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .fixed,
.ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/*--------------
       iOS
---------------*/

/*
  iOS incorrectly sizes document when content
  is presented outside of view with 2Dtranslate
*/

html.ios {
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

html.ios,
html.ios body {
  height: initial !important;
}

/*******************************
          Variations
*******************************/

/*--------------
     Width
---------------*/

/* Left / Right */

.ui.thin.left.sidebar,
.ui.thin.right.sidebar {
  width: 150px;
}

.ui[class*="very thin"].left.sidebar,
.ui[class*="very thin"].right.sidebar {
  width: 60px;
}

.ui.left.sidebar,
.ui.right.sidebar {
  width: 260px;
}

.ui.wide.left.sidebar,
.ui.wide.right.sidebar {
  width: 350px;
}

.ui[class*="very wide"].left.sidebar,
.ui[class*="very wide"].right.sidebar {
  width: 475px;
}

/* Left Visible */

.ui.visible.thin.left.sidebar ~ .fixed,
.ui.visible.thin.left.sidebar ~ .pusher {
  -webkit-transform: translate3d(150px, 0, 0);
  transform: translate3d(150px, 0, 0);
}

.ui.visible[class*="very thin"].left.sidebar ~ .fixed,
.ui.visible[class*="very thin"].left.sidebar ~ .pusher {
  -webkit-transform: translate3d(60px, 0, 0);
  transform: translate3d(60px, 0, 0);
}

.ui.visible.wide.left.sidebar ~ .fixed,
.ui.visible.wide.left.sidebar ~ .pusher {
  -webkit-transform: translate3d(350px, 0, 0);
  transform: translate3d(350px, 0, 0);
}

.ui.visible[class*="very wide"].left.sidebar ~ .fixed,
.ui.visible[class*="very wide"].left.sidebar ~ .pusher {
  -webkit-transform: translate3d(475px, 0, 0);
  transform: translate3d(475px, 0, 0);
}

/* Right Visible */

.ui.visible.thin.right.sidebar ~ .fixed,
.ui.visible.thin.right.sidebar ~ .pusher {
  -webkit-transform: translate3d(-150px, 0, 0);
  transform: translate3d(-150px, 0, 0);
}

.ui.visible[class*="very thin"].right.sidebar ~ .fixed,
.ui.visible[class*="very thin"].right.sidebar ~ .pusher {
  -webkit-transform: translate3d(-60px, 0, 0);
  transform: translate3d(-60px, 0, 0);
}

.ui.visible.wide.right.sidebar ~ .fixed,
.ui.visible.wide.right.sidebar ~ .pusher {
  -webkit-transform: translate3d(-350px, 0, 0);
  transform: translate3d(-350px, 0, 0);
}

.ui.visible[class*="very wide"].right.sidebar ~ .fixed,
.ui.visible[class*="very wide"].right.sidebar ~ .pusher {
  -webkit-transform: translate3d(-475px, 0, 0);
  transform: translate3d(-475px, 0, 0);
}

/*******************************
          Animations
*******************************/

/*--------------
    Overlay
---------------*/

/* Set-up */

.ui.overlay.sidebar {
  z-index: 102;
}

/* Initial */

.ui.left.overlay.sidebar {
  -webkit-transform: translate3d(-100%, 0%, 0);
  transform: translate3d(-100%, 0%, 0);
}

.ui.right.overlay.sidebar {
  -webkit-transform: translate3d(100%, 0%, 0);
  transform: translate3d(100%, 0%, 0);
}

.ui.top.overlay.sidebar {
  -webkit-transform: translate3d(0%, -100%, 0);
  transform: translate3d(0%, -100%, 0);
}

.ui.bottom.overlay.sidebar {
  -webkit-transform: translate3d(0%, 100%, 0);
  transform: translate3d(0%, 100%, 0);
}

/* Animation */

.animating.ui.overlay.sidebar,
.ui.visible.overlay.sidebar {
  -webkit-transition: -webkit-transform 500ms ease;
  transition: -webkit-transform 500ms ease;
  transition: transform 500ms ease;
  transition: transform 500ms ease, -webkit-transform 500ms ease;
}

/* End - Sidebar */

.ui.visible.left.overlay.sidebar {
  -webkit-transform: translate3d(0%, 0%, 0);
  transform: translate3d(0%, 0%, 0);
}

.ui.visible.right.overlay.sidebar {
  -webkit-transform: translate3d(0%, 0%, 0);
  transform: translate3d(0%, 0%, 0);
}

.ui.visible.top.overlay.sidebar {
  -webkit-transform: translate3d(0%, 0%, 0);
  transform: translate3d(0%, 0%, 0);
}

.ui.visible.bottom.overlay.sidebar {
  -webkit-transform: translate3d(0%, 0%, 0);
  transform: translate3d(0%, 0%, 0);
}

/* End - Pusher */

.ui.visible.overlay.sidebar ~ .fixed,
.ui.visible.overlay.sidebar ~ .pusher {
  -webkit-transform: none !important;
  transform: none !important;
}

/*--------------
      Push
---------------*/

/* Initial */

.ui.push.sidebar {
  -webkit-transition: -webkit-transform 500ms ease;
  transition: -webkit-transform 500ms ease;
  transition: transform 500ms ease;
  transition: transform 500ms ease, -webkit-transform 500ms ease;
  z-index: 102;
}

/* Sidebar - Initial */

.ui.left.push.sidebar {
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}

.ui.right.push.sidebar {
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}

.ui.top.push.sidebar {
  -webkit-transform: translate3d(0%, -100%, 0);
  transform: translate3d(0%, -100%, 0);
}

.ui.bottom.push.sidebar {
  -webkit-transform: translate3d(0%, 100%, 0);
  transform: translate3d(0%, 100%, 0);
}

/* End */

.ui.visible.push.sidebar {
  -webkit-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0);
}

/*--------------
    Uncover
---------------*/

/* Initial */

.ui.uncover.sidebar {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 1;
}

/* End */

.ui.visible.uncover.sidebar {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform 500ms ease;
  transition: -webkit-transform 500ms ease;
  transition: transform 500ms ease;
  transition: transform 500ms ease, -webkit-transform 500ms ease;
}

/*--------------
   Slide Along
---------------*/

/* Initial */

.ui.slide.along.sidebar {
  z-index: 1;
}

/* Sidebar - Initial */

.ui.left.slide.along.sidebar {
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
}

.ui.right.slide.along.sidebar {
  -webkit-transform: translate3d(50%, 0, 0);
  transform: translate3d(50%, 0, 0);
}

.ui.top.slide.along.sidebar {
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}

.ui.bottom.slide.along.sidebar {
  -webkit-transform: translate3d(0%, 50%, 0);
  transform: translate3d(0%, 50%, 0);
}

/* Animation */

.ui.animating.slide.along.sidebar {
  -webkit-transition: -webkit-transform 500ms ease;
  transition: -webkit-transform 500ms ease;
  transition: transform 500ms ease;
  transition: transform 500ms ease, -webkit-transform 500ms ease;
}

/* End */

.ui.visible.slide.along.sidebar {
  -webkit-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0);
}

/*--------------
   Slide Out
---------------*/

/* Initial */

.ui.slide.out.sidebar {
  z-index: 1;
}

/* Sidebar - Initial */

.ui.left.slide.out.sidebar {
  -webkit-transform: translate3d(50%, 0, 0);
  transform: translate3d(50%, 0, 0);
}

.ui.right.slide.out.sidebar {
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
}

.ui.top.slide.out.sidebar {
  -webkit-transform: translate3d(0%, 50%, 0);
  transform: translate3d(0%, 50%, 0);
}

.ui.bottom.slide.out.sidebar {
  -webkit-transform: translate3d(0%, -50%, 0);
  transform: translate3d(0%, -50%, 0);
}

/* Animation */

.ui.animating.slide.out.sidebar {
  -webkit-transition: -webkit-transform 500ms ease;
  transition: -webkit-transform 500ms ease;
  transition: transform 500ms ease;
  transition: transform 500ms ease, -webkit-transform 500ms ease;
}

/* End */

.ui.visible.slide.out.sidebar {
  -webkit-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0);
}

/*--------------
   Scale Down
---------------*/

/* Initial */

.ui.scale.down.sidebar {
  -webkit-transition: -webkit-transform 500ms ease;
  transition: -webkit-transform 500ms ease;
  transition: transform 500ms ease;
  transition: transform 500ms ease, -webkit-transform 500ms ease;
  z-index: 102;
}

/* Sidebar - Initial  */

.ui.left.scale.down.sidebar {
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}

.ui.right.scale.down.sidebar {
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}

.ui.top.scale.down.sidebar {
  -webkit-transform: translate3d(0%, -100%, 0);
  transform: translate3d(0%, -100%, 0);
}

.ui.bottom.scale.down.sidebar {
  -webkit-transform: translate3d(0%, 100%, 0);
  transform: translate3d(0%, 100%, 0);
}

/* Pusher - Initial */

.ui.scale.down.left.sidebar ~ .pusher {
  -webkit-transform-origin: 75% 50%;
  transform-origin: 75% 50%;
}

.ui.scale.down.right.sidebar ~ .pusher {
  -webkit-transform-origin: 25% 50%;
  transform-origin: 25% 50%;
}

.ui.scale.down.top.sidebar ~ .pusher {
  -webkit-transform-origin: 50% 75%;
  transform-origin: 50% 75%;
}

.ui.scale.down.bottom.sidebar ~ .pusher {
  -webkit-transform-origin: 50% 25%;
  transform-origin: 50% 25%;
}

/* Animation */

.ui.animating.scale.down > .visible.ui.sidebar {
  -webkit-transition: -webkit-transform 500ms ease;
  transition: -webkit-transform 500ms ease;
  transition: transform 500ms ease;
  transition: transform 500ms ease, -webkit-transform 500ms ease;
}

.ui.visible.scale.down.sidebar ~ .pusher,
.ui.animating.scale.down.sidebar ~ .pusher {
  display: block !important;
  width: 100%;
  height: 100%;
  overflow: hidden !important;
}

/* End */

.ui.visible.scale.down.sidebar {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.ui.visible.scale.down.sidebar ~ .pusher {
  -webkit-transform: scale(0.75);
  transform: scale(0.75);
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Sticky
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
            Sticky
*******************************/

.ui.sticky {
  position: static;
  -webkit-transition: none;
  transition: none;
  z-index: 800;
}

/*******************************
            States
*******************************/

/* Bound */

.ui.sticky.bound {
  position: absolute;
  left: auto;
  right: auto;
}

/* Fixed */

.ui.sticky.fixed {
  position: fixed;
  left: auto;
  right: auto;
}

/* Bound/Fixed Position */

.ui.sticky.bound.top,
.ui.sticky.fixed.top {
  top: 0px;
  bottom: auto;
}

.ui.sticky.bound.bottom,
.ui.sticky.fixed.bottom {
  top: auto;
  bottom: 0px;
}

/*******************************
            Types
*******************************/

.ui.native.sticky {
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
}

/*******************************
         Theme Overrides
*******************************/

/*******************************
         Site Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Tab
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
           UI Tabs
*******************************/

.ui.tab {
  display: none;
}

/*******************************
             States
*******************************/

/*--------------------
       Active
---------------------*/

.ui.tab.active,
.ui.tab.open {
  display: block;
}

/*--------------------
       Loading
---------------------*/

.ui.tab.loading {
  position: relative;
  overflow: hidden;
  display: block;
  min-height: 250px;
}

.ui.tab.loading * {
  position: relative !important;
  left: -10000px !important;
}

.ui.tab.loading:before,
.ui.tab.loading.segment:before {
  position: absolute;
  content: '';
  top: 100px;
  left: 50%;
  margin: -1.25em 0em 0em -1.25em;
  width: 2.5em;
  height: 2.5em;
  border-radius: 500rem;
  border: 0.2em solid rgba(0, 0, 0, 0.1);
}

.ui.tab.loading:after,
.ui.tab.loading.segment:after {
  position: absolute;
  content: '';
  top: 100px;
  left: 50%;
  margin: -1.25em 0em 0em -1.25em;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation: button-spin 0.6s linear;
  animation: button-spin 0.6s linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  border-radius: 500rem;
  border-color: #767676 transparent transparent;
  border-style: solid;
  border-width: 0.2em;
  box-shadow: 0px 0px 0px 1px transparent;
}

/*******************************
         Tab Overrides
*******************************/

/*******************************
        User Overrides
*******************************/
/*!
 * # Semantic UI 2.1.8 - Transition
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

/*******************************
          Transitions
*******************************/

.transition {
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-duration: 300ms;
  animation-duration: 300ms;
  -webkit-animation-timing-function: ease;
  animation-timing-function: ease;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

/*******************************
            States
*******************************/

/* Animating */

.animating.transition {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  visibility: visible !important;
}

/* Loading */

.loading.transition {
  position: absolute;
  top: -99999px;
  left: -99999px;
}

/* Hidden */

.hidden.transition {
  display: none;
  visibility: hidden;
}

/* Visible */

.visible.transition {
  display: block !important;
  visibility: visible !important;
  /*  backface-visibility: @backfaceVisibility;
  transform: @use3DAcceleration;*/
}

/* Disabled */

.disabled.transition {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}

/*******************************
          Variations
*******************************/

.looping.transition {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

/*******************************
          Transitions
*******************************/

/*
  Some transitions adapted from Animate CSS
  https://github.com/daneden/animate.css

  Additional transitions adapted from Glide
  by Nick Pettit - https://github.com/nickpettit/glide
*/

/*--------------
     Browse
---------------*/

.transition.browse {
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
}

.transition.browse.in {
  -webkit-animation-name: browseIn;
  animation-name: browseIn;
}

.transition.browse.out,
.transition.browse.left.out {
  -webkit-animation-name: browseOutLeft;
  animation-name: browseOutLeft;
}

.transition.browse.right.out {
  -webkit-animation-name: browseOutRight;
  animation-name: browseOutRight;
}

/* In */

@-webkit-keyframes browseIn {
  0% {
    -webkit-transform: scale(0.8) translateZ(0px);
    transform: scale(0.8) translateZ(0px);
    z-index: -1;
  }

  10% {
    -webkit-transform: scale(0.8) translateZ(0px);
    transform: scale(0.8) translateZ(0px);
    z-index: -1;
    opacity: 0.7;
  }

  80% {
    -webkit-transform: scale(1.05) translateZ(0px);
    transform: scale(1.05) translateZ(0px);
    opacity: 1;
    z-index: 999;
  }

  100% {
    -webkit-transform: scale(1) translateZ(0px);
    transform: scale(1) translateZ(0px);
    z-index: 999;
  }
}

@keyframes browseIn {
  0% {
    -webkit-transform: scale(0.8) translateZ(0px);
    transform: scale(0.8) translateZ(0px);
    z-index: -1;
  }

  10% {
    -webkit-transform: scale(0.8) translateZ(0px);
    transform: scale(0.8) translateZ(0px);
    z-index: -1;
    opacity: 0.7;
  }

  80% {
    -webkit-transform: scale(1.05) translateZ(0px);
    transform: scale(1.05) translateZ(0px);
    opacity: 1;
    z-index: 999;
  }

  100% {
    -webkit-transform: scale(1) translateZ(0px);
    transform: scale(1) translateZ(0px);
    z-index: 999;
  }
}

/* Out */

@-webkit-keyframes browseOutLeft {
  0% {
    z-index: 999;
    -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg);
    transform: translateX(0%) rotateY(0deg) rotateX(0deg);
  }

  50% {
    z-index: -1;
    -webkit-transform: translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);
    transform: translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);
  }

  80% {
    opacity: 1;
  }

  100% {
    z-index: -1;
    -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px);
    transform: translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px);
    opacity: 0;
  }
}

@keyframes browseOutLeft {
  0% {
    z-index: 999;
    -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg);
    transform: translateX(0%) rotateY(0deg) rotateX(0deg);
  }

  50% {
    z-index: -1;
    -webkit-transform: translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);
    transform: translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);
  }

  80% {
    opacity: 1;
  }

  100% {
    z-index: -1;
    -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px);
    transform: translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px);
    opacity: 0;
  }
}

@-webkit-keyframes browseOutRight {
  0% {
    z-index: 999;
    -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg);
    transform: translateX(0%) rotateY(0deg) rotateX(0deg);
  }

  50% {
    z-index: 1;
    -webkit-transform: translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);
    transform: translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);
  }

  80% {
    opacity: 1;
  }

  100% {
    z-index: 1;
    -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px);
    transform: translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px);
    opacity: 0;
  }
}

@keyframes browseOutRight {
  0% {
    z-index: 999;
    -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg);
    transform: translateX(0%) rotateY(0deg) rotateX(0deg);
  }

  50% {
    z-index: 1;
    -webkit-transform: translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);
    transform: translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);
  }

  80% {
    opacity: 1;
  }

  100% {
    z-index: 1;
    -webkit-transform: translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px);
    transform: translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px);
    opacity: 0;
  }
}

/*--------------
     Drop
---------------*/

.drop.transition {
  -webkit-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-duration: 400ms;
  animation-duration: 400ms;
  -webkit-animation-timing-function: cubic-bezier(0.34, 1.61, 0.7, 1);
  animation-timing-function: cubic-bezier(0.34, 1.61, 0.7, 1);
}

.drop.transition.in {
  -webkit-animation-name: dropIn;
  animation-name: dropIn;
}

.drop.transition.out {
  -webkit-animation-name: dropOut;
  animation-name: dropOut;
}

/* Drop */

@-webkit-keyframes dropIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes dropIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@-webkit-keyframes dropOut {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
}

@keyframes dropOut {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
}

/*--------------
      Fade
---------------*/

.transition.fade.in {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.transition[class*="fade up"].in {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

.transition[class*="fade down"].in {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

.transition[class*="fade left"].in {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

.transition[class*="fade right"].in {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

.transition.fade.out {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

.transition[class*="fade up"].out {
  -webkit-animation-name: fadeOutUp;
  animation-name: fadeOutUp;
}

.transition[class*="fade down"].out {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}

.transition[class*="fade left"].out {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

.transition[class*="fade right"].out {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}

/* In */

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(10%);
    transform: translateY(10%);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(10%);
    transform: translateY(10%);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-10%);
    transform: translateY(-10%);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-10%);
    transform: translateY(-10%);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }
}

@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(10%);
    transform: translateX(10%);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(10%);
    transform: translateX(10%);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}

@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-10%);
    transform: translateX(-10%);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-10%);
    transform: translateX(-10%);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}

/* Out */

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@-webkit-keyframes fadeOutUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(5%);
    transform: translateY(5%);
  }
}

@keyframes fadeOutUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(5%);
    transform: translateY(5%);
  }
}

@-webkit-keyframes fadeOutDown {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-5%);
    transform: translateY(-5%);
  }
}

@keyframes fadeOutDown {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-5%);
    transform: translateY(-5%);
  }
}

@-webkit-keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(5%);
    transform: translateX(5%);
  }
}

@keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(5%);
    transform: translateX(5%);
  }
}

@-webkit-keyframes fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-5%);
    transform: translateX(-5%);
  }
}

@keyframes fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-5%);
    transform: translateX(-5%);
  }
}

/*--------------
     Flips
---------------*/

.flip.transition.in,
.flip.transition.out {
  -webkit-animation-duration: 600ms;
  animation-duration: 600ms;
}

.horizontal.flip.transition.in {
  -webkit-animation-name: horizontalFlipIn;
  animation-name: horizontalFlipIn;
}

.horizontal.flip.transition.out {
  -webkit-animation-name: horizontalFlipOut;
  animation-name: horizontalFlipOut;
}

.vertical.flip.transition.in {
  -webkit-animation-name: verticalFlipIn;
  animation-name: verticalFlipIn;
}

.vertical.flip.transition.out {
  -webkit-animation-name: verticalFlipOut;
  animation-name: verticalFlipOut;
}

/* In */

@-webkit-keyframes horizontalFlipIn {
  0% {
    -webkit-transform: perspective(2000px) rotateY(-90deg);
    transform: perspective(2000px) rotateY(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform: perspective(2000px) rotateY(0deg);
    transform: perspective(2000px) rotateY(0deg);
    opacity: 1;
  }
}

@keyframes horizontalFlipIn {
  0% {
    -webkit-transform: perspective(2000px) rotateY(-90deg);
    transform: perspective(2000px) rotateY(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform: perspective(2000px) rotateY(0deg);
    transform: perspective(2000px) rotateY(0deg);
    opacity: 1;
  }
}

@-webkit-keyframes verticalFlipIn {
  0% {
    -webkit-transform: perspective(2000px) rotateX(-90deg);
    transform: perspective(2000px) rotateX(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform: perspective(2000px) rotateX(0deg);
    transform: perspective(2000px) rotateX(0deg);
    opacity: 1;
  }
}

@keyframes verticalFlipIn {
  0% {
    -webkit-transform: perspective(2000px) rotateX(-90deg);
    transform: perspective(2000px) rotateX(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform: perspective(2000px) rotateX(0deg);
    transform: perspective(2000px) rotateX(0deg);
    opacity: 1;
  }
}

/* Out */

@-webkit-keyframes horizontalFlipOut {
  0% {
    -webkit-transform: perspective(2000px) rotateY(0deg);
    transform: perspective(2000px) rotateY(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(2000px) rotateY(90deg);
    transform: perspective(2000px) rotateY(90deg);
    opacity: 0;
  }
}

@keyframes horizontalFlipOut {
  0% {
    -webkit-transform: perspective(2000px) rotateY(0deg);
    transform: perspective(2000px) rotateY(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(2000px) rotateY(90deg);
    transform: perspective(2000px) rotateY(90deg);
    opacity: 0;
  }
}

@-webkit-keyframes verticalFlipOut {
  0% {
    -webkit-transform: perspective(2000px) rotateX(0deg);
    transform: perspective(2000px) rotateX(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(2000px) rotateX(-90deg);
    transform: perspective(2000px) rotateX(-90deg);
    opacity: 0;
  }
}

@keyframes verticalFlipOut {
  0% {
    -webkit-transform: perspective(2000px) rotateX(0deg);
    transform: perspective(2000px) rotateX(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(2000px) rotateX(-90deg);
    transform: perspective(2000px) rotateX(-90deg);
    opacity: 0;
  }
}

/*--------------
      Scale
---------------*/

.scale.transition.in {
  -webkit-animation-name: scaleIn;
  animation-name: scaleIn;
}

.scale.transition.out {
  -webkit-animation-name: scaleOut;
  animation-name: scaleOut;
}

@-webkit-keyframes scaleIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

/* Out */

@-webkit-keyframes scaleOut {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

@keyframes scaleOut {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

/*--------------
      Fly
---------------*/

/* Inward */

.transition.fly {
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

.transition.fly.in {
  -webkit-animation-name: flyIn;
  animation-name: flyIn;
}

.transition[class*="fly up"].in {
  -webkit-animation-name: flyInUp;
  animation-name: flyInUp;
}

.transition[class*="fly down"].in {
  -webkit-animation-name: flyInDown;
  animation-name: flyInDown;
}

.transition[class*="fly left"].in {
  -webkit-animation-name: flyInLeft;
  animation-name: flyInLeft;
}

.transition[class*="fly right"].in {
  -webkit-animation-name: flyInRight;
  animation-name: flyInRight;
}

/* Outward */

.transition.fly.out {
  -webkit-animation-name: flyOut;
  animation-name: flyOut;
}

.transition[class*="fly up"].out {
  -webkit-animation-name: flyOutUp;
  animation-name: flyOutUp;
}

.transition[class*="fly down"].out {
  -webkit-animation-name: flyOutDown;
  animation-name: flyOutDown;
}

.transition[class*="fly left"].out {
  -webkit-animation-name: flyOutLeft;
  animation-name: flyOutLeft;
}

.transition[class*="fly right"].out {
  -webkit-animation-name: flyOutRight;
  animation-name: flyOutRight;
}

/* In */

@-webkit-keyframes flyIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes flyIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@-webkit-keyframes flyInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 1500px, 0);
    transform: translate3d(0, 1500px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes flyInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 1500px, 0);
    transform: translate3d(0, 1500px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@-webkit-keyframes flyInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -1500px, 0);
    transform: translate3d(0, -1500px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  100% {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes flyInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -1500px, 0);
    transform: translate3d(0, -1500px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  100% {
    -webkit-transform: none;
    transform: none;
  }
}

@-webkit-keyframes flyInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(1500px, 0, 0);
    transform: translate3d(1500px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  100% {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes flyInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(1500px, 0, 0);
    transform: translate3d(1500px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  100% {
    -webkit-transform: none;
    transform: none;
  }
}

@-webkit-keyframes flyInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-1500px, 0, 0);
    transform: translate3d(-1500px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  100% {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes flyInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-1500px, 0, 0);
    transform: translate3d(-1500px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  100% {
    -webkit-transform: none;
    transform: none;
  }
}

/* Out */

@-webkit-keyframes flyOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%, 55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

@keyframes flyOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%, 55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

@-webkit-keyframes flyOutUp {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@keyframes flyOutUp {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@-webkit-keyframes flyOutDown {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes flyOutDown {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

@-webkit-keyframes flyOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

@keyframes flyOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

@-webkit-keyframes flyOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

@keyframes flyOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

/*--------------
     Slide
---------------*/

.transition.slide.in,
.transition[class*="slide down"].in {
  -webkit-animation-name: slideInY;
  animation-name: slideInY;
  -webkit-transform-origin: top center;
  transform-origin: top center;
}

.transition[class*="slide up"].in {
  -webkit-animation-name: slideInY;
  animation-name: slideInY;
  -webkit-transform-origin: bottom center;
  transform-origin: bottom center;
}

.transition[class*="slide left"].in {
  -webkit-animation-name: slideInX;
  animation-name: slideInX;
  -webkit-transform-origin: center right;
  transform-origin: center right;
}

.transition[class*="slide right"].in {
  -webkit-animation-name: slideInX;
  animation-name: slideInX;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}

.transition.slide.out,
.transition[class*="slide down"].out {
  -webkit-animation-name: slideOutY;
  animation-name: slideOutY;
  -webkit-transform-origin: top center;
  transform-origin: top center;
}

.transition[class*="slide up"].out {
  -webkit-animation-name: slideOutY;
  animation-name: slideOutY;
  -webkit-transform-origin: bottom center;
  transform-origin: bottom center;
}

.transition[class*="slide left"].out {
  -webkit-animation-name: slideOutX;
  animation-name: slideOutX;
  -webkit-transform-origin: center right;
  transform-origin: center right;
}

.transition[class*="slide right"].out {
  -webkit-animation-name: slideOutX;
  animation-name: slideOutX;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}

/* In */

@-webkit-keyframes slideInY {
  0% {
    opacity: 0;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
  }

  100% {
    opacity: 1;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}

@keyframes slideInY {
  0% {
    opacity: 0;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
  }

  100% {
    opacity: 1;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}

@-webkit-keyframes slideInX {
  0% {
    opacity: 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }

  100% {
    opacity: 1;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

@keyframes slideInX {
  0% {
    opacity: 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }

  100% {
    opacity: 1;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

/* Out */

@-webkit-keyframes slideOutY {
  0% {
    opacity: 1;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
  }
}

@keyframes slideOutY {
  0% {
    opacity: 1;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
  }
}

@-webkit-keyframes slideOutX {
  0% {
    opacity: 1;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
}

@keyframes slideOutX {
  0% {
    opacity: 1;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
}

/*--------------
     Swing
---------------*/

.transition.swing {
  -webkit-animation-duration: 800ms;
  animation-duration: 800ms;
}

.transition[class*="swing down"].in {
  -webkit-animation-name: swingInX;
  animation-name: swingInX;
  -webkit-transform-origin: top center;
  transform-origin: top center;
}

.transition[class*="swing up"].in {
  -webkit-animation-name: swingInX;
  animation-name: swingInX;
  -webkit-transform-origin: bottom center;
  transform-origin: bottom center;
}

.transition[class*="swing left"].in {
  -webkit-animation-name: swingInY;
  animation-name: swingInY;
  -webkit-transform-origin: center right;
  transform-origin: center right;
}

.transition[class*="swing right"].in {
  -webkit-animation-name: swingInY;
  animation-name: swingInY;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}

.transition.swing.out,
.transition[class*="swing down"].out {
  -webkit-animation-name: swingOutX;
  animation-name: swingOutX;
  -webkit-transform-origin: top center;
  transform-origin: top center;
}

.transition[class*="swing up"].out {
  -webkit-animation-name: swingOutX;
  animation-name: swingOutX;
  -webkit-transform-origin: bottom center;
  transform-origin: bottom center;
}

.transition[class*="swing left"].out {
  -webkit-animation-name: swingOutY;
  animation-name: swingOutY;
  -webkit-transform-origin: center right;
  transform-origin: center right;
}

.transition[class*="swing right"].out {
  -webkit-animation-name: swingOutY;
  animation-name: swingOutY;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}

/* In */

@-webkit-keyframes swingInX {
  0% {
    -webkit-transform: perspective(1000px) rotateX(90deg);
    transform: perspective(1000px) rotateX(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(1000px) rotateX(-30deg);
    transform: perspective(1000px) rotateX(-30deg);
    opacity: 1;
  }

  60% {
    -webkit-transform: perspective(1000px) rotateX(15deg);
    transform: perspective(1000px) rotateX(15deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateX(-7.5deg);
    transform: perspective(1000px) rotateX(-7.5deg);
  }

  100% {
    -webkit-transform: perspective(1000px) rotateX(0deg);
    transform: perspective(1000px) rotateX(0deg);
  }
}

@keyframes swingInX {
  0% {
    -webkit-transform: perspective(1000px) rotateX(90deg);
    transform: perspective(1000px) rotateX(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(1000px) rotateX(-30deg);
    transform: perspective(1000px) rotateX(-30deg);
    opacity: 1;
  }

  60% {
    -webkit-transform: perspective(1000px) rotateX(15deg);
    transform: perspective(1000px) rotateX(15deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateX(-7.5deg);
    transform: perspective(1000px) rotateX(-7.5deg);
  }

  100% {
    -webkit-transform: perspective(1000px) rotateX(0deg);
    transform: perspective(1000px) rotateX(0deg);
  }
}

@-webkit-keyframes swingInY {
  0% {
    -webkit-transform: perspective(1000px) rotateY(-90deg);
    transform: perspective(1000px) rotateY(-90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(1000px) rotateY(30deg);
    transform: perspective(1000px) rotateY(30deg);
    opacity: 1;
  }

  60% {
    -webkit-transform: perspective(1000px) rotateY(-17.5deg);
    transform: perspective(1000px) rotateY(-17.5deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateY(7.5deg);
    transform: perspective(1000px) rotateY(7.5deg);
  }

  100% {
    -webkit-transform: perspective(1000px) rotateY(0deg);
    transform: perspective(1000px) rotateY(0deg);
  }
}

@keyframes swingInY {
  0% {
    -webkit-transform: perspective(1000px) rotateY(-90deg);
    transform: perspective(1000px) rotateY(-90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(1000px) rotateY(30deg);
    transform: perspective(1000px) rotateY(30deg);
    opacity: 1;
  }

  60% {
    -webkit-transform: perspective(1000px) rotateY(-17.5deg);
    transform: perspective(1000px) rotateY(-17.5deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateY(7.5deg);
    transform: perspective(1000px) rotateY(7.5deg);
  }

  100% {
    -webkit-transform: perspective(1000px) rotateY(0deg);
    transform: perspective(1000px) rotateY(0deg);
  }
}

/* Out */

@-webkit-keyframes swingOutX {
  0% {
    -webkit-transform: perspective(1000px) rotateX(0deg);
    transform: perspective(1000px) rotateX(0deg);
  }

  40% {
    -webkit-transform: perspective(1000px) rotateX(-7.5deg);
    transform: perspective(1000px) rotateX(-7.5deg);
  }

  60% {
    -webkit-transform: perspective(1000px) rotateX(17.5deg);
    transform: perspective(1000px) rotateX(17.5deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateX(-30deg);
    transform: perspective(1000px) rotateX(-30deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(1000px) rotateX(90deg);
    transform: perspective(1000px) rotateX(90deg);
    opacity: 0;
  }
}

@keyframes swingOutX {
  0% {
    -webkit-transform: perspective(1000px) rotateX(0deg);
    transform: perspective(1000px) rotateX(0deg);
  }

  40% {
    -webkit-transform: perspective(1000px) rotateX(-7.5deg);
    transform: perspective(1000px) rotateX(-7.5deg);
  }

  60% {
    -webkit-transform: perspective(1000px) rotateX(17.5deg);
    transform: perspective(1000px) rotateX(17.5deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateX(-30deg);
    transform: perspective(1000px) rotateX(-30deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(1000px) rotateX(90deg);
    transform: perspective(1000px) rotateX(90deg);
    opacity: 0;
  }
}

@-webkit-keyframes swingOutY {
  0% {
    -webkit-transform: perspective(1000px) rotateY(0deg);
    transform: perspective(1000px) rotateY(0deg);
  }

  40% {
    -webkit-transform: perspective(1000px) rotateY(7.5deg);
    transform: perspective(1000px) rotateY(7.5deg);
  }

  60% {
    -webkit-transform: perspective(1000px) rotateY(-10deg);
    transform: perspective(1000px) rotateY(-10deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateY(30deg);
    transform: perspective(1000px) rotateY(30deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(1000px) rotateY(-90deg);
    transform: perspective(1000px) rotateY(-90deg);
    opacity: 0;
  }
}

@keyframes swingOutY {
  0% {
    -webkit-transform: perspective(1000px) rotateY(0deg);
    transform: perspective(1000px) rotateY(0deg);
  }

  40% {
    -webkit-transform: perspective(1000px) rotateY(7.5deg);
    transform: perspective(1000px) rotateY(7.5deg);
  }

  60% {
    -webkit-transform: perspective(1000px) rotateY(-10deg);
    transform: perspective(1000px) rotateY(-10deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateY(30deg);
    transform: perspective(1000px) rotateY(30deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(1000px) rotateY(-90deg);
    transform: perspective(1000px) rotateY(-90deg);
    opacity: 0;
  }
}

/*******************************
       Static Animations
*******************************/

/*--------------
    Emphasis
---------------*/

.flash.transition {
  -webkit-animation-duration: 750ms;
  animation-duration: 750ms;
  -webkit-animation-name: flash;
  animation-name: flash;
}

.shake.transition {
  -webkit-animation-duration: 750ms;
  animation-duration: 750ms;
  -webkit-animation-name: shake;
  animation-name: shake;
}

.bounce.transition {
  -webkit-animation-duration: 750ms;
  animation-duration: 750ms;
  -webkit-animation-name: bounce;
  animation-name: bounce;
}

.tada.transition {
  -webkit-animation-duration: 750ms;
  animation-duration: 750ms;
  -webkit-animation-name: tada;
  animation-name: tada;
}

.pulse.transition {
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
  -webkit-animation-name: pulse;
  animation-name: pulse;
}

.jiggle.transition {
  -webkit-animation-duration: 750ms;
  animation-duration: 750ms;
  -webkit-animation-name: jiggle;
  animation-name: jiggle;
}

/* Flash */

@-webkit-keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

@keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

/* Shake */

@-webkit-keyframes shake {
  0%, 100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
}

@keyframes shake {
  0%, 100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
}

/* Bounce */

@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

/* Tada */

@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  10%, 20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }

  100% {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

@keyframes tada {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  10%, 20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }

  100% {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

/* Pulse */

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  50% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  50% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

/* Rubberband */

@-webkit-keyframes jiggle {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes jiggle {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

/*******************************
         Site Overrides
*******************************/
/*! Cola UI - 0.8.5
 * Copyright (c) 2002-2016 BSTEK Corp. All rights reserved.
 *
 * This file is dual-licensed under the AGPLv3 (http://www.gnu.org/licenses/agpl-3.0.html)
 * and BSDN commercial (http://www.bsdn.org/licenses) licenses.
 *
 * If you are unsure which license is appropriate for your use, please contact the sales department
 * at http://www.bstek.com/contact.
 */

template {
  display: none;
}
.mobile {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.mobile ::-webkit-scrollbar {
  -webkit-appearance: none;
}
.mobile ::-webkit-scrollbar:vertical {
  width: 2px;
}
.mobile ::-webkit-scrollbar:horizontal {
  height: 2px;
}
.mobile ::-webkit-scrollbar-thumb {
  background: #888;
}
.display-none {
  display: none;
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.red-background {
  background-color: #db2828;
}
.orange-background {
  background-color: #f2711c;
}
.yellow-background {
  background-color: #fbbd08;
}
.olive-background {
  background-color: #b5cc18;
}
.green-background {
  background-color: #21ba45;
}
.teal-background {
  background-color: #00b5ad;
}
.blue-background {
  background-color: #2185d0;
}
.violet-background {
  background-color: #6435c9;
}
.purple-background {
  background-color: #a333c8;
}
.pink-background {
  background-color: #ff4081;
}
.brown-background {
  background-color: #a5673f;
}
.grey-background {
  background-color: #767676;
}
.black-background {
  background-color: #1b1c1d;
}
.red-text {
  color: #db2828;
}
.orange-text {
  color: #f2711c;
}
.yellow-text {
  color: #fbbd08;
}
.olive-text {
  color: #b5cc18;
}
.green-text {
  color: #21ba45;
}
.teal-text {
  color: #00b5ad;
}
.blue-text {
  color: #2185d0;
}
.violet-text {
  color: #6435c9;
}
.purple-text {
  color: #a333c8;
}
.pink-text {
  color: #ff4081;
}
.brown-text {
  color: #a5673f;
}
.grey-text {
  color: #767676;
}
.black-text {
  color: #1b1c1d;
}
.red-border {
  border-color: #db2828;
}
.orange-border {
  border-color: #f2711c;
}
.yellow-border {
  border-color: #fbbd08;
}
.olive-border {
  border-color: #b5cc18;
}
.green-border {
  border-color: #21ba45;
}
.teal-border {
  border-color: #00b5ad;
}
.blue-border {
  border-color: #2185d0;
}
.violet-border {
  border-color: #6435c9;
}
.purple-border {
  border-color: #a333c8;
}
.pink-border {
  border-color: #ff4081;
}
.brown-border {
  border-color: #a5673f;
}
.grey-border {
  border-color: #767676;
}
.black-border {
  border-color: #1b1c1d;
}
.ui.fragment {
  position: relative;
  padding: 1em;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  margin-bottom: 0.6em;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.ui.fragment:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
}
.ui.fragment.basic {
  background-color: transparent;
}
.ui.fragment.red:before {
  background-color: rgba(219, 40, 40, 0.8);
}
.ui.fragment.orange:before {
  background-color: rgba(242, 113, 28, 0.8);
}
.ui.fragment.yellow:before {
  background-color: rgba(251, 189, 8, 0.8);
}
.ui.fragment.olive:before {
  background-color: rgba(181, 204, 24, 0.8);
}
.ui.fragment.green:before {
  background-color: rgba(33, 186, 69, 0.8);
}
.ui.fragment.teal:before {
  background-color: rgba(0, 181, 173, 0.8);
}
.ui.fragment.blue:before {
  background-color: rgba(33, 133, 208, 0.8);
}
.ui.fragment.violet:before {
  background-color: rgba(100, 53, 201, 0.8);
}
.ui.fragment.purple:before {
  background-color: rgba(163, 51, 200, 0.8);
}
.ui.fragment.pink:before {
  background-color: rgba(255, 64, 129, 0.8);
}
.ui.fragment.brown:before {
  background-color: rgba(165, 103, 63, 0.8);
}
.ui.fragment.grey:before {
  background-color: rgba(118, 118, 118, 0.8);
}

.mobile .v-box,
.mobile .h-box {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.mobile .v-box .flex-box,
.mobile .h-box .flex-box {
  display: -webkit-box;
  display: -moz-box;
}
.desktop .v-box,
.desktop .h-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.v-box,
.h-box {
  position: relative;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.v-box > .box,
.h-box > .box {
  overflow: visible;
}
.v-box > .flex-box,
.h-box > .flex-box {
  overflow: auto;
}
.v-box .box,
.h-box .box {
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
}
.v-box .flex-box,
.h-box .flex-box {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
}
.v-box .flex-box > *,
.h-box .flex-box > * {
  position: absolute !important;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.v-box {
  height: 100%;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
}
.v-box > * {
  position: relative;
  width: 100%;
}
.h-box {
  width: 100%;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
}
.h-box > * {
  position: relative;
  height: 100%;
}
.v-box.center,
.h-box.center {
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.v-box.end,
.h-box.end {
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.field.required {
  padding-right: 1em;
  position: relative;
}
.field.required:after {
  float: right;
  font-family: Icons;
  content: "\f069";
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -10px;
  color: #db2828;
  transform: scale(0.5);
}

[class*="block-grid-"] {
  display: block;
  padding: 0;
  *zoom: 1;
  margin: 0;
}
[class*="block-grid-"]:before,
[class*="block-grid-"]:after {
  display: table;
  content: "";
}
[class*="block-grid-"]:after {
  clear: both;
}
[class*="block-grid-"] > li {
  display: block;
  float: left;
  height: auto;
}
[class*="block-grid-"] > li {
  padding: 0 0rem 0rem;
}
@media only screen {
  .small-row-list > li {
    list-style: none;
    width: 100%;
  }
  .small-block-grid-1 > li {
    list-style: none;
    width: 100%;
  }
  .small-block-grid-1 > li:nth-of-type(1n) {
    clear: none;
  }
  .small-block-grid-1 > li:nth-of-type(1n + 1) {
    clear: both;
  }
  .small-block-grid-2 > li {
    list-style: none;
    width: 50%;
  }
  .small-block-grid-2 > li:nth-of-type(1n) {
    clear: none;
  }
  .small-block-grid-2 > li:nth-of-type(2n + 1) {
    clear: both;
  }
  .small-block-grid-3 > li {
    list-style: none;
    width: 33.33333333%;
  }
  .small-block-grid-3 > li:nth-of-type(1n) {
    clear: none;
  }
  .small-block-grid-3 > li:nth-of-type(3n + 1) {
    clear: both;
  }
  .small-block-grid-4 > li {
    list-style: none;
    width: 25%;
  }
  .small-block-grid-4 > li:nth-of-type(1n) {
    clear: none;
  }
  .small-block-grid-4 > li:nth-of-type(4n + 1) {
    clear: both;
  }
  .small-block-grid-5 > li {
    list-style: none;
    width: 20%;
  }
  .small-block-grid-5 > li:nth-of-type(1n) {
    clear: none;
  }
  .small-block-grid-5 > li:nth-of-type(5n + 1) {
    clear: both;
  }
  .small-block-grid-6 > li {
    list-style: none;
    width: 16.66666667%;
  }
  .small-block-grid-6 > li:nth-of-type(1n) {
    clear: none;
  }
  .small-block-grid-6 > li:nth-of-type(6n + 1) {
    clear: both;
  }
  .small-block-grid-7 > li {
    list-style: none;
    width: 14.28571429%;
  }
  .small-block-grid-7 > li:nth-of-type(1n) {
    clear: none;
  }
  .small-block-grid-7 > li:nth-of-type(7n + 1) {
    clear: both;
  }
  .small-block-grid-8 > li {
    list-style: none;
    width: 12.5%;
  }
  .small-block-grid-8 > li:nth-of-type(1n) {
    clear: none;
  }
  .small-block-grid-8 > li:nth-of-type(8n + 1) {
    clear: both;
  }
  .small-block-grid-9 > li {
    list-style: none;
    width: 11.11111111%;
  }
  .small-block-grid-9 > li:nth-of-type(1n) {
    clear: none;
  }
  .small-block-grid-9 > li:nth-of-type(9n + 1) {
    clear: both;
  }
  .small-block-grid-10 > li {
    list-style: none;
    width: 10%;
  }
  .small-block-grid-10 > li:nth-of-type(1n) {
    clear: none;
  }
  .small-block-grid-10 > li:nth-of-type(10n + 1) {
    clear: both;
  }
  .small-block-grid-11 > li {
    list-style: none;
    width: 9.09090909%;
  }
  .small-block-grid-11 > li:nth-of-type(1n) {
    clear: none;
  }
  .small-block-grid-11 > li:nth-of-type(11n + 1) {
    clear: both;
  }
  .small-block-grid-12 > li {
    list-style: none;
    width: 8.33333333%;
  }
  .small-block-grid-12 > li:nth-of-type(1n) {
    clear: none;
  }
  .small-block-grid-12 > li:nth-of-type(12n + 1) {
    clear: both;
  }
}
@media only screen and (min-width: 48.0625em ) {
  .medium-row-list > li {
    list-style: none;
    width: 100%;
  }
  .medium-block-grid-1 > li {
    list-style: none;
    width: 100%;
  }
  .medium-block-grid-1 > li:nth-of-type(1n) {
    clear: none;
  }
  .medium-block-grid-1 > li:nth-of-type(1n + 1) {
    clear: both;
  }
  .medium-block-grid-2 > li {
    list-style: none;
    width: 50%;
  }
  .medium-block-grid-2 > li:nth-of-type(1n) {
    clear: none;
  }
  .medium-block-grid-2 > li:nth-of-type(2n + 1) {
    clear: both;
  }
  .medium-block-grid-3 > li {
    list-style: none;
    width: 33.33333333%;
  }
  .medium-block-grid-3 > li:nth-of-type(1n) {
    clear: none;
  }
  .medium-block-grid-3 > li:nth-of-type(3n + 1) {
    clear: both;
  }
  .medium-block-grid-4 > li {
    list-style: none;
    width: 25%;
  }
  .medium-block-grid-4 > li:nth-of-type(1n) {
    clear: none;
  }
  .medium-block-grid-4 > li:nth-of-type(4n + 1) {
    clear: both;
  }
  .medium-block-grid-5 > li {
    list-style: none;
    width: 20%;
  }
  .medium-block-grid-5 > li:nth-of-type(1n) {
    clear: none;
  }
  .medium-block-grid-5 > li:nth-of-type(5n + 1) {
    clear: both;
  }
  .medium-block-grid-6 > li {
    list-style: none;
    width: 16.66666667%;
  }
  .medium-block-grid-6 > li:nth-of-type(1n) {
    clear: none;
  }
  .medium-block-grid-6 > li:nth-of-type(6n + 1) {
    clear: both;
  }
  .medium-block-grid-7 > li {
    list-style: none;
    width: 14.28571429%;
  }
  .medium-block-grid-7 > li:nth-of-type(1n) {
    clear: none;
  }
  .medium-block-grid-7 > li:nth-of-type(7n + 1) {
    clear: both;
  }
  .medium-block-grid-8 > li {
    list-style: none;
    width: 12.5%;
  }
  .medium-block-grid-8 > li:nth-of-type(1n) {
    clear: none;
  }
  .medium-block-grid-8 > li:nth-of-type(8n + 1) {
    clear: both;
  }
  .medium-block-grid-9 > li {
    list-style: none;
    width: 11.11111111%;
  }
  .medium-block-grid-9 > li:nth-of-type(1n) {
    clear: none;
  }
  .medium-block-grid-9 > li:nth-of-type(9n + 1) {
    clear: both;
  }
  .medium-block-grid-10 > li {
    list-style: none;
    width: 10%;
  }
  .medium-block-grid-10 > li:nth-of-type(1n) {
    clear: none;
  }
  .medium-block-grid-10 > li:nth-of-type(10n + 1) {
    clear: both;
  }
  .medium-block-grid-11 > li {
    list-style: none;
    width: 9.09090909%;
  }
  .medium-block-grid-11 > li:nth-of-type(1n) {
    clear: none;
  }
  .medium-block-grid-11 > li:nth-of-type(11n + 1) {
    clear: both;
  }
  .medium-block-grid-12 > li {
    list-style: none;
    width: 8.33333333%;
  }
  .medium-block-grid-12 > li:nth-of-type(1n) {
    clear: none;
  }
  .medium-block-grid-12 > li:nth-of-type(12n + 1) {
    clear: both;
  }
}
@media only screen and (min-width: 64.0625em ) {
  .large-row-list > li {
    list-style: none;
    width: 100%;
  }
  .large-block-grid-1 > li {
    list-style: none;
    width: 100%;
  }
  .large-block-grid-1 > li:nth-of-type(1n) {
    clear: none;
  }
  .large-block-grid-1 > li:nth-of-type(1n + 1) {
    clear: both;
  }
  .large-block-grid-2 > li {
    list-style: none;
    width: 50%;
  }
  .large-block-grid-2 > li:nth-of-type(1n) {
    clear: none;
  }
  .large-block-grid-2 > li:nth-of-type(2n + 1) {
    clear: both;
  }
  .large-block-grid-3 > li {
    list-style: none;
    width: 33.33333333%;
  }
  .large-block-grid-3 > li:nth-of-type(1n) {
    clear: none;
  }
  .large-block-grid-3 > li:nth-of-type(3n + 1) {
    clear: both;
  }
  .large-block-grid-4 > li {
    list-style: none;
    width: 25%;
  }
  .large-block-grid-4 > li:nth-of-type(1n) {
    clear: none;
  }
  .large-block-grid-4 > li:nth-of-type(4n + 1) {
    clear: both;
  }
  .large-block-grid-5 > li {
    list-style: none;
    width: 20%;
  }
  .large-block-grid-5 > li:nth-of-type(1n) {
    clear: none;
  }
  .large-block-grid-5 > li:nth-of-type(5n + 1) {
    clear: both;
  }
  .large-block-grid-6 > li {
    list-style: none;
    width: 16.66666667%;
  }
  .large-block-grid-6 > li:nth-of-type(1n) {
    clear: none;
  }
  .large-block-grid-6 > li:nth-of-type(6n + 1) {
    clear: both;
  }
  .large-block-grid-7 > li {
    list-style: none;
    width: 14.28571429%;
  }
  .large-block-grid-7 > li:nth-of-type(1n) {
    clear: none;
  }
  .large-block-grid-7 > li:nth-of-type(7n + 1) {
    clear: both;
  }
  .large-block-grid-8 > li {
    list-style: none;
    width: 12.5%;
  }
  .large-block-grid-8 > li:nth-of-type(1n) {
    clear: none;
  }
  .large-block-grid-8 > li:nth-of-type(8n + 1) {
    clear: both;
  }
  .large-block-grid-9 > li {
    list-style: none;
    width: 11.11111111%;
  }
  .large-block-grid-9 > li:nth-of-type(1n) {
    clear: none;
  }
  .large-block-grid-9 > li:nth-of-type(9n + 1) {
    clear: both;
  }
  .large-block-grid-10 > li {
    list-style: none;
    width: 10%;
  }
  .large-block-grid-10 > li:nth-of-type(1n) {
    clear: none;
  }
  .large-block-grid-10 > li:nth-of-type(10n + 1) {
    clear: both;
  }
  .large-block-grid-11 > li {
    list-style: none;
    width: 9.09090909%;
  }
  .large-block-grid-11 > li:nth-of-type(1n) {
    clear: none;
  }
  .large-block-grid-11 > li:nth-of-type(11n + 1) {
    clear: both;
  }
  .large-block-grid-12 > li {
    list-style: none;
    width: 8.33333333%;
  }
  .large-block-grid-12 > li:nth-of-type(1n) {
    clear: none;
  }
  .large-block-grid-12 > li:nth-of-type(12n + 1) {
    clear: both;
  }
}
@media only screen and (min-width: 90.0625em ) {
  .xlarge-row-list > li {
    list-style: none;
    width: 100%;
  }
  .xlarge-block-grid-1 > li {
    list-style: none;
    width: 100%;
  }
  .xlarge-block-grid-1 > li:nth-of-type(1n) {
    clear: none;
  }
  .xlarge-block-grid-1 > li:nth-of-type(1n + 1) {
    clear: both;
  }
  .xlarge-block-grid-2 > li {
    list-style: none;
    width: 50%;
  }
  .xlarge-block-grid-2 > li:nth-of-type(1n) {
    clear: none;
  }
  .xlarge-block-grid-2 > li:nth-of-type(2n + 1) {
    clear: both;
  }
  .xlarge-block-grid-3 > li {
    list-style: none;
    width: 33.33333333%;
  }
  .xlarge-block-grid-3 > li:nth-of-type(1n) {
    clear: none;
  }
  .xlarge-block-grid-3 > li:nth-of-type(3n + 1) {
    clear: both;
  }
  .xlarge-block-grid-4 > li {
    list-style: none;
    width: 25%;
  }
  .xlarge-block-grid-4 > li:nth-of-type(1n) {
    clear: none;
  }
  .xlarge-block-grid-4 > li:nth-of-type(4n + 1) {
    clear: both;
  }
  .xlarge-block-grid-5 > li {
    list-style: none;
    width: 20%;
  }
  .xlarge-block-grid-5 > li:nth-of-type(1n) {
    clear: none;
  }
  .xlarge-block-grid-5 > li:nth-of-type(5n + 1) {
    clear: both;
  }
  .xlarge-block-grid-6 > li {
    list-style: none;
    width: 16.66666667%;
  }
  .xlarge-block-grid-6 > li:nth-of-type(1n) {
    clear: none;
  }
  .xlarge-block-grid-6 > li:nth-of-type(6n + 1) {
    clear: both;
  }
  .xlarge-block-grid-7 > li {
    list-style: none;
    width: 14.28571429%;
  }
  .xlarge-block-grid-7 > li:nth-of-type(1n) {
    clear: none;
  }
  .xlarge-block-grid-7 > li:nth-of-type(7n + 1) {
    clear: both;
  }
  .xlarge-block-grid-8 > li {
    list-style: none;
    width: 12.5%;
  }
  .xlarge-block-grid-8 > li:nth-of-type(1n) {
    clear: none;
  }
  .xlarge-block-grid-8 > li:nth-of-type(8n + 1) {
    clear: both;
  }
  .xlarge-block-grid-9 > li {
    list-style: none;
    width: 11.11111111%;
  }
  .xlarge-block-grid-9 > li:nth-of-type(1n) {
    clear: none;
  }
  .xlarge-block-grid-9 > li:nth-of-type(9n + 1) {
    clear: both;
  }
  .xlarge-block-grid-10 > li {
    list-style: none;
    width: 10%;
  }
  .xlarge-block-grid-10 > li:nth-of-type(1n) {
    clear: none;
  }
  .xlarge-block-grid-10 > li:nth-of-type(10n + 1) {
    clear: both;
  }
  .xlarge-block-grid-11 > li {
    list-style: none;
    width: 9.09090909%;
  }
  .xlarge-block-grid-11 > li:nth-of-type(1n) {
    clear: none;
  }
  .xlarge-block-grid-11 > li:nth-of-type(11n + 1) {
    clear: both;
  }
  .xlarge-block-grid-12 > li {
    list-style: none;
    width: 8.33333333%;
  }
  .xlarge-block-grid-12 > li:nth-of-type(1n) {
    clear: none;
  }
  .xlarge-block-grid-12 > li:nth-of-type(12n + 1) {
    clear: both;
  }
}
@media only screen and (min-width: 120.0625em ) {
  .xxlarge-row-list > li {
    list-style: none;
    width: 100%;
  }
  .xxlarge-block-grid-1 > li {
    list-style: none;
    width: 100%;
  }
  .xxlarge-block-grid-1 > li:nth-of-type(1n) {
    clear: none;
  }
  .xxlarge-block-grid-1 > li:nth-of-type(1n + 1) {
    clear: both;
  }
  .xxlarge-block-grid-2 > li {
    list-style: none;
    width: 50%;
  }
  .xxlarge-block-grid-2 > li:nth-of-type(1n) {
    clear: none;
  }
  .xxlarge-block-grid-2 > li:nth-of-type(2n + 1) {
    clear: both;
  }
  .xxlarge-block-grid-3 > li {
    list-style: none;
    width: 33.33333333%;
  }
  .xxlarge-block-grid-3 > li:nth-of-type(1n) {
    clear: none;
  }
  .xxlarge-block-grid-3 > li:nth-of-type(3n + 1) {
    clear: both;
  }
  .xxlarge-block-grid-4 > li {
    list-style: none;
    width: 25%;
  }
  .xxlarge-block-grid-4 > li:nth-of-type(1n) {
    clear: none;
  }
  .xxlarge-block-grid-4 > li:nth-of-type(4n + 1) {
    clear: both;
  }
  .xxlarge-block-grid-5 > li {
    list-style: none;
    width: 20%;
  }
  .xxlarge-block-grid-5 > li:nth-of-type(1n) {
    clear: none;
  }
  .xxlarge-block-grid-5 > li:nth-of-type(5n + 1) {
    clear: both;
  }
  .xxlarge-block-grid-6 > li {
    list-style: none;
    width: 16.66666667%;
  }
  .xxlarge-block-grid-6 > li:nth-of-type(1n) {
    clear: none;
  }
  .xxlarge-block-grid-6 > li:nth-of-type(6n + 1) {
    clear: both;
  }
  .xxlarge-block-grid-7 > li {
    list-style: none;
    width: 14.28571429%;
  }
  .xxlarge-block-grid-7 > li:nth-of-type(1n) {
    clear: none;
  }
  .xxlarge-block-grid-7 > li:nth-of-type(7n + 1) {
    clear: both;
  }
  .xxlarge-block-grid-8 > li {
    list-style: none;
    width: 12.5%;
  }
  .xxlarge-block-grid-8 > li:nth-of-type(1n) {
    clear: none;
  }
  .xxlarge-block-grid-8 > li:nth-of-type(8n + 1) {
    clear: both;
  }
  .xxlarge-block-grid-9 > li {
    list-style: none;
    width: 11.11111111%;
  }
  .xxlarge-block-grid-9 > li:nth-of-type(1n) {
    clear: none;
  }
  .xxlarge-block-grid-9 > li:nth-of-type(9n + 1) {
    clear: both;
  }
  .xxlarge-block-grid-10 > li {
    list-style: none;
    width: 10%;
  }
  .xxlarge-block-grid-10 > li:nth-of-type(1n) {
    clear: none;
  }
  .xxlarge-block-grid-10 > li:nth-of-type(10n + 1) {
    clear: both;
  }
  .xxlarge-block-grid-11 > li {
    list-style: none;
    width: 9.09090909%;
  }
  .xxlarge-block-grid-11 > li:nth-of-type(1n) {
    clear: none;
  }
  .xxlarge-block-grid-11 > li:nth-of-type(11n + 1) {
    clear: both;
  }
  .xxlarge-block-grid-12 > li {
    list-style: none;
    width: 8.33333333%;
  }
  .xxlarge-block-grid-12 > li:nth-of-type(1n) {
    clear: none;
  }
  .xxlarge-block-grid-12 > li:nth-of-type(12n + 1) {
    clear: both;
  }
}

.row {
  *zoom: 1;
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
}
.row:before,
.row:after {
  display: table;
  content: "";
}
.row:after {
  clear: both;
}
.row.collapse > .column,
.row.collapse > .columns {
  padding-left: 0;
  padding-right: 0;
}
.row.collapse .row {
  margin-left: 0;
  margin-right: 0;
}
.row .row {
  *zoom: 1;
  margin: 0 0rem;
  max-width: none;
  width: auto;
}
.row .row:before,
.row .row:after {
  display: table;
  content: "";
}
.row .row:after {
  clear: both;
}
.row .row.collapse {
  *zoom: 1;
  margin: 0;
  max-width: none;
  width: auto;
}
.row .row.collapse:before,
.row .row.collapse:after {
  display: table;
  content: "";
}
.row .row.collapse:after {
  clear: both;
}
.column,
.columns {
  width: 100%;
  padding-left: 0rem;
  padding-right: 0rem;
  float: left;
}
[class*="column"] + [class*="column"]:last-child {
  float: right;
}
[class*="column"] + [class*="column"].end {
  float: left;
}
@media only screen {
  .small-push-0 {
    position: relative;
    left: 0%;
    right: auto;
  }
  .small-pull-0 {
    position: relative;
    right: 0%;
    left: auto;
  }
  .small-push-1 {
    position: relative;
    left: 8.33333333%;
    right: auto;
  }
  .small-pull-1 {
    position: relative;
    right: 8.33333333%;
    left: auto;
  }
  .small-push-2 {
    position: relative;
    left: 16.66666667%;
    right: auto;
  }
  .small-pull-2 {
    position: relative;
    right: 16.66666667%;
    left: auto;
  }
  .small-push-3 {
    position: relative;
    left: 25%;
    right: auto;
  }
  .small-pull-3 {
    position: relative;
    right: 25%;
    left: auto;
  }
  .small-push-4 {
    position: relative;
    left: 33.33333333%;
    right: auto;
  }
  .small-pull-4 {
    position: relative;
    right: 33.33333333%;
    left: auto;
  }
  .small-push-5 {
    position: relative;
    left: 41.66666667%;
    right: auto;
  }
  .small-pull-5 {
    position: relative;
    right: 41.66666667%;
    left: auto;
  }
  .small-push-6 {
    position: relative;
    left: 50%;
    right: auto;
  }
  .small-pull-6 {
    position: relative;
    right: 50%;
    left: auto;
  }
  .small-push-7 {
    position: relative;
    left: 58.33333333%;
    right: auto;
  }
  .small-pull-7 {
    position: relative;
    right: 58.33333333%;
    left: auto;
  }
  .small-push-8 {
    position: relative;
    left: 66.66666667%;
    right: auto;
  }
  .small-pull-8 {
    position: relative;
    right: 66.66666667%;
    left: auto;
  }
  .small-push-9 {
    position: relative;
    left: 75%;
    right: auto;
  }
  .small-pull-9 {
    position: relative;
    right: 75%;
    left: auto;
  }
  .small-push-10 {
    position: relative;
    left: 83.33333333%;
    right: auto;
  }
  .small-pull-10 {
    position: relative;
    right: 83.33333333%;
    left: auto;
  }
  .small-push-11 {
    position: relative;
    left: 91.66666667%;
    right: auto;
  }
  .small-pull-11 {
    position: relative;
    right: 91.66666667%;
    left: auto;
  }
  .column,
  .columns {
    position: relative;
    padding-left: 0rem;
    padding-right: 0rem;
    float: left;
  }
  .small-1 {
    width: 8.33333333%;
  }
  .small-2 {
    width: 16.66666667%;
  }
  .small-3 {
    width: 25%;
  }
  .small-4 {
    width: 33.33333333%;
  }
  .small-5 {
    width: 41.66666667%;
  }
  .small-6 {
    width: 50%;
  }
  .small-7 {
    width: 58.33333333%;
  }
  .small-8 {
    width: 66.66666667%;
  }
  .small-9 {
    width: 75%;
  }
  .small-10 {
    width: 83.33333333%;
  }
  .small-11 {
    width: 91.66666667%;
  }
  .small-12 {
    width: 100%;
  }
  .small-offset-0 {
    margin-left: 0% !important;
  }
  .small-offset-1 {
    margin-left: 8.33333333% !important;
  }
  .small-offset-2 {
    margin-left: 16.66666667% !important;
  }
  .small-offset-3 {
    margin-left: 25% !important;
  }
  .small-offset-4 {
    margin-left: 33.33333333% !important;
  }
  .small-offset-5 {
    margin-left: 41.66666667% !important;
  }
  .small-offset-6 {
    margin-left: 50% !important;
  }
  .small-offset-7 {
    margin-left: 58.33333333% !important;
  }
  .small-offset-8 {
    margin-left: 66.66666667% !important;
  }
  .small-offset-9 {
    margin-left: 75% !important;
  }
  .small-offset-10 {
    margin-left: 83.33333333% !important;
  }
  .small-offset-11 {
    margin-left: 91.66666667% !important;
  }
  .small-reset-order {
    float: left;
    left: auto;
    margin-left: 0;
    margin-right: 0;
    right: auto;
  }
  .column.small-centered,
  .columns.small-centered {
    margin-left: auto;
    margin-right: auto;
    float: none;
  }
  .column.small-uncentered,
  .columns.small-uncentered {
    float: left;
    margin-left: 0;
    margin-right: 0;
  }
  .column.small-centered:last-child,
  .columns.small-centered:last-child {
    float: none;
  }
  .column.small-uncentered:last-child,
  .columns.small-uncentered:last-child {
    float: left;
  }
  .column.small-uncentered.opposite,
  .columns.small-uncentered.opposite {
    float: right;
  }
  .row.small-collapse > .column,
  .row.small-collapse > .columns {
    padding-left: 0;
    padding-right: 0;
  }
  .row.small-collapse .row {
    margin-left: 0;
    margin-right: 0;
  }
  .row.small-uncollapse > .column,
  .row.small-uncollapse > .columns {
    padding-left: 0rem;
    padding-right: 0rem;
  }
}
@media only screen and (min-width: 48.0625em ) {
  .medium-push-0 {
    position: relative;
    left: 0%;
    right: auto;
  }
  .medium-pull-0 {
    position: relative;
    right: 0%;
    left: auto;
  }
  .medium-push-1 {
    position: relative;
    left: 8.33333333%;
    right: auto;
  }
  .medium-pull-1 {
    position: relative;
    right: 8.33333333%;
    left: auto;
  }
  .medium-push-2 {
    position: relative;
    left: 16.66666667%;
    right: auto;
  }
  .medium-pull-2 {
    position: relative;
    right: 16.66666667%;
    left: auto;
  }
  .medium-push-3 {
    position: relative;
    left: 25%;
    right: auto;
  }
  .medium-pull-3 {
    position: relative;
    right: 25%;
    left: auto;
  }
  .medium-push-4 {
    position: relative;
    left: 33.33333333%;
    right: auto;
  }
  .medium-pull-4 {
    position: relative;
    right: 33.33333333%;
    left: auto;
  }
  .medium-push-5 {
    position: relative;
    left: 41.66666667%;
    right: auto;
  }
  .medium-pull-5 {
    position: relative;
    right: 41.66666667%;
    left: auto;
  }
  .medium-push-6 {
    position: relative;
    left: 50%;
    right: auto;
  }
  .medium-pull-6 {
    position: relative;
    right: 50%;
    left: auto;
  }
  .medium-push-7 {
    position: relative;
    left: 58.33333333%;
    right: auto;
  }
  .medium-pull-7 {
    position: relative;
    right: 58.33333333%;
    left: auto;
  }
  .medium-push-8 {
    position: relative;
    left: 66.66666667%;
    right: auto;
  }
  .medium-pull-8 {
    position: relative;
    right: 66.66666667%;
    left: auto;
  }
  .medium-push-9 {
    position: relative;
    left: 75%;
    right: auto;
  }
  .medium-pull-9 {
    position: relative;
    right: 75%;
    left: auto;
  }
  .medium-push-10 {
    position: relative;
    left: 83.33333333%;
    right: auto;
  }
  .medium-pull-10 {
    position: relative;
    right: 83.33333333%;
    left: auto;
  }
  .medium-push-11 {
    position: relative;
    left: 91.66666667%;
    right: auto;
  }
  .medium-pull-11 {
    position: relative;
    right: 91.66666667%;
    left: auto;
  }
  .column,
  .columns {
    position: relative;
    padding-left: 0rem;
    padding-right: 0rem;
    float: left;
  }
  .medium-1 {
    width: 8.33333333%;
  }
  .medium-2 {
    width: 16.66666667%;
  }
  .medium-3 {
    width: 25%;
  }
  .medium-4 {
    width: 33.33333333%;
  }
  .medium-5 {
    width: 41.66666667%;
  }
  .medium-6 {
    width: 50%;
  }
  .medium-7 {
    width: 58.33333333%;
  }
  .medium-8 {
    width: 66.66666667%;
  }
  .medium-9 {
    width: 75%;
  }
  .medium-10 {
    width: 83.33333333%;
  }
  .medium-11 {
    width: 91.66666667%;
  }
  .medium-12 {
    width: 100%;
  }
  .medium-offset-0 {
    margin-left: 0% !important;
  }
  .medium-offset-1 {
    margin-left: 8.33333333% !important;
  }
  .medium-offset-2 {
    margin-left: 16.66666667% !important;
  }
  .medium-offset-3 {
    margin-left: 25% !important;
  }
  .medium-offset-4 {
    margin-left: 33.33333333% !important;
  }
  .medium-offset-5 {
    margin-left: 41.66666667% !important;
  }
  .medium-offset-6 {
    margin-left: 50% !important;
  }
  .medium-offset-7 {
    margin-left: 58.33333333% !important;
  }
  .medium-offset-8 {
    margin-left: 66.66666667% !important;
  }
  .medium-offset-9 {
    margin-left: 75% !important;
  }
  .medium-offset-10 {
    margin-left: 83.33333333% !important;
  }
  .medium-offset-11 {
    margin-left: 91.66666667% !important;
  }
  .medium-reset-order {
    float: left;
    left: auto;
    margin-left: 0;
    margin-right: 0;
    right: auto;
  }
  .column.medium-centered,
  .columns.medium-centered {
    margin-left: auto;
    margin-right: auto;
    float: none;
  }
  .column.medium-uncentered,
  .columns.medium-uncentered {
    float: left;
    margin-left: 0;
    margin-right: 0;
  }
  .column.medium-centered:last-child,
  .columns.medium-centered:last-child {
    float: none;
  }
  .column.medium-uncentered:last-child,
  .columns.medium-uncentered:last-child {
    float: left;
  }
  .column.medium-uncentered.opposite,
  .columns.medium-uncentered.opposite {
    float: right;
  }
  .row.medium-collapse > .column,
  .row.medium-collapse > .columns {
    padding-left: 0;
    padding-right: 0;
  }
  .row.medium-collapse .row {
    margin-left: 0;
    margin-right: 0;
  }
  .row.medium-uncollapse > .column,
  .row.medium-uncollapse > .columns {
    padding-left: 0rem;
    padding-right: 0rem;
  }
}
@media only screen and (min-width: 64.0625em ) {
  .large-push-0 {
    position: relative;
    left: 0%;
    right: auto;
  }
  .large-pull-0 {
    position: relative;
    right: 0%;
    left: auto;
  }
  .large-push-1 {
    position: relative;
    left: 8.33333333%;
    right: auto;
  }
  .large-pull-1 {
    position: relative;
    right: 8.33333333%;
    left: auto;
  }
  .large-push-2 {
    position: relative;
    left: 16.66666667%;
    right: auto;
  }
  .large-pull-2 {
    position: relative;
    right: 16.66666667%;
    left: auto;
  }
  .large-push-3 {
    position: relative;
    left: 25%;
    right: auto;
  }
  .large-pull-3 {
    position: relative;
    right: 25%;
    left: auto;
  }
  .large-push-4 {
    position: relative;
    left: 33.33333333%;
    right: auto;
  }
  .large-pull-4 {
    position: relative;
    right: 33.33333333%;
    left: auto;
  }
  .large-push-5 {
    position: relative;
    left: 41.66666667%;
    right: auto;
  }
  .large-pull-5 {
    position: relative;
    right: 41.66666667%;
    left: auto;
  }
  .large-push-6 {
    position: relative;
    left: 50%;
    right: auto;
  }
  .large-pull-6 {
    position: relative;
    right: 50%;
    left: auto;
  }
  .large-push-7 {
    position: relative;
    left: 58.33333333%;
    right: auto;
  }
  .large-pull-7 {
    position: relative;
    right: 58.33333333%;
    left: auto;
  }
  .large-push-8 {
    position: relative;
    left: 66.66666667%;
    right: auto;
  }
  .large-pull-8 {
    position: relative;
    right: 66.66666667%;
    left: auto;
  }
  .large-push-9 {
    position: relative;
    left: 75%;
    right: auto;
  }
  .large-pull-9 {
    position: relative;
    right: 75%;
    left: auto;
  }
  .large-push-10 {
    position: relative;
    left: 83.33333333%;
    right: auto;
  }
  .large-pull-10 {
    position: relative;
    right: 83.33333333%;
    left: auto;
  }
  .large-push-11 {
    position: relative;
    left: 91.66666667%;
    right: auto;
  }
  .large-pull-11 {
    position: relative;
    right: 91.66666667%;
    left: auto;
  }
  .column,
  .columns {
    position: relative;
    padding-left: 0rem;
    padding-right: 0rem;
    float: left;
  }
  .large-1 {
    width: 8.33333333%;
  }
  .large-2 {
    width: 16.66666667%;
  }
  .large-3 {
    width: 25%;
  }
  .large-4 {
    width: 33.33333333%;
  }
  .large-5 {
    width: 41.66666667%;
  }
  .large-6 {
    width: 50%;
  }
  .large-7 {
    width: 58.33333333%;
  }
  .large-8 {
    width: 66.66666667%;
  }
  .large-9 {
    width: 75%;
  }
  .large-10 {
    width: 83.33333333%;
  }
  .large-11 {
    width: 91.66666667%;
  }
  .large-12 {
    width: 100%;
  }
  .large-offset-0 {
    margin-left: 0% !important;
  }
  .large-offset-1 {
    margin-left: 8.33333333% !important;
  }
  .large-offset-2 {
    margin-left: 16.66666667% !important;
  }
  .large-offset-3 {
    margin-left: 25% !important;
  }
  .large-offset-4 {
    margin-left: 33.33333333% !important;
  }
  .large-offset-5 {
    margin-left: 41.66666667% !important;
  }
  .large-offset-6 {
    margin-left: 50% !important;
  }
  .large-offset-7 {
    margin-left: 58.33333333% !important;
  }
  .large-offset-8 {
    margin-left: 66.66666667% !important;
  }
  .large-offset-9 {
    margin-left: 75% !important;
  }
  .large-offset-10 {
    margin-left: 83.33333333% !important;
  }
  .large-offset-11 {
    margin-left: 91.66666667% !important;
  }
  .large-reset-order {
    float: left;
    left: auto;
    margin-left: 0;
    margin-right: 0;
    right: auto;
  }
  .column.large-centered,
  .columns.large-centered {
    margin-left: auto;
    margin-right: auto;
    float: none;
  }
  .column.large-uncentered,
  .columns.large-uncentered {
    float: left;
    margin-left: 0;
    margin-right: 0;
  }
  .column.large-centered:last-child,
  .columns.large-centered:last-child {
    float: none;
  }
  .column.large-uncentered:last-child,
  .columns.large-uncentered:last-child {
    float: left;
  }
  .column.large-uncentered.opposite,
  .columns.large-uncentered.opposite {
    float: right;
  }
  .row.large-collapse > .column,
  .row.large-collapse > .columns {
    padding-left: 0;
    padding-right: 0;
  }
  .row.large-collapse .row {
    margin-left: 0;
    margin-right: 0;
  }
  .row.large-uncollapse > .column,
  .row.large-uncollapse > .columns {
    padding-left: 0rem;
    padding-right: 0rem;
  }
}
@media only screen and (min-width: 90.0625em ) {
  .xlarge-push-0 {
    position: relative;
    left: 0%;
    right: auto;
  }
  .xlarge-pull-0 {
    position: relative;
    right: 0%;
    left: auto;
  }
  .xlarge-push-1 {
    position: relative;
    left: 8.33333333%;
    right: auto;
  }
  .xlarge-pull-1 {
    position: relative;
    right: 8.33333333%;
    left: auto;
  }
  .xlarge-push-2 {
    position: relative;
    left: 16.66666667%;
    right: auto;
  }
  .xlarge-pull-2 {
    position: relative;
    right: 16.66666667%;
    left: auto;
  }
  .xlarge-push-3 {
    position: relative;
    left: 25%;
    right: auto;
  }
  .xlarge-pull-3 {
    position: relative;
    right: 25%;
    left: auto;
  }
  .xlarge-push-4 {
    position: relative;
    left: 33.33333333%;
    right: auto;
  }
  .xlarge-pull-4 {
    position: relative;
    right: 33.33333333%;
    left: auto;
  }
  .xlarge-push-5 {
    position: relative;
    left: 41.66666667%;
    right: auto;
  }
  .xlarge-pull-5 {
    position: relative;
    right: 41.66666667%;
    left: auto;
  }
  .xlarge-push-6 {
    position: relative;
    left: 50%;
    right: auto;
  }
  .xlarge-pull-6 {
    position: relative;
    right: 50%;
    left: auto;
  }
  .xlarge-push-7 {
    position: relative;
    left: 58.33333333%;
    right: auto;
  }
  .xlarge-pull-7 {
    position: relative;
    right: 58.33333333%;
    left: auto;
  }
  .xlarge-push-8 {
    position: relative;
    left: 66.66666667%;
    right: auto;
  }
  .xlarge-pull-8 {
    position: relative;
    right: 66.66666667%;
    left: auto;
  }
  .xlarge-push-9 {
    position: relative;
    left: 75%;
    right: auto;
  }
  .xlarge-pull-9 {
    position: relative;
    right: 75%;
    left: auto;
  }
  .xlarge-push-10 {
    position: relative;
    left: 83.33333333%;
    right: auto;
  }
  .xlarge-pull-10 {
    position: relative;
    right: 83.33333333%;
    left: auto;
  }
  .xlarge-push-11 {
    position: relative;
    left: 91.66666667%;
    right: auto;
  }
  .xlarge-pull-11 {
    position: relative;
    right: 91.66666667%;
    left: auto;
  }
  .column,
  .columns {
    position: relative;
    padding-left: 0rem;
    padding-right: 0rem;
    float: left;
  }
  .xlarge-1 {
    width: 8.33333333%;
  }
  .xlarge-2 {
    width: 16.66666667%;
  }
  .xlarge-3 {
    width: 25%;
  }
  .xlarge-4 {
    width: 33.33333333%;
  }
  .xlarge-5 {
    width: 41.66666667%;
  }
  .xlarge-6 {
    width: 50%;
  }
  .xlarge-7 {
    width: 58.33333333%;
  }
  .xlarge-8 {
    width: 66.66666667%;
  }
  .xlarge-9 {
    width: 75%;
  }
  .xlarge-10 {
    width: 83.33333333%;
  }
  .xlarge-11 {
    width: 91.66666667%;
  }
  .xlarge-12 {
    width: 100%;
  }
  .xlarge-offset-0 {
    margin-left: 0% !important;
  }
  .xlarge-offset-1 {
    margin-left: 8.33333333% !important;
  }
  .xlarge-offset-2 {
    margin-left: 16.66666667% !important;
  }
  .xlarge-offset-3 {
    margin-left: 25% !important;
  }
  .xlarge-offset-4 {
    margin-left: 33.33333333% !important;
  }
  .xlarge-offset-5 {
    margin-left: 41.66666667% !important;
  }
  .xlarge-offset-6 {
    margin-left: 50% !important;
  }
  .xlarge-offset-7 {
    margin-left: 58.33333333% !important;
  }
  .xlarge-offset-8 {
    margin-left: 66.66666667% !important;
  }
  .xlarge-offset-9 {
    margin-left: 75% !important;
  }
  .xlarge-offset-10 {
    margin-left: 83.33333333% !important;
  }
  .xlarge-offset-11 {
    margin-left: 91.66666667% !important;
  }
  .xlarge-reset-order {
    float: left;
    left: auto;
    margin-left: 0;
    margin-right: 0;
    right: auto;
  }
  .column.xlarge-centered,
  .columns.xlarge-centered {
    margin-left: auto;
    margin-right: auto;
    float: none;
  }
  .column.xlarge-uncentered,
  .columns.xlarge-uncentered {
    float: left;
    margin-left: 0;
    margin-right: 0;
  }
  .column.xlarge-centered:last-child,
  .columns.xlarge-centered:last-child {
    float: none;
  }
  .column.xlarge-uncentered:last-child,
  .columns.xlarge-uncentered:last-child {
    float: left;
  }
  .column.xlarge-uncentered.opposite,
  .columns.xlarge-uncentered.opposite {
    float: right;
  }
  .row.xlarge-collapse > .column,
  .row.xlarge-collapse > .columns {
    padding-left: 0;
    padding-right: 0;
  }
  .row.xlarge-collapse .row {
    margin-left: 0;
    margin-right: 0;
  }
  .row.xlarge-uncollapse > .column,
  .row.xlarge-uncollapse > .columns {
    padding-left: 0rem;
    padding-right: 0rem;
  }
}
.push-0 {
  position: relative;
  left: 0%;
  right: auto;
}
.pull-0 {
  position: relative;
  right: 0%;
  left: auto;
}
.push-1 {
  position: relative;
  left: 8.33333333%;
  right: auto;
}
.pull-1 {
  position: relative;
  right: 8.33333333%;
  left: auto;
}
.push-2 {
  position: relative;
  left: 16.66666667%;
  right: auto;
}
.pull-2 {
  position: relative;
  right: 16.66666667%;
  left: auto;
}
.push-3 {
  position: relative;
  left: 25%;
  right: auto;
}
.pull-3 {
  position: relative;
  right: 25%;
  left: auto;
}
.push-4 {
  position: relative;
  left: 33.33333333%;
  right: auto;
}
.pull-4 {
  position: relative;
  right: 33.33333333%;
  left: auto;
}
.push-5 {
  position: relative;
  left: 41.66666667%;
  right: auto;
}
.pull-5 {
  position: relative;
  right: 41.66666667%;
  left: auto;
}
.push-6 {
  position: relative;
  left: 50%;
  right: auto;
}
.pull-6 {
  position: relative;
  right: 50%;
  left: auto;
}
.push-7 {
  position: relative;
  left: 58.33333333%;
  right: auto;
}
.pull-7 {
  position: relative;
  right: 58.33333333%;
  left: auto;
}
.push-8 {
  position: relative;
  left: 66.66666667%;
  right: auto;
}
.pull-8 {
  position: relative;
  right: 66.66666667%;
  left: auto;
}
.push-9 {
  position: relative;
  left: 75%;
  right: auto;
}
.pull-9 {
  position: relative;
  right: 75%;
  left: auto;
}
.push-10 {
  position: relative;
  left: 83.33333333%;
  right: auto;
}
.pull-10 {
  position: relative;
  right: 83.33333333%;
  left: auto;
}
.push-11 {
  position: relative;
  left: 91.66666667%;
  right: auto;
}
.pull-11 {
  position: relative;
  right: 91.66666667%;
  left: auto;
}

.ui.items-view {
  display: block;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  -webkit-focus-ring-color: transparent;
  background: #ffffff;
}
.ui.items-view > .items {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
}
.ui.items-view .item {
  overflow-x: hidden;
  cursor: pointer;
  background: #ffffff;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0;
  transition: 0.1s color ease, 0.1s background-color ease;
}
.ui.items-view .pull-down-pane,
.ui.items-view .pull-up-pane {
  position: relative;
  width: 100%;
  height: 5em;
  transition-duration: 0.8s;
  transition-property: background;
  background: #767676;
  color: rgba(255, 255, 255, 0.9);
  font-weight: bold;
  text-align: center;
}
.ui.items-view .pull-down-pane.reached,
.ui.items-view .pull-up-pane.reached {
  background: #484848;
}
.ui.items-view .pull-down-pane.executing,
.ui.items-view .pull-up-pane.executing {
  background: #00b5ad;
}

.ui.list-view .items {
  list-style: none;
  margin: 0;
  padding: 0;
}
.ui.list-view .list.item {
  padding: 0.8em 0.5em;
}
.ui.list-view .list.group {
  margin: 0;
  padding: 0;
}
.ui.list-view .list.group-header {
  color: rgba(0, 0, 0, 0.85);
  background: #f9fafb;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0.25em 0.5em;
}
.ui.list-view .list.group-header:active {
  background: #e1e6eb;
}
.ui.list-view .list.group-header.collapsible:before {
  transition-duration: 0.3s;
  transition-property: transform;
  font-family: Icons;
  content: "\f107";
  float: right;
  margin-right: 0.5em;
}
.ui.list-view .list.group-header.collapsible.collapsed:before {
  transform: rotate(90deg);
}
.ui.list-view .item-slide-pane {
  position: absolute;
  overflow: hidden;
  z-index: 1100;
  box-sizing: border-box;
}
.ui.list-view .item-slide-pane.transition {
  transition-duration: 0.15s;
  transition-property: transform;
}
.ui.list-view.has-index-bar .list.group-header.collapsible:before {
  margin-right: 2.2em;
}
.ui.list-view > .float-group-header {
  position: absolute;
  height: auto;
  left: 0;
  right: 2px;
  opacity: 0.9;
  pointer-events: none;
}
.ui.list-view > .float-group-header > .list.group-header:before {
  display: none;
}
.ui.list-view > .index-bar {
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  position: absolute;
  right: 2px;
  top: 0;
  bottom: 0;
  padding: 2px 0;
  min-width: 1.625em;
  z-index: 2;
  background: rgba(249, 250, 251, 0.5);
}
.ui.list-view > .index-bar > .index {
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -webkit-box-align: center;
  -moz-box-align: center;
}
.ui.list-view > .index-bar > .index:hover {
  background: #e7ebef;
}
.ui.list-view > .index-bar > .index.current {
  background: #e1e6eb;
}
.ui.list-view .loader-container {
  height: 5em;
  position: relative;
  display: none;
}
.ui.list-view .loader-container.active {
  display: block;
}
.ui.list-view .loader-container.active > .ui.loader {
  display: block;
}
.ui.list-view .tail-padding {
  height: 5em;
  position: relative;
}
.ui.list-view.striped .list.item:nth-child(2n):not(.current) {
  background: #f7f7f7;
}
.ui.list-view.striped .list.group-header {
  background: #e1e6eb;
}
.ui.list-view.striped .list.group-header:active {
  background: #c8d1da;
}
.ui.list-view.impact .list.item {
  padding: 0.125em !important;
}
.ui.list-view .list.item:hover:not(.current) {
  background: rgba(0, 181, 173, 0.1);
}
.ui.list-view .list.item.current {
  background: rgba(0, 181, 173, 0.2);
  color: rgba(0, 0, 0, 0.85);
}
.ui.list-view.striped.inverted .list.item:nth-child(2n):not(.current) {
  background: #2f3032;
}
.ui.list-view.inverted {
  background: #393b3d;
}
.ui.list-view.inverted .list.item {
  color: rgba(255, 255, 255, 0.9);
  background: #393b3d;
}
.ui.list-view.inverted .list.item:hover:not(.current) {
  background: rgba(33, 133, 208, 0.2);
}
.ui.list-view.inverted .list.item.current {
  background: #2185d0;
}
.ui.list-view.inverted .list.group-header {
  color: rgba(255, 255, 255, 0.9);
  background: #56595c;
  border-bottom: 1px solid #74787c;
}
.ui.list-view.inverted .list.group-header:active {
  background: #74787c;
}
.ui.list-view.inverted > .index-bar {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(118, 118, 118, 0.6);
}
.ui.list-view.inverted > .index-bar > .index:hover {
  background: #434343;
}
.ui.list-view.inverted > .index-bar > .index.current {
  background: #767676;
}
.ui.list-view.basic {
  background: none;
}
.ui.list-view.basic .list.item {
  color: inherit;
  background: none;
}
.ui.list-view.basic .list.item:hover:not(.current) {
  background: none;
}
.ui.list-view.basic .list.item.current {
  background: none;
  color: inherit;
}
.ui.list-view.basic .list.group-header {
  color: inherit;
  background: none;
  border-bottom: none;
}
.ui.list-view.basic .list.group-header:active {
  background: none;
}
.ui.list-view.basic > .index-bar {
  color: inherit;
  background: none;
}
.ui.list-view.basic > .index-bar > .index:hover {
  background: none;
}
.ui.list-view.basic > .index-bar > .index.current {
  background: none;
}
.ui.list-view.light-red .list.item:hover:not(.current) {
  background: rgba(219, 40, 40, 0.1);
}
.ui.list-view.light-red .list.item.current {
  background: rgba(219, 40, 40, 0.2);
}
.ui.list-view.light-orange .list.item:hover:not(.current) {
  background: rgba(242, 113, 28, 0.1);
}
.ui.list-view.light-orange .list.item.current {
  background: rgba(242, 113, 28, 0.2);
}
.ui.list-view.light-yellow .list.item:hover:not(.current) {
  background: rgba(251, 189, 8, 0.1);
}
.ui.list-view.light-yellow .list.item.current {
  background: rgba(251, 189, 8, 0.2);
}
.ui.list-view.light-olive .list.item:hover:not(.current) {
  background: rgba(181, 204, 24, 0.1);
}
.ui.list-view.light-olive .list.item.current {
  background: rgba(181, 204, 24, 0.2);
}
.ui.list-view.light-green .list.item:hover:not(.current) {
  background: rgba(33, 186, 69, 0.1);
}
.ui.list-view.light-green .list.item.current {
  background: rgba(33, 186, 69, 0.2);
}
.ui.list-view.light-teal .list.item:hover:not(.current) {
  background: rgba(0, 181, 173, 0.1);
}
.ui.list-view.light-teal .list.item.current {
  background: rgba(0, 181, 173, 0.2);
}
.ui.list-view.light-blue .list.item:hover:not(.current) {
  background: rgba(33, 133, 208, 0.1);
}
.ui.list-view.light-blue .list.item.current {
  background: rgba(33, 133, 208, 0.2);
}
.ui.list-view.light-violet .list.item:hover:not(.current) {
  background: rgba(100, 53, 201, 0.1);
}
.ui.list-view.light-violet .list.item.current {
  background: rgba(100, 53, 201, 0.2);
}
.ui.list-view.light-purple .list.item:hover:not(.current) {
  background: rgba(163, 51, 200, 0.1);
}
.ui.list-view.light-purple .list.item.current {
  background: rgba(163, 51, 200, 0.2);
}
.ui.list-view.light-pink .list.item:hover:not(.current) {
  background: rgba(255, 64, 129, 0.1);
}
.ui.list-view.light-pink .list.item.current {
  background: rgba(255, 64, 129, 0.2);
}
.ui.list-view.light-brown .list.item:hover:not(.current) {
  background: rgba(165, 103, 63, 0.1);
}
.ui.list-view.light-brown .list.item.current {
  background: rgba(165, 103, 63, 0.2);
}
.ui.list-view.light-grey .list.item:hover:not(.current) {
  background: rgba(118, 118, 118, 0.1);
}
.ui.list-view.light-grey .list.item.current {
  background: rgba(118, 118, 118, 0.2);
}
.ui.list-view.light-black .list.item:hover:not(.current) {
  background: rgba(27, 28, 29, 0.1);
}
.ui.list-view.light-black .list.item.current {
  background: rgba(27, 28, 29, 0.2);
}
.ui.list-view.red .list.item:hover:not(.current) {
  background: rgba(219, 40, 40, 0.12);
}
.ui.list-view.red .list.item.current {
  background: #db2828;
  color: #ffffff;
}
.ui.list-view.orange .list.item:hover:not(.current) {
  background: rgba(242, 113, 28, 0.12);
}
.ui.list-view.orange .list.item.current {
  background: #f2711c;
  color: #ffffff;
}
.ui.list-view.yellow .list.item:hover:not(.current) {
  background: rgba(251, 189, 8, 0.12);
}
.ui.list-view.yellow .list.item.current {
  background: #fbbd08;
  color: #ffffff;
}
.ui.list-view.olive .list.item:hover:not(.current) {
  background: rgba(181, 204, 24, 0.12);
}
.ui.list-view.olive .list.item.current {
  background: #b5cc18;
  color: #ffffff;
}
.ui.list-view.green .list.item:hover:not(.current) {
  background: rgba(33, 186, 69, 0.12);
}
.ui.list-view.green .list.item.current {
  background: #21ba45;
  color: #ffffff;
}
.ui.list-view.teal .list.item:hover:not(.current) {
  background: rgba(0, 181, 173, 0.12);
}
.ui.list-view.teal .list.item.current {
  background: #00b5ad;
  color: #ffffff;
}
.ui.list-view.blue .list.item:hover:not(.current) {
  background: rgba(33, 133, 208, 0.12);
}
.ui.list-view.blue .list.item.current {
  background: #2185d0;
  color: #ffffff;
}
.ui.list-view.violet .list.item:hover:not(.current) {
  background: rgba(100, 53, 201, 0.12);
}
.ui.list-view.violet .list.item.current {
  background: #6435c9;
  color: #ffffff;
}
.ui.list-view.purple .list.item:hover:not(.current) {
  background: rgba(163, 51, 200, 0.12);
}
.ui.list-view.purple .list.item.current {
  background: #a333c8;
  color: #ffffff;
}
.ui.list-view.pink .list.item:hover:not(.current) {
  background: rgba(255, 64, 129, 0.12);
}
.ui.list-view.pink .list.item.current {
  background: #ff4081;
  color: #ffffff;
}
.ui.list-view.brown .list.item:hover:not(.current) {
  background: rgba(165, 103, 63, 0.12);
}
.ui.list-view.brown .list.item.current {
  background: #a5673f;
  color: #ffffff;
}
.ui.list-view.grey .list.item:hover:not(.current) {
  background: rgba(118, 118, 118, 0.12);
}
.ui.list-view.grey .list.item.current {
  background: #767676;
  color: #ffffff;
}
.ui.list-view.black .list.item:hover:not(.current) {
  background: rgba(27, 28, 29, 0.12);
}
.ui.list-view.black .list.item.current {
  background: #1b1c1d;
  color: #ffffff;
}
.desktop .ui.list-view.v-scroll > .index-bar,
.desktop .ui.list-view.v-scroll > .float-group-header {
  right: 18px;
}
.ie .ui.list-view > .index-bar {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.ie .ui.list-view > .index-bar > div {
  flex: 1;
  text-align: center;
  position: relative;
}
.ie .ui.list-view > .index-bar > div > span {
  position: absolute;
  width: 100%;
  top: 50%;
  line-height: 20px;
  margin-top: -10px;
}

.ui.nested-list {
  display: block;
  position: relative;
  overflow-x: hidden;
}
.ui.nested-list .box.title-box {
  overflow: hidden;
}
.ui.nested-list .detail {
  border-left: 1px solid #dcddde;
}
.ui.nested-list .ul.list-view {
  margin: 0;
}
.ui.nested-list .ui.layer {
  background: #ffffff;
  box-shadow: -2px 0 0 0 rgba(34, 36, 38, 0.2);
}
.ui.nested-list .item.has-child {
  position: relative;
  padding-right: 1.25em;
}
.ui.nested-list .item.has-child:before {
  font-family: Icons;
  content: "\f105";
  position: absolute;
  right: 0.5em;
  top: 50%;
  margin-top: -0.6em;
}

.ui.tree .tree.item {
  padding: 0;
}
.ui.tree .child-nodes {
  overflow: visible;
  margin-left: 2.25em !important;
}
.ui.tree .tree.node {
  min-height: 2.7em;
  padding: 0.25em;
  line-height: 2.2em;
}
.ui.tree .tree.node > .expand-button {
  float: left;
  width: 2.2em;
  height: 2.2em;
  line-height: 2.2em;
  margin-right: 0.25em;
  text-align: center;
  transition-duration: 0.3s;
  transition-property: transform;
}
.ui.tree .tree.node > .expand-button:before {
  font-family: Icons;
  content: "\f105";
}
.ui.tree .tree.node.expanded > .expand-button {
  transform: rotate(90deg);
}
.ui.tree .tree.node.leaf > .expand-button {
  visibility: hidden;
}
.ui.tree .tree.node .ui.checkbox {
  top: 0.35em;
}
.ui.tree.impact .child-nodes {
  margin-left: 1.5em !important;
}
.ui.tree.impact .tree.node {
  min-height: 2em;
  line-height: 1.5em;
}
.ui.tree.impact .tree.node > .expand-button {
  width: 1.5em;
  height: 1.5em;
}
.ui.tree.impact .tree.node > .expand-button:before {
  line-height: 1.5em;
}
.ui.tree.impact .tree.node .ui.checkbox {
  top: 0.25em;
}
.ui.tree.navigator .tree.node {
  position: relative;
  overflow: hidden;
  padding-left: 1em;
}
.ui.tree.navigator .tree.node > .expand-button {
  float: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 2.7em;
  height: 2.7em;
  line-height: 2.7em;
  margin-right: 0;
}
.ui.tree.navigator .tree.node > .expand-button:before {
  float: right;
  margin-right: 1em;
}
.ui.tree .tree.item:not(.current) > .tree.node:hover {
  background: rgba(0, 181, 173, 0.1);
}
.ui.tree .tree.item.current > .tree.node {
  background: rgba(0, 181, 173, 0.2);
  color: rgba(0, 0, 0, 0.85);
}
.ui.tree.inverted {
  background: #393b3d;
}
.ui.tree.inverted .tree.item {
  color: rgba(255, 255, 255, 0.9);
  background: #393b3d;
}
.ui.tree.inverted .tree.item:not(.current) > .tree.node:hover {
  background: rgba(33, 133, 208, 0.2);
}
.ui.tree.inverted .tree.item.current > .tree.node {
  background: #2185d0;
}
.ui.tree.basic {
  background: none;
}
.ui.tree.basic .tree.item:not(.current) {
  color: inherit;
  background: none;
}
.ui.tree.basic .tree.item:not(.current) > .tree.node,
.ui.tree.basic .tree.item:not(.current) > .tree.node:hover {
  color: inherit;
  background: none;
}
.ui.tree.basic .tree.item.current > .tree.node {
  color: inherit;
  background: none;
}
.ui.tree.light-red .tree.item:not(.current) > .tree.node:hover {
  background: rgba(219, 40, 40, 0.1);
}
.ui.tree.light-red .tree.item.current > .tree.node {
  background: rgba(219, 40, 40, 0.2);
}
.ui.tree.light-orange .tree.item:not(.current) > .tree.node:hover {
  background: rgba(242, 113, 28, 0.1);
}
.ui.tree.light-orange .tree.item.current > .tree.node {
  background: rgba(242, 113, 28, 0.2);
}
.ui.tree.light-yellow .tree.item:not(.current) > .tree.node:hover {
  background: rgba(251, 189, 8, 0.1);
}
.ui.tree.light-yellow .tree.item.current > .tree.node {
  background: rgba(251, 189, 8, 0.2);
}
.ui.tree.light-olive .tree.item:not(.current) > .tree.node:hover {
  background: rgba(181, 204, 24, 0.1);
}
.ui.tree.light-olive .tree.item.current > .tree.node {
  background: rgba(181, 204, 24, 0.2);
}
.ui.tree.light-green .tree.item:not(.current) > .tree.node:hover {
  background: rgba(33, 186, 69, 0.1);
}
.ui.tree.light-green .tree.item.current > .tree.node {
  background: rgba(33, 186, 69, 0.2);
}
.ui.tree.light-teal .tree.item:not(.current) > .tree.node:hover {
  background: rgba(0, 181, 173, 0.1);
}
.ui.tree.light-teal .tree.item.current > .tree.node {
  background: rgba(0, 181, 173, 0.2);
}
.ui.tree.light-blue .tree.item:not(.current) > .tree.node:hover {
  background: rgba(33, 133, 208, 0.1);
}
.ui.tree.light-blue .tree.item.current > .tree.node {
  background: rgba(33, 133, 208, 0.2);
}
.ui.tree.light-violet .tree.item:not(.current) > .tree.node:hover {
  background: rgba(100, 53, 201, 0.1);
}
.ui.tree.light-violet .tree.item.current > .tree.node {
  background: rgba(100, 53, 201, 0.2);
}
.ui.tree.light-purple .tree.item:not(.current) > .tree.node:hover {
  background: rgba(163, 51, 200, 0.1);
}
.ui.tree.light-purple .tree.item.current > .tree.node {
  background: rgba(163, 51, 200, 0.2);
}
.ui.tree.light-pink .tree.item:not(.current) > .tree.node:hover {
  background: rgba(255, 64, 129, 0.1);
}
.ui.tree.light-pink .tree.item.current > .tree.node {
  background: rgba(255, 64, 129, 0.2);
}
.ui.tree.light-brown .tree.item:not(.current) > .tree.node:hover {
  background: rgba(165, 103, 63, 0.1);
}
.ui.tree.light-brown .tree.item.current > .tree.node {
  background: rgba(165, 103, 63, 0.2);
}
.ui.tree.light-grey .tree.item:not(.current) > .tree.node:hover {
  background: rgba(118, 118, 118, 0.1);
}
.ui.tree.light-grey .tree.item.current > .tree.node {
  background: rgba(118, 118, 118, 0.2);
}
.ui.tree.light-black .tree.item:not(.current) > .tree.node:hover {
  background: rgba(27, 28, 29, 0.1);
}
.ui.tree.light-black .tree.item.current > .tree.node {
  background: rgba(27, 28, 29, 0.2);
}
.ui.tree.red .tree.item:not(.current) > .tree.node:hover {
  background: rgba(219, 40, 40, 0.12);
}
.ui.tree.red .tree.item.current > .tree.node {
  background: #db2828;
  color: #ffffff;
}
.ui.tree.orange .tree.item:not(.current) > .tree.node:hover {
  background: rgba(242, 113, 28, 0.12);
}
.ui.tree.orange .tree.item.current > .tree.node {
  background: #f2711c;
  color: #ffffff;
}
.ui.tree.yellow .tree.item:not(.current) > .tree.node:hover {
  background: rgba(251, 189, 8, 0.12);
}
.ui.tree.yellow .tree.item.current > .tree.node {
  background: #fbbd08;
  color: #ffffff;
}
.ui.tree.olive .tree.item:not(.current) > .tree.node:hover {
  background: rgba(181, 204, 24, 0.12);
}
.ui.tree.olive .tree.item.current > .tree.node {
  background: #b5cc18;
  color: #ffffff;
}
.ui.tree.green .tree.item:not(.current) > .tree.node:hover {
  background: rgba(33, 186, 69, 0.12);
}
.ui.tree.green .tree.item.current > .tree.node {
  background: #21ba45;
  color: #ffffff;
}
.ui.tree.teal .tree.item:not(.current) > .tree.node:hover {
  background: rgba(0, 181, 173, 0.12);
}
.ui.tree.teal .tree.item.current > .tree.node {
  background: #00b5ad;
  color: #ffffff;
}
.ui.tree.blue .tree.item:not(.current) > .tree.node:hover {
  background: rgba(33, 133, 208, 0.12);
}
.ui.tree.blue .tree.item.current > .tree.node {
  background: #2185d0;
  color: #ffffff;
}
.ui.tree.violet .tree.item:not(.current) > .tree.node:hover {
  background: rgba(100, 53, 201, 0.12);
}
.ui.tree.violet .tree.item.current > .tree.node {
  background: #6435c9;
  color: #ffffff;
}
.ui.tree.purple .tree.item:not(.current) > .tree.node:hover {
  background: rgba(163, 51, 200, 0.12);
}
.ui.tree.purple .tree.item.current > .tree.node {
  background: #a333c8;
  color: #ffffff;
}
.ui.tree.pink .tree.item:not(.current) > .tree.node:hover {
  background: rgba(255, 64, 129, 0.12);
}
.ui.tree.pink .tree.item.current > .tree.node {
  background: #ff4081;
  color: #ffffff;
}
.ui.tree.brown .tree.item:not(.current) > .tree.node:hover {
  background: rgba(165, 103, 63, 0.12);
}
.ui.tree.brown .tree.item.current > .tree.node {
  background: #a5673f;
  color: #ffffff;
}
.ui.tree.grey .tree.item:not(.current) > .tree.node:hover {
  background: rgba(118, 118, 118, 0.12);
}
.ui.tree.grey .tree.item.current > .tree.node {
  background: #767676;
  color: #ffffff;
}
.ui.tree.black .tree.item:not(.current) > .tree.node:hover {
  background: rgba(27, 28, 29, 0.12);
}
.ui.tree.black .tree.item.current > .tree.node {
  background: #1b1c1d;
  color: #ffffff;
}

.ui.widget-table > .table-wrapper {
  height: 100%;
  overflow: auto;
}
.ui.widget-table table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}
.ui.widget-table table th,
.ui.widget-table table td {
  border-width: 1px;
  border-style: solid;
  border-color: #edf0f3 transparent;
}
.ui.widget-table table thead th {
  font-weight: normal;
  background: #ffffff;
  border-color: #edf0f3 transparent;
}
.ui.widget-table table thead th > div {
  overflow: hidden;
  padding: 0.4em 6px;
}
.ui.widget-table table tbody td > div {
  overflow: hidden;
  padding: 0.6em 6px;
}
.ui.widget-table table tbody tr:first-child td {
  border-top: 2px solid #edf0f3;
}
.ui.widget-table table tbody tr:last-child td {
  border-bottom: 2px solid #edf0f3;
}
.ui.widget-table table tfoot td {
  background: #ffffff;
  border-color: #edf0f3 transparent;
}
.ui.widget-table table tfoot td > div {
  overflow: hidden;
  padding: 0.4em 6px;
}
.ui.widget-table table .ui.checkbox.in-cell {
  margin-top: 0.25em;
  margin-left: 0.5em;
}
.ui.widget-table > .fixed-header,
.ui.widget-table > .fixed-footer {
  overflow: hidden;
  height: auto !important;
  position: absolute;
  display: none;
}
.ui.widget-table > .fixed-header {
  top: 0;
}
.ui.widget-table > .fixed-footer {
  bottom: 0;
}
.ui.widget-table.impact table th > div,
.ui.widget-table.impact table td > div {
  padding: 0.25em !important;
}
.ui.widget-table.striped .table.item:nth-child(2n):not(.current) {
  background: #f7f7f7;
}
.ui.widget-table .table.item:hover:not(.current) {
  background: rgba(0, 181, 173, 0.1);
}
.ui.widget-table .table.item.current {
  background: rgba(0, 181, 173, 0.2);
}
.ui.widget-table.striped.inverted .table.item:nth-child(2n):not(.current) {
  background: #2f3032;
}
.ui.widget-table.inverted {
  background: #393b3d;
}
.ui.widget-table.inverted .table.item {
  color: rgba(255, 255, 255, 0.9);
  background: #393b3d;
}
.ui.widget-table.inverted .table.item:hover:not(.current) {
  background: rgba(33, 133, 208, 0.2);
}
.ui.widget-table.inverted .table.item.current {
  background: #2185d0;
}
.ui.widget-table.inverted table {
  color: rgba(255, 255, 255, 0.9);
}
.ui.widget-table.inverted table th,
.ui.widget-table.inverted table td {
  border-color: transparent transparent;
}
.ui.widget-table.inverted table thead th {
  background: #474a4d;
  border-color: #65696c;
}
.ui.widget-table.inverted table tbody tr:last-child td {
  border-bottom-color: #65696c;
}
.ui.widget-table.inverted table tfoot td {
  background: #474a4d;
  border-color: #65696c;
}
.ui.widget-table.basic {
  background: none;
}
.ui.widget-table.basic .table.item {
  color: inherit;
  background: none;
}
.ui.widget-table.basic .table.item:hover:not(.current) {
  background: none;
}
.ui.widget-table.basic .table.item.current {
  background: none;
  color: inherit;
}
.ui.widget-table.light-red .table.item:hover:not(.current) {
  background: rgba(219, 40, 40, 0.1);
}
.ui.widget-table.light-red .table.item.current {
  background: rgba(219, 40, 40, 0.2);
}
.ui.widget-table.light-orange .table.item:hover:not(.current) {
  background: rgba(242, 113, 28, 0.1);
}
.ui.widget-table.light-orange .table.item.current {
  background: rgba(242, 113, 28, 0.2);
}
.ui.widget-table.light-yellow .table.item:hover:not(.current) {
  background: rgba(251, 189, 8, 0.1);
}
.ui.widget-table.light-yellow .table.item.current {
  background: rgba(251, 189, 8, 0.2);
}
.ui.widget-table.light-olive .table.item:hover:not(.current) {
  background: rgba(181, 204, 24, 0.1);
}
.ui.widget-table.light-olive .table.item.current {
  background: rgba(181, 204, 24, 0.2);
}
.ui.widget-table.light-green .table.item:hover:not(.current) {
  background: rgba(33, 186, 69, 0.1);
}
.ui.widget-table.light-green .table.item.current {
  background: rgba(33, 186, 69, 0.2);
}
.ui.widget-table.light-teal .table.item:hover:not(.current) {
  background: rgba(0, 181, 173, 0.1);
}
.ui.widget-table.light-teal .table.item.current {
  background: rgba(0, 181, 173, 0.2);
}
.ui.widget-table.light-blue .table.item:hover:not(.current) {
  background: rgba(33, 133, 208, 0.1);
}
.ui.widget-table.light-blue .table.item.current {
  background: rgba(33, 133, 208, 0.2);
}
.ui.widget-table.light-violet .table.item:hover:not(.current) {
  background: rgba(100, 53, 201, 0.1);
}
.ui.widget-table.light-violet .table.item.current {
  background: rgba(100, 53, 201, 0.2);
}
.ui.widget-table.light-purple .table.item:hover:not(.current) {
  background: rgba(163, 51, 200, 0.1);
}
.ui.widget-table.light-purple .table.item.current {
  background: rgba(163, 51, 200, 0.2);
}
.ui.widget-table.light-pink .table.item:hover:not(.current) {
  background: rgba(255, 64, 129, 0.1);
}
.ui.widget-table.light-pink .table.item.current {
  background: rgba(255, 64, 129, 0.2);
}
.ui.widget-table.light-brown .table.item:hover:not(.current) {
  background: rgba(165, 103, 63, 0.1);
}
.ui.widget-table.light-brown .table.item.current {
  background: rgba(165, 103, 63, 0.2);
}
.ui.widget-table.light-grey .table.item:hover:not(.current) {
  background: rgba(118, 118, 118, 0.1);
}
.ui.widget-table.light-grey .table.item.current {
  background: rgba(118, 118, 118, 0.2);
}
.ui.widget-table.light-black .table.item:hover:not(.current) {
  background: rgba(27, 28, 29, 0.1);
}
.ui.widget-table.light-black .table.item.current {
  background: rgba(27, 28, 29, 0.2);
}
.ui.widget-table.red .table.item:hover:not(.current) {
  background: rgba(219, 40, 40, 0.12);
}
.ui.widget-table.red .table.item.current {
  background: #db2828;
  color: #ffffff;
}
.ui.widget-table.orange .table.item:hover:not(.current) {
  background: rgba(242, 113, 28, 0.12);
}
.ui.widget-table.orange .table.item.current {
  background: #f2711c;
  color: #ffffff;
}
.ui.widget-table.yellow .table.item:hover:not(.current) {
  background: rgba(251, 189, 8, 0.12);
}
.ui.widget-table.yellow .table.item.current {
  background: #fbbd08;
  color: #ffffff;
}
.ui.widget-table.olive .table.item:hover:not(.current) {
  background: rgba(181, 204, 24, 0.12);
}
.ui.widget-table.olive .table.item.current {
  background: #b5cc18;
  color: #ffffff;
}
.ui.widget-table.green .table.item:hover:not(.current) {
  background: rgba(33, 186, 69, 0.12);
}
.ui.widget-table.green .table.item.current {
  background: #21ba45;
  color: #ffffff;
}
.ui.widget-table.teal .table.item:hover:not(.current) {
  background: rgba(0, 181, 173, 0.12);
}
.ui.widget-table.teal .table.item.current {
  background: #00b5ad;
  color: #ffffff;
}
.ui.widget-table.blue .table.item:hover:not(.current) {
  background: rgba(33, 133, 208, 0.12);
}
.ui.widget-table.blue .table.item.current {
  background: #2185d0;
  color: #ffffff;
}
.ui.widget-table.violet .table.item:hover:not(.current) {
  background: rgba(100, 53, 201, 0.12);
}
.ui.widget-table.violet .table.item.current {
  background: #6435c9;
  color: #ffffff;
}
.ui.widget-table.purple .table.item:hover:not(.current) {
  background: rgba(163, 51, 200, 0.12);
}
.ui.widget-table.purple .table.item.current {
  background: #a333c8;
  color: #ffffff;
}
.ui.widget-table.pink .table.item:hover:not(.current) {
  background: rgba(255, 64, 129, 0.12);
}
.ui.widget-table.pink .table.item.current {
  background: #ff4081;
  color: #ffffff;
}
.ui.widget-table.brown .table.item:hover:not(.current) {
  background: rgba(165, 103, 63, 0.12);
}
.ui.widget-table.brown .table.item.current {
  background: #a5673f;
  color: #ffffff;
}
.ui.widget-table.grey .table.item:hover:not(.current) {
  background: rgba(118, 118, 118, 0.12);
}
.ui.widget-table.grey .table.item.current {
  background: #767676;
  color: #ffffff;
}
.ui.widget-table.black .table.item:hover:not(.current) {
  background: rgba(27, 28, 29, 0.12);
}
.ui.widget-table.black .table.item.current {
  background: #1b1c1d;
  color: #ffffff;
}

.ui.input > .editor {
  -webkit-appearance: none !important;
  margin: 0em;
  max-width: 100%;
  flex: 1 0 auto;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  text-align: left;
  line-height: 1.2142em;
  font-family: "Roboto", "Helvetica Neue", "Microsoft YaHei", "Lato", 'Helvetica Neue', Arial, Helvetica, sans-serif;
  padding: 0.67861429em 1em;
  background: #ffffff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  transition: background-color 0.1s ease, box-shadow 0.1s ease, border-color 0.1s ease;
  box-shadow: none;
}
/*--------------------
      Placeholder
---------------------*/
/* browsers require these rules separate */
.ui.input > .editor::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.ui.input > .editor::-moz-placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.ui.input > .editor::-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.4);
}
/*******************************
            States
*******************************/
/*--------------------
        Active
---------------------*/
.ui.input > .editor:active,
.ui.input.down > .editor {
  border-color: rgba(0, 0, 0, 0.3);
  background: #fafafa;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
}
.ui.input.focus > .editor,
.ui.input > .editor:focus {
  border-color: rgba(34, 36, 38, 0.35);
  background: #ffffff;
  color: rgba(0, 0, 0, 0.8);
  box-shadow: none;
}
.ui.input.focus > .editor::-webkit-input-placeholder,
.ui.input > .editor:focus > .editor::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.87);
}
.ui.input.focus > .editor::-moz-placeholder,
.ui.input > .editor:focus > .editor::-moz-placeholder {
  color: rgba(0, 0, 0, 0.87);
}
.ui.input.focus > .editor::-ms-input-placeholder,
.ui.input > .editor:focus > .editor::-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.87);
}
/*--------------------
        Error
---------------------*/
.ui.input.error > .editor {
  background-color: #fff6f6;
  border-color: #e0b4b4;
  color: #db2828;
  box-shadow: none;
}
/* Error Placeholder */
.ui.input.error > .editor ::-webkit-input-placeholder {
  color: rgba(255, 80, 80, 0.4);
}
.ui.input.error > .editor ::-moz-placeholder {
  color: rgba(255, 80, 80, 0.4);
}
.ui.input.error > .editor ::-ms-input-placeholder {
  color: rgba(255, 80, 80, 0.4);
}
/* Focused Error Placeholder */
.ui.input.error > .editor :focus::-webkit-input-placeholder {
  color: rgba(255, 80, 80, 0.7);
}
.ui.input.error > .editor :focus::-moz-placeholder {
  color: rgba(255, 80, 80, 0.7);
}
.ui.input.error > .editor :focus::-ms-input-placeholder {
  color: rgba(255, 80, 80, 0.7);
}
/*******************************
           Variations
*******************************/
/*--------------------
      Transparent
---------------------*/
.ui.transparent.input > .editor {
  border-color: transparent !important;
  background-color: transparent !important;
  padding: 0em !important;
  box-shadow: none !important;
}
.ui.transparent.icon.input > .editor {
  padding-left: 0em !important;
  padding-right: 2em !important;
}
.ui.transparent[class*="left icon"].input > .editor {
  padding-left: 2em !important;
  padding-right: 0em !important;
}
.ui.transparent.inverted.input > .editor {
  color: inherit;
}
.ui.transparent.inverted.input > .editor::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.ui.transparent.inverted.input > .editor::-moz-placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.ui.transparent.inverted.input > .editor::-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.ui.icon.input > .editor {
  padding-right: 2.67142857em !important;
}
.ui[class*="left icon"].input > .editor {
  padding-left: 2.67142857em !important;
  padding-right: 1em !important;
}
/* Focus */
.ui.icon.input > .editor:focus ~ i.icon {
  opacity: 1;
}
/* Regular Label on Left */
.ui.labeled.input:not([class*="corner labeled"]):not([class*="right labeled"]) > .editor {
  border-left: none;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.ui[class*="right labeled"].input > .editor {
  border-right: none;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}
/* Spacing with corner label */
.ui[class*="corner labeled"]:not(.left).labeled.input > .editor {
  padding-right: 2.5em !important;
}
.ui[class*="corner labeled"].icon.input:not(.left) > .editor {
  padding-right: 3.25em !important;
}
/* Left Labeled */
.ui[class*="corner labeled"].left.labeled.input > .editor {
  padding-left: 2.5em !important;
}
.ui[class*="corner labeled"].icon.input.left > .editor {
  padding-left: 3.25em !important;
}
/* Button on Right */
.ui.action.input:not([class*="left action"]) > .editor {
  border-right: none;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}
.ui[class*="left action"].input > .editor {
  border-left: none;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}
/*--------------------
       Inverted
---------------------*/
/* Standard */
.ui.inverted.input > .editor {
  border: none;
}
/*--------------------
        Fluid
---------------------*/
.ui.fluid.input {
  display: flex;
}
.ui.fluid.input > .editor {
  width: 0px !important;
}

.ui.input.select > .editor.placeholder:not(:focus) {
  color: #999999;
}
.ui.input.drop > .icon {
  pointer-events: inherit !important;
}
.ui.input.drop > .value-content {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  line-height: 1.2142em;
  padding: 0.67861429em 1em;
  pointer-events: none;
  list-style: none;
}
.ui.input.drop > .value-content.placeholder {
  opacity: 0.3 !important;
  filter: alpha(opacity=30) !important;
}
.ui.input.drop.opened input {
  border-color: rgba(0, 0, 0, 0.3);
}
.ui.input.drop.opened > .value-content {
  opacity: 0.5;
  filter: alpha(opacity=50);
}
.ui.drop-container {
  background: #ffffff;
}
.ui.drop-container .filter-container {
  background: #ffffff;
  padding: 0.25em;
}
.ui.drop-container.dialog {
  min-width: 20em;
}
.ui.drop-box {
  position: absolute;
  overflow: auto;
  border: 1px solid rgba(0, 0, 0, 0.3);
  min-height: 1em;
  width: auto;
}
.ui.drop-box.direction-down {
  border-radius: 0 0 0.28571429rem 0.28571429rem;
  border-top-width: 0;
}
.ui.drop-box.direction-down.x-over {
  border-radius: 0.28571429rem;
  border-top-width: 1px;
}
.ui.drop-box.direction-up {
  border-radius: 0.28571429rem 0.28571429rem 0 0;
  border-bottom-width: 0;
}
.ui.drop-box.direction-up.x-over {
  border-radius: 0.28571429rem;
  border-bottom-width: 1px;
}
.ui.drop-box .filter-pane {
  padding: 0.5em;
}
.ui.drop-box.inverted {
  border-radius: 0.28571429rem;
  border-top-width: 1px;
  border-bottom-width: 1px;
}

.ui.sub-view {
  overflow: hidden;
}
.ui.sub-view > .content {
  height: 100%;
}
.ui.iframe {
  position: relative;
}
.ui.iframe iframe {
  width: 100%;
  height: 100%;
}

@keyframes breath {
  from {
    opacity: 0.2;
  }
  50% {
    opacity: 0.8;
  }
  to {
    opacity: 0.2;
  }
}
@-webkit-keyframes breath {
  from {
    opacity: 0.2;
  }
  50% {
    opacity: 0.8;
  }
  to {
    opacity: 0.2;
  }
}
.ui.sys-dimmer {
  opacity: 0.1 !important;
}
.ui.sys-dimmer.card {
  margin: 0 !important;
}
.ui.message-box {
  width: auto;
  height: auto;
  position: fixed !important;
}
.ui.message-box .close-btn.hidden,
.ui.message-box .actions.hidden {
  display: none !important;
}
.ui.message-box.desktop {
  text-align: left;
  background: #ffffff;
  border: none;
  box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.2), 1px 3px 15px 2px rgba(0, 0, 0, 0.2);
  -webkit-transform-origin: 50% 25%;
  -ms-transform-origin: 50% 25%;
  transform-origin: 50% 25%;
  border-radius: 0.28571429rem;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  min-width: 360px;
}
.ui.message-box.desktop .content-container .close-btn {
  cursor: pointer;
  position: absolute;
  top: 0.9rem;
  right: 1rem;
  z-index: 1;
  opacity: 0.5;
  font-size: 1em;
  color: #1b1c1d;
  line-height: 2rem;
}
.ui.message-box.desktop .content-container .close-btn:hover {
  opacity: 1;
}
.ui.message-box.desktop .content-container > .header {
  background: #ffffff;
  margin: 0em;
  padding: 1rem 1.25rem;
  box-shadow: none;
  color: #1b1c1d;
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
}
.ui.message-box.desktop .content-container > .header:not(.ui) {
  font-size: 1.42857143rem;
  line-height: 1.2857em;
  font-weight: bold;
}
.ui.message-box.desktop .content-container > .image.content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}
.ui.message-box.desktop .content-container > .image.content > .image,
.ui.message-box.desktop .content-container > .image.content > .description {
  display: block;
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
}
.ui.message-box.desktop .content-container > .content {
  width: 100%;
  font-size: 1em;
  line-height: 1.4;
  padding: 1.5rem;
  background: #ffffff;
}
.ui.message-box.desktop .content-container > .content > .image {
  min-width: 4em;
  text-align: center;
}
.ui.message-box.desktop .content-container > .content > .icon + .description,
.ui.message-box.desktop .content-container > .content > .image + .description {
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: auto;
  padding-left: 2em;
}
.ui.message-box.desktop .content-container > .content > .image > i.icon {
  margin: 0em;
  opacity: 1;
  width: auto;
  line-height: 1;
  font-size: 8rem;
}
.ui.message-box.desktop .content-container .actions {
  background: #f9fafb;
  padding: 0.75rem 1rem;
  width: 100%;
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  text-align: right;
}
.ui.message-box.desktop .content-container .actions > .button {
  margin-left: 0.75em;
}
.ui.message-box.mobile {
  bottom: 0;
  left: 0;
  right: 0;
  top: auto;
  width: 100%;
  background-color: #ffffff;
  height: 40%;
  border-radius: 0em;
  margin: 0em;
  overflow: visible;
}
.ui.message-box.mobile > .content-container {
  width: 100%;
}
.ui.message-box.mobile > .content-container .content {
  text-align: center;
  padding: 2rem 0 2rem 0;
}
.ui.message-box.mobile > .content-container .content .image {
  padding: 1rem;
  height: 6em;
  line-height: 4em;
}
.ui.message-box.mobile > .content-container .header:not(.ui) > .close {
  cursor: pointer;
}
.ui.message-box.mobile > .content-container .header:not(.ui) > .close i {
  line-height: 2.75rem;
  height: 2.75em;
}
.ui.message-box.mobile.standard::before {
  height: 2px;
  display: block;
  content: "";
  position: absolute;
  left: 0px;
  right: 0px;
}
.ui.message-box.mobile.standard .header {
  background-color: transparent;
  position: relative;
  margin-top: -2rem;
  text-align: center;
}
.ui.message-box.mobile.standard .header .caption {
  display: none;
}
.ui.message-box.mobile.standard .header > .close-btn {
  width: 4em;
  height: 4em;
  border-radius: 2rem;
  display: inline-block;
  line-height: 4rem;
  -webkit-tap-highlight-color: transparent;
  -webkit-focus-ring-color: transparent;
  text-align: center;
  color: #ffffff;
  opacity: 1;
}
.ui.message-box.mobile.standard .header > .close-btn i {
  line-height: 4rem;
  height: 4em;
  animation-name: breath;
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  -webkit-animation-name: breath;
  -webkit-animation-duration: 1.5s;
  -webkit-animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: infinite;
  margin-right: 0rem;
}
.ui.message-box.mobile.standard.info .header > .close-btn,
.ui.message-box.mobile.standard.info::before {
  background-color: #2185d0;
}
.ui.message-box.mobile.standard.warning .header > .close-btn,
.ui.message-box.mobile.standard.warning::before {
  background-color: #fbbd08;
}
.ui.message-box.mobile.standard.error .header > .close-btn,
.ui.message-box.mobile.standard.error::before {
  background-color: #db2828;
}
.ui.message-box.mobile.simplicity .content-container > .header {
  position: relative;
  height: 2.75rem;
}
.ui.message-box.mobile.simplicity .content-container > .header .caption {
  line-height: 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
  padding: 0.5785em 0.75em 0.75em 1em;
}
.ui.message-box.mobile.simplicity .content-container > .header > .close-btn {
  position: absolute;
  height: 2.75rem;
  top: 0px;
  line-height: 2.75rem;
  right: 10px;
}
.ui.message-box.mobile.simplicity .content-container > .header::after {
  height: 1px;
  display: block;
  content: "";
  width: 100%;
}
.ui.message-box.mobile.simplicity::before {
  height: 2px;
  display: block;
  content: "";
  width: 100%;
}
.ui.message-box.mobile.simplicity.info {
  color: #2185d0;
}
.ui.message-box.mobile.simplicity.info .header::after {
  background-color: #2185d0;
}
.ui.message-box.mobile.simplicity.info::before {
  background-color: #2185d0;
}
.ui.message-box.mobile.simplicity.warning {
  color: #fbbd08;
}
.ui.message-box.mobile.simplicity.warning .header::after {
  background-color: #fbbd08;
}
.ui.message-box.mobile.simplicity.warning::before {
  background-color: #fbbd08;
}
.ui.message-box.mobile.simplicity.error {
  color: #db2828;
}
.ui.message-box.mobile.simplicity.error .header::after {
  background-color: #db2828;
}
.ui.message-box.mobile.simplicity.error::before {
  background-color: #db2828;
}
.ui.message-box.mobile.card {
  margin: 0 !important;
}
.ui.message-box.mobile.card,
.ui.message-box.mobile.card > .content-container,
.ui.message-box.mobile.card > .content-container > .header {
  border-top-left-radius: 1.5rem !important;
  border-top-right-radius: 1.5rem !important;
}
.ui.message-box.mobile.card .content-container .header {
  text-align: center;
  color: #ffffff;
  position: relative;
  height: 2.75rem;
}
.ui.message-box.mobile.card .content-container .header .caption {
  display: none;
}
.ui.message-box.mobile.card .content-container .header > .close-btn {
  width: 100%;
  line-height: 2.75rem;
}
.ui.message-box.mobile.card .content-container .header > .close-btn i.icon {
  font-size: 1.25em;
}
.ui.message-box.mobile.card.info .header {
  background-color: #2185d0;
}
.ui.message-box.mobile.card.warning .header {
  background-color: #fbbd08;
}
.ui.message-box.mobile.card.error .header {
  background-color: #db2828;
}
.ui.message-box.mobile.tradition .content-container .header {
  position: relative;
  width: 100%;
  height: 2.75rem;
  color: #ffffff;
}
.ui.message-box.mobile.tradition .content-container .header .caption {
  line-height: 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
  padding: 0.5785em 0.75em 0.75em 1em;
}
.ui.message-box.mobile.tradition .content-container .header > .close-btn {
  position: absolute;
  height: 2.75rem;
  top: 0px;
  line-height: 2.75rem;
  right: 10px;
}
.ui.message-box.mobile.tradition .content-container .actions {
  width: 100%;
}
.ui.message-box.mobile.tradition.info .header {
  background-color: #2185d0;
}
.ui.message-box.mobile.tradition.warning .header {
  background-color: #fbbd08;
}
.ui.message-box.mobile.tradition.error .header {
  background-color: #db2828;
}

.ui.layer {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
}
.ui.black.layer {
  background-color: #1b1c1d !important;
  color: #ffffff !important;
}
.ui.blue.layer {
  background-color: #3b83c0 !important;
  color: #ffffff !important;
}
.ui.green.layer {
  background-color: #5bbd72 !important;
  color: #ffffff !important;
}
.ui.orange.layer {
  background-color: #e07b53 !important;
  color: #ffffff !important;
}
.ui.pink.layer {
  background-color: #d9499a !important;
  color: #ffffff !important;
}
.ui.purple.layer {
  background-color: #564f8a !important;
  color: #ffffff !important;
}
.ui.red.layer {
  background-color: #d95c5c !important;
  color: #ffffff !important;
}
.ui.teal.layer {
  background-color: #00b5ad !important;
  color: #ffffff !important;
}
.ui.yellow.layer {
  background-color: #f2c61f !important;
  color: #ffffff !important;
}

.ui.dialog {
  position: fixed;
  z-index: 1000;
  display: none;
  top: 50%;
  left: 50%;
  text-align: left;
  background: #ffffff;
  border: none;
  box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.2), 1px 3px 15px 2px rgba(0, 0, 0, 0.2);
  -webkit-transform-origin: 50% 25%;
  -ms-transform-origin: 50% 25%;
  transform-origin: 50% 25%;
  border-radius: 0.28571429rem;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  will-change: top, left, margin, transform, opacity;
  min-width: 240px;
}
.ui.dialog.v-box {
  height: auto;
}
.ui.dialog > :first-child:not(.icon),
.ui.dialog > .icon:first-child + * {
  border-top-left-radius: 0.28571429rem;
  border-top-right-radius: 0.28571429rem;
}
.ui.dialog > :last-child {
  border-bottom-left-radius: 0.28571429rem;
  border-bottom-right-radius: 0.28571429rem;
}
/*******************************
            Content
*******************************/
/*--------------
     Close
---------------*/
.ui.dialog .close-btn {
  cursor: pointer;
  position: absolute;
  top: -1rem;
  right: -1.25rem;
  z-index: 1;
  border-radius: 50%;
  opacity: 0.8;
  font-size: 1.25em;
  color: #ffffff;
  line-height: 2rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
}
.ui.dialog .close-btn:hover {
  opacity: 1;
}
/*--------------
     Header
---------------*/
.ui.dialog > .header {
  display: block;
  background: #ffffff;
  margin: 0em;
  padding: 1.25rem 1.5rem;
  box-shadow: none;
  color: rgba(0, 0, 0, 0.85);
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
}
.ui.dialog > .header:not(.ui) {
  font-size: 1.42857143rem;
  line-height: 1.2857em;
  font-weight: bold;
}
/*--------------
     Content
---------------*/
.ui.dialog > .content {
  display: block;
  width: 100%;
  font-size: 1em;
  line-height: 1.4;
  padding: 1.5rem;
  background: #ffffff;
}
.ui.dialog > .image.content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}
.ui.dialog > .image.content > .image,
.ui.dialog > .image.content > .description {
  display: block;
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  min-width: 0px;
}
.ui.dialog > .content > .icon + .description,
.ui.dialog > .content > .image + .description {
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  min-width: '';
  width: auto;
  padding-left: 2em;
}
/*rtl:ignore*/
.ui.dialog > .content > .image > i.icon {
  margin: 0;
  opacity: 1;
  width: auto;
  line-height: 1;
  font-size: 8rem;
}
/*--------------
     Actions
---------------*/
.ui.dialog .actions {
  background: #f9fafb;
  padding: 1rem 1rem;
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  text-align: right;
}
.ui.dialog .actions > .button {
  margin-left: 0.75em;
}

.ui.carousel {
  overflow: hidden;
  position: relative;
}
.ui.carousel > .items-wrap {
  position: relative;
  height: 100%;
}
.ui.carousel > .items-wrap > * {
  height: 100%;
  position: relative;
  float: left;
}
.ui.carousel > .indicators {
  position: absolute;
  z-index: 1;
  vertical-align: middle;
  text-align: center;
}
.ui.carousel > .indicators > span {
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  width: 0.6em;
  height: 0.6em;
  border-radius: 50%;
  background-clip: content-box;
  margin: 0.25em;
  transition-duration: 0.6s;
  transition-property: background-color, border-color, color, -webkit-box-shadow, -webkit-transform;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.ui.carousel > .indicators > span.active {
  border-color: #2185d0;
  background-color: #2185d0;
}
.ui.carousel .controls a {
  width: 32px;
  height: 32px;
  display: block;
  top: 50%;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  margin-top: -16px;
  opacity: 0.5;
  transition: opacity 0.35s linear 0s;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUI4MUYyNzJEQUUxMTFFNEI0Q0REOUU2MTU3MEVEMTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUI4MUYyNzNEQUUxMTFFNEI0Q0REOUU2MTU3MEVEMTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QjgxRjI3MERBRTExMUU0QjRDREQ5RTYxNTcwRUQxNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QjgxRjI3MURBRTExMUU0QjRDREQ5RTYxNTcwRUQxNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Por3U54AAAU1SURBVHja7FrPS1xXFHZm4cZJhECzULEI2qJTF135YIhYtYtKDWQrhPSfcFNCQCnFpVm0/4BZGoS0CEmhLUpMSxZZtGnTKminUogWcaLJQojT7zTfNTfDe/edOzNvsnjvwsdz7j0/vne877577nm5arXaluaWb0t5y2mEMEuKuFwBLgFDQBeDdwr8A/wOrAEruVzuscJeOJlczofLKDAYwuU3YF3LJRfjbBqXz4GAXX8Bj4AycAScA3qBD4F3KfMT8CWcf9PMACTFJcpZF7BafdX+BeaBgRidAWCO8lXqd0UFIAxKLnNKLvMaLmHKAfAUeAksAAXP4HVQ7yXtBPUGIIRLhyeXQhyXWoUS8ALYB0YbWVxEn3bEXsk3AK3iYgv1AQcUfL8ZK6zYoT2x26cNQCu5mME8sAGcxE4Tf8cB7Yr9fFwAWs3FDFzjYnHD02CvUu4G7V9TBMCLi5ZDFBcT8U2gDLR7GJJntAJcV8i20/4m/UUFwYuL+CaHkgfvN7hIxwQjMuthZJwLyh4wrNSZpZ9JRwAmfbiIb3IQLuMe/A2XCfmxyB/dSuUpOtwF+j2cdtPPoiMAXlxot59chNOULxf58RB4olS8zEVk2+fmLf0n9BcVADWXkCBsk9tlHy7yxyFwW6EwQwdbQE+dq/Ayn9moAMjYcp22e8hNOM4o5G/LvcuroBPYixEewWUJ+AMYw956t8430T5w3jF+njL+Wd0rTmPkuETOrib33Jn6dFgCUAEuxkT3Z1yuArIr+7HeRwDtHeCZY/wZZep6BIQbOV4lZ1e7+P+9Z4tg9hrMNkLp3gqnPhnK0uHsQCQ7EssORdN8LJ76wkhWGsuqw1k6rJabABaBh8ChzEbikH2LlMknzHfS4lGxeFQsHpNaHnGPQJ7nALLfN5mfnLg8tk6RJK8uMg+XtgV8wROk0ybeeBiPX60TJDlH+MCbhyMx6eOWscrkYZZpZJR8N2XK1NmgjbYGkSiPKCMlbhlPmDy0exBup84JbZQauPnEeYQpBtYWNGiAfGBtP4M69RPnUSvcxS3jPpOHRqevSUCe0rZWr2U8agVXuW8ebYJTg1HaXPXQaRkPW2Cai8ZCE50aLND2tEK2pTzswQdMHgoJOC7Q9gOFrOHRkQCPjloeZrNQZJLxNXCsfDePEJp2TNsBfUU1w+Mr4HkCG6nntH3GwwTgCq9LSkNSe9sgZpQ6SzW+wpoZu5XgbvLWG744Fe4CO8ppZIojvxAn7NPo7tBX1Pg9Dx6NYIe+zmbAEHPruCaFh2Xm4J8QZfZpihKP6CuqDcbwkK2wpg4xTFkXj0F7Bsjr4WZM1EwxZJulaNPfw74XlHHZuElfUeMuHr2sAeyxGhRlo58yFeo4eeStZOPIETE5SPwWOAA+Buzy+C77DijjOnQ8isnSXDzKnGUFFkHDynL9HCtQthzHw5A55ZFSWJNjplWu5GPMsmrbFseOKRtVrDgXkyG6eEi7D3wKXAC+A+wqdQ/7LlDmvsPOax6cEn8DK45pdZ11uLjFZZiyUeMr9BU1HsfDYMr+WqXm65Aphf4Zj7e2+kag5W8j8wis8SR1IMH37wB9rDlk1j143AE+41tliH/f8eCxbj8CRe6R5xL878/RR9EhY3jMe9gdIbTy8zaPt7YHV+QCLclJsmwwOw/IToSyM8HsVDjNdYF6K0ONV2SaUxlquEKlrQ4LgXEmGZLtvdf2+qNn+bz1TyYfkg1+38QbD+PxETBNHrKr6+SY1AY3yUO+B/hBwyMrj2fl8ZS3/wQYACJrrTvr6HLMAAAAAElFTkSuQmCC');
}
.ui.carousel .controls a.prev {
  left: 0.75em;
}
.ui.carousel .controls a.next {
  right: 0.75em;
  background-position: -32px 0;
}
.ui.carousel .controls a:hover {
  opacity: 1;
}
.ui.carousel-horizontal > .indicators {
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 1.5em;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
}
.ui.carousel-vertical > .indicators {
  right: 0;
  top: 0;
  width: 1.5em;
  height: 100%;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
}
.ui.carousel-vertical .controls a {
  margin-top: 0px;
  margin-left: -16px;
}
.ui.carousel-vertical .controls a.prev {
  top: 0.75em;
  left: 50%;
  bottom: auto;
  background-position: 0 -32px;
}
.ui.carousel-vertical .controls a.next {
  top: auto;
  left: 50%;
  bottom: 0.75em;
  margin-left: -18px;
  background-position: -32px -32px;
}
.ui.carousel.red > .indicators > span.active {
  border-color: #db2828 !important;
  background-color: #db2828 !important;
}
.ui.carousel.orange > .indicators > span.active {
  border-color: #f2711c !important;
  background-color: #f2711c !important;
}
.ui.carousel.yellow > .indicators > span.active {
  border-color: #fbbd08 !important;
  background-color: #fbbd08 !important;
}
.ui.carousel.olive > .indicators > span.active {
  border-color: #b5cc18 !important;
  background-color: #b5cc18 !important;
}
.ui.carousel.green > .indicators > span.active {
  border-color: #21ba45 !important;
  background-color: #21ba45 !important;
}
.ui.carousel.teal > .indicators > span.active {
  border-color: #00b5ad !important;
  background-color: #00b5ad !important;
}
.ui.carousel.blue > .indicators > span.active {
  border-color: #2185d0 !important;
  background-color: #2185d0 !important;
}
.ui.carousel.violet > .indicators > span.active {
  border-color: #6435c9 !important;
  background-color: #6435c9 !important;
}
.ui.carousel.purple > .indicators > span.active {
  border-color: #a333c8 !important;
  background-color: #a333c8 !important;
}
.ui.carousel.pink > .indicators > span.active {
  border-color: #ff4081 !important;
  background-color: #ff4081 !important;
}
.ui.carousel.brown > .indicators > span.active {
  border-color: #a5673f !important;
  background-color: #a5673f !important;
}
.ui.carousel.grey > .indicators > span.active {
  border-color: #767676 !important;
  background-color: #767676 !important;
}
.ui.carousel.black > .indicators > span.active {
  border-color: #1b1c1d !important;
  background-color: #1b1c1d !important;
}

.ui.card-book {
  overflow: hidden;
}
.ui.card-book > .item {
  display: none;
}
.ui.card-book > .item.active {
  display: block;
}
.ui.c-tab {
  position: relative;
  background-color: #ffffff;
  overflow: hidden;
}
.ui.c-tab > .tab-bar {
  overflow: hidden;
  display: inline-block;
  width: 100%;
  height: 38px;
  background: #f4f4f4;
  box-shadow: inset 0 -2px 3px rgba(203, 196, 130, 0.06);
  color: #29324e;
}
.ui.c-tab > .tab-bar > .tabs {
  list-style: none;
  padding: 0;
  display: inline-block;
  margin: 0;
}
.ui.c-tab > .tab-bar > .tabs > .tab-button {
  cursor: pointer;
  line-height: 38px;
  padding: 0 .5em 0 1em;
  float: left;
  font-size: 1em;
}
.ui.c-tab > .tab-bar > .tabs > .tab-button > .caption {
  display: block;
  float: left;
}
.ui.c-tab > .tab-bar > .tabs > .tab-button > .caption span {
  display: block;
  float: right;
}
.ui.c-tab > .tab-bar > .tabs > .tab-button > .caption > i {
  line-height: inherit;
  float: left;
  font-size: 1em;
}
.ui.c-tab > .tab-bar > .tabs > .tab-button .close-btn {
  display: block;
  float: right;
  opacity: 0.3;
  margin-left: .5em;
  line-height: inherit;
}
.ui.c-tab > .tab-bar > .tabs > .tab-button .close-btn i {
  line-height: inherit;
}
.ui.c-tab > .tab-bar > .tabs > .tab-button .close-btn:hover {
  opacity: 0.6;
  color: #d95c5c;
}
.ui.c-tab > .tab-bar > .tabs > .tab-button.active,
.ui.c-tab > .tab-bar > .tabs > .tab-button.active:hover {
  background-color: #ffffff;
  box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.4);
}
.ui.c-tab > .tab-bar > .tabs > .tab-button:hover {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.c-tab > .contents {
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 1em;
  top: 38px;
  bottom: 0;
  right: 0;
  left: 0;
}
.ui.c-tab > .contents > .item {
  display: none;
}
.ui.c-tab > .contents > .item.active {
  display: block;
}
.ui.c-tab.bottom-bar > .tab-bar {
  position: absolute;
  bottom: 0;
  box-shadow: inset 0 2px 3px rgba(203, 196, 130, 0.06);
}
.ui.c-tab.bottom-bar > .tab-bar > .tabs > .tab-button.active,
.ui.c-tab.bottom-bar > .tab-bar > .tabs > .tab-button.active:hover {
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.4);
}
.ui.c-tab.bottom-bar > .contents {
  overflow: auto;
  top: 0;
  bottom: 38px;
}
.ui.c-tab.left-bar > .tab-bar,
.ui.c-tab.right-bar > .tab-bar {
  position: absolute;
  top: 0;
  bottom: 0;
  display: inline-block;
  overflow: hidden;
  width: auto;
  height: 100%;
}
.ui.c-tab.left-bar > .tab-bar > .tabs > .tab-button,
.ui.c-tab.right-bar > .tab-bar > .tabs > .tab-button {
  float: none;
  height: 38px;
  line-height: 38px;
  display: block;
}
.ui.c-tab.left-bar > .contents,
.ui.c-tab.right-bar > .contents {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
}
.ui.c-tab.left-bar > .tab-bar {
  left: 0;
}
.ui.c-tab.left-bar > .tab-bar > .tabs > .tab-button.active,
.ui.c-tab.left-bar > .tab-bar > .tabs > .tab-button.active:hover {
  box-shadow: 2px 0 0 rgba(0, 0, 0, 0.4) inset;
}
.ui.c-tab.left-bar > .contents {
  left: 11.5em;
}
.ui.c-tab.right-bar {
  position: relative;
}
.ui.c-tab.right-bar > .tab-bar {
  right: 0;
}
.ui.c-tab.right-bar > .tab-bar > .tabs > .tab-button.active,
.ui.c-tab.right-bar > .tab-bar > .tabs > .tab-button.active:hover {
  box-shadow: -2px 0 0 rgba(0, 0, 0, 0.4) inset;
}
.ui.c-tab.right-bar > .contents {
  right: 11.5em;
}
.ui.c-tab.inverted {
  color: rgba(255, 255, 255, 0.9);
  background-color: #1b1c1d;
}
.ui.c-tab.inverted > .tab-bar {
  color: rgba(255, 255, 255, 0.9);
  background-color: rgba(255, 255, 255, 0.06);
}
.ui.c-tab.inverted > .tab-bar > .tabs > .tab-button.active,
.ui.c-tab.inverted > .tab-bar > .tabs > .tab-button.active:hover {
  box-shadow: none;
  color: inherit;
  background-color: #1b1c1d;
}
.ui.c-tab.inverted > .tab-bar > .tabs > .tab-button {
  color: rgba(255, 255, 255, 0.9);
}
.ui.c-tab.inverted > .tab-bar > .tabs > .tab-button:hover {
  background: rgba(34, 36, 38, 0.1);
  color: rgba(255, 255, 255, 0.9);
  box-shadow: none;
}
.ui.c-tab.inverted.red {
  background-color: #db2828;
}
.ui.c-tab.inverted.red > .tab-bar {
  background-color: rgba(34, 36, 38, 0.22);
}
.ui.c-tab.inverted.red > .tab-bar > .tabs > .tab-button.active {
  background-color: #db2828;
}
.ui.c-tab.inverted.red > .tab-bar > .tabs > .tab-button.active:hover {
  background-color: #db2828;
}
.ui.c-tab.inverted.orange {
  background-color: #f2711c;
}
.ui.c-tab.inverted.orange > .tab-bar {
  background-color: rgba(34, 36, 38, 0.22);
}
.ui.c-tab.inverted.orange > .tab-bar > .tabs > .tab-button.active {
  background-color: #f2711c;
}
.ui.c-tab.inverted.orange > .tab-bar > .tabs > .tab-button.active:hover {
  background-color: #f2711c;
}
.ui.c-tab.inverted.yellow {
  background-color: #fbbd08;
}
.ui.c-tab.inverted.yellow > .tab-bar {
  background-color: rgba(34, 36, 38, 0.22);
}
.ui.c-tab.inverted.yellow > .tab-bar > .tabs > .tab-button.active {
  background-color: #fbbd08;
}
.ui.c-tab.inverted.yellow > .tab-bar > .tabs > .tab-button.active:hover {
  background-color: #fbbd08;
}
.ui.c-tab.inverted.olive {
  background-color: #b5cc18;
}
.ui.c-tab.inverted.olive > .tab-bar {
  background-color: rgba(34, 36, 38, 0.22);
}
.ui.c-tab.inverted.olive > .tab-bar > .tabs > .tab-button.active {
  background-color: #b5cc18;
}
.ui.c-tab.inverted.olive > .tab-bar > .tabs > .tab-button.active:hover {
  background-color: #b5cc18;
}
.ui.c-tab.inverted.green {
  background-color: #21ba45;
}
.ui.c-tab.inverted.green > .tab-bar {
  background-color: rgba(34, 36, 38, 0.22);
}
.ui.c-tab.inverted.green > .tab-bar > .tabs > .tab-button.active {
  background-color: #21ba45;
}
.ui.c-tab.inverted.green > .tab-bar > .tabs > .tab-button.active:hover {
  background-color: #21ba45;
}
.ui.c-tab.inverted.teal {
  background-color: #00b5ad;
}
.ui.c-tab.inverted.teal > .tab-bar {
  background-color: rgba(34, 36, 38, 0.22);
}
.ui.c-tab.inverted.teal > .tab-bar > .tabs > .tab-button.active {
  background-color: #00b5ad;
}
.ui.c-tab.inverted.teal > .tab-bar > .tabs > .tab-button.active:hover {
  background-color: #00b5ad;
}
.ui.c-tab.inverted.blue {
  background-color: #2185d0;
}
.ui.c-tab.inverted.blue > .tab-bar {
  background-color: rgba(34, 36, 38, 0.22);
}
.ui.c-tab.inverted.blue > .tab-bar > .tabs > .tab-button.active {
  background-color: #2185d0;
}
.ui.c-tab.inverted.blue > .tab-bar > .tabs > .tab-button.active:hover {
  background-color: #2185d0;
}
.ui.c-tab.inverted.violet {
  background-color: #6435c9;
}
.ui.c-tab.inverted.violet > .tab-bar {
  background-color: rgba(34, 36, 38, 0.22);
}
.ui.c-tab.inverted.violet > .tab-bar > .tabs > .tab-button.active {
  background-color: #6435c9;
}
.ui.c-tab.inverted.violet > .tab-bar > .tabs > .tab-button.active:hover {
  background-color: #6435c9;
}
.ui.c-tab.inverted.purple {
  background-color: #a333c8;
}
.ui.c-tab.inverted.purple > .tab-bar {
  background-color: rgba(34, 36, 38, 0.22);
}
.ui.c-tab.inverted.purple > .tab-bar > .tabs > .tab-button.active {
  background-color: #a333c8;
}
.ui.c-tab.inverted.purple > .tab-bar > .tabs > .tab-button.active:hover {
  background-color: #a333c8;
}
.ui.c-tab.inverted.pink {
  background-color: #ff4081;
}
.ui.c-tab.inverted.pink > .tab-bar {
  background-color: rgba(34, 36, 38, 0.22);
}
.ui.c-tab.inverted.pink > .tab-bar > .tabs > .tab-button.active {
  background-color: #ff4081;
}
.ui.c-tab.inverted.pink > .tab-bar > .tabs > .tab-button.active:hover {
  background-color: #ff4081;
}
.ui.c-tab.inverted.brown {
  background-color: #a5673f;
}
.ui.c-tab.inverted.brown > .tab-bar {
  background-color: rgba(34, 36, 38, 0.22);
}
.ui.c-tab.inverted.brown > .tab-bar > .tabs > .tab-button.active {
  background-color: #a5673f;
}
.ui.c-tab.inverted.brown > .tab-bar > .tabs > .tab-button.active:hover {
  background-color: #a5673f;
}
.ui.c-tab.inverted.grey {
  background-color: #767676;
}
.ui.c-tab.inverted.grey > .tab-bar {
  background-color: rgba(34, 36, 38, 0.22);
}
.ui.c-tab.inverted.grey > .tab-bar > .tabs > .tab-button.active {
  background-color: #767676;
}
.ui.c-tab.inverted.grey > .tab-bar > .tabs > .tab-button.active:hover {
  background-color: #767676;
}
.ui.c-tab:not(.inverted) .tab-button.red {
  color: #db2828;
}
.ui.c-tab:not(.inverted) .tab-button.red.active,
.ui.c-tab:not(.inverted) .tab-button.red.active:hover {
  box-shadow: inset 0 2px 0 #db2828;
}
.ui.c-tab:not(.inverted) .tab-button.orange {
  color: #f2711c;
}
.ui.c-tab:not(.inverted) .tab-button.orange.active,
.ui.c-tab:not(.inverted) .tab-button.orange.active:hover {
  box-shadow: inset 0 2px 0 #f2711c;
}
.ui.c-tab:not(.inverted) .tab-button.yellow {
  color: #fbbd08;
}
.ui.c-tab:not(.inverted) .tab-button.yellow.active,
.ui.c-tab:not(.inverted) .tab-button.yellow.active:hover {
  box-shadow: inset 0 2px 0 #fbbd08;
}
.ui.c-tab:not(.inverted) .tab-button.olive {
  color: #b5cc18;
}
.ui.c-tab:not(.inverted) .tab-button.olive.active,
.ui.c-tab:not(.inverted) .tab-button.olive.active:hover {
  box-shadow: inset 0 2px 0 #b5cc18;
}
.ui.c-tab:not(.inverted) .tab-button.green {
  color: #21ba45;
}
.ui.c-tab:not(.inverted) .tab-button.green.active,
.ui.c-tab:not(.inverted) .tab-button.green.active:hover {
  box-shadow: inset 0 2px 0 #21ba45;
}
.ui.c-tab:not(.inverted) .tab-button.teal {
  color: #00b5ad;
}
.ui.c-tab:not(.inverted) .tab-button.teal.active,
.ui.c-tab:not(.inverted) .tab-button.teal.active:hover {
  box-shadow: inset 0 2px 0 #00b5ad;
}
.ui.c-tab:not(.inverted) .tab-button.blue {
  color: #2185d0;
}
.ui.c-tab:not(.inverted) .tab-button.blue.active,
.ui.c-tab:not(.inverted) .tab-button.blue.active:hover {
  box-shadow: inset 0 2px 0 #2185d0;
}
.ui.c-tab:not(.inverted) .tab-button.violet {
  color: #6435c9;
}
.ui.c-tab:not(.inverted) .tab-button.violet.active,
.ui.c-tab:not(.inverted) .tab-button.violet.active:hover {
  box-shadow: inset 0 2px 0 #6435c9;
}
.ui.c-tab:not(.inverted) .tab-button.purple {
  color: #a333c8;
}
.ui.c-tab:not(.inverted) .tab-button.purple.active,
.ui.c-tab:not(.inverted) .tab-button.purple.active:hover {
  box-shadow: inset 0 2px 0 #a333c8;
}
.ui.c-tab:not(.inverted) .tab-button.pink {
  color: #ff4081;
}
.ui.c-tab:not(.inverted) .tab-button.pink.active,
.ui.c-tab:not(.inverted) .tab-button.pink.active:hover {
  box-shadow: inset 0 2px 0 #ff4081;
}
.ui.c-tab:not(.inverted) .tab-button.brown {
  color: #a5673f;
}
.ui.c-tab:not(.inverted) .tab-button.brown.active,
.ui.c-tab:not(.inverted) .tab-button.brown.active:hover {
  box-shadow: inset 0 2px 0 #a5673f;
}
.ui.c-tab:not(.inverted) .tab-button.grey {
  color: #767676;
}
.ui.c-tab:not(.inverted) .tab-button.grey.active,
.ui.c-tab:not(.inverted) .tab-button.grey.active:hover {
  box-shadow: inset 0 2px 0 #767676;
}
@media only screen and (max-width: 468px) {
  .ui.c-tab > .tab-bar {
    text-align: center;
  }
}
.ui.c-tab.pad.top-bar > .tab-bar,
.ui.c-tab.pad.bottom-bar > .tab-bar {
  height: 5.25rem;
}
.ui.c-tab.pad > .tab-bar > .tabs > .tab-button {
  display: block;
  background-color: rgba(34, 36, 38, 0.07);
  text-align: center;
}
.ui.c-tab.pad > .tab-bar > .tabs > .tab-button > .caption {
  line-height: inherit;
  margin: 0 8px;
  min-width: 6.25em;
}
.ui.c-tab.pad > .tab-bar > .tabs > .tab-button > .caption > span {
  margin: 0;
  line-height: 5.25rem;
  float: none;
  width: 100%;
}
.ui.c-tab.pad > .tab-bar > .tabs > .tab-button > .caption > i + span {
  line-height: 1em !important;
  margin-top: 0.5rem;
}
.ui.c-tab.pad > .tab-bar > .tabs > .tab-button > .caption > i {
  margin: 0.75rem 0 0.75rem 0;
  width: 100%;
  font-size: 2em;
  line-height: initial;
}
.ui.c-tab.pad > .tab-bar > .tabs > .tab-button > .close-btn {
  line-height: inherit;
  height: 100%;
  margin: 0;
}
.ui.c-tab.pad > .tab-bar > .tabs > .tab-button > .close-btn i {
  margin: 0;
}
.ui.c-tab.pad > .tab-bar > .tabs > .tab-button:hover {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.c-tab.pad > .tab-bar > .tabs > .tab-button.active,
.ui.c-tab.pad > .tab-bar > .tabs > .tab-button.active:hover {
  background-color: #ffffff;
}
.ui.c-tab.pad.top-bar > .tab-bar > .tabs,
.ui.c-tab.pad.bottom-bar > .tab-bar > .tabs {
  line-height: 5.25rem;
}
.ui.c-tab.pad.top-bar > .tab-bar > .tabs > .tab-button,
.ui.c-tab.pad.bottom-bar > .tab-bar > .tabs > .tab-button {
  position: relative;
  float: left;
  line-height: 5.25rem;
  height: 5.25rem;
  margin-left: 1px;
  padding: 0;
}
.ui.c-tab.pad.top-bar > .tab-bar > .tabs > .tab-button > .caption,
.ui.c-tab.pad.bottom-bar > .tab-bar > .tabs > .tab-button > .caption {
  margin: 0 8px;
}
.ui.c-tab.pad.top-bar > .tab-bar > .tabs > .tab-button > .caption > span,
.ui.c-tab.pad.bottom-bar > .tab-bar > .tabs > .tab-button > .caption > span {
  line-height: 5.25rem;
}
.ui.c-tab.pad.top-bar > .tab-bar > .tabs > .tab-button > .close-btn,
.ui.c-tab.pad.bottom-bar > .tab-bar > .tabs > .tab-button > .close-btn {
  top: 0;
  right: 0;
  position: absolute;
  line-height: 16px;
  height: 16px;
}
.ui.c-tab.pad.top-bar > .tab-bar > .tabs > .tab-button > .close-btn:hover,
.ui.c-tab.pad.bottom-bar > .tab-bar > .tabs > .tab-button > .close-btn:hover {
  background-color: rgba(60, 63, 65, 0.22);
}
.ui.c-tab.pad.top-bar > .contents {
  top: 5.25rem;
}
.ui.c-tab.pad.bottom-bar > .contents {
  bottom: 5.25rem;
}
.ui.c-tab.pad.left-bar > .tab-bar > .tabs > .tab-button,
.ui.c-tab.pad.right-bar > .tab-bar > .tabs > .tab-button {
  float: none;
  line-height: 5.25rem;
  height: 5.25rem;
  padding: 0 4px 0 0;
  margin-top: 1px;
}
.ui.c-tab.pad.left-bar > .tab-bar > .tabs > .tab-button > .caption,
.ui.c-tab.pad.right-bar > .tab-bar > .tabs > .tab-button > .caption {
  margin-left: 8px;
  float: right;
}
.ui.c-tab.pad.left-bar > .tab-bar > .tabs > .tab-button > .caption > span,
.ui.c-tab.pad.right-bar > .tab-bar > .tabs > .tab-button > .caption > span {
  line-height: 5.25rem;
}
.ui.c-tab.pad.left-bar > .tab-bar > .tabs > .tab-button > .close-btn,
.ui.c-tab.pad.right-bar > .tab-bar > .tabs > .tab-button > .close-btn {
  background-color: rgba(60, 63, 65, 0.43);
  line-height: inherit;
  height: 100%;
}
.ui.c-tab.pad.left-bar > .contents {
  left: 9em;
}
.ui.c-tab.pad.right-bar > .contents {
  right: 9em;
}
.ui.c-tab.pad.inverted {
  background-color: #1b1c1d;
  color: rgba(255, 255, 255, 0.9);
}
.ui.c-tab.pad.inverted > .tab-bar {
  color: rgba(255, 255, 255, 0.9);
  background-color: rgba(255, 255, 255, 0.06);
}
.ui.c-tab.pad.inverted > .tab-bar > .tabs > .tab-button {
  background-color: rgba(255, 255, 255, 0.06);
}
.ui.c-tab.pad.inverted > .tab-bar > .tabs > .tab-button.active,
.ui.c-tab.pad.inverted > .tab-bar > .tabs > .tab-button.active:hover {
  background-color: #1b1c1d;
}
.ui.c-tab.pad.inverted > .tab-bar > .tabs > .tab-button:hover {
  background-color: rgba(255, 255, 255, 0.01);
}
.ui.c-tab.pad.inverted.red {
  background-color: #db2828;
}
.ui.c-tab.pad.inverted.red > .tab-bar {
  background-color: rgba(34, 36, 38, 0.15);
}
.ui.c-tab.pad.inverted.red > .tab-bar > .tabs > .tab-button {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.c-tab.pad.inverted.red > .tab-bar > .tabs > .tab-button.active {
  background-color: #db2828;
}
.ui.c-tab.pad.inverted.orange {
  background-color: #f2711c;
}
.ui.c-tab.pad.inverted.orange > .tab-bar {
  background-color: rgba(34, 36, 38, 0.15);
}
.ui.c-tab.pad.inverted.orange > .tab-bar > .tabs > .tab-button {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.c-tab.pad.inverted.orange > .tab-bar > .tabs > .tab-button.active {
  background-color: #f2711c;
}
.ui.c-tab.pad.inverted.yellow {
  background-color: #fbbd08;
}
.ui.c-tab.pad.inverted.yellow > .tab-bar {
  background-color: rgba(34, 36, 38, 0.15);
}
.ui.c-tab.pad.inverted.yellow > .tab-bar > .tabs > .tab-button {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.c-tab.pad.inverted.yellow > .tab-bar > .tabs > .tab-button.active {
  background-color: #fbbd08;
}
.ui.c-tab.pad.inverted.olive {
  background-color: #b5cc18;
}
.ui.c-tab.pad.inverted.olive > .tab-bar {
  background-color: rgba(34, 36, 38, 0.15);
}
.ui.c-tab.pad.inverted.olive > .tab-bar > .tabs > .tab-button {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.c-tab.pad.inverted.olive > .tab-bar > .tabs > .tab-button.active {
  background-color: #b5cc18;
}
.ui.c-tab.pad.inverted.green {
  background-color: #21ba45;
}
.ui.c-tab.pad.inverted.green > .tab-bar {
  background-color: rgba(34, 36, 38, 0.15);
}
.ui.c-tab.pad.inverted.green > .tab-bar > .tabs > .tab-button {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.c-tab.pad.inverted.green > .tab-bar > .tabs > .tab-button.active {
  background-color: #21ba45;
}
.ui.c-tab.pad.inverted.teal {
  background-color: #00b5ad;
}
.ui.c-tab.pad.inverted.teal > .tab-bar {
  background-color: rgba(34, 36, 38, 0.15);
}
.ui.c-tab.pad.inverted.teal > .tab-bar > .tabs > .tab-button {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.c-tab.pad.inverted.teal > .tab-bar > .tabs > .tab-button.active {
  background-color: #00b5ad;
}
.ui.c-tab.pad.inverted.blue {
  background-color: #2185d0;
}
.ui.c-tab.pad.inverted.blue > .tab-bar {
  background-color: rgba(34, 36, 38, 0.15);
}
.ui.c-tab.pad.inverted.blue > .tab-bar > .tabs > .tab-button {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.c-tab.pad.inverted.blue > .tab-bar > .tabs > .tab-button.active {
  background-color: #2185d0;
}
.ui.c-tab.pad.inverted.violet {
  background-color: #6435c9;
}
.ui.c-tab.pad.inverted.violet > .tab-bar {
  background-color: rgba(34, 36, 38, 0.15);
}
.ui.c-tab.pad.inverted.violet > .tab-bar > .tabs > .tab-button {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.c-tab.pad.inverted.violet > .tab-bar > .tabs > .tab-button.active {
  background-color: #6435c9;
}
.ui.c-tab.pad.inverted.purple {
  background-color: #a333c8;
}
.ui.c-tab.pad.inverted.purple > .tab-bar {
  background-color: rgba(34, 36, 38, 0.15);
}
.ui.c-tab.pad.inverted.purple > .tab-bar > .tabs > .tab-button {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.c-tab.pad.inverted.purple > .tab-bar > .tabs > .tab-button.active {
  background-color: #a333c8;
}
.ui.c-tab.pad.inverted.pink {
  background-color: #ff4081;
}
.ui.c-tab.pad.inverted.pink > .tab-bar {
  background-color: rgba(34, 36, 38, 0.15);
}
.ui.c-tab.pad.inverted.pink > .tab-bar > .tabs > .tab-button {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.c-tab.pad.inverted.pink > .tab-bar > .tabs > .tab-button.active {
  background-color: #ff4081;
}
.ui.c-tab.pad.inverted.brown {
  background-color: #a5673f;
}
.ui.c-tab.pad.inverted.brown > .tab-bar {
  background-color: rgba(34, 36, 38, 0.15);
}
.ui.c-tab.pad.inverted.brown > .tab-bar > .tabs > .tab-button {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.c-tab.pad.inverted.brown > .tab-bar > .tabs > .tab-button.active {
  background-color: #a5673f;
}
.ui.c-tab.pad.inverted.grey {
  background-color: #767676;
}
.ui.c-tab.pad.inverted.grey > .tab-bar {
  background-color: rgba(34, 36, 38, 0.15);
}
.ui.c-tab.pad.inverted.grey > .tab-bar > .tabs > .tab-button {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.c-tab.pad.inverted.grey > .tab-bar > .tabs > .tab-button.active {
  background-color: #767676;
}

.ui.menu .leftContent {
  display: none;
}
.ui.title-bar {
  position: relative;
  border-radius: 0 !important;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  box-shadow: none;
}
.ui.title-bar .title {
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-box-orient: horizontal;
  position: absolute;
  display: -webkit-box;
  display: -moz-box;
  width: 100%;
  padding: 0;
  margin: 0 2px;
  font-weight: bold;
  color: inherit;
  text-align: center;
  white-space: nowrap;
  left: 0;
  bottom: 0;
  top: 0;
}
.ui.title-bar .title a {
  color: inherit;
}
.ui.title-bar.bottom {
  border-top-width: 1px;
  border-bottom-width: 0;
}
.ui.title-bar.shadow {
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  z-index: 1;
}

.multi-slot-picker {
  background-color: #fff;
  z-index: 9999999;
  padding-top: 20px;
  color: #333333;
  overflow: hidden;
}
.multi-slot-picker > .body {
  width: 100%;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-box-orient: horizontal;
}
.multi-slot-picker > .body > .slot-picker {
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  margin-left: 20px;
  flex: 0 1 auto;
}
.multi-slot-picker > .body > .slot-picker > .unit {
  text-align: center;
  color: #333333;
}
.multi-slot-picker > .body > .slot-picker > .slot {
  position: relative;
}
.multi-slot-picker > .body > .slot-picker > .slot > .mask {
  z-index: 3;
  position: absolute;
  left: 1px;
  top: 0;
  right: 1px;
  height: 100%;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  pointer-events: none;
  overflow: hidden;
}
.multi-slot-picker > .body > .slot-picker > .slot > .mask > .bar {
  height: 60px;
  border: #00b5ad solid 1px;
  border-left-width: 0;
  border-right-width: 0;
}
.multi-slot-picker > .body > .slot-picker > .slot > .list {
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-align: stretch;
  -moz-box-align: stretch;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  height: 180px;
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
  width: 62px;
}
.multi-slot-picker > .body > .slot-picker > .slot > .list > .items-wrap {
  overflow: hidden;
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 62px;
  font-size: 1.25em;
}
.multi-slot-picker > .body > .slot-picker > .slot > .list > .items-wrap > .slot-item {
  height: 60px;
  line-height: 60px;
  text-align: center;
  vertical-align: middle;
}
.multi-slot-picker > .body > .slot-picker > .slot > .list > .items-wrap > .dummy-item {
  height: 60px;
}
.multi-slot-picker > .body > .slot-picker:first-child {
  margin-left: 0;
}
.multi-slot-picker > .ui.attached.buttons.actions {
  display: block;
  margin-top: 20px !important;
}
.ui.layer.date-timer {
  position: fixed;
  z-index: 1001;
}
.ui.layer.date-timer > .actions {
  display: block;
}

.calendar {
  overflow: hidden;
  position: relative;
}
.calendar table {
  width: 100%;
}
.calendar .header {
  height: 2.25em;
  padding: 0.25em 2.5em;
}
.calendar .header .button {
  display: inline-block;
  float: left;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.5em;
  text-align: center;
  color: #00b5ad;
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25em;
}
.calendar .header .button.next {
  float: right;
}
.calendar .header .button.prev:before {
  font-family: Icons;
  content: "\f104";
}
.calendar .header .button.next:before {
  font-family: Icons;
  content: "\f105";
}
.calendar .header .label {
  margin: 0 1.5em;
  text-align: center;
  line-height: 1.5em;
  cursor: pointer;
  font-size: 1.25em;
  color: #454545;
}
.calendar .header .year,
.calendar .header .month {
  display: inline-block;
  width: 50%;
}
.calendar .date-header {
  height: 1.5em;
  border-bottom: 1px solid #00b5ad;
}
.calendar .date-header td {
  text-align: center;
}
.calendar .popup-wrapper {
  position: absolute;
  top: 36px;
  left: 0;
  right: 0;
  bottom: 0;
}
.calendar .date-table-wrapper {
  position: relative;
  min-height: 200px;
  min-width: 300px;
}
.calendar .date-table-wrapper .ui.stack {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0px;
  bottom: 0px;
}
.calendar .date-table-wrapper .date-table {
  height: 236px;
  float: left;
}
.calendar .date-table-wrapper .date-table.hidden {
  display: none;
}
.calendar .date-table-wrapper .date-table td {
  text-align: center;
  padding: 0.5em 0;
}
.calendar .date-table-wrapper .date-table td.has-event {
  padding-bottom: 2px;
}
.calendar .date-table-wrapper .date-table td.has-event:after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  position: relative;
  left: 50%;
  top: 2px;
  margin-left: -3px;
  border-radius: 3px;
  background: #ccc;
}
.calendar .date-table-wrapper .date-table td.next-month,
.calendar .date-table-wrapper .date-table td.prev-month {
  opacity: 0.4;
}
.calendar .date-table-wrapper .date-table td div.label {
  display: inline-block;
  width: 1.75em;
  height: 1.75em;
  padding: 1px;
  line-height: 1.75em;
  cursor: pointer;
}
.calendar .date-table-wrapper .date-table td.selected div.label {
  padding: 0;
  background: #00b5ad;
  color: #FFF;
  border-radius: 50%;
}
.calendar.red .header .button {
  color: #db2828;
}
.calendar.red .date-header {
  border-bottom: 1px solid #db2828;
}
.calendar.red .date-table-wrapper .date-table td.selected div.label {
  background: #db2828;
}
.calendar.orange .header .button {
  color: #f2711c;
}
.calendar.orange .date-header {
  border-bottom: 1px solid #f2711c;
}
.calendar.orange .date-table-wrapper .date-table td.selected div.label {
  background: #f2711c;
}
.calendar.yellow .header .button {
  color: #fbbd08;
}
.calendar.yellow .date-header {
  border-bottom: 1px solid #fbbd08;
}
.calendar.yellow .date-table-wrapper .date-table td.selected div.label {
  background: #fbbd08;
}
.calendar.olive .header .button {
  color: #b5cc18;
}
.calendar.olive .date-header {
  border-bottom: 1px solid #b5cc18;
}
.calendar.olive .date-table-wrapper .date-table td.selected div.label {
  background: #b5cc18;
}
.calendar.green .header .button {
  color: #21ba45;
}
.calendar.green .date-header {
  border-bottom: 1px solid #21ba45;
}
.calendar.green .date-table-wrapper .date-table td.selected div.label {
  background: #21ba45;
}
.calendar.teal .header .button {
  color: #00b5ad;
}
.calendar.teal .date-header {
  border-bottom: 1px solid #00b5ad;
}
.calendar.teal .date-table-wrapper .date-table td.selected div.label {
  background: #00b5ad;
}
.calendar.blue .header .button {
  color: #2185d0;
}
.calendar.blue .date-header {
  border-bottom: 1px solid #2185d0;
}
.calendar.blue .date-table-wrapper .date-table td.selected div.label {
  background: #2185d0;
}
.calendar.violet .header .button {
  color: #6435c9;
}
.calendar.violet .date-header {
  border-bottom: 1px solid #6435c9;
}
.calendar.violet .date-table-wrapper .date-table td.selected div.label {
  background: #6435c9;
}
.calendar.purple .header .button {
  color: #a333c8;
}
.calendar.purple .date-header {
  border-bottom: 1px solid #a333c8;
}
.calendar.purple .date-table-wrapper .date-table td.selected div.label {
  background: #a333c8;
}
.calendar.pink .header .button {
  color: #ff4081;
}
.calendar.pink .date-header {
  border-bottom: 1px solid #ff4081;
}
.calendar.pink .date-table-wrapper .date-table td.selected div.label {
  background: #ff4081;
}
.calendar.brown .header .button {
  color: #a5673f;
}
.calendar.brown .date-header {
  border-bottom: 1px solid #a5673f;
}
.calendar.brown .date-table-wrapper .date-table td.selected div.label {
  background: #a5673f;
}
.calendar.grey .header .button {
  color: #767676;
}
.calendar.grey .date-header {
  border-bottom: 1px solid #767676;
}
.calendar.grey .date-table-wrapper .date-table td.selected div.label {
  background: #767676;
}
.calendar.inverted {
  background-color: #1b1c1d;
  color: rgba(255, 255, 255, 0.9);
}
.calendar.inverted .header .button {
  color: rgba(255, 255, 255, 0.9);
}
.calendar.inverted .header .label {
  color: rgba(255, 255, 255, 0.9);
}
.calendar.inverted .date-header {
  border: none;
}
.calendar.inverted > .header,
.calendar.inverted > .date-header {
  background-color: rgba(255, 255, 255, 0.1);
}
.calendar.inverted .date-table-wrapper .date-table td.selected div.label {
  background: #fff;
  color: #1b1c1d;
}
.calendar.inverted.red {
  background-color: #db2828;
}
.calendar.inverted.red .date-table-wrapper .date-table td.selected div.label {
  color: #db2828;
}
.calendar.inverted.orange {
  background-color: #f2711c;
}
.calendar.inverted.orange .date-table-wrapper .date-table td.selected div.label {
  color: #f2711c;
}
.calendar.inverted.yellow {
  background-color: #fbbd08;
}
.calendar.inverted.yellow .date-table-wrapper .date-table td.selected div.label {
  color: #fbbd08;
}
.calendar.inverted.olive {
  background-color: #b5cc18;
}
.calendar.inverted.olive .date-table-wrapper .date-table td.selected div.label {
  color: #b5cc18;
}
.calendar.inverted.green {
  background-color: #21ba45;
}
.calendar.inverted.green .date-table-wrapper .date-table td.selected div.label {
  color: #21ba45;
}
.calendar.inverted.teal {
  background-color: #00b5ad;
}
.calendar.inverted.teal .date-table-wrapper .date-table td.selected div.label {
  color: #00b5ad;
}
.calendar.inverted.blue {
  background-color: #2185d0;
}
.calendar.inverted.blue .date-table-wrapper .date-table td.selected div.label {
  color: #2185d0;
}
.calendar.inverted.violet {
  background-color: #6435c9;
}
.calendar.inverted.violet .date-table-wrapper .date-table td.selected div.label {
  color: #6435c9;
}
.calendar.inverted.purple {
  background-color: #a333c8;
}
.calendar.inverted.purple .date-table-wrapper .date-table td.selected div.label {
  color: #a333c8;
}
.calendar.inverted.pink {
  background-color: #ff4081;
}
.calendar.inverted.pink .date-table-wrapper .date-table td.selected div.label {
  color: #ff4081;
}
.calendar.inverted.brown {
  background-color: #a5673f;
}
.calendar.inverted.brown .date-table-wrapper .date-table td.selected div.label {
  color: #a5673f;
}
.calendar.inverted.grey {
  background-color: #767676;
}
.calendar.inverted.grey .date-table-wrapper .date-table td.selected div.label {
  color: #767676;
}

.ui.stack {
  height: 100%;
}
.ui.stack .items-wrap {
  position: relative;
  height: 100%;
  overflow: hidden;
  width: 100%;
}
.ui.stack .items-wrap .item {
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  display: none;
}
html.ios {
  height: 100% !important;
}
html.ios body {
  height: 100% !important;
}

.ui.grouped .radio,
.ui.grouped .slider,
.ui.grouped .toggle {
  padding: 0 0.5em;
}

.ui.sidebar {
  display: none;
}
.ui.sidebar.visible {
  display: block !important;
}
.ui.sidebar.animation {
  display: block !important;
}

.ui.menu.pager .goto.ui.input {
  width: 6.25em;
}
.ui.menu.pager .goto.ui.input > input {
  width: 3em;
  padding-left: 0.5em;
  padding-right: 0.5em;
}
.ui.menu.pager .goto.ui.input .ui.button {
  padding-left: 0.8em;
  padding-right: 0.8em;
}
.ui.menu.pager .item.disabled:hover {
  color: rgba(40, 40, 40, 0.3);
}

@-webkit-keyframes breathe {
  0% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
}
.ui.time-line > .items {
  list-style: none;
  padding: 0;
}
.ui.time-line > .items > .item {
  position: relative;
  padding: 0 !important;
}
.ui.time-line > .items > .item:before {
  position: absolute;
  border: 1px solid #e0e0e0;
  left: 8em;
  top: 2em;
  bottom: 0;
  content: "";
}
.ui.time-line > .items > .item .label {
  position: absolute;
  top: 0.3em;
  width: 8em;
  display: inline-block;
  text-align: right;
  padding: 0 2em 0 0;
}
.ui.time-line > .items > .item .content {
  margin-left: 10em;
  padding-bottom: 1em;
}
.ui.time-line > .items > .item .content p {
  color: rgba(103, 106, 108, 0.7);
  padding: 0.4em 0;
}
.ui.time-line > .items > .item > .icon {
  position: absolute;
  left: 7em;
  top: 0;
  display: inline-block;
  width: 2em;
  height: 2em;
  text-align: center;
  color: #18a689;
  border: 2.5px solid #e0e0e0;
}
.ui.time-line > .items > .item > .icon > .icon {
  line-height: 1.8em;
  margin: 0;
}
.ui.time-line > .items > .item:hover > .icon > i {
  animation-timing-function: ease-in-out;
  animation-name: breathe;
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.ui.time-line > .items > .item:hover > .icon,
.ui.time-line > .items > .item:hover:before {
  border-color: rgba(24, 166, 137, 0.6);
}
.ui.time-line.circular > .items > .item > .icon {
  border-radius: 50%;
}
.ui.time-line.log > .items > .item:before,
.ui.time-line.log > .items > .item > .icon {
  border-color: rgba(29, 202, 166, 0.7);
}
.ui.time-line.log > .items > .item .icon {
  color: #18a689;
}
.ui.time-line.log > .items > .item > .content {
  position: relative;
  padding: 0.8em 1em;
  color: rgba(255, 255, 255, 0.95);
}
.ui.time-line.log > .items > .item > .content strong {
  display: block;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  line-height: 2em;
}
.ui.time-line.log > .items > .item > .content p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85em;
  padding: 1em 0;
}
.ui.time-line.log > .items > .item > .content:after {
  position: absolute;
  left: 0;
  top: 0.2em;
  right: 0;
  content: "";
  bottom: 0.2em;
  z-index: -1;
  border-radius: 0.2em;
}
.ui.time-line.log > .items > .item > .content:before {
  width: 0;
  height: 0;
  position: absolute;
  left: -0.35em;
  content: "";
  top: 1em;
  border-top: 0.4em solid transparent;
  border-right: 0.4em solid transparent;
  border-bottom: 0.4em solid transparent;
}
.ui.time-line.log > .items > .item > .label {
  top: 0.1em;
}
.ui.time-line.log > .items > .item > .label > * {
  display: list-item;
}
.ui.time-line.log > .items > .item > .label > .date {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.8em;
}
.ui.time-line.log > .items > .item > .label > .date-time {
  font-size: 1.4em;
  color: #1ab394;
}
.ui.time-line.log > .items > .item:nth-of-type(even) > .content {
  position: relative;
}
.ui.time-line.log > .items > .item:nth-of-type(even) > .content:after {
  background-color: #1ab394;
}
.ui.time-line.log > .items > .item:nth-of-type(even) > .content:before {
  border-right-color: #1ab394;
}
.ui.time-line.log > .items > .item:nth-of-type(odd) > .content:after {
  background-color: #1dcaa6;
}
.ui.time-line.log > .items > .item:nth-of-type(odd) > .content:before {
  border-right-color: #1dcaa6;
}
.ui.time-line.log > .items > .item:hover > .icon,
.ui.time-line.log > .items > .item:hover:before {
  border-color: #1ab394;
}
.ui.time-line.log.red > .items > .item:before,
.ui.time-line.log.red > .items > .item > .icon {
  border-color: rgba(225, 75, 75, 0.7);
}
.ui.time-line.log.red > .items > .item .icon {
  color: #db2828;
}
.ui.time-line.log.red > .items > .item > .label > .date-time {
  color: #dd3535;
}
.ui.time-line.log.red > .items > .item:nth-of-type(even) > .content:after {
  background-color: #dd3535;
}
.ui.time-line.log.red > .items > .item:nth-of-type(even) > .content:before {
  border-right-color: #dd3535;
}
.ui.time-line.log.red > .items > .item:nth-of-type(odd) > .content:after {
  background-color: #e14b4b;
}
.ui.time-line.log.red > .items > .item:nth-of-type(odd) > .content:before {
  border-right-color: #e14b4b;
}
.ui.time-line.log.red > .items > .item:hover > .icon,
.ui.time-line.log.red > .items > .item:hover:before {
  border-color: #dd3535;
}
.ui.time-line.log.orange > .items > .item:before,
.ui.time-line.log.orange > .items > .item > .icon {
  border-color: rgba(244, 137, 67, 0.7);
}
.ui.time-line.log.orange > .items > .item .icon {
  color: #f2711c;
}
.ui.time-line.log.orange > .items > .item > .label > .date-time {
  color: #f37a2a;
}
.ui.time-line.log.orange > .items > .item:nth-of-type(even) > .content:after {
  background-color: #f37a2a;
}
.ui.time-line.log.orange > .items > .item:nth-of-type(even) > .content:before {
  border-right-color: #f37a2a;
}
.ui.time-line.log.orange > .items > .item:nth-of-type(odd) > .content:after {
  background-color: #f48943;
}
.ui.time-line.log.orange > .items > .item:nth-of-type(odd) > .content:before {
  border-right-color: #f48943;
}
.ui.time-line.log.orange > .items > .item:hover > .icon,
.ui.time-line.log.orange > .items > .item:hover:before {
  border-color: #f37a2a;
}
.ui.time-line.log.yellow > .items > .item:before,
.ui.time-line.log.yellow > .items > .item > .icon {
  border-color: rgba(252, 200, 48, 0.7);
}
.ui.time-line.log.yellow > .items > .item .icon {
  color: #fbbd08;
}
.ui.time-line.log.yellow > .items > .item > .label > .date-time {
  color: #fbc117;
}
.ui.time-line.log.yellow > .items > .item:nth-of-type(even) > .content:after {
  background-color: #fbc117;
}
.ui.time-line.log.yellow > .items > .item:nth-of-type(even) > .content:before {
  border-right-color: #fbc117;
}
.ui.time-line.log.yellow > .items > .item:nth-of-type(odd) > .content:after {
  background-color: #fcc830;
}
.ui.time-line.log.yellow > .items > .item:nth-of-type(odd) > .content:before {
  border-right-color: #fcc830;
}
.ui.time-line.log.yellow > .items > .item:hover > .icon,
.ui.time-line.log.yellow > .items > .item:hover:before {
  border-color: #fbc117;
}
.ui.time-line.log.olive > .items > .item:before,
.ui.time-line.log.olive > .items > .item > .icon {
  border-color: rgba(205, 230, 39, 0.7);
}
.ui.time-line.log.olive > .items > .item .icon {
  color: #b5cc18;
}
.ui.time-line.log.olive > .items > .item > .label > .date-time {
  color: #c1da1a;
}
.ui.time-line.log.olive > .items > .item:nth-of-type(even) > .content:after {
  background-color: #c1da1a;
}
.ui.time-line.log.olive > .items > .item:nth-of-type(even) > .content:before {
  border-right-color: #c1da1a;
}
.ui.time-line.log.olive > .items > .item:nth-of-type(odd) > .content:after {
  background-color: #cde627;
}
.ui.time-line.log.olive > .items > .item:nth-of-type(odd) > .content:before {
  border-right-color: #cde627;
}
.ui.time-line.log.olive > .items > .item:hover > .icon,
.ui.time-line.log.olive > .items > .item:hover:before {
  border-color: #c1da1a;
}
.ui.time-line.log.green > .items > .item:before,
.ui.time-line.log.green > .items > .item > .icon {
  border-color: rgba(43, 217, 84, 0.7);
}
.ui.time-line.log.green > .items > .item .icon {
  color: #21ba45;
}
.ui.time-line.log.green > .items > .item > .label > .date-time {
  color: #23c74a;
}
.ui.time-line.log.green > .items > .item:nth-of-type(even) > .content:after {
  background-color: #23c74a;
}
.ui.time-line.log.green > .items > .item:nth-of-type(even) > .content:before {
  border-right-color: #23c74a;
}
.ui.time-line.log.green > .items > .item:nth-of-type(odd) > .content:after {
  background-color: #2bd954;
}
.ui.time-line.log.green > .items > .item:nth-of-type(odd) > .content:before {
  border-right-color: #2bd954;
}
.ui.time-line.log.green > .items > .item:hover > .icon,
.ui.time-line.log.green > .items > .item:hover:before {
  border-color: #23c74a;
}
.ui.time-line.log.teal > .items > .item:before,
.ui.time-line.log.teal > .items > .item > .icon {
  border-color: rgba(0, 222, 212, 0.7);
}
.ui.time-line.log.teal > .items > .item .icon {
  color: #00b5ad;
}
.ui.time-line.log.teal > .items > .item > .label > .date-time {
  color: #00c4bc;
}
.ui.time-line.log.teal > .items > .item:nth-of-type(even) > .content:after {
  background-color: #00c4bc;
}
.ui.time-line.log.teal > .items > .item:nth-of-type(even) > .content:before {
  border-right-color: #00c4bc;
}
.ui.time-line.log.teal > .items > .item:nth-of-type(odd) > .content:after {
  background-color: #00ded4;
}
.ui.time-line.log.teal > .items > .item:nth-of-type(odd) > .content:before {
  border-right-color: #00ded4;
}
.ui.time-line.log.teal > .items > .item:hover > .icon,
.ui.time-line.log.teal > .items > .item:hover:before {
  border-color: #00c4bc;
}
.ui.time-line.log.blue > .items > .item:before,
.ui.time-line.log.blue > .items > .item > .icon {
  border-color: rgba(58, 153, 224, 0.7);
}
.ui.time-line.log.blue > .items > .item .icon {
  color: #2185d0;
}
.ui.time-line.log.blue > .items > .item > .label > .date-time {
  color: #248ddc;
}
.ui.time-line.log.blue > .items > .item:nth-of-type(even) > .content:after {
  background-color: #248ddc;
}
.ui.time-line.log.blue > .items > .item:nth-of-type(even) > .content:before {
  border-right-color: #248ddc;
}
.ui.time-line.log.blue > .items > .item:nth-of-type(odd) > .content:after {
  background-color: #3a99e0;
}
.ui.time-line.log.blue > .items > .item:nth-of-type(odd) > .content:before {
  border-right-color: #3a99e0;
}
.ui.time-line.log.blue > .items > .item:hover > .icon,
.ui.time-line.log.blue > .items > .item:hover:before {
  border-color: #248ddc;
}
.ui.time-line.log.violet > .items > .item:before,
.ui.time-line.log.violet > .items > .item > .icon {
  border-color: rgba(125, 85, 210, 0.7);
}
.ui.time-line.log.violet > .items > .item .icon {
  color: #6435c9;
}
.ui.time-line.log.violet > .items > .item > .label > .date-time {
  color: #6d41cd;
}
.ui.time-line.log.violet > .items > .item:nth-of-type(even) > .content:after {
  background-color: #6d41cd;
}
.ui.time-line.log.violet > .items > .item:nth-of-type(even) > .content:before {
  border-right-color: #6d41cd;
}
.ui.time-line.log.violet > .items > .item:nth-of-type(odd) > .content:after {
  background-color: #7d55d2;
}
.ui.time-line.log.violet > .items > .item:nth-of-type(odd) > .content:before {
  border-right-color: #7d55d2;
}
.ui.time-line.log.violet > .items > .item:hover > .icon,
.ui.time-line.log.violet > .items > .item:hover:before {
  border-color: #6d41cd;
}
.ui.time-line.log.purple > .items > .item:before,
.ui.time-line.log.purple > .items > .item > .icon {
  border-color: rgba(178, 81, 211, 0.7);
}
.ui.time-line.log.purple > .items > .item .icon {
  color: #a333c8;
}
.ui.time-line.log.purple > .items > .item > .label > .date-time {
  color: #aa3dcd;
}
.ui.time-line.log.purple > .items > .item:nth-of-type(even) > .content:after {
  background-color: #aa3dcd;
}
.ui.time-line.log.purple > .items > .item:nth-of-type(even) > .content:before {
  border-right-color: #aa3dcd;
}
.ui.time-line.log.purple > .items > .item:nth-of-type(odd) > .content:after {
  background-color: #b251d3;
}
.ui.time-line.log.purple > .items > .item:nth-of-type(odd) > .content:before {
  border-right-color: #b251d3;
}
.ui.time-line.log.purple > .items > .item:hover > .icon,
.ui.time-line.log.purple > .items > .item:hover:before {
  border-color: #aa3dcd;
}
.ui.time-line.log.pink > .items > .item:before,
.ui.time-line.log.pink > .items > .item > .icon {
  border-color: rgba(255, 105, 156, 0.7);
}
.ui.time-line.log.pink > .items > .item .icon {
  color: #ff4081;
}
.ui.time-line.log.pink > .items > .item > .label > .date-time {
  color: #ff4f8b;
}
.ui.time-line.log.pink > .items > .item:nth-of-type(even) > .content:after {
  background-color: #ff4f8b;
}
.ui.time-line.log.pink > .items > .item:nth-of-type(even) > .content:before {
  border-right-color: #ff4f8b;
}
.ui.time-line.log.pink > .items > .item:nth-of-type(odd) > .content:after {
  background-color: #ff699c;
}
.ui.time-line.log.pink > .items > .item:nth-of-type(odd) > .content:before {
  border-right-color: #ff699c;
}
.ui.time-line.log.pink > .items > .item:hover > .icon,
.ui.time-line.log.pink > .items > .item:hover:before {
  border-color: #ff4f8b;
}
.ui.time-line.log.brown > .items > .item:before,
.ui.time-line.log.brown > .items > .item > .icon {
  border-color: rgba(188, 123, 80, 0.7);
}
.ui.time-line.log.brown > .items > .item .icon {
  color: #a5673f;
}
.ui.time-line.log.brown > .items > .item > .label > .date-time {
  color: #b06e43;
}
.ui.time-line.log.brown > .items > .item:nth-of-type(even) > .content:after {
  background-color: #b06e43;
}
.ui.time-line.log.brown > .items > .item:nth-of-type(even) > .content:before {
  border-right-color: #b06e43;
}
.ui.time-line.log.brown > .items > .item:nth-of-type(odd) > .content:after {
  background-color: #bc7b50;
}
.ui.time-line.log.brown > .items > .item:nth-of-type(odd) > .content:before {
  border-right-color: #bc7b50;
}
.ui.time-line.log.brown > .items > .item:hover > .icon,
.ui.time-line.log.brown > .items > .item:hover:before {
  border-color: #b06e43;
}
.ui.time-line.log.grey > .items > .item:before,
.ui.time-line.log.grey > .items > .item > .icon {
  border-color: rgba(138, 138, 138, 0.7);
}
.ui.time-line.log.grey > .items > .item .icon {
  color: #767676;
}
.ui.time-line.log.grey > .items > .item > .label > .date-time {
  color: #7e7e7e;
}
.ui.time-line.log.grey > .items > .item:nth-of-type(even) > .content:after {
  background-color: #7e7e7e;
}
.ui.time-line.log.grey > .items > .item:nth-of-type(even) > .content:before {
  border-right-color: #7e7e7e;
}
.ui.time-line.log.grey > .items > .item:nth-of-type(odd) > .content:after {
  background-color: #8a8a8a;
}
.ui.time-line.log.grey > .items > .item:nth-of-type(odd) > .content:before {
  border-right-color: #8a8a8a;
}
.ui.time-line.log.grey > .items > .item:hover > .icon,
.ui.time-line.log.grey > .items > .item:hover:before {
  border-color: #7e7e7e;
}

.ui.panel {
  box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.08);
  padding: 0.6em;
  transition: height 0.2s ease-out;
  overflow: hidden;
}
.ui.panel > .header {
  margin: -0.6em -0.6em 0.6em -0.6em;
}
.ui.panel > .header > .content {
  padding: 0 1rem;
  height: 2.8rem;
  background-color: #f3f3f4;
  color: #5a5a5b;
}
.ui.panel > .header > .content > i.panel-icon {
  color: #5a5a5b;
  line-height: 2.8rem;
  height: 2.8rem;
  float: left;
}
.ui.panel > .header > .content > .caption {
  line-height: 2.8rem;
}
.ui.panel > .header > .content > .tools {
  float: right;
  height: 2.8rem;
}
.ui.panel > .header > .content > .tools > * {
  height: inherit;
  position: relative;
  display: inline-block;
  color: #aeaeae;
  cursor: pointer;
  line-height: 2.8rem;
}
.ui.panel > .header > .content > .tools > *:before {
  position: absolute;
}
.ui.panel > .header > .content > .tools .collapse-btn:before {
  transition: transform 0.2s ease-out;
}
.ui.panel.collapsed {
  height: 2.8rem !important;
}
.ui.panel.collapsed .collapse-btn:before {
  transform: rotate(-90deg);
}
.ui.panel.fieldset,
.ui.panel.groupbox {
  position: relative;
  box-shadow: none;
}
.ui.panel.fieldset.basic,
.ui.panel.groupbox.basic {
  border-color: transparent;
}
.ui.panel.fieldset:before,
.ui.panel.groupbox:before {
  width: 100%;
  content: "";
  position: absolute;
  border-radius: 2px;
  top: 1.4rem;
  z-index: -1;
  margin-left: -0.6em;
}
.ui.panel.fieldset > .header > .content,
.ui.panel.groupbox > .header > .content {
  position: relative;
  display: inline-block;
  background-color: transparent;
  margin-left: 3em;
  border-radius: 4px;
}
.ui.panel.fieldset > .header > .content:before,
.ui.panel.groupbox > .header > .content:before {
  border: 1px solid #d8d8dc;
  left: 0;
  right: 0;
  background-color: #fff;
  top: 2px;
  border-radius: 2px;
  bottom: 2px;
  content: "";
  z-index: -1;
  position: absolute;
}
.ui.panel.fieldset > .header > .content > .tools,
.ui.panel.groupbox > .header > .content > .tools {
  height: 2.8rem;
}
.ui.panel.fieldset:before {
  border-top: 1px solid #d8d8dc;
}
.ui.panel.groupbox:before {
  border: 1px solid #d8d8dc;
  bottom: 0;
}
.ui.panel.basic {
  box-shadow: none;
}
.ui.panel.basic > .header > .content:before {
  border: none;
}
.ui.panel.red > .header {
  border-left: 2.5px solid #db2828;
}
.ui.panel.orange > .header {
  border-left: 2.5px solid #f2711c;
}
.ui.panel.yellow > .header {
  border-left: 2.5px solid #fbbd08;
}
.ui.panel.olive > .header {
  border-left: 2.5px solid #b5cc18;
}
.ui.panel.green > .header {
  border-left: 2.5px solid #21ba45;
}
.ui.panel.teal > .header {
  border-left: 2.5px solid #00b5ad;
}
.ui.panel.blue > .header {
  border-left: 2.5px solid #2185d0;
}
.ui.panel.violet > .header {
  border-left: 2.5px solid #6435c9;
}
.ui.panel.purple > .header {
  border-left: 2.5px solid #a333c8;
}
.ui.panel.pink > .header {
  border-left: 2.5px solid #ff4081;
}
.ui.panel.brown > .header {
  border-left: 2.5px solid #a5673f;
}
.ui.panel.grey > .header {
  border-left: 2.5px solid #767676;
}
