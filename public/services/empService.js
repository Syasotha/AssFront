myApp.factory('EmpService', ['$http', function ($http) {
    return {
        get: function () {
            return $http.get('http://localhost:8080/DellService/webapi/employee/getAllEmployee').then(function (res) {
                console.log(res.data);
                return res.data;
            });
        },

        add: function (employee) {
            return $http.post('http://localhost:8080/DellService/webapi/employee/addEmployee',
                employee).then(function (res) {
                    return res.data;
                });
        },

        update: function (nEmployee) {
            return $http.put('http://localhost:8080/DellService/webapi/employee/updateEmployee/' + nEmployee.id, nEmployee)
            .then(function (res) {
                return res.data;
            });
        },
    };
}]);