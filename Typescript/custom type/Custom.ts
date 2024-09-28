type objectType = { userAge: number; userName: string };
let objectArray: objectType[];
objectArray = [];
// this Array contain only object

let object1: objectType;
object1 = { userAge: 1, userName: "shihab" };
let object2: objectType;
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

type requestType = "GET" | "POSt";

function request(cointain: requestType) {
  console.log(cointain);
}
request("POSt");
