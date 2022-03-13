function changeColor(){
    var result = window.confirm("Задати колір тексту синім, а фон жовтим?")
    if(result){
        var elements = document. getElementsByClassName("work"); // get all elements.
        for(var i = 0; i < elements. length; i++){
            elements[i]. style. backgroundColor = "yellow";
            elements[i]. style. color = "blue";
        }
    }
    else{document.write("Місія відмінена")}
}
changeColor();