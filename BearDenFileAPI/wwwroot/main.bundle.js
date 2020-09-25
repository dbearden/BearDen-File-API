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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav-header [title]=\"title\"></nav-header>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'BearDen File API';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_header_component__ = __webpack_require__("../../../../../src/app/nav-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__file_list_component__ = __webpack_require__("../../../../../src/app/file-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__file_details_component__ = __webpack_require__("../../../../../src/app/file-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'Files', component: __WEBPACK_IMPORTED_MODULE_11__file_list_component__["a" /* FileListComponent */] },
    { path: 'Details/:fileId', component: __WEBPACK_IMPORTED_MODULE_12__file_details_component__["b" /* FileDetailsComponent */] },
    { path: '', redirectTo: '/Files', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__nav_header_component__["a" /* NavHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__file_list_component__["a" /* FileListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__file_details_component__["b" /* FileDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__file_details_component__["a" /* EditDialog */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__file_details_component__["a" /* EditDialog */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/edit-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit</h2>\r\n<mat-dialog-content><input #file type=\"file\" /></mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <a mat-raised-button mat-dialog-close (click)=\"onClick(file)\">Submit</a>\r\n  \r\n  <button mat-raised-button mat-dialog-close>Cancel</button>\r\n</mat-dialog-actions>\r\n\r\n\r\n  \r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/file-details.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>{{file.filename}}</mat-card-title>\r\n  <mat-card-content>\r\n    <mat-list>\r\n      <mat-list-item>Size: {{file.size}}</mat-list-item>\r\n      <mat-list-item>Uploaded: {{file.uploaded}}</mat-list-item>\r\n      <mat-list-item>Modified: {{file.modified}}</mat-list-item>\r\n      <mat-list-item>Owner: {{file.owner}}</mat-list-item>\r\n    </mat-list>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <a mat-raised-button color=\"primary\" href=\"/api/Files/Download/{{file.fileId}}\" download=\"{{file.filename}}\">Download</a>\r\n    <a mat-raised-button (click)=\"edit()\">Edit</a>\r\n\r\n    <a mat-raised-button color=\"warn\" (click)=\"delete()\">Delete</a>\r\n\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/file-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FileDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileDetailsComponent = /** @class */ (function () {
    function FileDetailsComponent(http, route, router, dialog) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
    }
    FileDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var fileId = this.route.snapshot.paramMap.get('fileId');
        console.log(fileId);
        this.http.get("/api/Files/" + fileId).subscribe(function (data) { return _this.file = data; });
    };
    FileDetailsComponent.prototype.edit = function () {
        var dialogRef = this.dialog.open(EditDialog, {
            width: '300px',
        });
        console.log("dialoging");
    };
    FileDetailsComponent.prototype.delete = function () {
        this.http.delete('/api/Files/' + this.file.fileId).subscribe();
        this.router.navigateByUrl("");
    };
    FileDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/file-details.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["a" /* MatDialog */]])
    ], FileDetailsComponent);
    return FileDetailsComponent;
}());

var EditDialog = /** @class */ (function () {
    function EditDialog(dialogRef, http) {
        this.dialogRef = dialogRef;
        this.http = http;
    }
    EditDialog.prototype.onClick = function (file) {
        var f = file.files[0];
        this.http.put('/api/Files/' + f.name, f, { reportProgress: true, observe: 'events' }).subscribe(function (event) {
            console.log(event);
        });
    };
    EditDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    EditDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({ template: __webpack_require__("../../../../../src/app/edit-dialog.component.html") }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["c" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], EditDialog);
    return EditDialog;
}());



/***/ }),

/***/ "../../../../../src/app/file-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table [dataSource]=\"myDataSource\">\r\n  <ng-container matColumnDef=\"filename\">\r\n    <mat-header-cell *matHeaderCellDef> Filename </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let file\"> <a [routerLink]=\"['/Details', file.fileId]\" >{{file.filename}} </a></mat-cell>\r\n    \r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"size\">\r\n    <mat-header-cell *matHeaderCellDef> Size </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let file\"> {{file.size}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"modified\">\r\n    <mat-header-cell *matHeaderCellDef> Last Modified </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let file\"> {{file.modified}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"['filename', 'size', 'modified']\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let myRowData; columns: ['filename', 'size', 'modified']\"></mat-row>\r\n\r\n</mat-table>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/file-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileListComponent = /** @class */ (function () {
    function FileListComponent(httpClient) {
        this.httpClient = httpClient;
        this.myDataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatTableDataSource */]();
    }
    FileListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get("/api/Files").subscribe(function (data) { return _this.myDataSource.data = data; });
    };
    FileListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/file-list.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], FileListComponent);
    return FileListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav-header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <a mat-button routerLink=\"\" routerLinkActive=\"active\">{{title}}</a>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "../../../../../src/app/nav-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavHeaderComponent; });
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

var NavHeaderComponent = /** @class */ (function () {
    function NavHeaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NavHeaderComponent.prototype, "title", void 0);
    NavHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nav-header',
            template: __webpack_require__("../../../../../src/app/nav-header.component.html")
        })
    ], NavHeaderComponent);
    return NavHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map