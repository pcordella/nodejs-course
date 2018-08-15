console.log('starting app.js');

const fs = require('fs');
const os = require('os')
const _ = require('lodash')
const notes = require('./notes')

// var user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username}. You are ${notes.age}`);
// console.log(`Hello ${user.username}. You are ${notes.age}`);

// var rest = notes.addNote();
// console.log(rest);


console.log(_.uniq([1,2,3,4,1,23,8]));
