function updateClock() {
    const clockContainer = document.getElementById('clock-container');
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    const dateString = currentTime.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

setInterval(updateClock, 1000);

updateClock();