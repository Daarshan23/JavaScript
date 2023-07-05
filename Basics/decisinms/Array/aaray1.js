var data = ["raj","ram","rahim","parth"]
console.log(data[0])
console.log(data[2])
console.log(data[3])
console.log(data[4])

for(let i=0;i<data.length;i++)
{
    console.log(data[i])
}

data.forEach((x)=>{
   // data[0]data[1]data[2]data[3]data[4]
     console.log(x)
})

data.map(function(d){
         console.log(d)
     })

     var newdata = data.map((d)=>{

             return d.toUpperCase()
         })