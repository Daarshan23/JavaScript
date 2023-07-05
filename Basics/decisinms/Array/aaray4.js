var employees = ["parth","vishal","darshan","raj"]
var index = employees.indexOf("raj")
console.log(index)
var index1 = employees.lastIndexOf("raj")

function sortempbylen(a,b){

    return a.length - b.length
}
var sortedArray = employees.sort(sortempbylen)

function sortsal(a,b){
    return a - b;
}
var salaries = [100,2500,150,65,8502,963,45,1236]
var sortArray1 = salaries.sort(sortsal)
console.log(sortArray1)