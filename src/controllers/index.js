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

	res.render("common/alerttoday_vi", { title: "Trang chủ" });
});



/**en */
router.get("/en", async (req, res) => {

	res.render("common/alerttoday_en", { title: "Home" });
});






/**cn */
router.get("/cn", async (req, res) => {

	res.render("common/alerttoday_cn", { title: "家" });
});




/**export */
module.exports = router;


