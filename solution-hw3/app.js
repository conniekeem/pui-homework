// A list of cars with models and descriptions. We will create these
// using a class in later assignments, but it's not necessary for
// this simple example.

let glazingOptions = [
    {
      glaze: "Keep Original",
      price: 0,
    },
    {
      glaze: "Sugar milk",
      price: 0,
    },
    {
      glaze: "Vanilla milk",
      price: .5,
    },
    {
      glaze: "Double chocolate",
      price: 1.5,
    },
];

let packingOptions = [
  {
    size: "1",
    price: 1,
  },
  {
    size: "3",
    price: 3,
  },
  {
    size: "6",
    price: 5,
  },
  {
    size: "12",
    price: 10,
  },
];

let selectGlazingElement = document.querySelector("#glazingOptions");
let selectPackingElement = document.querySelector("#packingOptions");

for (let i = 0; i < glazingOptions.length; i++) {
  let option = document.createElement("option");
  option.text = glazingOptions[i].glaze;
  option.value = i;
  selectGlazingElement.add(option);
}

for (let i = 0; i < packingOptions.length; i++) {
  let option = document.createElement("option");
  option.text = packingOptions[i].size;
  option.value = i;
  selectPackingElement.add(option);
}

/**
 * Updates the UI to display a particular car's info.
 * param car A car object containing a model and a description.
 */

function onSelectValueChange() {
    console.log("You selected  this glaze: " + this.glazingOptions.value);
		console.log("You selected this pack: " + this.packingOptions.value);

    let glazingIndex = parseInt(this.glazingOptions.value);
    let glazingPrice = glazingOptions[glazingIndex].price;

    let packIndex = parseInt(this.packingOptions.value);
    let packPrice = packingOptions[packIndex].price;

    let basePrice = 2.49;
    let currentPrice = "$"+basePrice;

  // add your code to do update the price ...
    let priceTotal = ((basePrice + glazingPrice) * packPrice).toFixed(2); 
    currentPrice = "$"+priceTotal;
    console.log("priceTotal: " + priceTotal, "basePrice: "+ basePrice, "packPrice: "+ packPrice, "glazingPrice: "+ glazingPrice);
    displayPrice(currentPrice);
}
  

function displayPrice(newPrice) {
  let priceTextElement = document.querySelector(".productPrice");
  priceTextElement.innerText = newPrice;
}

selectGlazingElement.addEventListener("onchange", onSelectValueChange);
selectPackingElement.addEventListener("onchange", onSelectValueChange);

// let initialPrice = "$"+$2.49;
// displayPrice(initialPrice);