(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@charset \"UTF-8\";\n/* You can add global styles to this file, and also import other style files */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Roboto Light\"), local(\"Roboto-Light\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2) format(\"woff2\");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F; }\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Roboto Light\"), local(\"Roboto-Light\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2) format(\"woff2\");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; }\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Roboto Light\"), local(\"Roboto-Light\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2) format(\"woff2\");\n  unicode-range: U+1F00-1FFF; }\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Roboto Light\"), local(\"Roboto-Light\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2) format(\"woff2\");\n  unicode-range: U+0370-03FF; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Roboto Light\"), local(\"Roboto-Light\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Roboto Light\"), local(\"Roboto-Light\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Roboto Light\"), local(\"Roboto-Light\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format(\"woff2\");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F; }\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format(\"woff2\");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; }\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format(\"woff2\");\n  unicode-range: U+1F00-1FFF; }\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format(\"woff2\");\n  unicode-range: U+0370-03FF; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2) format(\"woff2\");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F; }\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2) format(\"woff2\");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; }\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2) format(\"woff2\");\n  unicode-range: U+1F00-1FFF; }\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2) format(\"woff2\");\n  unicode-range: U+0370-03FF; }\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB; }\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n* {\n  box-sizing: border-box; }\nhtml, body {\n  height: 100%; }\nbody {\n  background-color: #E8E8E8;\n  font-family: \"Roboto\", sans-serif; }\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: inherit; }\n.test {\n  background: #00C4FF;\n  background: linear-gradient(to right, #00C4FF 0%, #6C00FF 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00C4FF', endColorstr='#6C00FF',GradientType=1 );\n  display: block; }\n/* calculator */\n.calculator {\n  width: 350px;\n  height: 525px;\n  background-color: #062145;\n  border-radius: 20px;\n  overflow: hidden;\n  color: #FFFFFF;\n  font-weight: 400; }\n.calculator .calc-display {\n    height: 109px;\n    text-align: right;\n    padding: 16px 20px 8px 20px;\n    background-color: #041936;\n    border-radius: 20px 20px 0 0; }\n.calculator .calc-display .clac {\n      font-size: 16px;\n      line-height: 19px;\n      color: #00C4FF; }\n.calculator .calc-display .total {\n      font-size: 56px;\n      line-height: 66px; }\n.calculator .keyboard {\n    display: grid;\n    padding: 16px 8px;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-column-gap: 15.33px;\n    grid-row-gap: 16px;\n    font-size: 24px;\n    line-height: 28px; }\n.calculator .keyboard .key {\n      text-align: center;\n      height: 64px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 16px;\n      font-weight: 500;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      cursor: pointer; }\n.calculator .keyboard .key:hover {\n      text-shadow: 0 0 25px rgba(255, 255, 204, 0.952); }\n.calculator .keyboard .key:active {\n      text-shadow: 0 0 25px white;\n      box-shadow: inset 0 0 10px #020c1b; }\n.calculator .keyboard .key-dbl {\n      grid-column: span 2; }\n.calculator .keyboard .equal {\n      background: #00C4FF;\n      background: linear-gradient(to right, #00C4FF 0%, #6C00FF 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00C4FF', endColorstr='#6C00FF',GradientType=1 );\n      padding-left: calc(50% + 7.665px); }\n.calculator .keyboard .num {\n      font-weight: 300; }\n.calculator .keyboard .count {\n      background-color: #041936; }\n.calculator .keyboard .light {\n      color: #00C4FF; }\n/* helper */\n.helper {\n  position: fixed;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translate(170px, -50%);\n          transform: translate(170px, -50%);\n  transition: -webkit-transform .3s ease;\n  transition: transform .3s ease;\n  transition: transform .3s ease, -webkit-transform .3s ease;\n  color: #FFFFFF; }\n.helper.open {\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%); }\n.helper .toggleHelper {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    padding: 20px 5px;\n    width: 30px;\n    height: 120px;\n    background-color: #0a3774;\n    border-color: #041936;\n    border-top-width: 2px;\n    border-bottom-width: 2px;\n    border-left-width: 2px;\n    border-right-width: 0;\n    border-style: solid;\n    border-radius: 5px 0 0 5px;\n    box-shadow: none;\n    color: inherit;\n    outline: none; }\n.helper .toggleHelper:hover {\n    background: #041936;\n    background: linear-gradient(to right, #041936 0%, #0a3774 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#041936', endColorstr='#0a3774',GradientType=1 );\n    cursor: pointer; }\n.helper .content {\n    margin-left: 28px;\n    padding: 40px 20px;\n    width: 170px;\n    min-height: 150px;\n    background-color: #0a3774;\n    border-color: #041936;\n    border-top-width: 2px;\n    border-bottom-width: 2px;\n    border-left-width: 2px;\n    border-right-width: 0;\n    border-style: solid;\n    border-radius: 5px 0 0 5px;\n    background-color: #0a3774; }\n.helper .content ul, .helper .content li {\n      list-style: none;\n      padding: 0; }\n.helper .content .helperkey {\n      font-size: 13px;\n      padding: 10px 0; }\n.helper .content .keyicon {\n      display: inline-block;\n      min-width: 30px;\n      height: 30px;\n      margin: 0 5px;\n      padding: 3px;\n      font-size: 7px;\n      border: 2px solid #FFFFFF;\n      border-radius: 3px;\n      vertical-align: middle; }\n.backtoList {\n  position: fixed;\n  bottom: 35px;\n  left: 0;\n  border: 2px solid #008e80;\n  background-color: rgba(0, 142, 128, 0.87); }\n.backtoList .content {\n  display: block;\n  padding: 10px 20px;\n  color: #FFFFFF;\n  text-decoration: none; }\n.backtoList .content::before {\n  content: '⇦'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9DOlxcVXNlcnNcXHBldGVyXFxEb2N1bWVudHNcXFdlYlxcSmF2YXNjcmlwdF9VbmRlcmdyb3VuZENpdHlcXExldmVsM19jYWxjdWxhdG9yL3NyY1xcc3R5bGVzLnNjc3MiLCJub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzIiwic3JjL0M6XFxVc2Vyc1xccGV0ZXJcXERvY3VtZW50c1xcV2ViXFxKYXZhc2NyaXB0X1VuZGVyZ3JvdW5kQ2l0eVxcTGV2ZWwzX2NhbGN1bGF0b3Ivc3JjXFxhc3NldHNcXF9mb250LnNjc3MiLCJzcmMvQzpcXFVzZXJzXFxwZXRlclxcRG9jdW1lbnRzXFxXZWJcXEphdmFzY3JpcHRfVW5kZXJncm91bmRDaXR5XFxMZXZlbDNfY2FsY3VsYXRvci9zcmNcXGFzc2V0c1xcX2dsb2JhbC5zY3NzIiwic3JjL0M6XFxVc2Vyc1xccGV0ZXJcXERvY3VtZW50c1xcV2ViXFxKYXZhc2NyaXB0X1VuZGVyZ3JvdW5kQ2l0eVxcTGV2ZWwzX2NhbGN1bGF0b3Ivc3JjXFxhc3NldHNcXF92YXJpYWJsZS5zY3NzIiwic3JjL0M6XFxVc2Vyc1xccGV0ZXJcXERvY3VtZW50c1xcV2ViXFxKYXZhc2NyaXB0X1VuZGVyZ3JvdW5kQ2l0eVxcTGV2ZWwzX2NhbGN1bGF0b3Ivc3JjXFxhc3NldHNcXF9taXhpbi5zY3NzIiwic3JjL0M6XFxVc2Vyc1xccGV0ZXJcXERvY3VtZW50c1xcV2ViXFxKYXZhc2NyaXB0X1VuZGVyZ3JvdW5kQ2l0eVxcTGV2ZWwzX2NhbGN1bGF0b3Ivc3JjXFxhc3NldHNcXF9jb21wb25lbnRzLnNjc3MiLCJzcmMvQzpcXFVzZXJzXFxwZXRlclxcRG9jdW1lbnRzXFxXZWJcXEphdmFzY3JpcHRfVW5kZXJncm91bmRDaXR5XFxMZXZlbDNfY2FsY3VsYXRvci9zcmNcXGFzc2V0c1xcX2JhY2t0b0xpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFB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NUtsQztFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osT0FBTztFQUNQLHlCQUFzQztFQUN0Qyx5Q0FBd0MsRUFBQTtBQUc1QztFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQixFQUFBO0FBR3pCO0VBQ0ksWUFBUyxFQUNiIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgdXJsKG5vcm1hbGl6ZS5jc3MpO1xuLyogY3lyaWxsaWMtZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogbG9jYWwoXCJSb2JvdG8gTGlnaHRcIiksIGxvY2FsKFwiUm9ib3RvLUxpZ2h0XCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbVNVNWZDUmM0RXNBLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNDYwLTA1MkYsIFUrMUM4MC0xQzg4LCBVKzIwQjQsIFUrMkRFMC0yREZGLCBVK0E2NDAtQTY5RiwgVStGRTJFLUZFMkY7IH1cblxuLyogY3lyaWxsaWMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBMaWdodFwiKSwgbG9jYWwoXCJSb2JvdG8tTGlnaHRcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9sQ25xRXU5MkZyMU1tU1U1ZkFCYzRFc0Eud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7IH1cblxuLyogZ3JlZWstZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogbG9jYWwoXCJSb2JvdG8gTGlnaHRcIiksIGxvY2FsKFwiUm9ib3RvLUxpZ2h0XCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbVNVNWZDQmM0RXNBLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgdW5pY29kZS1yYW5nZTogVSsxRjAwLTFGRkY7IH1cblxuLyogZ3JlZWsgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBMaWdodFwiKSwgbG9jYWwoXCJSb2JvdG8tTGlnaHRcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9sQ25xRXU5MkZyMU1tU1U1ZkJ4YzRFc0Eud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAzNzAtMDNGRjsgfVxuXG4vKiB2aWV0bmFtZXNlICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogbG9jYWwoXCJSb2JvdG8gTGlnaHRcIiksIGxvY2FsKFwiUm9ib3RvLUxpZ2h0XCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbVNVNWZDeGM0RXNBLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzFFQTAtMUVGOSwgVSsyMEFCOyB9XG5cbi8qIGxhdGluLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIExpZ2h0XCIpLCBsb2NhbChcIlJvYm90by1MaWdodFwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT2xDbnFFdTkyRnIxTW1TVTVmQ2hjNEVzQS53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7IH1cblxuLyogbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBMaWdodFwiKSwgbG9jYWwoXCJSb2JvdG8tTGlnaHRcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9sQ25xRXU5MkZyMU1tU1U1ZkJCYzQud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEOyB9XG5cbi8qIGN5cmlsbGljLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvXCIpLCBsb2NhbChcIlJvYm90by1SZWd1bGFyXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbUNucUV1OTJGcjFNdTcyeEtPelkud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjsgfVxuXG4vKiBjeXJpbGxpYyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvXCIpLCBsb2NhbChcIlJvYm90by1SZWd1bGFyXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbUNucUV1OTJGcjFNdTVteEtPelkud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7IH1cblxuLyogZ3JlZWstZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoXCJSb2JvdG9cIiksIGxvY2FsKFwiUm9ib3RvLVJlZ3VsYXJcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11N214S096WS53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMUYwMC0xRkZGOyB9XG5cbi8qIGdyZWVrICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoXCJSb2JvdG9cIiksIGxvY2FsKFwiUm9ib3RvLVJlZ3VsYXJcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NFd4S096WS53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGOyB9XG5cbi8qIHZpZXRuYW1lc2UgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiBsb2NhbChcIlJvYm90b1wiKSwgbG9jYWwoXCJSb2JvdG8tUmVndWxhclwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT21DbnFFdTkyRnIxTXU3V3hLT3pZLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzFFQTAtMUVGOSwgVSsyMEFCOyB9XG5cbi8qIGxhdGluLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvXCIpLCBsb2NhbChcIlJvYm90by1SZWd1bGFyXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbUNucUV1OTJGcjFNdTdHeEtPelkud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGOyB9XG5cbi8qIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoXCJSb2JvdG9cIiksIGxvY2FsKFwiUm9ib3RvLVJlZ3VsYXJcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NG14Sy53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7IH1cblxuLyogY3lyaWxsaWMtZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogbG9jYWwoXCJSb2JvdG8gTWVkaXVtXCIpLCBsb2NhbChcIlJvYm90by1NZWRpdW1cIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9sQ25xRXU5MkZyMU1tRVU5ZkNSYzRFc0Eud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjsgfVxuXG4vKiBjeXJpbGxpYyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIE1lZGl1bVwiKSwgbG9jYWwoXCJSb2JvdG8tTWVkaXVtXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbUVVOWZBQmM0RXNBLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2OyB9XG5cbi8qIGdyZWVrLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIE1lZGl1bVwiKSwgbG9jYWwoXCJSb2JvdG8tTWVkaXVtXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbUVVOWZDQmM0RXNBLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgdW5pY29kZS1yYW5nZTogVSsxRjAwLTFGRkY7IH1cblxuLyogZ3JlZWsgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBNZWRpdW1cIiksIGxvY2FsKFwiUm9ib3RvLU1lZGl1bVwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT2xDbnFFdTkyRnIxTW1FVTlmQnhjNEVzQS53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGOyB9XG5cbi8qIHZpZXRuYW1lc2UgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBNZWRpdW1cIiksIGxvY2FsKFwiUm9ib3RvLU1lZGl1bVwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT2xDbnFFdTkyRnIxTW1FVTlmQ3hjNEVzQS53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSsxRUEwLTFFRjksIFUrMjBBQjsgfVxuXG4vKiBsYXRpbi1leHQgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBNZWRpdW1cIiksIGxvY2FsKFwiUm9ib3RvLU1lZGl1bVwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT2xDbnFFdTkyRnIxTW1FVTlmQ2hjNEVzQS53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7IH1cblxuLyogbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBNZWRpdW1cIiksIGxvY2FsKFwiUm9ib3RvLU1lZGl1bVwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT2xDbnFFdTkyRnIxTW1FVTlmQkJjNC53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7IH1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RThFODtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7IH1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IGluaGVyaXQ7IH1cblxuLnRlc3Qge1xuICBiYWNrZ3JvdW5kOiAjMDBDNEZGO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDBDNEZGIDAlLCAjNkMwMEZGIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDBDNEZGIDAlLCAjNkMwMEZGIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMEM0RkYgMCUsICM2QzAwRkYgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDBDNEZGJywgZW5kQ29sb3JzdHI9JyM2QzAwRkYnLEdyYWRpZW50VHlwZT0xICk7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi8qIGNhbGN1bGF0b3IgKi9cbi5jYWxjdWxhdG9yIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDUyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYyMTQ1O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAuY2FsY3VsYXRvciAuY2FsYy1kaXNwbGF5IHtcbiAgICBoZWlnaHQ6IDEwOXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDE2cHggMjBweCA4cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQxOTM2O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7IH1cbiAgICAuY2FsY3VsYXRvciAuY2FsYy1kaXNwbGF5IC5jbGFjIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgY29sb3I6ICMwMEM0RkY7IH1cbiAgICAuY2FsY3VsYXRvciAuY2FsYy1kaXNwbGF5IC50b3RhbCB7XG4gICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICBsaW5lLWhlaWdodDogNjZweDsgfVxuICAuY2FsY3VsYXRvciAua2V5Ym9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogMTZweCA4cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxNS4zM3B4O1xuICAgIGdyaWQtcm93LWdhcDogMTZweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7IH1cbiAgICAuY2FsY3VsYXRvciAua2V5Ym9hcmQgLmtleSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIC5jYWxjdWxhdG9yIC5rZXlib2FyZCAua2V5OmhvdmVyIHtcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgMjVweCByZ2JhKDI1NSwgMjU1LCAyMDQsIDAuOTUyKTsgfVxuICAgIC5jYWxjdWxhdG9yIC5rZXlib2FyZCAua2V5OmFjdGl2ZSB7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDI1cHggd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDIwYzFiOyB9XG4gICAgLmNhbGN1bGF0b3IgLmtleWJvYXJkIC5rZXktZGJsIHtcbiAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7IH1cbiAgICAuY2FsY3VsYXRvciAua2V5Ym9hcmQgLmVxdWFsIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMEM0RkY7XG4gICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDBDNEZGIDAlLCAjNkMwMEZGIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzAwQzRGRiAwJSwgIzZDMDBGRiAxMDAlKTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwQzRGRiAwJSwgIzZDMDBGRiAxMDAlKTtcbiAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDBDNEZGJywgZW5kQ29sb3JzdHI9JyM2QzAwRkYnLEdyYWRpZW50VHlwZT0xICk7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoNTAlICsgNy42NjVweCk7IH1cbiAgICAuY2FsY3VsYXRvciAua2V5Ym9hcmQgLm51bSB7XG4gICAgICBmb250LXdlaWdodDogMzAwOyB9XG4gICAgLmNhbGN1bGF0b3IgLmtleWJvYXJkIC5jb3VudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQxOTM2OyB9XG4gICAgLmNhbGN1bGF0b3IgLmtleWJvYXJkIC5saWdodCB7XG4gICAgICBjb2xvcjogIzAwQzRGRjsgfVxuXG4vKiBoZWxwZXIgKi9cbi5oZWxwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTcwcHgsIC01MCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2U7XG4gIGNvbG9yOiAjRkZGRkZGOyB9XG4gIC5oZWxwZXIub3BlbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7IH1cbiAgLmhlbHBlciAudG9nZ2xlSGVscGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHBhZGRpbmc6IDIwcHggNXB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMzc3NDtcbiAgICBib3JkZXItY29sb3I6ICMwNDE5MzY7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuICAuaGVscGVyIC50b2dnbGVIZWxwZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwNDE5MzY7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgIzA0MTkzNiAwJSwgIzBhMzc3NCAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDQxOTM2IDAlLCAjMGEzNzc0IDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA0MTkzNiAwJSwgIzBhMzc3NCAxMDAlKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzA0MTkzNicsIGVuZENvbG9yc3RyPScjMGEzNzc0JyxHcmFkaWVudFR5cGU9MSApO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuaGVscGVyIC5jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMjhweDtcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTM3NzQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDQxOTM2O1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEzNzc0OyB9XG4gICAgLmhlbHBlciAuY29udGVudCB1bCwgLmhlbHBlciAuY29udGVudCBsaSB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgcGFkZGluZzogMDsgfVxuICAgIC5oZWxwZXIgLmNvbnRlbnQgLmhlbHBlcmtleSB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDA7IH1cbiAgICAuaGVscGVyIC5jb250ZW50IC5rZXlpY29uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1pbi13aWR0aDogMzBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICBmb250LXNpemU6IDdweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbi5iYWNrdG9MaXN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDM1cHg7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDhlODA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTQyLCAxMjgsIDAuODcpOyB9XG5cbi5iYWNrdG9MaXN0IC5jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4uYmFja3RvTGlzdCAuY29udGVudDo6YmVmb3JlIHtcbiAgY29udGVudDogJ+KHpic7IH1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuQGltcG9ydCAnLi9hc3NldHMvZm9udCc7XG5AaW1wb3J0ICcuL2Fzc2V0cy92YXJpYWJsZSc7XG5AaW1wb3J0ICcuL2Fzc2V0cy9taXhpbic7XG5AaW1wb3J0ICcuL2Fzc2V0cy9nbG9iYWwnO1xuQGltcG9ydCAnLi9hc3NldHMvY29tcG9uZW50cyc7XG5AaW1wb3J0ICcuL2Fzc2V0cy9iYWNrdG9MaXN0JzsiLCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXG4gKi9cblxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5cbmFiYnJbdGl0bGVdIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qIEVtYmVkZGVkIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5pbWcge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi8qIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQgeyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbixcbnNlbGVjdCB7IC8qIDEgKi9cbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5bdHlwZT1cImJ1dHRvblwiXSxcblt0eXBlPVwicmVzZXRcIl0sXG5bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICovXG5cbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcblt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cbiAqL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxuICovXG5cblt0eXBlPVwiY2hlY2tib3hcIl0sXG5bdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG5cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXG4gKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLyogSW50ZXJhY3RpdmVcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG5cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKiBNaXNjXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAqL1xuXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIiwiLyogY3lyaWxsaWMtZXh0ICovXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBMaWdodCcpLCBsb2NhbCgnUm9ib3RvLUxpZ2h0JyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9sQ25xRXU5MkZyMU1tU1U1ZkNSYzRFc0Eud29mZjIpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRiwgVStBNjQwLUE2OUYsIFUrRkUyRS1GRTJGO1xyXG4gIH1cclxuICAvKiBjeXJpbGxpYyAqL1xyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBMaWdodCcpLCBsb2NhbCgnUm9ib3RvLUxpZ2h0JyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9sQ25xRXU5MkZyMU1tU1U1ZkFCYzRFc0Eud29mZjIpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcclxuICB9XHJcbiAgLyogZ3JlZWstZXh0ICovXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIExpZ2h0JyksIGxvY2FsKCdSb2JvdG8tTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT2xDbnFFdTkyRnIxTW1TVTVmQ0JjNEVzQS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSsxRjAwLTFGRkY7XHJcbiAgfVxyXG4gIC8qIGdyZWVrICovXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIExpZ2h0JyksIGxvY2FsKCdSb2JvdG8tTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT2xDbnFFdTkyRnIxTW1TVTVmQnhjNEVzQS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XHJcbiAgfVxyXG4gIC8qIHZpZXRuYW1lc2UgKi9cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTGlnaHQnKSwgbG9jYWwoJ1JvYm90by1MaWdodCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbVNVNWZDeGM0RXNBLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMUVBMC0xRUY5LCBVKzIwQUI7XHJcbiAgfVxyXG4gIC8qIGxhdGluLWV4dCAqL1xyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBMaWdodCcpLCBsb2NhbCgnUm9ib3RvLUxpZ2h0JyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9sQ25xRXU5MkZyMU1tU1U1ZkNoYzRFc0Eud29mZjIpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XHJcbiAgfVxyXG4gIC8qIGxhdGluICovXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIExpZ2h0JyksIGxvY2FsKCdSb2JvdG8tTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT2xDbnFFdTkyRnIxTW1TVTVmQkJjNC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcclxuICB9XHJcbiAgLyogY3lyaWxsaWMtZXh0ICovXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvJyksIGxvY2FsKCdSb2JvdG8tUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbUNucUV1OTJGcjFNdTcyeEtPelkud29mZjIpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRiwgVStBNjQwLUE2OUYsIFUrRkUyRS1GRTJGO1xyXG4gIH1cclxuICAvKiBjeXJpbGxpYyAqL1xyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT21DbnFFdTkyRnIxTXU1bXhLT3pZLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XHJcbiAgfVxyXG4gIC8qIGdyZWVrLWV4dCAqL1xyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT21DbnFFdTkyRnIxTXU3bXhLT3pZLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICB1bmljb2RlLXJhbmdlOiBVKzFGMDAtMUZGRjtcclxuICB9XHJcbiAgLyogZ3JlZWsgKi9cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8nKSwgbG9jYWwoJ1JvYm90by1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NFd4S096WS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XHJcbiAgfVxyXG4gIC8qIHZpZXRuYW1lc2UgKi9cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8nKSwgbG9jYWwoJ1JvYm90by1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11N1d4S096WS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xyXG4gIH1cclxuICAvKiBsYXRpbi1leHQgKi9cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8nKSwgbG9jYWwoJ1JvYm90by1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11N0d4S096WS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcclxuICB9XHJcbiAgLyogbGF0aW4gKi9cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8nKSwgbG9jYWwoJ1JvYm90by1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NG14Sy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcclxuICB9XHJcbiAgLyogY3lyaWxsaWMtZXh0ICovXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIE1lZGl1bScpLCBsb2NhbCgnUm9ib3RvLU1lZGl1bScpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbUVVOWZDUmM0RXNBLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcclxuICB9XHJcbiAgLyogY3lyaWxsaWMgKi9cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTWVkaXVtJyksIGxvY2FsKCdSb2JvdG8tTWVkaXVtJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9sQ25xRXU5MkZyMU1tRVU5ZkFCYzRFc0Eud29mZjIpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcclxuICB9XHJcbiAgLyogZ3JlZWstZXh0ICovXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIE1lZGl1bScpLCBsb2NhbCgnUm9ib3RvLU1lZGl1bScpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbUVVOWZDQmM0RXNBLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICB1bmljb2RlLXJhbmdlOiBVKzFGMDAtMUZGRjtcclxuICB9XHJcbiAgLyogZ3JlZWsgKi9cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTWVkaXVtJyksIGxvY2FsKCdSb2JvdG8tTWVkaXVtJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9sQ25xRXU5MkZyMU1tRVU5ZkJ4YzRFc0Eud29mZjIpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGO1xyXG4gIH1cclxuICAvKiB2aWV0bmFtZXNlICovXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIE1lZGl1bScpLCBsb2NhbCgnUm9ib3RvLU1lZGl1bScpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbUVVOWZDeGM0RXNBLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMUVBMC0xRUY5LCBVKzIwQUI7XHJcbiAgfVxyXG4gIC8qIGxhdGluLWV4dCAqL1xyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBNZWRpdW0nKSwgbG9jYWwoJ1JvYm90by1NZWRpdW0nKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT2xDbnFFdTkyRnIxTW1FVTlmQ2hjNEVzQS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcclxuICB9XHJcbiAgLyogbGF0aW4gKi9cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTWVkaXVtJyksIGxvY2FsKCdSb2JvdG8tTWVkaXVtJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9sQ25xRXU5MkZyMU1tRVU5ZkJCYzQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XHJcbiAgfSIsIlxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOEU4RTg7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtZGVmYXVsdDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4udGVzdCB7XHJcbiAgICBAaW5jbHVkZSBHcmFkaWVudENvbG9yKCRibHVlLCAkcHVycGxlLCBsZWZ0KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59IiwiLy8gY29sb3IgbGlzdFxyXG4kd2hpdGU6ICNGRkZGRkY7XHJcbiRncmF5OiAjRThFOEU4O1xyXG4kYmx1ZTogIzAwQzRGRjtcclxuJG5hdnktYmx1ZTogIzA2MjE0NTtcclxuJGRhcmstYmx1ZTogIzA0MTkzNjtcclxuJHB1cnBsZTogIzZDMDBGRjtcclxuXHJcblxyXG4kbWFpbi1jb2xvcjogJG5hdnktYmx1ZTtcclxuJHRleHQtY29sb3I6ICR3aGl0ZTtcclxuJHRleHQtbGlnaHQtY29sb3I6ICRibHVlO1xyXG4kYnV0dG9uLWNvbG9yOiAkZGFyay1ibHVlO1xyXG4kY2FsYy1kaXNwbGF5LWNvbG9yOiAkZGFyay1ibHVlO1xyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheTtcclxuXHJcbiRoZWxwZXItYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkbmF2eS1ibHVlLCAxMCUpO1xyXG4kaGVscGVyLWJvcmRlci1jb2xvcjogJGRhcmstYmx1ZTtcclxuXHJcbi8vZm9udFxyXG5cclxuJGZvbnQtZGVmYXVsdDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRrZXktZm9udC1zaXplOiAyNHB4OyIsIkBtaXhpbiBHcmFkaWVudENvbG9yKCRmcm9tLCAkdG8sICRkaXJlY3Rpb24pIHtcclxuICAgICRfbGVmdDogKGRlZmF1bHQ6IHRvIHJpZ2h0LCBtb3o6IGxlZnQsIHdlYmtpdDogbGVmdCwgaWU6IDEpO1xyXG4gICAgJF90b3A6IChkZWZhdWx0OiB0byByaWdodCwgbW96OiBsZWZ0LCB3ZWJraXQ6IGxlZnQsIGllOiAwKTtcclxuICAgICRTZWxlY3RvcjogKGxlZnQ6ICRfbGVmdCwgdG9wOiAkX3RvcCk7XHJcblxyXG4gICAgJE9yaWVudGF0aW9uOiBtYXAtZ2V0KCRTZWxlY3RvciwgJGRpcmVjdGlvbik7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZnJvbTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KG1hcC1nZXQoJE9yaWVudGF0aW9uLCBtb3opLCAkZnJvbSAwJSwgJHRvIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobWFwLWdldCgkT3JpZW50YXRpb24sIHdlYmtpdCksICRmcm9tIDAlLCR0byAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChtYXAtZ2V0KCRPcmllbnRhdGlvbiwgZGVmYXVsdCksICRmcm9tIDAlLCR0byAxMDAlKTtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjeyRmcm9tfScsIGVuZENvbG9yc3RyPScjeyR0b30nLEdyYWRpZW50VHlwZT0je21hcC1nZXQoJE9yaWVudGF0aW9uLCBpZSl9ICk7XHJcbn0iLCIvKiBjYWxjdWxhdG9yICovXHJcblxyXG4uY2FsY3VsYXRvciB7XHJcbiAgICAkY29udGVudC13aWR0aDogMzUwcHg7XHJcbiAgICAkY29udGVudC1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgJGNvbnRlbnQtYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICB3aWR0aDogJGNvbnRlbnQtd2lkdGg7XHJcbiAgICBoZWlnaHQ6ICRjb250ZW50LWhlaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGNvbnRlbnQtYm9yZGVyLXJhZGl1cztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAgIC5jYWxjLWRpc3BsYXkge1xyXG4gICAgICAgIGhlaWdodDogMTA5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAyMHB4IDhweCAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYWxjLWRpc3BsYXktY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGNvbnRlbnQtYm9yZGVyLXJhZGl1cyAkY29udGVudC1ib3JkZXItcmFkaXVzIDAgMDtcclxuXHJcbiAgICAgICAgLmNsYWMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHRleHQtbGlnaHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG90YWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDU2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2NnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAua2V5Ym9hcmQge1xyXG4gICAgICAgICRidG4tcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgICRjb2wtZ2FwOiAxNS4zM3B4O1xyXG4gICAgICAgICRyb3ctZ2FwOiAxNnB4O1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggOHB4O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogJGNvbC1nYXA7XHJcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiAkcm93LWdhcDtcclxuICAgICAgICBmb250LXNpemU6ICRrZXktZm9udC1zaXplO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5cclxuICAgICAgICAua2V5IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYnRuLXJhZGl1cztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5rZXk6aG92ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDI1cHggcmdiYSgyNTUsIDI1NSwgMjA0LCAwLjk1Mik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAua2V5OmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMjVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDIwYzFiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmtleS1kYmwge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVxdWFsIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgR3JhZGllbnRDb2xvcigkYmx1ZSwgJHB1cnBsZSwgbGVmdCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyg1MCUgKyAjeyRjb2wtZ2FwIC8gMn0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm51bSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY291bnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpZ2h0IHtcclxuICAgICAgICAgICAgY29sb3I6ICR0ZXh0LWxpZ2h0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyogaGVscGVyICovXHJcbi5oZWxwZXIge1xyXG4gICAgJGJ0bi13aWR0aDogMzBweDtcclxuICAgICRib3JkZXItd2lkdGg6IDJweDtcclxuXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG5cclxuICAgICRoZWxwZXItdHJhbnNsYXRlOiAyMDBweCAtICRidG4td2lkdGg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkaGVscGVyLXRyYW5zbGF0ZSwgLTUwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2U7XHJcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcblxyXG4gICAgJi5vcGVuIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICAgIH1cclxuXHJcbiAgICAudG9nZ2xlSGVscGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggNXB4O1xyXG4gICAgICAgIHdpZHRoOiAkYnRuLXdpZHRoO1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhlbHBlci1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgICAgICBib3JkZXItY29sb3I6ICRoZWxwZXItYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIC50b2dnbGVIZWxwZXI6aG92ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIEdyYWRpZW50Q29sb3IoJGhlbHBlci1ib3JkZXItY29sb3IsICRoZWxwZXItYmFja2dyb3VuZC1jb2xvciwgbGVmdCk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJGJ0bi13aWR0aCAtICRib3JkZXItd2lkdGg7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xyXG5cclxuICAgICAgICB3aWR0aDogMjAwcHggLSAkYnRuLXdpZHRoO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWxwZXItYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkaGVscGVyLWJvcmRlci1jb2xvcjtcclxuICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWxwZXItYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgdWwsIGxpIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWxwZXJrZXkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5rZXlpY29uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDdweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG4uYmFja3RvTGlzdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDM1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAxNDIsIDEyOCwgMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMTQyLCAxMjgsIDAuODcpO1xyXG59XHJcblxyXG4uYmFja3RvTGlzdCAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYmFja3RvTGlzdCAuY29udGVudDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICfih6YnXHJcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\peter\Documents\Web\Javascript_UndergroundCity\Level3_calculator\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map