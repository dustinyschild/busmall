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
  for (var i = 0; i < 3; i++) {
    currentProducts[i] = Math.floor(Math.random() * productList.length);
  }
  for (var i = 0; i < productList.length; i++) {
    var randomProducts = [];
    for (var i = 0; i < 3; i++) {
      randomProducts[i] = getNewProduct();
    }
  }
}

//create a 'cooldown function' for the random numbers from the previous cycle
function getNewProduct(previousValues) {
  return Math.floor(Math.random() * productList.length);
}

//display photos to the page
var imageContainer = document.getElementById('form');
var label = document.createElement('label');
var image = document.createElement('img');
var input = document.createElement('input');
input.type = 'radio';
input.name = 'radiobutton';
input.id = currentProducts[0].name;
label.appendChild(image);
label.appendChild(input);
imageContainer.insertBefore(label, imageContainer.firstChild);
image.src = currentProducts[0].image;
//runSurvey();

var voteButton = document.getElementById('form');

voteButton.addEventListener('submit', onVote);

function onVote(event) {
  event.preventDefault();
  var productInput = [];
  for (var j = 0; j < 3; j++) {
    productInput[j] = event.target.querySelector('input[value="' + j + '"]');
    currentProducts[j].viewedCount++;
    //console.log(productInput[j].checked);
    if (productInput[j].checked) {
      currentProducts[j].selectedCount++;
    }
    //console.log(currentProducts[j]);
  }
  addToStorage();
  productList = retrieveLocalStorage();
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
