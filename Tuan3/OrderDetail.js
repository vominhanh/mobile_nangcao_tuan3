"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetail = /** @class */ (function () {
    function OrderDetail(quality, product) {
        this._quality = quality;
        this._product = product;
    }
    Object.defineProperty(OrderDetail.prototype, "quality", {
        get: function () {
            return this._quality;
        },
        set: function (value) {
            this._quality = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetail.prototype, "product", {
        get: function () {
            return this._product;
        },
        set: function (value) {
            this._product = value;
        },
        enumerable: false,
        configurable: true
    });
    OrderDetail.prototype.calcTotalPrice = function () {
        return this._quality * this._product.price;
    };
    return OrderDetail;
}());
exports.default = OrderDetail;
