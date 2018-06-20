/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.voluntariado')
    .controller('voluntariadoCtrl', voluntariadoCtrl);

  /** @ngInject */
  function voluntariadoCtrl($scope, fileReader, $filter, $uibModal) {
    
    $scope.picture = $filter('appImage')('theme/no-photo.png');
    $scope.uploadPicture = function () {
      var fileInput = document.getElementById('uploadFile');
      fileInput.click();

    };

  }

})();
