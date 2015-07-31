myApp.controller('VenueListCtrl', ['$scope', 'loadDataService',
    function($scope, loadDataService) {
        loadDataService.venueList('ss').success(function (data, status) {
            $scope.venues = data;
        });
    }
]);

myApp.controller('DropdownCtrl', function ($scope, $log, $templateCache, loadDataService) {

        $templateCache.removeAll();

        $scope.item = {
            date : {showname:"今天", showid:"", isopen:false},
            type : {showname:"", showid:"", isopen:false},
            position : {showname:"位置", showid:"", isopen:false}
        };

        loadDataService.types().success(function(data, status) {
            $scope.item.type.alltypes = data;
            $scope.item.type.showname = data[0].name;
            $scope.item.type.showid = data[0].typeId;
        });

        loadDataService.area().success(function(data, status) {
            $scope.item.position.allPosition = data;
            $scope.item.position.showname = data[0].name;
            $scope.item.position.showid = data[0].areaId
            
        });

        $scope.chooseType = function (id, name) {
            $scope.item.type.showname = name;
            $scope.item.type.showid = id;
            $log.log('current type : [', $scope.item.type.showid , ',' , $scope.item.type.showname, ']');
        }

        $scope.chooseArea = function (id, name) {
            $scope.item.position.showname = name;
            $scope.item.position.showid = id;
            $log.log('current area : [', $scope.item.position.showid , ',' , $scope.item.position.showname, ']');
        }
    }
);

myApp.controller('venueDetailCtrl', function ($scope, $log, $templateCache, loadDataService){
    $templateCache.removeAll();

    loadDataService.venue('id').success(function (data, status){
        $scope.venue = data;
        // 设置轮播图图片间隔
        $scope.myInterval = 1000;
    });

});

