var app = angular.module('redditModule');

app.controller('redditCtrl', function($scope, redditFactory) {

  $scope.grabPostsFromReddit = function() {

    redditFactory.getPosts().then(function() {

      $scope.posts = redditFactory.returnPosts();
      console.log($scope.posts);

    });

  };

});

app.directive('redditPost', function() {

  return {
    restrict: 'AE',
    replace: false,
    templateUrl: 'redditPost.html'
  }

})
