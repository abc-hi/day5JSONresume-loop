const jsonObject = {
  name: "John",
  age: 25,
  city: "New York",
};

for (const key of Object.keys(jsonObject)) {
  const value = jsonObject[key];
  console.log(`${key}: ${value}`);
}
