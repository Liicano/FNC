(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('dashboardCtrl', dashboardCtrl);

  /** @ngInject */
  function dashboardCtrl($scope, baConfig) {

    // DONUGHT PARTICIPACION GENERAL
  	var layoutColors = baConfig.colors;
    $scope.labelsTGP =["D. Especiales", "Encuestados", "Registrados"];
    $scope.dataTGP = [20,5, 43];
    // DONUGHT TOTAL DE REGISTRADOS
    var layoutColors = baConfig.colors;
    $scope.labelsTR =["V. inscritos", "A. subscritos"];
    $scope.dataTR = [20, 43];
    // DONUGHT DONATIVOS TOTALES
    var layoutColors = baConfig.colors;
    $scope.labelsTD =["A. Esperanza", "Transferencia", "Deposito", "MercadoPago"];
    $scope.dataTD = [350.00, 672.00, 1000.00, 890.00];


    $scope.optionsTGP = {
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





  }

})();
