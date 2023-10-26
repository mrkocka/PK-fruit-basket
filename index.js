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
    name: "Alma",
    image: "./img/alma.png",
  },
  {
    id: 2,
    name: "Dinnye",
    image: "./img/dinnye.png",
  },
  {
    id: 3,
    name: "Eper",
    image: "./img/eper.png",
  },
  {
    id: 4,
    name: "Narancs",
    image: "./img/narancs.png",
  },
  {
    id: 5,
    name: "Szőlő",
    image: "./img/szolo.png",
  },
  {
    id: 6,
    name: "Ananasz",
    image: "./img/ananasz.png",
  },
  {
    id: 7,
    name: "Körte",
    image: "./img/korte.png",
  },
  {
    id: 8,
    name: "Barack",
    image: "./img/barack.png",
  },
];

// Az egész kosár lekérdezése
server.get("/api/gyumolcskosar", (req, res) => {
  res.send(gyumolcskosar);
});

server.get("/api/gyumolcskosar/:id", (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  console.log(`Volt egy kérés a ${id}-re`);
  const gyumi = gyumolcskosar.find((gyumi) => gyumi.id === id);
  if (typeof gyumi === "undefined") {
    res.status(404).sendFile(path.join(__dirname, "./public/hiba.html"));
  } else {
    res.send(gyumi);
  }
});
