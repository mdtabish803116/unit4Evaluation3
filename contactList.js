

var contactList = JSON.parse(localStorage.getItem("contactList"));

contactList.forEach(function(user){
       var row = document.createElement("tr");
       var td1 = document.createElement("td");
          td1.textContent = user.name;
       var td2 = document.createElement("td");
          td2.textContent = user.mobile;
       var td3 = document.createElement("td");
         td3.textContent = user.select;
       var td4 = document.createElement("td");
        td4.textContent = "favourites";
        td4.addEventListener("click" , function(){
            addTofav(user);
        });
       row.append(td1 , td2 , td3 , td4);

       document.getElementById("tbody").append(row);
})

var favourites;

if(JSON.parse(localStorage.getItem("favourites")) === null){
    favourites = [];
}else {
  favourites = JSON.parse(localStorage.getItem("favourites"));
}

function addTofav(user){
    favourites.push(user);
    localStorage.setItem("favourites" , JSON.stringify(favourites));
}