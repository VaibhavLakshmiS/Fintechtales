window.onload = function() {
    const coin = document.querySelector('.coin');
    const cardContainer = document.querySelector('.card-container');

    // Drop the coin
    coin.style.top = "calc(50% - 50px)"; // Adjust for coin's size

    setTimeout(() => {
        // Start spinning after the coin has dropped
        coin.style.transition = "transform 5s linear";
        coin.style.transform = "rotateY(360deg)";

        setTimeout(() => {
            // Fade out coin and show cards after spinning
            coin.style.opacity = '0';
            cardContainer.style.transition = "opacity 1s ease-in-out";
            cardContainer.style.opacity = '1';
        }, 5000); // Wait 5 seconds
    }, 2000); // Wait for the 2-second fall
};
