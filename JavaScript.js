//Comments 
//In line comment 
/*Multi line Comment */

/* They are 7 datatypes in the javascript
null, bollean, string, number, undefined, symbol and object */

//Declaring the variable
var variableA;
let variableB;
const variableC = 10;

//Assigning and declaring variable
var a = 10;
var b = 20;

//Basic arthemetic 
console.log("Addtion of two numbers : " + (a + b));
console.log("Subtraction of two numbers : " + (a - b));
console.log("Multiplication of two numbers : " + (a * b));
console.log("Division of two numbers : " + (a / b));
console.log("Increment Operation a++ : " + (a++));
console.log("Decrement Operation a-- : " + (a--));

//Declaring string
var strValue = "Vishnu am of length";
console.log("String : " + strValue);
console.log("String length : " + (strValue.length));

//Accessing the string letter
console.log("Location 0 : " + strValue[0]);
console.log("Location nth : " + strValue[strValue.length - 1]);

//Declearing array
var ourArray = ['Hi am a string', 1234];
console.log("Array : " + ourArray);
/* Array supports operations like
push : add to the last
pop : remove from the last
shift : remove from the first 
unshift : add to the first */
ourArray.push(10)
console.log("Push 10 to array : " + ourArray);
console.log("Pop 10 from array : " + ourArray.pop());
console.log("Shift 10 from array : " + ourArray.shift());
ourArray.unshift(10)
console.log("unShift 10 to array : " + ourArray);

//Functions
/* They are two types of functions parameterized and non-parameterized
myfunction() and myfunction(parameter1)
*/
function justCheckMe() {
    console.log("Hi am just a function call..!")
}
justCheckMe();

function youSentMe(para) {
    console.log("You sent me : " + para);
}
youSentMe("hello");

function deafaultPara(para = "Vishnu") {
    console.log("Welcome : " + para);
}
deafaultPara();

//Queue can be created by function
var queueArr = [1, 2, 3];
function arrAdd(arr, add) {
    arr.push(add);
    console.log("Element pushed out is 1st element : " + arr.shift())
    console.log("Queue = " + queueArr);
}
arrAdd(queueArr, 5);

// 3 == '3' would be true because == would type convert it automatically
// 3 === '3' would be false becasue === would not do the type convert
// 3 !== '3' would be true because !== would not type convert it automatically

/* if else block */
function checkOddEven(para) {
    console.log("Example for if-else");
    if (para % 2 == 0) {
        console.log("InPut Number = Even");
    }
    else {
        console.log("InPut Number = Odd");
    }
}
checkOddEven(2);
//else if
function elseIf(val) {
    console.log("Example for else-if");
    if (val == 2) {
        console.log("value = 2");
    }
    else if (val == 3) {
        console.log("value = 3");
    }
    else {
        console.log("No parameter");
    }
}
elseIf(3);

//Switch - Statement
console.log("Switch Statement Demo");
function switchDemo(val) {
    switch (val) {
        case 1: console.log("value = 1"); break;
        case 'hello': console.log("String"); break;
        default: console.log("not number or string"); break;
    }
}
switchDemo("@");

//Creating objects
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends and family": ["everyone"]
};
console.log(ourDog);

//Accessing the objects via dot operator
console.log("Object Dog name is = " + ourDog.name);
//Accessing the object by index value
console.log("Object Dog friends : "+ourDog["friends and family"]);
//Updating object properties 
ourDog.name = "Happy";
console.log(ourDog);

//freezing object
Object.freeze(ourDog);
ourDog.newpro = "hello"; //ignored

//lookup using object
function lookup(val){
    var result = "";
    var numbersVal = {
        1:"Object returing one",
        2:"Object returing two"
    };
    result= numbersVal[val];
    return result;
}
console.log(lookup(2));

//Check object has a property
var myDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends and family": ["everyone"]
};
console.log(myDog.hasOwnProperty("name"));
var i = 0;

//While loop
while( i < 5){
    console.log("While Iteration Number :"+i);
    i++;
}

//For loop
for(var j =0;j<5;j++){
    console.log("For loop Iteration Number :"+j);
}

//Loop in array
var knowMyLength = [0,1,2,3,4];
for(var t=0;t<knowMyLength.length;t++){
    console.log("Array index :"+t+" value ="+knowMyLength[t]);
}

//Nested for loop
var arrayArray = [[1,2,3],[2,3,4],[4,5]];
for(var iv = 0;iv<arrayArray.length;iv++){
    for(var jv = 0;jv<arrayArray[iv].length;jv++){
        console.log(arrayArray[iv][jv]);
    }
}

//Ternary Operator
function checkSign(num){
    return num > 0 ? "Positive Number" : num < 0 ? "Negative Number" : "Zero";
}
console.log(checkSign(-1));

//Let and var 
/* Let would not allow you decalre the variable twice. */
/* "use strict"; would be used to follow or find coding mistakes. */
/* if you don't want to change the variable value again and again use const VARIABLE */

//Arrow or annoymous function
var date = () => new Date().getTime();
console.log(date);

//Function taking function as argutment
// we use fliter and map

//Destructing object
var voxel = {x:3.6,y:7.4}
//old way
var x = voxel.x;
var y = voxel.y;
//new way
const {x:an,y:bn} = voxel;
console.log(an);

//Building string
var name = "Vishnu";
var stringS = `Hello welcome ${name}`;
console.log(stringS);

//Creating a class
class spaceShuttle{
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
    test(){
        console.log("test");
    }
}
var test = new spaceShuttle("hello");
test.test();