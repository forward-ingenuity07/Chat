/// <reference path="angular.min.js" />
(function () {
    var App = angular.module("module", []);
    App.controller("controller", function ($scope, $http, $interval) {

        
        $http({
            method: 'GET',
            url: 'http://forwardingenuity.com/messages.php'
        })
        .then(function (response) {
            $scope.msg = response.data
            window.localStorage.setItem('response1',response.data)

        })
        $interval(function () {
            $http({
                method: 'GET',
                url: 'http://forwardingenuity.com/messages.php'
            })
        .then(function (response) {
            window.localStorage.setItem('response2', response.data)
            if (window.localStorage.getItem('response1').length != window.localStorage.getItem('response2').length) {
                $scope.msg.push((response.data[(response.data).length -1]))
                window.localStorage.setItem('response1', response.data);
            }
        })
        },500)
    })
}())
