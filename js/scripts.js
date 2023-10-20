function evaluateResult(selectFav, selectSpeed) {
  const nameInput = document.getElementById("nameInput").value;
  const nameValue = nameInput.toString();
  let result;
  if (("js" === selectFav) && (selectFav === selectSpeed)) {
    result = nameValue + ", JavaScript is the starting path for you";
  } else if (("ruby" === selectFav) && (selectFav === selectSpeed)) {
    result = nameValue + ", Follow the Ruby Road! You should learn Ruby.";
  } else if (("python" === selectFav) && (selectFav === selectSpeed)) {
    result = nameValue + ", Python Power! You should learn Python."
  } else {
    result = nameValue + ", Your interests vary too much to choose any language, try again!";
  }
  document.getElementById("output").innerText = result.toString();
  return result
}
function handleSelect(event) {
  event.preventDefault();
  const selectFav = document.getElementById("favorite").value;
  const selectSpeed = document.getElementById("speed").value;
  const selectEnd = document.getElementById("end").value;
  const selectRead = document.getElementById("read").value;
  const selectStereo = document.getElementById("stereotype").value;
  let result = evaluateResult(selectFav, selectSpeed);
}
function resetPage() {
  results.setAttribute("class", "hidden");
  document.getElementById("nameInput").value = null;
  document.getElementById("favorite").value = null;
  document.getElementById("speed").value = null;
  document.getElementById("end").value = null;
  document.getElementById("read").value = null;
  document.getElementById("stereotype").value = null;
}
window.addEventListener("load", function () {
  const form = document.querySelector("form");
  const resetBtn = document.querySelector("button#reset");
  const results = document.querySelector("div#results");
  form.addEventListener("submit", handleSelect);
  form.addEventListener("submit", function (event) {
    results.removeAttribute("class");
    resetBtn.removeAttribute("class");
  });
  resetBtn.addEventListener("click", resetPage);
});