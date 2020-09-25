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
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var dialog_1 = require("@angular/material/dialog");
require("rxjs/add/operator/switchMap");
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
        core_1.Component({
            templateUrl: './file-details.component.html'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.ActivatedRoute,
            router_1.Router,
            dialog_1.MatDialog])
    ], FileDetailsComponent);
    return FileDetailsComponent;
}());
exports.FileDetailsComponent = FileDetailsComponent;
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
        core_1.Component({ templateUrl: './edit-dialog.component.html' }),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, http_1.HttpClient])
    ], EditDialog);
    return EditDialog;
}());
exports.EditDialog = EditDialog;
//# sourceMappingURL=file-details.component.js.map