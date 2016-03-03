'use strict';

angular.module('gonghuiApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


