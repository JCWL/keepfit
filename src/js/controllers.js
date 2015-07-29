myApp.controller('VenueListCtrl', ['$scope', 'loadDataService',
    function($scope, loadDataService) {
        loadDataService.venueList('ss').success(function(data, status) {
            $scope.venues = data;
        });
    }
]);

myApp.controller('DropdownCtrl', function ($scope, $log,$templateCache, loadDataService) {

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

        $scope.chooseType = function (id, name) {
            $scope.item.type.showname = name;
            $scope.item.type.showid = id;
            $log.log('current type : [', $scope.item.type.showid , ',' , $scope.item.type.showname, ']');
        }
    }
);

