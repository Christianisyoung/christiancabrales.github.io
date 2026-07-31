// Wait for the browser to load our script completely
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab the button element from our HTML using its ID
    const colorButton = document.getElementById('colorButton');
    
    // Define an array of fun background colors
    const colors = ['#ff7675', '#74b9ff', '#55efc4', '#ffeaa7', '#a29bfe'];
    
    // Add a 'click' event listener to the button
    colorButton.addEventListener('click', () => {
        // Pick a random color from our array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Change the background color of the card element
        const card = document.querySelector('.card');
        card.style.backgroundColor = randomColor;
        
        console.log('Button clicked! Card background changed to: ' + randomColor);
    });
});
