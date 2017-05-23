var beforeUserHeader = function() {
  var user = $(".mainContent p._speakerName.chatName > span:last");

  var id = user.attr("class").replace(/[^\d]/g, "");
  var name = user.text();

  var header = "[To:" + id + "] " + name + "さん\n";
  return header;
};

// 全既読
var allRead = function(){$("#_roomListItems > li").has("li._unreadBadge").each(function(i, o){o.click()});};

// サンプル 
var sample = function(){
  var header = beforeUserHeader();
  var message = "サンプル添付いたします。\nご確認よろしくお願いいたします。";
  $("#_chatText").val(header + message).change();
};

// ありがとう
var arigato = function(){
  var header = beforeUserHeader();
  var message = "ご確認ありがとうございます！";
  $("#_chatText").val(header + message).change();
};

// 設計G all
var sekkeig = function() {
  var members = [
    "[To:1129329] 大谷　祐司さん",
    "[To:1607930] 三井 沙織さん",
    "[To:2183492] 井田   結美さん",
    "[To:1829951] 吉田　久美子さん",
    "[To:2278030] 徳山 里未さん",
    "[To:2367510] 竹原 栞さん"
    ];
  var message = members.join("\n");
  $("#_chatText").val(message).change();
};

// クリア
var clearMes = function(){$("#_chatText").val("").change();};

$("#_chatSendToolbar")
  .append('<input type="button" value="全既読" onClick="allRead()"/>')
  .append('<input type="button" value="サンプル" onClick="sample()"/>')
  .append('<input type="button" value="ありがと" onClick="arigato()"/>')
  .append('<input type="button" value="設計G" onClick="sekkeig()"/>')
  .append('<input type="button" value="クリア" onClick="clearMes()"/>');
