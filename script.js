const student = {
  name: "John",
  age: 30,
  city: "New York",

  getKeys: function () {
    return Object.keys(this);
  }
};

console.log(student.getKeys());
