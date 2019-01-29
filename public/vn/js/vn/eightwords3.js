//skys = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
//Tien = ["Giap","At","Binh","Dinh","Mau","Ky","Canh","Tan","Nham","Quy"];
//earths = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
//Di = ["Ty1","Suu","Dan","Mao","Thin","Ty6","Ngo","Mui","Than","Dau","Tuat","Hoi"];
var yearskyelement, yearearthelement, monthskyelement, monthearthelement; 
var dayskyelement, dayearthelement, hourskyelement, hourearthelement;

function msg3(){
	yearskyelement = checktienelement(vyearsky);
	yearearthelement = checkdielement(vyearearth);
	monthskyelement = checktienelement(vmonthsky);
	monthearthelement = checkdielement(vmonthearth);
	dayskyelement = checktienelement(vdaysky);
	dayearthelement = checkdielement(vdayearth);
	hourskyelement = checktienelement(vhoursky);
	hourearthelement = checkdielement(vhourearth);
	document.getElementById("yearelement").value = yearskyelement + "-" + yearearthelement;
	document.getElementById("monthelement").value = monthskyelement + "-" + monthearthelement;
	document.getElementById("dayelement").value = dayskyelement + "-" + dayearthelement;
	document.getElementById("hourelement").value = hourskyelement + "-" + hourearthelement;
	var Tienelements = countelement(yearskyelement, monthskyelement, dayskyelement, hourskyelement);
	//alert(Tienelements);
	var Dielements = countelement(yearearthelement, monthearthelement,dayearthelement,hourearthelement);
	totalelement = parseInt(Tienelements) + parseInt(Dielements);
	var strtotalelement = totalelement.toString();
	//alert(strtotalelement);
	var arrayelment = [];
	var arrayelement = calelements(strtotalelement);
	//alert(arrayelement[4]);
	var elementtype = arrayelement[4];
	var elementstring = elementtype.toString();
	//alert(elementadvice(elementstring));
	//alert(matchelement(dayskyelement, elementstring));
	document.getElementById("btnexplain").style.display = 'block';
	document.getElementById("secexplain").style.display = 'block';
	document.getElementById("advice").value = elementadvice(elementstring) + " ;Yếu tố trong cuộc sống của bạn là: " + dayskyelement;
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

function countelement(year, month, day, hour){
	var Dat = 0; 
	var Lua = 0; 
	var Kim = 0;
	var Nuoc = 0;
	var Go = 0;
	var elements = [year, month, day, hour];
	for(i=0;i<4;i++){	
		if(elements[i] == "Đất"){
			Dat = Dat +1;
		}else if(elements[i] == "Lửa"){
			Lua = Lua +1;
		}else if(elements[i] == "Kim"){
			Kim = Kim +1;
		}else if(elements[i] == "Nước"){
			Nuoc = Nuoc +1;
		}else if(elements[i] == "Gỗ"){
			Go = Go +1;
		}
	}	
	return Dat.toString() + Lua.toString() + Kim.toString() + Nuoc.toString() + Go.toString();
}

function calelements(elementsnum){
	var earthnum = elementsnum.substring(0,1);
	var firenum = elementsnum.substring(1,2);
	var metalnum = elementsnum.substring(2,3);
	var waternum = elementsnum.substring(3,4);
	var woodnum = elementsnum.substring(4,5);
	var sortable=[];
	var elementsobj = {Dat: earthnum, Lua:firenum, Kim:metalnum, Nuoc:waternum, Go:woodnum};
	var sortable=[];
	for(var key in elementsobj)
			if(elementsobj.hasOwnProperty(key))
				sortable.push([key, elementsobj[key]]);
	sortable.sort(function(a, b){
		return a[1]-b[1]; // compare numbers
	});

	return sortable;
}

function elementadvice(pelement){
	var vindexof = pelement.indexOf(",");
	var elementname = pelement.substring(0,vindexof);
	if(elementname == "Dat"){
		 var advice = "Yếu tố nhất bạn có là Đất";
	}else if(elementname == "Lua"){
		 var advice = "Yếu tố nhất bạn có là Lửa";
	}else if(elementname == "Kim"){
		 var advice = "Yếu tố nhất bạn có là Kim";
	}else if(elementname == "Nuoc"){
		 var advice = "Yếu tố nhất bạn có là Nước";
	}else if(elementname == "Go"){
		 var advice = "Yếu tố nhất bạn có là Gỗ";
	}
	return advice;
}

function matchelement(pdayskyelement, pelementstring){
  var matchresult = pdayskyelement + "-" + pelementstring;
	return matchresult;
}

function explain(){
	window.location = "/vn/explanation";
}

