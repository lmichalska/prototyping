/* popup message on contact */

var popupLink = document.getElementById("popup-link")
var popupChip = document.getElementById("popup")
var popupClose = document.getElementById("popup2")
var chip = document.getElementById("scan")
var close = document.getElementById("close")
var exit = document.getElementById("exit")


popupLink.addEventListener("click", function(event){
    event.preventDefault();
    popupChip.style.display = "block";
    document.getElementsByClassName('blur')[0].style.display="block";
});

chip.addEventListener("click", function() {
    popupChip.style.display = "none";
    document.getElementsByClassName('blur')[0].style.display="none";
});

chip.addEventListener("click", function(event){
    event.preventDefault();
    popupClose.style.display = "block";
    document.getElementsByClassName('blur')[0].style.display="block";
});

close.addEventListener("click", function() {
    popupClose.style.display = "none";
    document.getElementsByClassName('blur')[0].style.display="none";
}); 

exit.addEventListener("click", function() {
    popup.style.display = "none";
    document.getElementsByClassName('blur')[0].style.display="none";
}); 

