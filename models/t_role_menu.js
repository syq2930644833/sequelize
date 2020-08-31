const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "role_id"
    },
    menu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "menu_id"
    },
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    }
  };
  const options = {
    tableName: "t_role_menu",
    comment: "",
    indexes: []
  };
  const TRoleMenuModel = sequelize.define("t_role_menu_model", attributes, options);
  return TRoleMenuModel;
};