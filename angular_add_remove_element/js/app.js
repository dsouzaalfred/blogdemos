var addRemoveApp = angular.module('addRemoveApp', []);

addRemoveApp.controller('AddRemoveController', function($scope) {
	var addRemove = this;
	addRemove.count = 1;
	addRemove.inputBoxes = [
		{text:'1',count:addRemove.count},
	];
	
	addRemove.addInput = function() {
		addRemove.count += 1;
		addRemove.inputBoxes.push({text:addRemove.countInput(),count:addRemove.count});
	};
	
	addRemove.countInput = function() {
		return addRemove.inputBoxes.length+1;
	};
	
	addRemove.removeInput = function(num) {
		if(addRemove.inputBoxes.length > 1) {
			var oldInputBoxes = addRemove.inputBoxes;
			addRemove.inputBoxes = [];
			angular.forEach(oldInputBoxes, function(inputBox) {
				if(inputBox.count != num) {
					addRemove.inputBoxes.push(inputBox);
				}
			});
		}
	}
});