var app = angular.module('redditModule');

app.factory('redditFactory', function($http){
  var redditPosts= [];

    function getPosts() {
      var promise = $http({
        method: 'GET',
        url: 'http://www.reddit.com/r/babyelephants.json'
      }).then(function successCallback(response) {
        redditPosts = response.data.data.children;
        console.log(response.data.data.children);
      }, function(error) {
        console.log(error);
      });
      return promise;
    }
    function returnPosts () {
        return redditPosts;
    }

    return {
      getPosts: getPosts
      returnPosts: returnPosts
    };

  )};
  // $http.get('http://www.reddit.com/r/babyelephants.json')
  // .then(function(response) {
  //   redditPosts.push(response.data.data.children);
//console.log(response.data.data.children);
  //});
//console.log('Hello Factory');

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
