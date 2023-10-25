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
    image: "./public/img/alma.png",
  },
  {
    id: 2,
    name: "Dinnye",
    image: "./public/img/dinnye.png",
  },
  {
    id: 3,
    name: "Eper",
    image: "./public/img/eper.png",
  },
  {
    id: 4,
    name: "Narancs",
    image: "./public/img/narancs.png",
  },
  {
    id: 5,
    name: "Szőlő",
    image: "./public/img/szolo.png",
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


