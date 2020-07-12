console.log(21);
console.log('Good Morning Javascript');
var BananaPrice=12;
console.log(BananaPrice);
console.log(typeof BananaPrice);
var name="Dhrubo";
console.log(name);
console.log(typeof name);
var isHOT=true;
var isRICH= false;
console.log(isHOT);
console.log(typeof isHOT);


//Assignment

var PotatoPrice=200;
console.log(PotatoPrice);
console.log(typeof PotatoPrice);

var name="Solimuddin";
console.log(name);
console.log(typeof name);

var isGOOD=true;
var isBAD=false;
console.log(isGOOD);
console.log(typeof isGOOD);

//finding everyting of a string in LOWERCASE.

var promise="I WILL WORK VERY HARD TO BECOME A PROGRAMMER.";
console.log(promise.toLowerCase())

//finding everyting of a string in UPPERCASE.

var tutorial="i start javascript programming today 12/06/2020 by programming hero tutorial of jhankar mahbub vaiya.";
console.log(tutorial.toUpperCase())

//Find the location of a expected string.

console.log(tutorial.indexOf("jhankar"));

// adding two number in javascript

var number1=25;
var number2=15.7;
console.log(number1+number2);

//adding a number with a string. if we put a number into as a string that is if we put it into " " or '' or ` ` then it will work as string . And if we add a number with thsi kind of string then output will be like they just seat side by side...hahahah.

var number3=45;
var number4="56";
console.log(number3+number4);

//Converting float number in intiger.

number4=parseFloat(number4);
console.log(number4);

//now it will not be 4556 if we add.
console.log(number3+number4);

var number5= '56.78';
//if we want to convert a float string number into a intiger number then we should use the command --- variableName=ParseINT(variableName);
number5=parseInt(number5);
console.log(number5);

//Converting number into string

number1=' '+number1;
console.log(number1);
console.log(typeof number1);

//An interesting topic

var number6=0.1;
var number7=0.2;
var total=number6+number7;
console.log(total);


//Fixing decimal number after decimal point.

total=total.toFixed(3);//That is we want to see three decimal number after the decimal point.
console.log(total);
console.log(typeof total);

//Finding absloute value.
var NegativeNumber= -5;
var absoluteNumber=Math.abs(NegativeNumber);
console.log(absoluteNumber);

//rounding Math value

var number8= 4.009;
var number9=4.456789;
var number10= 4.5000;
var number11=4.5783;
var number12=4.9875;

var roundingNumber8=Math.round(number8);
var roundingNumber9=Math.round(number9);
var roundingNumber10=Math.round(number10);
var roundingNumber11=Math.round(number11);
var roundingNumber12=Math.round(number12);

console.log(roundingNumber8);
console.log(roundingNumber9);
console.log(roundingNumber10);
console.log(roundingNumber11);
console.log(roundingNumber12);

//ceil

var ceilNumber8 = Math.ceil(number8);
console.log(ceilNumber8);
//floor number

var floorNumber8= Math.floor(number8);
console.log(floorNumber8);

//random number generate

var generatingRandomNumber= Math.random();
console.log(generatingRandomNumber);// it will give value from 0 to 1. but not 0 and 1.

//random Integer Number Finding

var generatingIntegerRandomNumber= Math.random()*100; //if wee multiply it with 100 it will be 1 to 100 . but it will not be INTEGER.
console.log(generatingIntegerRandomNumber); 

//If we want Integer Random number we have to round it.

var generatingIntegerRandomNumberRounded= Math.round(generatingIntegerRandomNumber); 
console.log(generatingIntegerRandomNumberRounded);
