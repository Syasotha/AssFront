myApp.controller('EmpController', ['$scope',  'EmpService', function ($scope, EmpService) {

    function getEmployees() {
        EmpService.get().then(function (employees) {
          
            $scope.employees = employees;
        })
    };

    getEmployees();
}]);