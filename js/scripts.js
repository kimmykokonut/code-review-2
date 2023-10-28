function evaluateResult(selectFav, selectSpeed) {
  const nameValue = document.getElementById("nameInput").value;
    
  let result;
  if (("js" === selectFav) && (selectFav === selectSpeed)) {
    result = nameValue + ", JavaScript is the starting path for you";
  } else if (("ruby" === selectFav) && (selectFav === selectSpeed)) {
    result = nameValue + ", Follow the Ruby Road! You should learn Ruby.";
  } else if (("python" === selectFav) && (selectFav === selectSpeed)) {
    result = nameValue + ", Python Power! You should learn Python.";
  } else {
    result = nameValue + ", Your interests vary too much to choose any language, try again!";
  }
  document.getElementById("output").innerText = result.toString();
  return result;
}
function evalHoroscope() { 
  let dobInput = document.getElementById("dobInput").value;
  let dob = dobInput.split('-');
  const bm = parseInt(dob[1]);
  const bd = parseInt(dob[2]);
  let horoResult;
  if (((bm === 3) && (bd >= 21)) || (bm === 4 && bd <= 19)) {
    horoResult = "Aries! \nHoroscope:  If you feel the need to break free of restrictions but are not sure what to do, just follow the first idea that comes into your head. Over the next few weeks acting on hunches could pay off both emotionally and financially, so trust yourself more.";
  } else if ((bm === 4 && bd >= 20) || (bm === 5 && bd <= 20)) {
    horoResult = "Taurus \nHoroscope:  If you get involved in some kind of dispute over the next few days you must make every effort to stay calm and rise above whatever comments others choose to make. Don’t give them the satisfaction of seeing they can so easily hurt you. ";
  } else if ((bm === 5 && bd >= 21) || (bm === 6 && bd <= 20)) {
    horoResult = "Gemini! \nHoroscope:  You can save a lot of time and effort this weekend, and maybe a lot of money too, by learning from the mistakes that other people make. You could, of course, learn even better from your own mistakes but why suffer when you don’t have to?";
  } else if ((bm === 6 && bd >= 21) || (bm === 7 && bd <= 22)) {
    horoResult = "Cancer  \nHoroscope:  So many things will go right for you over the next few days that you may wonder why on earth you allowed your view of life to get so negative. This positive phase last for at least a month, so make good use of it to create something special.";
  } else if ((bm === 7 && bd >= 23) || (bm === 8 && bd <= 22)) {
    horoResult = "Leo   \nHoroscope:  Upheavals of one sort or another are likely over the next few days but few of them are going to affect you directly and those that do will bring opportunities to grow emotionally. Stay calm and continue to believe that everything will come good in the end.";
  } else if ((bm === 8 && bd >= 23) || (bm === 9 && bd <= 22)) {
    horoResult = "Virgo  \nHoroscope:  Someone you did a good deed for in the past will want to do something for you in return and you must let them even if you don’t expect it. If nothing else it will help them feel better about themselves, which in itself is another good deed.";
  } else if ((bm === 9 && bd >= 23) || (bm === 10 && bd <= 23)) {
    horoResult = "Libra  \nHoroscope:  Someone you did a good deed for in the past will want to do something for you in return and you must let them even if you don’t expect it. If nothing else it will help them feel better about themselves, which in itself is another good deed.";
  } else if ((bm === 10 && bd >= 24) || (bm === 11 && bd <= 21)) {
    horoResult = "Scorptio \nHoroscope:  As the Sun begins its journey through your sign you will discover you have the power to make all sorts of things happen, and you must not be afraid to use it. If there is something you desire to possess now is the time to reach for it.";
  } else if ((bm === 11 && bd >=22) || (bm === 12 && bd <= 21)) {
    horoResult = "Sagittarius  \nHoroscope: You may need to work a bit harder over the next few days, especially if you have been coasting along enjoying what the universe brings you but without giving much in return. Remember, what you do for others you also do for yourself.";
  } else if ((bm === 12 && bd >= 22) || (bm === 1 && bd <= 19)) {
    horoResult = "Capricorn \nHoroscope: A decision you make over the next two or three days could have far-reaching results, even more so if what you decide benefits other people as well as yourself. Team activities are now under excellent stars, so don’t you dare be a loner."; 
  } else if ((bm === 1 && bd >= 20)  || (bm === 2 && bd <= 18)) {
    horoResult = "Aquarius \nHoroscope: You will need to take a tougher stance with people you don’t get along with on the work front. Hopefully they will notice that you are not in the mood to play silly games, but if they don’t then they will find out the hard way.";
  } else if ((bm === 2 && bd >= 19) || (bm === 3 && bd <= 20)) {
    horoResult = "Pisces \nHoroscope: The message of the stars for the coming week is that you must go your own way and do your own thing and ignore those who say you need to be more unneighborly. If others want your friendship they would be wise not to get in your way.";
  } else {
    horoResult = "There seems to be an error, Try again";
  }
  return horoResult;
}
function handleSelect(event) {
  event.preventDefault();
  const selectFav = document.getElementById("favorite").value;
  const selectSpeed = document.getElementById("speed").value;
  const selectEnd = document.getElementById("end").value;
  const selectRead = document.getElementById("read").value;
  const selectStereo = document.getElementById("stereotype").value;
  let result = evaluateResult(selectFav, selectSpeed);
  let horoResult = evalHoroscope(); 
  document.getElementById("horoscope").innerText = horoResult;
}
function resetPage() {
  let results = document.getElementById("results");
  results.setAttribute("class", "hidden");
  document.getElementById("nameInput").value = null;
  document.getElementById("favorite").value = null;
  document.getElementById("speed").value = null;
  document.getElementById("end").value = null;
  document.getElementById("read").value = null;
  document.getElementById("stereotype").value = null;
}
window.addEventListener("load", function () {
  const page = document.querySelector('.page');
  const darkMode = document.querySelector('.button-dark');
  darkMode.addEventListener("click", function() {
    page.classList.remove('light-mode');
    page.classList.add('dark-mode');
  });

  const lightMode = document.querySelector('.button-light');
  lightMode.addEventListener("click", function() {
    page.classList.remove('dark-mode');
    page.classList.add('light-mode');
  });

  const form = document.querySelector("form");
  const resetBtn = document.querySelector("button#reset");
  let results = document.querySelector("div#results");
  form.addEventListener("submit", handleSelect);
  form.addEventListener("submit", function () {
    results.removeAttribute("class");
    resetBtn.removeAttribute("class");
  });
  resetBtn.addEventListener("click", resetPage);
});