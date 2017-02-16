var allRead = function(){$("#_roomListItems > li").has("li._unreadBadge").each(function(i, o){o.click()});};
$("#_chatSendToolbar").append('<input type="button" value="全既読" onClick="allRead()"/>');
