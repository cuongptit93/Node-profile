var myProfile = angular.module('myProfile',[]);
myProfile.controller('controllerProfile', ['$scope', '$http', function($scope, $http){

console.log("Hello controller");

var refresh = function(){
     $http.get('/user').success(function(response){
        console.log("ccc");
        $scope.user = response;
        $scope.user = "";
    });
    }
    refresh();

$scope.addUser = function() {
    console.log($scope.user);
    $http.post('/user', $scope.user).success(function(response){
        /*console.log($scope.contact.name);*/
        console.log(response);
        refresh();
    });
    };

}]);