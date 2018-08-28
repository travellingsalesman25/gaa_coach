var app = angular.module('TrainingDrillApp', ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
        .when('/handling',{
            templateUrl:'/indexes/home.ejs'
        })
        .when('/ballWork',{
            //controller:'drillType',
            templateUrl:'/indexes/drill_type.ejs'
        })
        .when('/create_drill',{
            controller:'createDrill',
            templateUrl:'/indexes/new_drill.ejs'
        })
        .when('/drills',{
            controller:'myCtrl',
            templateUrl:'/indexes/drills1.ejs'
        });
});