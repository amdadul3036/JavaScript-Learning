function func() {// First bracket er moddhe kichu dileo hobe na dileo hobe.Function call korle programm bujhe nibe parameter ki hobe.
    for (let i = 0; i < num.length; i++) {
        if(num[i]%2==0){
            console.log(num[i], "It's even");
        }
        else{
            console.log(num[i]*2, "Making even,it was odd");
        }
    }
}
num=[3,6,2,7,3,75,32,53];
age=[335,743,956,538,585,358,903]
func(num);
func(age);