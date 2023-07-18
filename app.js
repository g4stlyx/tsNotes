// $tsc app.ts             >to compile the ts file to the js file
// $tsc app.ts -w          >to make it watch the file for every change
// by that way we don't need to compile for every little change,it does automatically
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Data Annotation
var age = 29; // ts is a typed lang.
var lastName = "the lord";
lastName = "the f-ing lord"; // eg. you cannot assign lastName to a number or a boolean value anymore, bcz you declared it as string above
// Data Types - Number , you will only use the first one 99%
var num = 123; // just a number
var hexadecimal = 0x37cf; // hexadecimal number, returns its value as plain number (14287 not that weird thing)
var octal = 255; // octal number, everything else is same as above
var binary = 57; // same as above
// Data Types - String, nothing you don't know
var firstName = "g4";
// Data Types - Boolean, true/false, nothing you don't know
var isUpdated = true;
// Data Types - Array, there are two ways to declare
// you think first is better :d
var names = ["name1", "name2", "name3"];
var names2 = ["names21", "names22", "names23"];
var ids = [3, 5, 7, 9, 1, 2, 3];
var arr = [1, 2, 3, 0.5, "string1", "string2", true, false];
var arr2 = [
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
var tuple = [1, "string"];
var user = [
    1,
    "thisIsAFingString",
    true,
    2,
    "qweqweq",
];
var tupleIncludingArrays;
tupleIncludingArrays = [
    [1, "steve"],
    [2, "Ahmet"],
    [3, "Mehmet"],
];
var instructor;
instructor = {
    firstName: "g4",
    lastName: "the lorrd",
    age: 13,
    jobTitle: "Frontend Dev.",
};
//console.log(instructor.age)
// Data Types - Enum, değişik bir şey, her bir key'e value olarak string bir değer de verilebiliyor obje gibi
// ilk değer default olarak 0, gerisi de 1 artarak gidiyor. Liste gibi ya da array'in indexleri
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 5] = "Newspaper";
    Media[Media["Newsletter"] = 6] = "Newsletter";
    Media[Media["Magazine"] = 7] = "Magazine";
    Media[Media["Book"] = 8] = "Book";
})(Media || (Media = {}));
console.log(Media.Magazine); // def=2,değişince=7 ;index numarasıyla aynı
console.log(Media[2]); // Magazine
// Data Types - Union
// bir değişkene birden fazla türde değer atanabilmesine izin vermek için
var value = "123";
// Data Types - Any
// bir değişkene herhangi bir türde değer atanabilmesine izin verir, kullanımı önerilmez ama sıklıkla kullanılır :d
var value2 = 999;
value2 = "abc";
value2 = true;
value2 = {
    even: "an object",
    it: "can be",
};
// Data Types - Void
// bir fonksiyon değer döndürmüyorsa kullanılır, c++'taki gibi
function sayHello() {
    console.log("hello");
}
sayHello();
// Data Types - Never, hata fırlatırken kullanılır
// null dahil hiçbir değer dönmeyen durumlarda kullanılır(?)
function throwError(errMsg) {
    throw new Error(errMsg);
}
// throwError("hata") // konsola hata döndürür
// Type Inference, biz belirtmeden ts'in değişkenlerin tipini algılaması
var counter = 0;
console.log(typeof counter); // although we didn't give, it automatically assigned as number
function increase(counter2) {
    //ne döndüreceğini verebiliyoruz
    return counter++;
}
console.log(typeof increase);
var employee = {};
employee.name = "aa";
// If else ternary operator, classical approach works too if(){},else if(){},else{}
var x = 15;
var y = 20;
x > y ? console.log("x is greater") : console.log("y is greater");
// Switch Case
var day = 2;
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
for (var i = 0; i <= 3; i++) {
    console.log(i);
}
var arr3 = [10, 20, 30, 40];
for (var _i = 0, arr3_1 = arr3; _i < arr3_1.length; _i++) {
    var item = arr3_1[_i];
    // item of arr değeri döndürür
    console.log(item);
}
for (var item in arr3) {
    // item in arr indexi döndürür
    console.log(item);
}
var str = "a string";
for (var _a = 0, str_1 = str; _a < str_1.length; _a++) {
    var item = str_1[_a];
    console.log(item);
}
// while
var counter3 = 0;
while (counter3 < 5) {
    counter3++;
    console.log(counter3);
    if (counter3 == 3)
        break;
}
do {
    console.log(counter3);
    counter3++;
} while (counter3 < 5);
//functions
function add(a, b) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 8; }
    return a + b;
}
var addedNum = add(15, 25); //değişkenler ve dönen değer int
function voidFunc() {
    console.log("Void functions cannot return a value");
}
// Optional parameters
function funcWithOptionalParam(a, b, c) {
    typeof c === "undefined" ? console.log(a + b) : console.log(a + b + c);
}
funcWithOptionalParam(1, 2, 3);
funcWithOptionalParam(1, 2);
// Arrow Funcs
var arrowFunction = function (num1, num2) {
    console.log("this is an arrow functions for addition: " + (num1 + num2));
};
arrowFunction(3, 5);
function add2(a, b) {
    return a + b;
}
var result = add2("g4", "the lord");
var result2 = add2(99, 88);
console.log(result, result2);
// Rest Parameters
// kullanacağımız değişken sayısını belirtmek istemiyorsak
function restParameters() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return (total += num); });
    return total;
}
console.log(restParameters(2, 3, 4, 5, 6, 7, 8, 5, 4, 3));
function rest2(message) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(message + " " + names.join(", "));
}
rest2("Merhaba", "Ahmet", "Mehmet", "Ayşe", "Kaan");
// Class, js'deki class'ların tip belirtmeli hali
// public, private, protected:
// default olarak public, her yerden erişiliyor
// private değerlere class dışından erişilmiyor
// protected: dışarıdan erişilmiyor ama inheritance durumunda erişiliyor
// readonly : dışarıdan okunabilir ama herhangi bir yerden değiştirilemez
var Human = /** @class */ (function () {
    function Human(id, firstName, lastName) {
        (this.id = id), (this.firstName = firstName), (this.lastName = lastName);
    }
    Human.prototype.getFullName = function () {
        return "".concat(firstName, " ").concat(lastName);
    };
    return Human;
}());
var ahmet = new Human(15, "g4", "the lord");
console.log(ahmet);
console.log(ahmet.getFullName());
// Inheritance
// child class parent class'ın değişkenlerine ve methodlarına erişebilir
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    //class child extends parent
    function Employee(id, firstName, lastName) {
        return _super.call(this, id, firstName, lastName) || this; // üst class'tan alınacaklar
    }
    return Employee;
}(Human));
var emp = new Employee(25, "inheritance", "değeri");
console.log(emp);
// Static Methods - Properties
// static değişkenlere ClassName.VariableName şeklinde ulaşılabilir (Circle.pi)
// class üzerinde obje oluşturmaya gerek yok 
var Circle = /** @class */ (function () {
    function Circle() {
        this.pi = 3;
        this.pi++; // sadece bir kere 1 artar
        Circle.pi++; //her oluşturulan obje için Circle.pi'yi 1 arttır
    }
    Circle.calculator = function (r) {
        return this.pi * r * r;
    };
    Circle.pi = 3.14;
    return Circle;
}());
var object3 = new Circle();
var object2 = new Circle();
var object = new Circle();
console.log(object.pi); // 3+1 =4
console.log(Circle.pi); // 3.14 + class'ın sahip olduğu obje sayısı = 6.14
console.log(Circle.calculator(5)); // 3.14 * 5 * 5 = 78.5
// Abstract Class - mülakatlarda gelebilir ama nadir kullanılır
// bunlar üzerinden direkt obje oluşturulamaz,
var Department = /** @class */ (function () {
    function Department(name8) {
        this.name8 = name8;
    }
    Department.prototype.printName = function () {
        console.log(this.name8);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("meeting");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("reports are generated");
    };
    return AccountingDepartment;
}(Department));
// let department = new Department() // abstract class'larda mu mümkün değil
// let department: Department  > bu yöntemle Department içine erişilebilir, 
// ancak accounting özellikleri kullanılamaz ör: generateReports kullanılamaz
var department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();
function getFullName(person) {
    if (person.middleName8) {
        return "".concat(person.firstName8, " ").concat(person.middleName8, " ").concat(person.lastName8);
    }
    else {
        return "".concat(person.firstName8, " ").concat(person.lastName8);
    }
}
var person = {
    firstName8: "g4",
    lastName8: "the f-ing lord",
    middleName8: "-who has middleName now-",
    age: 13
};
console.log(getFullName(person));
var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format("this will be upperCase", true));
var emp9 = {
    empNumber: 1,
    gender9: "attack helicopter",
    name9: "abc abc"
};
console.log(emp9);
var Employee10 = /** @class */ (function () {
    function Employee10(empNumber10, name10, gender10) {
        this.empNumber10 = empNumber10;
        this.name10 = name10;
        this.gender10 = gender10;
    }
    return Employee10;
}());
var emp10 = new Employee10(8, "Name", "Gender");
console.log(emp10);
var emp11 = {
    id: 55,
    name: "qew qw",
    email: "qweqweqw",
    phone: "5555555555"
};
console.log(emp11);
function add99(a, b) {
    if (typeof (a) === "number" && typeof (b) === "number") {
        return a + b;
    }
    else if (typeof (a) === "string" && typeof (b) === "string") {
        return a.concat(b);
    }
    else {
        throw new Error("format hatası");
    }
}
console.log(add99(15, 25));
console.log(add99("15", "25"));
//console.log(add99(true,15)) // hata fırlatacak
// GENERICS, önemli ve kolay
function getRandomNumber(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
function getRandomString(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [16, 41, 32, 35, 66, 65, 47, 34, 6, 53, 32, 4];
var names99 = ["qwe", "abc", "ert", "yui", "jkl", "ghj"];
var vars = [true, false, true, false];
console.log(getRandomNumber(numbers));
console.log(getRandomString(names99));
// aynı işi yapan iki farklı func., hem zaman hem güç kaybı, çözümü generics
// any ile çözüm böyle, type-safe olmadığı için önerilmiyor
// function getRandomElement(items:any[]):any{
//     let randomIndex = Math.floor(Math.random()*items.length)
//     return items[randomIndex]
// }
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElement(numbers));
console.log(getRandomElement(names99));
console.log(getRandomElement(vars));
// Generic Constraints
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var person99 = merge({ name: "asdfs" }, { age: 15 });
console.log(person99);
var month = {
    key: 1,
    value: "January"
};
