app.directive('drillType',function(){
    return{
        restrict:'E',
        scope:{
            drill:'='
        },
        templateUrl:'javascripts/directives/drillInfo.html'
    };
});