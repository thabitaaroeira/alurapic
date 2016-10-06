angular.module('alurapic').controller('FotoController', function ($scope,
        $routeParams, recursoFoto, cadastroDeFotos) {

    $scope.foto = {};
    $scope.mensagem = '';

    var fotoId = $routeParams.fotoId;
    if (fotoId) {
        recursoFoto.get(
                {fotoId: fotoId},
                function (foto) {
                    $scope.foto = foto;
                },
                function (erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível obter a foto.';
                });
    }

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {

            cadastroDeFotos.cadastrar($scope.foto)
                    .then(function (dados) {
                        $scope.mensagem = dados.mensagem;
                        if (dados.inclusao) {
                            $scope.foto = {};
                        }
                        // disparar evento
//                        $scope.$broadcast('fotoCadastrada');
                    })
                    .catch(function (dados) {
                        $scope.mensagem = dados.mensagem;
                    });
        }
    };
});