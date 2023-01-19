var myApp = angular
  .module("myApp", [])
  .controller("myController", function ($scope) {
    var employee = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
    };
    $scope.employee = employee;
  });
