myApp.factory('ProjectManagerService', ['$http', function ($http) {
    return {
        get: function () {
            return $http.get('http://localhost:8080/DellService/webapi/manager/getAllManagers').then(function (res) {
                console.log(res.data);
                return res.data;
            });
        },

        add: function (pManager) {
            return $http.post('http://localhost:8080/DellService/webapi/manager/addProjectManager',
                pManager).then(function (res) {
                    return res.data;
                });
        },


    }
}]);