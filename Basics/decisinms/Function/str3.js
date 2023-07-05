var data = "  his this is royal  "

console.log(data.length);

data = data.trim();
console.log(data.length);

var user = "rama"   
var ind = user.indexOf("p")
var ind1 = user.lastIndexOf("p")
console.log(ind);
console.log(ind1);

user = user.concat(" krishna")
console.log(user)
console.log("....",user)

var flag4 = user.includes("m");
console.log(flag4);

console.log("substring...",user);


console.log("substring...",user.substring(0,5));
console.log()