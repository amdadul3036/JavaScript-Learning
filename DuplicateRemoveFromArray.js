//DuplicateRemoveFromArray.js
var AllName=["Salam","Kalam","Balam","Talam","Malam","Nalam","Kalam","Kalam","Kalam","Balam","Talam","Talam","Malam","Talam"];
var UniqueName=[];
for(i=0;i<AllName.length;i++){
    var element=AllName[i];
    var index=UniqueName.indexOf(element);
    if(index==-1){
        UniqueName.push(element);
    }
}
console.log(UniqueName);