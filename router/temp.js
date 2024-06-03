const express = require("express");
// const { getProduct } = require("../controller/product");
const { trendFromTwitter } = require("../controller/trending");

const router = express.Router();

router.get("/trending/fetch", trendFromTwitter);

module.exports = router;
