'use strict';
var surveyLength = 3;
var randomProduct = [];
var currentProducts = [];
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
  //temporary placeholders:
  this.views = Math.floor(Math.random() * 25);
  this.votes = Math.floor(Math.random() * this.views);
}

//create a function to run the survey for x amount of cycles. make var surveyLength
function runSurvey() {
  for (var i = 0; i < 1; i++) {
    currentProducts[i] = Math.floor(Math.random() * productList.length);
  }
  for (var i = 0; i < productList.length; i++) {
    var randomProduct = [];
    for (var i = 0; i < 3; i++) {
      randomProduct[i] = getNewProduct();
    }
  }
}

//create a 'cooldown function' for the random numbers from the previous cycle
function getNewProduct(previousValues) {
  return Math.floor(Math.random() * productList.length);
  console.log(randomProduct);
}

//runSurvey();

var voteButton = document.getElementById('form');

voteButton.addEventListener('submit', onVote);

function onVote(event) {
  event.preventDefault();
  console.log('submit clicked');
  //save the vote count, the view count, and the cycle number to local storage
}
//create a function to use the DOM to display images
//how should the DOM clear the previous cycle?

//create event listener for vote button click
