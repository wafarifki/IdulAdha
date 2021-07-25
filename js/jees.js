var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 700);
}

function showPage() {
    document.getElementById("mengloding").style.display = "none";
    document.getElementById("Kontener").style.display = "block";
}