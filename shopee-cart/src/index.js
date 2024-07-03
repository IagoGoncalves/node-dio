import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("camisa", 20.99, 1);
const item2 = await createItem("calça", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.displayCart(myCart);

await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);