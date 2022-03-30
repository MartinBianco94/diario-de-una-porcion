import alfajores from "../Assets/Img/alfajores_brownie.jpg";

const PRODUCTS = [
  {
    id: "1",
    name: "alfajores",
    price: 200,
    imageUrl: alfajores,
  },
  {
    id: "2",
    name: "chipa",
    price: 50,
    imageUrl: alfajores,
  },
  {
    id: "3",
    name: "torta",
    price: 230,
    imageUrl: alfajores,
  },
];

const getProduct = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(PRODUCTS);
    }, 2000);
  } else {
    reject("error");
  }
});

export default getProduct;
