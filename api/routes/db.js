var mongo = require("mongodb");
var assert = require("assert");
const dataEntry = require("../models/dataEntry");

var url = "mongodb://localhost:27017/test";

router.post("/new", (req, res) => {
  dataEntry.create(
    {
      entry: req.body.entry
    },
    (err, entry) => {
      if (err) {
        console.log("CREATE Error: " + err);
        res.status(500).send("Error");
      } else {
        res.status(200).json(entry);
      }
    }
  );
});

router
  .route("/:id")
  /* DELETE */
  .delete((req, res) => {
    dataEntry.findById(req.params.id, (err, entry) => {
      if (err) {
        console.log("DELETE Error: " + err);
        res.status(500).send("Error");
      } else if (entry) {
        entry.remove(() => {
          res.status(200).json(entry);
        });
      } else {
        res.status(404).send("Not found");
      }
    });
  });

// router.get("/insert", function(req, res, next) {});

// router.get("/get-data", function(req, res, next) {});

module.exports = router;
