let selectBox = document.getElementById("selectBox");
let button = document.getElementById("valastButton-js");

button.addEventListener("click", valuegyum);

function valuegyum() {
  let selectedValue = selectBox.options[selectBox.selectedIndex].value;
  let ertek = selectedValue;
  console.log(ertek);
  fetch(
    
  )
}
