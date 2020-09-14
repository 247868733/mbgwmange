const db_URL = 'mongodb://192.168.10.52'; //数据库地址
const options = {
    dbName:"",//指定要连接的数据库名称（覆盖连接字符串）。
    user:"",//用户名
    pass:"test",//密码
    autoIndex: false, // 默认情况下，mongoose 在连接时会自动建立 schema 的索引。这有利于开发，但是在大型生产环境下不是十分理想，因为索引建立会导致性能下降。如果 autoIndex 设为 false，mongoose 将不会自动建立索引
    reconnectTries: Number.MAX_VALUE, //服务器尝试重新连接＃次
    reconnectInterval: 500, // 500ms 服务器将在两次重试之间等待＃毫秒
    poolSize: 5, // MongoDB 保持的最大 socket 连接数。 poolSize 的默认值是 5。注意，MongoDB 3.4 之前， MongoDB 只允许每个 socket 同时进行一个操作，所以如果你有几个缓慢请求卡着后面快的请求，可以尝试增加连接数。
    bufferMaxEntries: 0,//MongoDB 驱动同样有自己的离线时缓存机制。如果你希望链接错误时终止数据库操作，请将此选项设为 0 以及把 bufferCommands 设为 false 。
    autoReconnect:true ,//底层 MongoDB 驱动在连接丢失后将自动重连。除非你是可以自己管理连接池的高手，否则不要把这个选项设为 false
  };
const defaultSchemaExtend = {
    createTime: {
      type: Date,
      default: Date.now
    },
    updateTime: {
      type: Date,
      default: Date.now
    }
  };
  
const defaultSchemaOptions = {
    timestamps: {
      createdAt: 'createTime',
      updatedAt: 'updateTime'
    }
  };
 
const _db_URL = db_URL;
export { _db_URL as db_URL };
const _options = options;
export { _options as options };
const _defaultSchemaExtend = defaultSchemaExtend;
export { _defaultSchemaExtend as defaultSchemaExtend };
const _defaultSchemaOptions = defaultSchemaOptions;
export { _defaultSchemaOptions as defaultSchemaOptions };