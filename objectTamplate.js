function Student(Name,age,roll,city){
    this.Name=Name;
    this.age=age;
    this.roll=roll;
    this.city=city;
}

var Student1= new Student("Dhrubo",20,11803036,"Dhaka");
console.log(Student1);
console.log(Student1.Name);
console.log(Student1.roll);