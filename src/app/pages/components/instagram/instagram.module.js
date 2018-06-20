/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.instagram', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    
     $stateProvider
        .state('components.instagram', {
          url: '/estadisticas/instagram',
          templateUrl: 'app/pages/components/instagram/instagram.html',
          title: 'Instagram',
          controller: 'instagramCtrl',
          sidebarMeta: {
            icon: 'ion-logo-instagram',
            order: 0,
          },
        });
    
  }

})();
