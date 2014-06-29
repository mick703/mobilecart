angular.module('mobilecart.controllers', [])

.controller('IndexCtrl', function($scope, Categories){
  // console.log('IndexCtrl called.');
    $scope.categories = Categories.all();
 })
.controller('CategoryCtrl', function($scope, $stateParams, Categories){
  console.log('CategoryCtrl called.');
  $scope.category = Categories.get($stateParams.categoryId);
  // $scope.category = {title: 'dummy category', id: 123};

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
