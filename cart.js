class Product {
  constructor(id, price, quantity) {
    this.id = id;
    this.price = price;
    this.quantity = quantity;
  }
}

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    return this.items.push(item);
  }

  showCart() {
    for (let i of this.items) {
      console.log(i.toUpperCase());
    }
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  removeAll() {
    this.items = [];
  }
}

let orange = new Product("orange", 3, 1);
let apple = new Product("apple", 2, 1);
let bananas = new Product("bananas", 8, 1);

let basket = new Cart();

function shopping(action, item) {
  switch (action) {
    case "add":
      console.log("*** ADDING AN ITEM ***");
      basket.addItem(item.id);
      console.log(
        `${item.id.toUpperCase()} was added to cart. QTY - ${
          item.quantity
        }. PRICE - $${item.price} `
      );
      break;
    case "remove":
      console.log("*** REMOVING AN ITEM ***");
      basket.removeItem(item);
      console.log(`${item.id.toUpperCase()} was removed`);
      break;
    case "removeAll":
      basket.removeAll();
      console.log(`All items were removed`);
      break;

    case "showCart":
      console.log("*** ITEMS IN YOUR CART ***");
      if (basket.items.length < 1) {
        console.log("CART IS EMPTY");
      } else {
        basket.showCart();
      }

    default:
    //   console.log(basket);
  }
}

shopping("add", orange);
shopping("add", apple);
shopping("add", bananas);

shopping("showCart");
shopping("remove", bananas);
shopping("showCart");

shopping("removeAll");
shopping("showCart");
