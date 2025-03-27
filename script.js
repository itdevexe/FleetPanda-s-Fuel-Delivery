// function openTab(evt, tabName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tab-content");
//     if(window.innerWidth <= 479){
//         for (i = 0; i < tabcontent.length; i++) {
//             tabcontent[i].style.display = "flex";
//         }
//         return;
//     }
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].classList.remove("active");
//     }
//     document.getElementById(tabName).style.display = "block";
//     evt.currentTarget.classList.add("active");
// }
// document.querySelector(".tablinks").classList.add("active");

// function mobileTabShown(){
//     let tabcontent = document.getElementsByClassName("tab-content");
//     if(window.innerWidth <= 479){
//         for (i = 0; i < tabcontent.length; i++) {
//             tabcontent[i].style.display = "flex";
//         }
//         return;
//     }
// }

// window.addEventListener("resize", mobileTabShown);
// window.addEventListener("DOMContentLoaded",mobileTabShown)


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");

    if (window.innerWidth <= 479) {
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

// Ensure first tab is active on page load
document.addEventListener("DOMContentLoaded", function () {
    let firstTab = document.querySelector(".tablinks");
    let firstTabContent = document.querySelector(".tab-content");

    if (firstTab && firstTabContent) {
        firstTab.classList.add("active");
        firstTabContent.style.display = "block";
    }

    mobileTabShown(); // Call this function to set up the correct display
});

// Fix function to restore desktop tab behavior
function mobileTabShown() {
    let tabcontent = document.getElementsByClassName("tab-content");

    if (window.innerWidth <= 479) {
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "flex";
        }
    } else {
        // Hide all tabs first
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Ensure the first tab is active when switching back to desktop
        let firstTab = document.querySelector(".tablinks");
        let firstTabContent = document.querySelector(".tab-content");

        if (firstTab && firstTabContent) {
            firstTab.classList.add("active");
            firstTabContent.style.display = "block";
        }
    }
}

window.addEventListener("resize", mobileTabShown);
