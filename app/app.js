(function(){
    'use strict';   
    var app =angular.module('productManagement',['common.services', 
    'productResourceMock',
    'ui.router']);
    app.config(['$stateProvider',function($stateProvider){
        $stateProvider.state('productList',{
            url:'/products',
            templateUrl:'/app/products/productListView.html',
            controller:'ProductListController as vm'
        })
    }])
}());


