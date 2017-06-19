'use strict';

//create var to hold product objects
var productList = [
  new AddProduct('Boots', 'img/boots.jpg'),
  new AddProduct('Chair', 'img/chair.jpg'),
  new AddProduct('Scissors', 'img/scissors.jpg'),
  new AddProduct('Water Can', 'img/water-can.jpg'),
  new AddProduct('Wine Glass', 'img/wine-glass.jpg')
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
};
//create function to generate three DIFFERENT random numbers
//create a 'cooldown function' for the random numbers from the previous cycle

//create a function to use the DOM to display images
//how should the DOM clear the previous cycle?

//create a function to run the survey for x amount of cycles. make var surveyLength
//create event listener for vote button click
