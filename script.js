//************************************************************************************************** */
// ushbu arraydagi stringni inxednini toping.
// const myArray = [[false, true], [1, 2], 99, "yaxshi"];

// for
// for (let i = 0; i < myArray.length; i++) {
//   if (typeof myArray[i] == 'string') {
//     console.log('String index:', i)
//   }
// }

// myArray.forEach((item, i) => {
//   if (typeof item == 'string') {
//     console.log('String index:', i)
//   }
// })

//************************************************************************************************** */
// Array ichidagi faqat arraylarni elementlarini ajratib oling.
// Kutilyotgan natija: [1, 2, 3, 4, 5, 6]
// const data = [[1, 2, 3], 'qizil', [4, 5, 6], true, false]
// const newData = []

// data.forEach((item) => {
//   const res = Array.isArray(item)
//   if (res) {
//     item.forEach((num) => {
//       newData.push(num)
//     })
//   }
// })

// console.log(newData)

//************************************************************************************************** */
// Array ichidagi
// [null, 0, "", false, undefined, NaN]
//qiymatlarini ajratib oladigan cod yozing.
// const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0']
// const falsey = []

// checkData.forEach((item) => {
//   if (!item) {
//     falsey.push(item)
//   }
// })

// console.log(falsey)

//************************************************************************************************** */
// Berilgan qiymat: 'samarqand'
// Kutilyotgan qiymat : 'dnaqramas' => elementlarni teskari qilib beradigan cod yozing.

// 1-usul
// const word = 'samarqand'

// const splitWord = word.split('').reverse()

// let newWord = ''
// for (let i = 0; i < splitWord.length; i++) {
//   newWord += splitWord[i]
// }

// console.log(newWord)

// 2 - usul
// const word = 'samarqand'
// const splitWord = word.split('')
// let newWord = ''

// for (let i = word.length - 1; i >= 0; i--) {
//   newWord += splitWord[i]
// }

// console.log(newWord)

//************************************************************************************************** */
// Propmpdan kiritilgan istalgan so’zlarni, misol uchun.
// Kiritiladi: “AsSSalamu AlAyKUM YaxShimisiz” so’zi kiritilgan bo’lsa. Uni:
// Javob: “aSSALOMU aLAYKUM yAXSHIMISIZ” ko’rinishida qaytaring.

// const word = prompt("Biror gap kiriting:")
// const splitWord = word.split(' ')
// let newWord = ''

// splitWord.forEach((item) => {
//   const boshi = item.charAt().toLowerCase()
//   const davomi = item.slice(1).toUpperCase()

//   newWord += ' ' + boshi + davomi
// })

// console.log(newWord.trimStart())

//************************************************************************************************** */
// 7) Arraydagi Natural raqamlarni yig’indisini topadigan cod yozing.
// const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9]
// let naturalNumber = 0
// numbers.forEach((num) => {
//   if (num >= 0.0 && Math.floor(num) === num && num !== Infinity && num !== 0) {
//     naturalNumber += num
//   }
// })
// console.log(naturalNumber)

//************************************************************************************************** */
// 7) Prompt’dan kiritilgan stringlar ichidagi “a” harfi necha marta ishtirok etganini aniqlaydigan cod yozing.
// “Qalesiz yaxshimisiz ? Yaxshimi ishlar ?” - nechta “a” harifi qatnashganini toping.

// const words = 'Qalesiz yaxshimisiz ? Yaxshimi ishlar ?'

// let splitWords = words.split('')

// let counter = 0
// splitWords.forEach((word) => {
//   if (word == 'a' || word == 'A') {
//     counter++
//   }
// })

// console.log(`So'raliyotgan harf: ${counter} marta ishtirok etgan.`)

//************************************************************************************************** */
// Berilgan: [21.1, "Roziya", "array", ["I am array"], null, true, 214]
// array berilgan Uni:
// Natija: ["number", "string", "string", "object", "object", "boolean", "number"]
// ko’rinishida qaytaring.

// const types = [21.1, 'Roziya', 'array', ['I am array'], null, true, 214]

// const newTypes = []

// types.forEach((type) => {
//   newTypes.push(typeof type)
// })
// console.log(newTypes)

//************************************************************************************************** */
// Kiritilgan text'ni nechta elementdan iboratligini aniqlovchi cod yozing.lendth dan "FOIDALANMANG".
// Shoxrux Mahmudov yechimi - WhoIam ?
// const word = 'Uzbekistan'
// word.lastIndexOf(word.slice(-1)) + 1

//************************************************************************************************** */
// Arrayning berilgan: [1, 2, 3, 4, 5] uning ichidagi elementlariga o’z index(position) raqamini qo’shib yangi array hosil qiling.
// Natija: [1, 3, 5, 7, 9] bo’lsin.

// const number = [1, 2, 3, 4, 5]

// let result = []

// number.forEach((num, i) => {
//   result.push(num + i)
// })

// console.log(result)

//************************************************************************************************** */
// Berilgan sonning “tarkibidagi” sonlar yig’indisini toping.
// Misol uchun:
/*
   1 + 2 + 3 = 6
   1 + 2 + 3 + ... + 10 = 55
   1 + 2 + 3 + ... + 7 = 28
*/
// let counter = 0
// for (let i = 1; i <= 10; i++) {
//   counter += i
// }

// console.log(counter)

//************************************************************************************************** */
// Berilgan sonni n ga ko’paytirib 1 ni qo’shadigan cod yozing. Birinchi 10 ta holat qaytarilsin.
// n=2 misolidida:
/*
   7 - "8,15,22,29,36,43,50,57,64,71"
   1 - "2,3,4,5,6,7,8,9,10,11"
   3 - "4,7,10,13,16,19,22,25,28,31"
*/
// let number = 9

// for (let i = 1; i <= 10; i++) {
//   let reusult = number * i + 1
//   console.log(reusult)
// }

//************************************************************************************************** */
// functionga array kiritsak u array ichidagi raqamlarni teskari ishorasiga aylanitirib berisin.
// [1, 2, 3, 4, 5] => [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] => [-1, 2, -3, 4, -5]
// [] => []

// let numbers = [1, 2, 3, 4, 5]
// let result = []

// const reverseFunc = (arr) => {
//   arr.forEach((num) => {
//     result.push(num * -1)
//   })
// }
// reverseFunc(numbers)
// console.log(result)

//************************************************************************************************** */
// functionga berilgan raqamni 0 dan o'sha raqamlargarcha bo'lgan sonlarni 3,5 va 15 ga bo'linish holatlarini tekshiring.
// agar 3 ga bo'linadigan sonlar - 'fizz'
// agar 5 ga bo'linadigan sonlar - 'buzz'
// agar 15 ga bo'linadigan sonlar - 'fizzbuzz' -  deb ataladi.

// kirilgan 25
// kutilgan javob - [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizz', 22, 23, 'fizz', 'buzz' ]

// const result = []

// const fizzBuzzFunc = function (number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       result.push('FizzBuzz')
//     } else if (i % 5 == 0) {
//       result.push('Buzz')
//     } else if (i % 3 == 0) {
//       result.push('Fizz')
//     } else {
//       result.push(i)
//     }
//   }
// }

// fizzBuzzFunc(100)
// console.log(result)
//************************************************************************************************** */
// o'zingiz haqingizda object yarating va unga haqida mehtodni qo'shing. U methodan fidalaninlsa objectdagi ma'lumotlardan foidalanib o'zingiz haqingizda gapirib beradi.

// const ahrorObj = {
//   name: 'Ahror',
//   lastName: 'Soliev',
//   age: 24,
//   region: 'Fergana',
//   isMerried: false,
//   job: 'Programmer',
//   haqida: function () {
//     return `
//       Assalomu Alaykum, Mening ismim ${this.name}, Familyam ${
//       this.lastName
//     }. Yoshim ${this.age}da. ${this.region}da yashayaman. ${
//       this.job
//     } bo'lib faoliyat olib boraman. ${
//       this.isMerried ? 'Uylanganman' : 'Hali uylganmaganman'
//     }
//     `
//   },
// }

// const result = ahrorObj.haqida()
// console.log(result)
//************************************************************************************************** */
// function sumEvenNumbers(input) {
//   let newArr = 0;
//   input.forEach((elemet) => {
//     if (elemet % 2 == 0) {
//       newArr += elemet;
//     }
//   });
//   return newArr;
// }
// console.log(sumEvenNumbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8]));
//************************************************************************************************** */
// function fixPhoneNumber(str) {
//   let regex = /0\d{10}/;
//   let match = str.match(regex);
//   return match ? match[0] : "Not a phone number";
// }
// isItANum("2078834982");
//************************************************************************************************** */
// function isValidParentheses(str) {
//   let balance = 0;
//   for (let char of str) {
//     if (char === "(") {
//       balance++;
//     } else if (char === ")") {
//       balance--;
//     }
//     if (balance < 0) {
//       return false;
//     }
//   }
//   return balance === 0;
// }
// console.log(isValidParentheses("(())((()())())"));
//************************************************************************************************** */
// const solution = (str) => str.split("").reverse().join("");
// console.log(solution("salomDunyo"));
//************************************************************************************************** */
// function filter_list(l) {
//   let newArr = [];
//   l.forEach((element) => {
//     if (typeof element === "number") {
//       newArr.push(element);
//     }
//   });
// }
// filter_list([1, 2, "aasf", "1", "123", 123]);
//************************************************************************************************** */
// function countRepeated(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str [i].toLowerCase();
//     if (obj [char]) {
//       obj [char]++;
//     } else {
//       obj [char] = 1;
//     }
//   }
//   return obj;
// }
// console.log(countRepeated("heeeeello"));
//************************************************************************************************** */
// function setAlarm(employed, vacation) {
//      return employed && !vacation;
// }
// console.log(setAlarm(true, false));
//************************************************************************************************** */
// function sortArray(array) {
//   let oddNumbers = array.filter((num) => num % 2 !== 0);
//   oddNumbers.sort((a, b) => a - b);
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       array[i] = oddNumbers.shift();
//     }
//   }
//   return array;
// }
// console.log(sortArray([5, 3, 2, 8, 1, 4]));
//************************************************************************************************** */
// function removeExclamationMarks(s) {
//   let newArr = s.split("");
//   let newStr = "";
//   newArr.forEach((element) => {
//    if(element !== "!"){
//     newStr += element
//    }
//   });
//   return newStr;
// }
// console.log(removeExclamationMarks("salom dunyo!"));
//************************************************************************************************** */
// function sum(numbers) {
//  return numbers.reduce((a, b) => a + b, 0);
// }

// console.log(sum([1, 5.2, 4, 0, -1]));
//************************************************************************************************** */
// function doubleChar(str) {
//   let newArr = [];
//   for (let i = 0; i < str.length; i++) {
//     newArr.push(str[i] + str[i]);
//   }
//   return newArr.join("");
// }
// console.log(doubleChar("illuminati"));
//************************************************************************************************** */
// function jumbledString(args) {
//   let newEven = "";
//   let newOdd = "";
//   let array = args.split("");
//   array.forEach((element, idx) => {
//     if (idx % 2 === 0) {
//       newEven += element;
//     } else {
//       newOdd += element;
//     }
//   });
//   return newEven + newOdd;
// }
// console.log(jumbledString("Wow Example!")); //WwEapeo xml!
//************************************************************************************************** */
// function countRepeated(numRepeat) {
//   let obj = {};
//   for (let i = 0; i < numRepeat.length; i++) {
//     let char = numRepeat[i];
//     if (obj[char]) {
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     }
//   }
//   return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
// }
// console.log(countRepeated([1, 1, 2, 2, 4, 4, 4, 7, 8])); //4
//************************************************************************************************** */
// function greatestDistance(arr) {
//   let maxDistance = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr.length - 1; j > i; j--) {
//       if (arr[i] === arr[j]) {
//         let distance = j - i;
//         if (distance > maxDistance) {
//           maxDistance = distance;
//         }
//         break;
//       }
//     }
//   }
//   return maxDistance;
// }
// console.log(greatestDistance([9, 7, 1, 2, 3, 7, 0, -1, -2]));
//************************************************************************************************** */
// function friend(friends) {
//   let newArr = [];
//   friends.forEach((element) => {
//     if (element.length === 4) {
//       newArr.push(element);
//     }
//   });

//   return newArr;
// }
// console.log(friend(["Ryan", "Kieran", "Mark"]));
//************************************************************************************************** */
// function basicOp(operation, value1, value2) {
//   for (let i = 0; i < operation.length; i++) {
//     let oper = operation[i];
//     if (oper === "+") {
//       return value1 + value2;
//     } else if (oper === "-") {
//       return value1 - value2;
//     }
//     else if(oper === "*"){
//         return value1 * value2;
//     }
//     return value1 / value2
//   }
// }
// console.log(basicOp("+", 4, 7));
//************************************************************************************************** */
// const lineItems = [
//   { description: "Eggs (Dozen)", quantity: 1, price: 3, total: 3 },
//   { description: "Cheese", quantity: 0.5, price: 5, total: 2.5 },
//   { description: "Butter", quantity: 2, price: 6, total: 12 },
// ];
// // let cur = lineItems.reduce((sum, li) => sum + li.total, 0);
// // console.log(cur);
//************************************************************************************************** */
// // let cur = lineItems.map((li) => li.total).reduce((sum, val) => sum + val, 0);
// let cur = lineItems.map((li) => li.total).reduce(sumReducer, 0);
// console.log(cur);
//************************************************************************************************** */
// const dates = [
//   "2019/06/01",
//   "2018/06/01",
//   "2019/09/01", // This is the most recent date, but how to find it?
//   "2018/09/01",
// ]
// const maxDate = dates.reduce((max, d) => (d > max ? d : max), dates[0]);
// console.log(maxDate);//2019/09/01
//************************************************************************************************** */
// const characters = [
//   { name: "Jean-Luc Picard", age: 59 },
//   { name: "Will Riker", age: 29 },
//   { name: "Deanna Troi", age: 29 },
// ];
// const ages = characters.map((char) => char.age);
// let cur = ages.reduce((acc, age) => {
//   if (acc[age]) {
//     acc[age]++;
//   } else {
//     acc[age] = 1;
//   }
//   return acc;
// }, {});
// console.log(cur); //{ '29': 2, '59': 1 }
//************************************************************************************************** */
// A function to swap two elements in an array
// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
/************************************************************************************************** */
// function permute(arr, start, end, result) {
//   if (start === end) {
//     result.push(arr.join(""));
//   } else {
//     for (let i = start; i <= end; i++) {
//       swap(arr, start, i);
//       permute(arr, start + 1, end, result);
//       swap(arr, start, i);
//     }
//   }
// }
/************************************************************************************************** */
// function removeDuplicates(arr) {
//   let set = new Set();
//   for (let element of arr) {
//     set.add(element);
//   }
//   return Array.from(set);
// }
/************************************************************************************************** */
// function permutations(input) {
//   let inputArr = input.split("");
//   let result = [];
//   permute(inputArr, 0, inputArr.length - 1, result);
//   return removeDuplicates(result);
// }
/************************************************************************************************** */
// function alphabetPosition(text) {
//   let result = "";
//   for (let i = 0; i < text.length; i++) {
//     let code = text.toUpperCase().charCodeAt(i);
//     if (code > 64 && code < 91) result += code - 64 + " ";
//   }
//   return result.slice(0, result.length - 1);
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
/************************************************************************************************** */
// let alphabetPosition = (text) => text.toUpperCase().replace(/[^a-zA-Z]+/g, "").split("").map((ch) => ch.charCodeAt(0) - 64).join(" ");
// console.log(alphabetPosition("T_he sunset sets a58t twe5lve o' clock."));
//20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
/************************************************************************************************** */