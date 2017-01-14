//Created by Ant for Coursera Module 2 Solution
(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.factory('ShoppingListFactory', ShoppingListFactory);

var shoppingListPrepared = [
  { name: "Cookies", quantity:"10" },
  { name: "Cookies", quantity:"10" },
  { name: "Cookies", quantity:"10" },
  { name: "Cookies", quantity:"10" },
  { name: "Cookies", quantity:"10" }
];

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;

  // // Use factory to create new shopping list service
  // var shoppingList = ShoppingListCheckOffService();

  list1.items = ShoppingListCheckOffService.getItems();
  list1.name = "";
  list1.quantity = "";

  list1.addItem = function () {
    ShoppingListCheckOffService.addItem(list1.name, list1.quantity);
  }

  list1.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };

}

//LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  // // Use factory to create new shopping list service
  // var shoppingList = ShoppingListCheckOffService();

  list2.items = ShoppingListCheckOffService.getNewBoughtItems();

  list2.addNewBoughtItem = function () {
    ShoppingListCheckOffService.addNewBoughtItem(list2.name, list2.quantity);
  }

  list2.removeboughtItem = function (itemIndex) {
    ShoppingListCheckOffService.removeboughtItem(itemIndex);
  };

}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemList = [];
  var newBoughtList = [];

  service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      itemList.push(item);

  };

  service.addNewBoughtItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      newBoughtList.push(item);

  };

  service.boughtItem = function (itemIndex) {
    var newBoughtItem = itemList[itemIndex];
    newBoughtList.push(newBoughtItem);
    itemList.splice(itemIndex, 1);
  };

  service.removeboughtItem = function (itemIndex) {
    var newBuyItem = newBoughtList[itemIndex];
    itemList.push(newBuyItem);
    newBoughtList.splice(itemIndex, 1);
  };

  service.getItems = function () {
    itemList = shoppingListPrepared;
    return itemList;
  };
  service.getNewBoughtItems = function () {
    return newBoughtList;
  };

}


function ShoppingListFactory() {
  var factory = function () {
    return new ShoppingListCheckOffService();
  };

  return factory;
}
})();
