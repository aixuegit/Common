/**
 * 将Date对象转化为一定的格式
 * @param {String} format 日期格式 default:yyyy-MM-dd HH:mm:SS
 * @returns {String} 返回一定格式的时间字符串
 */
Date.prototype.Format = function(format){
	var y = this.getFullYear();
	var m = this.getMonth()+1;
	var d = this.getDate();
	var H = this.getHours();
	var M = this.getMinutes();
	var S = this.getSeconds();
	var yS = y + "";
	var mS = m>9?m+"":"0"+m;
	var dS = d>9?d+"":"0"+d;
	var HS = H>9?H+"":"0"+H;
	var MS = M>9?M+"":"0"+M;
	var SS = S>9?S+"":"0"+S;
	if(!format){
		format = "yyyy-MM-dd HH:mm:SS";
	}
	var formared = format.replace(/y+/,yS).replace(/M+/,mS).replace(/d+/,dS).replace(/H+/,HS).replace(/m+/,MS).replace(/S+/,SS);
	return formared;
}