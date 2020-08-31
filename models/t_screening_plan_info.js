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
      comment: "已筛查ID",
      field: "id"
    },
    plan_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "筛查计划ID",
      field: "plan_id"
    },
    plan_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "筛查计划名",
      field: "plan_name"
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
    student_card: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "学生身份证号",
      field: "student_card"
    },
    student_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "学生名称",
      field: "student_name"
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
    vision_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "视力状态：0-正常，1-异常",
      field: "vision_status"
    },
    follow_type: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "关注类型",
      field: "follow_type"
    },
    hospital_flag: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "是否到院 0否1是",
      field: "hospital_flag"
    },
    glasses: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "是否佩戴眼镜 0-不戴镜 1-戴框架镜 2-塑形镜（隐形） 3-矫正（做过手术） ",
      field: "glasses"
    },
    refract_status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "正常",
      primaryKey: false,
      autoIncrement: false,
      comment: "屈光状态",
      field: "refract_status"
    },
    mct_number_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "角膜塑形镜度数-右眼",
      field: "mct_number_right"
    },
    mct_number_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "角膜塑形镜度数-左眼",
      field: "mct_number_left"
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
    cva_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "矫正视力-左眼(戴镜)",
      field: "cva_left"
    },
    cva_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "矫正视力-右眼(戴镜)",
      field: "cva_right"
    },
    color_vision: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "色觉",
      field: "color_vision"
    },
    stereo_vision: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "立体视觉",
      field: "stereo_vision"
    },
    night_vision: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "夜视力",
      field: "night_vision"
    },
    eye_pos: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "眼位",
      field: "eye_pos"
    },
    trachoma: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "沙眼",
      field: "trachoma"
    },
    conjunctivitis: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "结膜炎",
      field: "conjunctivitis"
    },
    spr_right_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "小瞳屈光-右眼球镜DS",
      field: "spr_right_ds"
    },
    spr_left_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "小瞳屈光-左眼球镜DS",
      field: "spr_left_ds"
    },
    spr_right_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "小瞳屈光-右眼柱镜DC",
      field: "spr_right_dc"
    },
    spr_left_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "小瞳屈光-左眼柱镜DC",
      field: "spr_left_dc"
    },
    spr_right_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "小瞳屈光-右眼球镜axis",
      field: "spr_right_axis"
    },
    spr_left_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "小瞳屈光-左眼球镜axis",
      field: "spr_left_axis"
    },
    spr_left_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "小瞳屈光-左眼等效球镜",
      field: "spr_left_se"
    },
    spr_righ_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "小瞳屈光-右眼等效球镜",
      field: "spr_righ_se"
    },
    pupillary_distance: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "瞳距",
      field: "pupillary_distance"
    },
    examinator: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "检查人",
      field: "examinator"
    },
    unit_of_attribution: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "所属单位",
      field: "unit_of_attribution"
    },
    examine_id: {
      type: DataTypes.INTEGER(32),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "检查人id",
      field: "examine_id"
    },
    check_address: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "测试地点",
      field: "check_address"
    },
    result: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "初筛结果",
      field: "result"
    },
    refract_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "屈光数据",
      field: "refract_id"
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "特殊说明",
      field: "remark"
    },
    check_del: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "是否删除 0-未删除 1-删除",
      field: "check_del"
    },
    create_user: {
      type: DataTypes.INTEGER(32),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "创建人",
      field: "create_user"
    },
    update_user: {
      type: DataTypes.INTEGER(32),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "更新人",
      field: "update_user"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: "创建时间",
      field: "create_date"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "更新时间",
      field: "update_date"
    },
    reserve1: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "备用字段1",
      field: "reserve1"
    },
    reserve2: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "备用字段2",
      field: "reserve2"
    },
    reserve3: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "备用字段3",
      field: "reserve3"
    },
    vision_device_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力设备编号",
      field: "vision_device_name"
    },
    vision_device_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力设备编号",
      field: "vision_device_no"
    },
    vision_reason: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力未查原因",
      field: "vision_reason"
    },
    refract_reason: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "屈光未查原因",
      field: "refract_reason"
    },
    one_devicename_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "屈光设备编号",
      field: "one_devicename_no"
    },
    one_devicename: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "设备名称",
      field: "one_devicename"
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
    },
    one_eye_position_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪1眼位-左眼",
      field: "one_eye_position_left"
    },
    one_eye_position_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪1眼位-右眼",
      field: "one_eye_position_right"
    },
    two_right_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪2屈光-右眼球镜DS",
      field: "two_right_ds"
    },
    two_left_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪2屈光-左眼球镜DS",
      field: "two_left_ds"
    },
    two_right_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪2屈光-右眼柱镜DC",
      field: "two_right_dc"
    },
    two_left_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪2屈光-左眼柱镜DC",
      field: "two_left_dc"
    },
    two_right_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪2屈光-右眼球镜axis",
      field: "two_right_axis"
    },
    two_left_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪2屈光-左眼球镜axis",
      field: "two_left_axis"
    },
    two_right_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪2屈光-右眼等效球镜",
      field: "two_right_se"
    },
    two_left_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪2屈光-左眼等效球镜",
      field: "two_left_se"
    },
    two_eye_position_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪2眼位-左眼",
      field: "two_eye_position_left"
    },
    two_eye_position_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪2眼位-右眼",
      field: "two_eye_position_right"
    },
    three_right_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪3屈光-右眼球镜DS",
      field: "three_right_ds"
    },
    three_left_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪3屈光-左眼球镜DS",
      field: "three_left_ds"
    },
    three_right_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪3屈光-右眼柱镜DC",
      field: "three_right_dc"
    },
    three_left_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪3屈光-左眼柱镜DC",
      field: "three_left_dc"
    },
    three_right_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪3屈光-右眼球镜axis",
      field: "three_right_axis"
    },
    three_left_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪3屈光-左眼球镜axis",
      field: "three_left_axis"
    },
    three_right_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪3屈光-右眼等效球镜",
      field: "three_right_se"
    },
    three_left_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪3屈光-左眼等效球镜",
      field: "three_left_se"
    },
    three_eye_position_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪3眼位-左眼",
      field: "three_eye_position_left"
    },
    three_eye_position_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "视力筛查仪3眼位-右眼",
      field: "three_eye_position_right"
    },
    iolmaster_right_eye_al: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "IOLMaster 700-右眼",
      field: "iolmaster_right_eye_al"
    },
    iolmaster_left_eye_al: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "IOLMaster 700-左眼",
      field: "iolmaster_left_eye_al"
    },
    iolmaster_front_surface_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "IOLMaster 700-右眼晶体前表面曲率",
      field: "iolmaster_front_surface_right"
    },
    iolmaster_front_surface_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "IOLMaster 700-左眼晶体前表面曲率",
      field: "iolmaster_front_surface_left"
    },
    iolmaster_after_surface_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "IOLMaster 700-右眼晶体后表面曲率",
      field: "iolmaster_after_surface_right"
    },
    iolmaster_after_surface_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "IOLMaster 700-左眼晶体后表面曲率",
      field: "iolmaster_after_surface_left"
    },
    iolmaster_fovea_thickness_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "IOLMaster 700-右眼中心凹厚度",
      field: "iolmaster_fovea_thickness_right"
    },
    iolmaster_fovea_thickness_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "IOLMaster 700-左眼中心凹厚度",
      field: "iolmaster_fovea_thickness_left"
    },
    iolmaster_eye_acd_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "IOLMaster 700-右眼ACD",
      field: "iolmaster_eye_acd_right"
    },
    iolmaster_eye_acd_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "IOLMaster 700-右眼ACD",
      field: "iolmaster_eye_acd_left"
    },
    mydriatic_refraction_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "散瞳屈光-右眼球镜DS",
      field: "mydriatic_refraction_right"
    },
    mydriatic_refraction_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "散瞳屈光-左眼球镜DS",
      field: "mydriatic_refraction_left"
    },
    mydriatic_refraction_right_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "散瞳屈光-右眼柱镜DC",
      field: "mydriatic_refraction_right_dc"
    },
    mydriatic_refraction_left_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "散瞳屈光-左眼柱镜DC",
      field: "mydriatic_refraction_left_dc"
    },
    mydriatic_refraction_right_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "散瞳屈光-右眼球镜axis",
      field: "mydriatic_refraction_right_axis"
    },
    mydriatic_refraction_left_axis: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "散瞳屈光-左眼球镜axis",
      field: "mydriatic_refraction_left_axis"
    },
    mydriatic_refraction_right_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "散瞳屈光-右眼等效球镜",
      field: "mydriatic_refraction_right_se"
    },
    mydriatic_refraction_left_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "散瞳屈光-左眼等效球镜",
      field: "mydriatic_refraction_left_se"
    },
    mydriatic_refraction_eye_position_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "散瞳屈光-左眼",
      field: "mydriatic_refraction_eye_position_left"
    },
    mydriatic_refraction_eye_position_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "散瞳屈光-右眼",
      field: "mydriatic_refraction_eye_position_right"
    },
    sliaa_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "裂隙灯检查-右眼眼前节异常",
      field: "sliaa_right"
    },
    sliaa_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "裂隙灯检查-左眼眼前节异常",
      field: "sliaa_left"
    },
    slipa_right: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "裂隙灯检查-右眼眼后节异常",
      field: "slipa_right"
    },
    slipa_left: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "裂隙灯检查-左眼眼后节异常",
      field: "slipa_left"
    },
    notes: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "注释",
      field: "notes"
    },
    upload_flag: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "上传标识 0否 1是",
      field: "upload_flag"
    },
    platform: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "来自哪",
      field: "platform"
    },
    report: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "报告",
      field: "report"
    }
  };
  const options = {
    tableName: "t_screening_plan_info",
    comment: "",
    indexes: [{
      name: "shool_index",
      unique: false,
      type: "BTREE",
      fields: ["plan_name", "class_name", "exam_date", "naked_vision_left", "naked_vision_right", "cva_left", "cva_right"]
    }]
  };
  const TScreeningPlanInfoModel = sequelize.define("t_screening_plan_info_model", attributes, options);
  return TScreeningPlanInfoModel;
};