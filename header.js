var firstpara = document.querySelector(".home_content").style
var secondpara = document.querySelector(".about_content").style
var thirdpara = document.querySelector(".service_content").style
var forthpara = document.querySelector(".contact_content").style
var fifthpara = document.querySelector(".news_content").style
function first() {
    if (firstpara.display !== "block") {
        firstpara.display="block";
        secondpara.display="none";
        thirdpara.display="none";
        forthpara.display="none";
        fifthpara.display="none";
    } else {
        firstpara.display="none"
    }

}

function second() {
    if (secondpara.display !== "block") {
        secondpara.display = "block";
        firstpara.display = "none";
        thirdpara.display = "none";
        forthpara.display = "none";
        fifthpara.display = "none";
    } else {
        secondpara.display = "none"
    }

}
function third() {
    if (thirdpara.display !== "block") {
        thirdpara.display = "block";
        firstpara.display = "none";
        secondpara.display = "none";
        forthpara.display = "none";
        fifthpara.display = "none";
    } else {
        thirdpara.display = "none"
    }

}
function forth() {
    if (forthpara.display !== "block") {
        forthpara.display = "block";
        firstpara.display = "none";
        secondpara.display = "none";
        thirdpara.display = "none";

        fifthpara.display = "none";
    } else {
        forthpara.display = "none"
    }

}
function fifth() {
    if (fifthpara.display !== "block") {
        fifthpara.display = "block";
        firstpara.display = "none";
        secondpara.display = "none";
        thirdpara.display = "none";
        forthpara.display = "none";

    } else {
        fifthpara.display = "none"
    }

}