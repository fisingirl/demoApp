/**
 * Created by fayigaf on 5/10/2017.
 */
namespace DemoApp {
    'use strict';

    export interface IIndexController {
        eventName: string;
    }

    export class IndexController implements IIndexController{
        public eventName: string = "";

        public static $inject: string[] = ['$rootScope'];

        constructor(private $rootScope: angular.IRootScopeService){
            this.$rootScope.eventName = "Angular Boot Camp";
        }
    }

    angular.module('demoApp', ['ui.bootstrap', 'ui-templates'])
        .controller('indexController', IndexController);
}