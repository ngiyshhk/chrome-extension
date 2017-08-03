var beforeUserHeader = function() {
  var user = $(".mainContent p._speakerName.chatName > span:last");

  var id = user.attr("class").replace(/[^\d]/g, "");
  var name = user.text();

  var header = "[To:" + id + "] " + name + "さん\n";
  return header;
};

// 全既読
var allRead = function(){$("#_roomListItems > li").has("li._unreadBadge").each(function(i, o){o.click()});};

// 関係者
var members = function(){
  var ids = [
      1129329,
      2183492,
      1829951,
      2278030,
      2367510,
      2576687
    ];
  var message = ids.map(function(id){return "[To:" + id + "]";}).join(" ") + "\n"
  $("#_chatText").val(message).change();
};

// 依頼
var irai = function(){
  var message = beforeUserHeader() + "了解しました！\nSS依頼お願いします！";
  $("#_chatText").val(message).change();
};

// 明日
var asu = function(){
  var message = beforeUserHeader() + "他のタスクとの兼ね合いもあるので、明日になると思っておいてください。\n他のタスクの優先度が下げられるならこちらを優先するので、何を遅らせてよいかお伝えください！";
  $("#_chatText").val(message).change();
};

// クリア
var clearMes = function(){$("#_chatText").val("").change();};

$("#_chatSendToolbar")
  .append('<input type="button" value="全既読" onClick="allRead()"/>')
  .append('<input type="button" value="members" onClick="members()"/>')
  .append('<input type="button" value="依頼" onClick="irai()"/>')
  .append('<input type="button" value="明日" onClick="asu()"/>')
  .append('<input type="button" value="クリア" onClick="clearMes()"/>');
