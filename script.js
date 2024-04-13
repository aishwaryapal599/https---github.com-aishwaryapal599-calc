function add() {
  var input1 = parseFloat(document.getElementById("input1").value);
  var input2 = parseFloat(document.getElementById("input2").value);
  result = input1 + input2;
  document.getElementById("result").innerText =
    "addion of two number " + result;
  console.log(result);
}
function sub() {
  var input1 = parseFloat(document.getElementById("input1").value);
  var input2 = parseFloat(document.getElementById("input2").value);
  result = input1 - input2;
  document.getElementById("result").innerText =
    "Substraction of two number " + result;
  console.log(result);
}
function mutli() {
  var input1 = parseFloat(document.getElementById("input1").value);
  var input2 = parseFloat(document.getElementById("input2").value);
  result = input1 * input2;
  document.getElementById("result").innerText = "Multi of two number " + result;
  console.log(result);
}
function division() {
  var input1 = parseFloat(document.getElementById("input1").value);
  var input2 = parseFloat(document.getElementById("input2").value);
  result = input1 / input2;
  document.getElementById("result").innerText =
    "Division of two number " + result;
  console.log(result);
}
function mod() {
  var input1 = parseFloat(document.getElementById("input1").value);
  var input2 = parseFloat(document.getElementById("input2").value);
  result = input1 % input2;
  document.getElementById("result").innerText =
    "Modulus of two number " + result;
  console.log(result);
}
