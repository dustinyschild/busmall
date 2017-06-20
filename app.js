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
  new AddProduct('Walking Bike', 'img/walking-bike.jpg'),
  //new AddProduct()
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
  console.log('views: ' + this.views);
  console.log('votes: ' + this.votes);
}

//create a function to run the survey for x amount of cycles. make var surveyLength
function runSurvey() {
  for (var i = 0; i < surveyLength; i++) {
    currentProducts[i] = Math.floor(Math.random() * productList.length);
  }
  for (var i = 0; i < productList.length; i++) {
    var allProductsNew = false;
    while (!allProductsNew) {

      getThreeNewProducts();
      //checkAllProductsNew(allProductsNew);
    }
    console.log('getting to here');
  }
}

//create a 'cooldown function' for the random numbers from the previous cycle
function getThreeNewProducts() {
  for (var j = 0; j < 3; j++) {
    randomProduct[j] = Math.floor(Math.random() * productList.length);
  }
  console.log(randomProduct);
  return randomProduct;
}

function checkAllProductsNew(allProductsNew) {
  console.log('entering checker');
  console.log(currentProducts + ':' + randomProduct);
  for (var j = 0; j < 3; j++) {
    for ( var l = 0; l < 3; l++) {
      if (currentProducts[j] === randomProduct[l]) {
        allProductsNew = false;
        console.log('');
        break;
      } else {
        allProductsNew = true;
      }
      console.log('allProductsNew: ' + allProductsNew);
    }
  }
};

//runSurvey();
//create a function to use the DOM to display images
//how should the DOM clear the previous cycle?

//create event listener for vote button click
