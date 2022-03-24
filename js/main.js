var arImages = ["ChickenRepublic_BannerIcon3-1.png", "ChickenRepublic_BannerIcon2-1.png", 
"ChickenRepublic_BannerIcon4-1.png", "ChickenRepublic_BannerIcon6-1.png", 
"ChickenRepublic_BannerIcon5-1.png", "ChickenRepublic_BannerIcon7-3.png", 
]
var url = "./images/"
var menu = document.querySelectorAll(".grid > div")

menu.forEach((item, index) => {
    var img = document.createElement("img")
    img.src = url + arImages[index]
    item.appendChild(img);
})

var orderMenu = [ "Soulfully Spiced Fried Chicken", "Delicious Rotisserie Chicken",
"Flame Grilled Chicken", "Tasty Sides",
"Burgers, Wraps & ChickWhizz", "Sweet Treats & Beverages"]
menu.forEach((item, i) => {
    var text = document.createElement("span")
    text.innerText = orderMenu[i]
    item.appendChild(text);
})

var links = document.querySelectorAll(".navbar-nav .nav-link")
links.forEach((link)=>{
    if(window.location.href === link.href) {
        link.classList.add("active")
    }
})

var viewImages = ["ChickenRepublic_HomeStoreImg.jpg", "ChickenRepublic_LoveImg2.jpg", 
"ChickenRepublic_MegaPotLoversMeal_updated.jpg", "ChickenRepublic_PeopleCapabilityAlways.jpg", 
]

// fetch('../sources/items.json')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             appendData(data);
//         })
//         .catch(function (err) {
//             console.log('error: ' + err);
//         });

//     function appendData(data) {
//         let mainContainer = document.getElementById("data");
//         for (let i = 0; i < data.length; i++) {
//             let div = document.createElement("div");
//             div.innerHTML = 'Name: ' + data[i].name + ' ' + data[i].lastName;
//             mainContainer.appendChild(div);
//         }
//     }

var button = document.getElementById('slide');
button.onclick = function () {
    var container = document.querySelector(".grid")
    sideScroll(container,'right',15,50,15);
};

var back = document.getElementById('slideBack');
back.onclick = function () {
    var container = document.querySelector(".grid")
    sideScroll(container,'left',15,50,15);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}

(function (global) {

    var dc = {};
    
    var homeHtmlUrl = "snippets/soulful-chicken.html";
    
    // Convenience function for inserting innerHTML for 'select'
    var insertHtml = function (selector, html) {
      var targetElem = document.querySelector(selector);
      targetElem.innerHTML = html;
    };
    
    // Show loading icon inside element identified by 'selector'.
    var showLoading = function (selector) {
      var html = "<div class='text-center'>";
      html += "<img src='../images/ajax-loader.gif'></div>";
      insertHtml(selector, html);
    };
    
   
    // On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function (event) {

    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      homeHtmlUrl, 
      true); 
    });

    global.$dc = dc;

})(window)