(function(){
'use strict';
    angular.module('productResourceMock',['ngMockE2E'])
    .run(function($httpBackend){
            var products=[{
                "productId":1,
                "productName":"Product id 1",
                "productCode":"AAA123",
                "description":"This is demo description",
                "price":12.90,
                "tags":["a","b"],
                "releaseDate":"12/11/2015",
                "imageUrl":"https://www.logomaker.com/wp-content/uploads/2015/06/Logo-Samples2-91-min.jpg"
              },
              {
                "productId":2,
                "productName":"Product id 2",
                "productCode":"AAA123",
                "description":"This is demo description",
                "price":12.90,
                "cost":12.30,
                "tags":["a","b"],
                "marginPercentage":12,
                "releaseDate":"12/11/2015",
                "imageUrl":"https://www.logomaker.com/wp-content/uploads/2015/06/Logo-Samples2-91-min.jpg"
              },
              {
                "productId":3,
                "productName":"Video Game",
                "productCode":"AAA123",
                "description":"This is demo description",
                "price":129.90,
                "cost":12.30,
                "tags":["a","b"],
                "marginPercentage":12,
                "releaseDate":"12/11/2015",
                "imageUrl":"https://www.logomaker.com/wp-content/uploads/2015/06/Logo-Samples2-91-min.jpg"
              },
              {
                "productId":4,
                "productName":"Scooter",
                "productCode":"AAA123",
                "description":"This is demo description",
                "price":132.90,
                "tags":["a","b"],
                "cost":12.30,
                "marginPercentage":12,
                "releaseDate":"12/11/2015",
                "imageUrl":"https://www.logomaker.com/wp-content/uploads/2015/06/Logo-Samples2-91-min.jpg"
              }
              ];

              var productUrl = "/api/products";
              $httpBackend.whenGET(productUrl).respond(products);
              var editingRegex  = new RegExp(productUrl + "/[0-9][0-9]*",'');
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

              $httpBackend.whenPOST(productUrl).respond(function(method,url,data){
                  var product = angular.fromJson(data);
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