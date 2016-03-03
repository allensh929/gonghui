 'use strict';

angular.module('gonghuiApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-gonghuiApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-gonghuiApp-params')});
                }
                return response;
            }
        };
    });
