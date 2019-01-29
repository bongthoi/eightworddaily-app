//skys = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
//earths = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
var yearskyelement, yearearthelement, monthskyelement, monthearthelement; 
var dayskyelement, dayearthelement, hourskyelement, hourearthelement;

function msg3(){
	//把天干地支換為五行符號
	yearskyelement = checktienelement(vyearsky);
	yearearthelement = checkdielement(vyearearth);
	//alert(yearearthelement);	
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

	//計算五行符號的多少
	var Tienelements = countelement(yearskyelement, monthskyelement, dayskyelement, hourskyelement);
	//alert(Tienelements);
	var Dielements = countelement(yearearthelement, monthearthelement,dayearthelement,hourearthelement);
	//將天干五行加上地支五行
	totalelement = parseInt(Tienelements) + parseInt(Dielements);
	var strtotalelement = totalelement.toString();
	//alert(strtotalelement);
	var arrayelment = [];
	var arrayelement = calelements(strtotalelement);
	//alert(arrayelement[4]);
	var elementtype = arrayelement[4];
	var elementstring = elementtype.toString();
	//計算結果及作出建議
	// alert(elementadvice(elementstring));
	// alert(matchelement(dayskyelement, elementstring));
	document.getElementById("btnexplain").style.display = 'block';
	document.getElementById("secexplain").style.display = 'block';
	document.getElementById("advice").value = elementadvice(elementstring) + " ;你本命是: " + dayskyelement;

}

function checktienelement(tien){
   if(tien == "甲"|| tien == "乙"){
	   var element = "木";
   }else if(tien == "丙"|| tien == "丁"){
	   var element = "火";
   }else if(tien == "戊"|| tien == "己"){
	   var element = "土";
   }else if(tien == "庚"|| tien == "申"){
	   var element = "金";
   }else if(tien == "壬"|| tien == "癸"){
	   var element = "水";
   }
	return element;
}

function checkdielement(di){
	if(di == "寅"|| di == "卯"){
	   var element = "木";
   }else if(di == "巳"|| di == "午"){
	   var element = "火";
   }else if(di == "辰"|| di == "戌"|| di == "丑"|| di == "未"){
	   var element = "土";
   }else if(di == "申"|| di == "酉"){
	   var element = "金";
   }else if(di == "子"|| di == "亥"){
	   var element = "水";
   }
	return element;
}


function countelement(year, month, day, hour){
	var Earth = 0; 
	var Fire = 0; 
	var Metal = 0;
	var Water = 0;
	var Wood = 0;
	var elements = [year, month, day, hour];
	for(i=0;i<4;i++){	
		if(elements[i] == "土"){
			Earth = Earth +1;
		}else if(elements[i] == "火"){
			Fire = Fire +1;
		}else if(elements[i] == "金"){
			Metal = Metal +1;
		}else if(elements[i] == "水"){
			Water = Water +1;
		}else if(elements[i] == "木"){
			Wood = Wood +1;
		}
	}	
	return Earth.toString() + Fire.toString() + Metal.toString() + Water.toString() + Wood.toString();   
	//return a number with 5 position 01210, total should be 4.
}

function calelements(elementsnum){
	//傳入一串數字, 按土火金水木排
	var earthnum = elementsnum.substring(0,1);
	var firenum = elementsnum.substring(1,2);
	var metalnum = elementsnum.substring(2,3);
	var waternum = elementsnum.substring(3,4);
	var woodnum = elementsnum.substring(4,5);
	var sortable=[];
	// var elementsobj = {Earth: earthnum, Fire:firenum, Metal:metalnum, Water:waternum, Wood:woodnum};
	var elementsobj = {Earth: earthnum, Fire:firenum, Metal:metalnum, Water:waternum, Wood:woodnum};
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
	if(elementname == "Earth"){
		//var advice = "火有助力, 但木會有阻力";
		var advice = "你擁有最多的是土";
	}else if(elementname == "Fire"){
		 //var advice = "木有助力, 但水會有阻力";
		 var advice = "你擁有最多的是火";
	}else if(elementname == "Metal"){
		// var advice = "土有助力, 但火會有阻力";
		var advice = "你擁有最多的是金";
	}else if(elementname == "Water"){
		 //var advice = "金有助力, 但土會有阻力";
		 var advice = "你擁有最多的是土水";
	}else if(elementname == "Wood"){
		// var advice = "水有助力, 但金會有阻力";
		var advice = "你擁有最多的是木";
	}
	return advice;
}


function matchelement(pdayskyelement, pelementstring){
  var matchresult = pdayskyelement + "-" + pelementstring;
	return matchresult;
}

function explain(){
	window.location = "/cn/explanation"
}
