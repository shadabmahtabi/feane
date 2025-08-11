document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu_toggle");
    const navElems = document.querySelector("#responsive_elems");

    // <ion-icon name="close"></ion-icon>
    // <ion-icon name="menu"></ion-icon>

    let flag = 0;
    menuToggle.addEventListener("click", function () {
        if ( flag === 1) {
            menuToggle.innerHTML = '<ion-icon name="menu" id="open"></ion-icon>';
            navElems.style.height = "0vmax";
            navElems.style.padding = "0vmax";
            flag = 0;
        } else {
            menuToggle.innerHTML = '<ion-icon name="close" id="close"></ion-icon>'
            navElems.style.height = "40vmax";
            navElems.style.padding = "1.5vmax";
            flag = 1;
        }
    })
})