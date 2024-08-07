var express = require("express");
var router = express.Router();
const WorkshopForm = require("../models/WorkshopForm");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* GET workshop page. */

router.post("/", async function (req, res, next) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Fill up all the field" });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }
  try {
    const newForm = new WorkshopForm({
      name,
      email,
      message,
    });
    await newForm.save();

    console.log(
      `Received data: Name=${name}, Email=${email}, "Message" = ${message}`
    );
    res.status(200).json({
      message: "Form data received successfully",
      data: { name, email, message },
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to save data", details: error.message });
  }
});

router.get("/", async function (req, res, next) {
  try {
    const message = await WorkshopForm.find({});
    res.status(200).json(message);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to get message", details: error.message });
  }
});
router.delete("/:id", async function (req, res, next) {
  try {
    const messageId = req.params.id;
    await WorkshopForm.findByIdAndDelete(messageId);
    res.status(200).json({ message: "Message deleted successfulyy" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete message", details: error.message });
  }
});
module.exports = router;
