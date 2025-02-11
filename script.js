const myObj = {
  name: "John",
  age: 30,
  city: "New York",
  getKeys: function() {
    return Object.keys(this);
  }
};

const keys = myObj.getKeys();
console.log(keys);  // This should now work, and it will print: ["name", "age", "city"]
