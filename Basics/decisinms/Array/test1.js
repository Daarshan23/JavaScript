employees =[
    {
        id:101,
        name:"raj",
        isMarrie:true,
        child:1,
        salary:30000,
        gender:"Male"
    },
    {
        id:102,
        name:"arvind",
        isMarrie:false,
        child:2,
        salary:10000,
        gender:"Male"
    },
    {
        id:103,
        name:"nimesh",
        isMarrie:true,
        child:0,
        salary:20000,
        gender:"Male"
    },
    {
        id:104,
        name:"isha",
        isMarrie:false,
        child:0,
        salary:40000,
        gender:"Female"
    }
]
console.log(employees)
// find a employee who is married and having child
var emp = employees.filter((e)=>{
    return e.isMarrie && e.child>0
})
console.log(emp)
// find a employee who is married and having child and salary is greater than 10000
var emp1 = employees.filter((e)=>{
    return e.isMarrie && e.child>0 && e.salary>10000
})
console.log(emp1)
// find a female employee who is not married
var emp2 = employees.filter((e)=>{
    return e.gender=="Female" && e.isMarrie==false
})
console.log(emp2)
// find a male employee who is married but not having child
var emp3 = employees.filter((e)=>{
    return e.gender=="Male" && e.isMarrie==true && e.child==0
})
console.log(emp2)
