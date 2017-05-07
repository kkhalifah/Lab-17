var app = angular.module('redditModule');

app.factory('redditFactory', function($http){
  //console.log('Hellow Factory');
  var redditPosts= [];
  $http.get('http://www.reddit.com/r/motorcycle.json')
  .then(function(response) {
    redditPosts.push(response.data.data.children);
//console.log(response.data.data.children);
  });

return{
    redditPosts,
}


})
// $http({
// method: 'GET',
// url: 'http://api.example.com/things',
// params: { name: 'Chioke', course: 'JS' }
// }).then(function(response) {
// console.log(response.data);
// });

//var app = angular.module('ourApp', []);
// The service is used exactly the same way in controllers.
// app.controller('ourCtrl', function($scope, ourService) {
// ourService.ourFunction();
// };
// The resulting service is the same, but the method
// of creating it is different.
// app.factory('ourService', function() {
// return {
// ourFunction: function() {
// awesome code
// }
// };
// });
