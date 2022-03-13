function promptDialog()  {

    var name;
    var result = prompt("Enter your name:", name);

    if(result != null)  {
        alert("Hello " + result);
    }
    return result;
}

document.getElementById("student").innerHTML = promptDialog();