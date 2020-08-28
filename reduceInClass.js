const List = [
    {name:'Dhrubo', roll: 11803036},
    {name:'Ranbir', roll: 11803035},
    {name: 'Mominul Islam' , roll: 11803037}
];

const Total = List.reduce((sum , name) => {
    console.log(sum , name);
    return sum + name.roll;
} , 0);

console.log(Total);