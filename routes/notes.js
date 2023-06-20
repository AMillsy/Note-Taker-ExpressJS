const note = require("express").Router();
const { fsUtils } = require("../helpers/fsUtils");
const util = new fsUtils();
note.get("/", (req, res) => {
  util
    .readFromFile("./db/db.json")
    .then((data) => console.log(JSON.parse(data)));
});

module.exports = note;