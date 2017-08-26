(function(){
    'use strict';
    angular.module('productManagement')
    .controller('ProductListCtrl',['productResource',ProductListController]);
    
    function ProductListController(productResource){
        var vm = this;
        productResource.query(function(response){
            vm.products=  response;          
        });
        
          vm.showImage =false;
          vm.toogleImage = function(){
              vm.showImage =!vm.showImage;
          }
    }
}());