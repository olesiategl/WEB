function task3() {
    var num = document.getElementById('number').value;

    for (var i = 1; i <= num; i++) {
        var line = document.createElement("p");
        for (var z = 0; z < i; z++) {
            line.innerHTML += i;
        }
        document.body.appendChild(line);
   }    
}