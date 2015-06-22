if (Meteor.isClient) {
    angular.module('ng-meteor', ['angular-meteor'])
        .controller('ColleaguesListCtrl', ['$meteor', '$scope', function ($meteor, $scope) {
            // Assign the meteor collection object to the scope
            $scope.colleagues = $meteor.collection(Colleagues);

            $scope.create = function(colleague) {
                $scope.colleague.points = 0;
                $scope.colleagues.push(colleague);
                $scope.colleague = null;
            };

            $scope.addPoint = function(index) {
                $scope.colleagues[index].points += 1;
            };

            $scope.delete = function(colleague) {
                $scope.colleagues.splice( $scope.colleagues.indexOf(colleague), 1 );
            };

            $scope.deleteAll = function() {
                // Remove all colleagues from the meteor collection
                $scope.colleagues.remove();
            }
        }]);
}