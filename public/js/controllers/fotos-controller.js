angular.module('alurapic').controller('FotosController', function ($scope,
        recursoFoto) {

    // Não importa a ordem dos parâmetros de injeção no controller ($scope, $http)

    $scope.filtro = '';
    $scope.fotos = [];
    $scope.mensagem = '';

//    var recursoFoto = $resource('v1/fotos/:fotoId');

    // consulta
    recursoFoto.query(
            function (fotos) {
                $scope.fotos = fotos;
            },
            function (erro) {
                console.log(erro);
            });

    $scope.remover = function (foto) {

        recursoFoto.delete({fotoId: foto._id},
                function () {
                    var indiceFoto = $scope.fotos.indexOf(foto);
                    $scope.fotos.splice(indiceFoto, 1);
                    $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso.';
                },
                function (erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;
                });

    };

});
