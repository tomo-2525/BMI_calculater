(function () {
  //ブラウザがエラーチェックを行う
  'use strict';

  //それぞれのidを取得し使えるようにする
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

    bmi.textContent = String(bmi);
  });


  reset.addEventListener("click", function () {
    result.textContent = "結果はここに表示されます";
    wei.value = "";
    hei.value = "";
    wei.focus();
  });




  wei.focus();
})();