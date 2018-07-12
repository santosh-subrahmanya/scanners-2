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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AppHeaderComponent = class AppHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/_layout/app-header/app-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_layout/app-header/app-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppHeaderComponent);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AppLayoutComponent = class AppLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-app-layout',
        template: __webpack_require__("../../../../../src/app/_layout/app-layout/app-layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_layout/app-layout/app-layout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppLayoutComponent);



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

module.exports = "<div class=\"container\">\n      <footer>\n        <p>&copy; Shopkick Barcodes 2018</p>\n      </footer>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/_layout/site-footer/site-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let SiteFooterComponent = class SiteFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
SiteFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'site-footer',
        template: __webpack_require__("../../../../../src/app/_layout/site-footer/site-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_layout/site-footer/site-footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SiteFooterComponent);



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

module.exports = " <nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\" title=\"This Header is rendered by /app/_layout/site-header/site-header.component.html\">\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      \n\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Shopkick Barcodes</a></li>\n      \n          <!-- <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/\">Home<small></small></a> \n          </li> -->\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/about\">How it works<small></small></a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/login\">Login Page<small></small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/register\">Register Page<small></small></a>\n          </li> \n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard<small></small></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/profile\">Profile<small></small></a> \n          </li> -->\n        </ul>\n      </div>\n    </nav>"

/***/ }),

/***/ "../../../../../src/app/_layout/site-header/site-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let SiteHeaderComponent = class SiteHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
SiteHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'site-header',
        template: __webpack_require__("../../../../../src/app/_layout/site-header/site-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_layout/site-header/site-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SiteHeaderComponent);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let SiteLayoutComponent = class SiteLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
SiteLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-site-layout',
        template: __webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SiteLayoutComponent);



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

module.exports = "    <!-- Main jumbotron for a primary marketing message or call to action -->\n    <div class=\"jumbotron\">\n      <div class=\"container\">\n        <h1 class=\"display-3\">How it works  </h1>\n        <p>\n          Want to earn Shopkick points by not walking to the stores to scan and upload products info to Shopkick? \n         Someone has just made your job easier by scanning and uploading barcodes for products across\n         all your favorite shopping destinations. All you have to do is select your store and the product category and \n         start using the barcodes to scan and upload to shopkick to earn shopkick points.\n          \n        </p>\n        <p><a (click)=\"home()\" class=\"btn btn-primary btn-lg\" role=\"button\">Search Barcodes &raquo;</a></p>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <!-- Example row of columns -->\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n        </div>\n        <div class=\"col-md-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n       </div>\n        <div class=\"col-md-4\">\n          <h2>Heading</h2>\n          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n        </div>\n      </div>\n\n      <hr>\n\n      \n    </div> <!-- /container -->\n    "

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AboutComponent = class AboutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    home() {
        this.router.navigate(['']);
    }
};
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
], AboutComponent);



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-secondary {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n}\n\n.card[_ngcontent-c5] {\n    width: 700px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"utf-8\" />\n  <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"../assets/img/apple-icon.png\">\n  <link rel=\"icon\" type=\"image/png\" href=\"../assets/img/favicon.png\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\" />\n  <title>\n    Material Dashboard by Creative Tim\n  </title>\n  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />\n  <!--     Fonts and icons     -->\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons\" />\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css\">\n  <!-- CSS Files -->\n  <link href=\"../assets/css/material-dashboard.css?v=2.1.0\" rel=\"stylesheet\" />\n  <!-- CSS Just for demo purpose, don't include it in your project -->\n  <link href=\"../assets/demo/demo.css\" rel=\"stylesheet\" />\n</head>\n\n<body class=\"\">\n  <div class=\"wrapper \">\n    <div class=\"sidebar\" data-color=\"purple\" data-background-color=\"white\" data-image=\"../assets/img/sidebar-1.jpg\">\n      <!--\n        Tip 1: You can change the color of the sidebar using: data-color=\"purple | azure | green | orange | danger\"\n\n        Tip 2: you can also add an image using data-image tag\n    -->\n      <div class=\"logo\">\n        <a href=\"http://www.creative-tim.com\" class=\"simple-text logo-normal\">\n          Creative Tim\n        </a>\n      </div>\n      <div class=\"sidebar-wrapper\">\n        <ul class=\"nav\">\n          <li class=\"nav-item active  \">\n            <a class=\"nav-link\" href=\"#\" (click)=\"showAllStores()\">\n              <i class=\"material-icons\">stores</i>\n              <p>Stores</p>\n            </a>\n          </li>\n          <!-- <li class=\"nav-item \">\n            <a class=\"nav-link\" href=\"#\">\n              <i class=\"material-icons\">person</i>\n              <p>User Profile</p>\n            </a>\n          </li> -->\n          <!-- <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" (click)=\"showAllStores()\">\n              <i class=\"material-icons\">content_paste</i>\n              <p>Stores</p>\n            </a>\n          </li> -->\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" (click)=\"showProducts()\">\n              <i class=\"material-icons\">library_books</i>\n              <p>Products and Barcodes</p>\n            </a>\n          </li>\n          <li class=\"nav-item \">\n            <a class=\"nav-link\" href=\"#\">\n              <i class=\"material-icons\">bubble_chart</i>\n              <p>Icons</p>\n            </a>\n          </li>\n          <!-- <li class=\"nav-item \">\n            <a class=\"nav-link\" href=\"./map.html\">\n              <i class=\"material-icons\">location_ons</i>\n              <p>Maps</p>\n            </a>\n          </li>\n          <li class=\"nav-item \">\n            <a class=\"nav-link\" href=\"./notifications.html\">\n              <i class=\"material-icons\">notifications</i>\n              <p>Notifications</p>\n            </a>\n          </li> -->\n          <!-- <li class=\"nav-item active-pro \">\n                <a class=\"nav-link\" href=\"./upgrade.html\">\n                    <i class=\"material-icons\">unarchive</i>\n                    <p>Upgrade to PRO</p>\n                </a>\n            </li> -->\n        </ul>\n      </div>\n    </div>\n    <div class=\"main-panel\">\n      <!-- Navbar -->\n      <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top \">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-wrapper\">\n            <a class=\"navbar-brand\" href=\"#pablo\">Dashboard</a>\n          </div>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n          </button>\n          <div class=\"collapse navbar-collapse justify-content-end\">\n            <form class=\"navbar-form\">\n              <div class=\"input-group no-border\">\n                <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                  <i class=\"material-icons\">search</i>\n                  <div class=\"ripple-container\"></div>\n                </button>\n              </div>\n            </form>\n            <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#pablo\">\n                  <i class=\"material-icons\">dashboard</i>\n                  <p class=\"d-lg-none d-md-block\">\n                    Stats\n                  </p>\n                </a>\n              </li>\n              <li class=\"nav-item dropdown\">\n                <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  <i class=\"material-icons\">notifications</i>\n                  <span class=\"notification\">5</span>\n                  <p class=\"d-lg-none d-md-block\">\n                    Some Actions\n                  </p>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                  <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                  <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                  <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                  <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                  <a class=\"dropdown-item\" href=\"#\">Another One</a>\n                </div>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#pablo\">\n                  <i class=\"material-icons\">person</i>\n                  <p class=\"d-lg-none d-md-block\">\n                    Account\n                  </p>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n      <!-- End Navbar -->\n      <div class=\"content\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <!-- <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                <!-- <div class=\"card-header card-header-warning card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"material-icons\">content_copy</i>\n                  </div>\n                  <p class=\"card-category\">Used Space</p>\n                  <h3 class=\"card-title\">49/50\n                    <small>GB</small>\n                  </h3>\n                </div> -->\n                <!-- <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    <i class=\"material-icons text-danger\">warning</i>\n                    <a href=\"#pablo\">Get More Space...</a>\n                  </div>\n                </div>\n              </div> -->\n            <!-- </div> --> \n            <!-- <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                <div class=\"card-header card-header-success card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"material-icons\">store</i>\n                  </div>\n                  <p class=\"card-category\">Revenue</p>\n                  <h3 class=\"card-title\">$34,245</h3>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    <i class=\"material-icons\">date_range</i> Last 24 Hours\n                  </div>\n                </div>\n              </div>\n            </div> -->\n            <!-- <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                <div class=\"card-header card-header-danger card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"material-icons\">info_outline</i>\n                  </div>\n                  <p class=\"card-category\">Fixed Issues</p>\n                  <h3 class=\"card-title\">75</h3>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    <i class=\"material-icons\">local_offer</i> Tracked from Github\n                  </div>\n                </div>\n              </div>\n            </div> -->\n            <!-- <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                <div class=\"card-header card-header-info card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </div>\n                  <p class=\"card-category\">Followers</p>\n                  <h3 class=\"card-title\">+245</h3>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    <i class=\"material-icons\">update</i> Just Updated\n                  </div>\n                </div>\n              </div>\n            </div> -->\n          <!-- </div> -->\n          <!-- <div class=\"row\">\n            <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                <div class=\"card-header card-header-success\">\n                  <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                </div>\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Daily Sales</h4>\n                  <p class=\"card-category\">\n                    <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55% </span> increase in today sales.</p>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                <div class=\"card-header card-header-warning\">\n                  <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\n                </div>\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Email Subscriptions</h4>\n                  <p class=\"card-category\">Last Campaign Performance</p>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                <div class=\"card-header card-header-danger\">\n                  <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n                </div>\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Completed Tasks</h4>\n                  <p class=\"card-category\">Last Campaign Performance</p>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div> -->\n          <div class=\"row\">\n            <!-- <div class=\"col-lg-6 col-md-12\">\n              <div class=\"card\">\n                <div class=\"card-header card-header-tabs card-header-primary\">\n                  <div class=\"nav-tabs-navigation\">\n                    <div class=\"nav-tabs-wrapper\">\n                      <span class=\"nav-tabs-title\">Tasks:</span>\n                      <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                        <li class=\"nav-item\">\n                          <a class=\"nav-link active\" href=\"#profile\" data-toggle=\"tab\">\n                            <i class=\"material-icons\">bug_report</i> Bugs\n                            <div class=\"ripple-container\"></div>\n                          </a>\n                        </li>\n                        <li class=\"nav-item\">\n                          <a class=\"nav-link\" href=\"#messages\" data-toggle=\"tab\">\n                            <i class=\"material-icons\">code</i> Website\n                            <div class=\"ripple-container\"></div>\n                          </a>\n                        </li>\n                        <li class=\"nav-item\">\n                          <a class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">\n                            <i class=\"material-icons\">cloud</i> Server\n                            <div class=\"ripple-container\"></div>\n                          </a>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"tab-content\">\n                    <div class=\"tab-pane active\" id=\"profile\">\n                      <table class=\"table\">\n                        <tbody>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                            </td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Create 4 Invisible User Experiences you Never Knew About</td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                    <div class=\"tab-pane\" id=\"messages\">\n                      <table class=\"table\">\n                        <tbody>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                            </td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                    <div class=\"tab-pane\" id=\"settings\">\n                      <table class=\"table\">\n                        <tbody>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                            </td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div> -->\n            <div class=\"col-lg-6 col-md-12\">\n              <div class=\"card\">\n                <div class=\"card-header card-header-warning\">\n                  <h4 class=\"card-title\">Stores</h4>\n                  <p class=\"card-category\">All available stores</p>\n                </div>\n                <div class=\"card-body table-responsive\">\n                  <table class=\"table table-hover\">\n                    <thead class=\"text-warning\">\n                      <!-- <th>ID</th> -->\n                      <th>Store Name</th>\n                      <th>Description</th>\n                      <th>Image</th>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>Walmart</td>\n                        <td>Walmart Store</td>\n                        <td>Niger</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div>\n                  <a class=\"btn btn-primary btn-lg\" style=\"color:ffa726\" href=\"#\" role=\"button\">Add Store</a>\n                </div>\n              </div>\n            </div>\n           \n          </div>\n        </div>\n      </div>\n      <!-- <footer class=\"footer\">\n        <div class=\"container-fluid\">\n          <nav class=\"float-left\">\n            <ul>\n              <li>\n                <a href=\"https://www.creative-tim.com\">\n                  Creative Tim\n                </a>\n              </li>\n              <li>\n                <a href=\"https://creative-tim.com/presentation\">\n                  About Us\n                </a>\n              </li>\n              <li>\n                <a href=\"http://blog.creative-tim.com\">\n                  Blog\n                </a>\n              </li>\n              <li>\n                <a href=\"https://www.creative-tim.com/license\">\n                  Licenses\n                </a>\n              </li>\n            </ul>\n          </nav>\n          <!-- <div class=\"copyright float-right\">\n            &copy;\n            <script>\n              document.write(new Date().getFullYear())\n            </script>, made with <i class=\"material-icons\">favorite</i> by\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n          </div> -->\n        </div> \n      <!-- </footer> --> \n    </div>\n  </div>\n  <!--   Core JS Files   -->\n  <script src=\"../assets/js/core/jquery.min.js\" type=\"text/javascript\"></script>\n  <script src=\"../assets/js/core/popper.min.js\" type=\"text/javascript\"></script>\n  <script src=\"../assets/js/core/bootstrap-material-design.min.js\" type=\"text/javascript\"></script>\n  <script src=\"../assets/js/plugins/perfect-scrollbar.jquery.min.js\"></script>\n  <!--  Google Maps Plugin    -->\n  <script src=\"https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE\"></script>\n  <!-- Chartist JS -->\n  <script src=\"../assets/js/plugins/chartist.min.js\"></script>\n  <!--  Notifications Plugin    -->\n  <script src=\"../assets/js/plugins/bootstrap-notify.js\"></script>\n  <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->\n  <script src=\"../assets/js/material-dashboard.min.js?v=2.1.0\" type=\"text/javascript\"></script>\n  <!-- Material Dashboard DEMO methods, don't include it in your project! -->\n  <script src=\"../assets/demo/demo.js\"></script>\n  <script>\n    $(document).ready(function() {\n      // Javascript method's body can be found in assets/js/demos.js\n      md.initDashboardPageCharts();\n\n    });\n  </script>\n  \n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {
//   Ng4FilesStatus,
//   Ng4FilesSelected
// } from './ng4-files';
let AdminComponent = class AdminComponent {
    constructor(http, route, companyService) {
        this.http = http;
        this.route = route;
        this.companyService = companyService;
        this.loading = false;
    }
    ngOnInit() {
        //alert('About to navigate to file upload');
        // Get all the stores and barcodes details
        //this.router.navigate(['file-upload']);
        this.companyService.getAllStores().subscribe(data => {
            this.loading = false;
            this.company = data;
        });
        ;
        console.log('Company list is :' + this.company);
    }
};
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */]])
], AdminComponent);



/***/ }),

/***/ "../../../../../src/app/admin/file/file-upload/file-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/file/file-upload/file-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div draggable=\"true\" ngClass=\"{{dragAreaClass}}\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center\" >\n        <a href=\"javascript:void(0)\" (click)=\"file.click()\" >\n          Click to browse \n        </a>\n        Or Drag & Drop to upload your files\n        <input type=\"file\" \n               #file \n               [multiple]=\"(maxFiles > 1)\"\n               (change) = \"onFileChange($event)\"\n               style=\"display:none\" />\n      </div>\n    </div>\n  \n  </div>\n  <div class=\"row error\" *ngIf=\"errors.length > 0\">    \n    <ul>\n      <li *ngFor=\"let err of errors\">{{err}}</li>\n    </ul>\n  </div>  "

/***/ }),

/***/ "../../../../../src/app/admin/file/file-upload/file-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let FileUploadComponent = class FileUploadComponent {
    constructor(fileService) {
        this.fileService = fileService;
        this.errors = [];
        this.dragAreaClass = 'dragarea';
        this.name = "";
        this.description = "";
        this.fileExt = "JPG, PNG";
        this.maxFiles = 5;
        this.maxSize = 5; // 5MB
        this.uploadStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ngOnInit() {
    }
    onFileChange(event) {
        let files = event.target.files;
        this.saveFiles(files);
    }
    onDragOver(event) {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    }
    onDragEnter(event) {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    }
    onDragEnd(event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    }
    onDragLeave(event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    }
    onDrop(event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
        event.stopPropagation();
        var files = event.dataTransfer.files;
        this.saveFiles(files);
    }
    saveFiles(files) {
        this.errors = []; // Clear error
        // Validate file size and allowed extensions
        if (files.length > 0 && (!this.isValidFiles(files))) {
            this.uploadStatus.emit(false);
            return;
        }
        if (files.length > 0) {
            let formData = new FormData();
            for (var j = 0; j < files.length; j++) {
                formData.append("file[]", files[j], files[j].name);
            }
            var parameters = {
                name: this.name,
                description: this.description
            };
            this.fileService.upload(formData, parameters)
                .subscribe(success => {
                this.uploadStatus.emit(true);
                console.log(success);
            }, error => {
                this.uploadStatus.emit(true);
                this.errors.push(error.ExceptionMessage);
            });
        }
    }
    isValidFiles(files) {
        // Check Number of files
        if (files.length > this.maxFiles) {
            this.errors.push("Error: At a time you can upload only " + this.maxFiles + " files");
            return;
        }
        this.isValidFileExtension(files);
        return this.errors.length === 0;
    }
    isValidFileExtension(files) {
        // Make array of file extensions
        var extensions = (this.fileExt.split(','))
            .map(function (x) { return x.toLocaleUpperCase().trim(); });
        for (var i = 0; i < files.length; i++) {
            // Get file extension
            var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
            // Check the extension exists
            var exists = extensions.includes(ext);
            if (!exists) {
                this.errors.push("Error (Extension): " + files[i].name);
            }
            // Check file size
            this.isValidFileSize(files[i]);
        }
    }
    isValidFileSize(file) {
        var fileSizeinMB = file.size / (1024 * 1000);
        var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
        if (size > this.maxSize)
            this.errors.push("Error (File Size): " + file.name + ": exceed file size limit of " + this.maxSize + "MB ( " + size + "MB )");
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FileUploadComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FileUploadComponent.prototype, "description", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FileUploadComponent.prototype, "fileExt", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], FileUploadComponent.prototype, "maxFiles", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], FileUploadComponent.prototype, "maxSize", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", Object)
], FileUploadComponent.prototype, "uploadStatus", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileUploadComponent.prototype, "onDragOver", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('dragenter', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileUploadComponent.prototype, "onDragEnter", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('dragend', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileUploadComponent.prototype, "onDragEnd", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileUploadComponent.prototype, "onDragLeave", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileUploadComponent.prototype, "onDrop", null);
FileUploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-file-upload',
        template: __webpack_require__("../../../../../src/app/admin/file/file-upload/file-upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/file/file-upload/file-upload.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]])
], FileUploadComponent);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.name = 'Angular 4';
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__ = __webpack_require__("../../../cdk/esm2015/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hello_component__ = __webpack_require__("../../../../../src/app/hello.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_app_layout_app_layout_component__ = __webpack_require__("../../../../../src/app/_layout/app-layout/app-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_site_layout_site_layout_component__ = __webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_app_header_app_header_component__ = __webpack_require__("../../../../../src/app/_layout/app-header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_site_header_site_header_component__ = __webpack_require__("../../../../../src/app/_layout/site-header/site-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layout_site_footer_site_footer_component__ = __webpack_require__("../../../../../src/app/_layout/site-footer/site-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__barcode_barcode_component__ = __webpack_require__("../../../../../src/app/barcode/barcode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_BarcodeFilter_pipe__ = __webpack_require__("../../../../../src/app/pipes/BarcodeFilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_barcode_service__ = __webpack_require__("../../../../../src/app/services/barcode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_Http__ = __webpack_require__("../../../Http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__helpers_jwt_interceptor__ = __webpack_require__("../../../../../src/app/helpers/jwt.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__helpers_fake_backend__ = __webpack_require__("../../../../../src/app/helpers/fake-backend.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__admin_file_file_upload_file_upload_component__ = __webpack_require__("../../../../../src/app/admin/file/file-upload/file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__["m" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["B" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["g" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["h" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["i" /* MatDividerModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["j" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["k" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["l" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["m" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["n" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["o" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["p" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["q" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["r" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["s" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["t" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["u" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["v" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["w" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["y" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["x" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["z" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["A" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["C" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["D" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["E" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material__["F" /* MatTooltipModule */],
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_18__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["c" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_21__angular_material__["v" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_24__angular_Http__["b" /* HttpModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__hello_component__["a" /* HelloComponent */], __WEBPACK_IMPORTED_MODULE_6__layout_app_layout_app_layout_component__["a" /* AppLayoutComponent */], __WEBPACK_IMPORTED_MODULE_7__layout_site_layout_site_layout_component__["a" /* SiteLayoutComponent */], __WEBPACK_IMPORTED_MODULE_8__layout_app_header_app_header_component__["a" /* AppHeaderComponent */], __WEBPACK_IMPORTED_MODULE_9__layout_site_header_site_header_component__["a" /* SiteHeaderComponent */], __WEBPACK_IMPORTED_MODULE_10__layout_site_footer_site_footer_component__["a" /* SiteFooterComponent */], __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_19__barcode_barcode_component__["a" /* BarcodeComponent */], __WEBPACK_IMPORTED_MODULE_22__pipes_BarcodeFilter_pipe__["a" /* BarcodeFilterPipe */], __WEBPACK_IMPORTED_MODULE_25__admin_admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_31__admin_file_file_upload_file_upload_component__["a" /* FileUploadComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_23__services_barcode_service__["a" /* BarcodeService */], __WEBPACK_IMPORTED_MODULE_26__auth_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_27__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_28__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_32__services_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_33__services_company_service__["a" /* CompanyService */], {
                provide: __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_29__helpers_jwt_interceptor__["a" /* JwtInterceptor */],
                multi: true
            },
            // providers used to create fake backend
            __WEBPACK_IMPORTED_MODULE_30__helpers_fake_backend__["a" /* fakeBackendProvider */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_19__barcode_barcode_component__["a" /* BarcodeComponent */]],
    })
], AppModule);



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_site_layout_site_layout_component__ = __webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_app_layout_app_layout_component__ = __webpack_require__("../../../../../src/app/_layout/app-layout/app-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__barcode_barcode_component__ = __webpack_require__("../../../../../src/app/barcode/barcode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_file_file_upload_file_upload_component__ = __webpack_require__("../../../../../src/app/admin/file/file-upload/file-upload.component.ts");













const appRoutes = [
    //Site routes goes here 
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__layout_site_layout_site_layout_component__["a" /* SiteLayoutComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] },
            { path: 'test/:id', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] },
            { path: 'barcode', component: __WEBPACK_IMPORTED_MODULE_9__barcode_barcode_component__["a" /* BarcodeComponent */], pathMatch: 'full' },
            { path: 'barcode/:company', component: __WEBPACK_IMPORTED_MODULE_9__barcode_barcode_component__["a" /* BarcodeComponent */], pathMatch: 'full' },
            { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_10__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_guard__["a" /* AuthGuard */]] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
            { path: 'file-upload', component: __WEBPACK_IMPORTED_MODULE_12__admin_file_file_upload_file_upload_component__["a" /* FileUploadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_guard__["a" /* AuthGuard */]] },
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
            { path: 'barcode/:company', component: __WEBPACK_IMPORTED_MODULE_9__barcode_barcode_component__["a" /* BarcodeComponent */] },
            { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_10__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_guard__["a" /* AuthGuard */]] },
            { path: 'file-upload', component: __WEBPACK_IMPORTED_MODULE_12__admin_file_file_upload_file_upload_component__["a" /* FileUploadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_guard__["a" /* AuthGuard */]] }
        ]
    },
    //no layout routes
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */] },
    { path: 'barcode/:company', component: __WEBPACK_IMPORTED_MODULE_9__barcode_barcode_component__["a" /* BarcodeComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_10__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'file-upload', component: __WEBPACK_IMPORTED_MODULE_12__admin_file_file_upload_file_upload_component__["a" /* FileUploadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_guard__["a" /* AuthGuard */]] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
const routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true, enableTracing: true });
/* harmony export (immutable) */ __webpack_exports__["a"] = routing;



/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        alert('Inside AuthGuard !!!!');
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in and hence redirect the user to the login page
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    }
};
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
], AuthGuard);



/***/ }),

/***/ "../../../../../src/app/barcode/barcode.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body { \n    font-family: Roboto, Arial, sans-serif;\n    margin: 0;\n    color:#449d44\n  }\n  \n  .basic-container {\n    padding: 30px;\n  }\n  \n  .version-info {\n    font-size: 8pt;\n    float: right;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/barcode/barcode.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\n\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <h1 class=\"display-3\">Barcodes for {{barcodes[0]?.company}}</h1>\n        <p>Help yourselves to a host of barcodes for {{barcodes[0]?.company}} that you can just scan from the comfort of your\n            home and earn shopkick points. It's that easy !!! </p>\n        <p>\n            <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more &raquo;</a>\n        </p>\n    </div>\n</div>\n\n\n    <div style=\"padding:20px\">\n        <mat-form-field>\n            <mat-select [(ngModel)]=\"selected\" name=\"cat\" placeholder=\"Choose Category\"  (change)=\"filterProducts($event)\">\n                <mat-option *ngFor=\"let cat of category\" [value]=\"cat\">{{ cat }}</mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n\n<div>\n    <!-- Example row of columns -->\n    <div class=\"row\">\n        <div *ngFor='let key of JSObject.keys(barcodes)'  style=\"width:350px; margin:0 auto;padding:10px\">\n            <div *ngIf='barcodes[key].archived == false'>\n                <h3>{{barcodes[key].productName}}</h3>\n                <p>{{barcodes[key].productDescription}}</p>\n                <img src=\"{{barcodes[key].productImageUrl}}\" width=\"300\" height=\"300\" style=\"padding:10px\"/>\n                <img src=\"{{barcodes[key].barcodeImageUrl}}\" width=\"300\" height=\"300\" style=\"padding:10px\"/>\n                <br/>\n            </div>\n        </div>\n    </div>\n\n\n    \n    <hr>\n</div>\n<!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/barcode/barcode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_barcode_service__ = __webpack_require__("../../../../../src/app/services/barcode.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let BarcodeComponent = class BarcodeComponent {
    constructor(http, route, barcodeService) {
        this.http = http;
        this.route = route;
        this.barcodeService = barcodeService;
        this.loading = false;
        this.JSObject = Object;
        this.category = [];
        this.categorySet = new Set();
        this.filterByCategory = "All";
        this.errorMessage = '';
    }
    getBarcodes(cat) {
        this.categorySet.add('All');
        this.route.params.subscribe(params => this.company = params['company']);
        this.barcodeService.getBarcodes(this.company, cat).subscribe(data => {
            this.loading = false;
            this.barcodes = data;
            console.log('Barcodes data is :' + this.barcodes);
            this.barcodes.forEach(element => {
                this.categorySet.add(element.productCategory);
            });
            this.category = Array.from(this.categorySet).sort();
            this.barcodes = data;
            console.log('Category is ' + this.category);
        });
    }
    filterProducts(category) {
        this.getBarcodes(category.value);
    }
    ngOnInit() {
        this.getBarcodes('All');
    }
};
BarcodeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-barcode',
        template: __webpack_require__("../../../../../src/app/barcode/barcode.component.html"),
        styles: [__webpack_require__("../../../../../src/app/barcode/barcode.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_barcode_service__["a" /* BarcodeService */]])
], BarcodeComponent);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "../../../../../src/app/hello.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let HelloComponent = class HelloComponent {
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], HelloComponent.prototype, "name", void 0);
HelloComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'hello',
        template: `<h1>Hello {{name}}!</h1>`,
        styles: [`h1 { font-family: Lato; }`]
    })
], HelloComponent);



/***/ }),

/***/ "../../../../../src/app/helpers/fake-backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FakeBackendInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fakeBackendProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm2015/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm2015/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_materialize__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_dematerialize__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/dematerialize.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let FakeBackendInterceptor = class FakeBackendInterceptor {
    constructor() { }
    intercept(request, next) {
        let testUser = { id: 1, username: 'admin', password: '@dmini$tr@tor', firstName: 'Admin', lastName: 'User' };
        // wrap in delayed observable to simulate server api call
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(null).mergeMap(() => {
            // authenticate
            if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
                if (request.body.username === testUser.username && request.body.password === testUser.password) {
                    // if login details are valid return 200 OK with a fake jwt token
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]({ status: 200, body: { token: 'fake-jwt-token' } }));
                }
                else {
                    // else return 400 bad request
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Username or password is incorrect');
                }
            }
            // get users
            if (request.url.endsWith('/api/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]({ status: 200, body: [testUser] }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Unauthorised');
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        })
            .materialize()
            .delay(500)
            .dematerialize();
    }
};
FakeBackendInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FakeBackendInterceptor);

let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "../../../../../src/app/helpers/jwt.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let JwtInterceptor = class JwtInterceptor {
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], JwtInterceptor);



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-secondary {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n}\n\n.btn.btn-primary {\n    color: #fff;\n    background-color: #9c27b0;\n    border-color: #9c27b0;\n    -webkit-box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- Main jumbotron for a primary marketing message or call to action -->\n    <div class=\"jumbotron\">\n      <div class=\"container\">\n        <h2 class=\"display-3\">Check out barcodes here.....</h2>\n        <p>Check out these barcodes that you can start scanning to earn shopkick points across all your favorite shopping destinations</p>\n        <p><a (click)=\"howItWorks()\" class=\"btn btn-primary btn-lg\"  role=\"button\">Learn more &raquo;</a></p>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <!-- Example row of columns -->\n      <div class=\"row\">\n        <div class=\"col-md-4\" *ngFor=\"let comp of company\">\n            <h3>{{comp.name}}</h3>\n            <!-- <p>{{comp.description}}</p> -->\n            <!-- <p>{{comp.imageUrl}}</p> -->\n            <img src = \"{{comp.imageUrl}}\" width=\"200\" height=\"200\">\n          <p><a (click)=\"showAllBarcodes(comp.name)\" class=\"btn.btn-primary\"  role=\"button\">View all barcodes &raquo;</a></p>\n        </div>\n        <!-- <div class=\"col-md-4\">\n          <h2>Most Popular</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n       </div>\n        <div class=\"col-md-4\">\n          <h2>Most Popular</h2>\n          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n        </div> -->\n      </div>\n\n      <!-- <div class=\"container\" *ngFor=\"let comp of company\">\n          <div class=\"row\">\n            <div class=\"col-md-4\" class=\"row\"> \n              <h2>{{comp.name}}</h2>\n              <p>{{comp.description}}</p>\n               <p>{{comp.imageUrl}}</p> \n              <img src = \"{{comp.imageUrl}}\" width=\"200\" height=\"200\">\n              <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View all Barcodes &raquo;</a></p>\n            </div>\n          </div>\n      </div> -->\n    <!-- </div> -->\n      \n\n\n\n      <hr>\n\n      \n    </div> <!-- /container -->\n    "

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HomeComponent = class HomeComponent {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        //alert('In ng init');
        this.http.get('/company').subscribe(data => {
            //alert(data);
            this.company = data;
            //alert(this.company.imageUrl);
        });
    }
    showAllBarcodes(company) {
        //alert(company);
        //this.router.navigateByUrl(['/barcode', {"company":company}]);
        //this.router.navigateByUrl('/barcode;company=Walmart');
        this.router.navigate(['barcode', { "company": company }], { relativeTo: this.route }).then(nav => {
            console.log(nav); // true if navigation is successful
            console.log('success');
        }, err => {
            console.log(err); // when there's an error
            console.log('failure');
        });
    }
    howItWorks() {
        //alert('In how it works');
        this.router.navigate(['about']);
    }
};
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
], HomeComponent);



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

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n  <div class=\"alert alert-info\">\n      Username: test<br />\n      Password: test\n  </div>\n  <h2>Login</h2>\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n          <label for=\"username\">Username</label>\n          <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n          <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n          <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n      </div>\n      <div class=\"form-group\">\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n      </div>\n      <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/first.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LoginComponent = class LoginComponent {
    constructor(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    ngOnInit() {
        alert('Logging out of the app !!!');
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .first()
            .subscribe(data => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
};
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
], LoginComponent);



/***/ }),

/***/ "../../../../../src/app/pipes/BarcodeFilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let BarcodeFilterPipe = class BarcodeFilterPipe {
    transform(input, args) {
        var output = [];
        for (var i = 0; i < input.length; i++) {
            if (input[i].productCategory === args) {
                output.push(input[i]);
            }
        }
        return output;
    }
};
BarcodeFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
        name: "BarcodeFilter",
        pure: false
    })
], BarcodeFilterPipe);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(username, password) {
        return this.http.post('/api/authenticate', { username: username, password: password })
            .map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    }
    logout() {
        // remove user from local storage to log user out
        alert('Logout method of AuthService');
        localStorage.removeItem('currentUser');
    }
};
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
], AuthService);



/***/ }),

/***/ "../../../../../src/app/services/barcode.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_Http__ = __webpack_require__("../../../Http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let BarcodeService = class BarcodeService {
    constructor(http) {
        this.http = http;
    }
    getBarcodes(company, category) {
        let apiURL = '/fetchBarCodes?company=' + company + '&category=' + category;
        return this.http
            .get(apiURL)
            .map((response) => {
            return response.json();
        })
            .catch(this.handleError);
        // return this.http.get(apiURL).map(res => { 
        //   return res.json().results.map(item => { 
        //     return new Barcode( 
        //         item._id,
        //         item.productCategory,
        //         item.productName,
        //         item.productDescription,
        //         item.productImageUrl,
        //         item.barcodeImageUrl,
        //         item.company
        //     );
        //   });
        // });
    }
    extractData(res) {
        const body = res.json();
        return body || [];
    }
    handleError(error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    }
};
BarcodeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_Http__["a" /* Http */]])
], BarcodeService);



/***/ }),

/***/ "../../../../../src/app/services/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_Http__ = __webpack_require__("../../../Http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm2015/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CompanyService = class CompanyService {
    constructor(http) {
        this.http = http;
    }
    getAllStores() {
        let apiURL = '/companyDetails';
        return this.http
            .get(apiURL)
            .map((response) => {
            return response.json();
        })
            .catch(this.handleError);
    }
    handleError(error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    }
};
CompanyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_Http__["a" /* Http */]])
], CompanyService);



/***/ }),

/***/ "../../../../../src/app/services/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm2015/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let FileService = class FileService {
    constructor(http) {
        this.http = http;
        this._baseURL = '/fileupload/';
    }
    upload(files, parameters) {
        //let headers = new Headers();
        // let options = new RequestOptions();
        // options.params = parameters;
        return this.http.post(this._baseURL + 'upload', files, parameters)
            .map(response => response)
            .catch(error => __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(error));
    }
    getImages() {
        return this.http.get(this._baseURL + "getimages")
            .map(response => response)
            .catch(error => __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(error));
    }
};
FileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]])
], FileService);



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get('/api/users');
    }
};
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
], UserService);



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(err => console.error(err));


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