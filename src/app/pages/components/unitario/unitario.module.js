/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.unitario', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    
     $stateProvider
        .state('components.unitario', {
          url: '/estadisticas/unitario',
          templateUrl: 'app/pages/components/unitario/unitario.html',
          title: 'Unificado',
          controller: 'unitarioCtrl',
          sidebarMeta: {
            icon: 'ion-logo-facebook',
            order: 0,
          },
        });
    
  }

})();
