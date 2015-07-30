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

        $scope.chooseType = function (id, name) {
            $scope.item.type.showname = name;
            $scope.item.type.showid = id;
            $log.log('current type : [', $scope.item.type.showid , ',' , $scope.item.type.showname, ']');
        }
    }
);

myApp.controller('venueDetailCtrl', function ($scope, $log, $templateCache, $state, $stateParams, loadDataService){
    $log.log("传来的参数：" + angular.toJson($stateParams, true)  + "；路由：" + angular.toJson($state.current, true));

    loadDataService.venue($stateParams.venueId)
    .success(function (data, status){
        $scope.venue = data;
        // 设置轮播图图片间隔
        $scope.myInterval = 1000;
    });

});


myApp.controller('baiduMapCtrl', function ($scope, $document) {
        /*
        百度地图坐标查询:
        http://api.map.baidu.com/lbsapi/getpoint/
        */

        // var map;
        // window.onload = function() {
        //     map = new BMap.Map("allmap");    // 创建Map实例
        //     map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        //     map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        //     map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        //     map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        // };

        $scope.longitude = 113.738487;
        $scope.latitude = 34.361282;
        // $scope.mapOptions = {
        //     center: {
        //         longitude: longitude,
        //         latitude: latitude
        //     },
        //     zoom: 15,
        //     city: 'Xinzheng',
        //     markers: [{
        //         longitude: longitude,
        //         latitude: latitude,
        //         icon: 'http://img.coolwp.com/wp-content/uploads/2015/04/48-map-marker.png',
        //         width: 48,
        //         height: 48,
        //         title: '在哪儿',
        //         content: '新郑市梨河镇'
        //     }]
        // };
       

});

