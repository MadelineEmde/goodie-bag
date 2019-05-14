const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("candy", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Candy-icon.png"
  }
});
