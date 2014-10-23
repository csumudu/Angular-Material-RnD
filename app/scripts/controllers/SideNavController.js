angular.module('angularBasicsApp')
    .controller('SideNavController',['$scope','$rootScope',function($scope,$rootScope){
        var sideNav ={};
        sideNav.menu = [{
            name : 'Scope Test',
            icon : ''
        },
            {
                name : 'Directive Test',
                icon : ''
            },
            {
                name : 'Director Overide',
                icon : ''
            }];
        sideNav.isMenuOpen = false;

        $scope.model = sideNav;

    }]);