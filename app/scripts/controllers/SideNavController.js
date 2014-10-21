angular.module('angularBasicsApp')
    .controller('SideNavController',['$scope',function($scope){
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