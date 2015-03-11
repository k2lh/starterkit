'use strict';

angular
    .module('inquisio')
    .controller('tagsController', ['$scope', '$http',
        function ($scope, $http) {

            var userid = $scope.alias.userid;

            $scope.userChange = function() {
                console.log('hey');
            }

    }
]);
