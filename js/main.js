function BMI_cal() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  height = height / 100;
  var bmi = weight / (height * height);
  var proper_weieight = (height * height) * Number(22);

  document.getElementById('bmi').innerHTML = bmi;
  document.getElementById('hyoujun').innerHTML = proper_weieight + "kg";
  document.getElementById('sa').innerHTML = weight - proper_weieight + "kg";
}