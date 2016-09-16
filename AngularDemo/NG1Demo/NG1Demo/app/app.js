var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'WelcomeController',
            templateUrl: 'views/welcome.html'
        })
        .when('/customers',
        {
            controller: 'CustomerController',
            templateUrl: 'views/customer.html'
        })
    .otherwise({ redirectTo: '/' })
});


app.service('customerService', function ($http, $q) {
    var controllerUrl = 'http://wdf2demo.leanconsulting.ph/api/Customers';    
    return {
        getAll: function (status) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: controllerUrl
            }).success(function (data, status, headers, config) {
                deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                deferred.reject(status);
            });
            return deferred.promise;
        }
    }
});


app.controller('CustomerController', function ($scope, customerService, $location) {
    $scope.customers = [];

    $scope.getCustomers = function () {
        customerService.getAll().then(function (data) {
            $scope.customers = data;
        }, function (error) {
            console.log(error);
        });
    };

    $scope.back = function () {
        $location.path('/');
    }
});

app.controller('WelcomeController', function ($scope, customerService) {
   $scope.pageTitle = 'Angular JS Demo'
});
