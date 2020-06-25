var I = 1;
var varName = [3];
var exText  = ['何人に足跡をつけたら終了する(半角数字)', '最小何秒間隔で足跡をつける(半角数字)', '最大何秒間隔で足跡をつける(半角数字)'];
var exNum   = [1000, 2, 6];

function inputDialog(){
 for(let j = 0; j < 3; j++){
  if(j == 0) varName[j] = prompt(exText[j], exNum[j]);
  else varName[j] = prompt(exText[j], exNum[j]) * 1000;

  if (varName[j] == null){
   if(j == 0) varName[j] = exNum[j];
   else varName[j] = exNum[j] * 1000;
  }
 }
}

inputDialog();

function autoFootprints() {
 I++;
 location.href=`https://pairs.lv/#/search/one/${I}`;
 if(I >= varName[0]){
  clearTimeout(id);
 }
}

(function loop() {
 var rand = Math.round(Math.random() * (varName[2] + 1000 - varName[1])) + varName[1];
 var id = setTimeout(function() {
  autoFootprints();
  loop();
 }, rand);
}());
