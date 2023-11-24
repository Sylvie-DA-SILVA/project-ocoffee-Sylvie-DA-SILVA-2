const mainController = {
  renderHomePage(req, res) {
    res.render("pages/home");
  },

  renderCatalogPage(req, res) {
    res.render("pages/catalog");
  },

  renderCoffeeDetailsPage(req, res) {
    res.render("pages/article");
  }
};

module.exports = mainController;
