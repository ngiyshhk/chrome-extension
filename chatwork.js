var allRead = function(){$("#_roomListItems > li").has("li._unreadBadge").each(function(i, o){o.click()});};
var sample = function(){
  var user = $(".mainContent p._speakerName.chatName:last > span");

  var id = user.attr("class").replace(/[^\d]/g, "");
  var name = user.text();

  var header = "[To:" + id + "]" + name + "さん\n";
  var message = "サンプル添付いたします。\nご確認よろしくお願いいたします。";
  $("#_chatText").val(header + message).change();
};

$("#_chatSendToolbar")
  .append('<input type="button" value="全既読" onClick="allRead()"/>')
  .append('<input type="button" value="サンプル" onClick="sample()"/>');
