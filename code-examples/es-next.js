// source: https://blog.alexdevero.com/es6-es7-es8-modern-javascript-pt1/

///
// Example no.1: function with if statement and local variable
function testOne() {
  if (true) {
    // Local variable declared inside the statement
    // but accessible in the scope of "test" function.
    var z = 19
  }

  // Print the value of variable 'z'
  console.log(z)
}

testOne()
// Prints: '19'

///
// Example no.2: global variable and function with if statement with local variable
// Variable declared in global scope
var z = 'Superman'

function testTwo() {
  if (true) {
    // Variable declared inside the statement, in the local scope
    // but accessible in the scope of "test" function.
    var z = 'Batman'
  }

  // Print the value of variable 'z'
  console.log(z)
}

testTwo()
// Prints: 'Batman'
//value of local variable "z" declared inside the if statement, not the value of global variable "z"

///
// Example no.3: global variable and function with local variable and if statement with another local variable
// Variable declared in global scope
var z = 'Superman'

function testThree() {
  // First local variable
  // What you want to print
  var z = 'Iron man'

  if (true) {
    // Second local variable
    // Collides with 'Iron Man' variable 'z' declared in the same scope
    var z = 'Batman'
  }

  // Print the value of variable 'z'
  console.log(z)
}

testThree()
// Still prints: 'Batman'

///
// Example no.4: function with for loop and local variable
function testFour() {
  for (var i = 0; i < 3; i++) {
    console.log('Looped!')
  }

  // Try to print the value of variable "i" (hint: it will work).
  // Notice that there is no explicitly declared local or global
  // variable "i",other than the one in the for loop
  console.log(i)
}

testFour()
// Prints:
// 'Looped!'
// 'Looped!'
// 'Looped!'
// 3 (??)

///
// Example no.1: Hoisting in global scope
// Print the value of variable x
console.log(x) // Prints: undefined (??)

// Create variable 'x'
var x = 'The variable has been hoisted.'

///
// Example no.2: Hoisting and function
function testOne() {
  // Create variable 'a'
  var a = 'Hello'

  // Print the value of variable 'a' and 'b'
  console.log(a + ' ' + b)

  // Create variable 'b'
  var b = 'World'
}

testOne()
// Prints: 'Hello undefined'

///
// Example no.1: local variable inside an if statement
function testOne() {
  if (true) {
    // Variable declared inside the statement
    // but accessible in the scope of "test" function.
    let x = 19
  }

  // Try to print the value of variable 'x'
  console.log(x)
}

testOne()
// Correctly prints: ReferenceError: x is not defined

///
// Example no.2: global variable and function with an if statement with local variable
// Variable declared in global scope
let z = 'Superman'

function testTwo() {
  if (true) {
    // Variable declared inside the statement
    // but accessible in the scope of "test" function.
    let z = 'Batman'
  }

  // Print the value of variable 'z'
  console.log(z)
}

testTwo()
// Correctly prints: 'Superman'
// Value of global variable "z", not the local "z" inside the if statement.

///
// Example no.3: global variable and function with local variable and if statement with another local variable
// Variable declared in global scope
let z = 'Superman'

function testThree() {
  // What you want to print
  let z = 'Iron man'

  if (true) {
    // Collides with 'Iron Man' variable 'z' declared in the same scope
    let z = 'Batman'
  }

  // Print the value of variable 'z'
  console.log(z)
}

testThree()
// Correctly prints: 'Iron man'

///
// Example no.4: function with for loop and local variable
function testFour() {
  for (let i = 0; i < 3; i++) {
    console.log('Looped!')
  }

  // Try to print the value of "i" (hint: it will work)
  // Notice that there is no explicitly declared "i"
  // other than the one in the for loop
  console.log(i)
}

testFour()
// Correctly prints:
// 'Looped!'
// 'Looped!'
// 'Looped!'
// 'error'
// 'ReferenceError: i is not defined'

///
// Example no.1: Hoisting in global scope
// Print the value of variable x
console.log(x) // Correctly prints: ReferenceError: x is not defined

// Create variable 'x'
let x = 'The variable has NOT been hoisted!'

///
// Example no.2: Hoisting and function
function testOne() {
  // Create variable 'a'
  let a = 'Hello'

  // Print the value of variable 'a' and 'b'
  console.log(a + ' ' + b)

  // Create variable 'b'
  let b = 'World'
}

testOne()
// Correctly prints:
// 'error'
// 'ReferenceError: b is not defined'

///
// Example: for loop and using const to declare initialization variable
// Syntax of for loop: for (initialization; condition; final-expression)
for (const i = 0; i < 10; i++) {
  console.log('Looping!')
}

// Correctly prints:
// "Looping!"
// "error"
// "TypeError: Assignment to constant variable.

///
// Example no.1: const, array and changing values of array items
// Declare new variable x using const
const x = [1, 2, 3]

// Print the value of x
console.log(x)
// Prints: [1, 2, 3]

// Change the items of array stored inside x
x[0] = 'Dog'
x[1] = 'Cat'
x[2] = 'Armadillo'

// Add new items to the array stored inside x
x[3] = 'Snake'
x[4] = 'Harry Potter'

// Print the value of x
console.log(x)
// Prints: ["Dog", "Cat", "Armadillo", "Snake", "Harry Potter"]

///
// Example no.2: const, object and changing values
const y = {
  name: 'Joe Doe',
  age: 33,
  living: true
}

console.log(x)
// Prints:
// [object Object] {
//   age: 33,
//   living: true,
//   name: "Joe Doe"
// }

// Change values
y.name = 'Scarlett Seer'
y.age = 21

// Add new keys to the object stored inside y
y.height = 1.72
y.weight = 63

console.log(x)
// Prints:
// [object Object] {
//   age: 21,
//   height: 1.72,
//   living: true,
//   name: "Scarlett Seer"
// }

///
// Template literal example no.1: Basic text
// Notice that there are no back-ticks in the output.
console.log(`Some random text`)

// Outputs:
// 'Some random text'

// Template literal example no.2: Multi-line text
// Notice that there are again no back-ticks in the output.
console.log(`This text
should be printed
on multiple lines.`)

// Outputs:
// `This text
// should be printed
// on multiple lines.`

// Using quotes:
console.log('This text\n' + ' should be printed\n' + ' on multiple lines.')

// Outputs:
// 'This tex'
//  should be printed
//  on multiple lines."

///
// Template literal example no.3: Using placeholders (such as variables)
const username = 'johndoe'
const age = 32

console.log(`The name of the user is ${username} and his age is ${age}.`)
// Outputs:
// 'The name of the user is johndoe and his age is 32.'

// Using quotes:
const username = 'johndoe'
const age = 32

console.log('The name of the user is ' + username + ' and his age is ' + age + '.')
// Outputs:
// 'The name of the user is johndoe and his age is 32.'

///
// Template literal example no.4: Other expressions
const x = 3
const y = 11

console.log(`X plus Y is ${x + y > 20 ? 'bigger' : 'smaller'} than 20.`)
// Outputs:
// 'X plus Y is smaller than 20.'

// Using quotes:
const x = 3
const y = 11

console.log('X plus Y is ' + (x + y > 20 ? 'bigger' : 'smaller') + ' than 20.')
// Outputs:
// 'X plus Y is smaller than 20.'

///
// Destructuring example no.1: No initial values and array
let x
let y
let z

// Assign values to x, y, z
[x, y, z] = ['one', true, 13]

console.log(x)
// Outputs: 'one'
console.log(y)
// Outputs: true
console.log(z)
// Outputs: 13

///
// Destructuring example no.2: With initial values and array
let [x, y, z] = ['one', true, 13]

console.log(x)
// Outputs: 'one'
console.log(y)
// Outputs: true
console.log(z)
// Outputs: 13

// the same as
let array = ['one', true, 13]

let [x, y, z] = array

console.log(x)
// Outputs: 'one'
console.log(y)
// Outputs: true
console.log(z)
// Outputs: 13

///
// Destructuring example no.3: Objects
let {name, surname, age} = {name: 'John', surname: 'Doe', age: 35}

console.log(name)
// Outputs: 'John'
console.log(surname)
// Outputs: 'Doe'
console.log(age)
// Outputs: 35

///
// Destructuring example no.4: Objects the wrong way
let {a, b, c} = {name: 'John', surname: 'Doe', age: 35}

console.log(a)
// Outputs: undefined
console.log(b)
// Outputs: undefined
console.log(c)
// Outputs: undefined

///
// Destructuring example no.5: Objects and changing variable names
// Notice the left side of the assignment.
// Here is where you change the variable names: name to a, surname to b, age to c
let {name: a, surname: b, age: c} = {name: 'John', surname: 'Doe', age: 35}

console.log(a)
// Outputs: 'John'
console.log(b)
// Outputs: 'Doe'
console.log(c)
// Outputs: 35

///
// Destructuring example no.6: Swapping variable values
let y = 'Jack';
let z = 35;

[y, z] = [z, y]
console.log(y)
// Outputs: 35
console.log(z)
// Outputs: 'Jack'

///
// Destructuring example no.7: Default values
// The 'foo', 'bar' and 'bazz' are default values for a, b and c.
let [a = 'foo', b = 'bar', c = 'bazz'] = [13, 14]

console.log(a)
// Outputs: 13 - first item in the array
console.log(b)
// Outputs: 14 - second item in the array
console.log(c)
// Outputs: 'baz' - default value because array has only 2 items

///
// Destructuring example no.8: More variables and no defaults
let [a, b, c, d] = [true, 'world', 'falsy']

console.log(a)
// Outputs: true
console.log(b)
// Outputs: 'world'
console.log(c)
// Outputs: 'falsy'
console.log(d)
// Outputs: undefined

///
// Destructuring example no.9: Ignoring item
// Notice the empty space between 'j' and 'k'
let [j, , k] = ['first', 'second', 'third']

console.log(j)
// Outputs: 'first'
console.log(k)
// Outputs: 'third'

///
// Default parameters and values example no.1: Variable and destructuring
// The 'foo' and 'bar' are default values for a and b.
let [a = 'foo', b = 'bar'] = ['Tom']

console.log(a)
// Outputs: 'Tom' - first item in the array
console.log(b)
// Outputs: 'Bar' - default value because array has only 1 item

///
// Default parameters and values example no.2: Functions
// Set the default value of name parameter to 'Anonymous'
function greet(name = 'Anonymous') {
  console.log(`Hello ${name}. How are you doing?`)
}

// Calling with argument
greet('Anthony')
// Outputs: 'Hello Anthony. How are you doing?'

// Calling without argument
greet()
// Outputs: 'Hello Anonymous. How are you doing?'

// The old way
function greet(name) {
  // Ensure there is always something to be used as a name
  var fallback = (typeof name === 'undefined') ? 'Anonymous' : name

  console.log('Hello ' + fallback + '. How are you doing?')
}

// Calling with argument
greet('Anthony')
// Outputs: Hello Anthony. How are you doing?

// Calling without argument
greet()
// Outputs: Hello Anonymous. How are you doing?

///
// Spread example no.1: Array and printing the content
const arrOne = [5, 6, 'Josh', 'Tanner', 'Sweeney']

console.log(...arrOne)
// Outputs:
// 5
// 6
// 'Josh'
// 'Tanner'
// 'Sweeney'

///
// Spread example no.2: Array and cloning
const arrOne = [5, 6, 'Josh', 'Tanner', 'Sweeney']

const arrTwo = [...arrOne]

console.log(...arrTwo)
// Outputs:
// 5
// 6
// 'Josh'
// 'Tanner'
// 'Sweeney'


///
// Spread example no.3: Arrays and concatenating
const arrayOne = ['Hello.', 'This', 'could']
const arrayTwo = ['actually', 'work', 'in']
const arrayThree = ['the', 'end', '.']

// Concatenate arrays using spread operator
const arrayFour = [...arrayOne, ...arrayTwo, ...arrayThree]

console.log(arrayFour)
// Outputs:
// ["Hello.", "This", "could", "actually", "work", "in", "the", "end", "."]


///
// Spread example no.4: Objects and cloning
const objOne = {
  firstName: 'Stuart',
  lastName: 'Little',
  age: 11
}

// Create a clone of objOne
const objTwo = {...objOne}

console.log(objTwo)
// Outputs:
// [object Object] {
//   age: 11,
//   firstName: 'Stuart',
//   lastName: 'Little'
// }


///
// Spread example no.5: Objects and concatenating
const objOne = {
  firstName: 'Stuart'
}
const objTwo = {
  lastName: 'Little'
}
const objThree = {
  age: 11
}

// Create a clone of objOne
const objFour = {...objOne, ...objTwo, ...objThree}

console.log(objFour)
// Outputs:
// [object Object] {
//   age: 11,
//   firstName: 'Stuart',
//   lastName: 'Little'
// }

console.log(objTwo)
// Outputs:
// [object Object] {
//   age: 11,
//   firstName: 'Stuart',
//   lastName: 'Little'
// }

///
// Spread example no.6: Function and spread operator as an argument
const arrayOfNumbers = [8, 15, 99, 3523, 65]

function count(...numbers) {
  // Add all numbers inside the array and save the result in new variable
  const result = numbers.reduce((x, y) => x + y)

  console.log(result)
}

// Pass arrayOfNumbers using spread operator
count(...arrayOfNumbers)
// Outputs:
// 3710

///
// Rest example no.1:
// The ...words is the rest parameter.
function printAll(wordA, wordB, ...words) {
  console.log(wordA)
  console.log(wordB)
  console.log(words)
}

printAll('Hello', 'Smack', 'Dine', 'Work', 'Truth', 'Simplify', 'Future')
// Outputs:
// "Hello"
// "Smack"
// ["Dine", "Work", "Truth", "Simplify", "Future"]

///
// Rest example no.2: Rest parameter, array and map
function mapIt(wordA, wordB, ...words) {
  words.map((word) => console.log(word))
}

mapIt('Truth', 'Simplify', 'Future', 'Gang', 'China')
// Outputs:
// 'Future'
// 'Gang'
// 'China'


///
// Rest example no.3: Rest parameter, array and forEach
function useForEach(wordA, wordB, ...words) {
  words.forEach((word, index) => {
    console.log(`Word on index ${index} is ${word}.`)
  })
}

useForEach('Hello', 'Smack', 'Dine', 'Work', 'Future')
// Outputs:
// 'Word on index 0 is Dine.'
// 'Word on index 1 is Work.'
// 'Word on index 2 is Future.'


///
// Rest example no.4: Rest parameter, array and indexes
function restIndex(wordA, wordB, ...words) {
  console.log(words[0])
  console.log(words[1])
  console.log(words[4])
}

restIndex('Hello', 'Smack', 'Dine', 'Work', 'Truth', 'Simplify', 'Future')
// Outputs:
// 'Dine' - 1st element of words array (index 0)
// 'Work' - 2nd element of words array (index 1)
// 'Future' - 5th element of words array (index 4)


///
// Rest example no.5: Rest and spread
function restSpread(...params) {
  const arrayOfParameters = [...params]

  console.log(arrayOfParameters)
}

restSpread('Wayne', 'Stark', 'Woody', 'Storm')
// Outputs:
// ['Wayne', 'Stark', 'Woody', 'Storm']

///
// Set example no.1: Empty set and add()
const setExample = new Set()

// Add values to setExample set
setExample.add(5)
setExample.add('JavaScript')
setExample.add(true)
setExample.add('JavaScript') // Notice duplicate value
setExample.add('JavaScript') // Notice another duplicate value

// Iterate over the set and print its content
// Notice that there will be only one 'JavaScript' item
setExample.forEach(item => console.log(item))
// Outputs:
// 5
// 'JavaScript'
// true

///
// Set example no.2: Set initialized with values
const setExample = new Set([false, 13, 'string', {name: 'Tom', surname: 'Dextro', age: 29}])

// Iterate over the set and print its content
setExample.forEach(item => console.log(item))
// Outputs
// false
// 13
// 'string'
// [object Object] {
//   age: 29,
//   name: 'Tom',
//   surname: 'Dextro'
// }


///
// Set example no.3: Deleting individual values
const setExample = new Set([1, 5, 'thirteen', 'five'])

// Delete value 'thirteen'
setExample.delete('thirteen')

// Iterate over the set and print its content
setExample.forEach(item => console.log(item))
// Outputs:
// 1
// 5
// 'five'

///
// Set example no.4: Deleting all values
const setExample = new Set(['JavaScript', 'Ruby', 'Python', 'PHP'])

// Delete all values in the set
setExample.clear()

console.log(setExample.size)
// Outputs:
// 0

///
// Object literal example no.1: Stating with empty object literal
const objLitExample = {}

// Add pairs to objLitExample
objLitExample.one = 'First pair'
objLitExample.two = 'Second pair'
objLitExample.foo = 13

// Print the content of objLitExample
console.log(objLitExample)
// Outputs:
// [object Object] {
//   foo: 13,
//   one: 'First pair',
//   two: 'Second pair'
// }


///
// Object literal example no.2: Initialize object literal with values
const objLitExample = {
  one: 'First pair',
  two: 'Second pair',
  foo: 13
}

// Add another pair
objLitExample.bar = 'This is additional pair'

// Print the value of name key
console.log(objLitExample)
// Outputs:
// [object Object] {
//   bar: 'This is additional pair',
//   foo: 13,
//   one: 'First pair',
//   two: 'Second pair'
// }

///
// Object literal example no.3: Object literal and changing values
const objLitExample = {
  name: 'Don'
}

// Change the value of name key
objLitExample.name = 'Struck'

// Print the value of name key
console.log(objLitExample.name)
// 'Struck'

///
// Object literal example no.4: Object literal and key with space
const objLitExample = {}

// Add pairs to objLitExample
objLitExample['first name'] = 'John'
objLitExample['last name'] = 'Doer'

// Access the values
console.log(objLitExample['first name']) // 'John'
console.log(objLitExample['last name']) // 'Doer'

///
// Or, alternative using dot syntax
objLitExample.firstName = 'John'
objLitExample.lastName = 'Doer'

// Access the values
console.log(objLitExample.firstName)
// 'John'
console.log(objLitExample.lastName)
// 'Doer'

///
// Object literal example no.5: Object literal, bracket syntax and loops
const objLitExample = {}

for (let i = 0, l = 5; i < l; i++) {
  objLitExample['key' + i] = i
}

// Print the content of objLitExample
console.log(objLitExample)
// Outputs:
// [object Object] {
//   key0: 0,
//   key1: 1,
//   key2: 2,
//   key3: 3,
//   key4: 4
// }

///
// Includes() example No.1:
const includesExample = ['Ruby', 'JavaScript', 'Python', 'C++', 'Swift']

console.log(includesExample.includes('JavaScript'))
// Outputs: true

console.log(includesExample.includes('C'))
// Outputs: false

///
// Includes() example No.2: Using index parameter
const includesExample = ['Ruby', 'JavaScript', 'Python', 'C++', 'Swift']

console.log(includesExample.includes('Python', 1))
// Outputs: true

console.log(includesExample.includes('Python', 3))
// Outputs: false (Python is on the 2nd index)

///
// padStart() example No.1:
const padStartExample = 'string'

// Make the original string 18 characters long (add 12 '*' characters)
console.log(padStartExample.padStart(18, '*'))
// Outputs: '************string'

//
// padStart() example No.2: Shorter than the original
const padStartExample = 'string'

// Specify length smaller than the length of the original string
console.log(padStartExample.padStart(4, '*'))
// Outputs: 'string'


//
// padStart() example No.3: No character specified
const padStartExample = 'string'

// Omit the character parameter
console.log(padStartExample.padStart(10))
// Outputs: '    string'

///
// padEnd() example No.1:
const padEndExample = 'string'

// Make the original string 14 characters long (add 4 '*' characters)
console.log(padEndExample.padEnd(12, '*'))
// Outputs: 'string******'

///
// padEnd() example No.2: Shorter than the original
const padEndExample = 'string'

// Specify length smaller than the length of the original string
console.log(padEndExample.padEnd(4, '*'))
// Outputs: 'string'

///
// padEnd() example No.3: No character specified
const padEndExample = 'string'

// Omit the character parameter
console.log(padEndExample.padEnd(13))
// Outputs: 'string       '

///
// for...in example No.1: Array and enumerable properties
const forInExample = ['bazz', true, 21]

for (let prop in forInExample) {
  // Output all enumerable properties of the array
  console.log(prop)
}

// Outputs:
// '0'
// '1'
// '2'


///
// for...in example No.2: Array and values
const forInExample = ['bazz', true, 21]

for (let prop in forInExample) {
  // Output all enumerable properties of the array
  console.log(forInExample[prop])
}

// Outputs:
// 'bazz'
// 'true'
// '21'

///
// for...in example No.3: Object literal and enumerable properties
const forInExample = {foo: 'bazz', lang: 'JavaScript', x: 13, age: 21}

for (let prop in forInExample) {
  // Output all properties inside the object literal
  console.log(prop)
}

// Outputs:
// 'foo'
// 'lang'
// 'x'
// 'age'


///
// for...in example No.4: Object literal and enumerable properties with values
const forInExample = {foo: 'bazz', lang: 'JavaScript', x: 13, age: 21}

for (let prop in forInExample) {
  // Output all properties as well as their values
  console.log(`Property ${prop} has value of ${forInExample[prop]}.`)
}

// Outputs:
// 'Property foo has value of bazz.'
// 'Property lang has value of JavaScript.'
// 'Property x has value of 13.'
// 'Property age has value of 21.'

///
// for...in example No.5: String
const forInExample = 'JavaScript'

for (let character in forInExample) {
  // Output all characters of the string
  console.log(character)
}

// Outputs:
// '0'
// '1'
// '2'
// '3'
// '4'
// '5'
// '6'
// '7'
// '8'
// '9'

///
// for...in example No.5: String and square bracket notation
const forInExample = 'JavaScript'

for (let character in forInExample) {
  // Output all characters of the string
  console.log(forInExample[character])
}

// Outputs:
// 'J'
// 'a'
// 'v'
// 'a'
// 'S'
// 'c'
// 'r'
// 'i'
// 'p'
// 't'

///
// for...of example No.1: Array and values
const forOfExample = ['bazz', true, 21]

for (let prop of forOfExample) {
  // Output all value stored inside the array
  console.log(prop)
}

// Outputs:
// 'bazz'
// 'true'
// '21'

///
// for...of example No.2: Array, values and square bracket notation
const forOfExample = ['bazz', true, 21]

for (let prop of forOfExample) {
  // Output all enumerable properties of the array
  console.log(forOfExample[prop])
}

// Outputs:
// undefined
// undefined
// undefined

///
// for...of example No.3: String
const forOfExample = 'JavaScript'

for (let character of forOfExample) {
  // Output all characters of the string
  console.log(character)
}

// Outputs:
// 'J'
// 'a'
// 'v'
// 'a'
// 'S'
// 'c'
// 'r'
// 'i'
// 'p'
// 't'

///
// for...of example No.4: String and square bracket notation
const forOfExample = 'JavaScript'

for (let character of forOfExample) {
  // Output all characters of the string
  console.log(character)
}

// Outputs:
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined

///
// map() example no.1: Array with strings
const mapExample = ['foo', 'bar', 'bazz', 'buzzy']

mapExample.map((arrayItem, index, array) => {
  console.log(`${arrayItem} is on index ${index} in array [${array}].`)
})

// Outputs:
'foo is on index 0 in array [foo,bar,bazz,buzzy].'
'bar is on index 1 in array [foo,bar,bazz,buzzy].'
'bazz is on index 2 in array [foo,bar,bazz,buzzy].'
'buzzy is on index 3 in array [foo,bar,bazz,buzzy].'

///
// map() example no.2: Some simple math
const mapExample = [1, 2, 3, 5, 8, 13, 21]

mapExample.map((arrayItem, index, array) => {
  // Output numbers inside the array as squared
  console.log(Math.pow(arrayItem, 2))
})

// Outputs:
// 1
// 4
// 9
// 25
// 64
// 169
// 441

///
// map() example no.3: React
import React from 'react'
import ReactDOM from 'react-dom'

// Array with some user data
const mapExample = [
  {
    name: 'Joe',
    age: 23,
    id: 1
  },
  {
    name: 'Amanda',
    age: 22,
    id: 2
  },
  {
    name: 'Daryl',
    age: 36,
    id: 3
  }
]

// Create main App component
const App = () => {
  return (
    <ul>
      {/* Use map() to iterate over mapExample and generate list of users */}
      {mapExample.map((arrayItem) => {
        return <li key={arrayItem.id}>{arrayItem.name} ({arrayItem.age})</li>
      })}
    </ul>
  )
}

// Render the App component in DOM
ReactDOM.render(<App />, document.getElementById('root'))

///
// Map example no.1: Initializing Map empty and adding values later
const mapExample = new Map()

mapExample.set(0, 'John')
mapExample.set(1, 'Dick')
mapExample.set(2, 'Timothy')

for (let [key, value] of mapExample) {
  console.log(key + ': ' + value)
}

// Outputs:
'0: John'
'1: Dick'
'2: Timothy'


///
// Map example no.2: Initializing Map with values
const mapExample = new Map([[1, 'Sticky'], [2, 'Flocky'], [3, 'Flecky']])

for (let [key, value] of mapExample) {
  console.log(key + ': ' + value)
}

// Outputs:
'0: Sticky'
'1: Flocky'
'2: Flecky'

///
// Map example no.3: Map and forEach loop
const mapExample = new Map([[1, 'Foo'], [2, 'Bar'], [3, 'Bazz']])

mapExample.forEach((value, key) => {
  console.log(key + ': ' + value)
})

// Outputs:
'0: Foo'
'1: Bar'
'2: Bazz'


///
// Map example no.4: Merging Maps with spread operator
// Remember to use different keys!
const mapExampleOne = new Map([[1, 'Foo']])
const mapExampleTwo = new Map([[2, 'Bazz']])

// Merge mapExampleOne and mapExampleTwo into new Map
const mapExampleThree = new Map([...mapExampleOne, ...mapExampleTwo])

mapExampleThree.forEach((value, key) => {
  console.log(key + ': ' + value)
})

// Outputs:
'1: Foo'
'2: Bazz'

///
// Map and WeakMap example:
// Create new Map and WeakMap.
let mapExample = new Map()
let weakMapExample = new WeakMap()

// Create the objExample.
let objExample = {age: 'foo'}

// Output the content of objExample
console.log(objExample)
// [object Object] {
//   age: 'foo'
// }

// Add the objExample to Map and WeakMap
mapExample.set(objExample, 'foo')
weakMapExample.set(objExample, 'foo')

// Output the content of map and weakMap
for (let [key, value] of mapExample) {
  console.log(key)
  console.log(value)
}
// Outputs:
// [object Object] {
//   age: 'foo'
// }
// 'foo'

// Output the content of Map
console.log(mapExample.get(objExample))
// Outputs: 'foo'

// Output the content of WeakMap
console.log(weakMapExample.get(objExample))
// Outputs: 'foo'

// Set the objExample to null so garbage collection can remove it from memory.
objExample = null

// Output the content of objExample
console.log(objExample)
// Outputs: null

// !
// PAY ATTENTION HERE!
// The map still contains the, now removed, objExample!
// Output the content of Map
for (let [key, value] of mapExample) {
  console.log(key)
  console.log(value)
}
// Outputs:
// [object Object] {
//   age: 'foo'
// }
// 'foo'

// Output the content of Map
console.log(mapExample.get(objExample))
// Outputs: undefined

// Output the content of WeakMap
console.log(weakMapExample.get(objExample))
// Outputs: undefined

///
// Set and WeakSet example:
// Create new Set and WeakSet
let setExample = new Set()
let weakSetExample = new WeakSet()

let objExample = {name: 'bar'}

// Output the content of objExample
console.log(objExample)
// [object Object] {
//   name: 'bar'
// }

// Add the objExample to Set and WeakSet
setExample.add(objExample)
weakSetExample.add(objExample)

// Output the content of Set and weakSet
setExample.forEach(item => console.log(item))
// Outputs:
// [object Object] {
//   name: 'bar
// }

// Output the content of Set
console.log(setExample.has(objExample))
// Outputs: true

// Output the content of WeakSet
console.log(weakSetExample.has(objExample))
// Outputs: true

// Set the objExample to null so garbage collection can remove it from memory.
objExample = null

// Output the content of objExample
console.log(objExample)
// Outputs: null

// !
// PAY ATTENTION HERE!
// Output the content of Set
setExample.forEach(item => console.log(item))
// Outputs:
// [object Object] {
//   name: 'bar'
// }

// Output the content of Set
console.log(setExample.has(objExample))
// Outputs: false

// Output the content of WeakSet
console.log(weakSetExample.has(objExample))
// Outputs: false

///
// Import example no.1: Basic syntax and importing named export
import { someNamedExport } from '/exampleModule.js'

///
// Import example no.2: Importing multiple named exports
import { foo, bar, bazz, gazz } from '/exampleModule.js'

///
// Import example no.3: Basic syntax and importing default export
import someDefaultExport from '/exampleModule.js'

///
// Import example no.4: Importing default and named export
import someDefaultExport, { someNamedExport } from '/exampleModule.js'

///
// Import example no.5: Importing named export and renaming it
import { someBadlyNamedNamedExportThatIsJustImpossibleToRemember as calc }
  from '/exampleModule.js'

///
// Import example no.6: Importing default export and renaming it
import someBadlyNamedDefaultExportThatIsJustImpossibleToRemember as fuzzy
  from '/exampleModule.js'

///
// Import example no.7: Importing multiple exports and renaming them
import { foo as bar, bazz as fuzzy, zazz as zizzy } from '/exampleModule.js'

///
// Export example no.1: Default export
const foo = 'Export me'

export default foo

// or
export default const foo = 'Export me'

///
// Export example no.2: Named export
const foo = 'Export me'

export { foo }

// or
export const foo = 'Export me'

///
// Export example no.3: Multiple individual exports
export const foo = 13
export const fizz = 'Another export'
export const bazzy = true

///
// Export example no.4: Multiple exports at once
const foo = 13
const fizz = 'Another export'
const bazzy = true

export { foo, fizz, bazzy }

///
// Export example no.5: Named and default exports
const foo = 'Default export'
const fizz = 'named export'
export foo, { fizz }

// or
export default const foo = 'Default export'

export const fizz = 'named export'

//
// Dynamic import example no.1:
const button = document.querySelector('.cta-btn')
const navLinkAbout = document.querySelector('.link-about')

// Attach eventListener to the button
button.addEventListener(() => {
  // import specific module when it is needed
  import('/some-module.js').then((module) => {
    // do something
  }).catch((error) => console.log(error))
})

// Attach eventListener to the navigation link
navLinkAbout.addEventListener(() => {
  // import About page module when user clicks on the navigation link
  import('/pages/page-about.js').then((module) => {
    // Load the page
  }).catch((error) => console.log(error))
})

///
// Dynamic import example no.2: Dynamic import and async/await
async function someCoolModuleLoader() {
  // Load module combining import with await
  let coolModule = await import('/cool-module.js')

  coolModule.greet() // Use greet() function from coolModule
  coolModule.default() // Use the default export
}

///
// Example no.1: Basic syntax - Arrow function and concise body
// ! Concise body has no explicit return.
// Using parenthesis and curly braces
// (parameter) => { automatically returned code }
// (parameterOne, parameterTwo) => { automatically returned code }
const arrowFuncExOne = (name) => { console.log(`Hi ${name}!`) }
const arrowFuncExTwo = () => { console.log('Hi!') }

arrowFuncExOne('Stuart')
// Outputs: 'Hi Stuart!"'
arrowFuncExTwo()
// Outputs: 'Hi!'

// Or without parenthesis and curly braces
// parameter => code
const arrowFuncExThree = name => console.log(`Hi ${name}!`)

arrowFuncExThree('Tony')
// Outputs: 'Hi Tony!'

// !!!
// ! When there is no parameter, parenthesis are required!
// ! This will not work!
// !!!
const arrowFuncExFour = => console.log(`Hi ${name}!`)

arrowFuncExFour('Doris')
// Outputs: SyntaxError: Unexpected token =>

// This will work
const arrowFuncExFour = () => console.log(`Hi!`)

arrowFuncExFour()
// Outputs: 'Hi!'

// !!!
// ! When there is more than 1 parameter, parenthesis are also required!
// ! This will not work!
// !!!
const arrowFuncExFive = foo, bar => console.log(`Hi ${foo}. My name is ${bar}.`)

arrowFuncExFive('John', 'Jack')
// Outputs: SyntaxError: Missing initializer in const declaration

// This will work
const arrowFuncExFive = (foo, bar) => console.log(`Hi ${foo}. My name is ${bar}.`)

arrowFuncExFive('John', 'Jack')
// Outputs: 'Hi John. My name is Jack.'

///
// Example no.2: Basic syntax - Arrow function with block body
const arrowFuncExSix = () => {
  // ! Block body doesn't return anything automatically, you have to return it explicitly.
  return 'Hello from the flat land.'
}

console.log(arrowFuncExSix())
// Outputs: 'Hello from the flat land.'

// Or, with a parameter
const arrowFuncExSeven = (country) => {
  return `Hello from the ${country}.`
}

console.log(arrowFuncExSeven('Czech Republic'))
// Outputs: 'Hello from the Czech Republic.'

///
// Example no.3: Arrow function inside map
const arrayExample = [1, 5, 9]

arrayExample.map((number) => console.log(number))
// Outputs:
// 1
// 5
// 9

///
// Example no.4: Arrow function and destructuring
const arrayWordsExample = ['Speak', 'Talk', 'Say', 'Discuss']

// Use map to log the length of the words inside the arrayWordsExample array
arrayWordsExample.map(({ length }) => console.log(length))
// Outputs:
// 5
// 4
// 3
// 7

// The same as
const arrayWordsExample = ['Speak', 'Talk', 'Say', 'Discuss']

arrayWordsExample.map((word) => console.log(word.length))
// Outputs:
// 5
// 4
// 3
// 7

///
// Example no.5: Arrow function, destructuring and renaming the variable
const arrayWordsExample = ['Speak', 'Talk', 'Say', 'Discuss']

// Change the 'length' variable to 'lengthOfWords' and log that
arrayWordsExample.map(({ length: lengthOfWords }) => console.log(lengthOfWords))
// Outputs:
// 5
// 4
// 3
// 7

///
// Example no.5: Arrow function and returning an object literal
const arrowFuncExEight = () => ({ name: 'Dogue', age: 25 })

console.log(arrowFuncExEight().name)
// Outputs: 'Dogue'

console.log(arrowFuncExEight().age)
// Outputs: 25

// !!!
// ! This will not work!
// !!!
const arrowFuncExEight = () => { name: 'Dogue', age: 25 }

console.log(arrowFuncExEight().name)
// Outputs: SyntaxError: Unexpected token :

///
// Example no.1: Arrow function and 'this'
// 1) Example with inner classic function
// Create FuncThisConstructor constructor
function FuncThisConstructorOne() {
  // Create 'name' property on FuncThisConstructor
  this.name = 'Sindre'

  // Create inner function
  function funcThisInner() {
    // Try to change the value 'name' property
    this.name = 'Johny'

    // Log message after renaming
    console.log('Renamed.')
  }

  // Call funcThisInner()
  funcThisInner()

  // Return the current value of FuncThisConstructor's 'name' property
  return this.name
}

// Create instance of FuncThisConstructorOne constructor
const functInstanceOne = new FuncThisConstructorOne()

// Log the return valued by functInstanceOne
// !!!
// ! Notice that 'name' property has its original value 'Sindre', not 'Johny'
// !!!
console.log(functInstanceOne)
// Outputs:
// "Renamed."
// [object Object] {
//  name: "Sindre"
// }

// 2) Example with inner arrow function
// Create classic function
function FuncThisConstructorTwo() {
  // Create 'name' property on FuncThisConstructor
  this.name = 'Jacky'

  // Create inner arrow (!!!) function
  arrowFuncThisInner = () => {
    // Try to change the value 'name' property
    this.name = 'Doris'

    // Log message after renaming
    console.log('Renamed.')
  }

  // Call arrowFuncThisInner()
  arrowFuncThisInner()

  // Return the current value of FuncThisConstructor's
  return this.name
}

// Create instance of FuncThisConstructorTwo constructor
const functInstanceTwo = new FuncThisConstructorTwo()

// Log the return valued by functInstanceTwo
// !!!
// ! Notice that value of 'name' property has changed from 'Jacky' to 'Doris'
// !!!
console.log(functInstanceTwo)
// Outputs:
// "Renamed."
// [object Object] {
//   name: "Doris"
// }

///
// Example no.2: Arrow function and arguments
// Create arrow function and try to return its 'arguments' object
const arrowFuncArgsOne = () => arguments

// Call arrowFuncArgsOne() and try to log argument object
console.log(arrowFuncArgsOne(2))
// Outputs: TypeError:: arguments is not defined

// Create classic function
function funcArgs(n) {
  // Log argument object of funcArgs()
  console.log(arguments)
  // Outputs:
  // [object Arguments] {
  //   0: 3
  // }

  // Return argument object of arrowFuncArgsTwo()
  // Arguments object of arrowFuncArgsTwo() is equal to arguments of funcArgs()
  const arrowFuncArgsTwo = () => arguments

  // Call arrowFuncArgsTwo()
  return arrowFuncArgsTwo()
}

// Call funcArgs()
console.log(funcArgs(3))
// Outputs:
// [object Arguments] {
//   0: 3
// }
// !!!
// !! Notice that the result is the same as the result of calling 'console.log(arguments)' in funcArgs
// !!!

///
// Example no.3: Arrow function and new operator
// 1) Example with classic function
// Create FuncNew() constructor
function FuncNew() {
  this.message = 'Hi'
}

// Create instance of FuncNew() constructor
const funcNewInstance = new FuncNew()

// Log 'message' property in funcNewInstance, inherited from FuncNew() constructor
console.log(funcNewInstance.message)
// Outputs:
// Hi

// 2) Example with arrow function
// Try to create ArrowFuncNew() constructor
const ArrowFuncNew = () => {
  this.message = 'Hi'
}

// Try to create instance of ArrowFuncNew() constructor
const arrowFuncNewInstance = new ArrowFuncNew()

// Try to log 'message' property in arrowFuncNewInstance, inherited from ArrowFuncNew() constructor
console.log(arrowFuncNewInstance.message)
// Outputs:
// TypeError: ArrowFuncNew is not a constructor

///
// Example no.4: Arrow function and prototype
// 1) Example with classic function
// Create FuncProt() constructor
function FuncProt() {}

// Log the prototype of FuncProt() constructor
console.log(FuncProt.prototype)
// Outputs:
// [object Object] { ... }

// 2) Example with arrow function
// Try to create ArrowFuncProt() constructor
const ArrowFuncProt = () => {}

// Try to log the prototype of ArrowFuncProt() constructor
console.log(ArrowFuncProt.prototype)
// Outputs:
// undefined

///
// Example no.1: Simple Promise with setTimeout
// Create new Promise that resolves into a message after 3 seconds
const promiseExampleOne = new Promise((resolve, reject) => {
  setTimeout(function() {
    // Data shown if Promise is fulfilled or resolved
    resolve('Promise has been resolved!')

    // Error, or data, shown if Promise is rejected
    reject('Promise has not been resolved.')
  }, 3000)
})

// Call the Promise and log response when it is fulfilled or resolved (then()) and error message if it is rejected (catch())
promiseExampleOne.then((response) => console.log(response)).catch((error) => console.log(error))
// Outputs (after 3 seconds): 'Promise has been resolved!'

// Or, more readable version
promiseExampleOne
  .then((response) => console.log(response))
  .catch((error) => console.log(error))

///
// Example no.2: Function returning a Promise
function someAsyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      // Data shown if Promise is fulfilled or resolved
      resolve('Promise has been resolved!')

      // Error, or data, shown if Promise is rejected
      reject('Promise has not been resolved.')
    }, 3000)
  })
}

// Call someAsyncFunction() and log the response, or any potential error
someAsyncFunction().then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
})

///
// Example: Chaining Promises
const promiseExample = new Promise((resolve, reject) => {
  // Do some asynchronous task(s)
  resolve(data)

  reject('There was a problem with your request')
})

promiseExample.then(resolvedData => {
  console.log('Server responded with' + resolvedData)

  const updatedData = resolvedData + additionalData

  // Pass the updated result to the next then() function
  // The name of the returned variable doesn't matter
  // In the next then(), you can use any variable name you want
  return updatedData
}).then(foo => {
  // Do something
  console.log(foo)

  // Return the value so you can use it in the next then()
  return newValue
}).then(bar => {
  console.log(bar)

  // Return the value so you can use it in the next then()
  return newValue
}).then(bazz => {
  console.log(bazz)

  // Return the value so you can use it in the next then()
  return newValue
}).catch((error) => {
  console.log(error)
})

///
// Example no.1: Promises and all()
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am promiseOne.')
  }, Math.floor(Math.random() * 10))
})

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am promiseTwo.')
  }, Math.floor(Math.random() * 10))
})

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am promiseThree.')
  }, Math.floor(Math.random() * 10))
})

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am promiseFour.')
  }, Math.floor(Math.random() * 10))
})

// Wait until all Promises are resolved and return the resolved values
Promise.all([promiseOne, promiseTwo, promiseThree, promiseFour]).then(value => {
  // Log all resolved values
  console.log(value)
  // Outputs: ['I am promiseOne', 'I am promiseTwo', 'I am promiseThree', 'I am promiseFour']

  // Log value resolved by promiseOne
  console.log(value[0])
  // Outputs: 'I am promiseOne.'

  // Log value resolved by promiseTwo
  console.log(value[1])
  // Outputs: 'I am promiseTwo.'

  // Log value resolved by promiseThree
  console.log(value[2])
  // Outputs: 'I am promiseThree.'

  // Log value resolved by promiseFour
  console.log(value[3])
  // Outputs: 'I am promiseFour.'
})


///
// Example no.2: Promises and race()
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am promiseOne.')
  }, Math.floor(Math.random() * 10))
})

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am promiseTwo.')
  }, Math.floor(Math.random() * 10))
})

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am promiseThree.')
  }, Math.floor(Math.random() * 10))
})

// Wait until the first Promises is resolved and return its resolved value
Promise.race([promiseOne, promiseTwo, promiseThree]).then(value => {
  // Log the resolved value from the winning Promise
  console.log(value)
  // Outputs: ¯\_(ツ)_/¯
})

///
// Example of async/await syntax no.1: Standart function
async function someFunction() {
  await ...
}

///
// Example of async/await syntax no.2: Arrow function
const someFunction = async () => {
  await ...
}

///
// Example of async/await syntax no.3: Don't try this
function someFunction() {
  await anotherFunction() // This will throw an error
}

///
// Example of async/await syntax no.4: Object
// As an object's method
const someObj = {
  async anotherFunction() {
    // your code
  }
}

///
// Example of async/await syntax no.5: Class
class SomeClass {
  async anotherFunction() {
    // your code
  }
}

///
// Example of async/await no.6:
// Create async function
async function appViewRender() {
  // Use try block
  try {
    // Use await to wait for the data
    const data = await getData()

    // Use await to wait until data is verified
    const verifiedData = await verifyData(data)

    // Use await to wait until data is converted
    const convertedData = await convertData(verifiedData)

    // Finally display the data
    displayData(convertedData)
  } catch(error) {
    // Use catch block to handle any exceptions
    handleErrors()
  }
}

///
// Example of async/await no.7: Async function vs regular promise
async function exampleAsyncFunction() {
  return 'Foo'
}

// Async function returns a promise - we can use then()
exampleAsyncFunction.then(console.log)
// Outputs: Foo

///
// The same as using standard function explicitly returning a promise:
function functionWithPromise() {
  return Promise.resolve('Foo')
}

functionWithPromise().then(console.log)
// Outputs: Foo

///
// The same as creating new promise:
const newPromise = () => new Promise((resolve, reject) => {
  resolve('Foo')
  reject('There was a problem with resolving your request.')
})

newPromise().then(console.log)
// Outputs: Foo

///
// Example of async/await no.8: Await operators, pausing and automatic conversion to promise
async function messageToHall() {
  // Create a time stamp
  console.log(`Stamp one: ${window.performance.now()}`)

  // Create the first part of the message.
  const firstPart = await 'Hello'
  // Automatically converted to promise, to const a = await Promise.resolve('Hello')

  // Pause the function for 2 seconds and then create the second part of the message.
  const secondPart = await new Promise(resolve => setTimeout(
    () => {
      resolve('world')
    }, 2000)
  )

  // Create the third part of the message.
  const thirdPart = await 'Hal!'
  // Automatically converted to promise, to const a = await Promise.resolve('Hal!')

  // Create second time stamp
  console.log(`Stamp two: ${window.performance.now()}`)

  // Return the whole message in correct form
  return `${firstPart} ${secondPart} ${thirdPart}`
}

messageToHall().then(console.log)
// Outputs:
// 'Stamp one: 340.9999999566935'
// 'Stamp two: 2343.899999978021'
// 'Hello world Hal!'

///
// Example of async/await no.9: Async/await and handling errors
// Create function with promise that will be randomly either resolved or rejected
function resolveOrReject() {
  return new Promise((resolve, reject) => {
    // Randomly generate either 1 or 0
    const shouldResolve = Math.round(Math.random() * 1)

    // Resolve or reject the promise based on the value of shouldResolve
    shouldResolve ? resolve('Promise resolved!') : reject('Promise rejected.')
  })
}

// Create async function and use try block to handle case when promise is resolved and catch block when it is rejected
async function myAsyncFunction() {
  try {
    // Execute the resolveOrReject() function
    const result = await resolveOrReject()

    console.log(result)
  } catch(error) {
    // Handle any exceptions
    console.log(error)
  }
}

// Try your luck
myAsyncFunction()
// Outputs: 'Promise rejected.'
myAsyncFunction()
// Outputs: 'Promise resolved!'
myAsyncFunction()
// Outputs: 'Promise resolved!'
myAsyncFunction()
// Outputs: 'Promise rejected.'
myAsyncFunction()
// Outputs: 'Promise rejected.'
myAsyncFunction()
// Outputs: 'Promise resolved!'

///
// Classes example no.1: Function constructor vs ES6 class
// Create Person object using function constructor
function Person(name, age, isLiving) {
  this.name = name
  this.age = age
  this.isLiving = isLiving
}

// Add isAlive method to prototype of Person object
Person.prototype.isAlive = function() {
  if (this.isLiving) {
    console.log(`${this.name} is alive.`)
  } else {
    console.log(`${this.name} is dead.`)
  }
}

// Create new instance of Person object
const joe = new Person('Joe', 59, true)

// Check if Joe is alive
joe.isAlive()
// Outputs: 'Joe is alive.'

// Using ES6 class:
// Create Person class
class Person {
  // Define default properties
  constructor(name, age, isLiving) {
    this.name = name
    this.age = age
    this.isLiving = isLiving
  }

  // Create isAlive method to prototype of Person object
  isAlive() {
    if (this.isLiving) {
      console.log(`${this.name} is alive.`)
    } else {
      console.log(`${this.name} is dead.`)
    }
  }
}

// Create new instance of Person class
const anthony = new Person('Anthony', 59, true)

// Check if Anthony is alive
anthony.isAlive()
// Outputs: 'Anthony is alive.'

///
// Classes example no.2: Extending classes
// Create Human class
class Human {
  // Define default properties
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}.`)
  }
}

// Create Woman class by extending Human
class Woman extends Human {
  // Define default properties
  // Pass the name and age properties to constructor() and super() because we want the Woman class to inherit these properties
  constructor(name, age) {
    // Let Woman class inherit name and age properties from human
    super(name, age)

    this.gender = 'female'
  }

  tellYourGender() {
    console.log(`I am a ${this.gender}.`)
  }
}

// Create new instance of Woman class
const jackie = new Woman('Jackie', 26, true)

// Let Jackie introduce herself
jackie.sayHi()
// Outputs: 'Hi, I am Jackie.'

jackie.tellYourGender()
// Outputs: 'I am a female.'

// Create Man class by extending Human
class Man extends Human {
  // Define default properties
  // Pass the name and age properties to constructor() and super() because we want the Man class to inherit these properties
  constructor(name, age) {
    // Let Man class inherit name and age properties from human
    super(name, age)

    this.gender = 'male'
  }

  tellYourGender() {
    console.log(`I am a ${this.gender}.`)
  }
}

// Create new instance of Man class
const johny = new Man('Johny', 31, true)

// Let Johny introduce herself
johny.sayHi()
// Outputs: 'Hi, I am Johny.'

johny.tellYourGender()
// Outputs: 'I am a male.'

// bind operator
// source: https://medium.com/@wlodarczyk_j/ecmascript-2016-es7-proposal-the-bind-operator-833b95e825c3
class Component extends React.Component {
  handleClick() {
    // handle click
  }

  render() {
    return (
      <p onClick={::this.handleClick}>click here</p>
    );
  }
}

let regex = /^ab*(cd)?ef{5}\1g\w+\d*[^\(xy\)24]$/
