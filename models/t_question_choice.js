const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    quesion_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "quesion_id"
    },
    choice_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "choice_id"
    }
  };
  const options = {
    tableName: "t_question_choice",
    comment: "",
    indexes: []
  };
  const TQuestionChoiceModel = sequelize.define("t_question_choice_model", attributes, options);
  return TQuestionChoiceModel;
};