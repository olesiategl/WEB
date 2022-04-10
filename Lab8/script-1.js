let textField = document.getElementById('textField');

textField.addEventListener('keydown', function(event) {
  if (event.ctrlKey) {
    textField.style.backgroundColor = 'red';
  }
});

document.onmouseover = function(event){
    textField.style.backgroundColor = 'white';
}