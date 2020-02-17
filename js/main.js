(function () {
  //ブラウザがエラーチェックを行う
  'use strict';

  var btn = document.getElementById('btn');
  var weight = document.getElementById('weight');
  var height = document.getElementById('height');
  var result = document.getElementById('result');
  var reset = document.getElementById('reset');

  //ボタンを押したときのアニメーション
  btn.addEventListener('mousedown', function () {
    this.className = 'pushed';
  });

  //ボタンから離れたときの処理
  btn.addEventListener('mouseup', function () {
    this.className = '';
  });

  //ボタンをクリックしたときの処理
  //ここでBMIの計算を行う
  btn.addEventListener("click", function () {
    var wei = Number(weight);
    var hei = Number(height);

    var bmi = wei / (hei * hei);
    var proper_wei = (hei * hei) * 22;

    result.textContent = String(bmi);

    /*var choise = [do1, do2];
    var n = Math.floor(Math.random() * choise.length);
    result.textContent = `今日は「${choise[n].value}」をしよう！`;
    reset.classList.remove("hidden");
    */
  });


  reset.addEventListener("click", function () {
    result.textContent = "結果はここに表示されます";
    weight.value = "";
    height.value = "";
    weight.focus();
  });


  weight.focus();
})();