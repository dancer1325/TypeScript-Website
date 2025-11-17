// 1. types are compatibles
interface Person {
  firstName: string;
  lastName: string;
}

type PersonType1 = Person
type PersonType2 = {
  role: string
} & Person
const isPersonType2CompatibleWithPersonType1: boolean = {} as PersonType2 extends PersonType1 ? true : false
console.log("isPersonType2CompatibleWithPersonType1 " + isPersonType2CompatibleWithPersonType1);    // TODO: Why do I get object and not boolean?
console.log("isPersonType2CompatibleWithPersonType1.valueOf() " + isPersonType2CompatibleWithPersonType1.valueOf());
console.log(`isPersonType2CompatibleWithPersonType1 ${isPersonType2CompatibleWithPersonType1}`);