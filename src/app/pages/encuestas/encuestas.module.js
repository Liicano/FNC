/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.encuestas', [
    'BlurAdmin.pages.encuestas.generarEncuesta',
    'BlurAdmin.pages.encuestas.administrarEncuestas'
    ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('encuestas', {
          url: '/encuestas',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Encuestas',
          sidebarMeta: {
            icon: 'ion-clipboard',
            order: 500,
          },
        });
  }

})();
