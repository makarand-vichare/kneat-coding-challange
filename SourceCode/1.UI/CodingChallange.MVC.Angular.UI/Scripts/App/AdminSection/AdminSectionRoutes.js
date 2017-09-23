var AdminSection;
(function (AdminSection) {
    var AdminSectionRoutes = (function () {
        function AdminSectionRoutes() {
        }
        AdminSectionRoutes.configureRoutes = function ($routeProvider) {
            $routeProvider
                .when("/", {
                controller: "AdminSection.Controllers.AdminHomeController",
                templateUrl: "/Scripts/App/AdminSection/Views/home.html",
                controllerAs: "adminHomeCtrl"
            })
                .when("/adminHome", {
                controller: "AdminSection.Controllers.AdminHomeController",
                templateUrl: "/Scripts/App/AdminSection/Views/home.html",
                controllerAs: "adminHomeCtrl"
            })
                .when("/starships", {
                controller: "AdminSection.Controllers.StarshipController",
                templateUrl: "/Scripts/App/AdminSection/Views/starships.html",
                controllerAs: "starshipCtrl"
            })
                .when("/planets", {
                controller: "AdminSection.Controllers.PlanetController",
                templateUrl: "/Scripts/App/AdminSection/Views/planets.html",
                controllerAs: "planetCtrl"
            })
                .when("/login", {
                controller: "AdminSection.Controllers.LoginController",
                templateUrl: "/Scripts/App/AdminSection/Views/login.html",
                controllerAs: "loginCtrl"
            });
            $routeProvider.otherwise({ redirectTo: "/" });
        };
        return AdminSectionRoutes;
    }());
    AdminSectionRoutes.$inject = ["$routeProvider"];
    AdminSection.AdminSectionRoutes = AdminSectionRoutes;
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=AdminSectionRoutes.js.map