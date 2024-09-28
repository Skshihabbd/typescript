# typescript

[Enum Type Typescript](#1-Enum-Type-Typescript)
[Any Type](#1-Any-Type)

## Enum Type Typescript

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

1.Any Type

```
// any type where you can not define specific  data type

// example
let shihab: any;
shihab = 1;
shihab = "name";
shihab = [1, "g"];
console.log(shihab);

```
