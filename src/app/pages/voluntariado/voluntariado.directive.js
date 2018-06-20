(function () {
  'use strict';

  angular.module('BlurAdmin.pages.voluntariado', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('voluntariado', {
          url: '/voluntariado',
          templateUrl: 'app/pages/voluntariado/voluntariado.html',
          title: 'Voluntariado',
          controller: 'voluntariadoCtrl',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
  }

})();
