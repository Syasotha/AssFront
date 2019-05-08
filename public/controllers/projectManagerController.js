myApp.controller('ProjectManagerController', ['$scope', 'ProjectManagerService', function ($scope, ProjectManagerService) {
    // $scope.nProjectManager = {};
    function getProjectManager() {
        ProjectManagerService.get().then(function (projectManagers) {

            $scope.projectManagers = projectManagers;
        })
    };

    getProjectManager();

    $scope.addProjectManager = function (pManager) {
        ProjectManagerService.add(pManager).then(function (data) {
            if (data.add) {
                alert("Successfully added");
                getProjectManager();
            } else {
                alert("Error");
            }

        })
    };

    $scope.Edit = function (projectManager) {
        $scope.nProjectManager = projectManager;


    };


}]);