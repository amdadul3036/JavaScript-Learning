var sum = 0;
function addSum(num) {
  sum = sum + num;
  return sum;
}
addSum(3); // sum will be modified but returned value is undefined

console.log(addSum(3));