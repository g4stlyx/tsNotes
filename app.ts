// $tsc app.ts             >to compile the ts file to the js file
// $tsc app.ts -w          >to make it watch the file for every change
// by that way we don't need to compile for every little change,it does automatically

// Data Annotation

let age: number = 29; // ts is a typed lang.
let lastName: string = "the lord";

lastName = "the f-ing lord"; // eg. you cannot assign lastName to a number or a boolean value anymore, bcz you declared it as string above

// Data Types - Number , you will only use the first one 99%

let num: number = 123; // just a number
let hexadecimal: number = 0x37cf; // hexadecimal number, returns its value as plain number (14287 not that weird thing)
let octal: number = 0o377; // octal number, everything else is same as above
let binary: number = 0b111001; // same as above

// Data Types - String, nothing you don't know

let firstName: string = "g4";

// Data Types - Boolean, true/false, nothing you don't know

let isUpdated: boolean = true;

// Data Types - Array, there are two ways to declare
// you think first is better :d

let names: string[] = ["name1", "name2", "name3"];
let names2: Array<string> = ["names21", "names22", "names23"];

let ids: number[] = [3, 5, 7, 9, 1, 2, 3];

let arr = [1, 2, 3, 0.5, "string1", "string2", true, false];

let arr2: (string | number)[] = [
  "arr",
  "with",
  2,
  "data types",
  "you cannot enter",
  "true",
  "here -boolean-",
];

// Data Types - Tuple
// array gibi ama her elemanın tipini belirtiyoruz

let tuple: [number, string] = [1, "string"];
let user: [number, string, boolean, number, string] = [
  1,
  "thisIsAFingString",
  true,
  2,
  "qweqweq",
];

let tupleIncludingArrays: [number, string][];
tupleIncludingArrays = [
  [1, "steve"],
  [2, "Ahmet"],
  [3, "Mehmet"],
];

// Data Types - Objects
// Class ve inheritance ilişkisine benziyor, önce her eleman için tip tanımlayıp ona göre obje oluşturuyoruz
type Person = {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

let instructor: Person;
instructor = {
  firstName: "g4",
  lastName: "the lorrd",
  age: 13,
  jobTitle: "Frontend Dev.",
};

//console.log(instructor.age)

// Data Types - Enum, değişik bir şey, her bir key'e value olarak string bir değer de verilebiliyor obje gibi
// ilk değer default olarak 0, gerisi de 1 artarak gidiyor. Liste gibi ya da array'in indexleri

enum Media {
  Newspaper = 5,
  Newsletter,
  Magazine,
  Book,
}

console.log(Media.Magazine); // def=2,değişince=7 ;index numarasıyla aynı
console.log(Media[2]); // Magazine

// Data Types - Union
// bir değişkene birden fazla türde değer atanabilmesine izin vermek için

let value: string | number = "123";

// Data Types - Any
// bir değişkene herhangi bir türde değer atanabilmesine izin verir, kullanımı önerilmez ama sıklıkla kullanılır :d

let value2: any = 999;
value2 = "abc";
value2 = true;
value2 = {
  even: "an object",
  it: "can be",
};

// Data Types - Void
// bir fonksiyon değer döndürmüyorsa kullanılır, c++'taki gibi

function sayHello(): void {
  console.log("hello");
}
sayHello();

// Data Types - Never, hata fırlatırken kullanılır
// null dahil hiçbir değer dönmeyen durumlarda kullanılır(?)

function throwError(errMsg: string): never {
  throw new Error(errMsg);
}

// throwError("hata") // konsola hata döndürür

// Type Inference, biz belirtmeden ts'in değişkenlerin tipini algılaması

let counter = 0;
console.log(typeof counter); // although we didn't give, it automatically assigned as number

function increase(counter2: number): number {
  //ne döndüreceğini verebiliyoruz
  return counter++;
}
console.log(typeof increase);

//  Type Assertion, oto type ataması yerine biz interface ile her değişkene type verdik

interface Employee {
  name: string;
  age: number;
}

let employee = <Employee>{};
employee.name = "aa";

// If else ternary operator, classical approach works too if(){},else if(){},else{}

let x = 15;
let y = 20;

x > y ? console.log("x is greater") : console.log("y is greater");

// Switch Case

let day: number = 2;

switch (day) {
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    break;
  case 3:
    console.log("tuesday");
    break;
  default:
    console.log("i am too lazy to finish this even with copy paste");
    break;
}

// For, forEach

for (let i = 0; i <= 3; i++) {
  console.log(i);
}

let arr3 = [10, 20, 30, 40];
for (let item of arr3) {
  // item of arr değeri döndürür
  console.log(item);
}
for (let item in arr3) {
  // item in arr indexi döndürür
  console.log(item);
}

let str = "a string";
for (let item of str) {
  console.log(item);
}

// while
let counter3 = 0;
while (counter3 < 5) {
  counter3++;
  console.log(counter3);

  if (counter3 == 3) break;
}

do {
  console.log(counter3);
  counter3++;
} while (counter3 < 5);

//functions

function add(a: number = 1, b: number = 8): number {
  return a + b;
}
let addedNum = add(15, 25); //değişkenler ve dönen değer int

function voidFunc(): void {
  console.log("Void functions cannot return a value");
}

// Optional parameters

function funcWithOptionalParam(a: number, b: number, c?: number) {
  typeof c === "undefined" ? console.log(a + b) : console.log(a + b + c);
}

funcWithOptionalParam(1, 2, 3);
funcWithOptionalParam(1, 2);

// Arrow Funcs

let arrowFunction = (num1, num2) => {
  console.log("this is an arrow functions for addition: " + (num1 + num2));
};

arrowFunction(3, 5);

// Func Overloading
// aynı func farklı durumlarda farklı tipte değerler döndürsün

function add2(a: string, b: string): string; // string gelirse string
function add2(a: number, b: number): number; // number gelirse number döndür

function add2(a: any, b: any): any {
  return a + b;
}

let result = add2("g4", "the lord");
let result2 = add2(99, 88);
console.log(result, result2);

// Rest Parameters
// kullanacağımız değişken sayısını belirtmek istemiyorsak

function restParameters(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}

console.log(restParameters(2, 3, 4, 5, 6, 7, 8, 5, 4, 3));

function rest2(message: string, ...names: string[]) {
  console.log(message + " " + names.join(", "));
}

rest2("Merhaba", "Ahmet", "Mehmet", "Ayşe", "Kaan");

// Class, js'deki class'ların tip belirtmeli hali

// public, private, protected:

// default olarak public, her yerden erişiliyor
// private değerlere class dışından erişilmiyor
// protected: dışarıdan erişilmiyor ama inheritance durumunda erişiliyor
// readonly : dışarıdan okunabilir ama herhangi bir yerden değiştirilemez

class Human {
  protected id: number;
  protected firstName: string;
  lastName: string;

  constructor(id: number, firstName: string, lastName: string) {
    (this.id = id), (this.firstName = firstName), (this.lastName = lastName);
  }

  getFullName(): string {
    return `${firstName} ${lastName}`;
  }
}

let ahmet = new Human(15, "g4", "the lord");
console.log(ahmet);

console.log(ahmet.getFullName());

// Inheritance
// child class parent class'ın değişkenlerine ve methodlarına erişebilir

class Employee extends Human {
  //class child extends parent
  constructor(id: number, firstName: string, lastName: string) {
    super(id,firstName,lastName) // üst class'tan alınacaklar
  }
}

let emp = new Employee(25,"inheritance","değeri")
console.log(emp)

// Static Methods - Properties
// static değişkenlere ClassName.VariableName şeklinde ulaşılabilir (Circle.pi)
// class üzerinde obje oluşturmaya gerek yok 

class Circle{
    static pi:number=3.14
    pi = 3

    constructor(){ 
        this.pi++ // sadece bir kere 1 artar
        Circle.pi++ //her oluşturulan obje için Circle.pi'yi 1 arttır
    }

    static calculator(r:number){
        return this.pi * r * r
    }


}

let object3 = new Circle()
let object2 = new Circle()
let object = new Circle()
console.log(object.pi) // 3+1 =4

console.log(Circle.pi) // 3.14 + class'ın sahip olduğu obje sayısı = 6.14
console.log(Circle.calculator(5)) // 3.14 * 5 * 5 = 78.5



// Abstract Class - mülakatlarda gelebilir ama nadir kullanılır
// bunlar üzerinden direkt obje oluşturulamaz,

abstract class Department{
    constructor(public name8:string){}

    abstract printMeeting():void

    printName():void{
        console.log(this.name8)
    }
}

class AccountingDepartment extends Department{
    constructor(){
      super("Accounting and Auditing")
    }

    printMeeting(): void {
        console.log("meeting")
    }

    generateReports():void{
      console.log("reports are generated")
    }

}

// let department = new Department() // abstract class'larda mu mümkün değil

// let department: Department  > bu yöntemle Department içine erişilebilir, 
// ancak accounting özellikleri kullanılamaz ör: generateReports kullanılamaz


let department = new AccountingDepartment()

department.printName()
department.printMeeting()
department.generateReports()



// Interface, type kontrolü için

interface Person8{
    firstName8:string,
    lastName8:string,
    middleName8?:string //optional yapmak için ?: kullanılır, göndermesen bile hata vermez
    readonly age:number // ilk tanımlamadan sonra bir daha değiştirilemez
}

function getFullName(person:Person8){
    if(person.middleName8){
      return `${person.firstName8} ${person.middleName8} ${person.lastName8}`
    }
    else{
      return `${person.firstName8} ${person.lastName8}`
    }

}

let person = {
  firstName8: "g4",
  lastName8: "the f-ing lord",
  middleName8: "-who has middleName now-", // yollamazsak hata almayız, optional
  age:13
}

console.log(getFullName(person))

// interface for functions
interface StringFormat{
    (str:string,isUpper:boolean):string
}

let format :StringFormat
format = function(str:string,isUpper:boolean){
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase()
}

console.log(format("this will be upperCase",true))




// interface extend ve implement
// extend: bir interface birden fazla interface'e extend edilebilir,değişkenleri direkt taşımak için kullanılır

interface Person9{
    name9:string;
    gender9:string;
}

interface Employee9 extends Person9{
    empNumber:number;
}

interface Worker9 extends Person9{
    workerNumber:number;
}

let emp9 : Employee9 = {
    empNumber:1,
    gender9:"attack helicopter",
    name9:"abc abc"
}

console.log(emp9)

// interface implement to class
// implement durumunda interface içindeki her değişken class'da kullanılmak zorunda
// bir tık amele işi olduğundan önerilmez, öğrenmiş ol ama kullanma, extends daha mantıklı

interface Person10{
    name10:string
    gender10:string
}

class Employee10 implements Person10{
    empNumber10:number
    name10:string
    gender10:string

    constructor(empNumber10:number,name10:string,gender10:string){
        this.empNumber10 = empNumber10;
        this.name10 = name10;
        this.gender10 = gender10;
    }
}

let emp10 = new Employee10(8,"Name","Gender")
console.log(emp10)



// Type Intersection

interface BussPartner{
  name:string;
  credit:number;
}
interface Identity{
  name:string;
  id:number;
}
interface Contact{
  email:string;
  phone:string;
}

type Employee11 = Identity & Contact // intersection, & kullanılıyor ve kesişen iki interface'in de değişkenlerini içermek zorunda

let emp11 :Employee11 = {
    id:55,
    name:"qew qw",
    email: "qweqweqw",
    phone:"5555555555"
}

console.log(emp11)


// Type Guard

type tip = string | number

function add99(a:tip,b:tip){
    if(typeof(a)==="number" && typeof(b)==="number"){
      return a+b
    }
    else if(typeof(a)==="string" && typeof(b)==="string"){
      return a.concat(b)
    }
    else{
      throw new Error("format hatası")
    }
}

console.log(add99(15,25))
console.log(add99("15","25"))
//console.log(add99(true,15)) // hata fırlatacak




// GENERICS, önemli ve kolay

function getRandomNumber(items:number[]):number{
    let randomIndex = Math.floor(Math.random()*items.length)
    return items[randomIndex]
}
function getRandomString(items:string[]):string{
  let randomIndex = Math.floor(Math.random()*items.length)
  return items[randomIndex]
}

let numbers = [16,41,32,35,66,65,47,34,6,53,32,4]
let names99 = ["qwe","abc","ert","yui","jkl","ghj"]
let vars = [true,false,true,false]
console.log(getRandomNumber(numbers))
console.log(getRandomString(names99))

// aynı işi yapan iki farklı func., hem zaman hem güç kaybı, çözümü generics

// any ile çözüm böyle, type-safe olmadığı için önerilmiyor
// function getRandomElement(items:any[]):any{
//     let randomIndex = Math.floor(Math.random()*items.length)
//     return items[randomIndex]
// }

function getRandomElement<T>(items:T[]):T{ //T yerine istediğini yazabilirsin, böyle yaparak ne geliyorsa o tipte döndür demiş oluyoruz 
  let randomIndex = Math.floor(Math.random()*items.length)
  return items[randomIndex]
}

console.log(getRandomElement<number>(numbers))
console.log(getRandomElement<string>(names99))
console.log(getRandomElement<Boolean>(vars))


// Generic Constraints

function merge<U extends object,V extends object>(obj1:U,obj2:V){ // sadece obje tipi değer alsın, yoksa hata versin
    return{
      ...obj1,
      ...obj2
    } 
}

let person99 = merge({name:"asdfs"},{age:15})
console.log(person99)


// Interface'lerde Generics

interface Months<U,V>{
    key:U,
    value:V
}

let month:Months<number,string> = {
    key:1,
    value:"January"
}
