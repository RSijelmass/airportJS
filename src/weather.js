function Weather() {
	this.randomNumber = function() {
			return Math.floor(Math.random() * 10) + 1
	};

	this.isBad = function() {
		if(this.randomNumber() < 2) {
			return true;
		} else {
			return false;
		}
	};
};

