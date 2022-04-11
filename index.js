
var contactList = JSON.parse(localStorage.getItem('contactList'));

if(contactList === null){
    contactList = [];
}else {
    contactList = JSON.parse(localStorage.getItem('contactList'));
}

 document.querySelector("form").addEventListener("submit" , addUser);


 function addUser() {
     event.preventDefault();
    console.log(1);

    var userObj = {
        name  :document.getElementById("name").value,
        mobile : document.getElementById("mobile").value,
        select : document.getElementById("select").value,
    }

    contactList.push(userObj);

    localStorage.setItem("contactList" , JSON.stringify(contactList));
 }
   