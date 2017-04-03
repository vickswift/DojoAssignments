app.controller('editController', ['friendsFactory', '$routeParams', '$scope', function (friendsFactory, $routeParams, $scope) {
    $scope.friend = {};
    let show = function () {
        let idx = $routeParams._id;
        friendsFactory.show(idx, function (data) {
            $scope.friend = data;
        })
    };
    show();
    $scope.updateFriend = {};
    $scope.update = function () {
        console.log('clicked update');
        let idx = $routeParams._id;
        console.log("Friend Id",idx);
        if (!$scope.updateFriend.first_name || !$scope.updateFriend.last_name ) {
            console.log('missing fields');
        }
        else {
            friendsFactory.update($scope.updateFriend, idx, function () {
                $scope.updateFriend = null;
            });
        }

        // if (typeof(callback) == 'function') {
        //     callback($scope.updateFriend);
        // }
    }
}]);
