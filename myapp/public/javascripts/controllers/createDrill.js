app.controller('createDrill',['$scope','auth','$http',function($scope,auth,$http){
    
    $scope.user=null;
    auth.getUser().then(function(data){
        console.log("AUTH IS")
        console.log(data);
        $scope.user = data;
      }).catch(function(){
        $scope.error ='unable to get posts';
      });

      $scope.drillsteps = [{id: 'drillstep1', name: 'newDrill.drillstep1',data:''}
                        ,{id: 'drillstep2', name: 'newDrill.drillstep2',data:''},
                         {id: 'drillstep3', name: 'newDrill.drillstep3',data:''}];

    

    $scope.submitForm = function(){
        console.log($scope);
        console.log("form data is ");
        console.log($scope.drillsteps);
        $http.post('create_drill',$scope.drillsteps).
        then(function(response){
            console.log("response is ");
            console.log(response);
            //console.log($scope.newDrill);

            console.log('POST OK');
        }).catch(function(response){
            console.error('POST BAD');
        })
    }

    
   
   

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