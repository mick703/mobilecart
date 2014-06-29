angular.module('mobilecart.services', [])

/**
 * A simple example service that returns some data.
 */
// .factory('Friends', function() {
//   // Might use a resource here that returns a JSON array

//   // Some fake testing data
//   var friends = [
//     { id: 0, name: 'Scruff McGruff' },
//     { id: 1, name: 'G.I. Joe' },
//     { id: 2, name: 'Miss Frizzle' },
//     { id: 3, name: 'Ash Ketchum' }
//   ];

//   return {
//     all: function() {
//       return friends;
//     },
//     get: function(friendId) {
//       // Simple index lookup
//       return friends[friendId];
//     }
//   }
// })
.factory('Categories', function(){
  var categories = [
    {title: 'TV & Video', id: 1},
    {title: 'Audio & MP3', id: 2},
    {title: 'Photography', id: 3},
    {title: 'Computers & Tablets', id: 4},
    {title: 'Printers & Office', id: 5},
    {title: 'Mobiles & Wireless', id:6},
    {title: 'Navigation & Travel', id:7},
    {title: 'Gaming', id:8},
    {title: 'Home & Security', id:9},
    {title: 'Promotions', id:10}
  ];

  return {
    all: function(){
      return categories;
    },
    get: function(categoryId){
      for (var i = 0; i < categories.length; i++) {
        if (parseInt(categories[i].id) === parseInt(categoryId)) {
          return categories[i];
        }
      }
      return {title: 'Unknown Category', id: 9999};
    }
  }
});

