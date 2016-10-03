angular.module('alurapic').controller('FotoController', function ($scope,
        $routeParams, recursoFoto) {

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
//        $http.get('v1/fotos/' + fotoId)
//                .success(function (foto) {
//                    $scope.foto = foto;
//                })
//                .error(function (erro) {
//                    console.log(erro);
//                    $scope.mensagem = 'Não foi possível obter a foto.';
//                });
    }

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {

            if ($scope.foto._id) { // alterar

                recursoFoto.update(
                        {fotoId: $scope.foto._id}, // param
                        $scope.foto, // objeto a alterar
                        function () {
                            $scope.mensagem = 'Foto ' + $scope.foto.titulo + ' alterada com sucesso!';
                            $scope.foto = {};
                        },
                        function (erro) {
                            console.log(erro);
                            $scope.mensagem = 'Não foi possível alterar a foto '
                                    + $scope.foto.titulo;
                        });

//                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
//                        .success(function () {
//                            $scope.mensagem = 'Foto ' + $scope.foto.titulo + ' alterada com sucesso!';
//                            $scope.foto = {};
//                        })
//                        .error(function (erro) {
//                            console.log(erro);
//                            $scope.mensagem = 'Não foi possível alterar a foto '
//                                    + $scope.foto.titulo;
//                        });

            } else { // incluir

                recursoFoto.add($scope.foto,
                        function () {
                            $scope.mensagem = 'Foto incluída com sucesso!';
                            $scope.foto = {};
                        },
                        function (erro) {
                            console.log(erro);
                            $scope.mensagem = 'Não foi possível incluir a foto.';
                        }
                );

//                $http.post('v1/fotos', $scope.foto)
//                        .success(function () {
//                            $scope.mensagem = 'Foto incluída com sucesso!';
//                            $scope.foto = {};
//                        })
//                        .error(function (erro) {
//                            console.log(erro);
//                            $scope.mensagem = 'Não foi possível incluir a foto.';
//                        });
            }
        }
    };
});