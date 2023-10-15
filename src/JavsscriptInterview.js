
// console.log("hello")

// setTimeout(()=>{console.log("inside settime out")},5000)

// console.log("hello")

//promise and settimeout
// setTimeout(() => {
//     console.log("time out")
// }, 0);

// Promise.resolve(1).then(
//     ()=>{console.log("qsresolved")}
// )


//settimout and setinterval
// const mynterval=setInterval(()=>console.log("interval"),1000);
//     clearInterval(mynterval);

//Rest Or Spread Operator
// function myinfor(fname,flast,...other){
//     console.log(`${fname} ${flast}${other}`)
// }
// myinfor('priti','jha','ran','full')

//...spread operator
// const array1=[1,2,3,4]
// console.log(...array1) 
// const objA={
//     a:1,b:2,c:3
// }
// console.log(objA)
// const newobjA={
//     ...objA,d:4
// }
// console.log(newobjA)


//palindom
// const string1='ollo'
// if (string1===string1.split("").reverse().join("")) {
//     console.log("palindom")
// } else {
//    console.log("non palindom") 
// }
// console.log(string1.split("").reverse().join(""))


//map function
// const number=[1,4,5,4,5,3,2,56,3,3]
// const newnumber=number.map((num)=>{
//     return num*2
// })
// console.log(...newnumber)

// const persons=[
//     {
//         firstname:"Malcom",
//         lastname:"Reynols"
//     }, {
//         firstname:"Kaylee",
//         lastname:"Fryan"
//     }, {
//         firstname:"Jayne",
//         lastname:"Cobb"
//     },
// ]

// const newperson=persons.map((e)=>{return [e.firstname,e.lastname].join(" ");})
// console.log(newperson)

//Reducer Function
// const number = [175, 50, 25]
// console.log(number.reduce(
//     (total, currentnum) => { return total - currentnum },1000//1000 is initial value sub by all value in array
// )
// )

// phototype
function employees() {
}
employees.prototype={
    names:[],
    showName:function(){
        return this.names
    }
}
const el = new employees();
el.names.push("foo");el.names.push("foo");
console.log(el.showName());

const e2 = new employees();
e2.names.push("bar")
console.log(e2.names)