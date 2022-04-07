document.querySelector("ul").addEventListener('click', () => { document.querySelector("input#check").checked = false; })

let red = document.querySelector(".redbg");
let orange = document.querySelector(".orangebg");
let purple= document.querySelector(".purplebg");
let green = document.querySelector(".greenbg");
let white = document.querySelector(".whitebg");

red.addEventListener("click", function (){
  document.body.style.backgroundColor = "red";
});
orange.addEventListener("click", function (){
  document.body.style.backgroundColor = "orange";
});
purple.addEventListener("click", function (){
  document.body.style.backgroundColor = "rgb(179, 32, 159)";
});
green.addEventListener("click", function (){
  document.body.style.backgroundColor = "rgb(29, 171, 29)";
});
white.addEventListener("click", function(){
  document.body.style.backgroundColor = "white";
});

textChangeRedPage = function(){
document.getElementById("changetxt").textContent="The background color is now changed to red";
}
textChangeOrangePage = function(){
  document.getElementById("changetxt").textContent="The background color is now changed to orange";
}
  textChangePurplePage = function(){
  document.getElementById("changetxt").textContent="The background color is now changed to purple";
}
textChangeGreenPage = function(){
  document.getElementById("changetxt").textContent="The background color is now changed to green";
}
textChangeHomePage = function(){
  document.getElementById("changetxt").textContent="Cool, huh? ;)";
}
document.addEventListener("keydown", (e) => {
  if (e.key === "1") {
    document.body.style.backgroundColor = "red";
    document.getElementById("changetxt").textContent="The background color is now changed to red";
  } else if (e.key === "2"){
    document.body.style.backgroundColor = "orange";
    document.getElementById("changetxt").textContent="The background color is now changed to orange";
  } else if (e.key === "3"){
    document.body.style.backgroundColor = "rgb(179, 32, 159)";
    document.getElementById("changetxt").textContent="The background color is now changed to purple";
  } else if (e.key === "4"){
    document.body.style.backgroundColor = "rgb(29, 171, 29)";
    document.getElementById("changetxt").textContent="The background color is now changed to green";
}})