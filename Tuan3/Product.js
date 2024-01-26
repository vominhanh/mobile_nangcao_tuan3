"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(description, productID, price) {
        if (description != undefined && productID != undefined && price != undefined) {
            this._description = description;
            this._productID = productID;
            this._price = price;
        }
    }
    Object.defineProperty(Product.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "productID", {
        get: function () {
            return this._productID;
        },
        set: function (value) {
            this._productID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.default = Product;
