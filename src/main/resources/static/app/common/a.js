(function () {
    'use strict';

    angular.module('excelWireless').controller('a', body);

    body.inject = ['$scope', 'StoreService', 'GlobalVariable'];

    function body($scope,StoreService,GlobalVariable) {

        var vm = this;

        vm.getMenu = function(){
            StoreService.getData('http://localhost:8080/getWebMenu').then(
                function (success) {
                    console.log(success.data)
                },
                function (error) {
                    console.log("getReplenishmentInfo call failed");
                });
        }

        vm.getProduct = function(modelId)
        {

            var products
            StoreService.getData('http://localhost:8080/getEcommerceProductsByModel?model_Id='+modelId).then(
                function (success) {
                    console.log(success.data)

                    GlobalVariable.product = success.data;
                },
                function (error) {
                    console.log("getReplenishmentInfo call failed");
                });

            console.log("This is test"+ modelId);
        }


    }
})();