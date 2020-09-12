function CallBack(name , age , work , school , collage , university) {
    console.log("Your name is: " , name);  
    console.log("You are " , age , "year old");
    work();
    // school();
    // collage();
    // university();
}

function WashHand(){
    console.log('Wash Your hand');
}

function takeBath() {
    console.log('Take Shower');
}

function cleanTeeth(){
    console.log("Brush your teeth");
}

function OrganizeBooks() {
    console.log("Organize your book");
}

CallBack('Rahim Mia' , 33 , WashHand);
CallBack('Karim Mia' , 45 , takeBath);
CallBack('Dhrubo' , 20 , cleanTeeth);
CallBack('Athia' , 20 , OrganizeBooks);