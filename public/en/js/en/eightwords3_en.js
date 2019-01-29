//skys = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
//Tien = ["meth","eth","prop","but","pent","hex","hept","oct","non","dec"];
//earths = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
//Di = ["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Ram","Monkey","Chick","Canine","Hog"];
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
	//alert(elementadvice(elementstring));
	// alert(matchelement(dayskyelement, elementstring));
	document.getElementById("btnexplain").style.display = 'block';
	document.getElementById("secexplain").style.display = 'block';
	document.getElementById("advice").value = elementadvice(elementstring) + " ;The element in your life is: " + dayskyelement;

}

function checktienelement(tien){
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
	return element;
}

function checkdielement(di){
	if(di == "Tiger"|| di == "Rabbit"){
	   var element = "Wood";
   }else if(di == "Snake"|| di == "Horse"){
	   var element = "Fire";
   }else if(di == "Dragon"|| di == "Canine"|| di == "Ox"|| di == "Ram"){
	   var element = "Earth";
   }else if(di == "Monkey"|| di == "Chick"){
	   var element = "Metal";
   }else if(di == "Rat"|| di == "Hog"){
	   var element = "Water";
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
		if(elements[i] == "Earth"){
			Earth = Earth + 1;
		}else if(elements[i] == "Fire"){
			Fire = Fire + 1;
		}else if(elements[i] == "Metal"){
			Metal = Metal + 1;
		}else if(elements[i] == "Water"){
			Water = Water + 1;
		}else if(elements[i] == "Wood"){
			Wood = Wood + 1;
		}
	}	
	return Earth.toString() + Fire.toString() + Metal.toString() + Water.toString() + Wood.toString();   
	//return a number with 5 position 01210, total should be 4.
}

function calelements(elementsnum){
	var earthnum = elementsnum.substring(0,1);
	var firenum = elementsnum.substring(1,2);
	var metalnum = elementsnum.substring(2,3);
	var waternum = elementsnum.substring(3,4);
	var woodnum = elementsnum.substring(4,5);
	var sortable=[];
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
		 var advice = "The most element you have is Earth";
	}else if(elementname == "Fire"){
		 var advice = "The most element you have is Fire";
	}else if(elementname == "Metal"){
		 var advice = "The most element you have is Metal";
	}else if(elementname == "Water"){
		 var advice = "The most element you have is Water";
	}else if(elementname == "Wood"){
		 var advice = "The most element you have is Wood";
	}
	return advice;
}

function matchelement(pdayskyelement, pelementstring){
  var matchresult = pdayskyelement + "-" + pelementstring;
	return matchresult;
}

function explain(){
	window.location = "/en/explanation"
}
