let selectBox = document.getElementById("selectBox");
let button = document.getElementById("valastButton-js");
let imggyumi = document.querySelector(".gyumiImg-js");
let txt = document.querySelector(".gyumi-txt");

button.addEventListener("click", valuegyum);

function valuegyum() {
  let selectedValue = document.getElementById("wor-input").value;
  let ertek = selectedValue.toLowerCase();
  console.log(ertek);

  console.log(`http://localhost:666/api/gyumolcskosar/${ertek}`);
  fetch(`http://localhost:666/api/gyumolcskosar/${ertek}`)
    .then((json) => json.json())
    .then((objektum) => {
      if (objektum.image) {
        //Ha van kép
        imggyumi.src = objektum.image;
        imggyumi.width = "50px";
      } else {
        //Ha nincs kép
        imggyumi.src = "http://localhost:666/public/img/nincs.png";
        imggyumi.width = "50px";
        txt.classList.remove("invisible");
      }
    });
}
