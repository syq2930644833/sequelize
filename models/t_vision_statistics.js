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
    school_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "学校id",
      field: "school_id"
    },
    eye_flag: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "1",
      primaryKey: false,
      autoIncrement: false,
      comment: "左右眼标识 1左 2有",
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
      allowNull: false,
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
    }
  };
  const options = {
    tableName: "t_vision_statistics",
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
  const TVisionStatisticsModel = sequelize.define("t_vision_statistics_model", attributes, options);
  return TVisionStatisticsModel;
};