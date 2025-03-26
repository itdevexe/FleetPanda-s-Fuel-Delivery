function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    if(window.innerWidth <= 479){
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "flex";
        }
        return;
    }
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}
document.querySelector(".tablinks").classList.add("active");

function mobileTabShown(){
    let tabcontent = document.getElementsByClassName("tab-content");
    if(window.innerWidth <= 479){
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "flex";
        }
        return;
    }
}

window.addEventListener("resize", mobileTabShown);
window.addEventListener("DOMContentLoaded",mobileTabShown)