//send the advice in different language
//pass the advice by array
var metaldress = ["穿金色或白色衣服","dress in white or golden color", "mặc màu trắng hoặc vàng"];
var metaldecorate = ["戴金屬小飾物","decorate with small metal stuff", "trang trí với những thứ kim loại nhỏ"];
var metaleat = ["吃辛味","Eat spicy ", "Ăn cay"];
var metalwalk = ["往西走","go west", "đi về phía tây"];
var firedress = ["穿紅色系列衣服","dress in red color", "mặc màu đỏ"];
var firedecorate = ["戴金屬小飾物","decorate with triangular shape stuff", "trang trí với công cụ hình tam giác"];
var fireeat = ["吃苦味","Eat bitter", "Ăn đắng"];
var firewalk = ["往南走","go south","đi về phía nam"];
var waterdress = ["穿藍色或黑色衣服","dress in blue or black color", "mặc màu xanh hoặc đen"];
var waterdecorate = ["戴波浪形小飾物","decorate with curve shape stuff", "trang trí với công cụ hình dạng đường cong"];
var watereat = ["吃鹹味","Eat salty ", "Ăn mặn"];
var waterwalk = ["往北走或到水邊走走","go north or water side walk", "đi về phía bắc hoặc mặt nước"];
var earthdress = ["穿黃色衣服","dress in yellow color", "váy màu vàng"];
var earthdecorate = ["戴圓型或玉器小飾物","decorate with circle, stone made stuff or jade","trang trí với vòng tròn, đá làm công cụ hoặc ngọc"];
var eartheat = ["吃甜味","Eat sweet", "Ăn ngọt"];
var earthwalk = ["留在中央","stay in the center", "ở lại trung tâm"];
var wooddress = ["穿綠色系列衣服","dress in green color", "mặc màu xanh"];
var wooddecorate = ["戴木製小飾物","decorate with wooden stuff", "trang trí bằng đồ gỗ"];
var woodeat = ["吃酸味","Eat sour", "Ăn chua"];
var woodwalk = ["往東走或到樹林走走","go east or forest walk", "đi về phía đông hoặc đi bộ trong rừng"];


function advicemain(num, lang){
  var vadvice = "";
  //var num = parseInt(num);
  if(lang == "cn"){
    if(num == 0){
      vadvice = metaldress[0] + "\n" + metaldecorate[0] + "\n" + metaleat[0] + "\n" + metalwalk[0];
    }else if(num == 1){
      vadvice = firedress[0] + "\n" + firedecorate[0] + "\n" + fireeat[0] + "\n" + firewalk[0];
    }else if(num == 2){
      vadvice = waterdress[0] + "\n" + waterdecorate[0] + "\n" + watereat[0] + "\n" + waterwalk[0];
    }else if(num == 3){
      vadvice = earthdress[0] + "\n" + earthdecorate[0] + "\n" + eartheat[0] + "\n" + earthwalk[0];
    }else if(num == 4){
      vadvice = wooddress[0] + "\n" + wooddecorate[0] + "\n" + woodeat[0] + "\n" + woodwalk[0];
    }
  }else if(lang == "en"){
	if(num == 0){
      vadvice = metaldress[1] + "\n" + metaldecorate[1] + "\n" + metaleat[1] + "\n" + metalwalk[1];
    }else if(num == 1){
      vadvice = firedress[1] + "\n" + firedecorate[1] + "\n" + fireeat[1] + "\n" + firewalk[1];
    }else if(num == 2){
      vadvice = waterdress[1] + "\n" + waterdecorate[1] + "\n" + watereat[1] + "\n" + waterwalk[1];
    }else if(num == 3){
      vadvice = earthdress[1] + "\n" + earthdecorate[1] + "\n" + eartheat[1] + "\n" + earthwalk[1];
    }else if(num == 4){
      vadvice = wooddress[1] + "\n" + wooddecorate[1] + "\n" + woodeat[1] + "\n" + woodwalk[1];
    }
  }else if(lang == "vn"){
    if(num == 0){
      vadvice = metaldress[2] + "\n" + metaldecorate[2] + "\n" + metaleat[2] + "\n" + metalwalk[2];
    }else if(num == 1){
      vadvice = firedress[2] + "\n" + firedecorate[2] + "\n" + fireeat[2] + "\n" + firewalk[2];
    }else if(num == 2){
      vadvice = waterdress[2] + "\n" + waterdecorate[2] + "\n" + watereat[2] + "\n" + waterwalk[2];
    }else if(num == 3){
      vadvice = earthdress[2] + "\n" + earthdecorate[2] + "\n" + eartheat[2] + "\n" + earthwalk[2];
    }else if(num == 4){
      vadvice = wooddress[2] + "\n" + wooddecorate[2] + "\n" + woodeat[2] + "\n" + woodwalk[2];
    }
  }
  return vadvice;
  //return firedress[1] + firedecorate[1] + fireeat[1] + firewalk[1];
}

