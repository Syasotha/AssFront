myApp.factory('EmpService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get('http://localhost:8080/DellService/webapi/employee/getAllEmployee').then(function (res) {
            console.log(res.data);    
            return res.data;
            });
        },
    };
}]);