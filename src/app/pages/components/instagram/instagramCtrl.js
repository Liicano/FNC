(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.instagram')
      .controller('instagramCtrl', instagramCtrl);

  /** @ngInject */
  function instagramCtrl($scope, baConfig) {


// CHARTS DE EXTRACCION DE DATA DE FACEBOOK

var layoutColors = baConfig.colors;
	
	// GRAFICA PIE
    $scope.labels =["Me gusta", "Comentarios"];
    $scope.data = [20, 40];
    // ===================
    // GRAFICA DONA
     $scope.labelsDona =["Total participantes", "Total de usuarios"];
    $scope.dataDona = [40, 35];
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
