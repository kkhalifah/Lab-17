//don't need to have but this tells you what module you are using.
var app = angular.module('redditModule');

app.directive('redditPost', function() {

  return {
    restrict: 'AE',
    replace: false,
    templateUrl: 'postInReddit.html'
  }
