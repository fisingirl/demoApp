/**
 * Created by fayigaf on 5/10/2017.
 */
var DemoApp;
(function (DemoApp) {
    'use strict';
    var IndexController = (function () {
        function IndexController($rootScope) {
            this.$rootScope = $rootScope;
            this.eventName = "";
            this.$rootScope.eventName = "Angular Boot Camp";
        }
        return IndexController;
    }());
    IndexController.$inject = ['$rootScope'];
    DemoApp.IndexController = IndexController;
    angular.module('demoApp', ['ui.bootstrap', 'ui-templates'])
        .controller('indexController', IndexController);
})(DemoApp || (DemoApp = {}));
//# sourceMappingURL=index.js.map