"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceBook = void 0;
var book_1 = require("./book");
var ReferenceBook = /** @class */ (function (_super) {
    __extends(ReferenceBook, _super);
    function ReferenceBook(id, date, price, quantity, author, tax) {
        var _this = _super.call(this, id, date, price, quantity, author) || this;
        _this._tax = tax;
        return _this;
    }
    Object.defineProperty(ReferenceBook.prototype, "tax", {
        get: function () {
            return this._tax;
        },
        set: function (value) {
            this._tax = value;
        },
        enumerable: false,
        configurable: true
    });
    ReferenceBook.prototype.totalPrice = function () {
        return this.price * this.quantity + this._tax;
    };
    return ReferenceBook;
}(book_1.Book));
exports.ReferenceBook = ReferenceBook;
