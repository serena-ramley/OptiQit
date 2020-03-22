var express = require("express");
var router = express.Router();
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "942546",
  key: "7ad2d5c6d8c616c9e4f7",
  secret: "e28dbba8658c7dbb9094",
  cluster: "us3",
  encrypted: true
});
const channel = "optiQit";

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
  //data[num].count = 0;
  if (data[num].count >= 50) {
    data[num].count = 0;
  }

  data[num].count += 1;
}

function updateCount() {
  setInterval(() => {
    increment();
    pusher.trigger(channel, {
      data
    });
  }, 1000);
}

router.get("/", function(req, res, next) {
  res.json(data);
  updateCount();
});

module.exports = router;
