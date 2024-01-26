"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
//Mã sách, ngày nhập, đơn giá, số lượng, nhà xuất bản
var Book = /** @class */ (function () {
    function Book(id, date, price, quantity, author) {
        this._id = id;
        this._date = date;
        this._price = price;
        this._quantity = quantity;
        this._author = author;
    }
    Object.defineProperty(Book.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        set: function (value) {
            this._quantity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (value) {
            this._author = value;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
exports.Book = Book;
