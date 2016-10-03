angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute',
    'meusServicos'])
        .config(function ($routeProvider, $locationProvider) {

            // Se o back end nao estiver preparado, remover
            // Remover tralha (#) da rota
            // Se o browser nao reconhecer, ele da fallback
            $locationProvider.html5Mode(true);

            // Principal (pesquisa)
            $routeProvider.when('/fotos', {
                templateUrl: 'partials/principal.html',
                controller: 'FotosController'
            });

            // Foto (cadastro)
            $routeProvider.when('/fotos/new', {
                templateUrl: 'partials/foto.html',
                controller: 'FotoController'
            });

            // Foto (alteração)
            $routeProvider.when('/fotos/edit/:fotoId', {
                templateUrl: 'partials/foto.html',
                controller: 'FotoController'
            });

            // Url invalida
            $routeProvider.otherwise({
                redirectTo: '/fotos'
            });

        });
