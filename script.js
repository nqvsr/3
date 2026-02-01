// Create falling stars
const starsContainer = document.getElementById('stars');

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random size
    const size = Math.random() * 3 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    
    // Random position
    star.style.left = Math.random() * 100 + '%';
    star.style.top = -10 + 'px';
    
    // Random animation duration
    const duration = Math.random() * 3 + 2;
    star.style.animationDuration = duration + 's';
    
    // Random delay
    star.style.animationDelay = Math.random() * 5 + 's';
    
    starsContainer.appendChild(star);
    
    // Remove after animation
    setTimeout(() => {
        star.remove();
    }, (duration + 5) * 1000);
}

// Create stars periodically
setInterval(createStar, 200);

// Create initial batch
for (let i = 0; i < 50; i++) {
    setTimeout(createStar, i * 100);
}