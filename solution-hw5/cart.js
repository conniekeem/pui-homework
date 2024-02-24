//new class for the rolls added to the cart
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;

      this.element = null;
}
}

//mew set to contain all the rolls in the cart
const cartSet = new Set();

//function to adding a new roll to set
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
  const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
  cartSet.add(roll);
  return roll;
}

//have to create NEW html element for the NEW roll by creating a template
function createElement(roll){
  //find the html element that can be the new template for these new rolls
  const template = document.querySelector("#rollTemplate");
  const clone = template.content.cloneNode(true);

  //clone that specific class
  roll.element = clone.querySelector(".rollItem");
  // console.log(roll.element);
  
  //have the button remove delete the roll with the function
  const btnRemove = roll.element.querySelector(".remove");
  btnRemove.addEventListener("click", () => {
      deleteRoll(roll);
  })

  //add them to the div cartitem class
  const cartListElement = document.querySelector(".cartItem");
  cartListElement.prepend(roll.element);

  //and udpate the elements within this cloned/template roll with new properties
  updateElement(roll);
}

// Objects for the glazing options and the packing options
// each with their own properties
const glazingOptions = 
  {
    "Keep original": 0,
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

  //function to update each element in the template of the roll
function updateElement(roll) {
  //updating each element
  const rollImageElement = roll.element.querySelector(".cartThumbnail");
  const rollNameElement = roll.element.querySelector(".rollName");
  const rollGlazeElement = roll.element.querySelector(".rollGlaze");
  const rollPackElement = roll.element.querySelector(".rollPack");
  const rollPriceElement = roll.element.querySelector(".cartPrice");

  // console.log(typeof(roll.glazing));
  // console.log(glazingOptions[roll.glazing]);

  //getting the values of each glaze and price of each roll
  let glazingPrice = parseFloat(glazingOptions[roll.glazing]);
  // console.log(glazingPrice);
  let packPrice = parseFloat(packingOptions[roll.size]);
  // console.log(packPrice);

  //re-calcuating the price of each roll with their options
  let rollItemPrice = ((roll.basePrice + glazingPrice) * packPrice).toFixed(2);

  //assigning each elements to the respective rolls
  rollImageElement.src = "./assets/products/" + rolls[roll.type]["imageFile"];
  rollNameElement.innerText = roll.type + " Cinnamon Roll";
  rollGlazeElement.innerText = roll.glazing;
  rollPackElement.innerText = "Pack size: " + roll.size;
  rollPriceElement.innerText = "$" + rollItemPrice;
}

//deleting the roll with the remove button from the set and html
function deleteRoll(roll){
  // have to remove the notecard element AND the set
  roll.element.remove();
  cartSet.delete(roll);
  //keep updating even when removing
  updateTotalPrice();
}

//udpating the total price of each roll and their options price adaptations
function updateTotalPrice() {
  const cartTotalElement = document.querySelector(".totalPrice");
  //setting the total price
  let totalPrice = 0;

  // console.log(cartSet.size);

  //looping through the rolls to get each of their price again
  //and summing them all
  for (const roll of cartSet) {
      let glazingPrice = parseFloat(glazingOptions[roll.glazing]);
      let packPrice = parseFloat(packingOptions[roll.size]);

      let rollPrice = ((roll.basePrice + glazingPrice) * packPrice).toFixed(2);
      // console.log(rollPrice);
      totalPrice += parseFloat(rollPrice);
      // console.log(totalPrice);
  }

  //if we removed all the rolls from set, then make total 0
  if (cartSet.size == 0) {
    totalPrice = 0.00;
  }

  //display it
  cartTotalElement.innerText = "$" + (totalPrice).toFixed(2);
}

//implement the 4 rolls
const appleRoll = addNewRoll(
  "Apple",
  "Keep original",
  "3",
  rolls["Apple"]["basePrice"]
);
const raisinRoll = addNewRoll(
  "Raisin",
  "Sugar milk",
  "3",
  rolls["Raisin"]["basePrice"]
);
const walnutRoll = addNewRoll(
  "Walnut",
  "Vanilla milk",
  "12",
  rolls["Walnut"]["basePrice"]
);
const originalRoll = addNewRoll(
  "Original",
  "Sugar milk",
  "1",
  rolls["Original"]["basePrice"]
);

//need to iterate all the objects in the set
for (const roll of cartSet) {
  createElement(roll);
  //keep updating the price for each added roll
  updateTotalPrice();
}
