function updateCountdown() {
    const targetDate = new Date("2026-12-23T23:59:59");
    const now = new Date();

    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "Čas vypršel!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML = 
        `${days} dní ${hours} h ${minutes} m ${seconds} s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
