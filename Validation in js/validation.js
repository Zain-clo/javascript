function validate(){ 
    let name = document.getElementById("name").value;
 if (name.length<3 ){
        alert("Name must be longer than 3 characters")
    }
    let age = document.getElementById("age").value;
if (age < 18){
        alert("You must be more than 18 yrs")
}
else{
    alert("form submitted")
}
}