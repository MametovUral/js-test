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
