(function () {
'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
      $scope.lunchName = "";
      var comma = ',';
      $scope.message = "";

      function splitString(stringToSplit, separator) {
        $scope.totalLunch = stringToSplit.split(separator);
        //console.log('The array has ' + $scope.totalLunch.length);
      }
      $scope.checkIfTooMuch = function () {
        splitString($scope.lunchName, comma);

        if ($scope.totalLunch.length > 0 && $scope.totalLunch.length <= 3) {
            $scope.message = "Enjoy!";
        }
        if ($scope.totalLunch.length > 3) {
            $scope.message = "Too much!";
        } else if ($scope.totalLunch.length <= 0 || $scope.lunchName == " " ||
      $scope.lunchName == "," || $scope.lunchName == "") {
            $scope.message = "Please enter data first";
        }
    }
  }
})();
