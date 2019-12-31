var express = require('express');
var mysql = require('mysql');
var localhost = require('./computer/link')
var router = express.Router();
/* GET users listing. */
router.post('/', function (req, res, next) {
	const username = req.body.username //前端传递过来的值
	const password = req.body.password
	const sql = ` SELECT * FROM list where username=${username} and password=${password}`
	console.log(sql)
	var connection = mysql.createConnection(localhost);
	connection.connect();
	connection.query(sql, function (error, data, fields) {
		// if (error) throw error;
		if (error) {
			return res.json({
				code: 1,
				msg: '登录失败',
				status: 0
			})
		}
		if (data.length != 0) {
			res.json({
				code: 0,
				msg: '登录成功',
				status: 200
			})
		} else {
			res.json({
				code: 0,
				msg: '登录失败',
				status: 0
			})
		}
	});
	connection.end();
});

module.exports = router;