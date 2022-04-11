
var favourites = JSON.parse(localStorage.getItem("favourites"));

favourites.forEach(function(user){
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
       td1.textContent = user.name;
    var td2 = document.createElement("td");
       td2.textContent = user.mobile;
    var td3 = document.createElement("td");
      td3.textContent = user.select;

      row.append(td1 , td2 , td3 );

      document.getElementById("tbody").append(row);
})