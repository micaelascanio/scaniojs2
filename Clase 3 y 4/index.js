/******************************
 *  VARIABLES 
 *****************************/

//Variable para LIGHTMODE




const lightMode = () => {
    $("body").css("background-color", "white")
    $("nav").css({
        "background-color": "white",
        "color": "grey",
    })
    $("div").css("background-color", "white")
    $("section").css("background-color", "white")
    $(".buttonC").css({
        "background-color": "white",
        "color": "grey",
    })

    localStorage.setItem("theme", "light")
}


//Variable para DARKMODE 


const darkMode = () => {
    $("body").css("background-color", "black")
    $("nav").css({
        "background-color": "black",
        "color": "white",
    })
    $("div").css({
        "background-color": "black",
        "color": "white",
    })
    $("section").css({
        "background-color": "black",
        "color": "white",
    })
    $(".buttonC").css({
        "background-color": "lightgrey",
        "color": "black",
    })

    localStorage.setItem("theme", "dark")
}



/******************************
 *   FUNCIONES 
 *****************************/

//Funcion para el DARKMODE

$("#darkModeButton").on("click", () => {

    if (localStorage.getItem("theme") == "dark") {
        lightMode()
    }
    else {
        darkMode()
    }
})