// const students = {
//     'first name':'Alina',
//     'last name':'Kovalenko',
//     tabel:{
//         history: 11,
//         biology: 8,
//         Physics: 6
//     },
//     calcAverageScore: function () {
//         let counter = 0;
//         let sumOfMark = 0;
//         for (let key in this.tabel){
//             counter++;
//             sumOfMark += this.tabel[key];
//         }
//         return sumOfMark/counter;
//     },
//     getLowestScore: function () {
//         let minMark = Infinity;
//         for (let key in this.tabel){
//             if (minMark > this.tabel[key]){
//                 minMark = this.tabel[key];
//             }
//         }
//         return minMark;
//     },
// };
//
// const student3 = {
//     'first name':'Alina',
//     'last name':'',
//     tabel:{
//         history: 10,
//         biology: 9,
//         Physics: 5
//     },
//
// };
//
// student3.__proto__ = student1;
//
// console.log(student3.calcAverageScore());
// console.log(student3.getLowestScore());
//
// const DanItStudent = {
//
//     checkPass: function () {
//         const passDate = new Date(this._datePass);
//         return Date.now() > passDate;
//     },
//     changePass: function (date) {
//         this._datePass = date;
//     },
// };
//
// const student1 = {
//     firstName: 'SomeName',
//     lastName: 'LastName',
//     _datePass: '2019-09-03',
// };
//
//
// const student2 = {
//     firstName: 'Vasya',
//     lastName: 'Fedoriv',
//     _datePass: '2019-03-03',
// };
//
// student1.__proto__= DanItStudent;
// student2.__proto__= DanItStudent;
//
// console.log(student1.checkPass());
// console.log(student2.checkPass());
// student2.changePass('2019-10-01');
// console.log(student2.checkPass());

//
// function Student(name, lastName) {
//     this.firstName = name;
//     this.secondName = lastName;
//
//     this.getFullName = function () {
//         return `${this.firstName} ${this.secondName}`;
//     }
// };
//
// const student1 = new Student('Fedor','Alekseev');
//
// console.log(student1.getFullName());
//


function Product(ID, shortName, fullName, price) {
    this.id = ID;
    this.shortName = 'short name';
    this.fullName = 'full name';
    // this.productPrice = price;
    this.setPrice = function (value) {
      if (!isNaN(value)){
          productPrice = value;
      }
        return true;
    };
    this.getPrice = function () {
        return productPrice;
    };
    this.calcStockPrice = function (value) {
        return this.productPrice * (1-value/100);
    }
}


const lenovo = new Product(1, 'len', 'lenovo', 15000);
//
// lenovo.setPrice(24000);

lenovo.setPrice(17000);
console.log(lenovo.getPrice());


