(function() {

  angular
    .module("chatclient", [      
      "ngMaterial",
      "ngRoute",
      "ngMessages",
      "ngAnimate",      
      "ngMessages"
    ])
    .config([      
      "$routeProvider",
      "$mdThemingProvider",
      "$httpProvider",
      "$locationProvider",
      function(
        
        $routeProvider,
        $mdThemingProvider,
        $httpProvider,
        $locationProvider      
        
      ) {
        
        
        $locationProvider.html5Mode({ enabled: true, requireBase: false });
        
        $routeProvider
          .when("/", {
            templateUrl: "/html/home.html"
          })
          
          .otherwise({ redirectTo: "/"});
        
        
         
       
      }
    ])
    
  

})();
