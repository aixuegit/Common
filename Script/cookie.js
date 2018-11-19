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
