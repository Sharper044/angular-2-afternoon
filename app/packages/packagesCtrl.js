angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrvc) {
  mainSrvc.getPackageInfo().then(function(res) {
    $scope.allPackages = res.data;

    if ($stateParams.country) {
      $scope.packages = $scope.allPackages.filter(x => x.country === $stateParams.country);
    }
  })
})