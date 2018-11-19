jQuery.extend({
	Dialog:function(){
		var B = jQuery("<div>").addClass("dialog");
        var W = jQuery("<div>").addClass("dialog-modal");
        var C = jQuery("<div>").addClass("dialog-content");
        var h = jQuery("<div>").addClass("dialog-head");
        var b = jQuery("<div>").addClass("dialog-body");
        var f = jQuery("<div>").addClass("dialog-foot");
        return C.append(h),C.append(b),C.append(f),B.append(W),B.append(C);
	},
    Alert:function(str){
    	var Dalog = jQuery.Dialog();
        var C_confirm = jQuery("<button>").html("Confirm");
        Dalog.find(".dialog-foot").append(C_confirm),
        jQuery("body").append(Dalog);
        C_confirm[0].onclick = function(){
        	console.log(0);
        	Dalog.remove();
        }
    },
})

