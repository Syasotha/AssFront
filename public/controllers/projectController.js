myApp.controller('ProjectController', ['$scope',  'ProjectService', function ($scope, ProjectService) {

    function getProject() {
        ProjectService.get().then(function (projects) {
          
            $scope.projects = projects;
        })
    };

    getProject();
}]);