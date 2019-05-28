let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width  = "80%";

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.width  = "0px";

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