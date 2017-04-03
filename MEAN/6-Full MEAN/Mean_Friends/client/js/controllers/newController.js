app.controller('newController', ['friendsFactory', '$scope', '$routeParams', function (friendsFactory, $scope, $routeParams) {

    $scope.newFriend = {};

    let index = function () {
        friendsFactory.index(function(returnedData) {
            $scope.friends = returnedData;
            console.log("Controller printing out friends", $scope.friends);
        });
    };
    index();
    $scope.addFriend = function () {
        console.log('click happened');
        // console.log($scope.newFriend);
        if (!$scope.newFriend.first_name || !$scope.newFriend.last_name ) {
            console.log('missing fields');
        }
        else {
            // $scope.newFriend.birthday = $scope.newFriend.birthday.toString();
            friendsFactory.create($scope.newFriend, function (newFriendAfterServer) {
              $scope.newFriend = null;

            })
        }
    };
    $scope.friendDelete = function (delete_idx) {
        friendsFactory.delete(delete_idx)
    }
}]);
