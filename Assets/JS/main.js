/*-------------------- VARIABLES --------------------*/

var text = baffle(".shuffle");
var text1 = baffle(".result");

var tabs = document.getElementById("main");

var dictionary = new Array();

var title = document.getElementById("title");
var title1 = document.getElementById("title1");
var title2 = document.getElementById("title2");

var tabB = document.getElementById("tabB");
var tabB1 = document.getElementById("tabB1");
var tabB2 = document.getElementById("tabB2");

var accordion = document.getElementById("frstA");
var accordion1 = document.getElementById("scndA");
var accordion2 = document.getElementById("thrdA");

var resultBox = document.getElementById("resultBox");
var inputBox = document.getElementById("inputBox");
var element = document.createElement("h1");

var shade = document.getElementById("shade");
var popUp = document.getElementById("popUp");

var preloader = document.getElementById("preloader");

/*-------------------- VARIABLES --------------------*/
/*-------------------- ONLOAD --------------------*/

function OnStart() {
  app.SetOrientation("Portrait");
}

window.addEventListener("load", function () {
  setTimeout(function () {
    preloader.style.left = "-100%";
    preloader.style.borderRight = "200px solid #F4D03F";
    setTimeout(startShuffle, 1000);
  }, 2000);
});

/*-------------------- ONLOAD --------------------*/
/*-------------------- BAFFLE --------------------*/

text1.set({
  characters: "SHUFFLE",
  speed: 100,
});

function shuffleResult() {
  text1.start();
  text1.reveal(10000);
}

text.set({
  characters: "SHUFFLE",
  speed: 100,
});

function startShuffle() {
  text.start();
  text.reveal(10000);
}

startShuffle();

/*-------------------- BAFFLE --------------------*/
/*-------------------- FUNCTIONS --------------------*/

function oneT() {
  setTimeout(function () {
    one();
  }, 500);
}

function twoT() {
  setTimeout(function () {
    two();
  }, 500);
}

function threeT() {
  setTimeout(function () {
    three();
  }, 500);
}

function one() {
  tabs.style.left = 0 + "%";

  title.style.display = "block";
  title1.style.display = "none";
  title2.style.display = "none";

  tabB.classList.add("active");
  tabB1.classList.remove("active");
  tabB2.classList.remove("active");

  startShuffle();
}

function two() {
  tabs.style.left = -100 + "%";

  title.style.display = "none";
  title1.style.display = "block";
  title2.style.display = "none";

  tabB.classList.remove("active");
  tabB1.classList.add("active");
  tabB2.classList.remove("active");

  startShuffle();
}

function three() {
  tabs.style.left = -200 + "%";

  title.style.display = "none";
  title1.style.display = "none";
  title2.style.display = "block";

  tabB.classList.remove("active");
  tabB1.classList.remove("active");
  tabB2.classList.add("active");

  startShuffle();
}

function frstA() {
  accordion.classList.add("active");
  accordion1.classList.remove("active");
  accordion2.classList.remove("active");
}

function scndA() {
  accordion.classList.remove("active");
  accordion1.classList.add("active");
  accordion2.classList.remove("active");
}

function thrdA() {
  accordion.classList.remove("active");
  accordion1.classList.remove("active");
  accordion2.classList.add("active");
}

function closePopUp() {
  popUp.style.height = "0px";
  popUp.style.visibility = "hidden";
  setTimeout(function () {
    shade.style.visibility = "hidden";
    shade.style.opacity = "0";
  }, 200);
}

/*-------------------- FUNCTIONS --------------------*/
/*-------------------- SOLVE --------------------*/

$.get("Assets/WORDS/dictionary.txt", function (data) {
  dictionary = data.split("\n").map((word) => word.trim().toLowerCase());
});

function solve() {
  const previousResults = resultBox.querySelectorAll("h1");
  previousResults.forEach(function (element) {
    element.remove();
  });

  let match = false;
  let word = inputBox.value.toLowerCase().split("").sort().join("");
  dictionary.forEach(function (item) {
    if (word.length == item.length) {
      let word1 = item.toLowerCase().split("").sort().join("");
      if (word === word1) {
        let result = document.createElement("h1");
        result.innerHTML = item;
        resultBox.appendChild(result);

        match = true;
      }
    }
  });
  if (match == false) {
    shade.style.visibility = "visible";
    shade.style.opacity = "0.8";
    setTimeout(function () {
      popUp.style.height = "180px";
      popUp.style.visibility = "visible";
    }, 200);
  }
}

/*-------------------- SOLVE --------------------*/
