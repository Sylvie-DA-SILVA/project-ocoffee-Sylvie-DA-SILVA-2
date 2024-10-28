const dataMapper = require("../database/dataMapper");

const mainController = {
  async renderHomePage(req, res) {
    const articles = await dataMapper.getLatestsProducts(); // Limité à 3 produits
    res.render("pages/home", { articles });
  },

  async renderCatalogPage(req, res) {
    const articles = await dataMapper.getLimitedProducts(); // Limité à 8 produits
    res.render("pages/catalog", { articles });
  },

  // Nouvelle méthode pour obtenir tous les produits
  async getAllRemainingProducts(req, res) {
    const articles = await dataMapper.getAllProducts(); // Les produits restants
    res.json(articles); // Envoie tous les produits en JSON sans rechargement de la page
  },

  async renderCoffeeDetailsPage(req, res) {
    const productId = req.params.id; // Récupérer l'ID du produit depuis l'URL
    const product = await dataMapper.getProductById(productId);
    res.render("pages/article", { product });
  }
};

module.exports = mainController;
