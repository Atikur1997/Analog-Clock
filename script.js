window.onload = function () {
    setInterval(() => {
        let date = new Date();
        let hours = date.getHours();
        let minute = date.getMinutes();
        let seconds = date.getSeconds();
        let hrotation = 30 * hours + minute / 2;
        let mrotation = 6 * minute;
        let srotation = 6 * seconds;

        let hour = document.getElementById("hour");
        let minutes = document.getElementById("minutes");
        let second = document.getElementById("seconds");

        if (hour && minutes && second) {
            hour.style.transform = `rotate(${hrotation}deg)`;
            minutes.style.transform = `rotate(${mrotation}deg)`;
            second.style.transform = `rotate(${srotation}deg)`;
        }
    }, 1000);
};
