var express = require('express');
var router = express.Router();
const { find, insert } = require("./db.js");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.use((req, res, next) => {
//   // 全局添加
//   res.append("Access-Control-Allow-Origin", "*");
//   next();
//   });



  //查-注册
router.post('/sign/:_username', async function (req, res, next) {
//   let username = req.body
  let param = req.params._username
  // console.log(req.body)
  let data = await find('user', {
//   'username': username
    'username': param
  })
  // 
  // console.log(data)
  res.send(data)
  });



//查-登录
router.post('/login', async function (req, res, next) {
  let {
  username,
  password
  } = req.body;
  // let param = req.params._username
  // console.log(req.body)
  let data = await find('user', {
  'username': username,
  'pwd':password
  })
  
  // console.log(data)
  res.send(data)
  });


  //注册
  router.post('/register', async function (req, res, next) {
    let {
    username,
    password
    } = req.body;
    let data = await insert('user', [{
    'username': username,
    'pwd':password
    }])
    
    // console.log(data)
    res.send(data)
    });

0
module.exports = router;
