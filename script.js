const student = {
  name: "John",
	age :30,
	city:"delhi"
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]
