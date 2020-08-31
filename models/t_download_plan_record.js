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
      comment: "下载计划记录id",
      field: "id"
    },
    plan_code: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "筛查计划编号",
      field: "plan_code"
    },
    leading_cadre: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "下载任务负责人",
      field: "leading_cadre"
    },
    ip_address: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "IP地址",
      field: "ip_address"
    },
    download_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: "下载时间",
      field: "download_time"
    },
    leading_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "负责人id",
      field: "leading_id"
    },
    organization: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "下载人所属机构",
      field: "organization"
    },
    reserve1: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "备用1",
      field: "reserve1"
    },
    reserve2: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "备用2",
      field: "reserve2"
    }
  };
  const options = {
    tableName: "t_download_plan_record",
    comment: "",
    indexes: []
  };
  const TDownloadPlanRecordModel = sequelize.define("t_download_plan_record_model", attributes, options);
  return TDownloadPlanRecordModel;
};