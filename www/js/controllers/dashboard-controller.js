(function(){
  'use strict';

  angular.module('starter')

  .controller('DashboardCtrl', function($rootScope, $scope, $state, Note, User){
    Note.count().then(function(response){
      $scope.count = response.data.count;
    });

    $scope.logout = function(){
      User.logout().then(function(){
        $rootScope.rootuser = null;
        $state.go('tab.account');
      });
    };
  });

})();
