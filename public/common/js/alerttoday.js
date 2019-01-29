
var Tiencn = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
var Tienvn = ["Giáp","Ất","Bính","Đinh","Mậu","Kỷ","Canh","Tân","Nhâm","Qúy"];
var Tienen = ["meth","eth","prop","but","pent","hex","hept","oct","non","dec"];
var Dicn = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
var Divn = ["Tý","Sửu","Dần","Mão","Thìn","Tỵ","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi"];
var Dien = ["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Ram","Monkey","Chick","Canine","Hog"];
var dayelements;

function showtodayelement(lang){
	vtoday = findtoday();
	var vtiendi = (checkdayearthsky(vtoday.substring(0,4), vtoday.substring(4),lang));
	//alert(vtiendi);
	var n = vtiendi.indexOf("-");
	var vtienelement = checktienelement(vtiendi.substring(0,n),lang);
	var vdielement = checkdielement(vtiendi.substring(n+1),lang);
	dayelements = vtienelement + "-" + vdielement;
	document.getElementById("showdayelements").value = vtiendi + " => " + dayelements;
	document.getElementById("advice").style.display = "block";
}

function findtoday(){  //找出今天月日
	var currentTime = new Date();
	
	var yy = currentTime.getFullYear();
	var dd = currentTime.getDate();
	var mm = currentTime.getMonth()+1;
	if(dd<10) {
		dd = '0'+dd;
	} 
	if(mm<10) {
		mm = '0'+mm;
	} 
	var vcurrentTime = yy + mm.toString() + dd.toString();
	return vcurrentTime;
}

function checkdayearthsky(birthyear, birthmonthday, lang){
	var normalyear = [0,31,59,90,120,151,181,212,243,273,304,334,365]; //平年
    var specialyear = [0,31,60,91,121,152,182,213,244,274,305,335,366];   //閏年
	var dayskyword;
	var dayearthword;
	//計算當年年初的甲子日的日期
	if(parseInt(birthyear)< 2000){
		var yearbase = ((parseInt(birthyear) -1900 + 3) * 5 + 55 + ((parseInt(birthyear.substring(2)) -1)/4)) % 60;
	}else{
		var yearbase = ((parseInt(birthyear) -2000 + 7) * 5 + 15 + ((parseInt(birthyear.substring(2)) + 19)/4)) % 60;
	}	
	if(parseInt(birthyear) % 4 == 0){
		var monthdaynum = specialyear[parseInt(birthmonthday.substring(0,2))-1] + parseInt(birthmonthday.substring(2));
	}else{
		var monthdaynum = normalyear[parseInt(birthmonthday.substring(0,2))-1] + parseInt(birthmonthday.substring(2));
	}
	var dayskyearthnum = (parseInt(yearbase + monthdaynum)) % 60;
	var dayskynum = dayskyearthnum % 10;
	var dayearthnum = dayskyearthnum % 12;
	if(lang == "vn"){
		if(dayskynum == 0){
			dayskyword = Tienvn[9];
		}else{
			dayskyword = Tienvn[parseInt(dayskynum) - 1];
		}	
		if(dayearthnum == 0){
			dayearthword = Divn[11];
		}else{
			dayearthword = Divn[parseInt(dayearthnum) - 1];
		}
	}
	if(lang == "en"){
		if(dayskynum == 0){
			dayskyword = Tienen[9];
		}else{
			dayskyword = Tienen[parseInt(dayskynum) - 1];
		}	
		if(dayearthnum == 0){
			dayearthword = Dien[11];
		}else{
			dayearthword = Dien[parseInt(dayearthnum) - 1];
		}
	}
	if(lang == "cn"){
		if(dayskynum == 0){
			dayskyword = Tiencn[9];
		}else{
			dayskyword = Tiencn[parseInt(dayskynum) - 1];
		}	
		if(dayearthnum == 0){
			dayearthword = Dicn[11];
		}else{
			dayearthword = Dicn[parseInt(dayearthnum) - 1];
		}
	}
	return dayskyword + "-" + dayearthword;
}

function checktienelement(tien, lang){
   if(lang == "vn"){
		if(tien == "Giáp"|| tien == "Ất"){
			var element = "Gỗ";
		}else if(tien == "Bính"|| tien == "Đinh"){
			var element = "Lửa";
		}else if(tien == "Mậu"|| tien == "Kỷ"){
			var element = "Đất";
		}else if(tien == "Canh"|| tien == "Tân"){
			var element = "Kim";
		}else if(tien == "Nhâm"|| tien == "Qúy"){
			var element = "Nước";
		}
   }
   if(lang == "en"){
		if(tien == "meth"|| tien == "eth"){
			var element = "Wood";
		}else if(tien == "prop"|| tien == "but"){
			var element = "Fire";
		}else if(tien == "pent"|| tien == "hex"){
			var element = "Earth";
		}else if(tien == "hept"|| tien == "oct"){
			var element = "Metal";
		}else if(tien == "non"|| tien == "dec"){
			var element = "Water";
		}
   }
   if(lang == "cn"){
		if(tien == "甲"|| tien == "乙"){
			var element = "木";
		}else if(tien == "丙"|| tien == "丁"){
			var element = "火";
		}else if(tien == "戊"|| tien == "己"){
			var element = "土";
		}else if(tien == "庚"|| tien == "辛"){
			var element = "金";
		}else if(tien == "壬"|| tien == "癸"){
			var element = "水";
		}
   }
   return element;
}

function checkdielement(di,lang){
	if(lang == "vn"){
		if(di == "Dần"|| di == "Mão"){
			var element = "Gỗ";
		}else if(di == "Tỵ"|| di == "Ngọ"){
			var element = "Lửa";
		}else if(di == "Sửu"|| di == "Thìn"|| di == "Mùi"|| di == "Tuất"){
			var element = "Đất";
		}else if(di == "Thân"|| di == "Dậu"){
			var element = "Kim";
		}else if(di == "Tý"|| di == "Hợi"){
			var element = "Nước";
		}
	}
	if(lang == "en"){
		if(di == "Tiger"|| di == "Rabbit"){
			var element = "Wood";
		}else if(di == "Snake"|| di == "Horse"){
			var element = "Fire";
		}else if(di == "Ox"|| di == "Dragon"|| di == "Ram"|| di == "Canine"){
			var element = "Earth";
		}else if(di == "Monkey"|| di == "Chick"){
			var element = "Metal";
		}else if(di == "Rat"|| di == "Hog"){
			var element = "Water";
		}
	}
	if(lang == "cn"){
		if(di == "寅"|| di == "卯"){
			var element = "木";
		}else if(di == "巳"|| di == "午"){
			var element = "火";
		}else if(di == "丑"|| di == "辰"|| di == "未"|| di == "戌"){
			var element = "土";
		}else if(di == "申"|| di == "酉"){
			var element = "金";
		}else if(di == "子"|| di == "亥"){
			var element = "水";
		}
	}
	return element;
}


