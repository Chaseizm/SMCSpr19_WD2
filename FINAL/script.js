let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
    let getSidebarH1 = document.querySelector(".nav-sidebar > a");
    let getNavMainH1 = document.querySelector("nav-main > a");

    if (toggleNavStatus === false) {

        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width  = "80%";
        getSidebarH1.style.display  = "inline-block";
        getSidebarH1.style.color = "white";
        getSidebarH1.style.fontFamily = "'Fjalla One', sans-serif";
        getSidebarH1.style.letterSpacing = "2.7px";
        getSidebarH1.style.fontSize = "12px";
        getSidebarH1.style.fontWeight = "900";
        getSidebarH1.style.marginLeft = "21px";
        getSidebarH1.style.marginTop = "5px";
        getSidebarH1.style.textDecoration = "none";
        getSidebarH1.style.textShadow = "0px 0px 20px lightgrey";
        getSidebarH1.style.transition = "all .3s ease-in-out";

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.width  = "0px";
        getSidebarH1.style.display  = "none";
        getSidebarH1.style.transition = "all .3s ease-out";


        toggleNavStatus = false;
    }
}

var toggleStatus = 1;

        function changeToggle(){
            if (toggleStatus === 1) {
            document.querySelector("#toggle").innerHTML = "&#10005";

            toggleStatus = 0;
            }
            else {
            document.querySelector("#toggle").innerHTML = "&#9776";

            toggleStatus = 1;
            }
        }

document.querySelector("#toggle").addEventListener("click", changeToggle);



function popUp() {
    alert("Thank you for your donations. Have a good day!");
}

document.getElementById("processBtn").addEventListener("click", popUp);