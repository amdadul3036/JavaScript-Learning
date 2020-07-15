var a=8;
var b=9;
console.log("Before Swap:","a=",a,", b=",b);
a=a+b;
b=a-b; // it's actually b=a-b=a+b-b=a ; so b=a.
a=a-b; //it's actually a=a-b=a+b-a=b; so a=b now.
console.log("After Swap:","a=",a,", b=",b);

