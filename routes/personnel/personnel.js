var express = require('express');
var router = express.Router();
var db = require("../computer/db"); //引入数据库封装模块

/* GET home page. */
router.get('/index', function (req, res, next) { //'/index二级标题'
	const name = req.body.name //前端传递过来的值
	console.log(req.body, 'req.body')
	if (!name) {
		//查看personnel表中的内容
		db.query("SELECT * FROM personnel", [], function (results, fields) {
			var date = new Date().getTime();
			var list = {
				code: 1,
				data: results,
				msg: 'success',
				time: date
			}
			res.send(list);
		})
	} else {
		db.query("SELECT * FROM personnel where name=" + name, [], function (results, fields) {
			console.log(name, 'name')
			console.log(results, 'results');
			res.send(results);
		})
	}

});

module.exports = router;