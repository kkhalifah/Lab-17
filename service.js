var app = angular.module('redditModule');

app.factory('redditFactory', function($http) {

  var redditPosts = [];

  return {
    getPosts: getPosts,
    returnPosts: returnPosts
  };

  function getPosts() {
    var promise = $http({
      method: 'GET',
      url: 'http://www.reddit.com/r/aww.json'
    }).then(function successCallback(response) {
      redditPosts = response.data.data.children;
    }, function(error) {
      console.log(error);
    });
    return promise;
  }

  function returnPosts() {
    return redditPosts;
  }

});
