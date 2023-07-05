var i = 100
if(i%2==0)
{
    if(i%3==0){
    console.log("Is Even & divisible by 3")
    }
}
else
{
    console.log("Is Odd")
}


    //1-dimensional array 10
    int array[] = new  int[10];

    //2-dimensional array 10x5
    int array[][]= new  int[10][5]; //

    /* 
    |  Or it can also be declared by setting some values          |
    |  The dimensions of the array will be obtained 			     |
    |  automatically by the compiler according to the declaration | 
    */
    int array[] = {1,2,3,4,5,6}; //---> new array[6] 
        //--- the value of array[0] is 1
        // |  the value of array[1] is 2
        // ...
        //--- the value of array[5] is 6
    int array[][] = { {1,2,3,4},{5,6,7,8},{9,10,11,12} }; //---> array[3][4]


    #Getting input for array from user
from array import *

a = array("i",[])

n = int(input("Enter the length of array "))

for i in range(n):
    x = int(input("Enter the next value "))
    a.append(x)

print (a)
//even number

//


