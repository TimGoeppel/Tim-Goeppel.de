const year = new Date().getFullYear();
const copyright = document.getElementById("copyright");
if(copyright) copyright.innerHTML = "2020-" + year;
const jahr = document.getElementById("jahr");
if(jahr) jahr.innerHTML = 1909;
const jahre = document.getElementById("jahre");
if(jahre) jahre.innerHTML = year - 1909;