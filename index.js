const { EventEmitter } = require("events");
const event = new EventEmitter();

/*
const myFunction = () => {
  setTimeout(() => {
    console.log("Hello World");
  }, 2000);
};

event.addListener("scream", myFunction); // Listening for scream (create)

event.on("scream", () => {
  console.log("Scream on"); // 2nd execute After screamed (listen)
});

event.emit("scream"); // 1st execute Now screaming (fire)
*/

// Write a event to calculate the shipping charges of a product for daraz

const product = {
  name: "T-shirt",
  price: 100,
  shippingRate: 10,
};

const calcTotal = (item) => {
  const total = (item?.shippingRate / 100) * item?.price + product?.price;
  setTimeout(() => {
    console.log({ total });
  }, 2000);
};


// Processing Data
event.on("addToCart", () => {
  console.log("Calculating total amount...");
});

// Created Event
event.addListener("addToCart", (product) => {
  calcTotal(product);
});

// Output Result
event.emit("addToCart", product);

/*
event => create (add Listener), listen(on), fire(emit)
*/

/*

Home work List:

1. Destructure
2. Objects / Array
3. create your module
4. npm use
5. express setup
6. Hello World
7. async await
8. callback function

*/
