let stocks = {
  Fruits: ["strawberry", "grapes", "bananas", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        // Work is getting done here
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

// Step 1

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  // Step 2
  .then(() => {
    return order(0000, () => console.log("production has started"));
  })

  // Step 3
  .then(() => {
    return order(2000, () => console.log("Fruit has been chopped"));
  })

  // Step 4
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
    );
  })

  // Step 5
  .then(() => {
    return order(1000, () => console.log("Start the machine"));
  })

  // Step 6
  .then(() => {
    return order(2000, () =>
      console.log(`Ice cream placed on ${stocks.holder[1]}`)
    );
  })

  // Step 7
  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
  })

  // Step 8
  .then(() => {
    return order(2000, () => console.log("Serve Ice Cream"));
  })

  .catch(() => {
    console.log("Customer Left");
  })

  .finally(() => {
    console.log("End of day");
  });
