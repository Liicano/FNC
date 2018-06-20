(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.facebook')
      .controller('facebookCtrl', facebookCtrl);

  /** @ngInject */
  function facebookCtrl($scope, baConfig) {

  
// CHARTS DE EXTRACCION DE DATA DE FACEBOOK

var layoutColors = baConfig.colors;
	
	// GRAFICA PIE
    $scope.labels =["Me gusta", "Me encanta", "Me entristece", "Me molesta"];
    $scope.data = [20, 40, 5, 35];
    // ===================
    // GRAFICA DONA
     $scope.labelsDona =["Total participantes", "Total de usuarios"];
    $scope.dataDona = [130, 375];
    // ===================
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

    $scope.changeData = function () {
      $scope.data = shuffle($scope.data);
    };

    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    }


// ==================================



  }

})();
