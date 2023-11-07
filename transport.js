const openButtonBus = document.getElementById('openButtonBus');
const popupContainer = document.getElementById('popupContainer');

openButtonBus.addEventListener('click', () => {
    popupContainer.style.display = 'flex'; 
});

document.addEventListener('click', (event) => {
    if(event.target !== popupContainer && !popupContainer.contains(event.target) && event.target !== openButtonBus) {
    popupContainer.style.display='none'
    }
})