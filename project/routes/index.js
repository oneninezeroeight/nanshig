var express = require('express');
var router = express.Router();
const { find} = require("./db.js");

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

module.exports = router;
