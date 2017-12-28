import './css/main.css'
import './scss/main.scss'
import {sup} from "./js/module";
import {hello} from "./js/hello";
import {buildUser, countdownTimer, displayTags, loadProfiles} from "./js/about";

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

