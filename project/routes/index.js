var express = require('express');
var router = express.Router();
const { find, insert } = require("./db.js");
let data = require("./json数据/src/home.json");
console.log(data);
// console.log(find)
data.datas.forEach((item, index) => {
  (async () => {
    // let data = find
    await insert("home", [item]);
    // console.log(index);
  })()
})
// find("nanshig").then((res) => {
//   console.log(res);
// })
/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
