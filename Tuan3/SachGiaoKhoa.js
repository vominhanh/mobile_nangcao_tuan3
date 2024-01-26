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
exports.TextBook = void 0;
var book_1 = require("./book");
var TextBook = /** @class */ (function (_super) {
    __extends(TextBook, _super);
    function TextBook(id, date, price, quantity, author, isNew) {
        var _this = _super.call(this, id, date, price, quantity, author) || this;
        _this._isNew = true;
        _this._isNew = isNew;
        return _this;
    }
    Object.defineProperty(TextBook.prototype, "isNew", {
        get: function () {
            return this._isNew;
        },
        set: function (value) {
            this._isNew = value;
        },
        enumerable: false,
        configurable: true
    });
    TextBook.prototype.totalPrice = function () {
        if (this.isNew) {
            return this.quantity * this.price;
        }
        else
            return this.quantity * this.price * 0.5;
    };
    return TextBook;
}(book_1.Book));
exports.TextBook = TextBook;
