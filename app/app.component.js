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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.listItems = [
            { text: "All Products", value: 1, groupText: "Product", groupCode: "01" },
            { text: "MLPA", value: 2, groupText: "Product", groupCode: "01" },
            { text: "PIA", value: 3, groupText: "Product", groupCode: "01" },
            { text: "All Segments", value: 11, groupText: "Segments", groupCode: "02" },
            { text: "PA", value: 12, groupText: "Segments", groupCode: "02" },
            { text: "SPA", value: 13, groupText: "Segments", groupCode: "02" }
        ];
        this.selectedValue = 2;
        this.list_Items = ['Baseball', 'Basketball', 'Cricket', 'Field Hockey', 'Football', 'Table Tennis', 'Tennis', 'Volleyball'];
        this.value = ['Baseball'];
    }
    AppComponent.prototype.onButtonClick = function () {
        alert('Hello from Kendo UI!');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styleUrls: [
                // load the default theme
                '../node_modules/@telerik/kendo-theme-default/dist/all.css'
            ],
            template: "\n      <h1>My First Kendo UI Angular 2 App</h1>\n      <button kendoButton (click)=\"onButtonClick()\" [primary]=\"true\">\n        My Kendo UI Button\n      </button>\n <div class=\"example-config\">\n      Current value: {{value | json}}\n    </div>\n    <div class=\"example-wrapper\">\n      <p>Favorite sport:</p>\n<form class=\"from-inline\">\n      <kendo-multiselect [data]=\"listItems\" \n            [textField]=\"'text'\"\n            [valueField]=\"'value'\"\n            [valuePrimitive]=\"true\">\n        <template kendoDropDownListItemTemplate let-dataItem>\n                <div class=\"row\">\n                    <div class=\"col-md-10\">{{dataItem.text}}</div>\n                    <div class=\"col-md-2\"> <span class=\"label label-default\">{{dataItem.groupText}}</span></div>\n                </div>\n        </template>\n</kendo-multiselect>\n</form>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map