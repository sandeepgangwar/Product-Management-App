(function(){
'use strict';
    angular.module('productResourceMock',['ngMockE2E'])
    .run(function($httpBackend){
            var products=[{
                "productId":1,
                "productName":"A",
                "productCode":"B",
                "price":12.90,
                "releaseDate":"12 March 2015",
                "imageUrl":"https://www.logomaker.com/wp-content/uploads/2015/06/Logo-Samples2-91-min.jpg"
              },
              {
                "productId":2,
                "productName":"A",
                "productCode":"B",
                "price":12.90,
                "releaseDate":"12 March 2015",
                "imageUrl":"https://www.logomaker.com/wp-content/uploads/2015/06/Logo-Samples2-91-min.jpg"
              },
              {
                "productId":3,
                "productName":"Video Game",
                "productCode":"VG",
                "price":129.90,
                "releaseDate":"12 March 2013",
                "imageUrl":"https://www.logomaker.com/wp-content/uploads/2015/06/Logo-Samples2-91-min.jpg"
              },
              {
                "productId":4,
                "productName":"Scooter",
                "productCode":"Scooter",
                "price":132.90,
                "releaseDate":"12 March 2013",
                "imageUrl":"https://www.logomaker.com/wp-content/uploads/2015/06/Logo-Samples2-91-min.jpg"
              }
              ];

              var produuctUrl = "/api/products";

              $httpBackend.whenGET(produuctUrl).respond(products);
    })
}());