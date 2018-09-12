app.controller('createDrill',['$scope','auth','$http',function($scope,auth,$http){

    $scope.user=null;
    auth.getUser().then(function(data){
        console.log("AUTH IS")
        console.log(data);
        $scope.user = data;
      }).catch(function(){
        $scope.error ='unable to get posts';
      });

    $scope.submitForm = function(){
        $http.post('create_drill',$scope.formData).
        then(function(response){
            console.log($scope.formData);
            console.log('POST OK');
        }).catch(function(response){
            console.error('POST BAD');
        })
    }

    $scope.drillsteps = [{id: 'drillstep1', name: 'drillstep1'}, {id: 'drillstep2', name: 'drillstep2'}, {id: 'drillstep3', name: 'drillstep3'}];
   
    $scope.addNewStep = function() {
        var newItemNo = $scope.drillsteps.length+1;
        $scope.drillsteps.push({'id' : 'drillstep' + newItemNo, 'name' : 'drillstep' + newItemNo});
      };
      
      $scope.removeNewStep = function() {
        var newItemNo = $scope.drillsteps.length-1;
            if ( newItemNo !== 0 ) {
            $scope.drillsteps.pop();
            }
        }
        $scope.showAddStep = function(step) {
            return step.id === $scope.drillsteps[$scope.drillsteps.length-1].id;
        }
    
}]);