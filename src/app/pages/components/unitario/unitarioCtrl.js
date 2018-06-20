(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.unitario')
      .controller('unitarioCtrl', unitarioCtrl);

  /** @ngInject */
  function unitarioCtrl($scope, baConfig) {

  	 var layoutColors = baConfig.colors;
  	 $scope.labelsDona =["Facebook", "Instagram"];
     $scope.dataDona = [20, 40];

      $scope.options = {
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: layoutColors.defaultText
        }
      }
    };


        $scope.dt = new Date();
        $scope.optionsDatepicker = {
            showWeeks: true,
            minMode: 'month'

  };


 $scope.labels =["Enero", "Jun", "Jul", "Aug", "Sep"];
    $scope.dataLineal = [
      [65, 59, 90, 81, 56],
      [28, 48, 40, 19, 88]
    ];
    $scope.series = ['Product A', 'Product B'];


  }

})();
