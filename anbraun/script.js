const year = new Date().getFullYear();
const copyright = document.getElementById("copyright");
if(copyright) copyright.innerHTML = "2020-" + year;
const jahr = document.getElementById("jahr");
if(jahr) jahr.innerHTML = year - 111;