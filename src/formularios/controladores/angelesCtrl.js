var app = angular.module('angeles', []);



app.controller('angelesCtrl', function($scope) {
   
	
  

    $scope.enviar_formulario = function(angel){
    	console.log(angel);
    }


// $scope.institucion_formulario = function(nivel_educacion){
// 	$scope.estudiante = (nivel_educacion == 'estudiante')?true:false;
// 	$scope.empleado = (nivel_educacion == 'empleado')?true:false;
// }

   
});