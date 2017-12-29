'use strict';

console.log('**************es6-training*****************');


console.log('************************************************');
console.log('************** Arrow Functions *****************');
console.log('************************************************');

let getPrice = () => 5.99;
console.log(getPrice());

let getPriceWithParameter = count => count * 4.00;
console.log(getPriceWithParameter(2));

let getPriceWithMultipleParameter = (count, tax) => count * 4.00 * (1 + tax);
console.log(getPriceWithMultipleParameter(2, .07));

let getPriceComplex = (count, tax) => {
    let price = count * 4.00;
    price *= (1 + tax);
    return price;
};
console.log(getPriceComplex(2, 0.7));

/*
document.addEventListener('click', function() {
    console.log(this);
})
*/

document.addEventListener('click', () => console.log(this));

var invoice = {
    number: 123,
    process: function () {
        return () => console.log(this.number);
    }
};

invoice.process()();

var newInvoice = {
    number: 456
};

invoice.process().bind(newInvoice)(); // you cannot bind an object with Arrow function i.e with arrow functin we cannot change the value of this
invoice.process().call(newInvoice); // you cannot bind an object with Arrow function i.e with arrow functin we cannot change the value of this


console.log('******************************************************************');
console.log('************** Default Function parameters *****************');
console.log('******************************************************************');

var getProduct = function (productId = 1000, type = 'software') {
    console.log(`${productId} , ${type}`);
};

getProduct();
getProduct(undefined, 'hardware');
getProduct(null, 'hardware');

var getTotal = function (price, tax = price * 0.07) {
    console.log(price + tax);
};
getTotal(5.00);

var generateBaseTax = () => 0.07;
var getTotalNew = function (price, tax = price * generateBaseTax()) {
    console.log(price + tax);
}
getTotalNew(5.00);

console.log('******************************************************************');
console.log('************** Rest and Spread *****************');
console.log('******************************************************************');

console.log('************** Rest operator *****************');
var showCategories = function (productId, ...categories) {
    console.log(categories);
}

showCategories(123, 'search', 'advertising');
showCategories(123);

console.log('************** Spread operator *****************');

var prices = [12, 20, 18];
var maxPrice = Math.max(...prices);
console.log(maxPrice);

var maxCode = Math.max(..."43210");
console.log(maxCode);

var truth = [..."jacobCannotDoJavascript"];
console.log(truth);

var codeArray = ["A", ..."BCD", "E"];
console.log(codeArray);

console.log('******************************************************************');
console.log('************** Destructuring *****************');
console.log('******************************************************************');

let salary = ['32000', '50000', '75000'];
let [low, average, high] = salary;
console.log(average);

console.log('------- Skip elements -------');
let [low1, , high1] = salary;
console.log(high1);

console.log('------- with spread operator -------');
let [low2, ...remaining] = salary;
console.log(low2);
console.log(remaining);

console.log('------- with nested array -------');
let salary1 = ['32000', '50000', ['88000', '99000']];
let [low3, average3, [actualLow, actualHigh]] = salary1;
console.log(actualLow);

console.log('------- inside function -------');

function reviewSalary([low, average], high = '88000') {
    console.log(average);
}

reviewSalary(['32000', '50000']);

console.log('------- destructuring objects -------');
let salaryObject = {
    lowObj: '32000',
    averageObj: '32000',
    highObj: '75000'
}
let {lowObj, averageObj, highObj} = salaryObject;
console.log(highObj);

let {lowObj: low4, averageObj: average4, highObj: high4} = salaryObject;
console.log(high4);

