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
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Field cannot be empty." },
        isAlpha: {
          args: true,
          msg: "Name can only contain letters.",
        },
        len: {
          args: [2,255],
          msg: "Name must be at least two letters long."
        }
      },
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Field cannot be empty." },
        isAlpha: {
          args: true,
          msg: "Surname can only contain letters.",
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Field must be filled with a valid email.",
        },
      },
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
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
