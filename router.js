const { Router } = require("express");
const mainController = require("./controllers/main-controller");

const router = Router();

router.get("/", mainController.renderHomePage);
router.get("/catalog", mainController.renderCatalogPage);
router.get("/api/catalog/remaining-products", mainController.getAllRemainingProducts); // Bouton voir plus de produits
router.get("/article/:id", mainController.renderCoffeeDetailsPage);

router.use((req, res) => {
  res.status(404).render("pages/not-found");
});

module.exports = router;
