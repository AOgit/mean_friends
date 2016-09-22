app.controller('newController', ['$scope', '$location', '$routeParams', 'friendsFactory', function($scope, $location, $routeParams, friendsFactory) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
  $scope.friends = [];
  $scope.friend = [];

  var index = function(){
    friendsFactory.index(function(returnedData){
      $scope.friends = returnedData;
      console.log($scope.friends);
    });
  };
  
  index();

  var show = function(){
    friendsFactory.show($routeParams.id, function(returnedData){
      $scope.friend = returnedData[0];
    });
  };

  show();

  $scope.addFriend = function(){
    console.log($scope.newFriend);
    friendsFactory.create($scope.newFriend);
    $location.url('/friends');
  }

  $scope.unFriend = function(val){
    friendsFactory.delete(val);
    index();
  }

/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the friends when we get back?  We can re-run index.
*/
}]);