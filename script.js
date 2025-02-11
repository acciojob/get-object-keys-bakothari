Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Testing the function
const student = {
  name: "John",
  age: 30,
  city: "Delhi"
};

console.log(student.getKeys()); // Output: ["name", "age", "city"]
