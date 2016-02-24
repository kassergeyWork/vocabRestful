var myVocabulary = angular.module('myVocabulary', []).controller('myVocabularyController', ["$scope", "$http",
    function ($scope, $http) {
        $scope.wordSearchModel = "";
        var uriGetWords = 'http://localhost:3000/vocab';
        $http.get(uriGetWords).success(function (data) {
            $scope.wordCards = data;
        });
    }]);
