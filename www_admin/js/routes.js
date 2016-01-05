angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('tabsController.buscar', {
      url: '/buscar',
      views: {
        'tab1': {
          templateUrl: 'templates/buscar.html',
          controller: 'buscarCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.ahoraSuena', {
      url: '/sonando',
      views: {
        'tab2': {
          templateUrl: 'templates/ahoraSuena.html',
          controller: 'ahoraSuenaCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.sugerencias', {
      url: '/sugerencias',
      views: {
        'tab3': {
          templateUrl: 'templates/sugerencias.html',
          controller: 'sugerenciasCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/tabs',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('registro', {
      url: '/registro',
      templateUrl: 'templates/registro.html',
      controller: 'registroCtrl'
    })
        
      
    
      
        
    .state('votaciones', {
      url: '/votaciones',
      templateUrl: 'templates/votaciones.html',
      controller: 'votacionesCtrl'
    })
        
      
    
      
        
    .state('scanearQR', {
      url: '/scan',
      templateUrl: 'templates/scanearQR.html',
      controller: 'scanearQRCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});