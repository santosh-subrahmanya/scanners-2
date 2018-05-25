webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_layout/app-header/app-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"navbar navbar-inverse bg-inverse\" title=\"This Header is rendered by /app/_layout/app-header/app-header.component.html\">\n      <div class=\"container d-flex justify-content-between\">\n        <a href=\"#\" class=\"navbar-brand\">App Page</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        \n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/_layout/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent() {
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
    };
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/_layout/app-header/app-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/app-header/app-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/app-layout/app-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/app-layout/app-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/_layout/app-layout/app-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppLayoutComponent = /** @class */ (function () {
    function AppLayoutComponent() {
    }
    AppLayoutComponent.prototype.ngOnInit = function () {
    };
    AppLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-app-layout',
            template: __webpack_require__("../../../../../src/app/_layout/app-layout/app-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/app-layout/app-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppLayoutComponent);
    return AppLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/site-footer/site-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/site-footer/site-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <footer>\n        <p>&copy; Company 2018 - Santosh & Manohar</p>\n      </footer>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/_layout/site-footer/site-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteFooterComponent = /** @class */ (function () {
    function SiteFooterComponent() {
    }
    SiteFooterComponent.prototype.ngOnInit = function () {
    };
    SiteFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'site-footer',
            template: __webpack_require__("../../../../../src/app/_layout/site-footer/site-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/site-footer/site-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteFooterComponent);
    return SiteFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/site-header/site-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/site-header/site-header.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\" title=\"This Header is rendered by /app/_layout/site-header/site-header.component.html\">\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      \n\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li><a class=\"navbar-brand\" href=\"#\">Shopkick Barcodes</a></li>\n      \n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/\">Home<small></small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/about\">How it works<small></small></a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/login\">Login Page<small></small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/register\">Register Page<small></small></a>\n          </li> \n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard<small></small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/profile\">Profile<small></small></a> \n          </li> -->\n        </ul>\n      </div>\n    </nav>"

/***/ }),

/***/ "../../../../../src/app/_layout/site-header/site-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteHeaderComponent = /** @class */ (function () {
    function SiteHeaderComponent() {
    }
    SiteHeaderComponent.prototype.ngOnInit = function () {
    };
    SiteHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'site-header',
            template: __webpack_require__("../../../../../src/app/_layout/site-header/site-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/site-header/site-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteHeaderComponent);
    return SiteHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/site-layout/site-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/site-layout/site-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<site-header></site-header>\n<router-outlet></router-outlet>\n<site-footer></site-footer>"

/***/ }),

/***/ "../../../../../src/app/_layout/site-layout/site-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteLayoutComponent = /** @class */ (function () {
    function SiteLayoutComponent() {
    }
    SiteLayoutComponent.prototype.ngOnInit = function () {
    };
    SiteLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-site-layout',
            template: __webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteLayoutComponent);
    return SiteLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- Main jumbotron for a primary marketing message or call to action -->\n    <div class=\"jumbotron\">\n      <div class=\"container\">\n        <h1 class=\"display-3\">How it works</h1>\n        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n        <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more &raquo;</a></p>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <!-- Example row of columns -->\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n        </div>\n        <div class=\"col-md-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n       </div>\n        <div class=\"col-md-4\">\n          <h2>Heading</h2>\n          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n        </div>\n      </div>\n\n      <hr>\n\n      \n    </div> <!-- /container -->\n    "

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  font-family: Lato;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Angular 4';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hello_component__ = __webpack_require__("../../../../../src/app/hello.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_app_layout_app_layout_component__ = __webpack_require__("../../../../../src/app/_layout/app-layout/app-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_site_layout_site_layout_component__ = __webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_app_header_app_header_component__ = __webpack_require__("../../../../../src/app/_layout/app-header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_site_header_site_header_component__ = __webpack_require__("../../../../../src/app/_layout/site-header/site-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_site_footer_site_footer_component__ = __webpack_require__("../../../../../src/app/_layout/site-footer/site-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__barcode_barcode_component__ = __webpack_require__("../../../../../src/app/barcode/barcode.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_17__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__hello_component__["a" /* HelloComponent */], __WEBPACK_IMPORTED_MODULE_5__layout_app_layout_app_layout_component__["a" /* AppLayoutComponent */], __WEBPACK_IMPORTED_MODULE_6__layout_site_layout_site_layout_component__["a" /* SiteLayoutComponent */], __WEBPACK_IMPORTED_MODULE_7__layout_app_header_app_header_component__["a" /* AppHeaderComponent */], __WEBPACK_IMPORTED_MODULE_8__layout_site_header_site_header_component__["a" /* SiteHeaderComponent */], __WEBPACK_IMPORTED_MODULE_9__layout_site_footer_site_footer_component__["a" /* SiteFooterComponent */], __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_18__barcode_barcode_component__["a" /* BarcodeComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_18__barcode_barcode_component__["a" /* BarcodeComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_site_layout_site_layout_component__ = __webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_app_layout_app_layout_component__ = __webpack_require__("../../../../../src/app/_layout/app-layout/app-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__barcode_barcode_component__ = __webpack_require__("../../../../../src/app/barcode/barcode.component.ts");










var appRoutes = [
    //Site routes goes here 
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__layout_site_layout_site_layout_component__["a" /* SiteLayoutComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] },
            { path: 'test/:id', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] },
            { path: 'barcode', component: __WEBPACK_IMPORTED_MODULE_9__barcode_barcode_component__["a" /* BarcodeComponent */], pathMatch: 'full' },
            { path: 'barcode/:company', component: __WEBPACK_IMPORTED_MODULE_9__barcode_barcode_component__["a" /* BarcodeComponent */], pathMatch: 'full' }
        ]
    },
    // App routes goes here here
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_app_layout_app_layout_component__["a" /* AppLayoutComponent */],
        children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */] },
            { path: 'barcode', component: __WEBPACK_IMPORTED_MODULE_9__barcode_barcode_component__["a" /* BarcodeComponent */], pathMatch: 'full' },
            { path: 'barcode/:company', component: __WEBPACK_IMPORTED_MODULE_9__barcode_barcode_component__["a" /* BarcodeComponent */] }
        ]
    },
    //no layout routes
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */] },
    { path: 'barcode/:company', component: __WEBPACK_IMPORTED_MODULE_9__barcode_barcode_component__["a" /* BarcodeComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true, enableTracing: true });


/***/ }),

/***/ "../../../../../src/app/barcode/barcode.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/barcode/barcode.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- Main jumbotron for a primary marketing message or call to action -->\n    <div class=\"jumbotron\">\n      <div class=\"container\"> \n        <h1 class=\"display-3\">Barcodes for {{barcodes[0].company}}</h1>\n        <p>Help yourselves to a host of barcodes that you can start scanning across all your favorite shopping destinations</p>\n        <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more &raquo;</a></p>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <!-- Example row of columns -->\n      <div class=\"row\">\n          <div class=\"col-md-4\" *ngFor=\"let barcode of barcodes\">\n              <h2>{{barcode?.productName}}</h2>\n              <p>{{barcode?.productDescription}}</p>\n              <img src = \"{{barcode.productImageUrl}}\" width=\"300\" height=\"300\">\n          </div>\n      </div>\n      <hr>\n    </div> <!-- /container -->\n    "

/***/ }),

/***/ "../../../../../src/app/barcode/barcode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarcodeComponent = /** @class */ (function () {
    function BarcodeComponent(http, route) {
        this.http = http;
        this.route = route;
    }
    BarcodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            return _this.company = params['company'];
        });
        this.http.get('fetchBarCodes?company=' + this.company).subscribe(function (data) {
            //alert(data);
            _this.barcodes = data;
            console.log(_this.barcodes);
        });
    };
    BarcodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-barcode',
            template: __webpack_require__("../../../../../src/app/barcode/barcode.component.html"),
            styles: [__webpack_require__("../../../../../src/app/barcode/barcode.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], BarcodeComponent);
    return BarcodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n   \n\n    <section class=\"jumbotron text-center\">\n      <div class=\"container\">\n        <h1 class=\"jumbotron-heading\">Dashboard Page</h1>\n        <p class=\"lead text-muted\">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>\n        \n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/\">Home<small>(Site layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/about\">About<small>(Site layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/login\">Login Page<small>(No layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/register\">Register Page<small>(No layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard<small>(App layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/profile\">Profile<small>(App layout)</small></a>\n          </li>\n        </ul>\n      </div>\n    </section>\n\n    <div class=\"album text-muted\">\n      <div class=\"container\">\n\n        <div class=\"row\">\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n<style>\n.album {\n  min-height: 50rem; /* Can be removed; just added for demo purposes */\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  background-color: #f7f7f7;\n}\n\n.card {\n  float: left;\n  width: 33.333%;\n  padding: .75rem;\n  margin-bottom: 2rem;\n  border: 0;\n}\n\n.card > img {\n  margin-bottom: .75rem;\n}\n\n.card-text {\n  font-size: 85%;\n}\n  </style>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hello.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HelloComponent.prototype, "name", void 0);
    HelloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hello',
            template: "<h1>Hello {{name}}!</h1>",
            styles: ["h1 { font-family: Lato; }"]
        })
    ], HelloComponent);
    return HelloComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-secondary {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- Main jumbotron for a primary marketing message or call to action -->\n    <div class=\"jumbotron\">\n      <div class=\"container\">\n        <h1 class=\"display-3\">Your Favorite Barcodes Here....</h1>\n        <p>Help yourselves to a host of barcodes for {{comp.name}} that you can just scan from the comfort of your home and earn shopkick points. It's that easy !!! </p>\n        <p><a class=\"btn btn-primary btn-lg\" (click)=\"howItWorks()\" role=\"button\">Learn more &raquo;</a></p>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <!-- Example row of columns -->\n      <div class=\"row\">\n        <div class=\"col-md-4\" *ngFor=\"let comp of company\">\n            <h2>{{comp.name}}</h2>\n            <p>{{comp.description}}</p>\n            <!-- <p>{{comp.imageUrl}}</p> -->\n            <img src = \"{{comp.imageUrl}}\" width=\"200\" height=\"200\">\n          <p><a (click)=\"showAllBarcodes(comp.name)\" class=\"btn btn-secondary\"  role=\"button\">View all barcodes &raquo;</a></p>\n        </div>\n        <!-- <div class=\"col-md-4\">\n          <h2>Most Popular</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n       </div>\n        <div class=\"col-md-4\">\n          <h2>Most Popular</h2>\n          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n        </div> -->\n      </div>\n\n      <!-- <div class=\"container\" *ngFor=\"let comp of company\">\n          <div class=\"row\">\n            <div class=\"col-md-4\" class=\"row\"> \n              <h2>{{comp.name}}</h2>\n              <p>{{comp.description}}</p>\n               <p>{{comp.imageUrl}}</p> \n              <img src = \"{{comp.imageUrl}}\" width=\"200\" height=\"200\">\n              <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View all Barcodes &raquo;</a></p>\n            </div>\n          </div>\n      </div> -->\n    <!-- </div> -->\n      \n\n\n\n      <hr>\n\n      \n    </div> <!-- /container -->\n    "

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //alert('In ng init');
        this.http.get('/company').subscribe(function (data) {
            //alert(data);
            _this.company = data;
            //alert(this.company.imageUrl);
        });
    };
    HomeComponent.prototype.showAllBarcodes = function (company) {
        //alert(company);
        //this.router.navigateByUrl(['/barcode', {"company":company}]);
        //this.router.navigateByUrl('/barcode;company=Walmart');
        this.router.navigate(['barcode', { "company": company }], { relativeTo: this.route }).then(function (nav) {
            console.log(nav); // true if navigation is successful
            console.log('success');
        }, function (err) {
            console.log(err); // when there's an error
            console.log('failure');
        });
    };
    HomeComponent.prototype.howItWorks = function () {
        this.router.navigate(['about']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n      <form class=\"form-signin\">\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\">Sign in</button>\n\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/\">Home<small>(Site layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/about\">About<small>(Site layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/login\">Login Page<small>(No layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/register\">Register Page<small>(No layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard<small>(App layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/profile\">Profile<small>(App layout)</small></a>\n          </li>\n        </ul>\n      </form>\n\n    </div> <!-- /container -->\n<style>\n.form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px;\n}\n.form-signin .checkbox {\n  font-weight: normal;\n}\n.form-signin .form-control {\n  position: relative;\n  height: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n</style>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n   \n\n    <section class=\"jumbotron text-center\">\n      <div class=\"container\">\n        <h1 class=\"jumbotron-heading\">Profile Page</h1>\n        <p class=\"lead text-muted\">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>\n        \n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/\">Home<small>(Site layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/about\">About<small>(Site layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/login\">Login Page<small>(No layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/register\">Register Page<small>(No layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard<small>(App layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/profile\">Profile<small>(App layout)</small></a>\n          </li>\n        </ul>\n      </div>\n    </section>\n\n    <div class=\"album text-muted\">\n      <div class=\"container\">\n\n        <div class=\"row\">\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n          <div class=\"card\">\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n<style>\n.album {\n  min-height: 50rem; /* Can be removed; just added for demo purposes */\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  background-color: #f7f7f7;\n}\n\n.card {\n  float: left;\n  width: 33.333%;\n  padding: .75rem;\n  margin-bottom: 2rem;\n  border: 0;\n}\n\n.card > img {\n  margin-bottom: .75rem;\n}\n\n.card-text {\n  font-size: 85%;\n}\n  </style>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n      <form class=\"form-signin\">\n        <h2 class=\"form-signin-heading\">Create Acount</h2>\n        <label for=\"inputEmail\" class=\"sr-only\">Name</label>\n        <input type=\"email\" id=\"inputName\" class=\"form-control\" placeholder=\"Name\" required autofocus>\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n        <label for=\"inputCPassword\" class=\"sr-only\">Confirm Password</label>\n        <input type=\"password\" id=\"inputCPassword\" class=\"form-control\" placeholder=\"Confirm Password\" required>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\">Sign up</button>\n\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/\">Home<small>(Site layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/about\">About<small>(Site layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/login\">Login Page<small>(No layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/register\">Register Page<small>(No layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard<small>(App layout)</small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/profile\">Profile<small>(App layout)</small></a>\n          </li>\n        </ul>\n      </form>\n\n    </div> <!-- /container -->\n<style>\n.form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px;\n}\n.form-signin .checkbox {\n  font-weight: normal;\n}\n.form-signin .form-control {\n  position: relative;\n  height: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n</style>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(function (err) { return console.error(err); });


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`. 


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map