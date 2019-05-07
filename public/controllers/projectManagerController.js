myApp.controller('ProjectManagerController', ['$scope',  'ProjectManagerService', function ($scope, ProjectManagerService) {

    function getProjectManager() {
        ProjectManagerService.get().then(function (projectManagers) {
          
            $scope.projectManagers = projectManagers;
        })
    };

    getProjectManager();
}]);