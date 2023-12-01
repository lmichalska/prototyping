function updateDateTime() {
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");
    const now = new Date();
  
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  
    const formattedDate = now.toLocaleString('dk-DK', dateOptions);
    const formattedTime = now.toLocaleTimeString('dk-DK', timeOptions);
  
    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
  }
  
  setInterval(updateDateTime, 1000);
  
  updateDateTime();
  
