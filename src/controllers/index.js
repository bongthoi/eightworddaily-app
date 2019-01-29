import express from 'express';
import MailService from '../services/mailService';
import MailModel from '../models/mailModel';
import MailConfig from '../../configs/mail_config.json'
import ejs from 'ejs';
import path from 'path';

let mailService = new MailService();
let router = express.Router();

/**public */
router.get("/", async (req, res) => {

	res.redirect("/vn");
});

/**vn */

router.get("/vn", async (req, res) => {

	res.render("vn/index", { title: "Trang chủ" });
});

router.post("/vn/sendmail",  async (req, res) => {
	let mail_content=JSON.stringify(req.body);
	await ejs.renderFile(path.dirname(require.main.filename) + "/views/email_templates/vn_email_template.ejs", { title: 'Stranger',mail_content:JSON.parse(mail_content) },  function (err, data) {
		if (err) {
			console.log(err);
		} else {
			console.log("aaaaa="+JSON.parse(mail_content));
			let email = new MailModel(MailConfig.mail_sender,req.body.email,"Bát Tự",data);
			console.log(JSON.stringify(email));
			let result = mailService.sendMail(email);
		}});
	req.flash('success_message', "Cảm ơn bạn đăng ký...");
	res.redirect("/vn");
});

router.get("/vn/explanation", async (req, res) => {
	res.render("vn/explanation", { title: "Giải trình" });
});

/**en */
router.get("/en", async (req, res) => {

	res.render("en/index", { title: "Home" });
});

router.post("/en/sendmail",  async (req, res) => {
	let mail_content=JSON.stringify(req.body);
	await ejs.renderFile(path.dirname(require.main.filename) + "/views/email_templates/en_email_template.ejs", { title: 'Stranger',mail_content:JSON.parse(mail_content) },  function (err, data) {
		if (err) {
			console.log(err);
		} else {
			console.log("aaaaa="+JSON.stringify(mail_content));
			let email = new MailModel(MailConfig.mail_sender,req.body.email,"Eight Words",data);
			console.log(JSON.stringify(email));
			let result = mailService.sendMail(email);
		}});
	req.flash('success_message', "Thanks for register...");
	res.redirect("/en");
});

router.get("/en/explanation", async (req, res) => {
	res.render("en/explanation", { title: "explanation" });
});


/**cn */
router.get("/cn", async (req, res) => {

	res.render("cn/index", { title: "家" });
});

router.post("/cn/sendmail",  async (req, res) => {
	let mail_content=JSON.stringify(req.body);
	await ejs.renderFile(path.dirname(require.main.filename) + "/views/email_templates/cn_email_template.ejs", { title: 'Stranger',mail_content:JSON.parse(mail_content) },  function (err, data) {
		if (err) {
			console.log(err);
		} else {
			console.log("aaaaa="+JSON.stringify(mail_content));
			let email = new MailModel(MailConfig.mail_sender,req.body.email,"八字",data);
			console.log(JSON.stringify(email));
			let result = mailService.sendMail(email);
		}});
	req.flash('success_message', "謝謝你的註冊......");
	res.redirect("/cn");
});

router.get("/cn/explanation", async (req, res) => {
	res.render("cn/explanation", { title: "八字淺析" });
});
/**export */
module.exports = router;


