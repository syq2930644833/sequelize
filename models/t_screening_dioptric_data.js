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
      comment: "筛查屈光数据id",
      field: "id"
    },
    plan_code: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "计划编号",
      field: "plan_code"
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
    student_card: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "学生身份证",
      field: "student_card"
    },
    devicename: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "设备名称",
      field: "devicename"
    },
    devicecode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "设备编号",
      field: "devicecode"
    },
    one_right_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第一次右眼球镜DS",
      field: "one_right_ds"
    },
    one_left_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第一次左眼球镜DS",
      field: "one_left_ds"
    },
    one_right_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第一次右眼球镜DC",
      field: "one_right_dc"
    },
    one_left_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第一次左眼球镜DC",
      field: "one_left_dc"
    },
    one_right_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第一次右眼球镜axis",
      field: "one_right_axis"
    },
    one_left_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第一次左眼球镜axis",
      field: "one_left_axis"
    },
    two_right_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第二次右眼球镜DS",
      field: "two_right_ds"
    },
    two_left_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第二次左眼球镜DS",
      field: "two_left_ds"
    },
    two_right_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第二次右眼球镜DC",
      field: "two_right_dc"
    },
    two_left_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第二次左眼球镜DC",
      field: "two_left_dc"
    },
    two_right_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第二次右眼球镜axis",
      field: "two_right_axis"
    },
    two_left_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第二次左眼球镜axis",
      field: "two_left_axis"
    },
    three_right_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第三次右眼球镜DS",
      field: "three_right_ds"
    },
    three_left_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第三次左眼球镜DS",
      field: "three_left_ds"
    },
    three_right_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第三次右眼球镜DC",
      field: "three_right_dc"
    },
    three_left_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第三次左眼球镜DC",
      field: "three_left_dc"
    },
    three_right_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第三次右眼球镜axis",
      field: "three_right_axis"
    },
    three_left_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第三次左眼球镜axis",
      field: "three_left_axis"
    },
    avg_right_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "均值右眼球镜DS",
      field: "avg_right_ds"
    },
    avg_left_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "均值左眼球镜DS",
      field: "avg_left_ds"
    },
    avg_right_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "均值右眼球镜DC",
      field: "avg_right_dc"
    },
    avg_left_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "均值左眼球镜DC",
      field: "avg_left_dc"
    },
    avg_right_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "均值右眼球镜axis",
      field: "avg_right_axis"
    },
    avg_left_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "均值左眼球镜axis",
      field: "avg_left_axis"
    },
    right_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "右眼等效球镜",
      field: "right_se"
    },
    left_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "左眼等效球镜",
      field: "left_se"
    },
    pd: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "瞳距",
      field: "pd"
    },
    exam_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "检查时间",
      field: "exam_date"
    },
    reserve1: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "reserve1"
    },
    reserve2: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "reserve2"
    }
  };
  const options = {
    tableName: "t_screening_dioptric_data",
    comment: "",
    indexes: []
  };
  const TScreeningDioptricDataModel = sequelize.define("t_screening_dioptric_data_model", attributes, options);
  return TScreeningDioptricDataModel;
};