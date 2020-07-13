//Array Declaration
var FriendsAge=[12,46,21,5,25];
console.log(FriendsAge);

//Array position

console.log(FriendsAge.indexOf(46));

                     //OR

var position=FriendsAge.indexOf(46);
console.log(position);

//If the element is absent in the array the position will be "-1";

var position1=FriendsAge.indexOf(14);
console.log(position1);

//Putting new value into array

FriendsAge[3]=10;
console.log(FriendsAge);

//Increasing element or adding new element in array.

FriendsAge.push(19);
console.log(FriendsAge);

//Array length knowing
console.log(FriendsAge.length);

//Array length do not count according to index. it count normally.
var arrayName = new Array('Rahim', 'Karim', 'Rafiq', 'Jabbar');
console.log(arrayName.length);


//Removing element from array or list

FriendsAge.pop(); //It will automatically remove the last element of the array.
console.log(FriendsAge);

//Removing first element from array or list

FriendsAge.shift(); //this shift command will remove the first element of the list.
console.log(FriendsAge);

//Adding element at the beginning of the list... use "unshift" command.
FriendsAge.unshift(440); //That is I want to add 440 at the beginning of the list.
console.log(FriendsAge);


//Array Slice

