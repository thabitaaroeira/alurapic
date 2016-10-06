angular.module('meusServicos', ['ngResource'])
        .factory(
                'recursoFoto',
                function ($resource) {

                    return $resource('v1/fotos/:fotoId', null, {
                        // podia ser qualquer nome (update)
                        update: {
                            method: 'PUT'
                        },
                        save: {
                            method: 'POST'
                        }
                    });

                }
        )
        .factory(
                'cadastroDeFotos',
                function (recursoFoto, $q, $rootScope) {
                    var servico = {};
                    
                    var evento = 'fotoCadastrada';

                    servico.cadastrar = function (foto) {
                        // $q retorna promise
                        return $q(function (resolve, reject) {
                            if (foto._id) { // alterar
                                recursoFoto.update(
                                        {fotoId: foto._id},
                                        foto,
                                        function () {
                                            // disparar evento
                                            $rootScope.$broadcast(evento);
                                            resolve({
                                                mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso!',
                                                inclusao: false
                                            });
                                        },
                                        function (erro) {
                                            console.log(erro);
                                            reject({
                                                mensagem: 'Não foi possível alterar a foto ' + foto.titulo});
                                        });

                            } else { // cadastrar
                                recursoFoto.save(foto,
                                        function () {
                                            // disparar evento
                                            $rootScope.$broadcast(evento);
                                            resolve({
                                                mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso!',
                                                inclusao: true
                                            });
                                        },
                                        function (erro) {
                                            console.log(erro);
                                            reject({
                                                mensagem: 'Não foi possível cadastrar a foto ' + foto.titulo});
                                        });
                            }

                            resolve(1);
                            reject('deu problema');
                        });
                    };

                    return servico;
                });
