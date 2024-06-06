const db = require("./database-client");

const dataMapper = {
  async getLatestsProducts() {
    const result = await db.query(`SELECT * FROM coffee ORDER BY created_at DESC LIMIT 3`);
    const products = result.rows;
    return products;
  }
};

module.exports = dataMapper;
