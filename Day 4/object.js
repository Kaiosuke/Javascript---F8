/**
 * Object là kiểu dữ liệu mô tả một thực thể
 */

// const product = {
//   title: "Iphone 16",
//   price: 2000,
//   color: "black",
//   rom: 512,
//   description: "product for real man",
//   rate: 5,
// };

// const { title, price, ...rest } = product;

// // console.log(title);

// const showProduct = () => {
//   let result = " ";
//   for (let key in product) {
//     result += `${product[key]} `;
//   }

//   document.open();
//   document.write(result);
//   document.close();
// };

// showProduct();

const product2 = {
  id: 1,
  title: "Essence Mascara Lash Princess",
  description:
    "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  categoryId: 1,
  price: 9.99,
  discountPercentage: 7.17,
  rating: 4.94,
  stock: 5,
};

const categories = [
  { categoryId: 1, desc: "beauty1" },
  { categoryId: 2, desc: "beauty2" },
  { categoryId: 3, desc: "beauty3" },
];

const concatObject = () => {
  for (let category of categories) {
    for (let product in category) {
      if (category[product] === product2.id) {
        product2.categoryId = key.desc;
      }
    }
  }
};

for (let key in Object.keys(categories)) {
  console.log(categories[key].categoryId);
}

// concatObject();

// console.log(product2.categoryId);

const sealObject = Object.seal({ a: 1 });
const freeze = Object.freeze({ b: 2 });
console.log(sealObject);
