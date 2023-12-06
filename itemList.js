const products = require('./data/products.js');

function itemList(userItem) {
  function initialPage() {
    const filterInput = document.querySelector('input');
    filterInput.addEventListener('input', () => {
      console.log('before enter');
      filterItemsHandler();
    });
    showItems(userItem);
  }

  function filterItemsHandler(event) {
    console.log('enter');
    const filterInput = document.querySelector('input');
    const filterValue = filterInput.value;
    console.log(filterValue);
    const filterItems = userItem.filter((item) =>
      item.keywords.toLowerCase().includes(filterValue.toLowerCase())
    );
    showItems(filterItems);
  }

  function showItems(items) {
    const outputField = document.getElementById('items');
    outputField.textContent = '';
    items.forEach((item) => {
      const itemList = document.createElement('li');
      itemList.textContent = `ID:${item.id}, NAME:${item.name}, KEYWORDS:${item.keywords}`;
      itemList.classList.add(item.id);
      outputField.appendChild(itemList);
    });
  }

  return { initialPage, filterItemsHandler, showItems };
}

module.exports = itemList;
// export { itemList };
const { initialPage, filterItemsHandler, showItems } = itemList(products);
// initialPage();

