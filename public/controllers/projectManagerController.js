myApp.controller('ProjectManagerController', ['$scope', 'ProjectManagerService', function ($scope, ProjectManagerService) {
    $scope.nProjectManager = {};
    getProjectManager();
    function getProjectManager() {
        ProjectManagerService.get().then(function (projectManagers) {

            $scope.projectManagers = projectManagers;
        })
    };



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
    $scope.UpdateProjectManager = function (nProjectManager) {
        ProjectManagerService.update(nProjectManager).then(function (data) {
            if (data.success) {
                alert("Successfully updated");
                getProjectManager();
            } else {
                alert("Error");
            }
        })
    };

    $scope.DeleteProjectManager = function (nProjectManager) {
        //var result = confirm("Are you sure ?");
        // if (result == true){
        ProjectManagerService.delete(nProjectManager).then(function (data) {
            if (data.success) {

                alert("Successfully deleted");
            }

        })
        // }
    };

}]);