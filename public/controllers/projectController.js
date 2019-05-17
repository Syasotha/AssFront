myApp.controller('ProjectController', ['$scope', 'ProjectService', function ($scope, ProjectService) {
    $scope.nProject = {};
    getProject();
    function getProject() {
        ProjectService.get().then(function (projects) {

            $scope.projects = projects;
        })
    };


    $scope.addProject = function (project) {
        ProjectService.add(project).then(function (data) {
            if (data.add) {
                alert("Successfully added");
                getProject();
            } else {
                alert("Error");
            }

        })
    };

    $scope.editProject = function (project) {
        $scope.nProject = project;
    };

    $scope.UpdateProject = function (nProject) {
        ProjectService.update(nProject).then(function (data) {
            if (data.success) {
                alert("Successfully updated");
                getProject();
            } else {
                alert("Error");
            }
        })
    };

    $scope.DeleteProject= function (nProject) {
        //var result = confirm("Are you sure ?");
        // if (result == true){
        ProjectService.delete(nProject).then(function (data) {
            if (data.success) {
                console.log(data)

                alert("Successfully deleted");
            }

        })
        // }
    };

}]);