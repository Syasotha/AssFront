var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/main.html"
    })
    .when("/project", {
        templateUrl : "./views/project.html"
    })
    .when("/projectManage", {
        templateUrl : "./views/projectManager.html"
    })
    .when("/emp", {
        templateUrl : "./views/employee.html"
    });
});