const scrollButton = document.getElementById('scroll-button');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) { // Adjust this value as needed
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// // In this code, the button is initially hidden using CSS. As the user scrolls down, 
// an event listener on the window object checks the scroll position. 
// If the user has scrolled beyond a certain point (in this case, 200 pixels),
//  the button becomes visible. When the button is clicked, it smoothly scrolls the page to the top.
// // You can adjust the window.scrollY value and the height of your content in the CSS to control 
// when the button appears and disappears. Additionally, you can further style the button to match your website's design.





