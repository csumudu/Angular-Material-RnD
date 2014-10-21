angular.module('angularBasicsApp')
        .controller('HomeController',['$scope',function($scope){
            var d = new Date();
            var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

            $scope.day = days[d.getDay()];
            $scope.tom = days[(d.getDay()+1)%7];
    }])
    .directive('Highlight',function(){
        return function(scope,element,attibutes){
            if(scope.day == attibutes["Highlight"]){
                element.css("color",'#EE0000');
            }
        }
    });
