angular.module('mobilecart.controllers', [])

.controller('IndexCtrl', function($scope){
  console.log('IndexCtrl called.');
  $scope.categories = [
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
})
.controller('AppCtrl', function($scope, $ionicSideMenuDelegate){

})
.controller('SideMenuCtrl', function($scope){
  $scope.menuOptions = [
    {title: 'Login', url: '/login'},
    {title: 'My Cart', url: '/cart'},
    {title: 'Find a Store', url: '/storefinder'},
    {title: 'About', url: '/about'}
  ];
})
;


// .controller('DashCtrl', function($scope) {
// })

// .controller('FriendsCtrl', function($scope, Friends) {
//   $scope.friends = Friends.all();
// })

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

// .controller('AccountCtrl', function($scope) {
// })

// .controller('ContentController', function($scope, $ionicSideMenuDelegate){
//   $scope.toggleLeft = function(){
//     $ionicSideMenuDelegate.toggleLeft();
//   }
// });
