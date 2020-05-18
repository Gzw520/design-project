const Mongoclient=require('mongodb').MongoClient; //引入Mongo模块；
const url='mongodb://localhost:27017';            //定义数据库地址；
const dbName='koa';                               //定义数据库名称；

class Db{
    static getInstall(){
        if(!Db.instance){
            Db.instance=new Db();
        }
        return Db.instance;
    }
    constructor(){
        this.dbClient='';
        this.connect();
    }
    connect(){
        let that=this;
        return new Promise((resolve,reject)=>{
            if(!that.dbClient){
                Mongoclient.connect(url,(err,client)=>{
                    if(err){
                        reject(err)
                    }else{
                        that.dbClient=client.db(dbName);
                        resolve(that.dbClient)
                    }
                })
            }else{
                resolve(that.dbClient);
            }
        })
    }
    find(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                const result=db.collection(collectionName).find(json);
                result.toArray((err,res)=>{
                    if(err){
                        reject(err);
                        return;
                    }
                    resolve(res)
                })
            })
        })
    }
    findmuch(collectionName1,collectionName2,json1,json2){
        //多表级联查询
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                const result=db.collection(collectionName1).aggregate([
                    {
                        $lookup:
                        {
                            from:collectionName2,  //from：要做关联的表； 
                            localField:json1,      //  主表的相同字段
                            foreignField:json2,    // 辅表的相同字段
                            as:'showList'           //注意：此处一定不能使用连字符 eg：show-list 是错误的写法
                        }
                    }
                ]);
                result.toArray((err,res)=>{
                    if(err){
                        reject(err);
                        return
                    }
                    resolve(res)
                })
            })
        })
    }

    findselect(collectionName1,collectionName2,json1,json2,json3){
        //多表级联查询
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                const result=db.collection(collectionName1).aggregate([
                    {
                        $match:{shopname:json3}
                    },
                    {
                        $lookup:
                        {
                            from:collectionName2,  //from：要做关联的表； 
                            localField:json1,      //  主表的相同字段
                            foreignField:json2,    // 辅表的相同字段
                            as:'showList'           //注意：此处一定不能使用连字符 eg：show-list 是错误的写法
                        }
                    },
                ]);
                result.toArray((err,res)=>{
                    if(err){
                        reject(err);
                        return
                    }
                    resolve(res)
                })
            })
        })
    }

    update(collectionName,json1,json2){
        //db.user.update({},{$set:{}})
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).updateOne(json1,{$set:json2},(err,res)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(res)
                    }
                })
            })
        })
    }
    insert(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).insertOne(json,(err,res)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(res)
                    }
                })
            })
        })
    }
    remove(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).removeOne(json,(err,res)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(res)
                    }
                })
            })
        })
    }

}

module.exports=Db.getInstall();

// const myDb=new Db;
// myDb.find('cart',{}).then((res)=>{
//     console.log(res);
// })
// myDb.insert('user',{'username':'狗屎','age':29,'sex':'女','status':'1'})
// myDb.update('user',{'username':'邓紫棋','sex':'女'},{'age':88})
// myDb.remove('user',{'username':'狗屎'})  
// myDb.findmuch('type','menu','pid','pid')
