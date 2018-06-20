var app = angular.module('voluntariado', []);



app.controller('voluntariadoCtrl', function($scope) {
   
    $scope.enviar_formulario = function(voluntario){
    	console.log(voluntario);
    }


$scope.institucion_formulario = function(nivel_educacion){
	$scope.estudiante = (nivel_educacion == 'estudiante')?true:false;
	$scope.empleado = (nivel_educacion == 'empleado')?true:false;
}

   
});