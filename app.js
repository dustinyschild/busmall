'use strict';
var surveyLength = 3;
var randomProduct = [];
//create var to hold product objects
var productList = [
  new AddProduct('Boots', 'img/boots.jpg'),
  new AddProduct('Chair', 'img/chair.jpg'),
  new AddProduct('Scissors', 'img/scissors.jpg'),
  new AddProduct('Water Can', 'img/water-can.jpg'),
  new AddProduct('Wine Glass', 'img/wine-glass.jpg'),
  new AddProduct('Fidget Spinner', 'img/fidget-spinner-blue.jpg'),
  new AddProduct('Noodle Cooler', 'img/noodle-cooler.jpg'),
  new AddProduct('Walking Bike', 'img/walking-bike.jpg'),
  new AddProduct('Butter Stick', 'img/butter-stick.jpg'),
  new AddProduct('Rope Handle Silverware', 'img/rope-handle-silverware.jpg')
];

var currentProducts = [];
var previousProducts = [];
//create constructor function to build product objects
//prototype any consistent values i.e. views, votes -> set = 0
AddProduct.prototype.selectedCount = 0;
AddProduct.prototype.viewedCount = 0;

function AddProduct(
  name,
  image
) {
  this.name = name;
  this.image = image;
}

getRandomProducts();
function getRandomProducts(){
  var availableProducts = productList;
  console.log(availableProducts);
  for (var i = 0; i < previousProducts.length; i++){
    console.log(availableProducts.indexOf(previousProducts[i]) + ' was removed');
    availableProducts.splice(availableProducts.indexOf(previousProducts[i]), 1);
  }
  for (var i = 0; i < 3; i++) {
    var productNumber = Math.floor(Math.random() * productList.length);
    currentProducts[i] = availableProducts[productNumber];
    availableProducts.splice(productNumber, 1);
    console.log(currentProducts);
    console.log(availableProducts.length);
  }
  previousProducts = currentProducts;
  return currentProducts;
}
//create a 'cooldown function' for the random numbers from the previous cycle

//display photos to the page
var imageContainer = document.getElementById('form');
for (var i = 2; i > -1; i--){
  var label = document.createElement('label');
  var image = document.createElement('img');
  var input = document.createElement('input');
  input.type = 'radio';
  input.name = 'radiobutton';
  input.id = currentProducts[i].name;
  label.appendChild(image);
  label.appendChild(input);
  imageContainer.insertBefore(label, imageContainer.firstChild);
  image.src = currentProducts[i].image;
}
//runSurvey();

var voteButton = document.getElementById('form');

voteButton.addEventListener('submit', onVote);

function onVote(event) {
  event.preventDefault();
  var productInput = [];
  for (var j = 0; j < 3; j++) {
    productInput[j] = event.target.querySelector('input[id="' + currentProducts[j].name + '"]');
    console.log(productInput);
    currentProducts[j].viewedCount++;
    if (productInput[j].checked) {
      currentProducts[j].selectedCount++;
      console.log(currentProducts[j]);
    }
  }
  //addToStorage();
  //productList = retrieveLocalStorage();
  getRandomProducts();
}

function addToStorage() {
  window.localStorage.productList = JSON.stringify(productList);
}

function retrieveLocalStorage() {
  var productString = window.localStorage.productList;
  if (!productString) {
    return null;
  }
  return JSON.parse(productString);
}
//create a function to use the DOM to display images
//how should the DOM clear the previous cycle?

//create event listener for vote button click
