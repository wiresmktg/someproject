// const rate = document.getElementById("rate").value; // get input value
// const cost = document.getElementById("cost").value; // get input value
// var hours = document.getElementById("hours").value; // get input value3

function calculator() {
  const rate = document.getElementById("rate").value; // get input value
  const cost = document.getElementById("cost").value; // get input value
  const expenses = document.getElementById("expenses").value; // get input value3
  const hours = document.getElementById("hours").value; // get input value3
  
  document.getElementById("button").addEventListener("click", calculator);

  const rateCalc = ((cost - expenses) / hours).toFixed(2);

  // ANSWERS
  if (rateCalc < 0) {
    document.getElementById("demo").innerHTML = "You are losing money!";
  } else if (rateCalc == 0) {
    document.getElementById("demo").innerHTML = "$0/hr. Try again :)";
  } else if (rateCalc <= 15) {
    document.getElementById("demo").innerHTML =
      "You can do better, adjust your numbers";
  } else if (rateCalc > 15 && rateCalc <= 25) {
    document.getElementById("demo").innerHTML = "This is not too bad!";
  } else if (rateCalc > 25 && rateCalc <= 35) {
    document.getElementById("demo").innerHTML = "Fair rate";
  } else if (rateCalc > 35 && rateCalc <= 50) {
    document.getElementById("demo").innerHTML = "This is pretty good!";
  } else if (isNaN(rateCalc)) {
    document.getElementById("demo").innerHTML =
      "Can't compute, you left some fields BLANK";
  } else {
    document.getElementById("demo").innerHTML =
      "You are on a proper trajectory!";
  }

  document.getElementById(
    "rate"
  ).value = `Your hourly rate is ~$${rateCalc} per hour`;
}
