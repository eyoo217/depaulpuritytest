function calculateScore() {
    let score = 0;
    var toShow = document.getElementById("toShow");
    var toHide = document.getElementById("toHide");
    for (let i = 1; i <= 100; i++) {
        if (document.getElementById(i).checked) {
            score += 1;
        }
    }
    if ( toShow.style.display === "none") {
        toShow.style.display = "block";
        toHide.style.display = "none";
        document.getElementById("score").textContent = (100 - score);
    }
    else {
        toShow.style.display = "none";
        toHide.style.display = "block";
    }
}

function clearBoxes() {
    for (let i = 1; i <= 100; i++) {
        if (document.getElementById(i).checked){ 
            document.getElementById(i).checked = false;
        }
    }
}