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

console.log('******************************************************************');
console.log('************** Modules & Classes *****************');
console.log('******************************************************************');

// import statement gets hoisted at the top of the file

class Project {
    getTaskCount() {
        return 50;
    }
}

class SoftwareProject extends Project {

    /*
        getTaskCount() {
            return 66;
        }
    */

    /*
        getTaskCount(){
            return super.getTaskCount() + 6;
        }
    */
}

let p = new SoftwareProject();
console.log(p.getTaskCount());


class NewProject {
    constructor() {
        this.location = 'Mazatlan';
    }
}

class NewSoftwareProject extends NewProject {
    constructor() {
        super();
    }
}

let newP = new NewSoftwareProject();
console.log(newP.location);

console.log('************** Static members in Classes *****************');

class StaticProject {
    static getDefaultId() {
        return 0;
    }

    static id = 10;
}

console.log(StaticProject.getDefaultId());
console.log(StaticProject.id);

console.log('******************************************************************');
console.log('************** new types & object extensions *****************');
console.log('******************************************************************');

console.log('************** Symbols *****************');

let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol);
console.log(eventSymbol.toString());

const CALCULATE_EVENT_SYMBOL = Symbol('calculate event');
console.log(CALCULATE_EVENT_SYMBOL.toString());

let s = Symbol('event');
let s2 = Symbol('event');
console.log(s === s2);

let s3 = Symbol.for('event');
console.log(s3.toString());

let s4 = Symbol.for('event');
console.log(s3 === s4);


let newSymbol = Symbol.for('newEvent');
let description = Symbol.keyFor(newSymbol);
console.log(description);

let article = {
    title: 'Whiteface Mountain',
    [Symbol.for('article')]: 'My Article'
}

let value = article[Symbol.for('article')];
console.log(value);

console.log('************** Object.assign *****************');

let a = {a: 1}, b = {a: 5, b: 2};
let target = {};

Object.assign(target, a, b);
console.log(target);

console.log('************** Object.is *****************');
let amount = NaN;
console.log(amount === amount);
console.log(Object.is(amount, amount));

console.log('************** String extensions *****************');
let title = "Santa Barbara Surf Riders";
console.log(title.startsWith('Santa'));
console.log(title.endsWith('Riders'));
console.log(title.includes('ba'));

var uniCodeString = "Jacob don't know javascript \u{1f3c4}";
console.log(uniCodeString);

var normalizeString = "Sa\u0301lim";
console.log(normalizeString + ' has length of = ' + normalizeString.normalize().length);

console.log('******************************************************************');
console.log('************** Iterators, Generators & Promises *****************');
console.log('******************************************************************');


console.log('************** Iterators *****************');

let ids = [9000, 9001, 9002];
console.log(typeof ids[Symbol.iterator]);

let myIterator = ids[Symbol.iterator]();
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());


let idMaker = {

    [Symbol.iterator]() {
        let nextId = 8000;

        return {
            next() {
                return {
                    value: nextId++,
                    done: false
                }
            }
        };
    }

}

let myIdMaker = idMaker[Symbol.iterator]();
console.log(myIdMaker.next());
console.log(myIdMaker.next());
console.log(myIdMaker.next());

console.log('----------------------------');
for (let v of idMaker) {
    if (v > 8002) break;
    console.log(v);
}

console.log('************** Generator *****************');

function* process() {
    yield "Jacob";
    yield "Forgot";
    yield "All About";
    yield "Javascript";
}

let mynewIterator = process();
console.log(mynewIterator.next());
console.log(mynewIterator.next());
console.log(mynewIterator.next());
console.log(mynewIterator.next());

function* newProcess() {
    let nextId = 7000;
    while (true)
        yield(nextId++);
}

let myOtherIterator = newProcess();
console.log(myOtherIterator.next().value);
console.log(myOtherIterator.next().value);
console.log(myOtherIterator.next().value);

console.log('----------------------------');

for (let id of newProcess()) {
    if (id > 7002) break;
    console.log(id);
}

console.log('************** Promises *****************');

function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in promise code');

        setTimeout(function () {
            console.log('resolving....');
            resolve('it is resolved');
        }, 2000);
    });
}

let promise = doAsync();

console.log('----------------------------');
doAsync().then(function (data) {
    console.log('Fullfilled!' + " " + data);
}, function () {
    console.log('Rejected!');
})


console.log('----------------------------');
doAsync()
    .then(function (data) {
        console.log('Fullfilled!' + " " + data);
        return 'For Sure';
    })
    .then(function (value) {
        console.log('Fullfilled Really!' + " " + value);
    })
    .catch(function (reason) {
        console.log('Error: ' + reason)
    });

function doAsyncNew() {
    return Promise.resolve('Some value');
}

doAsyncNew().then(function (value) {
        console.log('ok: ' + value)
    },
    function (reason) {
        console.log('Nope: ' + reason);
    })

























