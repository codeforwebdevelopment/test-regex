let str2 = "The rain in Spain stays mainly in the plain";
let strtest = "Give 100%!";
let strhello = "Hello 100%!";
let strspace = "app. component. html";
let strspaceee = "app comp";
let quote = "eat code sleep repeat eat.. ";
let strSchool = "coders schools";
let str3 = 'The Quick BrownFox Jumps Over The Lazy Dog ';
const jhbjk = 'u12349@';

let patt1 = /ain/g; // Here we simply matching ain with whole string.
let patterntest = /\d/g;
let patterN = /\D/g;
let patternW = /\w/g;
let patterWW = /\W/g;
let patternS = /\s/g;
let patternSS = /\S/g;
let regexeat = /eat/g;
let regexM = /eat/m;
let pattern = /Schools/i;
let newRe = new RegExp('Fox') // new RegExp(/Fox/);
const re = new RegExp(/[abc]/); // grouping
const re1 = new RegExp(/^[a-zA-Z0-9]+$/iu);
//     /[A-Z]/    A, B, C, ... , X, Y, Z
// [a-fA-F0-9]   a string that describes a single hexadecimal digit, case-insensitively
// [0-9]%             a string that has a number from 0 to 9 before a % sign
// [^..] matches any character but not between brackets, including newline characters.
//  a(bc)             brackets create a capturing group with value bc.
//   a(?:bc)*        using ?: we disable the capturing group
//   a(?bc) using ? we put a name to the group
//     A* it matches any string that contains 0 or more A’s.
// /^hey.*joe$/  match a string that starts with a substring and ends with another, you can use .*, which matches any character repeated 0 or more times:
// abc*        matches a string that has ab followed by zero or more c.
// p(bc)* It matches any string containing a p followed by zero or more instances/copies of the sequence bc.
// abc{2} matches a string that has ab followed by 2 c
// abc{2,5} matches a string that has ab followed by 2 or 5 c’s.
// a(bc){2,5} matches a string that has a followed by 2 up to 5 copies of the sequence bc
// abc{2,} matches a string that has ab followed by 2 or more c means at least 2 c’s are present.
// ^The matches any string that starts with The.
// Fox$ matches a string that ends with the Fox.
// ^The end$ exact string match (starts and ends with the end)
// /^Fox$/ match strings that exactly match Fox, and just that string.
// ^.{2}$  It matches any string containing exactly two characters.
// (.*)  It matches any string enclosed within and .
// matches any character one or more times included inside , expanding as needed.
// matches simple div in This is a simple div test. In order to catch only the div tag, we can use a ? to make it lazy

// console.log(str2.match(patt1), '1') //[ 'ain', 'ain', 'ain', 'ain' ]
// console.log(strtest.match(patterntest), '2');// ["1", "0", "0"]
// console.log(str2.match(patterntest), '3');// null
// console.log(patterntest.test(strtest), '4'); // true
// console.log(strtest.match(patterN), '5');// ["G", "i", "v", "e", " ", "%", "!"]
// console.log(strhello.match(patternW), '6'); // ["H", "e", "l", "l", "o", "1", "0", "0"]
// console.log(strhello.match(patterWW), '7');// [" ", "%", "!"]
// console.log(strspace.match(patternS), '8');// [" ", " "]
// console.log(strspaceee.match(patternSS), '9'); // ["a", "p", "p", "c", "o", "m", "p"]
// console.log(quote.match(regexeat), '10')  // ["eat", "eat", "eat"]
// console.log(quote.match(regexM), '11')//  ["eat"]
// console.log(strSchool.match(pattern), '12'); // ["schools"]
// console.log(newRe.test(str3), '13') // true
// console.log('output', re1.test(jhbjk), '14') // It matches a string that has either an a or a b or a c. It is same as a|b|c or [a-c].

// // pass variables in regex-
// console.log(("str1,str2,str3,str4".match(/str/g) || []).length); //logs 4
// console.log(("str1,str2,str3,str4".match(new RegExp("str", "g")) || []).length); //logs 4
// console.log(/(hey|ho)/.exec('hey'))  // [ 'hey', 'hey', index: 0, input: 'hey', groups: undefined ]

// console.log("Hello world!".replace(/world/, 'dog'))  // Hello dog! // regex to replace any text –

// node regex/test-regex-basics.js