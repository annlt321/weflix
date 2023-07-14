
window.addEventListener("load", () =>{
    document.querySelector(".loader").classList.add("loader--hidden");
});

var video = document.getElementsByClassName("video")[0];
var button = document.getElementById("btt")

function playVideo() {
    button.addEventListener("click",()=> {
        document.querySelector(".content").classList.add("content--hidden")
    })
    
    video.play()
}





