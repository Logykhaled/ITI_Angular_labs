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
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.creditAmount = function () { };
    ;
    Account.prototype.debitAmount = function () { };
    ;
    return Account;
}());
var Saving_Account = /** @class */ (function (_super) {
    __extends(Saving_Account, _super);
    function Saving_Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Saving_Account.prototype.addCutomer = function () {
        throw new Error("Method not implemented.");
    };
    Saving_Account.prototype.removeCustomer = function () {
        throw new Error("Method not implemented.");
    };
    return Saving_Account;
}(Account));
var Current_Acount = /** @class */ (function (_super) {
    __extends(Current_Acount, _super);
    function Current_Acount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Current_Acount.prototype.addCutomer = function () {
        throw new Error("Method not implemented.");
    };
    Current_Acount.prototype.removeCustomer = function () {
        throw new Error("Method not implemented.");
    };
    return Current_Acount;
}(Account));
