//
//do not use chinese in first 2 lines
var elementcn = ["金","火","水","土","木"];
var elementen = ["Metal","Fire","Water","Earth","Wood"];
var elementvn = ["Kim","Lửa","Nước","Đất","Gỗ"];

function alertelment(lang){
	//alert(dayelements);
    var selfelement = document.getElementById("selfelement").value; //from the html
	var vindex = dayelements.indexOf("-");
	var vtienelement = dayelements.substring(0,vindex);
	var vdielement = dayelements.substring(vindex+1);
	var yourelement = checkindex(selfelement);
	var tienelement = checkindex(vtienelement);
	var dielement = checkindex(vdielement);
	//alert(yourelement);
	//alert(tienelement);
	//alert(dielement);
    var vsolve1 = checksolve(yourelement, tienelement);
	var vsolve2 = checksolve(yourelement, dielement);
	//alert(vsolve1 + vsolve2);
    var advice1 = advicemain(vsolve1,lang);
	var advice2 = advicemain(vsolve2,lang);
	//alert(advice2);
	document.getElementById("showadvice1").innerHTML = advice1;
	document.getElementById("showadvice2").innerHTML = advice2;
}

function checkindex(element){
	//convert the element name into index.
  for(i=0; i<5; i++){
    if((element == elementcn[i]) || (element == elementen[i]) || (element == elementvn[i])){
        var vindex = i;
    }
  }
  return vindex;
}

function checksolve(selfelement, dayelement){
	//input the index that convert by checkindex, not the name of the element.
	//check what can help
  var advice="";
  if(selfelement == dayelement){ //太多要涉
     if((selfelement + 2) > 4){
       advice = (selfelement + 2) % 5;
     }else{
       advice = selfelement + 2;
     }
  }else if((dayelement == selfelement + 1)){  //相沖就中和
     if((selfelement + 3) > 4){
       advice = (selfelement + 3) % 5;
     }else{
       advice = selfelement + 3;
     }
  }else if((selfelement == 4) && (dayelement == 0)){
    advice = 2;
  }else{
    advice = selfelement;
  }
  return advice;
}

function translate(num, lang){
  var vword = "";
  if(lang == "cn"){
    vword = elementcn[num];
  }else if(lang == "en"){
    vword = elementen[num];
  }else if(lang == "vn"){
    vword = elementvn[num];
  }
  return vword;
}
