/**
 * Array
 */

const students = [
  {
    id: 1,
    name: "Bac",
    score: 3,
  },
  {
    id: 2,
    name: "Hai",
    score: 8,
  },
  {
    id: 3,
    name: "Duyen",
    score: 6,
  },
  {
    id: 4,
    name: "Xuan",
    score: 9,
  },
  {
    id: 5,
    name: "Vinh",
    score: 10,
  },
  {
    id: 6,
    name: "Quang",
    score: 3,
  },
];

// console.log(Object(students));

// Từ danh sách sinh viên ban đầu, phân loại

const classify = [
  {
    excellent: "10,9,8",
  },
  {
    medium: "7,6,5",
  },
  {
    week: "4,3,2,1,0",
  },
];

// const scoreRank = (num) => {
//   for (let value of classify) {
//     if (value.excellent) {
//       return value.excellent.includes(num) ? "excellent" : "";
//     }
//     if (value.medium) {
//       return value.medium.includes(num) ? "medium" : "";
//     }
//     if (value.week) {
//       return value.week.includes(num) ? "week" : "";
//     }
//   }
// };

const studentClassification = (arr) => {
  let result = {};
  //   for (let student of arr) {
  //     if (student.score >= 8) {
  //       if (!result["excellent"]) {
  //         result["excellent"] = [];
  //       }
  //       result["excellent"].push(student);
  //     } else if (student.score >= 5 && student.score < 8) {
  //       if (!result["medium"]) {
  //         result["medium"] = [];
  //       }
  //       result["medium"].push(student);
  //     } else {
  //       if (!result["week"]) {
  //         result["week"] = [];
  //       }
  //       result["week"].push(student);
  //     }
  //   }
  //   for (let student of arr) {
  //     scoreRank(9);
  //   }
  //   for (let student of arr) {
  //     let rank = scoreRank(student.score);
  //     console.log(rank);
  //     // console.log(student);
  //     if (student.score >= 8) {
  //       if (!result[scoreRank(student.score)]) {
  //         result[scoreRank(student.score)] = [];
  //       }
  //       result[scoreRank(student.score)].push(student);
  //     } else if (student.score >= 5 && student.score < 8) {
  //       if (!result[scoreRank(student.score)]) {
  //         result[scoreRank(student.score)] = [];
  //       }
  //       result[scoreRank(student.score)].push(student);
  //     } else {
  //       if (!result[scoreRank(student.score)]) {
  //         result[scoreRank(student.score)] = [];
  //       }
  //       result[scoreRank(student.score)].push(student);
  //     }
  //   }
  return result;
};

// console.log(studentClassification(students));

const newArr = [
  {
    id: 1,
    name: "Quang",
  },
  {
    id: 2,
    name: "Trung",
  },
  {
    id: 3,
    name: "Nguyen",
  },
  {
    id: 4,
    name: "Hue",
  },
];

newArr.forEach((name) => {
  if (!name["cart"]) {
    name["cart"] = [];
  }
});
