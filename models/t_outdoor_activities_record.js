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
      comment: "记录主键",
      field: "id"
    },
    outdoor_activities_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "户外活动主键",
      field: "outdoor_activities_id"
    },
    week: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "周一：1 周二：2 周三：3....",
      field: "week"
    },
    weather: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "天气",
      field: "weather"
    },
    check_flag: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "有无执行户外活动 0：否 1：是",
      field: "check_flag"
    },
    activity_place: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "活动地点",
      field: "activity_place"
    },
    activity_time: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "活动时长",
      field: "activity_time"
    },
    attend_num: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "参加人数",
      field: "attend_num"
    },
    unattend_num: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "未参加人数",
      field: "unattend_num"
    },
    reasons: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "未执行户外活动原因",
      field: "reasons"
    },
    remarks: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "备注",
      field: "remarks"
    },
    autograph: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "签名",
      field: "autograph"
    },
    create_user: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "创建人",
      field: "create_user"
    },
    update_user: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "修改人",
      field: "update_user"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: "创建日期",
      field: "create_date"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "修改日期",
      field: "update_date"
    },
    deleted: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "删除状态 0：否 1：是",
      field: "deleted"
    }
  };
  const options = {
    tableName: "t_outdoor_activities_record",
    comment: "",
    indexes: []
  };
  const TOutdoorActivitiesRecordModel = sequelize.define("t_outdoor_activities_record_model", attributes, options);
  return TOutdoorActivitiesRecordModel;
};