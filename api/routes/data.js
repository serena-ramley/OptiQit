var express = require("express");
var router = express.Router();

const data = [
  { position: 1, count: 0 },
  { position: 2, count: 0 },
  { position: 3, count: 0 },
  { position: 4, count: 0 },
  { position: 5, count: 0 },
  { position: 6, count: 0 },
  { position: 7, count: 0 },
  { position: 8, count: 0 },
  { position: 9, count: 0 },
  { position: 10, count: 0 }
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function increment() {
  const num = getRandomNumber(0, data.length);

  data.num.count += 1;
}

function updateCount() {
  setInterval(() => {
    increment();
    pusher.trigger("poll-channel", "update-poll", {
      poll
    });
  }, 1000);
}

router.get("/data", function(req, res, next) {
  res.json(data);
  updateCount();
});

module.exports = router;
