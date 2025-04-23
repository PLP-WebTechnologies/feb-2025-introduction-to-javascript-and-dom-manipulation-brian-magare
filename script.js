// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Change Text Content Dynamically
    const heroTitle = document.querySelector('.hero-content h2');
    if (heroTitle) {
        heroTitle.textContent = "Discover the Beauty of Maasai Craftsmanship";
    }

    // 2. Modify CSS Styles via JavaScript
    const nav = document.querySelector('nav');
    if (nav) {
        nav.style.backgroundColor = '#f0f0f0'; // Change nav background color
        nav.style.padding = '10px 0'; // Add padding
    }

    // 3. Add or Remove an Element When a Button is Clicked
    const aboutSection = document.getElementById('about');
    const newElementButton = document.createElement('button');
    newElementButton.textContent = 'Add Information';
    newElementButton.classList.add('btn'); // Use existing button style

    newElementButton.addEventListener('click', () => {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = "This is a new paragraph added dynamically using JavaScript!";
        aboutSection.querySelector('.about-content').appendChild(newParagraph);
        newElementButton.remove(); // Remove the button after click
    });

    aboutSection.appendChild(newElementButton);


    // --- Advanced/Additional (Beyond the minimal requirements) ---
    // Example: Cart functionality (using existing HTML structure)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountSpan = document.querySelector('.cart-count');
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountSpan.textContent = cartCount;
            button.style.backgroundColor = 'green'; // Visual feedback
            button.textContent = 'Added!';

            // Optional:  Revert button style after a short time
            setTimeout(() => {
                button.style.backgroundColor = '';
                button.textContent = 'Add to Cart';
            }, 1500);
        });
    });


    // Example:  Change image source on hover (for fun)
    const productImages = document.querySelectorAll('.product-image img');
    productImages.forEach(img => {
        const originalSrc = img.src;
        const newSrc = img.src.replace('images/', 'images/alt/'); // Assuming you have 'alt' versions

        img.addEventListener('mouseover', () => {
            if (newSrc !== img.src && newSrc.indexOf('alt/') > -1) { // Check if newSrc is valid
                img.src = newSrc;
            }
        });

        img.addEventListener('mouseout', () => {
            img.src = originalSrc;
        });
    });

});