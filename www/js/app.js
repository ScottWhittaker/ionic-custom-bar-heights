angular.module('starter', ['ionic'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('notabs', {
                url: "/notabs",
                templateUrl: "notabs.html"
            })

            .state('subheader-small', {
                url: '/subheaders/subheader-small',
                templateUrl: 'subheader-small.html'
            })

            .state('subheader-large', {
                url: '/subheaders/subheader-large',
                templateUrl: 'subheader-large.html'
            })

            .state('footer-small', {
                url: '/footers/footer-small',
                templateUrl: 'footer-small.html'
            })

            .state('footer-large', {
                url: '/footers/footer-large',
                templateUrl: 'footer-large.html'
            })

            .state('subfooter-small', {
                url: '/footers/subfooter-small',
                templateUrl: 'subfooter-small.html'
            })

            .state('subfooter-large', {
                url: '/footers/subfooter-large',
                templateUrl: 'subfooter-large.html'
            })

            // Tabs
            // ----------------------------------------------------------------------

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // footers
            // ----------------------------------------------------------------------

            .state('tab.footers', {
                url: '/footers',
                views: {
                    'tab-footers': {
                        templateUrl: 'templates/tab-footers.html'
                    }
                }
            })

            .state('tab.footer-small', {
                url: '/footers/footer-small',
                views: {
                    'tab-footers': {
                        templateUrl: 'footer-small.html'
                    }
                }
            })

            .state('tab.footer-large', {
                url: '/footers/footer-large',
                views: {
                    'tab-footers': {
                        templateUrl: 'footer-large.html'
                    }
                }
            })

            .state('tab.subfooter-small', {
                url: '/footers/subfooter-small',
                views: {
                    'tab-footers': {
                        templateUrl: 'subfooter-small.html'
                    }
                }
            })

            .state('tab.subfooter-large', {
                url: '/footers/subfooter-large',
                views: {
                    'tab-footers': {
                        templateUrl: 'subfooter-large.html'
                    }
                }
            })

            // subheaders
            // ----------------------------------------------------------------------

            .state('tab.subheaders', {
                url: '/subheaders',
                views: {
                    'tab-subheaders': {
                        templateUrl: 'templates/tab-subheaders.html'
                    }
                }
            })

            .state('tab.subheader-small', {
                url: '/subheaders/subheader-small',
                views: {
                    'tab-subheaders': {
                        templateUrl: 'subheader-small.html'
                    }
                }
            })

            .state('tab.subheader-large', {
                url: '/subheaders/subheader-large',
                views: {
                    'tab-subheaders': {
                        templateUrl: 'subheader-large.html'
                    }
                }
            })

            // combinations
            // ----------------------------------------------------------------------

            .state('tab.combos', {
                url: '/combos',
                views: {
                    'tab-combos': {
                        templateUrl: 'templates/tab-combos.html'
                    }
                }
            })

            .state('tab.footer-subfooter-default', {
                url: '/combos/footer-subfooter-default',
                views: {
                    'tab-combos': {
                        templateUrl: 'footer-subfooter-default.html'
                    }
                }
            })

            .state('tab.footer-subfooter-small', {
                url: '/combos/footer-subfooter-small',
                views: {
                    'tab-combos': {
                        templateUrl: 'footer-subfooter-small.html'
                    }
                }
            })

            .state('tab.footer-subfooter-large', {
                url: '/combos/footer-subfooter-large',
                views: {
                    'tab-combos': {
                        templateUrl: 'footer-subfooter-large.html'
                    }
                }
            })

            .state('tab.footer-subfooter-default-small', {
                url: '/combos/footer-subfooter-default-small',
                views: {
                    'tab-combos': {
                        templateUrl: 'footer-subfooter-default-small.html'
                    }
                }
            })

            .state('tab.footer-subfooter-default-large', {
                url: '/combos/footer-subfooter-default-large',
                views: {
                    'tab-combos': {
                        templateUrl: 'footer-subfooter-default-large.html'
                    }
                }
            })

            .state('tab.footer-subfooter-small-default', {
                url: '/combos/footer-subfooter-small-default',
                views: {
                    'tab-combos': {
                        templateUrl: 'footer-subfooter-small-default.html'
                    }
                }
            })

            .state('tab.footer-subfooter-large-default', {
                url: '/combos/footer-subfooter-large-default',
                views: {
                    'tab-combos': {
                        templateUrl: 'footer-subfooter-large-default.html'
                    }
                }
            })

            .state('tab.footer-subfooter-small-large', {
                url: '/combos/footer-subfooter-small-large',
                views: {
                    'tab-combos': {
                        templateUrl: 'footer-subfooter-small-large.html'
                    }
                }
            })

            .state('tab.footer-subfooter-large-small', {
                url: '/combos/footer-subfooter-large-small',
                views: {
                    'tab-combos': {
                        templateUrl: 'footer-subfooter-large-small.html'
                    }
                }
            })
        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/footers');

    })

    .directive('dummyList', function() {
        return {
            restrict: 'E',
            template: '<ul class="list"><li class="item" ng-repeat="n in [1,2,3,4,5,6,7,8,9,10,11,12]">Item {{n}}</li></ul>',
            replace: true
        };
    });
