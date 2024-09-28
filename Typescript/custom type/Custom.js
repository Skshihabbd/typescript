var objectArray;
objectArray = [];
// this Array contain only object
var object1;
object1 = { userAge: 1, userName: "shihab" };
var object2;
object2 = { userAge: 3, userName: "rafi" };
// objectArray.push(object1);
objectArray.push(object2);
objectArray.push(object2);
objectArray.push(object2);
console.log(objectArray);
for (var index in objectArray) {
    console.log(objectArray[index]["userAge"]);
}
for (var index in objectArray) {
    console.log(objectArray[index]["userName"]);
}
for (var index in objectArray) {
    console.log(objectArray[1]["userName"]);
}
function request(cointain) {
    console.log(cointain);
}
request("POSt");
