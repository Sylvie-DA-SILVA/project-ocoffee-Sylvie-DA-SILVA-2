const dataMapper = require("../database/dataMapper");

const mainController = {
  async renderHomePage(req, res) {
    const articles = await dataMapper.getLatestsProducts();
    res.render("pages/home", { articles });
  },

  renderCatalogPage(req, res) {
    res.render("pages/catalog");
  },

  renderCoffeeDetailsPage(req, res) {
    res.render("pages/article");
  }
};

module.exports = mainController;
