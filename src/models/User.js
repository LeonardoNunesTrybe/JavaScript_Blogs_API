module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'display_name',
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    image: {
      // allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: "users",
  },
);

User.associate = (models) => {
  User.hasMany(models.BlogPost, {
    as: 'blogPosts',
    foreignKey: 'userId',
  });
}

  return User;
};
