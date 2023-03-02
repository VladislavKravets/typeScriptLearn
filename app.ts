// class User{
//     name : string;
//     constructor(_name:string){
//
//         this.name = _name;
//     }
// }
// const tom : User = new User("Том");
// const header = this.document.getElementById("header");
// header.innerHTML = "Привет " + tom.name;

//chapter2

// var x = "hello";
// console.log(x);
// var x = "work";
// console.log(x);

// let x = 10;
// {
//     let x = 25;
//     {
//         let x = 163;
//         console.log(x); // 163
//     }
//     console.log(x); // 25
// }
// console.log(x); // 10

/* вопрос */
// let x = 10;
// console.log(x); // 10
// var x = 120; // ! Ошибка
// console.log(x); // Но консоль выведет 20
// const t = 50;
// t = 256; // ! Ошибка
// console.log(t); // Но консоль выведет 256

// let x: number = 10;
// let hello: string = "hello world";
// let isValid: boolean = true;

// let isEnabled: boolean = true;
// let isAlive: boolean = false;
//
// console.log(isEnabled);
// console.log(isAlive);

// let decimal: number = 6;
// // шестнадцатиричная система
// let hex: number = 0xf00d;       // 61453 в десятичной
// // двоичная система
// let binary: number = 0b1010;    // 10 в десятичной
// // восьмиричная система
// let octal: number = 0o744;      // 484 в десятичной
// console.log(decimal);
// console.log(hex);
// console.log(binary);
// console.log(octal);

// let firstName: string = "Tom";
// let lastName = 'Johns';

// let firstName: string = "Tom";
// let age: number = 28;
// let info: string = `Имя ${firstName}    Возраст: ${age}`;
// console.log(info);  // Имя Tom    Возраст: 28

// let sentence: string = `Hello World!
// Good bye World!`;
//
// console.log(sentence);

// const num1: bigint = BigInt(100);
// console.log(num1);
//
// const num2: bigint = 100n;
// console.log(num2);


// let sum: any;
// sum = 1200;
// sum = "тысяча двести";
// let result: number = sum / 12;
// console.log(result); // NaN - строку нельзя разделить на число

// function getName(firstName: string, lastName: string) {
//     return firstName + " " + lastName;
// }
//
// let name1 = getName("Иван", "Кузнецов");
// let name2 = getName("Иван", "Михайлович", "Кузнецов");  //ошибка, много параметров
// let name3 = getName("Иван");  //ошибка, мало параметров

// function getName(firstName: string, lastName?: string) {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }
//
// let name1 = getName("Иван", "Кузнецов");
// console.log(name1); // Иван Кузнецов
// let name2 = getName();
// console.log(name2);

// function getName(firstName: string, lastName: string="Иванов") {
//     return firstName + " " + lastName;
// }
//
// let name1 = getName("Иван", "Кузнецов");
// console.log(name1); // Иван Кузнецов
// let name2 = getName("Вася");
// console.log(name2); // Вася Иванов

// function defaultLastName(): string{
//     return "Smith";
// }
//
// function getName(firstName: string, lastName: string=defaultLastName()) {
//     return firstName + " " + lastName;
// }
//
// let name1 = getName("Tom");
// console.log(name1); // Tom Smith

// function hello (){
//     console.log("Hello TypeScript");
// }

// function sum (x: number, y: number): number {
//     return x + y;
// }
// function subtract (a: number, b: number): number {
//     return a - b;
// }
//
// let op: (x:number, y:number) => number;
//
// op = sum;
// console.log(op(2, 4));  // 6
//
// op = subtract;
// console.log(op(6, 4));  // 2

// function sum (x: number, y: number): number {
//     return x + y;
// }
// function multiply (a: number, b: number): number {
//     return a * b;
// }
// function mathOp(x: number, y: number, op: (a: number, b: number) => number): number{
//     return op(x, y);
// }
//
// console.log(mathOp(10, 20, sum)); // 30
// console.log(mathOp(10, 20, multiply)); // 200

// type Operation = (a: number, b: number) => number;
//
// function mathOp(x: number, y: number, op: Operation): number{
//
//     return op(x, y);
// }
// let sum: Operation = function(x: number, y: number): number {
//     return x + y;
// };
//
// console.log(mathOp(10, 20, sum)); // 30

// let square = x => x * x;
// let hello = () => "hello world"
//
// console.log(square(5)); // 25
// console.log(hello());   // hello world

// let id : number | string;
// id = "1345dgg5";
// console.log(id); // 1345dgg5
// id = 234;
// console.log(id);  // 234

// function printId(id: number|string){
//     console.log(`Id: ${id}`);
// }
//
// let id: string|number = "ruy74";
//
// printId("1h2e3l4o5");
// printId(9876);
// printId(id);

// function printSentence(words: string[]|string){
//     // если words - строка
//     if (typeof words === "string") {
//         console.log(words);
//     } else {
//         // Если words - массив string[]
//         console.log(words.join(" "));
//     }
// }
// printSentence(["Язык", "программирования", "TypeScript"]);
// printSentence("Язык программирования JavaScript");

// let x: number = undefined;
// console.log(x);
// x = null;
// console.log(x);
// x = 5;
// console.log(x);

// let userId: number|null = null;
//
// function printId(id: number|null){
//     if (id === null) {
//         console.log("пользователь отсутствует");
//     } else {
//         console.log(`id пользователя: ${id}`);
//     }
// }
// printId(userId)     // пользователь отсутствует
// userId = 45;
// printId(userId);    // id пользователя: 45

// const header: HTMLElement|null = document.getElementById("header");
// header!.innerText = "Hello Typescript!";

// let person = {name:"Tom", age:23};
// console.log(person.name);
// // альтернативный вариант получения свойства
// console.log(person["name"]);

// let person: { name: string; age: number } = { name: "Tom", age: 23 };
// console.log(person.name);

// let tom: { name: string; age?: number } = { name: "Tom", age: 23 };
// let bob: { name: string; age?: number } = { name: "Bob"};
//
//
// function printUser(user: { name: string; age?: number }){
//
//     if("age" in user){
//         console.log(`Name: ${user.name} Age: ${user.age}`);
//     }
//     else{
//         console.log(`Name: ${user.name}`);
//     }
// }
// printUser(tom);
// printUser(bob);

// function printUser({name, age}: { name: string; age: number}) {
//     console.log(`name: ${name}  age: ${age}`);
// }
//
// let tom = {name: "Tom", age: 36};
// printUser(tom);

// function printUser({name, age}: { name: string; age?: number}) {
//     if(age!==undefined){ console.log(`name: ${name}  age: ${age}`);}
//     else {console.log(`name: ${name}`);}
// }
// let tom = {name: "Tom"};
// printUser(tom);     // name: Tom
//
// let bob = {name: "Bob", age: 44};
// printUser(bob);     // name: Bob  age: 44

// function printUser({name, age = 25}: { name: string; age?: number}) {
//     console.log(`name: ${name}  age: ${age}`);
// }
//
// let tom = {name: "Tom"};
// printUser(tom);     // name: Tom  age: 25
//
// let bob = {name: "Bob", age: 44};
// printUser(bob);     // name: Bob  age: 44

// type id = number | string;
//
// let userId : id = 2;
// console.log(`Id: ${userId}`);
// userId = "qwerty";
// console.log(`Id: ${userId}`);

// // определяем псевдоним
// type id = number | string;
//
// // параметр функции представляет псевдоним
// function printId(inputId: id){
//     console.log(`Id: ${inputId}`);
// }
// // тип результата - псевдоним
// function getId(isNumber:boolean): id{
//     if(isNumber)
//         return 1;
//     else
//         return "1";
// }
// // применение функций
// printId(12345);
// printId("qwerty");
// console.log(getId(true));

// type Person = {name: string; age: number};
//
// let tom: Person = {name: "Tom", age: 36};
// let bob: Person = {name: "Bob", age: 41};
//
// function printPerson(user: Person){
//     console.log(`Name: ${user.name}  Age: ${user.age}`);
// }
//
// console.log(tom.age);
// printPerson(bob);

// type Person = {name: string; age: number};
// type Employee = Person & {company: string};

// type Person = {name: string; age: number};
// // расширяем псевдоним Person
// type Employee = Person & {company: string};
//
// let tom: Person = {name: "Tom", age: 36};
// let bob: Employee = {name: "Bob", age: 41, company: "Microsoft"};
//
// function printPerson(user: Person){
//     console.log(`Name: ${user.name}  Age: ${user.age}`);
// }
//
// printPerson(tom);
// printPerson(bob);  // bob представляет Employee, но он также соответствует псевдониму Person

// const header = <HTMLElement>document.getElementById("header");
// header.innerText = "Hello Typescript!";

// let list: number[] = [10, 20, 30];
// let colors: string[] = ["red", "green", "blue"];
// console.log(list[0]);
// console.log(colors[1]);

// const people = ["Tom", "Bob", "Sam"];
// people[1] = "Kate";
// console.log(people[1]); // Kate

// const people: ReadonlyArray<string> = ["Tom", "Bob", "Sam"];
//
// people.push("Kate");    // ! Ошибка -  нельзя добавить новые элементы
// people.pop();           // ! Ошибка -  нельзя удалить существующие элементы

// function printMarks(marks: [string, ...number[]]){
//
//     for(const mark of marks){
//         console.log(mark);
//     }
// }
// let math: [string, ...number[]] = ["Math", 5, 4, 5, 4, 4];
// let physics: [string, ...number[]] = ["Physics", 5, 5, 5];
//
// printMarks(math);
// printMarks(physics);

// let tom: [string, number, boolean] = ["Tom", 36, false];
// const [username, ...rest] = tom;
// console.log(username);      // Tom
// console.log(rest[0]);       // 36
// console.log(rest[1]);       // false

// function addNumbers(firstNumber: number, ...numberArray: number[]): number {
//
//     let result = firstNumber;
//     for (let i = 0; i < numberArray.length; i++) {
//         result+= numberArray[i];
//     }
//     return result;
// }
//
// let num1 = addNumbers(3, 7, 8);
// console.log(num1); // 18
//
// let num2 = addNumbers(3, 7, 8, 9, 4);
// console.log(num2); // 31

// function sum(a: number, b: number, c?: number): number {
//
//     let result = a + b;
//     if(c!==undefined) { result +=c;}
//     return result;
// }
// const numbers1 = [1, 3] as const;
// let num1 = sum(...numbers1);    // a = 1  b = 3
// console.log(num1); // 4
//
// const numbers2 = [1, 3, 7] as const;
// let num2 = sum(...numbers2);    // a = 1  b = 3  c = 7
// console.log(num2); // 11

// function printValues(name: string, age: number){
//
//     console.log(name);
//     console.log(age);
// }
// const values = ["Tom", 36] as const;
// printValues(...values); // name = "Tom", age = 36

// enum Season { Winter, Spring, Summer, Autumn };
// let current: Season = Season.Summer;
// console.log(current);       // 2
// current = Season.Autumn;    // изменение значения

// enum Season {
//     Winter = "Зима",
//     Spring = "Весна",
//     Summer = "Лето",
//     Autumn = "Осень"
// }
// let current: Season = Season.Summer;
// console.log(current);   // Лето

// enum Season {
//     Winter = 1,
//     Spring = "Весна",
//     Summer = 3,
//     Autumn = "Осень"
// }
// let current: Season = Season.Summer;
// console.log(current);           // 3
// console.log(Season.Autumn);     // Осень

// enum DayTime {
//     Morning,
//     Evening
// };
// function welcome(dayTime: DayTime){
//
//     if(dayTime === DayTime.Morning){
//         console.log("Доброе утро");
//     }
//     else{
//         console.log("Добрый вечер");
//     }
// }
// let current: DayTime = DayTime.Morning;
// welcome(current);           // Доброе утро
// welcome(DayTime.Evening);   // Добрый вечер

enum DayTimeMessage {
    Morning = "Доброе утро",
    Evening = "Добрый вечер"
}

function welcome(message: string){
    console.log(message);
}

let mes: DayTimeMessage = DayTimeMessage.Morning;
welcome(mes);           // Доброе утро
welcome(DayTimeMessage.Evening);    // Добрый вечер