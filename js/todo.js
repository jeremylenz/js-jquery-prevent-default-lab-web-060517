$(document).ready(function(){
  // call functions here

submitForm()

});

// define functions here

function submitForm() {
  $('form').on('submit', function(event){
    let currentList = $('#list ol')
    let newItem = document.createElement('li')
    let textBox = $('input')[0]
    let newItemText = textBox.value
    newItem.innerHTML = newItemText
    currentList.append(newItem);
    textBox.value = ""
    // event.preventDefault();
  })
}
