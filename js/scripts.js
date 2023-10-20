//function here
function getResults(event) {
  // if else? make var for answers?
  let result;
  // if else?
  // gets var result to print to output in p htmsl
  document.getElementById("output").innerText = result.toString();
}


window.addEventListener("load", function() {
  const form = document.querySelector("form");
//access button/story elements top level to reuse
  const resetBtn = document.querySelector("button#reset");
  const results = document.querySelector("div#results");
// when submit pressed, results shown instead of hide
  form.addEventListener("submit", function(event) {
    // code here get value ea form input
    // code set results variables to values from form
    document.querySelector()

    results.removeAttribute("class");
    // prevents auto refresh
    event.preventDefault();
  });
// makes results no longer hidden when submit pressed
  form.addEventListener("submit" function() {
    resetBtn.removeAttribute("class");
  });
  // makes event to reset button click make values empty
  resetBtn.addEventListener("click", function() {
    results.setAttribute("class", "hidden");
    document.getElementById("favorite").value = null;
    document.getElementById("speed").value = null;
    document.getElementById("end").value = null;
    document.getElementById("read").value = null;
    document.getElementById("stereotype").value = null;



  })
});
