const friendsNameArray = ["Dhrubo","Athia","Arun"];
document.write("First Array: " + friendsNameArray + '</br>');

const copyOrClonefriendsNameArray = [...friendsNameArray];
document.write("Second Array: " + copyOrClonefriendsNameArray + '</br>');

//Now check if friendsNameArray and copyOrClonefriendsNameArray are equal or not  

document.write(friendsNameArray == copyOrClonefriendsNameArray + '</br>' );  //False