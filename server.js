const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const visitor_ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log("New visitor IP:", visitor_ip);
  res.send(`Hello! Your IP is: ${visitor_ip}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
