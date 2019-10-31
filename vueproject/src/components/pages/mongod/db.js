const MongoClient = require('mongodb').MongoClient;
//引入断言模块
const assert = require('assert');

// Connection URL 
const url = 'mongodb://localhost:27017';

// Database Name     库
const dbName = 'node1908';

const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            function (err, client) {
                assert.strictEqual(null, err); //== 通过 这里是判断err错误 == null
                //如果错误返回reject 否则返回resolve()把client返回出去
                err ? reject(err) : resolve(client)
            });
    })
}

//增加 insert

const insert = (col,query) => {
    return new Promise(async(resolve, reject) => {
         //执行connect方法 拿到里面的成功后的client
         const client = await connect();

         //选中需要连接的库
         const db = client.db(dbName);
 
         //选中需要连接的表 col
         const collection = db.collection(col);
                        //增加 该方法接受一个参数，是一个数组
        collection.insertMany([...query], function(err, result) {
            err ? reject(err) : resolve(result)
        });
       
    })

}


//find方法 查找
const find = (col, query) => {
    return new Promise(async (resolve, reject) => {
        //执行connect方法 拿到里面的成功后的client
        const client = await connect();

        //选中需要连接的库
        const db = client.db(dbName);

        //选中需要连接的表 col
        const collection = db.collection(col);
        /*判断表名后面还有没有传参数  query参数如果有值query否则为一个空对象
           toArray 将查找到的集合转为数组格式    用数组格式把筛选出来的集合包起来
            */
        collection.find(query ? query : {}).toArray(function (err, docs) {
            err ? reject(err) : resolve(docs)
        });

        //关闭连接
        client.close();
    })
}

//改
// query: 筛选条件
// query2: 更改后的值
const update = (col, query, query2) => {
    return new Promise(async (resolve, reject) => {
        //执行connect方法 拿到里面的成功后的client
        const client = await connect();

        //选中需要连接的库
        const db = client.db(dbName);

        //选中需要连接的表 col
        const collection = db.collection(col);
        /*
             updateMany({...query},{$set: query2}) 
             将筛选出来的值进行更改
             query：筛选     query2:更改后的值
            */
        collection.updateMany({
            ...query
        }, {
            $set: {
                ...query2
            }
        }, function (err, result) {

            //把更改后的数据返回出去
            err ? reject(err) : resolve(result)
        });

        //关闭连接
    })

}
//删  参数 col：表名  query：要删除的数据
const deleteName = (col, query) => {
    return new Promise(async (resolve, reject) => {
        //执行connect方法 拿到里面的成功后的client
        const client = await connect();

        //选中需要连接的库
        const db = client.db(dbName);

        //选中需要连接的表 col
        const collection = db.collection(col);
        collection.deleteMany(query, function (err, result) {
            //把删除之后的结果返回出去
            err ? reject(err) : resolve(result)
        })
    })
}

module.exports = {
    insert,
    find,
    update,
    deleteName
}