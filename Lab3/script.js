function params() {
    let params = `scrollbars=yes,resizable=no,status=no,location=yes,toolbar=no,menubar=no,
    width=200,height=600,left=-1000,top=-1000`;
}

function firstButton() {
    params();
    first = window.open("about:blank", "hello", params);
    first.document.write("You clicked on first button. If you want to close this window and open site lpnu please click button #2.");
}

function secondButton() {
    first.window.close();
    win = window.open("https://lpnu.ua/");
}