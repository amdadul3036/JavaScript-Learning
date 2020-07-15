var speech="Hello Dhrubo , How life  going      on ? Life is going on bindas mamah with    fucking crazy     coding";
var count=0;
for(var i=0;i<speech.length;i++){
    var character=speech[i];
    if(character==" " && speech[i-1]!=" "){
        count++;
    }
}

console.log(count+1);