var fbutton = document.getElementById("fbutton");
var domen = document.getElementById("domain");

fbutton.onclick=()=>{
    if(domainfunc(domen.value)){
        alert("Введено правильний домен");
    }
    else {
        alert("Введений домен містить помилки");
    }
}

function domainfunc(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}
//-----------------------------------------------------------------

var sbutton = document.getElementById("sbutton");
var str = document.getElementById("string");

sbutton.onclick=()=>{
    alert(replaceSpaces(str.value));
}

function replaceSpaces(string){
    return string = string.replace(/  +/g, ' ');
}
//-----------------------------------------------------------------

var thbutton = document.getElementById("thbutton");
var string = document.getElementById("str");

thbutton.onclick=()=>{
    alert(findB(string.value));
}

function findB(string){
    let matches = string.match(/a+b{3,}a+/g);
    return matches.join('\n');
}

//-----------------------------------------------------------------

var fourbutton = document.getElementById("fourbutton");
var text = document.getElementById("str2");

fourbutton.onclick=()=>{
    alert(findFirstaaa(text.value));
}

function findFirstaaa(string){
    string = string.replace(/^aaa/, '!');
    return string;
}

//-----------------------------------------------------------------

var fifthbutton = document.getElementById("fifthbutton");
var date = document.getElementById("date");

fifthbutton.onclick=()=>{
    alert(checkDate(date.value));
}

function checkDate(date){
    var date_regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    if (date_regex.test(date)) {
        return true;
    }
    else {
        return false;
    }
}
