var myapp = angular.module("myModule", []);

myapp.controller("myController", function ($scope) {
  $scope.message = "Angular JS tutorial";
});

myapp.controller("myControllerObj", function ($scope) {
  var employee = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "male",
  };
  $scope.employee = employee;
});
