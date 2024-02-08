let glazingOptions = [
    {
      glaze: 'Keep Original',
      price: 'A solid, reliable car.',
    },
    {
      glaze: 'VW Beetle',
      price: 'A compact, cute car.',
    },
    {
      glaze: 'Chevy Corvette',
      price: 'A cool car for cool people.',
    },
    {
      glaze: 'Chevy Corvette',
      price: 'A cool car for cool people.',
    },
  ];

function glazingChange(element) {
    // get value of selected glazing option
    const priceChange = element.value;
    
  // add your code to do update the price ...
  }
  

function displayPrice(price) {
let carTitleElement = document.querySelector('#car-title');
let carInfoElement = document.querySelector('#car-info');

carTitleElement.innerText = car.model;
carInfoElement.innerText = car.description;
}

function onSelectValueChange() {
    // In this function, `this` corresponds to the select
    // element. So `this.value` will contain the value of the
    // selected option as a string.
    console.log('You selected ' + this.value);
  
    // We need to convert the string value to an integer
    let carIndex = parseInt(this.value);
  
    // Now retrieve the object at the index specified by the select's value
    let carToDisplay = allCars[carIndex];
  
    // Update the UI
    displayCar(carToDisplay);
}

let selectElement = document.querySelector('#glazingOptions');

selectElement.addEventListener('change', onSelectValueChange);