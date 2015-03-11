'use strict';

angular.module('inquisio')
.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'home/home.html',
                controller: 'homeController'
            })

            .when('/home', {
                templateUrl: 'home/home.html',
                controller: 'homeController'
            })

            .when('/posts', {
                templateUrl: 'posts/posts.html',
                controller: 'postsController'
            })

            .when('/links', {
                templateUrl: 'links/links.html',
                controller: 'postsController'
            })

            .when('/tags', {
                templateUrl: 'tags/tags.html',
                controller: 'tagsController'
            })

            .when('/mail', {
                templateUrl: 'mail/mail.html',
                controller: 'mailController'
            })

            .when('/users', {
                templateUrl: 'users/users.html',
                controller: 'usersController'
            })

            .otherwise({
                redirectTo: '/home'
            });

});