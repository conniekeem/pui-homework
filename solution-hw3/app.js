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

for (let i = 0; i < glazingOptions.length; i++) {
  let option = document.createElement("option");
  option.text = glazingOptions[i].glaze;
  option.value = glazingOptions[i];
  selectGlazingElement.add(option);
}


let selectPackingElement = document.querySelector("#packingOptions");

for (let i = 0; i < packingOptions.length; i++) {
  let option = document.createElement("option");
  option.text = packingOptions[i].size;
  option.value = packingOptions[i];
  selectPackingElement.add(option);
}

/**
 * Updates the UI to display a particular car's info.
 * param car A car object containing a model and a description.
 */
function onSelectValueChange() {
    // get value of selected glazing option
    // const priceC = element.value;
    // console.log(priceChange);

    console.log("You selected " + this.value);

    let glazingIndex = parseInt(this.value);
    let glazingPrice = glazingOptions[glazingIndex].price;

    let packIndex = parseInt(this.value);
    let packPrice = packingOptions[packIndex].price;
    
    let basePrice = document.querySelector(".product-price");

  // add your code to do update the price ...
    let priceTotal = (basePrice + glazingPrice) * packPrice; 
    let priceChange = toString(priceTotal);

    displayPrice(priceChange);
}
  

function displayPrice(newPrice) {
  let priceTextElement = document.querySelector('.product-price');

  priceTextElement.innerText = newPrice;
}

selectGlazingElement.addEventListener('onchange', onSelectValueChange);
selectPackingElement.addEventListener('onchange', onSelectValueChange);

// function onSelectValueChange() {
//     // In this function, `this` corresponds to the select
//     // element. So `this.value` will contain the value of the
//     // selected option as a string.
//     console.log("You selected " + this.value);
  
//     // We need to convert the string value to an integer
//     // const priceChange = element.value;
//     let glazingIndex = parseInt(this.value);
  
//     // Now retrieve the object at the index specified by the select's value
//     let glazeToDisplay = glazingOptions[glazingIndex].price;
  
//     // Update the UI
//     // displayGlaze(glazeToDisplay);
// }

// Give it a listener for the 'change' event, which is a function that will run
// when the selected option changes. You could also do this by setting the
// onchange property of selectElement, e.g. selectElement.onchange = ...
