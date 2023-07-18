function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/member.html',
    scope: {
      member: '=',
      skills: '=',
      editMember: '&'
    },
    controller: function($scope) {
      $scope.addSkill = function() {
        $scope.member.skills.push({name: '', level: ''});
      };
    }
  };
}