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

        update: function (nProjectManager) {
            return $http.put('http://localhost:8080/DellService/webapi/manager/updateProjectManager/' + nProjectManager.id, nProjectManager).then(function (res) {
                return res.data;
            });
        },

        delete: function (nProjectManager) {
            return $http.delete('http://localhost:8080/DellService/webapi/manager/deleteProjectManager/' + nProjectManager.id, nProjectManager)
            .then(function(res){
                return res.data;
            })
        }

    }
}]);