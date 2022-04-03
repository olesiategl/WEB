function equation() {
    const coefs = document.getElementById('number').value;

    const coef = coefs.split(' ');
    console.log(coef[3]);

    var a = coef[0];
    var b = coef[1];
    var c = coef[2];
    var discr = (b * b) - 4 * (a * c);
    var sqrDiscr = Math.sqrt(discr);
    document.getElementById('answer').value = discr;
    if (a == 0 && b == 0 && c == 0){
        document.getElementById('secondAnswer').value = "Something went wrong!";
    }
    else if (discr < 0){
        alert("There are no solutions! Discriminant is below zero!")
    }else if (discr == 0){
        document.getElementById('secondAnswer').value = "This equation has one root";
        document.getElementById('thirdAnswer').value = ("x1 = " + (- b - sqrDiscr) / (2 * a));
    }else if (discr > 0){
        document.getElementById('secondAnswer').value = "This equation has two roots";
        document.getElementById('thirdAnswer').value = ("x1 = " + (- b + sqrDiscr) / (2 * a)) + ";  x2 = " + ((- b - sqrDiscr) / (2 * a));
    }
}

function cancel() { 
    document.getElementById('number').value = null;
    document.getElementById('answer').value = null;
    document.getElementById('secondAnswer').value = null;
    document.getElementById('thirdAnswer').value = null;
}
  