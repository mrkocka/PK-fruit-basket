let selectBox = document.getElementById("selectBox");
let button = document.getElementById("valastButton-js");
let imggyumi = document.querySelector(".gyumiImg-js");

button.addEventListener("click", valuegyum);

function valuegyum() {
  let selectedValue = document.getElementById("wor-input").value;
  let ertek = selectedValue;
  console.log(ertek);

  /* console.log(`http://localhost:666/api/gyumolcskosar/${ertek}`);
  fetch(`http://localhost:666/api/gyumolcskosar/${ertek}`)
    .then((json) => json.json())
    .then((objektum) => {
      //Kép
      imggyumi.src = objektum.image;
      imggyumi.width = "50px";
    }); */
}
