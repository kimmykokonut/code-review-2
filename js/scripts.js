//function here
function handleSelect(event) {
  event.preventDefault();
  const selectFav = document.getElementById("favorite").value;
  console.log(selectFav); //"ruby"
  const selectSpeed = document.getElementById("speed").value;
  console.log(selectSpeed);//"js"
  const selectEnd = document.getElementById("end").value;
  console.log(selectEnd);
  const selectRead = document.getElementById("read").value;
  console.log(selectRead);
  const selectStereo = document.getElementById("stereotype").value;
  console.log(selectStereo);
}

function evaluateResult(event) {
  event.preventDefault();
  let result = "Your answer here";
  // let result;
  // if (selectFav selectSpeed selectEnd selectRead selectStereo === "js") {
  //   result = "JavaScript is the starting path for you";
  // }
  // if else?
  // gets var result to print to output in p htmsl
  document.getElementById("output").innerText = result.toString();
}


window.addEventListener("load", function () {
  //definiing variables to use for results and reset button
  const form = document.querySelector("form");
  const resetBtn = document.querySelector("button#reset");
  const results = document.querySelector("div#results");
  //  make handleSelect funciton run when submit button pressed
  formSelect = document.getElementById("select-form");
  
  formSelect.addEventListener("submit", handleSelect);
  //make evaluation function happen
  evaluateResult();


  // when submit pressed, results shown instead of hide
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    results.removeAttribute("class");
  });
  // makes results no longer hidden when submit pressed
  form.addEventListener("submit" function () {
    resetBtn.removeAttribute("class");
    });
  // makes event to reset button click make values empty
  resetBtn.addEventListener("click", function () {
    results.setAttribute("class", "hidden");
    document.getElementById("favorite").value = null;
    document.getElementById("speed").value = null;
    document.getElementById("end").value = null;
    document.getElementById("read").value = null;
    document.getElementById("stereotype").value = null;
  })
});