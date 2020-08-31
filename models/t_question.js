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
    question: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "question"
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "parent_id"
    },
    answer_type: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "1:选项，2:text",
      field: "answer_type"
    }
  };
  const options = {
    tableName: "t_question",
    comment: "",
    indexes: []
  };
  const TQuestionModel = sequelize.define("t_question_model", attributes, options);
  return TQuestionModel;
};