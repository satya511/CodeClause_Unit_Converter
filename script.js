function convert() {
  const input = document.getElementById("input").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  let result;

  if (from === "meters") {
    if (to === "kilometers") {
      result = input / 1000;
    } else if (to === "miles") {
      result = input * 0.000621371;
    } else {
      result = input;
    }
  } else if (from === "kilometers") {
    if (to === "meters") {
      result = input * 1000;
    } else if (to === "miles") {
      result = input * 0.621371;
    } else {
      result = input;
    }
  } else {
    if (to === "meters") {
      result = input / 0.000621371;
    } else if (to === "kilometers") {
      result = input / 0.621371;
    } else {
      result = input;
    }
  }

  document.getElementById(
    "output"
  ).innerHTML = `${input} ${from} = ${result.toFixed(2)} ${to}`;
}
