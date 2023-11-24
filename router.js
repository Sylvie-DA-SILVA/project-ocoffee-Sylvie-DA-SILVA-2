const { Router } = require("express");
const mainController = require("./controllers/main-controller");

const router = Router();

router.get("/", mainController.renderHomePage);

router.get("/catalog", mainController.renderCatalogPage);

module.exports = router;
