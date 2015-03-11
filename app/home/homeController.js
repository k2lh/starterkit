'use strict';

angular
    .module('inquisio')
    .controller('homeController', ['$scope',
        function ($scope) {

            $scope.hello = "hi there";

        }
]);