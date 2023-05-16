const Sequelize = require("sequelize");
const db = require("../database/db");
const bcrypt = require("bcrypt");

class User extends Sequelize.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
  async validatePassword(password) {
    const hash = await this.hash(password, this.salt);
    return hash === this.password;
  }
}

User.init(
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

User.beforeCreate(async (user) => {
  user.salt = bcrypt.genSaltSync(10);
  const hash = await user.hash(user.password, user.salt);
  user.password = hash;
});

User.beforeUpdate(async (user) => {
  const oldUser = await User.findOne({ where: { id: user.id } });
  if (user.password !== oldUser.password) {
    user.salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(user.password, user.salt);
    user.password = hash;
  }
});

User.afterCreate((user) => {
  if (user.id == 1) {
    User.update({ isAdmin: true }, { where: { id: 1 } });
  }
});

module.exports = User;
