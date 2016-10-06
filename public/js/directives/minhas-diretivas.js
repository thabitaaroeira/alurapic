angular.module('minhasDiretivas', [])

        .directive('minhaFoto', function () {
            var ddo = {};
            ddo.restrict = "AE";
            ddo.scope = {
                titulo: '@',
                url: '@'
            };
            ddo.transclude = true;
            ddo.templateUrl = 'js/directives/minha-foto.html';
            return ddo;
        })

        .directive('meuPainel', function () {
            // directive definition object
            var ddo = {};

            // A = attribute
            // E = element
            ddo.restrict = "AE";

            /*
             * Adicionando propriedade ao escopo isolado da diretiva. 
             * Se o nome da variável e da propriedade forem iguais, 
             * pode ser só '@'
             * titulo: '@titulo'
             */
            ddo.scope = {
                titulo: '@'
            };

            /**
             * Elemento permite manter elementos fihos.
             */
            ddo.transclude = true;

            ddo.templateUrl = 'js/directives/meu-painel.html';

            return ddo;
        })

        .directive('meuBotaoPerigo', function () {
            var ddo = {};

            ddo.restrict = 'E';

            ddo.scope = {
                nome: '@', // string
                acao: '&' // expressao evaluada
            };

            ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

            return ddo;
        })

        .directive('meuFocus', function () {
            var ddo = {};

            ddo.restrict = 'A';

//            ddo.scope = {
//                focado: '=' // qualquer alteração q a diretiva faça, o controller fica sabendo
//            };

            ddo.link = function (scope, element) { // scope da diretiva
                // observador
//                scope.$watch('focado', function () {
//                    if (scope.focado) {
//                        // jqlite element
//                        element[0].focus();
//                        scope.focado = false;
//                    }
//                });
                scope.$on('fotoCadastrada', function () {
                    element[0].focus();
                });
            };

            return ddo;
        })
        ;

