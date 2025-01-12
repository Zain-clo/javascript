//user1 = {
  //  password:"1234",
    //email:"user@user.com",
    //name:"Useeer",
    //username :"userbest"

//}
//let myjson = JSON.stringify(user1) //WHEN SENDING TO THE SERVER
//let newobj = JSON.parse(myjson)//when recieving from server
//console.log(myjson)
//console.log(newobj)
function greet(name, callback){
    console.log("helllo "  + name);
    callback();
}
function goodbye(){
    console.log("goodbye!")
}
greet("Zainab" , goodbye)