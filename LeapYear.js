function IsLeapYear(year){
    if(year%400==0){
        console.log("It's a leap year");
    }
    else if(year%4==0 && year%100!=0){
        console.log("It's a leap year");
    }
    else{
        console.log("It's not leap year");
    }
}

const check=IsLeapYear(2000);
console.log(check);