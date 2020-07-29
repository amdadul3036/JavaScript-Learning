//objectAccessingNestedArray.js
var ourPets=[{
    petType: "Cat",
    petName: ["hunky","punky","jhunki","munki"]
},
{
    petType:"Dog",
    petName:["Doggo","Doggy","Daggy","Dag"]
},
{
    petType: "Human",
    petName:["Dhrubo","Dhruboish","Nitu","Nibedita","Amdadul","Arun"]
}
];

var want1= ourPets[1].petName[3];
var want2= ourPets[2].petName[1];
console.log(want1);
console.log(want2);