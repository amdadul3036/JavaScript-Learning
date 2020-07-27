var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
  ];
  console.log(arr[3]); // equals [[10,11,12], 13, 14]
  console.log(arr[3][0]); // equals [10,11,12]
  console.log(arr[3][0][1]); // equals 11