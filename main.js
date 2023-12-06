// import { itemList } from './itemList.js';
// const { initialPage, filterItemsHandler, showItems } = itemList();

const products = require('./data/products.js');
const itemList = require('./itemList.js');
const { initialPage, filterItemsHandler, showItems } = itemList(products);
