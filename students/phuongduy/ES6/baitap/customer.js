var customer = /** @class */ (function () {
    function customer(firstName, lastName) {
        this.Name = firstName + "  " + lastName;
    }
    customer.prototype.GetName = function () {
        return "Hello, " + this.Name;
    };
    return customer;
}());
var cust = new customer("Jimi", "Scott");
