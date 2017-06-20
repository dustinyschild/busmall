//move data out of objects to easily fit into the chart
var productNames = productList.map(function(productList){
  return productList.name;
});
var productViews = productList.map(function(productList){
  return productList.views;
});
var productVotes = productList.map(function(productList){
  return productList.votes;
});

console.log('Names: ' + productNames);
console.log('Views: ' + productViews);
console.log('Votes: ' + productVotes);

//target chart in DOM
var myChart = document.getElementById('pie-chart');

//
