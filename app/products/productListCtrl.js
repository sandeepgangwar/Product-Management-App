(function(){
    'use strict';
    angular.module('productManagement')
    .controller('ProductListController',[ProductListController]);
    
    function ProductListController(){
        var vm = this;
        vm.products=[{
            "productId":1,
            "productName":"A",
            "productCode":"B",
            "releaseDate":"12/01/2014",
            "price":12.90,
            "imageUrl":"https://www.logomaker.com/wp-content/uploads/2015/06/Logo-Samples2-91-min.jpg"
          },
          {
            "productId":1,
            "productName":"A",
            "productCode":"B",
            "releaseDate":"12/01/2015",
            "price":12.90,
            "imageUrl":"https://www.logomaker.com/wp-content/uploads/2015/06/Logo-Samples2-91-min.jpg"
          }
          ];

          vm.showImage =false;
          vm.toogleImage = function(){
              vm.showImage =!vm.showImage;
          }
    }
}());