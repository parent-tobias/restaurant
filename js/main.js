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
// links.forEach((navclick,_,nav) => {
//     navclick.onclick = () => 
//         nav.forEach(n => {
//             n.classList.toggle("active",n===navclick)
//         })
// })

links.forEach((link)=>{
    if(window.location.href === link.href) {
        link.classList.add("active")
    }
})

