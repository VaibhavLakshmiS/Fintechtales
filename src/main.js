document.addEventListener('DOMContentLoaded', function() {
    
    const coinElement = document.getElementById('coinClickable');

    // Function to display the cards and the toolbar
    function displayCards() {
        // Hide the coin
        coinElement.style.display = 'none';
        
        // Display the project cards with a fade-in effect
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.style.transition = "opacity 1s ease-in-out";
            card.style.opacity = '1';
        });

        // Display the toolbar with a fade-in effect
        const toolbar = document.querySelector('.toolbar');
        toolbar.style.transition = "opacity 1s ease-in-out";
        toolbar.style.opacity = '1';
    }

    // Listen for a click on the coin
    coinElement.addEventListener('click', function() {
        displayCards();
    });

    // If the coin is not clicked, display the cards after the animation duration
    const coinAnimationDuration = 5000; // Adjust this to the duration of your coin's animation in milliseconds
    setTimeout(displayCards, coinAnimationDuration);
});
