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
