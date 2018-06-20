/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.facebook', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    
     $stateProvider
        .state('components.facebook', {
          url: '/estadisticas/facebook',
          templateUrl: 'app/pages/components/facebook/facebook.html',
          title: 'Facebook',
          controller: 'facebookCtrl',
          sidebarMeta: {
            icon: 'ion-logo-facebook',
            order: 0,
          },
        });
    
  }

})();
