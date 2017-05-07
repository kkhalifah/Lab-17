var app = angular.module('redditModule');

app.controller('redditController', function($scope, redditFactory){
//get posts
$scope.postsFromReddit = function () {
redditFactory.getPosts().then(function() {
//set posts
  $scope.posts = redditFactory.returnPosts();
console.log($scope.posts);

});

};
  //response.data.data.children;

  });

  app.directive('redditPost', function() {

    return {
      restrict: 'AE',
      replace: false,
      templateUrl: 'redditPost.html'
    }

  })
