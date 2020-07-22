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
