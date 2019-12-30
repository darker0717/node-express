var express = require('express');
var router = express.Router();
var db = require("../computer/db"); //引入数据库封装模块

//条件查询user表
router.get('/', function (req, res, next) {
	const name = req.query.name
	const sql = 'SELECT * FROM user where name=?'

	db.query(sql, name, function (results, fields) {
		console.log(results);
		res.header("Access-Control-Allow-Origin", "*");
		res.send(results);
	})

});

module.exports = router;