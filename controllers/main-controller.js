const dataMapper = require("../database/dataMapper");

const mainController = {
  async renderHomePage(req, res) {
    const articles = await dataMapper.getLatestsProducts();
    res.render("pages/home", { articles });
  },

  async renderCatalogPage(req, res) {
    const articles = await dataMapper.getAllProducts();
    res.render("pages/catalog", { articles });
  },

  async renderCoffeeDetailsPage(req, res) {
    const productId = req.params.id; // Récupérer l'ID du produit depuis l'URL
    const product = await dataMapper.getProductById(productId);
    res.render("pages/article", { product });
  }
};

module.exports = mainController;
