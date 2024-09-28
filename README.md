# typescript

1. [Enum Type Typescript](#1-Enum-Type-Typescript)
2. [Any Type](#2-Any-Type)
3. [Object Array](#3-object-array)

## 1.Enum Type Typescript

```
// this is a mixed enum type
// two others enum type is number and string enum type
enum mixedType {
  name = "shihab",
  age = 1,
}
console.log(mixedType["age"]);
console.log(mixedType.age);
console.log(mixedType);

```

## 2. Any Type

```
// any type where you can not define specific  data type

// example
let shihab: any;
shihab = 1;
shihab = "name";
shihab = [1, "g"];
console.log(shihab);

```

## 3.Object Array

```
let objectArray: object[];
objectArray = [];
// this Array contain only object
let object1: { userAge: number; userName: string };
object1 = { userAge: 1, userName: "shihab" };
let object2: { userAge: number; userName: string };
object2 = { userAge: 3, userName: "rafi" };
// objectArray.push(object1);
objectArray.push(object2);
objectArray.push(object2);
objectArray.push(object2);
console.log(objectArray);
for (let index in objectArray) {
  console.log(objectArray[index]["userAge"]);
}
for (let index in objectArray) {
  console.log(objectArray[index]["userName"]);
}
for (let index in objectArray) {
  console.log(objectArray[1]["userName"]);
}

```
