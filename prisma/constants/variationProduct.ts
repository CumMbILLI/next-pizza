import { randomNumber } from "../helpers/randomNumber";

export const VARIANT_PIZZA_1 = (id: number) => [
  {
    productId: id,
    productType: 1,
    size: 20,
    price: randomNumber(200, 600),
  },
  {
    productId: id,
    productType: 2,
    size: 30,
    price: randomNumber(400, 800),
  },
  {
    productId: id,
    productType: 2,
    size: 40,
    price: randomNumber(600, 1000),
  },
];

export const VARIANT_PIZZA_2 = (id: number) => [
  {
    productId: id,
    productType: 1,
    size: 20,
    price: randomNumber(200, 600),
  },
  {
    productId: id,
    productType: 1,
    size: 30,
    price: randomNumber(400, 800),
  },
  {
    productId: id,
    productType: 1,
    size: 40,
    price: randomNumber(600, 1000),
  },
  {
    productId: id,
    productType: 2,
    size: 20,
    price: randomNumber(200, 600),
  },
  {
    productId: id,
    productType: 2,
    size: 30,
    price: randomNumber(400, 800),
  },
  {
    productId: id,
    productType: 2,
    size: 40,
    price: randomNumber(600, 1000),
  },
];

export const VARIANT_PIZZA_3 = (id: number) => [
  {
    productId: id,
    productType: 1,
    size: 20,
    price: randomNumber(200, 600),
  },
  {
    productId: id,
    productType: 1,
    size: 30,
    price: randomNumber(400, 800),
  },
  {
    productId: id,
    productType: 1,
    size: 40,
    price: randomNumber(600, 1000),
  },
];

export const OTHER_PRODUCTS = [
  {
    productId: 1,
    price: randomNumber(100, 1000),
  },
  {
    productId: 2,
    price: randomNumber(100, 1000),
  },
  {
    productId: 3,
    price: randomNumber(100, 1000),
  },
  {
    productId: 4,
    price: randomNumber(100, 1000),
  },
  {
    productId: 5,
    price: randomNumber(100, 1000),
  },
  {
    productId: 6,
    price: randomNumber(100, 1000),
  },
  //   {
  //     productId: 7,
  //     price: randomNumber(100, 1000),
  //   },
  //   {
  //     productId: 8,
  //     price: randomNumber(100, 1000),
  //   },
  //   {
  //     productId: 9,
  //     price: randomNumber(100, 1000),
  //   },
  //   {
  //     productId: 10,
  //     price: randomNumber(100, 1000),
  //   },
];
