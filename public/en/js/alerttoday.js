
//skys = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
var Tien = ["Giáp","Ất","Bính","Đinh","Mậu","Kỷ","Canh","Tân","Nhâm","Qúy"];
//earths = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
var Di = ["Tý","Sửu","Dần","Mão","Thìn","Tỵ","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi"];
var dayelelements;

function showtodayelement(){
	vtoday = findtoday();
	//alert(vtoday);
	var vtiendi = (checkdayearthsky(vtoday.substring(0,4), vtoday.substring(4)));
	//alert(vtoday.substring(0,4));
	//alert(vtoday.substring(4));
	//alert(vtiendi);
	var n = vtiendi.indexOf("-");
	//alert(n);
	var vtienelement = checktienelement(vtiendi.substring(0,n));
	var vdielement = checkdielement(vtiendi.substring(n+1));
	dayelements = vtienelement + "-" + vdielement;
	document.getElementById("showdayelements").value = vtiendi + " => " + dayelements;
	//alert(dayelements);
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

function checkdayearthsky(birthyear, birthmonthday){
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
	if(dayskynum == 0){
		dayskyword = Tien[9];
	}else{
		dayskyword = Tien[parseInt(dayskynum) - 1];
	}	
	if(dayearthnum == 0){
		dayearthword = Di[11];
	}else{
		dayearthword = Di[parseInt(dayearthnum) - 1];
	}
	return dayskyword + "-" + dayearthword;
}

function checktienelement(tien){
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
	return element;
}

function checkdielement(di){
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
	return element;
}


 


