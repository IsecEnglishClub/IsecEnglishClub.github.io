function toggleMenu(){
    var ul = document.getElementById("mainNav-ul");
    if (ul.className === "mainNav-ul") {
        ul.className += " responsive";
    } else {
        ul.className = "mainNav-ul";
    }
}
