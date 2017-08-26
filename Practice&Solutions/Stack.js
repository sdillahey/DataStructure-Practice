class StackClass {

}

//Stack data structure with data stored in an Array
var Stack = function() {
	this.storage = [];
  this.length = 0;
}

Stack.prototype.push = function(val) {
  let len = this.length;
	this.storage[len] = val;
  len++;
  this.length = len;
}

Stack.prototype.pop = function() {
	len = this.length;
	this.storage = this.storage.splice(len - 1, 1);
}

Stack.prototype.size = function() {
	return this.length;
}


//Stack data structure with data stored in a String
var StackString = function() {
	this.storage = "";
};

StackString.prototype.push = function(val) {
	this.storage = this.storage.concat("-", val);
};

StackString.prototype.pop = function() {
	let idxCounter = this.storage.length - 1;
	let data = "";
	while (this.storage.charAt(idxCounter) !== "-") {
		data = this.storage.charAt(idxCounter) + data;
		idxCounter--;
	}
	this.storage = this.storage.slice(0, this.storage.length - data.length - 1);
	return data;
};

StackString.prototype.size = function() {
	let counter = 0;
	for (var i = 0; i < this.storage.length - 1; i++) {
		if (i === "-") {
			counter++;
		}
	}
	return counter;
};
