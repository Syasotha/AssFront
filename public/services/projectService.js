myApp.factory('ProjectService', ['$http', function ($http) {
    return {
        get: function () {
            return $http.get('http://localhost:8080/DellService/webapi/project/getAllProjects').then(function (res) {
                console.log(res.data);
                return res.data;
            });
        },
        add: function (project) {
            return $http.post('http://localhost:8080/DellService/webapi/project/addProject',
                project).then(function (res) {
                    return res.data;
                });
        },

        update: function (nProject) {
            return $http.put('http://localhost:8080/DellService/webapi/project/updateProject/' + nProject.id, nProject)
                .then(function (res) {
                    return res.data;
                });
        }
    };
}]);