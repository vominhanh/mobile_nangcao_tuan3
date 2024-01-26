"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetail_1 = require("./OrderDetail");
var Order = /** @class */ (function () {
    function Order(orderID, orderDate, count) {
        this._lineItems = [];
        this._orderID = orderID;
        this._orderDate = orderDate;
        if (count != undefined) {
            this._count = count;
        }
    }
    Object.defineProperty(Order.prototype, "orderID", {
        get: function () {
            return this._orderID;
        },
        set: function (value) {
            this._orderID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "orderDate", {
        get: function () {
            return this._orderDate;
        },
        set: function (value) {
            this._orderDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "lineItems", {
        get: function () {
            return this._lineItems;
        },
        set: function (value) {
            this._lineItems = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (value) {
            this._count = value;
        },
        enumerable: false,
        configurable: true
    });
    Order.prototype.addLineItem = function (p, x) {
        this._lineItems.push(new OrderDetail_1.default(x, p));
    };
    return Order;
}());
exports.default = Order;
