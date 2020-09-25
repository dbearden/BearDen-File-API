"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var card_1 = require("@angular/material/card");
var list_1 = require("@angular/material/list");
var dialog_1 = require("@angular/material/dialog");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var nav_header_component_1 = require("./nav-header.component");
var file_list_component_1 = require("./file-list.component");
var file_details_component_1 = require("./file-details.component");
var file_details_component_2 = require("./file-details.component");
var appRoutes = [
    { path: 'Files', component: file_list_component_1.FileListComponent },
    { path: 'Details/:fileId', component: file_details_component_1.FileDetailsComponent },
    { path: '', redirectTo: '/Files', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_header_component_1.NavHeaderComponent,
                file_list_component_1.FileListComponent,
                file_details_component_1.FileDetailsComponent,
                file_details_component_2.EditDialog
            ],
            imports: [
                platform_browser_1.BrowserModule,
                material_1.MatToolbarModule,
                material_1.MatButtonModule,
                material_1.MatTableModule,
                http_1.HttpClientModule,
                card_1.MatCardModule,
                list_1.MatListModule,
                dialog_1.MatDialogModule,
                animations_1.BrowserAnimationsModule,
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            entryComponents: [
                file_details_component_2.EditDialog
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map