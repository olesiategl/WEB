function numbersDisplay() {

    let number = document.getElementById('numbers').value;

    for(var i = 0; i < number; i++){
        var line = document.createElement("p");
        line.innerHTML += (i+1);
        document.body.appendChild(line);
    }
}