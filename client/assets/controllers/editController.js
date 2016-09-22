app.controller('editController', ['$scope', '$location', '$routeParams', 'friendsFactory', function($scope, $location, $routeParams, friendsFactory) {
  /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial - 
    so we didn't set a variable so we could reuse it - 
    we just run the friendsFactory method directly.
  */

  // get this to load using the code from the platform.

$scope.friend = [];

var show = function(){
    friendsFactory.show($routeParams.id, function(returnedData){
      $scope.friend = returnedData[0];
    });
  };

show();

$scope.editFriend = function() {
  friendsFactory.update($routeParams.id, $scope.editAFriend);
  $location.url('/friends')
}
  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method 
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see 
    all of the friends when we get back including the updated on??  
    See Index in the previous controller.
  */
}]);