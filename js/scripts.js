function handleSelect(event) {
  event.preventDefault();
  const selectFav = document.getElementById("favorite").value;
  const selectSpeed = document.getElementById("speed").value;
  const selectEnd = document.getElementById("end").value;
  const selectRead = document.getElementById("read").value;
  const selectStereo = document.getElementById("stereotype").value;
  let result = evaluateResult(selectFav, selectSpeed);
}

function evaluateResult(selectFav, selectSpeed) {
  const nameInput = document.getElementById("nameInput").value;
  const nameValue = nameInput.toString();
  console.log(nameInput);
  console.log(nameValue);
  let result;
  if ("js" === selectFav && selectFav && selectSpeed) {
    result = nameValue + ", JavaScript is the starting path for you";
  } else if ("ruby" === selectFav && selectFav === selectSpeed) {
    result = nameValue + ", Follow the Ruby Road!";
  } else if ("python" === selectFav && selectFav === selectSpeed) {
    result = nameValue + ", Power to the Python!"
  } else {
    result = "Your interests vary too much to choose any language";
  }
  document.getElementById("output").innerText = result.toString();
  return result
}
// need for checkboxes?
function resetPage() {
  results.setAttribute("class", "hidden");
  document.getElementById("favorite").value = null;
  document.getElementById("speed").value = null;
  document.getElementById("end").value = null;
  document.getElementById("read").value = null;
  document.getElementById("stereotype").value = null;
}

window.addEventListener("load", function () {
  //definiing variables to use for results and reset button
  const form = document.querySelector("form");
  const resetBtn = document.querySelector("button#reset");
  const results = document.querySelector("div#results");
  
  form.addEventListener("submit", handleSelect);

  form.addEventListener("submit", function (event) {
    results.removeAttribute("class");
    resetBtn.removeAttribute("class");
  });
  
  resetBtn.addEventListener("click", resetPage);
  //   
  //   });
  // // makes event to reset button click make values empty
  // resetBtn.addEventListener("click", function () {
  //   
  // })
});