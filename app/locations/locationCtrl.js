angular.module('devmtnTravel').controller('locationCtrl', function($scope, mainSrvc){
  mainSrvc.getTravelInfo().then(function(res) {
    $scope.locations = res.data;
  })
});