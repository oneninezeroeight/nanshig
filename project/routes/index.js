var express = require('express');
var router = express.Router();
const { find,insert } = require("./db.js");
var ObjectID = require('mongodb').ObjectID;

router.use((req, res, next) => {
  // 全局添加
  res.append("Access-Control-Allow-Origin", "*");
  next();
});

/* GET home page. */
router.get('/list', function (req, res, next) {
  find("home").then((ress) => {
    res.send(ress);
  })
});

//list1
router.get('/tablist1', function (req, res, next) {
  find("tablist1").then((ress) => {
    res.send(ress);
  })
});

router.get('/list1', function (req, res, next) {
  find("list1").then((ress) => {
    res.send(ress);
  })
});

//list2
router.get('/tablist2', function (req, res, next) {
  find("tablist2").then((ress) => {
    res.send(ress);
  })
});

router.get('/list2', function (req, res, next) {
  find("list2").then((ress) => {
    res.send(ress);
  })
});

//list3
router.get('/tablist3', function (req, res, next) {
  find("tablist3").then((ress) => {
    res.send(ress);
  })
});

router.get('/list3', function (req, res, next) {
  find("list3").then((ress) => {
    res.send(ress);
  })
});

//list4
router.get('/tablist4', function (req, res, next) {
  find("tablist4").then((ress) => {
    res.send(ress);
  })
});

router.get('/list4', function (req, res, next) {
  find("list4").then((ress) => {
    res.send(ress);
  })
});


//list5
router.get('/tablist5', function (req, res, next) {
  find("tablist5").then((ress) => {
    res.send(ress);
  })
});

router.get('/list5', function (req, res, next) {
  find("list5").then((ress) => {
    res.send(ress);
  })
});

router.get('/cart', function (req, res, next) {
  find("cart").then((ress) => {
    res.send(ress);
  })
});



//通过id查询
router.post('/goodslist', async function (req, res, next) {
  let {
    id1,
    id
  } = req.body;
  // console.log(id1);

  let data = await find("home", {
    _id: ObjectID(id1)
  });
  // res.send(data[0].goods.item)
  data[0].goods.item.forEach((item) => {
    if (item.goods_id == id) {
      res.send(item);
    }
  })
  // find("home").then((ress) => {
  //   res.send(ress);
  // })
});

router.post('/goodslist4', async function (req, res, next) {
  let {
    id1,
    id
  } = req.body;
  // console.log(id1);

  let data = await find("classfiy", {
    _id: ObjectID(id1)
  });
  // res.send(data[0].goods.item)
  data[0].forEach((item) => {
    if (item.goods_id == id) {
      res.send(item);
    }
  })
  // find("home").then((ress) => {
  //   res.send(ress);
  // })
});




// 加入购物车
router.post('/addcart', async function (req, res, next) {
  let {
    id1,
    id
  } = req.body;
  // console.log(id1);

  let data = await find("home", {
    _id: ObjectID(id1)
  });
  // res.send(data[0].goods.item)
  data[0].goods.item.forEach((item) => {
    if (item.goods_id == id) {
      res.send(item);
      console.log(item);
      let dat = insert('cart', [{
        'goods_id': item.goods_id,
        'goods_name':item.goods_name,
        'goods_price':item.goods_price,
        'goods_image_url':item.goods_image,
        'goods_promotion_price':item.goods_promotion_price,
        'goods_salenum':1
        }]);
        res.send(dat);
    }
  })
  // find("home").then((ress) => {
  //   res.send(ress);
  // })
});


module.exports = router;
