const toggleCircle = document.getElementsByClassName('resources-toggle-circle')[0];
const toggleContainer = document.getElementsByClassName('resources-section-toggle') [0];
var toggleValue = "NE";
toggleCircle.addEventListener('click',()=>{
    if(toggleValue == "NE"){
        toggleContainer.classList.add("toggle-background");
        toggleCircle.classList.add("move-circle-right");
        toggleCircle.classList.remove("move-circle-left");
        toggleValue = "EN";
        toggleCircle.style.backgroundColor = "white";
        toggleContainer.style.color = "white";

    }
    else{
        toggleContainer.classList.remove("toggle-background");
        toggleCircle.style.backgroundColor = " #0a66c2";
        toggleContainer.style.color = "black";
        toggleCircle.classList.add("move-circle-left");
        toggleCircle.classList.remove("move-circle-right");
        toggleValue = "NE";
    }
    
})

new Splide( '.splide' ).mount();
