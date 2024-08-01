var express = require("express");
var router = express.Router();

/* GET workshop page. */
router.get("/", function (req, res, next) {
  res.send("Welcome to the workshop page");
});

router.post("/", function (req, res, next) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Fill up all the field" });
  }
  console.log(
    `Received data: Name=${name}, Email=${email}, "Message" = ${message}`
  );
  res.status(200).json({
    message: "Form data received successfully",
    data: { name, email, message },
  });
});

module.exports = router;
