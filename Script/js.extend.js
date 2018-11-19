Date.prototype.Format = function(format){
	if(format){
		format = "yyyy-MM-dd HH:mm:ss";
	}
	var y = this.getFullYear();
	var m = this.getMonth()+1;
	var d = this.getDate();
	var H = this.getHours();
	var M = this.getMinutes();
	var S = this.getSeconds();
	y = y + "";
	m = m>9?m+"":"0"+m;
	d = d>9?d+"":"0"+d;
	H = H>9?H+"":"0"+H;
	M = M>9?M+"":"0"+M;
	S = S>9?S+"":"0"+S;
	return format.replace(/y+/,y).replace(/M+/,m).replace(/d+/,d).replace(/H+/,H).replace(/m+/,M).replace(/S+/,S);
};

String.prototype.Trim= function(){
	var reg = /^(\ +) | (\ +$)/g;
	return this.replace(reg,"");
};

if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

/*
 * console.log("请在邮件中注明%c来自:console", "color:red;font-weight:bold;font-size:50px");在%c以后的文字为红色加粗
 * 
 * 
 * 
 */