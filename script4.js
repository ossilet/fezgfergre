document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle dropdown menu visibility
    function toggleDropdownMenu(event) {
        var menu = this.nextElementSibling;
        menu.classList.toggle('show');
    }

    // Function to change the text of dropdown and navbar items
    function changeDropdownText(event) {
        event.preventDefault();
        var selectedLanguage = this.getAttribute('data-language');

        updateNavbarItems(selectedLanguage);

        var menu = this.parentElement.parentElement;
        menu.classList.remove('show');
    }

    // Function to update the text of navbar items based on language
    function updateNavbarItems(language) {
        var dropdownToggle = document.getElementById('dropdownMenuLink');

        if (language === 'français') {
            dropdownToggle.textContent = 'français';
            document.querySelector('.nav-item:nth-child(1) .nav-link').textContent = 'telephone';
            document.querySelector('.nav-item:nth-child(2) .nav-link').textContent = 'pc';
            document.querySelector('.nav-item:nth-child(3) .nav-link').textContent = 'casque';
        } else if (language === 'anglais') {
            dropdownToggle.textContent = 'anglais';
            document.querySelector('.nav-item:nth-child(1) .nav-link').textContent = 'phones';
            document.querySelector('.nav-item:nth-child(2) .nav-link').textContent = 'computer';
            document.querySelector('.nav-item:nth-child(3) .nav-link').textContent = 'headphones';
        }
    }

    // Function to update the counter value
    function updateCounter(event) {
        const button = event.target;
        const counter = button.closest('.product-info').querySelector('.counter-value');
        let currentValue = parseInt(counter.textContent, 10);

        if (button.classList.contains('plus')) {
            currentValue++;
        } else if (button.classList.contains('minus')) {
            if (currentValue > 0) currentValue--;
        }

        counter.textContent = currentValue;

        // Update the cart count and total
        const cartCount = document.getElementById('cart-count');
        if (button.classList.contains('plus')) {
            cartCount.textContent = parseInt(cartCount.textContent, 10) + 1;
        } else if (button.classList.contains('minus')) {
            if (currentValue >= 0) cartCount.textContent = parseInt(cartCount.textContent, 10) - 1;
        }
        updateCartTotal(); // Ensure the total is updated correctly
    }

    // Event listeners for dropdown toggle and dropdown item click
    document.querySelectorAll('.dropdown-toggle').forEach(function(element) {
        element.addEventListener('click', toggleDropdownMenu);
    });

    document.querySelectorAll('.dropdown-item').forEach(function(element) {
        element.addEventListener('click', changeDropdownText);
    });

    // Slideshow functionality
    let currentSlideIndex = 0;

    function showSlides() {
        const slides = document.querySelectorAll('.slides');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        currentSlideIndex++;
        if (currentSlideIndex > slides.length) { currentSlideIndex = 1 }
        slides[currentSlideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    function changeSlide(n) {
        const slides = document.querySelectorAll('.slides');
        currentSlideIndex += n;
        if (currentSlideIndex > slides.length) { currentSlideIndex = 1 }
        if (currentSlideIndex < 1) { currentSlideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[currentSlideIndex - 1].style.display = 'block';
    }

    // Initialize the slideshow
    showSlides();

    // Event listeners for slideshow navigation
    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(-1);
    });
    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(1);
    });

    // Event listeners for counter buttons
    document.querySelectorAll('.counter-btn').forEach(function(button) {
        button.addEventListener('click', updateCounter);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle dropdown menu visibility
    function toggleDropdownMenu(event) {
        var menu = this.nextElementSibling;
        menu.classList.toggle('show');
    }

    // Function to change the text of dropdown and navbar items
    function changeDropdownText(event) {
        event.preventDefault();
        var selectedLanguage = this.getAttribute('data-language');

        updateNavbarItems(selectedLanguage);

        var menu = this.parentElement.parentElement;
        menu.classList.remove('show');
    }

    // Function to update the text of navbar items based on language
    function updateNavbarItems(language) {
        var dropdownToggle = document.getElementById('dropdownMenuLink');

        if (language === 'français') {
            dropdownToggle.textContent = 'français';
            document.querySelector('.nav-item:nth-child(1) .nav-link').textContent = 'telephone';
            document.querySelector('.nav-item:nth-child(2) .nav-link').textContent = 'pc';
            document.querySelector('.nav-item:nth-child(3) .nav-link').textContent = 'casque';
        } else if (language === 'anglais') {
            dropdownToggle.textContent = 'anglais';
            document.querySelector('.nav-item:nth-child(1) .nav-link').textContent = 'phones';
            document.querySelector('.nav-item:nth-child(2) .nav-link').textContent = 'computer';
            document.querySelector('.nav-item:nth-child(3) .nav-link').textContent = 'headphones';
        }
    }

    // Function to update the counter value
    function updateCounter(event) {
        const button = event.target;
        const counter = button.closest('.product-info').querySelector('.counter-value');
        const cartCount = document.getElementById('cart-count');
        
        let currentValue = parseInt(counter.textContent, 10);

        if (button.classList.contains('plus')) {
            currentValue++;
            cartCount.textContent = parseInt(cartCount.textContent, 10) + 1; // Update cart count
        } else if (button.classList.contains('minus')) {
            if (currentValue > 0) {
                currentValue--;
                cartCount.textContent = parseInt(cartCount.textContent, 10) - 1; // Update cart count
            }
        }

        counter.textContent = currentValue;
    }

    // Event listeners for dropdown toggle and dropdown item click
    document.querySelectorAll('.dropdown-toggle').forEach(function(element) {
        element.addEventListener('click', toggleDropdownMenu);
    });

    document.querySelectorAll('.dropdown-item').forEach(function(element) {
        element.addEventListener('click', changeDropdownText);
    });

    // Slideshow functionality
    let currentSlideIndex = 0;

    function showSlides() {
        const slides = document.querySelectorAll('.slides');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        currentSlideIndex++;
        if (currentSlideIndex > slides.length) { currentSlideIndex = 1 }
        slides[currentSlideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    function changeSlide(n) {
        const slides = document.querySelectorAll('.slides');
        currentSlideIndex += n;
        if (currentSlideIndex > slides.length) { currentSlideIndex = 1 }
        if (currentSlideIndex < 1) { currentSlideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[currentSlideIndex - 1].style.display = 'block';
    }

    // Initialize the slideshow
    showSlides();

    // Event listeners for slideshow navigation
    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(-1);
    });
    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(1);
    });

    // Event listeners for counter buttons
    document.querySelectorAll('.counter-btn').forEach(function(button) {
        button.addEventListener('click', updateCounter);
    });
});

// Prices for each product
const productPrices = {
    'MacBook Air': 1599,
    'MSI Gaming Laptop': 899,
    'Asus Laptop': 849,
    'HP Laptop': 500,
    'Lenovo IdeaPad': 249
};

// Function to update the cart total
function updateCartTotal() {
    let cartTotal = 0;
    document.querySelectorAll('.product-item').forEach(function(productItem) {
        const productName = productItem.querySelector('.product-info h1').textContent;
        const quantity = parseInt(productItem.querySelector('.counter-value').textContent, 10);
        const price = productPrices[productName];
        cartTotal += price * quantity;
    });
    document.getElementById('cart-count').textContent = `$${cartTotal}`;
}

// Function to handle "Add to Cart" button click
function handleAddToCart(event) {
    const productItem = event.target.closest('.product-item');
    const counter = productItem.querySelector('.counter-value');
    const quantity = parseInt(counter.textContent, 10);
    
    if (quantity > 0) {
        // Update the cart total
        updateCartTotal();
    }
}

// Function to handle counter button clicks
function handleCounterChange(event) {
    const button = event.target;
    const counter = button.closest('.product-info').querySelector('.counter-value');
    let currentValue = parseInt(counter.textContent, 10);
    
    if (button.classList.contains('plus')) {
        currentValue++;
    } else if (button.classList.contains('minus')) {
        if (currentValue > 0) {
            currentValue--;
        }
    }

    counter.textContent = currentValue;

    // Update the cart total based on the counter change
    updateCartTotal();
}

// Event listeners for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(function(button) {
    button.addEventListener('click', handleAddToCart);
});

// Event listeners for counter buttons
document.querySelectorAll('.counter-btn').forEach(function(button) {
    button.addEventListener('click', handleCounterChange);
});
