const getStudentData = ( )=>{
    console.log("all student  data")
};
const getEmployeeDyta = () =>{
        console.log("all employee data")
};

const getData = (param,cb) =>{
    cb()
};

var parmData = "student";

if(parmData === "student"){
    getData("studentData",getStudentData);

}else{
    getData("employeeData",getEmployeeDyta);

}