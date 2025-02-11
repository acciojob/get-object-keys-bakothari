const student = {
  name: "John",
	age :30,
	city:"delhi"
};

Object.prototype.getkeys=function() {
	return Object.keys(this)
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]
