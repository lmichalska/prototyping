
var busbutton = document.getElementById("busbutton")
var trainbutton = document.getElementById("trainbutton")
var popupbus = document.getElementById("bus")
var popuptrain = document.getElementById("train")
var results = document.getElementById("resultbox")

busbutton.addEventListener("click", function(event){
    event.preventDefault();
    popuptrain.style.display = "none";
    popupbus.style.display = "block";
    results.style.display = "none";
});

trainbutton.addEventListener("click", function(event){
    event.preventDefault();
    popupbus.style.display = "none";
    popuptrain.style.display = "block";
    results.style.display = "none";
});
