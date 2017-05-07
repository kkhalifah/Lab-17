var app = angular.module('redditModule');

app.controller('redditCtrl', function($scope, $http){
//console.log("hello");
  // console.log(karenFactory);

  $http.get('http://www.reddit.com/r/babyelephants.json').then(function(response) {
    // redditPosts.push(response.data.data.children);
//console.log(response.data.data.children);

  //putting scope into posts creative variable on the scope directive can access
  $scope.posts = response.data.data.children;
console.log($scope.posts);
  });
});
