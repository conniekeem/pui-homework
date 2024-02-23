//new class for the rolls added to the cart
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;

      // this.element = null;
}
}

//set
const cartSet = new Set();

//function to adding a new note card
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
  const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
  cartSet.add(roll);
  return roll;
}

//have to create NEW html element for the NEW notecard by creating a template
function createElement(roll){
  //find the html element that can be the new template for this new notecards
  const template = document.querySelector('#rollTemplate');
  const clone = template.content.cloneNode(true);

  roll.element = clone.querySelector('.roll');
  
  const btnDelete = roll.element.querySelector('.remove');
  btnDelete.addEventListener('click', () => {
      deleteRoll(roll);
  })

  const cartListElement = document.querySelector('.cartItem');
  cartListElement.prepend(roll.element);

  updateElement(roll);
}

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

function updateElement(roll) {
  //updating each element of the notecards
  const rollImageElement = roll.element.querySelector('.cartThumbnail');
  const rollNameElement = roll.element.querySelector('.rollName');
  const rollGlazeElement = roll.element.querySelector('.rollGlaze');
  const rollPackElement = roll.element.querySelector('.rollPack');
  const rollPriceElement = roll.element.querySelector('.cartPrice');

  let glazingPrice = parseFloat(roll.rollGlazing.glazingOptions.value);
  console.log(glazingPrize);
  let packPrice = parseFloat(roll.packSize.packingOptions.value);
  console.log(packPrize);

  rollImageElement.src = './assets/products/' + rolls[roll.rollType]["imageFile"];
  rollNameElement.innerText = roll.rollType;
  rollGlazeElement.innerText = roll.rollGlazing;
  rollPackElement.innerText = "Pack size: " + roll.packSize;
  rollPriceElement.innerText = "$" + ((roll.basePrice + glazingPrice) * packPrice).toFixed(2); ;
}

function deleteNote(roll){
  // have to remove the notecard element AND the set
  roll.element.remove();
  cartSet.delete(roll);
}

//implement two instances in creating new notecards
const originalRoll = addNewRoll(
  "Original",
  "Sugar Milk",
  "1",
  rolls["Original"]['basePrice']
);
const walnutRoll = addNewRoll(
  "Walnut",
  "Vanilla Milk",
  "12",
  rolls["Walnut"]['basePrice']
);
const raisinRoll = addNewRoll(
  "Raisin",
  "Sugar Milk",
  "3",
  rolls["Raisin"]['basePrice']
);
const appleRoll = addNewRoll(
  "Apple",
  "Original",
  "3",
  rolls["Apple"]['basePrice']
);

//need to iterate all the objects in the set
for (const roll of cartSet) {
  createElement(roll);
}