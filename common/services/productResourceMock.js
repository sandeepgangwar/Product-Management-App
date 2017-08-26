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
              var editingRegex  = new RegExp(produuctUrl + "/[0-9][0-9]*",'');
              $httpBackend.whenGET(editingRegex).respond(function(method,url,data){
                var product = {productId:0};
                var parameters = url.split('/');
                var length = parameters.length;
                var id = parameters[length-1];
                if(id>0){
                    product = products.filter((item)=> item.productId == id)[0];
                }
                return [200,product,{}];
              });

              $httpBackend.whenPOST(produuctUrl).respond(function(method,url,data){
                  var product = angular.fromJSON(data);
                  if(!product.productId){
                      product.productId = products[products.length -1].productId + 1;
                      products.push(product);
                  }else{
                      for (var index = 0; index < products.length; index++) {
                          if(products[index].productId === product.productId)
                          {
                              products[index]= product;
                              break;
                          }
                      }
                  }

                  return [200,product,{}];
              });

             $httpBackend.whenGET(/app/).passThrough();
    });
}());