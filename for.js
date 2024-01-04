const jsonObject = {
  name: "John",
  age: 25,
  city: "New York",
};

const keys = Object.keys(jsonObject);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = jsonObject[key];
  console.log(`${key}: ${value}`);
}
