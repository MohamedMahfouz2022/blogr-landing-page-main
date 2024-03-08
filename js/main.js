// ------------------------Start--Navbar------------------
document.addEventListener("DOMContentLoaded", function () {
    // العناصر التي نريد إضافة مستمع الحدث عليها
    var elements = document.querySelectorAll(".dropdownMenu");
    var list = document.getElementsByClassName("list");
    var icon = document.getElementsByClassName("fa-chevron-down");

    elements.forEach(function (element) {
        element.addEventListener("click", function () {
            var activeElements = document.querySelectorAll(".active");
            var activeElementsIcon = document.querySelectorAll(".active_icon");
            list[element.id].classList.toggle("active")
            icon[element.id].classList.toggle("active_icon")
            activeElements.forEach(function (element) {
                element.classList.remove("active");

            });
            activeElementsIcon.forEach(function (element) {
                element.classList.remove("active_icon");
            });
        });
    });
});
var bar = document.getElementById("bar")
var linksNav = document.getElementsByClassName("links-nav")

bar.addEventListener("click", () => [
    linksNav[0].classList.toggle("activeLinksNav"),
    bar.classList.toggle("activeBar")
])
// ------------------------End--Navbar------------------
