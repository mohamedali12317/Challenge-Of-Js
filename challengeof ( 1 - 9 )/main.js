// https://elzero.org/javascript-bootcamp-assignments-lesson-from-001-to-009/

// Assign 2
// JavaScript قم بإنشاء العنصر الموجود في الصورة داخل الصفحة بواسطة لغة 
// أثناء إنشاء العنصر Inline Style قم بإضافة ال الاستيل بطريقة أخرى غير طريقة إضافة الاستيل ك

document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = 'blue';
document.querySelector("h1").style.fontSize = '80px';
document.querySelector("h1").style.fontWeight = 'bold';
document.querySelector("h1").style.textAlign = 'center';
document.querySelector("h1").style.fontFamily = 'arial';

// Assign 3

// قم بطباعة رسالة في الكونسول كما في الصورة

console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px", "color: green; font-size: 40px; font-weight: bold;", "color: white; font-size: 40px; background-color: blue");

console.log('%cmohamed %cali %chussien' , "color :red ; font-size: 40px;" , "color :green ; font-size: 40px; font-weight: bold;" , "background-color :blue ; font-size: 40px;");

// Assign 4

// دا المفروض اعمل زاى الى فى الصورة الى مدهالى ودا مش شرحو قبل كدة قال ادور علية من النت 
// الى هو الجروب
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

// انا عايزك تشوف الفرق بين دى والى قبلها من ناحية الجروب التانى

// لو هتلاحظ كل ما تقول جروب اند من الاخر بس الاول دا معنى ان الجروب دا انتهى 
// فا اما بكتبو مرة تانية برجعو خطوة ورا عن الجروب الى قبلى 

console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

// groupCollapsed ولو هتلاحظ فى دى انا عملت 
// الفرق بين دى والتانية بتخفى بس الى موجود يبق لزم تدوس عليها عشان تبان 
// حتى لو هتلاحظ ان انا عملتها فى الجروب التانى برضو

console.groupCollapsed("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupCollapsed("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();

// Assign 5

console.table(["Elzero", "Mostafa", "Mohamed", "Ahmed", "Selim"]);

// Assign 6

// لديك الكود التالي موجود في ملف الجافا مطلوب منك إلغاء تنفيذ الكود بواسطة ما تعلمته
// مطلوب تنفيذ المهمة بطريقتين
// لا يمكنك حذف الكود من الملف أو التعديل عليه
// يمكنك الكتابة قبله أو بعده بدون أي مشكلة

// console.log("Iam In Console");
// document.write("Iam In Page");

/* console.log("Iam In Console");
document.write("Iam In Page"); */
