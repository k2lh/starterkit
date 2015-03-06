'use strict';

angular
    .module('inquisio')
    .controller('viewAController', ['$scope', '$http', 'userFactory',
        function ($scope, $http, userFactory) {

            $scope.hello = "hi there";

            $http.get('../../json/users.json').success(function(data) {
                $scope.users = data;
            });

            // $scope.users = userFactory;
            // console.log(userFactory);

        }
]);