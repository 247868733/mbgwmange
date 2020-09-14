const mongoose = require('mongoose'); // 引入mongoose模块
const dbConfig=require('./config')
//连接数据库
mongoose.connect(dbConfig.db_URL,{useNewUrlParser:true,useUnifiedTopology: true}, dbConfig.options).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log("数据库连接成功...");
    },
    err => { /** handle initial connection error */ 
        console.log('连接失败',err)
    }
  );
  
// 连接异常
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
  });
  
  // 断开连接
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
  });
module.exports=mongoose;