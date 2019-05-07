myApp.factory('ProjectService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get('http://localhost:8080/DellService/webapi/project/getAllProjects').then(function (res) {
            console.log(res.data);    
            return res.data;
            });
        },
    };
}]);