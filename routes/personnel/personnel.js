var express = require('express');
var router = express.Router();
var db = require("../computer/db"); //引入数据库封装模块

/* GET home page. */
router.get('/', function (req, res, next) {

	//查询user表全部内容
	db.query("SELECT * FROM personnel", [], function (results, fields) {
		res.send(results);
	})

});

module.exports = router;