let str2 = "The rain in Spain stays mainly in the plain";
// Here we simply matching ain with whole string.
let patt1 = /ain/g;
console.log(str2.match(patt1)) //[ 'ain', 'ain', 'ain', 'ain' ]

// pass variables in regex-
console.log(("str1,str2,str3,str4".match(/str/g) || []).length); //logs 4
console.log(("str1,str2,str3,str4".match(new RegExp("str", "g")) || []).length); //logs 4

var str = "Give 100%!";
var pattern = /\d/g;
console.log(str.match(pattern));// ["1", "0", "0"]

console.log(pattern.test(str)); // true

var str = "Give 100%!";
var pattern = /\D/g;
console.log(str.match(pattern));// ["G", "i", "v", "e", " ", "%", "!"]

var str = "Hello 100%!";
var pattern = /\w/g;
console.log(str.match(pattern)); // ["H", "e", "l", "l", "o", "1", "0", "0"]

var str = "Hello 100%!";
var pattern = /\W/g;
console.log(str.match(pattern));// [" ", "%", "!"]

var str = "app. component. html";
var pattern = /\s/g;
console.log(str.match(pattern));// [" ", " "]

var str = "app comp";
var pattern = /\S/g;
console.log(str.match(pattern)); // ["a", "p", "p", "c", "o", "m", "p"]

let quote = "eat code sleep repeat eat.. ";
var regex = /eat/g;
var match4 = quote.match(regex);
console.log(match4)  // ["eat", "eat", "eat"]

let quote2 = "eat code sleep repeat eat.. ";
var regex = /eat/m;
var match4 = quote2.match(regex);
console.log(match4)//  ["eat"]

var str = "coders schools";
var pattern = /Schools/i;
console.log(str.match(pattern)); // ["schools"]


let newRe = new RegExp('Fox') // new RegExp(/Fox/);
let str3 = 'The Quick BrownFox Jumps Over The Lazy Dog ';
console.log(newRe.test(str3)) // true

console.log(/(hey|ho)/.exec('hey'))  // [ 'hey', 'hey', index: 0, input: 'hey', groups: undefined ]

// regex to replace any text –
console.log("Hello world!".replace(/world/, 'dog'))  // Hello dog!


function grouping(){
    const jhbjk = 'u12349@';
    const re = new RegExp(/[abc]/);
        const re1 = new RegExp(/^[a-zA-Z0-9]+$/iu);
    
    const jnjk = re1.test(jhbjk);// It matches a string that has either an a or a b or a c. It is same as a|b|c or [a-c].

   console.log('output', jnjk)
//     /[A-Z]/    A, B, C, ... , X, Y, Z

// [a-fA-F0-9]   a string that describes a single hexadecimal digit, case-insensitively

// [0-9]%             a string that has a number from 0 to 9 before a % sign

// [^..] matches any character but not between brackets, including newline characters.


//  a(bc)             brackets create a capturing group with value bc.

//   a(?:bc)*        using ?: we disable the capturing group

//   a(?bc) using ? we put a name to the group

  }

//   quantifiers(){
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

// ^.{2}$

// It matches any string containing exactly two characters.

// (.*)

// It matches any string enclosed within and .

// matches any character one or more times included inside , expanding as needed.

// matches

// simple div

// in This is a

// simple div

// test. In order to catch only the div tag, we can use a ? to make it lazy
//   }


// node regex/test.js



