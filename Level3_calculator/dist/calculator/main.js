(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <app-backto-list></app-backto-list>\n  <app-calculator [keylist]=\"keylist\"></app-calculator>\n  <app-helper></app-helper>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./key */ "./src/app/key.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.keylist = _key__WEBPACK_IMPORTED_MODULE_2__["KEYLIST"];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _helper_helper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper/helper.component */ "./src/app/helper/helper.component.ts");
/* harmony import */ var _backto_list_backto_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backto-list/backto-list.component */ "./src/app/backto-list/backto-list.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__["CalculatorComponent"],
                _helper_helper_component__WEBPACK_IMPORTED_MODULE_5__["HelperComponent"],
                _backto_list_backto_list_component__WEBPACK_IMPORTED_MODULE_6__["BacktoListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/backto-list/backto-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/backto-list/backto-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backtoList\">\n    <a href=\"../../../index.html\" class=\"content\">\n        回到列表\n\n    </a>\n</div>"

/***/ }),

/***/ "./src/app/backto-list/backto-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/backto-list/backto-list.component.ts ***!
  \******************************************************/
/*! exports provided: BacktoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BacktoListComponent", function() { return BacktoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BacktoListComponent = /** @class */ (function () {
    function BacktoListComponent() {
    }
    BacktoListComponent.prototype.ngOnInit = function () {
    };
    BacktoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-backto-list',
            template: __webpack_require__(/*! ./backto-list.component.html */ "./src/app/backto-list/backto-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BacktoListComponent);
    return BacktoListComponent;
}());



/***/ }),

/***/ "./src/app/calculator/calculator.component.html":
/*!******************************************************!*\
  !*** ./src/app/calculator/calculator.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"Calculator\" class=\"calculator\">\n    <div class=\"calc-display\">\n        <div class=\"clac\">{{ Calc }}</div>\n        <div class=\"total\">{{ Total }}</div>\n    </div>\n    <div class=\"keyboard\">\n        <div *ngFor=\"let btn of keylist\" \n            (click)=\"enterKey(btn.key)\" \n            [class]=\"btn.classlist.join(' ')\">\n            {{ btn.key }}\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../key */ "./src/app/key.ts");



var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
        this.enterKeyList = [];
        this.reStartEnter = false;
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        this.total = 0;
        this.clacDetail = '';
    };
    CalculatorComponent.prototype.onKeydown = function (e) {
        var keyCode = e.keyCode;
        var usingShift = e.shiftKey;
        var targetkey = this.keylist.find(function (key) { return key.keyCodes.some(function (code) {
            if (usingShift && typeof (code) === 'string') {
                var keyCombi = Number(code.split('+')[1]);
                return keyCombi === keyCode;
            }
            else {
                return code === keyCode;
            }
        }); });
        if (!targetkey) {
            return;
        }
        this.enterKey(targetkey);
    };
    // 當按下計算機裡的任何一個按鈕時
    CalculatorComponent.prototype.enterKey = function (key) {
        var enterKey;
        if (typeof (key) === 'string') {
            enterKey = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.findKey(key));
        }
        else {
            enterKey = key;
        }
        var enterKeyLength = this.enterKeyList.length;
        if (this.reStartEnter) {
            this.clearClacAndTotal();
        }
        switch (enterKey.type) {
            // 如果是數字類型
            case _key__WEBPACK_IMPORTED_MODULE_2__["KEYTYPE"][0]: {
                this.enterKeyList.push(enterKey);
                break;
            }
            // 如果是計算類型
            case _key__WEBPACK_IMPORTED_MODULE_2__["KEYTYPE"][1]: {
                // 避免計算類型放在第一個項目
                if (!(enterKeyLength > 0)) {
                    break;
                }
                if (this.enterKeyList[enterKeyLength - 1].type === _key__WEBPACK_IMPORTED_MODULE_2__["KEYTYPE"][1]) {
                    this.enterKeyList.splice(enterKeyLength - 1, 1);
                }
                this.enterKeyList.push(enterKey);
                break;
            }
            // 如果是函式類型
            case _key__WEBPACK_IMPORTED_MODULE_2__["KEYTYPE"][2]: {
                switch (enterKey.key) {
                    // =
                    case _key__WEBPACK_IMPORTED_MODULE_2__["FUNC"][0]: {
                        // 計算結果
                        this.total = this.calculatorContent();
                        this.reStartEnter = true;
                        break;
                    }
                    // ⌫
                    case _key__WEBPACK_IMPORTED_MODULE_2__["FUNC"][1]: {
                        // 去掉最後輸入的內容
                        if (enterKeyLength > 0) {
                            this.enterKeyList.splice(enterKeyLength - 2, 1);
                        }
                        break;
                    }
                    // c
                    case _key__WEBPACK_IMPORTED_MODULE_2__["FUNC"][2]: {
                        this.clearClacAndTotal();
                        break;
                    }
                }
                break;
            }
            // 小數點類型
            case _key__WEBPACK_IMPORTED_MODULE_2__["KEYTYPE"][3]: {
                // 確認清單內沒有小數點
                var checkpoint = this.enterKeyList.some(function (k) { return k.type === _key__WEBPACK_IMPORTED_MODULE_2__["KEYTYPE"][3]; });
                // 如果放在第一個項目的話加上0
                if (enterKeyLength <= 0) {
                    this.enterKeyList.push(new _key__WEBPACK_IMPORTED_MODULE_2__["Key"]('0', _key__WEBPACK_IMPORTED_MODULE_2__["KEYTYPE"][0], []));
                }
                // 防止重複小數點
                if (!checkpoint) {
                    this.enterKeyList.push(enterKey);
                }
                break;
            }
            default: {
                break;
            }
        }
        this.clacDetail = this.randerClacDetail();
    };
    CalculatorComponent.prototype.findKey = function (keyName) {
        return this.keylist.find(function (k) { return k.key === keyName; });
    };
    // 將KeyList轉成算式清單(組合數字)
    CalculatorComponent.prototype.parseClacList = function (KeyList) {
        // console.log(KeyList[0]);
        var lastType;
        var numtype = _key__WEBPACK_IMPORTED_MODULE_2__["KEYTYPE"][0];
        var newList = [];
        for (var _i = 0, KeyList_1 = KeyList; _i < KeyList_1.length; _i++) {
            var k = KeyList_1[_i];
            var length_1 = newList.length;
            var judge = length_1 !== 0 && lastType === numtype && k.type === numtype;
            if (judge) {
                newList[length_1 - 1].key = newList[length_1 - 1].key + k.key;
            }
            else {
                newList.push(k);
            }
            lastType = k.type;
        }
        return newList;
    };
    // 列出機算項目
    CalculatorComponent.prototype.randerClacDetail = function () {
        // 阻止傳址傳值
        var enterKeyList = JSON.parse(JSON.stringify(this.enterKeyList));
        return this.parseClacList(enterKeyList).map(function (k) { return k.key; }).join(' ').trim();
    };
    CalculatorComponent.prototype.computational = function (numberA, numberB, symbol) {
        switch (symbol) {
            // +
            case _key__WEBPACK_IMPORTED_MODULE_2__["SYMBOL"][0]: {
                return numberA + numberB;
            }
            // -
            case _key__WEBPACK_IMPORTED_MODULE_2__["SYMBOL"][1]: {
                return numberA - numberB;
            }
            // *
            case _key__WEBPACK_IMPORTED_MODULE_2__["SYMBOL"][2]: {
                return numberA * numberB;
            }
            // /
            case _key__WEBPACK_IMPORTED_MODULE_2__["SYMBOL"][3]: {
                return numberA / numberB;
            }
        }
    };
    // 計算結果
    CalculatorComponent.prototype.calculatorContent = function () {
        var _this = this;
        // 將輸入的Key字串整理成算式陣列
        var numtype = _key__WEBPACK_IMPORTED_MODULE_2__["KEYTYPE"][0];
        var pointtype = _key__WEBPACK_IMPORTED_MODULE_2__["KEYTYPE"][3];
        var counttype = _key__WEBPACK_IMPORTED_MODULE_2__["KEYTYPE"][1];
        // 阻止傳址傳值
        var enterKeyList = JSON.parse(JSON.stringify(this.enterKeyList));
        var calcList = this.parseClacList(enterKeyList);
        var Total = calcList.reduce(function (clt, val, index) {
            // 此處要保證第一個是數值 (enterKey的時候就要判別)
            if (index === 0 && val.type === numtype) {
                clt.total += Number(val.key);
                clt.beforeNumber = Number(val.key);
            }
            else {
                if (val.type === numtype || val.type === pointtype) {
                    clt.total = _this.computational(clt.beforeNumber, Number(val.key), clt.clactype);
                    clt.beforeNumber = clt.total;
                }
                if (val.type === counttype) {
                    clt.clactype = val.key;
                }
            }
            return clt;
        }, {
            total: 0,
            beforeNumber: null,
            clactype: ''
        }).total;
        // console.log(calcList, Total);
        return Total;
    };
    CalculatorComponent.prototype.clearClacAndTotal = function () {
        this.enterKeyList = [];
        this.total = 0;
        this.reStartEnter = false;
    };
    Object.defineProperty(CalculatorComponent.prototype, "Total", {
        get: function () {
            var num = this.total.toString().split('.');
            num[0] = num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return num.join('.');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalculatorComponent.prototype, "Calc", {
        get: function () {
            return this.clacDetail === '' ? '-' : this.clacDetail;
        },
        set: function (values) {
            this.clacDetail = values;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CalculatorComponent.prototype, "keylist", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CalculatorComponent.prototype, "onKeydown", null);
    CalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/calculator/calculator.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/helper/helper.component.html":
/*!**********************************************!*\
  !*** ./src/app/helper/helper.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"Helper\" class=\"helper\" [className]=\"open? 'helper open': 'helper'\">\n  <button class=\"toggleHelper\" (click)=\"toggleOpen()\">\n    ?\n  </button>\n  <div class=\"content\">\n    Ex:\n    <ul>\n      <li>\n        <div class=\"helperkey\">\n          <span class=\"keyicon\">btn</span> ➞ KeyBoard  \n        </div>\n      </li>\n      <hr>\n      <li>\n        <div class=\"helperkey\">\n          <span class=\"keyicon\">0</span> ➞ 0~9  \n        </div>\n      </li>\n      <li>\n        <div class=\"helperkey\">\n          <span class=\"keyicon\">+</span> ➞ + - * /\n        </div>\n      </li>\n      <li>\n        <div class=\"helperkey\">\n          <span class=\"keyicon\">=</span> ➞ Enter  \n        </div>\n      </li>\n      <li>\n        <div class=\"helperkey\">\n          <span class=\"keyicon\">⌫</span> ➞ Delete  \n        </div>\n      </li>\n      <li>\n        <div class=\"helperkey\">\n          <span class=\"keyicon\">C</span> ➞ Backspace  \n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/helper/helper.component.ts":
/*!********************************************!*\
  !*** ./src/app/helper/helper.component.ts ***!
  \********************************************/
/*! exports provided: HelperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperComponent", function() { return HelperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelperComponent = /** @class */ (function () {
    function HelperComponent() {
        this.open = false;
    }
    HelperComponent.prototype.ngOnInit = function () {
    };
    HelperComponent.prototype.toggleOpen = function () {
        this.open = !this.open;
    };
    HelperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-helper',
            template: __webpack_require__(/*! ./helper.component.html */ "./src/app/helper/helper.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelperComponent);
    return HelperComponent;
}());



/***/ }),

/***/ "./src/app/key.ts":
/*!************************!*\
  !*** ./src/app/key.ts ***!
  \************************/
/*! exports provided: Key, KEYTYPE, SYMBOL, FUNC, KEYLIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return Key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYTYPE", function() { return KEYTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYMBOL", function() { return SYMBOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNC", function() { return FUNC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYLIST", function() { return KEYLIST; });
var Key = /** @class */ (function () {
    function Key(key, type, classlist) {
        this.key = key;
        this.type = type;
        this.classlist = classlist;
    }
    return Key;
}());

var KEYTYPE = ['number', 'count', 'func', 'point'];
var SYMBOL = ['+', '−', '×', '÷'];
var FUNC = ['=', '⌫', 'C'];
var KEYLIST = [
    {
        key: '7',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [55, 103]
    },
    {
        key: '8',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [56, 104]
    },
    {
        key: '9',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [57, 105]
    },
    {
        key: '÷',
        classlist: ['key', 'count'],
        type: 'count',
        keyCodes: [111, 191]
    },
    {
        key: '4',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [52, 100]
    },
    {
        key: '5',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [53, 101]
    },
    {
        key: '6',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [54, 102]
    },
    {
        key: '×',
        classlist: ['key', 'count'],
        type: 'count',
        keyCodes: [106, '16+56']
    },
    {
        key: '1',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [49, 97]
    },
    {
        key: '2',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [50, 98]
    },
    {
        key: '3',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [51, 99]
    },
    {
        key: '+',
        classlist: ['key', 'count'],
        type: 'count',
        keyCodes: [107, '16+187']
    },
    {
        key: '0',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [48, 96]
    },
    {
        key: '00',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: []
    },
    {
        key: '.',
        classlist: ['key', 'num'],
        type: 'point',
        keyCodes: [110, 190]
    },
    {
        key: '−',
        classlist: ['key', 'count'],
        type: 'count',
        keyCodes: [109, 189]
    },
    {
        key: 'C',
        classlist: ['key', 'light'],
        type: 'func',
        keyCodes: [46]
    },
    {
        key: '⌫',
        classlist: ['key', 'light'],
        type: 'func',
        keyCodes: [8]
    },
    {
        key: '=',
        classlist: ['key', 'key-dbl', 'equal'],
        type: 'func',
        keyCodes: [13, 187]
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\peter\Documents\Web\Javascript_UndergroundCity\Level3_calculator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map