// let numbers = [1, 2, 3];

// let numbers2 = [4, 5, 6];

// let result = "";

// let index = 0;
// for (let i = 0; i < numbers.length + numbers2.length; i++) {
//   if (i < numbers.length) {
//     result += numbers[index];
//   } else if (i === numbers.length) {
//     index = 0;
//   } else {
//     result += numbers2[index];
//   }
//   index++;
// }
// console.log(result.split());

const employees = [
  { name: "Hoàng", age: 30, address: "Bg" },
  { name: "Duy", age: 28, address: "Nd" },
  { name: "Huy", age: 32, address: "Ls" },
];

const findBigAge = (arr) => {
  let age = 0;
  let result = [];
  for (let value of arr) {
    if (age < value.age) {
      age = value.age;
      result = value;
    }
  }
  return result;
};

console.log(findBigAge(employees));
