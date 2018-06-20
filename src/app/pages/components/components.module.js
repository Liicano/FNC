/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components', [
    'BlurAdmin.pages.components.facebook',
    'BlurAdmin.pages.components.instagram',
    'BlurAdmin.pages.components.unitario'

  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('components', {
          url: '/components',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Estadisticas',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 100,
          },
        });
  }

})();
