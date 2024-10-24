const db = require("./database-client");

const dataMapper = {
  async getLatestsProducts() {
    const result = await db.query(`SELECT * FROM coffee ORDER BY created_at DESC LIMIT 3`);
    const products = result.rows;
    return products;
  },

  async getAllProducts() {
    const result = await db.query('SELECT * FROM coffee ORDER BY created_at DESC');
    const products = result.rows;
    return products;
  },

  // async getProductById(productId) {
  //   const query = 'SELECT * FROM coffee WHERE id = $1';
  //   const result = await db.query(query, [productId]);
  //   const product = result.rows[0]; // On suppose que l'ID est unique, donc un seul produit sera retourné
  //   return product;
  // },

  async getProductById(productId) {
    const query = `
    SELECT coffee.*, category.name AS category_name
    FROM coffee
    JOIN category ON coffee.category_id = category.id
    WHERE coffee.id = $1 `;
    const result = await db.query(query, [productId]);
    const product = result.rows[0]; // On suppose que l'ID est unique, donc un seul produit sera retourné
    return product;
  }
};

module.exports = dataMapper;
