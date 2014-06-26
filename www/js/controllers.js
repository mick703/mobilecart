angular.module('mobilecart.controllers', [])

.controller('CategoryCtrl', function($scope){
  $scope.categories = [
    {title: 'TV & Video'},
    {title: 'Audio & MP3'},
    {title: 'Photography'},
    {title: 'Computers & Tablets'},
    {title: 'Printers & Office'},
    {title: 'Mobiles & Wireless'},
    {title: 'Navigation & Travel'},
    {title: 'Gaming'},
    {title: 'Home & Security'},
    {title: 'Promotions'}
  ];
})
.controller('AppCtrl', function($scope, $ionicSideMenuDelegate){
  // $scope.toggleRightSideMenu = function(){
  //   $ionicSideMenuDelegate.toggleRight();
  // }
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
