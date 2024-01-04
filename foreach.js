let jsonObj = {
  key1: "hi",
  key2: "welcome",
  key3: "home",
};

Object.keys(jsonObj).forEach(function (key) {
  console.log(key + ": " + jsonObj[key]);
});
