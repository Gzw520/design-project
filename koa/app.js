const Koa = require('koa');
const Router = require('koa-router')();//实例化路由
const Db = require('./mongo.js');       //数据库文件
const cors = require('koa2-cors');      //后台允许跨域
const static = require('koa-static');
const bodyParser = require('koa-bodyparser'); //post请求
const views = require('koa-views');     //koa页面模板
const multer = require('koa-multer')    //图片的上传处理
// const Alipay = require('alipay-mobile');
// const assert = require('assert');

//文件上传--磁盘存储配置项
const storage = multer.diskStorage({
    //文件服务端存储位置
    destination(req, file, cb) {
        cb(null, 'public/uploads')
    },
    //文件名
    filename(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

const app = new Koa();
Router.get("/type", async (ctx, next) => {
    next()
    const result = await Db.findmuch('type', 'menu', 'pid', 'pid')
    ctx.body = {
        result: result
    }
})

Router.get("/order", async (ctx, next) => {
    next()
    switch (ctx.query.shopname) {
        case '牛肉面':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "牛肉面")
            ctx.body = {
                result: result
            }
            break;
        case '油泼面':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "油泼面")
            ctx.body = {
                result: result
            }
            break;
        case '臊子面':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "臊子面")
            ctx.body = {
                result: result
            }
            break;
        case '意大利面':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "意大利面")
            ctx.body = {
                result: result
            }
            break;
        case '饺子':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "饺子")
            ctx.body = {
                result: result
            }
            break;
        case '包子':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "包子")
            ctx.body = {
                result: result
            }
            break;
        case '新疆大盘鸡':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "新疆大盘鸡")
            ctx.body = {
                result: result
            }
            break;
        case '北京烤鸭':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "北京烤鸭")
            ctx.body = {
                result: result
            }
            break;
        case '蒜苔肉丝':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "蒜苔肉丝")
            ctx.body = {
                result: result
            }
            break;
        case '羊排':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "羊排")
            ctx.body = {
                result: result
            }
            break;
        case '鲜切牛肉':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "鲜切牛肉")
            ctx.body = {
                result: result
            }
            break;
        case '红烧鲤鱼':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "红烧鲤鱼")
            ctx.body = {
                result: result
            }
            break;
        case '紫菜蛋花汤':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "紫菜蛋花汤")
            ctx.body = {
                result: result
            }
            break;
        case '小米粥':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "小米粥")
            ctx.body = {
                result: result
            }
            break;
        case '八宝粥':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "八宝粥")
            ctx.body = {
                result: result
            }
            break;
        case '凉拌木耳':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "凉拌木耳")
            ctx.body = {
                result: result
            }
            break;
        case '肚丝':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "肚丝")
            ctx.body = {
                result: result
            }
            break;
        case '凉拌猪耳':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "凉拌猪耳")
            ctx.body = {
                result: result
            }
            break;
        case '凉拌黄瓜':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "凉拌黄瓜")
            ctx.body = {
                result: result
            }
            break;
        case '凉拌莴苣':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "凉拌莴苣")
            ctx.body = {
                result: result
            }
            break;
        case '凉拌土豆丝':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "凉拌土豆丝")
            ctx.body = {
                result: result
            }
            break;
        case '精品糕点':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "精品糕点")
            ctx.body = {
                result: result
            }
            break;
        case '精品蛋糕':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "精品蛋糕")
            ctx.body = {
                result: result
            }
            break;
        case '爱心蛋挞':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "爱心蛋挞")
            ctx.body = {
                result: result
            }
            break;
        case '农夫山泉':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "农夫山泉")
            ctx.body = {
                result: result
            }
            break;
        case '啵啵奶茶':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "啵啵奶茶")
            ctx.body = {
                result: result
            }
            break;
        case '原味奶茶':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "原味奶茶")
            ctx.body = {
                result: result
            }
            break;
        case '卡布奇洛':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "卡布奇洛")
            ctx.body = {
                result: result
            }
            break;
        case '西湖龙井':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "西湖龙井")
            ctx.body = {
                result: result
            }
            break;
        case '安吉白茶':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "安吉白茶")
            ctx.body = {
                result: result
            }
            break;
        case '82拉菲':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "82拉菲")
            ctx.body = {
                result: result
            }
            break;
        case '贵州茅台':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "贵州茅台")
            ctx.body = {
                result: result
            }
            break;
        case '天之蓝':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "天之蓝")
            ctx.body = {
                result: result
            }
            break;
        case '世纪金徽':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "世纪金徽")
            ctx.body = {
                result: result
            }
            break;
        case '柔和金徽':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "柔和金徽")
            ctx.body = {
                result: result
            }
            break;
        case '雪花纯生':
            var result = await Db.findselect('menu', 'swiper', 'shopname', 'shopname', "雪花纯生")
            ctx.body = {
                result: result
            }
    }

})


Router.get('/uplode', async (ctx, next) => {
    next()
    await ctx.render('uplode')
})

Router.get('/test', async (ctx, next) => {
    next()
    // ctx.body = {
    //     result: result
    // }

})

Router.post('/upload', upload.single('file'), async (ctx, next) => {
    next()
    const { shopname, price, description, pid } = ctx.req.body;
    const img = ctx.request.origin + '/uploads/' + ctx.req.file.originalname;
    // await Db.insert('menu',{shopname,price,description,pid,img})
    // await Db.insert('swiper',{shopname,img})

    console.log(ctx.req.file);
    console.log(ctx.req.body);
    console.log(ctx.request.origin);
    console.log(ctx.request.origin + '/uploads/' + ctx.req.file.originalname);

})

//购物车列表
Router.get('/cartList', async (ctx, next) => {
    next()
    let result = await Db.find('cart', {})
    ctx.body = {
        result: result
    }
})

//添加购物车
Router.post('/cart', async (ctx, next) => {
    next()
    console.log(ctx.request.body)
    try {
        const { num, img, shopname, price } = ctx.request.body
        const hasData = await Db.find('cart', { 'shopname': shopname })
        // console.log(hasData);
        if (hasData.length > 0) {
            await Db.update('cart', { 'shopname': shopname, 'img': img, 'price': parseInt(price).toFixed(2) }, { 'num': parseInt(hasData[0].num) + parseInt(num) })
        } else {
            await Db.insert('cart', { 'num': parseInt(num), img, shopname, 'price': parseInt(price).toFixed(2) })
            // console.log(result);
        }
        ctx.body = { 'success': 'true', 'mes': '增加购物车成功！' };
    } catch (err) {
        ctx.body = { 'success': 'false', 'mes': '增加购物车失败！' };
    }
})

//购物车页面增加按钮
Router.get('/cartAdd', async (ctx, next) => {
    next()
    const name = ctx.query.shopname
    const hasCart = await Db.find('cart', { 'shopname': name })
    if (hasCart.length > 0) {
        await Db.update('cart', { 'shopname': name }, { 'num': parseInt(hasCart[0].num) + 1 })
        ctx.body = {
            "success": true
        }
    }
})
//购物车数量减少按钮
Router.get('/cartDec', async (ctx, next) => {
    next()
    const name = ctx.query.shopname
    const hasCart = await Db.find('cart', { 'shopname': name })
    if (hasCart[0].num <= 1) {
        await Db.remove('cart', { 'shopname': name })
    } else {
        await Db.update('cart', { 'shopname': name }, { 'num': parseInt(hasCart[0].num) - 1 })
        ctx.body = {
            "success": true
        }
    }
})
//搜索列表数据
Router.get('/search', async (ctx, next) => {
    next()
    const result = await Db.find('menu', {})
    ctx.body = {
        result: result
    }
})


// 支付宝支付模块
// Router.get('/doPay', (ctx, next) => {
//     //appPrivKeyFile 本地生成的
//     // alipayPubKeyFile: 蚂蚁金服公钥   支付宝公钥
//     next()
//     const options = {
//         app_id: '2021001158619578',
//         appPrivKeyFile: "MIIEpAIBAAKCAQEA5So3doZWe8CqiAdnvTz+V2Ym0kSi6BBnFFaks6qkIh+6UXLFG9wVK38Mzj2LybgMsKDF+7EQKTvckU78EtnDPxReh6MijH3EyucklDG9y/DL2wBwHYzeYqbQrnxS3OOMGnE0DfapN91Virw2vSaHN7isRtfq1yqKcVL5KEznqxKG/grZMK2x661s6iDx4HbNN0kFdTB7+/Nnu3qJfaiTLwu5aHJTdjCsZekcLfKQWk5MXooeYatVapdPT4LnmmCru6iYRuc0hRYVO9OznpmBOhNbBTQecEkd19SQ+Jpav9fauKvhXTPlf6eK5PH73JPPpeQPI9aftgiWDkbLE4fgEQIDAQABAoIBABNJtllXfTf1Q2UnmmenFpEsm9/evwdhOgvQLxSgLChjGz93tXde0rlSfDVvoLBduVO0dHV2tbGCxFHGoBjGE1Tf1gT8ig/hFgst4TpH5X2gyseoBce275DGEZJeDGtjC4u+M29pb1ywWF7Q8JqC/6aE+JsN2Uo63mQjY60sq+MOB2C7/Mv1Nw8k2cEsh3IAZ19IwTj7zF5YMn2c772ZMI37wBYNQ0c+VAQKTSKSuasvhKHxD9pr8lUiXnq8/ufCjeW497eK2eioNg26cGS4i/i3Z22qTE3Q1KXKnfKm/jwjShTpwfVG5IS8qsVgmpDiOtSMkVz6qCsCdnK0IRJ3g0ECgYEA81qdk46aJybXHXeu8kYXoqZY4+InebjSnLJ0ymQSH4bQZbe5Opvrwap7NRwfLJsYGsqR1++5o1MSO6HhitlDduBDilfm2mEsc9xzOqXubLLnJrfd78d5RhbTwloPGGJt8r/71p5JbmNhUKx6Tvt6p3rDckhamwHb+oNZn5tGFw0CgYEA8RLXY1acxuZxR45fCMSE+TMu2sOgPn8Qavl0gwUfug3Dfe7ZtVM7q1GBhq5UBzVpEWTsfxb9K6MXAly3AZG1K4/kJvi4oIV2OJSiF1zfBxpqYzhHbNgZDpUKSXSLlt9KzQtCYUy06shPKTt3fgdNtPEMqQm1VBTFgj3D972o7BUCgYEAwhY6aQ4p2iH7HVBwImBOx3VendmoXEdRCpK13Rl07toJ6aZfP+RNYneCrngQUPYdgnifWxah+yXs+8x/YssnKG9yzqqOvwsTdhCTgmoGv4DsJJAunOd9zK22FGLZeTw/roT56VDzBeyTF9GH9uhRCbQ6nzIfuVMBTEpoN4iSnR0CgYA8eERs15H11mH91/mAooLUW4FaQI3Wf1rn6nDOWJ+vtLofwaT8dcdW3tgFp37OXBhh05X6/xI8OumPnyAMlbcDGVHacLMnGLMh2C6ce6A6EOc0wi4wYDhQzxPIfyJwkswZiMR60Znj9qDcr9z2UPCt/XT2hcflMlykocehQgK4TQKBgQCSNmMy/3xK8k0ebRC36RrKhou5+JeOB83v9+9+NoVY0JPYYWfBgt6CYetQlm40R6c+kgGQWqM6QNlR8xDJ3zhkxb7qibQRFMi7MW6dPdAlW4yOEdG9/dBG72yWCBtl8qqP+VXy+uKQW/sq/DiNk1jd6dOVZ9/wog8kLLvJyVgJeQ==",
//         alipayPubKeyFile: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu7n9a4C4nzHTYgnX9LlR+EBNNu8PqNoi3lINsLWE/fSpG/jEoxxeC4M3tmak7o99CFDsUaUsxJ9rhopl2a//OjLQFHegGPEwzRxtlCCpzS8ewKbnGeHIAD947SICpFHWCOV0+SqVAhTtYp9VnTdiW66n/763zi7Ntc2beHnSieBG8RZN9pSMqL9rhpQLeZ/SXrDMx+UJTkknGLZR09Sp6Dp5UUe8bz8J8CHbqQL5lj9e8yuopQSdgYasO3Kbn/C4jq5ijVDeH1R6JmfldoBZvOjRRg/l2D9FGmrzGOFPTapRX4LRobLxhi1galssGY2L3EOho5kxuFIOBJ6eeIul3QIDAQAB"
//     }
//         var requestData=ctx.request.body;
//         console.log(requestData);
//         var uid=requestData.uid;
//         var out_trade_no=requestData.order_id+'_tb'+tools.getOrderId();
//         var subject="无人点餐";
//         var total_amount=requestData.total_price;
//         var return_url=requestData.return_url;

//         const data = {
//             subject: subject,
//             out_trade_no:out_trade_no,
//             total_amount:total_amount
//         }
//         const basicParams = {
//             "return_url":return_url,
//             //异步通知地址
//     		"notify_url": "http://localhost:3002/alipayNotify",
//         }
//         return service.createWebOrderURL(data, basicParams)
//         .then(result => {
//             assert(result.code == 0, result.message)
//             assert(result.message == 'success', result.message)       
//             ctx.body={result:result};
//             // ctx.redirect(result.data);        
//         })
//     })

//     Router.post('/alipayNotify', async ctx => {
//         // var data=ctx.request.body;
//         // console.log(ctx.request.body);   
//         const options = config.aliPayOptions
//         const service = new Alipay(options);
//         const params = ctx.request.body;
//         const result = await service.makeNotifyResponse(params);
//         if (result.code == 0) {
//             console.log('success');
//             ctx.body = 'success';
//         }
//     })

    app.use(views('views', { extension: 'ejs' }))  //这两个必须放在所有的注册路由的use之前！！！
        .use(bodyParser())

    app.use(Router.routes())
        .use(Router.allowedMethods())
        .use(cors())
        .use(static(__dirname + '/public'))



    app.listen(3002, () => {
        console.log('running in http://localhost:3002')
    })