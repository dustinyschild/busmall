'use strict';
var productNames = productList.map(function(productList){
  return productList.name;
});
var productViews = productList.map(function(productList){
  return productList.views;
});
var productVotes = productList.map(function(productList){
  return productList.votes;
});
var percentageVoted = productList.map(function(productList){
  return (productList.votes / productList.views);
});

var chartLocation = document.getElementById('bar-chart').getContext('2d');
console.log(chartLocation);
var myChart = new Chart(chartLocation, {
  type: 'bar',
  data: {
    labels: productNames,
    datasets: [
      {
        label: 'Product Views',
        data: viewedCount,
        backgroundColor: ['rgba(209, 0, 0, 0.4)',
          'rgba(255, 102, 34, 0.4)',
          'rgba(255, 218, 33, 0.4)',
          'rgba(51, 221, 0, 0.4)',
          'rgba(17, 51, 204, 0.4)',
          'rgba(34, 0, 102, 0.4)',
          'rgba(51, 0, 68, 0.4)',
          'rgba(0, 0, 0, 0.4)'
        ]
      }, //productViews
      {
        label: 'Product Votes',
        data: selectedCount,
        backgroundColor: [
          'rgb(209, 0, 0)',
          'rgb(255, 102, 34)',
          'rgb(255, 218, 33)',
          'rgb(51, 221, 0)',
          'rgb(17, 51, 204)',
          'rgb(34, 0, 102)',
          'rgb(51, 0, 68)',
          'rgb(0, 0, 0)'
        ]
      } //productVotes
    ]
  },
  options: {
    scales: {
      xAxes: [{
        stacked: true
      }]
    }
  }
}
);

var chartLocation2 = document.getElementById('pie-chart');

var pieChart = new Chart(chartLocation2, {
  type: 'pie',
  data: {
    labels: productNames,
    datasets: [
      {
        label: 'Percentage Voted When Viewed',
        data: percentageVoted,
        backgroundColor: [
          'rgb(209, 0, 0)',
          'rgb(255, 102, 34)',
          'rgb(255, 218, 33)',
          'rgb(51, 221, 0)',
          'rgb(17, 51, 204)',
          'rgb(34, 0, 102)',
          'rgb(51, 0, 68)',
          'rgb(0, 0, 0)'
        ]
      }
    ]
  }
});
