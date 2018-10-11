var pi=3.14;


var obj={};
obj.updatedata=function(){
  console.log("Update Data");
}

obj.deleteuser=function(){
  console.log("Delete User");
}


var update=function(){
  return  "Update Server"
}
var addition=function(a,b){
  return a+b;
}
exports.pi=pi;
exports.add=addition;
exports.update=update;
exports.data=obj;
