// window.onload = function() {
//     const coin = document.querySelector('.coin img'); // Adjusted the selector to target the image inside the .coin div
//     const cardContainer = document.querySelector('.card-container');

//     setTimeout(() => {
//         // After 8 seconds, hide the coin and display the cards
//         coin.style.visibility = 'hidden'; // Using visibility property to hide it
//         cardContainer.style.transition = "opacity 1s ease-in-out";
//         cardContainer.style.opacity = '1';
//     }, 5000); // Wait for 8 seconds (2s drop + 6s spin)
// };
// console.log("Script loaded");

// window.onload = function() {
//     const coin = document.querySelector('.coin img');
//     const toolbar = document.querySelector('.toolbar');

//     // Function to zoom out the coin and move it to the toolbar
//     function moveCoinToToolbar() {
//         coin.style.transition = 'all 2s ease';
//         coin.style.transform = 'scale(0.2) translate(-50%, -50%)';  // Zoom out the coin
//         coin.style.top = '30px';  // Position it to the toolbar height
//         coin.style.left = '15px'; // Position it to the left side of the toolbar
//     }

//     // Function to hide the big coin and show the toolbar after the zoom out effect
//     function showToolbar() {
//         coin.style.display = 'none';   // Hide the big coin
//         toolbar.style.opacity = '1';   // Show the toolbar
//     }

//     // Set a timeout for the coin's movement after your desired initial animations
//     setTimeout(() => {
//         moveCoinToToolbar();

//         // After the coin zooms out and moves to the toolbar position, show the toolbar
//         setTimeout(showToolbar, 2000);  // 2 seconds for zoom out

//     }, 5000);  // Adjust this time based on your previous animations (e.g., spin duration)
// };


window.onload = function() {
    const coin = document.querySelector('.coin img');
    const toolbar = document.querySelector('.toolbar');

    // Function to zoom out the coin and move it directly to the toolbar's vertical position
    function moveCoinToToolbar() {
        coin.style.transition = 'all 2s ease';
        coin.style.transform = 'scale(0.2) translate(-50%, -50%)';  // Zoom out the coin
        coin.style.top = '30px';  // Move it to the toolbar height
    }

    // Function to hide the big coin and show the toolbar after the zoom out effect
    function showToolbar() {
        coin.style.display = 'none';   // Hide the big coin
        toolbar.style.opacity = '1';   // Show the toolbar
    }

    // Set a timeout for the coin's movement after your desired initial animations
    setTimeout(() => {
        moveCoinToToolbar();

        // After the coin zooms out and moves to the toolbar position, show the toolbar
        setTimeout(showToolbar, 2000);  // 2 seconds for zoom out

    }, 5000);  // Adjust this time based on your previous animations (e.g., spin duration)
};
