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
      comment: "视力统计id",
      field: "id"
    },
    class_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "班级id",
      field: "class_id"
    },
    grade_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "年级名称",
      field: "grade_name"
    },
    plan_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "计划id",
      field: "plan_id"
    },
    school_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "学校id",
      field: "school_id"
    },
    provinde: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "省id",
      field: "provinde"
    },
    city: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "市id",
      field: "city"
    },
    region: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "地区id",
      field: "region"
    },
    sex: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "性别 0女 1男",
      field: "sex"
    },
    eye_flag: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "1",
      primaryKey: false,
      autoIncrement: false,
      comment: "左右眼标识 1左 2右",
      field: "eye_flag"
    },
    four_zero: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力4.0人数",
      field: "four_zero"
    },
    four_one: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力4.1人数",
      field: "four_one"
    },
    four_two: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力4.2人数",
      field: "four_two"
    },
    four_three: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力4.3人数",
      field: "four_three"
    },
    four_four: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力4.4人数",
      field: "four_four"
    },
    four_five: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力4.5人数",
      field: "four_five"
    },
    four_six: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力4.6人数",
      field: "four_six"
    },
    four_seven: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力4.7人数",
      field: "four_seven"
    },
    four_eight: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力4.8人数",
      field: "four_eight"
    },
    four_nine: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力4.9人数",
      field: "four_nine"
    },
    five_zero: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力5.0人数",
      field: "five_zero"
    },
    five_one: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力5.1人数",
      field: "five_one"
    },
    five_two: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力5.2人数",
      field: "five_two"
    },
    five_three: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力5.3人数",
      field: "five_three"
    },
    statistics: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: "统计时间",
      field: "statistics"
    },
    reserve1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "备用1",
      field: "reserve1"
    },
    reserve2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "备用2",
      field: "reserve2"
    }
  };
  const options = {
    tableName: "t_vision_boy_girl_statistics",
    comment: "",
    indexes: [{
      name: "school_index",
      unique: false,
      type: "BTREE",
      fields: ["school_id"]
    }, {
      name: "class_index",
      unique: false,
      type: "BTREE",
      fields: ["class_id"]
    }]
  };
  const TVisionBoyGirlStatisticsModel = sequelize.define("t_vision_boy_girl_statistics_model", attributes, options);
  return TVisionBoyGirlStatisticsModel;
};