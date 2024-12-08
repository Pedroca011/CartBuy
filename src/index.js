import createItem from './service/item.js';
import * as cartService from './service/cart.js';

const myCart = [];

console.log("Bem vindo ao carrinho da shopee \n");

const item1 = await createItem("Bola de futebol", 59.90, 2);
const item2 = await createItem("Camisa do Brasil", 89.90, 4);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.removeItem(myCart, item1);

// await cartService.deleteItem(myCart, item1.name);
await cartService.displayCart(myCart);
await cartService.calculeTotal(myCart);