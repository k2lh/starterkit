'use strict';

angular.module('inquisio')
.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'viewA/viewA.html',
                controller: 'viewAController'
            })

            .when('/viewA', {
                templateUrl: 'viewA/viewA.html',
                controller: 'viewAController'
            })

            .when('/viewB', {
                templateUrl: 'viewB/viewB.html',
                controller: 'viewBController'
            })

            .otherwise({
                redirectTo: '/viewA'
            });

});