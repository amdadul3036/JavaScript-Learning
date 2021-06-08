// ---------------------Step 1 : Declare an Array -----------------------------
var arr = ["Rahim","Karim","Sokina","Kutub Ali"];

// ---------------------Step 2 : Printing the whole Array -----------------------------

document.write(arr + "<br>");

// ---------------------Step 3 : Printing a specific element of an array -----------------------------

console.log(arr[2]);

// ---------------------Step 4 : Adding a new element with an array -----------------------------

arr.push("Sogir Uddin");
document.write(arr + "<br>");   //Push will add the element at the last of the array

// ---------------------Step 5 : Remove the last element from an array -----------------------------

arr.pop();
document.write(arr + "<br>");  //Pop will remove only the last element of the array

// ---------------------Step 6 : Remove any element from an array -----------------------------

arr.splice(2,3);
document.write(arr + "<br>");

// ---------------------Step 7 : Add an element at the beginning of the array -----------------------------
arr.unshift("DHRUBO");
document.write(arr + '</br>');

// ---------------------Step 8 : Remove an element from the beginning of the array -----------------------------
arr.shift();
document.write(arr + '</br>');
// ---------------------Step 9 : Length of Array -----------------------------

document.write(arr.length + "<br>");   //It will give the total number of item in the array. Not the last index number.

// ---------------------Step 10 : Join 2 Array in 1 Array -----------------------------

var institution = ["IKG","SCA","NDC","DU"];
document.write(arr.concat(institution) + '</br>');    //In this method the array you want to keep first will be in first then ".concat" and then the second array.


// ---------------------Step 11 : Reverse Method -----------------------------

document.write("Reverse Method: " + institution.reverse() + '</br>');
// ---------------------Step 12 : Accessing all elements of array -----------------------------

for (let i = 0; i <  institution.length; i++) {
    const element =  institution[i];
    document.write("Elements of index number " + i + " is " + element + '</br>');
}



