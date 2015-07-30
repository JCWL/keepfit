myApp.directive("myrating", function() {
    return {
        restrict: 'AE',
        scope:{
            rate:'@'
        },
        template: 'hello',
        replace: true,
        link: function (rate) {
            // if (rate) {alert(rate)};
        }
    }
});