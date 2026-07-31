// Wait for the browser to load our script completely
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab the button and tumbleweed elements from our HTML
    const colorButton = document.getElementById('colorButton');
    const tumbleweed = document.getElementById('tumbleweed');
    
    // Add a 'click' event listener to the button
    colorButton.addEventListener('click', () => {
        // If the tumbleweed is already rolling, reset it so it can trigger again
        tumbleweed.classList.remove('roll');
        
        // Force the browser to register the class removal using void offsetWidth
        void tumbleweed.offsetWidth;
        
        // Add the roll class to trigger the CSS animation
        tumbleweed.classList.add('roll');
        
        console.log('Button clicked! Tumbleweed rolling across the screen.');
    });
});
