const express = require("express");
const db = require("../data/db-config");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .select()
    .then(cars => res.status(200).json({ data: cars }))
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was an issue with the DB", err: err })
    );
});

module.exports = router;
