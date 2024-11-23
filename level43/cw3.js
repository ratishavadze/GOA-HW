const img = document.getElementById("myImage");

img.addEventListener("mouseover", function() {
    img.style.width = "400px";
    img.style.height = "auto";
});

img.addEventListener("mouseout", function() {
    img.style.width = "300px";
    img.style.height = "auto";
});