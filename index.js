let express = require("express");
let server = express();
const path = require("path");
server.use(express.static("public"));
let port = 666;

const listeningStartedCallback = () => {
  console.log(`A szerver elindult. Port: ${port}`);
};

//Ez indítja el a szervert
server.listen(port, listeningStartedCallback);

// JSON adatok

let gyumolcskosar = [
  {
    id: 1,
    name: "alma",
    image: "./img/alma.png",
  },
  {
    id: 2,
    name: "dinnye",
    image: "./img/dinnye.png",
  },
  {
    id: 3,
    name: "eper",
    image: "./img/eper.png",
  },
  {
    id: 4,
    name: "narancs",
    image: "./img/narancs.png",
  },
  {
    id: 5,
    name: "szőlő",
    image: "./img/szolo.png",
  },
  {
    id: 6,
    name: "ananasz",
    image: "./img/ananasz.png",
  },
  {
    id: 7,
    name: "körte",
    image: "./img/korte.png",
  },
  {
    id: 8,
    name: "barack",
    image: "./img/barack.png",
  },
  {
    id: 100,
    name: "hiba",
    image: "./img/nincs.png",
  },
];

// Az egész kosár lekérdezése
server.get("/api/gyumolcskosar", (req, res) => {
  res.send(gyumolcskosar);
});

server.get("/api/gyumolcskosar/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  console.log(`Volt egy kérés erre: ${name}-re`);
  const gyumi = gyumolcskosar.find((gyumi) => gyumi.name === name);

  if (!gyumi) {
    // Ha nincs találat, küldje vissza a "nincs.png" képet
    res.send({ image: "./img/nincs.png" });
  } else {
    res.send(gyumi);
  }
});
