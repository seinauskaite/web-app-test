const fs = require("fs");
const path = require("path");
const expressHandlebars = require("express-handlebars");
const express = require("express");
const multer = require("multer");

const app = express();
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });
const target = path.join(__dirname, "database", "classifieds.json");

//Prijungiamas adreso url encodinimas
app.use(
  express.urlencoded({
    extended: false,
  })
);

//Statiniu failu padavimo direktorija
app.use("/public", express.static("public"));
app.use("/uploads", express.static("uploads"));

//Nurodoma sablonu direktorija is kurios automatiskai bus paimami failai
app.set("views", __dirname + "/templates");

//Sukuriamas sablonu variklis su nustatymais:
//extName - failo gale nurodytas tipas, pvz: .hbs
//layoutsDir - direktorija kurioje sukurtas pagrindinis sablono failas
//defaultLayout - Standartinis pagrindinis sablonas
app.engine(
  "hbs",
  expressHandlebars.engine({
    extname: "hbs",
    layoutsDir: __dirname + "/templates/layouts",
    defaultLayout: "layout",
  })
);

//Priskiriamas auksciau nurodytas sablonu variklis
app.set("view engine", "hbs");

///////////////////////////////////////////////////////////////////////

app.get("/", (req, res) => {
  fs.readFile(target, "UTF-8", (err, data) => {
    let obj = JSON.parse(data);
    console.log(obj);
  });
  res.render("skelbimai");
});

///////////////////////////////////////////////////////////////////////

//Skelbimo formos adresas GET metodu
app.get("/new-classified", (req, res) => {
  res.render("skelbimo-forma");
});

app.post("/classifieds-submit", upload.single("photo"), (req, res) => {
  let photo = "/uploads/" + req.file.filename;
  req.body.photo = photo;
  let data = JSON.stringify(req.body);

  fs.writeFileSync(target, data, (err) => {
    if (err) throw err;
    console.log("JSON file successfuly saved");
  });
});

//Duomenu konvertavimas i JSON stringa
app.post("/formsubmit", (req, res) => {
  let data = JSON.stingify(req.body);
  console.log(data);
  res.redirect("/forma");
});

app.get("/forma", (req, res) => {
  res.render("forma");
});

//CRUD - Create, Read, Update, Delete

app.listen(3000);
