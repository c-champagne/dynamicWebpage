var headBar = document.createElement("header");
var pageCont = document.getElementById("container");

pageCont.appendChild(headBar);

var grayBar = document.createElement("div");

pageCont.appendChild(grayBar);

var storyBar = document.createElement("div");

pageCont.appendChild(storyBar);


headBar.style.backgroundColor = "#52a7fa";
headBar.style.color = "white";
headBar.style.fontWeight = "bold";
headBar.style.fontFamily = "sans-serif";
headBar.style.padding = "15px 10px 15px 15px";
headBar.style.fontSize = "24px";
headBar.innerHTML = "HighOnCoding";
grayBar.style.backgroundColor = "#dddee0";
grayBar.innerHTML = "Curse of the Current Reviews";

var navMenu = document.createElement("a");
headBar.appendChild(navMenu);
navMenu.innerHTML = "Home Categories";
navMenu.style.padding = "25px";
navMenu.style.wordSpacing = "30px";
navMenu.style.fontSize = "14px";




var grayReview = document.createElement("p");
grayBar.appendChild(grayReview);
grayReview.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle.  Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshots, and reviews."