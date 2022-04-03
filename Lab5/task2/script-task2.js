function factorialize(x) {
  return (x == 0) ? 1 : x * factorialize(x-1);
}

function fillTable() {
  var data = document.getElementById("numbers").value.split(" ").map(function(item) {
    return parseInt(item, 10);
  });
  
  if(data.length > 6){
    alert("Values in a row more than the number of places in the table");
  }

  var tabdiv = document.createElement('div');
  tabdiv.setAttribute("id", "tab");
  document.body.appendChild(tabdiv)
  document.getElementById("tab").innerHTML = "<table border = '1' style='border-collapse: collapse;'>" +'<tr>' + 
  '<th>'+ factorialize(data[0]) + "</th>" + '<th>'+ factorialize(data[1]) + "</th>" + '</tr>' + '<tr>' + '<td>' + factorialize(data[2]) + '</td>' + '<td>' + 
  factorialize(data[3]) + '</td>' + '</tr>' + '<td>' + factorialize(data[4]) + '</td>' + '<td>' + factorialize(data[5]) + '</td>' + '</tr>' ;

}