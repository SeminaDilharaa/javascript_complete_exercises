//Bitwise Operators

//5 000000101
//1 000000001


//AND

console.log(5 & 1);//1  bitwise and  *

//OR

console.log(5 | 1);//5


//NOT
//5  0000000000000000000000000000 0101
//~5 1111111111111111111111111111 1010
//(2 ^ 32) - 1 - 5
console.log(~5);//-6


//~7
//(2 ^ 32) - 1 - 7
console.log(~7);//-8


//XOR

console.log(5 ^ 1);//input same out put 0 answer 4

//Zero fill left shift
console.log(5 << 1);//10     left handside bit leaft (0000000000000000000000000000 1010)


//Signed right shift
console.log(5 >> 1);//2     right handside bit leaft (0000000000000000000000000000 0010)



//Zero fill right shift
console.log(5 >>> 1);//10     right handside bit leaft (0000000000000000000000000000 0010)



//Convert decimal to binary

console.log((10).toString(2));//1010


//Convert  binary to decimal

console.log((0b1010).toString(10));//10 return as string

console.log(parseInt("1010",2));//10 return as number







