let numberLetters = document.getElementById("numberLetters");
let str = document.getElementById("text");
let button1 = document.getElementById("button1");
let res = document.getElementById("result"); 

button1.onclick=()=>{
    alert(truncateString(str.value, numberLetters.value));
}

function truncateString(str, num){
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr + "...";
    } else {
        return str;
    }
}

let button2 = document.getElementById("button2");

button2.onclick=()=>{
    alert('Current time/date: ' + getZero(date.getHours()) + ':' + getZero(date.getMinutes()) + ':' + getZero(date.getSeconds()) + ' ' 
    + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());
}

var date = new Date();
function getZero(num){
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}


let n = document.getElementById("digit");
let button3 = document.getElementById("button3");

button3.onclick=()=>{
    alert(third(n.value));
}

function reverseDigits(num) {
    let rev_num = 0;
    while(num > 0)
    {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return rev_num;
}

function third(num){
    return Math.sqrt(num + reverseDigits(num));
}