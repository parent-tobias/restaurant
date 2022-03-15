var arImages = ["ChickenRepublic_BannerIcon2-1.png", "ChickenRepublic_BannerIcon3-1.png", 
"ChickenRepublic_BannerIcon4-1.png", "ChickenRepublic_BannerIcon5-1.png", 
"ChickenRepublic_BannerIcon6-1.png", "ChickenRepublic_BannerIcon7-3.png", 
]
var url = "../images/"
var menu = document.querySelectorAll(".grid > div::before")

var orderMenu = [ "Soulfully Spiced Fried Chicken", "Delicious Rotisserie Chicken",
"Flame Grilled Chicken", "Burgers, Wraps & ChickWhizz",
"Tasty Sides", "Sweet Treats & Beverages"]
var orders = document.querySelectorAll(".grid > div")
orders.forEach((item, i) => {
    item.textContent = orderMenu[i]
})