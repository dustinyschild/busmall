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
  new AddProduct('Walking Bike', 'img/walking-bike.jpg')
];

var currentProducts = [productList[0], productList[1], productList[2]];

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

//create a function to run the survey for x amount of cycles. make var surveyLength
function runSurvey() {
  for (var i = 0; i < 1; i++) {
    currentProducts[i] = Math.floor(Math.random() * productList.length);
  }
  for (var i = 0; i < productList.length; i++) {
    var randomProduct = [];
    for (var i = 0; i < 3; i++) {
      randomProducts[i] = getNewProduct();
    }
    console.log(randomProducts);
  }
}

//create a 'cooldown function' for the random numbers from the previous cycle
function getNewProduct(previousValues) {
  return Math.floor(Math.random() * productList.length);
}

//display photos to the page
runSurvey();

var voteButton = document.getElementById('form');

voteButton.addEventListener('submit', onVote);

function onVote(event) {
  event.preventDefault();
  console.log('submit clicked');
  var productInput = [];
  for (var j = 0; j < 3; j++) {
    productInput[j] = event.target.querySelector('input[value="' + j + '"]');
    currentProducts[j].viewedCount++;
    console.log(productInput[j].checked);
    if (productInput[j].checked) {
      currentProducts[j].selectedCount++;
    }
    console.log(currentProducts[j]);
  }
  addToStorage();
}

function addToStorage() {
  window.localStorage.productList = JSON.stringify(productList);
}

//create a function to use the DOM to display images
//how should the DOM clear the previous cycle?

//create event listener for vote button click
