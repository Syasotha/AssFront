myApp.controller('EmpController', ['$scope', 'EmpService', function ($scope, EmpService) {
    //$scope.nEmployee = {};
    function getEmployees() {
        EmpService.get().then(function (employees) {

            $scope.employees = employees;
        })
    };
    getEmployees();

    $scope.addEmployee = function (employee) {
        EmpService.add(employee).then(function (data) {
            if (data.add) {
                alert("Successfully added");
                getEmployees();
            } else {
                alert("Error");
            }

        })
    };

    $scope.editEmployee = function (employee) {
        $scope.nEmployee = employee;
    };

    $scope.UpdateEmployee = function (nEmployee) {
        EmpService.update(nEmployee).then(function (data) {
            if (data.success) {
                alert("Successfully updated");
                getEmployees();
            } else {
                alert("Error");
            }
        })
    };
}]);