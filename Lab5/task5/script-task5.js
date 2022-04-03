let array=[];
let res=document.getElementById('result');


function task5(){
    var num = document.getElementById('text').value;
    var numLasts = document.getElementById('text2').value;

    array = num.split(',');
    let lastElements = getLast(array, numLasts);

    res.textContent = lastElements;

}

function getLast(array, n){
    let lastElements = array.slice(-n);
    return lastElements;
}