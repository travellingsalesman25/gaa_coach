var app = angular.module('TrainingDrillApp', ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl:'/indexes/home.ejs'
        })
        .when('/about',{
            //controller:'drillType',
            templateUrl:'/indexes/drill_type.ejs'
        })
        .when('/create_drill',{
            controller:'createDrill',
            templateUrl:'/indexes/new_drill.ejs'
        })
        .when('/register',{
            controller:'createUser',
            templateUrl:'/indexes/createuser.ejs'
        })
        .when('/login',{
            controller:'loginUser',
            templateUrl:'/indexes/loginuser.ejs'
        })
        .when('/drills',{
            controller:'myCtrl',
            templateUrl:'/indexes/drills1.ejs'
        });
});

