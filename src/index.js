import './css/main.css'
import './scss/main.scss'
import {sup} from "./js/module";
import {hello} from "./js/hello";
import {buildUser, countdownTimer, displayTags, loadProfiles} from "./js/about";
import FlashMessage from './js/flash-message';

hello()
sup()
loadProfiles(['sa', 'be'])

displayTags('someTargetElement', ['a', 'b', 'c'])

console.log('********Object destructuring********')

let {first, last, fullName, isActive} = buildUser('salim', 'belim', 11);
console.log(first);
console.log(last);
console.log(fullName);
console.log(isActive());

console.log('****CountDown Timer****');
let options = {
    container: '.my-container',
    someoptions: 'someoptions'
};
countdownTimer('target', '60 seconds', options);

console.log('****Array destructuring****');
let users = ["Sal", "Bel", "Salim", "Belim"];
let [a, b, c] = users;
console.log(a, b, c);

console.log('***** Array destructuring with REST parameters*****');
let [firstParameter, ...restParameters] = users;
console.log(firstParameter, restParameters);

console.log('***** for...of to Loop Arrays *****');
let names = ["Salim", "Belim", "Sam"];
for (let index in names) {
    console.log(names[index]);
}

for (let name of names) {
    console.log(name);
}

console.log('***** Array.find *****');
let myUsers = [
    {login: "Sam", admin: false},
    {login: "Salim", admin: true},
    {login: "Belim", admin: true}
];

let admin = myUsers.find(user => user.admin);
console.log(admin);

console.log('***** Maps *****');
let user1 = {name: "Sam"};
let user2 = {name: "Tyler"};
let totalReplies = new Map();
totalReplies.set(user1, 5);
totalReplies.set(user2, 42);

console.log(totalReplies.get(user1));
console.log(totalReplies.get(user2));

let mapSettings = new Map();
mapSettings.set("user", "Sam");
mapSettings.set("topic", "ES2015");
mapSettings.set("replies", ["Can't wait", "So Cool"]);

for (let [key, value] of mapSettings) {
    console.log(`${key} = ${value}`);
}

console.log('***** Sets *****');
let tags = new Set();
tags.add("Javascript");
tags.add("Programming");
tags.add({version: "2015"});
tags.add("Web");
tags.add("Web");

console.log("Total items", tags.size);
console.log("**** For of with tags****");

for (let tag of tags) {
    console.log(tag);
}

console.log(...tags);

console.log('***** Classes *****');

class Widget {

    constructor() {
        this.baseCSS = "site-widget";
    }

    parse(value) {
        console.log('super class parse method');
        return '<super> ==> ' + value;
    }
}

class SponsorWidget extends Widget {

    constructor(name, description, url) {
        super();
        this.name = name;
        this.description = description;
        this.url = url;
    }

    render() {
        let link = this._buildLink(this.url);
        let css = this.baseCSS;
        return `css is : ${css} and the link is: ${link}`;
    }

    parse() {
        let parseName = super.parse(this.name);
        return `Sponsor: ${parseName}`;
    }

    _buildLink(url) {
        return `someurl : ${url}`;
    }
}

let sponsorWidget = new SponsorWidget("mywidget", "my widget description", "http://www.mywidget.com/");
console.log(sponsorWidget.render());
console.log(sponsorWidget.parse());

console.log('****** export class as module*******');
let flashMessage = new FlashMessage('some message');
flashMessage.renderAlert();
flashMessage.renderLog();

console.log('****** custom iterator ******');
let post = {
    title: "New features in JS",
    replies: 19
}
post[Symbol.iterator] = function () {

    let properties = Object.keys(this);
    let count = 0;
    let isDone = false;

    let next = () => {
        if (count >= properties.length) {
            isDone = true;
        }

        return {done: isDone, value: this[properties[count++]]};
    }

    return {next};
}

for (let p in post) {
    console.log(`key : ${p} , value: ${post[p]}`);
}

console.log(...post);

console.log('****** generators ******');

function* nameList() {
    yield 'Sam';
    yield 'Tyler';
}

for (let myName of nameList()) {
    console.log(myName);
}

let myNames = [...nameList()];
console.log(myNames);

let [myFirst, mySecond] = nameList();
console.log(myFirst, mySecond);

console.log('****** object iterator using generators ******');

let generatorPosts = {
    title: "New features in JS",
    replies: 19
};

generatorPosts[Symbol.iterator] = function* () {
    let properties = Object.keys(this);

    for (let p of properties) {
        yield this[p];
    }
}

for (let generatorPost in generatorPosts) {
    console.log(`key : ${generatorPost} , value: ${generatorPosts[generatorPost]}`);
}






