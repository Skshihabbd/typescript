// this is a mixed enum type
// two others enum type is number and string enum type
var mixedType;
(function (mixedType) {
    mixedType["name"] = "shihab";
    mixedType[mixedType["age"] = 1] = "age";
})(mixedType || (mixedType = {}));
console.log(mixedType["age"]);
console.log(mixedType.age);
console.log(mixedType);
