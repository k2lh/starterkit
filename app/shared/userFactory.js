'use strict';

angular
    .module('inquisio')
    .factory('userFactory', ['$http', function($http) {

        var factory = {};

        $http.get('../../json/users.json').success(function (data) {
            factory.user = data;
            // console.log(JSON.stringify(data));
        });

        return factory;

}]);