var pageCont = document.getElementById("container");

function loadHeadBar() {
    var headBar = document.createElement("header");
    headBar.style.backgroundColor = "#52a7fa";
    headBar.style.color = "white";
    headBar.style.fontWeight = "bold";
    headBar.style.padding = "15px 10px 15px 15px";
    headBar.style.fontSize = "24px";
    headBar.style.display = "flex";
    headBar.style.flexDirection = "row";
    headBar.innerHTML = "HighOnCoding";
    headBar.style.fontFamily = "sans-serif";

    var navMenu = document.createElement("div");
    var homeLink = document.createElement("a");
    

    homeLink.innerHTML = "Home";
    homeLink.style.padding = "0px 30px 0px 30px";
    homeLink.style.fontWeight = "bold"; 
    homeLink.style.fontSize = "16px";

    navMenu.appendChild(homeLink);

    var catLink = document.createElement("a");
    catLink.innerHTML = "Categories";
    catLink.style.fontWeight = "100";
    catLink.style.fontSize = "16px";

    navMenu.appendChild(catLink);
    
    headBar.appendChild(navMenu);

    return headBar;
}

pageCont.appendChild(loadHeadBar());

function loadGrayBar() {
    var grayBar = document.createElement("div");
    grayBar.innerHTML = "Curse of the Current Reviews";
    grayBar.style.backgroundColor = "#dddee0";
    grayBar.style.margin = "15px 15px 15px 15px";
    grayBar.style.padding = "15px 15px 15px 15px";
    grayBar.style.fontSize = "22px";
    grayBar.style.fontFamily = "sans-serif";
    grayBar.style.fontWeight = "bold";
    grayBar.style.color = "#545960";

    var grayReview = document.createElement("p");
    grayBar.appendChild(grayReview);
    grayReview.style.fontSize = "14px";
    grayReview.style.fontWeight = "normal";
    grayReview.style.color = "black";
    grayReview.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle.  Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshots, and reviews.";

    return grayBar;
}

pageCont.appendChild(loadGrayBar());

function createStory(title, text, numComments, numLikes) {
    var storyBlock = document.createElement("div");
    
    var storyTitle = document.createElement("h3");
    storyTitle.style.color = "#2275c7";
    storyTitle.style.fontWeight = "bold";
    storyTitle.style.fontFamily = "sans-serif";
    storyTitle.innerHTML = title;

    storyBlock.appendChild(storyTitle);
    
    var storyText = document.createElement("p");
    
    
    storyText.style.color = "black";
    storyText.style.fontWeight = "normal";
    storyText.innerHTML = text;
    
    storyBlock.appendChild(storyText);

    var commentBar = document.createElement("div");
    commentBar.style.backgroundColor = "orange";
    commentBar.style.color = "white";
    commentBar.style.fontFamily = "sans-serif";
    commentBar.style.fontSize = "12px";
    commentBar.style.padding = "2px";
    var comments = document.createElement("a");
    comments.innerHTML = numComments + " Comments";
    comments.style.padding = "5px";
    commentBar.appendChild(comments);
    
    storyBlock.appendChild(commentBar);

    var likes = document.createElement("a");
    likes.innerHTML = numLikes + " Likes";
    commentBar.appendChild(likes);

    storyBlock.appendChild(commentBar);

    return storyBlock;
}

pageCont.appendChild(createStory("Hello WatchKit", "Text, text", "12", "35"));

pageCont.appendChild(createStory("Introduction to Swift", "Text again, and more text", "22", "67"));


/*
pageCont.appendChild(headBar);

var grayBar = document.createElement("div");

pageCont.appendChild(grayBar);

var storyBar = document.createElement("div");

pageCont.appendChild(storyBar);
storyBar.innerHTML = "Hello WatchKit";
storyBar.style.color = "#2275c7";
storyBar.style.fontFamily = "sans-serif";
storyBar.style.fontWeight = "bold";


var storyText = document.createElement("p");
storyBar.appendChild(storyText);
storyText.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.";
storyText.style.color = "black";
storyText.style.fontWeight = "normal";

var commentBar = document.createElement("div");
storyBar.appendChild(commentBar);
commentBar.innerHTML = "<a>12 comments</a> 124 likes";
commentBar.style.backgroundColor = "orange";
commentBar.style.color = "white";
commentBar.style.fontFamily = "sans-serif";
commentBar.style.fontSize = "12px";
commentBar.style.padding = "2px";

headBar.style.backgroundColor = "#52a7fa";
headBar.style.color = "white";
headBar.style.fontWeight = "bold";
headBar.style.fontFamily = "sans-serif";
headBar.style.padding = "15px 10px 15px 15px";
headBar.style.fontSize = "24px";
headBar.innerHTML = "HighOnCoding";

grayBar.innerHTML = "Curse of the Current Reviews";
grayBar.style.backgroundColor = "#dddee0";
grayBar.style.margin = "15px 15px 15px 15px";
grayBar.style.padding = "15px 15px 15px 15px";
grayBar.style.fontSize = "22px";
grayBar.style.fontFamily = "sans-serif";
grayBar.style.fontWeight = "bold";
grayBar.style.color = "#545960";

var grayReview = document.createElement("p");
grayBar.appendChild(grayReview);
grayReview.style.fontSize = "14px";
grayReview.style.fontWeight = "normal";
grayReview.style.color = "black";
grayReview.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle.  Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshots, and reviews.";




*/





