myApp.directive("venueitem", function() {
    return {
        restrict: 'AE',
        scope:{
            venueInfo:'@'
        },
        templateUrl: 'tpls/list-item.html',
        replace: true,
        link: function () {
            // body...
        }
    }
});