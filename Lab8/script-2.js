function update() {
    var select = document.getElementById('langList');
    var option = select.options[select.selectedIndex];

    document.getElementById('text').value = option.text;
}

update();