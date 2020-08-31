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
      comment: "综合统计",
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
    sex: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "性别 0未知 1男 2女",
      field: "sex"
    },
    myopia_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "符合近视人数",
      field: "myopia_num"
    },
    normal_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力正常人数",
      field: "normal_num"
    },
    poor_vision_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力不良人数",
      field: "poor_vision_num"
    },
    level_one_warning: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "一级警告人数",
      field: "level_one_warning"
    },
    level_two_warning: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "二级警告人数",
      field: "level_two_warning"
    },
    level_three_warning: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "三级警告人数",
      field: "level_three_warning"
    },
    hight_warning: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "高危预警人数",
      field: "hight_warning"
    },
    statistics_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: "统计时间",
      field: "statistics_time"
    },
    reserve1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "备用1",
      field: "reserve1"
    }
  };
  const options = {
    tableName: "t_synthesis_statistics",
    comment: "",
    indexes: [{
      name: "school_inde",
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
  const TSynthesisStatisticsModel = sequelize.define("t_synthesis_statistics_model", attributes, options);
  return TSynthesisStatisticsModel;
};