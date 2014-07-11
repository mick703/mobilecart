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
.controller('AppCtrl', function($scope, $ionicSideMenuDelegate, $ionicModal, $timeout){
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
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
