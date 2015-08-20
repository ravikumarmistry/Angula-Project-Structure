app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'components/home/homeView.html',
            controller: 'homeController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});