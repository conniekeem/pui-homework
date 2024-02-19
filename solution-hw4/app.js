// First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")
const queryString = window.location.search;

console.log(queryString);

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);

console.log(params);

// Finally, we can access the parameter we want using the "get" method:
const rollType = params.get('roll')

console.log(rollType);

/* ------------------------------------------------------------------------- */

// Now, we will use the URL parameter to update our page.

// Update the header text
const headerElement = document.querySelector('#rollsHeader');
headerElement.innerText = rollType + ' Cinnamon Roll';

// Update the image
const rollImage = document.querySelector('.productThumbnail');
const rollImageFile = rolls[rollType]['imageFile'];
// console.log(rollImageFile);
// console.log('./assets/products/' + rollImageFile);                      
rollImage.src = './assets/products/' + rollImageFile;        

// Objects for the glazing options and the packing options
// each with their own properties of the options that are on dropdown
const glazingOptions = 
    {
      "Keep Original": 0,
      "Sugar milk": 0,
      "Vanilla milk": .5,
      "Double chocolate": 1.5,
    };

const packingOptions = 
  {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10,
  };

//find the glazingoptions class on html
let selectGlazingElement = document.querySelector("#glazingOptions");
let selectPackingElement = document.querySelector("#packingOptions");

//loop through the object and add it to the options element 
//to create the dropdown feature with the names of the objects
for (const[key, value] of Object.entries(glazingOptions)) {
  let option = document.createElement("option");
  option.text = `${key}`;
  option.value = `${value}`;
  selectGlazingElement.add(option);
}

for (const[key, value] of Object.entries(packingOptions)) {
  let option = document.createElement("option");
  option.text = `${key}`;
  option.value = `${value}`;
  selectPackingElement.add(option);
}

//display the updated price from the options and their price adaptations
function displayPrice(newPrice) {
  let priceTextElement = document.querySelector(".productPrice");
  priceTextElement.innerText = newPrice;
}

//have a constant variable for the base price
//initialize the base price so that it would load with the page
const basePrice = rolls[rollType]['basePrice'];
displayPrice("$"+basePrice);

//changing the price value depending on the adaptations
function onSelectValueChange() {
    // console.log("You selected this glaze: " + this.glazingOptions.value);
		// console.log("You selected this pack: " + this.packingOptions.value);

    //find and change the value of each option object into a float
    let glazingPrice = parseFloat(this.glazingOptions.value);
    let packPrice = parseFloat(this.packingOptions.value);  

    //update/initialize the current price 
    let currentPrice = "$"+basePrice;

    //price calculations and display it through the current price vari
    let priceTotal = ((basePrice + glazingPrice) * packPrice).toFixed(2); 
    currentPrice = "$"+priceTotal;
    // console.log("priceTotal: " + priceTotal, "basePrice: "+ basePrice, "packPrice: "+ packPrice, "glazingPrice: "+ glazingPrice);
    //display the updated price
    displayPrice(currentPrice);
}

//add the eventlistener when it changes options and start the function
selectGlazingElement.addEventListener("onchange", onSelectValueChange);
selectPackingElement.addEventListener("onchange", onSelectValueChange);

//new class for the rolls added to the cart
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}

//empty cart
const cart = [];

//function to update the cart with the rolls we added
function updateCart() {
  let glazingName = selectGlazingElement.options[selectGlazingElement.selectedIndex].text;
  let packingName = selectPackingElement.options[selectPackingElement.selectedIndex].text;
  cart.push(new Roll(rollType, glazingName, packingName, basePrice));
  console.log(cart);
}

//make the button activate the function
const btnCart = document.querySelector('.productButton');
btnCart.onclick = updateCart;