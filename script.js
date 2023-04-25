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

// const lineItems = [
//   { description: "Eggs (Dozen)", quantity: 1, price: 3, total: 3 },
//   { description: "Cheese", quantity: 0.5, price: 5, total: 2.5 },
//   { description: "Butter", quantity: 2, price: 6, total: 12 },
// ];
// // let cur = lineItems.reduce((sum, li) => sum + li.total, 0);
// // console.log(cur);
// // let cur = lineItems.map((li) => li.total).reduce((sum, val) => sum + val, 0);
// let cur = lineItems.map((li) => li.total).reduce(sumReducer, 0);

// console.log(cur);
// const dates = [
//   "2019/06/01",
//   "2018/06/01",
//   "2019/09/01", // This is the most recent date, but how to find it?
//   "2018/09/01",
// ]
// const maxDate = dates.reduce((max, d) => (d > max ? d : max), dates[0]);
// console.log(maxDate);//2019/09/01
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
