function explainCallback(name, age, task) {
  console.log("Hello ", name);
  console.log("Your age ", age);
  task();
}

function washHand() {
  console.log("Wash your hand");
}
function takeShower() {
  console.log("Take a shower");
}
explainCallback("Dhrubo", 20, washHand); //Bracket dite hobe na "WashHand" function er por e khetre.
explainCallback("Dhruboish", 20, takeShower);
 


//Practicing call Back Function

function call_back(name,age,work){
  console.log("Hello ",name);
  console.log("Your age is ", age);
  work();
}

function bichanaUthano(){
  console.log("Your work is Uthao Bichana");
}

function balisherCover(){
  console.log("Your work is Balishe cover lagano");
}

function tableGuchano(){
  console.log("Your work is Table Guchano");
}

call_back("Sogir Uddin", 18, bichanaUthano);
call_back("Monir Uddin", 21, balisherCover);
call_back("Jamir Uddin", 30, tableGuchano);