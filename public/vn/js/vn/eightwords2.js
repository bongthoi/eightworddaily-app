
//skys = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
var Tien = ["Giáp","Ất","Bính","Đinh","Mậu","Kỷ","Canh","Tân","Nhâm","Qúy"];
//earths = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
var Di = ["Tý","Sửu","Dần","Mão","Thìn","Tỵ","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi"];
var vyearsky;
var vyearearth;
var vmonthsky;
var vmonthearth;
var vdaysky;
var vdayearth;
var vhoursky;
var vhourearth;

function msg2(){
	var vhour = document.getElementById("bornhour").value;
	//lert(checkyearsky(vlunaryear));
	vyearsky = Tien[checkyearsky(vlunaryear)-1];
	//alert(checkyearearth(vlunaryear));
	if((checkyearearth(vlunaryear))==0){
		vyearearth = Di[12-1];
	}else{
		vyearearth = Di[checkyearearth(vlunaryear)-1];
	};
	document.getElementById("yearwords").value = vyearsky + "-" + vyearearth;
	vmonthsky = Tien[checkmonthsky(vlunarmonth,checkyearsky(vlunaryear))-1];
	if(checkmonthearth(vlunarmonth)==0){
		vmonthearth = Di[11];
	}else{
		vmonthearth = Di[checkmonthearth(vlunarmonth)-1];
	}
	document.getElementById("monthwords").value = vmonthsky + "-" + vmonthearth;
	var dayskyearth = checkdayearthsky(vlunaryear, vmonthday);
	var vdayskyearth = dayskyearth.substring(1);
	var vindexof = vdayskyearth.indexOf("-");
	vdaysky = vdayskyearth.substring(0,vindexof);
	vdayearth = vdayskyearth.substring(vindexof + 1);
	document.getElementById("daywords").value = dayskyearth.substring(1);
	var vdayskynum = dayskyearth.substring(0,1);
	vhoursky = checkhoursky(vdayskynum, vhour);
	vhourearth = checkhourearth(vhour);
	document.getElementById("hourwords").value = vhoursky + "-" + vhourearth;
	document.getElementById("secshowelements").style.display = 'block';
	
}

function checkyearsky(year){
	var skynum;
	var lastnum = parseInt(year.substring(3));
	if(lastnum < 4){
		skynum = (lastnum + 10) -3;
	}else{
	    skynum = lastnum -3;
	}
   return skynum;
}

function checkyearearth(year){
	 var earthnum;
	 var num;
     if(parseInt(year) < 2000){
		num = ((parseInt(year) % 60) -3);	
		if(num <=0){
			earthnum = (num + 60) % 12;
		}else{
			earthnum = num % 12;
		}
	 }else{
		earthnum = (parseInt(year.substring(2)) + 5) % 12;		
	 }
	return earthnum;
}

function checkmonthsky(month,yearsky){
	var monthskynum;
	monthskynum = (parseInt(yearsky) * 2 + parseInt(month))%10;
	return monthskynum;
}

function checkmonthearth(month){
	var monthearthnum = (parseInt(month) + 2)%12;
	return monthearthnum;
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
	return dayskynum + dayskyword + "-" + dayearthword;
}


function checkhoursky(dayskynum, hour){
	var hourtienstart = 0;
	var hourskywordnum;
	
	if(dayskynum == 1 || dayskynum == 6){
		hourtienstart = 1;
	}else if(dayskynum == 2 || dayskynum == 7){
		hourtienstart = 3;
	}else if(dayskynum == 3 || dayskynum == 8){
		hourtienstart = 5;
	}else if(dayskynum == 4 || dayskynum == 9){
		hourtienstart = 7;
	}else if(dayskynum == 5 || dayskynum == 0){
		hourtienstart = 9;
	}
	hourskywordnum = hourtienstart + hour;
	if(hourskywordnum > 9){
	   hourskywordnum = hourskywordnum % 10;
	   return Tien[hourskywordnum -1];
	}else{
	   return Tien[hourskywordnum -1];
	}
	
}

function checkhourearth(hour){
	var hourearhtword;
	
	var hourearthnum = parseInt(hour) -1;
	hourearthword = Di[hourearthnum];
	 
	return hourearthword;
}