/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.slice(2, 6)); // zero

console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero 

console.log(a.charAt(13).toUpperCase(13).repeat(8)); //  HHHHHHHH 

// او ممكن نعمل كدة

console.log(a.charAt(13).toUpperCase().repeat(8)); //  HHHHHHHH
console.log(a.substr(a.length-4).toUpperCase().repeat(8)); //  HOOLHOOLHOOLHOOLHOOLHOOLHOOLHOOL

// او ممكن نعمل كدة

console.log(a.substr(a.length - 4, 1).toUpperCase().repeat(8)); //  HHHHHHHH

// ممكن كدة مش لزم اعمل اللينث
console.log(a.substr(-4,1).toUpperCase().repeat(8)); //  HHHHHHHH  


// 8 H
console.log(); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0, 6, ) + " " + a.substr(a.length - 6)); // Elzero School 

//or like that

console.log(a.substr(0, 6, ) + " " + a.substr(11)); // Elzero School

// Solution Must Be Dynamic Because String May Changes انا عايز اول حرف اسمول واخر حررف سمول واخالى كلو كابيتل 
console.log(a.charAt(0).toLowerCase()); // e
console.log(a.substr(a.length - 16, a.length - 2).toUpperCase()); // LZERO WEB SCHOO
console.log(a.charAt(16).toLowerCase()); // l
console.log(a.charAt(0).toLowerCase() + "" + a.substr(a.length - 16, a.length - 2).toUpperCase() + "" + a.charAt(16).toLowerCase()); // eLZERO WEB SCHOOl

// or like that

let first = a.charAt(0).toLowerCase();
let third = a.charAt(16).toLowerCase();
let secand = a.substr(a.length - 16, a.length - 2).toUpperCase();
console.log(first + secand + third);

// or like that

console.log(a.charAt(0).toLowerCase() + a.slice(1 , -1).toUpperCase() + a.charAt(a.length - 1).toLowerCase()); // eLZERO WEB SCHOOl


// حل الهندسة الى بتابع معا

let  = "Elzero Web School";

console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // zero

console.log(a.slice(-4, -3).toUpperCase().repeat(8));  //  HHHHHHHH

console.log(a.split(" ", 1));  // ["Elzero"]

console.log(`${a.substr(0, 6)} ${a.substr(-6)}`);  // Elzero School

console.log(a.charAt(0).toLowerCase() + a.slice(1, length-1).toUpperCase() + a.substr(-1).toLowerCase()) ; // eLZERO WEB SCHOOl