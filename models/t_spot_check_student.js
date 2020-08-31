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
      comment: "抽查学生关联id",
      field: "id"
    },
    plan_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "计划编号",
      field: "plan_code"
    },
    plan_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "计划id",
      field: "plan_id"
    },
    student_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "学生id",
      field: "student_id"
    }
  };
  const options = {
    tableName: "t_spot_check_student",
    comment: "",
    indexes: []
  };
  const TSpotCheckStudentModel = sequelize.define("t_spot_check_student_model", attributes, options);
  return TSpotCheckStudentModel;
};