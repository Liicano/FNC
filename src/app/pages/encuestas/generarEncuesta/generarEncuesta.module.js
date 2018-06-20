/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.encuestas.generarEncuesta', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    
     $stateProvider
        .state('encuestas.generarEncuesta', {
          url: '/encuestas/generar_encuesta',
          templateUrl: 'app/pages/encuestas/generarEncuesta/generarEncuesta.html',
          title: 'Generar Encuesta',
          controller: 'generarEncuestaCtrl',
          sidebarMeta: {
            icon: 'ion-logo-check',
            order: 0,
          },
        });
    
  }

})();
