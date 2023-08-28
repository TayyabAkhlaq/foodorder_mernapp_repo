const express = require("express");
const router = express.Router();

router.post("/displaydata", async (req, res) => {
  try {
    console.log("The data is from ",global.fooditems,global.foodcategory);
    res.send([global.fooditems,global.foodcategory]);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
