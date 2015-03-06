'use strict';

angular
    .module('inquisio')
    .controller('mainController', ['$scope', '$http', 'userFactory',
        function ($scope, $http, userFactory) {

            $scope.alias = '';

            $scope.userChange = function(alias) {
                $scope.greeting = $scope.alias.username;
            };

            $http.get('../../json/users.json').success(function(data) {
                $scope.users = data;
                $scope.alias = $scope.users[0];
            });


    }
]);