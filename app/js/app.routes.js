(function () {
    'use scripts';
    angular
        .module('app')
        .config(config);
    config.$inject = [
        '$locationProvider',
        '$stateProvider',
        '$urlRouterProvider'
    ];
    importScripts();
    function config($locationProvider, $stateProvider, $urlRouterProvider) {
        //html5 removes the need for # in URL
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $urlRouterProvider.otherwise('/');
        //angular-ui-router for multiple views
        $stateProvider
            .state('index', {
            url: '/',
            templateUrl: '/index.html',
            // views: {
            //     "viewA": {
            //         templateUrl: "app/home/homenav.html"
            //     },
            //     "viewB": {
            //         templateUrl: "app/home/home.html"
            //     }
            // }
            controller: 'IndexController'
        });
        //more states here.
    }
})();
//# sourceMappingURL=app.routes.js.map