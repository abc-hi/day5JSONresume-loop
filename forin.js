var obj = {a: 1, b: 2};
for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
    var val = obj[key];
    console.log(val);
  }
}