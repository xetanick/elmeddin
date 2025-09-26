function calculate(operation) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    result.value = "Ədəd daxil edin!";
    return;
  }

  switch (operation) {
    case "plus":
      result.value = num1 + num2;
      break;
    case "minus":
      result.value = num1 - num2;
      break;
    case "mult":
      result.value = num1 * num2;
      break;
    case "divide":
      result.value = num2 !== 0 ? (num1 / num2) : "Sıfıra bölmək olmaz!";
      break;
    default:
      result.value = "Yanlış əməliyyat!";
  }
}