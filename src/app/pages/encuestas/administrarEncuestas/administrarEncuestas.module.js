/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.encuestas.administrarEncuestas', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    
     $stateProvider
        .state('encuestas.administrarEncuestas', {
          url: '/encuestas/administrar_encuesta',
          templateUrl: 'app/pages/encuestas/administrarEncuestas/administrarEncuestas.html',
          title: 'Administrar',
          controller: 'administrarEncuestasCtrl',
          sidebarMeta: {
            icon: 'ion-logo-check',
            order: 0,
          },
        });
    
  }

})();
