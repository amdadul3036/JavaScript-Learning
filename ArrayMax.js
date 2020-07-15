var marks=[23,45,66,78,97,32,64];
var max=marks[0];
for(var i=0;i<marks.length;i++){
    var element= marks[i];
    if(element>max){
        max=element;
    }
}

console.log(max);