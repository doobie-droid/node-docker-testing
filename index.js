const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  host: "redis-server",
});
client.set("visits", 0);

app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send("Hey, the number of visits is obviously not " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.get("/yeah", (req, res) => {
  res.send("The number of visits is  static 4");
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
