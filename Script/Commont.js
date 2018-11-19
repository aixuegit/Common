/**
 * 判断浏览器是iphone Android iPad PC
 * @returns {String} iPhone | Android | iPad | PC  
 */
function isMobile() {
	var i = window.navigator.userAgent;
	if(/(iPhone)/g.test(i)) {
		return "iPhone";
	} else if(/android/g.test(i)) {
		return 'Android';
	} else if(/iPad/g.test(i)) {
		return "iPad";
	} else {
		return "PC";
	}
}
/**
 * 数组快速排序
 * @param {Array} arr
 * @returns {Array} new Array
 */
function quickSort(arr) {
	if(arr.length <= 1) {
		return arr;
	}
	var pivotIndex = Math.floor(arr.length / 2);
	var pivot = arr.splice(pivotIndex, 1);
	var len = arr.length;
	var left = [];
	var right = [];

	for(var i = 0; i < len; i++) {
		if(arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat(pivot, quickSort(right));
}

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
/**
 * 获取cookie
 * @param {String} n cookie名
 * @returns {String|null} 返回 cookie 值，没有则返回  null
 */
function getCookie(n){
	var c = document.cookie.split("; ");
	var c_len = c.length;
	for(var i = 0;i<c_len;i++){
		var c_in = c[i].split("=");
		if(c_in[0] === n){
			return c_in[1];
		}
	}
	return null;
}
/**
 * 设置cookie
 * @param {String} n cookie 名
 * @param {String|Number} v cookie 值
 * @param {Object} d cookie 过期时间 单位天
 */
function setCookie(n,v,d){
	var expdate = new Date();
    expdate.setDate(expdate.getDate() + d) ;
    document.cookie = n + "=" + escape(v) + ";expires=" + expdate.toUTCString();
}
/**
 * 删除cookie
 * @param {String} n cookie 名
 */
function deletCookkie(n){
	setCookie(n,"",-1);
}
/**
 * 验证手机号
 * @param {String} str 手机号
 * @returns {Boolean} true | false
 */
function isPoneAvailable(str) {//验证手机号
    var myreg = /^[1]\d{10}$/;
    if (str) {//输入不能为空
        if (!myreg.test(str)) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }

}
/**
 * 验证邮箱
 * @param {String} str 邮箱地址
 * @return {Boolean} true | false
 */
function isEmailAvailable(str) {//验证邮箱
    var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
    if (str) { 
        if (!reg.test(str)) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}
/**
 * 格式化金额 不带小数点
 * @param {Object} num
 */
function formatMoney(num){
	var sign = num < 0?true:false;
	num = Math.abs(num);
	var decimals = num%1;
	s = Math.floor(num).toString();
	s = s.length%3 === 0? s :s.length%3 == 1 ?"00"+s:"0"+s;
	
	s= s.replace(/(\d{3})/g,"$1,");
	s = s.replace(/(^[0]+)|(\,$)/g,"");
	return (sign?"-"+s:s);
}
