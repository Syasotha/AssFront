myApp.factory('ProjectManagerService', ['$http', function ($http) {
    return {
        get: function () {
            return $http.get('http://localhost:8080/DellService/webapi/manager/getAllManagers').then(function (res) {
                console.log(res.data);
                return res.data;
            });
        },

        add: projectManager => $http.post('http://localhost:8080/DellService/webapi/manager/addProjectManager', projectManager).then(response => response.data),
    };
}]);