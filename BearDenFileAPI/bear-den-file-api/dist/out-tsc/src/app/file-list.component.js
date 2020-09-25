"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var http_1 = require("@angular/common/http");
var FileListComponent = /** @class */ (function () {
    function FileListComponent(httpClient) {
        this.httpClient = httpClient;
        this.myDataSource = new material_1.MatTableDataSource();
    }
    FileListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get("/api/Files").subscribe(function (data) { return _this.myDataSource.data = data; });
    };
    FileListComponent = __decorate([
        core_1.Component({
            templateUrl: './file-list.component.html'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FileListComponent);
    return FileListComponent;
}());
exports.FileListComponent = FileListComponent;
//# sourceMappingURL=file-list.component.js.map