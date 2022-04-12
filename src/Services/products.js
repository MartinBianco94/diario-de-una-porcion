import alfajores from "../Assets/Img/alfajores_brownie.jpg";
import chipa from "../Assets/Img/pan_saborizado.jpg";
import torta from "../Assets/Img/torta_vainilla.jpg";

const PRODUCTS = [
  {
    id: "1",
    name: "alfajores",
    price: 200,
    imageUrl: alfajores,
    description: "un hermoso alfajor de dulce de leche",
    stock: 2,
    category: "dulces",
  },
  {
    id: "2",
    name: "chipa",
    price: 50,
    imageUrl: chipa,
    description: "un hermosa masa rellena de queso",
    stock: 60,
    category: "salados",
  },
  {
    id: "3",
    name: "torta",
    price: 230,
    imageUrl: torta,
    description: "torta riquisima de frutilla",
    stock: 70,
    category: "dulces",
  },
  {
    id: "4",
    name: "torta",
    price: 230,
    imageUrl: torta,
    description: "torta riquisima de frutilla",
    stock: 70,
    category: "dulces",
  },
  {
    id: "5",
    name: "torta",
    price: 230,
    imageUrl: torta,
    description: "torta riquisima de frutilla",
    stock: 70,
    category: "salados",
  },
  {
    id: "6",
    name: "torta",
    price: 230,
    imageUrl: torta,
    description: "torta riquisima de frutilla",
    stock: 70,
    category: "salados",
  },
];

export const getProduct = new Promise((resolve, reject) => {
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
