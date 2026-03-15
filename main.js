// Clock update
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('currentTime').textContent = hours + ':' + minutes;
}

updateTime();
setInterval(updateTime, 1000);

// Get elements
const playerFrame = document.getElementById('playerFrame');
const refreshBtn = document.getElementById('refreshBtn');
const reloadBtn = document.getElementById('reloadBtn');
const pipBtn = document.getElementById('pipBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const unmuteOverlay = document.getElementById('unmuteOverlay');
const unmuteBtn = document.getElementById('unmuteBtn');

// Stream URL with autoplay enabled
const streamUrlAutoplay = 'https://www.nbcnewyork.com/video-layout/amp_video/?noid=1:2:5351877&videoID=&origin=nbcnewyork.com&fullWidth=y&autoplay=true';

// Load stream when user clicks unmute button
unmuteBtn.addEventListener('click', function() {
    // Reload iframe with autoplay enabled after user interaction
    playerFrame.src = streamUrlAutoplay;
    
    // Hide the overlay
    setTimeout(function() {
        unmuteOverlay.classList.add('hidden');
    }, 300);
    
    // Small tip message
    console.log('Stream started! If you still don\'t hear audio, click the unmute button in the NBC player controls.');
});

// Refresh stream (soft reload)
refreshBtn.addEventListener('click', function() {
    const currentSrc = playerFrame.src;
    if (currentSrc) {
        playerFrame.src = '';
        setTimeout(function() {
            playerFrame.src = currentSrc;
        }, 100);
    } else {
        playerFrame.src = streamUrlAutoplay;
    }
    
    // Add visual feedback
    refreshBtn.style.transform = 'rotate(360deg)';
    setTimeout(function() {
        refreshBtn.style.transform = '';
    }, 600);
});

// Reload player (hard reload with timestamp)
reloadBtn.addEventListener('click', function() {
    playerFrame.src = streamUrlAutoplay + '&t=' + Date.now();
    
    // Add visual feedback
    reloadBtn.style.transform = 'rotate(-360deg)';
    setTimeout(function() {
        reloadBtn.style.transform = '';
    }, 600);
});

// Picture in Picture
pipBtn.addEventListener('click', function() {
    console.log('Picture-in-Picture: Due to cross-origin restrictions, PiP must be activated from within the NBC player controls.');
});

// Fullscreen
fullscreenBtn.addEventListener('click', function() {
    const playerWrapper = document.querySelector('.player-wrapper');
    
    if (!document.fullscreenElement) {
        playerWrapper.requestFullscreen().catch(function(err) {
            console.log('Error attempting to enable fullscreen:', err);
        });
    } else {
        document.exitFullscreen();
    }
});

// Add smooth rotation transition to refresh buttons
refreshBtn.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
reloadBtn.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';

// Show loading state when iframe is loading
playerFrame.addEventListener('load', function() {
    console.log('Player loaded successfully');
});