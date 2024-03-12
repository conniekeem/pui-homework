//actually change the value of the text on the badge
function updateBadge(num) {
  //find the badge in html
  const iconBadgeElement = document.querySelector(".badge");
  //add the rolls to the cart array
  iconBadgeElement.innerText = num;
}

//find the length of the cart from the local storage
function numFromLocalStorage() {
  const cartArrayString = localStorage.getItem('storedRolls');
  const cartArray = JSON.parse(cartArrayString);
  console.log(cartArray);
  return cartArray.length;
}

//call the update badge with the length of cart 
if (localStorage.getItem('storedRolls') != null){ 
  updateBadge(numFromLocalStorage());
} 

