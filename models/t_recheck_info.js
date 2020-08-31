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
      comment: "复查表id",
      field: "id"
    },
    sutdent_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "姓名",
      field: "sutdent_name"
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
    school_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "学校名称",
      field: "school_name"
    },
    grade_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "年级",
      field: "grade_name"
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
    class_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "班级名称",
      field: "class_name"
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
    id_card: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "身份证号",
      field: "id_card"
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "出生日期",
      field: "birthday"
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "联系电话",
      field: "phone"
    },
    iolmaster_right_al: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "右眼AL",
      field: "iolmaster_right_al"
    },
    iolmaster_left_al: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "左眼AL",
      field: "iolmaster_left_al"
    },
    iolmaster_right_acd: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "右眼ACD",
      field: "iolmaster_right_acd"
    },
    iolmaster_left_acd: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "左眼ACD",
      field: "iolmaster_left_acd"
    },
    right_front_curvature: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "右眼晶体前表面曲率",
      field: "right_front_curvature"
    },
    right_black_curvature: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "右眼晶体后表面曲率",
      field: "right_black_curvature"
    },
    left_front_curvature: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "左眼晶体前表面曲率",
      field: "left_front_curvature"
    },
    left_black_curvature: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "左眼晶体后表面曲率",
      field: "left_black_curvature"
    },
    iolmaster_right_cmt: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "右眼中心凹厚度",
      field: "iolmaster_right_cmt"
    },
    iolmaster_left_cmt: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "左眼中心凹厚度",
      field: "iolmaster_left_cmt"
    },
    ac_right_ax: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "眼轴右眼",
      field: "ac_right_ax"
    },
    ac_left_ax: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "眼轴左眼",
      field: "ac_left_ax"
    },
    ac_right_curvature1: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "角膜曲率1右眼",
      field: "ac_right_curvature1"
    },
    ac_right_curvature2: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "角膜曲率2右眼",
      field: "ac_right_curvature2"
    },
    ac_left_curvature1: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "角膜曲率1左眼",
      field: "ac_left_curvature1"
    },
    ac_left_curvature2: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "角膜曲率2左眼",
      field: "ac_left_curvature2"
    },
    iop_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "眼压右眼",
      field: "iop_right"
    },
    iop_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "眼压左眼",
      field: "iop_left"
    },
    cva_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "矫正视力右眼",
      field: "cva_right"
    },
    cva_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "矫正视力左眼",
      field: "cva_left"
    },
    oct_right: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "oct图右眼",
      field: "oct_right"
    },
    oct_left: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "oct图左眼",
      field: "oct_left"
    },
    prescription: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "配镜处方",
      field: "prescription"
    },
    check_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "检查日期",
      field: "check_time"
    },
    hospital: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "复检医院名称",
      field: "hospital"
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
    },
    reserve3: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "备用3",
      field: "reserve3"
    },
    vision_reason: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "vision_reason"
    },
    naked_vision_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "裸眼视力-左眼",
      field: "naked_vision_left"
    },
    naked_vision_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "裸眼视力-右眼",
      field: "naked_vision_right"
    },
    one_right_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪1屈光-右眼球镜DS",
      field: "one_right_ds"
    },
    one_left_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪1屈光-左眼球镜DS",
      field: "one_left_ds"
    },
    one_right_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪1屈光-右眼柱镜DC",
      field: "one_right_dc"
    },
    one_left_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪1屈光-左眼柱镜DC",
      field: "one_left_dc"
    },
    one_right_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪1屈光-右眼球镜axis",
      field: "one_right_axis"
    },
    one_left_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪1屈光-左眼球镜axis",
      field: "one_left_axis"
    },
    one_right_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪1屈光-右眼等效球镜",
      field: "one_right_se"
    },
    one_left_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪1屈光-左眼等效球镜",
      field: "one_left_se"
    }
  };
  const options = {
    tableName: "t_recheck_info",
    comment: "",
    indexes: []
  };
  const TRecheckInfoModel = sequelize.define("t_recheck_info_model", attributes, options);
  return TRecheckInfoModel;
};