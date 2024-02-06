'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greaterHey = greet('hey');
greaterHey('noman');
greaterHey('maryam');

// example of arrow function

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hello')('Maryam');
