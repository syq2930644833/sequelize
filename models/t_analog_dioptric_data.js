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
    proofread_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "校对时间",
      field: "proofread_date"
    },
    device_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "设备编号",
      field: "device_no"
    },
    device_type: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "设备类型",
      field: "device_type"
    },
    device_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "设备名称",
      field: "device_name"
    },
    one_right_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第一次屈光-球镜-右眼",
      field: "one_right_ds"
    },
    one_left_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第一次屈光-球镜-左眼",
      field: "one_left_ds"
    },
    one_right_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第一次屈光-柱镜-右眼",
      field: "one_right_dc"
    },
    one_left_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第一次屈光-柱镜-左眼",
      field: "one_left_dc"
    },
    one_right_axies: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第一次屈光-轴位-右眼",
      field: "one_right_axies"
    },
    one_left_axies: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第一次屈光-轴位-左眼",
      field: "one_left_axies"
    },
    two_right_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第二次屈光-球镜-右眼",
      field: "two_right_ds"
    },
    two_left_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第二次屈光-球镜-左眼",
      field: "two_left_ds"
    },
    two_right_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第二次屈光-柱镜-右眼",
      field: "two_right_dc"
    },
    two_left_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第二次屈光-柱镜-左眼",
      field: "two_left_dc"
    },
    two_right_axies: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第二次屈光-轴位-右眼",
      field: "two_right_axies"
    },
    two_left_axies: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第二次屈光-轴位-左眼",
      field: "two_left_axies"
    },
    three_right_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第三次屈光-球镜-右眼",
      field: "three_right_ds"
    },
    three_left_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第三次屈光-球镜-左眼",
      field: "three_left_ds"
    },
    three_right_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第三次屈光-柱镜-右眼",
      field: "three_right_dc"
    },
    three_left_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第三次屈光-柱镜-左眼",
      field: "three_left_dc"
    },
    three_right_axies: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第三次屈光-轴位-右眼",
      field: "three_right_axies"
    },
    three_left_axies: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第三次屈光-轴位-左眼",
      field: "three_left_axies"
    },
    avg_right_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "三次均值屈光-球镜-右眼",
      field: "avg_right_ds"
    },
    avg_left_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "三次均值均值屈光-球镜-左眼",
      field: "avg_left_ds"
    },
    avg_right_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "三次均值屈光-柱镜-右眼",
      field: "avg_right_dc"
    },
    avg_left_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "三次均值屈光-柱镜-左眼",
      field: "avg_left_dc"
    },
    avg_right_axies: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "三次均值屈光-轴位-右眼",
      field: "avg_right_axies"
    },
    avg_left_axies: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "三次均值屈光-轴位-左眼",
      field: "avg_left_axies"
    },
    pr_right_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "校对-球镜-右眼-误差",
      field: "pr_right_ds"
    },
    pr_left_ds: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "校对-球镜-左眼-误差",
      field: "pr_left_ds"
    },
    pr_right_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "校对-柱镜-右眼-误差",
      field: "pr_right_dc"
    },
    pr_left_dc: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "校对-柱镜-左眼-误差",
      field: "pr_left_dc"
    },
    pf_right_axies: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "校对-轴位-右眼-误差",
      field: "pf_right_axies"
    },
    pf_left_axies: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "校对-轴位-左眼-误差",
      field: "pf_left_axies"
    },
    proofread_result: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      primaryKey: false,
      autoIncrement: false,
      comment: "校对结果 1：合格 0：不合格",
      field: "proofread_result"
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
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "更新时间",
      field: "update_date"
    },
    province_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "省",
      field: "province_id"
    },
    city_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "城市",
      field: "city_id"
    },
    region_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "地区",
      field: "region_id"
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      primaryKey: false,
      autoIncrement: false,
      comment: "删除标识 0否 1是",
      field: "deleted"
    },
    upload_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      primaryKey: false,
      autoIncrement: false,
      comment: "是否上传 0:否 1：是",
      field: "upload_flag"
    },
    reserve1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "备用字段1",
      field: "reserve1"
    },
    reserve2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "reserve2"
    },
    reserve3: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "reserve3"
    },
    one_right_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第一次屈光-右眼等效球镜",
      field: "one_right_se"
    },
    one_left_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第一次屈光-左眼等效球镜",
      field: "one_left_se"
    },
    two_right_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第二次屈光-右眼等效球镜",
      field: "two_right_se"
    },
    two_left_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第二次屈光-左眼等效球镜",
      field: "two_left_se"
    },
    three_right_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第三次屈光-右眼等效球镜",
      field: "three_right_se"
    },
    three_left_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "第三次屈光-左眼等效球镜",
      field: "three_left_se"
    },
    avg_left_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "三次均值屈光-左眼等效球镜",
      field: "avg_left_se"
    },
    avg_right_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "三次均值屈光-右眼等效球镜",
      field: "avg_right_se"
    },
    pf_right_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "校对-右眼等效球镜-误差",
      field: "pf_right_se"
    },
    pf_left_se: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "校对-左眼等效球镜-误差",
      field: "pf_left_se"
    },
    plan_code: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "plan_code"
    },
    plan_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "plan_id"
    }
  };
  const options = {
    tableName: "t_analog_dioptric_data",
    comment: "",
    indexes: []
  };
  const TAnalogDioptricDataModel = sequelize.define("t_analog_dioptric_data_model", attributes, options);
  return TAnalogDioptricDataModel;
};