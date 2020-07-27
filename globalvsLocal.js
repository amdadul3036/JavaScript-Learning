//It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}

console.log(myFun());