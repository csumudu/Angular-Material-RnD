angular.module('angularBasicsApp')
    .controller('HeaderController',['$scope','$mdSidenav',function($scope,$mdSidenav){
        $scope.onMenuClick = function(){
            $mdSidenav('right').toggle();
        }
    }]);