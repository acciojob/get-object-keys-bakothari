const student = {
  name: "John",
  age: 30,
  city: "New York",
  
  getKeys: function () {
    return Object.keys(this).filter(key => key !== "getKeys");
  }
};

console.log(student.getKeys()); 