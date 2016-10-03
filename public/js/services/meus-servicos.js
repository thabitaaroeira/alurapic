angular.module('meusServicos', ['ngResource'])
        .factory(
                'recursoFoto',
                function ($resource) {

                    return $resource('v1/fotos/:fotoId', null, {
                        // podia ser qualquer nome (update)
                        update: {
                            method: 'PUT'
                        },
                        add: {
                            method: 'POST'
                        }
                    });

                }
        );