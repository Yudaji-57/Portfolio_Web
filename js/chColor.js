function chColor() {
    var arrColor = [
        "#1F253D", "#FF0000", "#FFA500",
        "#FFFF00", "#008000", "#0000FF",
        "#000080", "#800080", "#A9A9A9",
        "#F5F5DC", "#E0FFFF", "#FFD700",
        "#ADD8E6", "#E6E6FA", "#FFFAFA"];
    var arrNum = Math.floor(Math.random() * arrColor.length);
    var bodyTag = document.getElementById("theBody");
    bodyTag.style.backgroundColor = arrColor[arrNum];
}    

function Color_1 () {
    document.body.style.background = "#1f253d";
}