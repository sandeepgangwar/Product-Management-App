(function(){
    'use strict';   
    var app =angular.module('productManagement',['common.services', 
    'productResourceMock',
    'ui.router']);
    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        .state('home',{
            url:'/',
            templateUrl:"/app/welcomeView.html"
        })
        .state('productList',{
            url:'/products',
            templateUrl:'/app/products/productListView.html',
            controller:'ProductListCtrl as vm'
        })
        .state('productEdit',{
            url:'/products/edit/:productId',
            controller:'ProductEditCtrl as vm'
        })
        .state('productDetail',{
            url:'/products/:productId',
            templateUrl:'/app/products/productDetailView.html',
            controller:'ProductDetailCtrl as vm',
            resolve:{
                productResource:"productResource",
                product:function(productResource,$stateParams){
                        var productId = $stateParams.productId;
                        return productResource.get({productId:productId}).$promise;
                }
            }
        })
    }])
}());


