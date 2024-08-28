document.addEventListener('DOMContentLoaded', function() {
    function toggleDropdownMenu(event) {
        var menu = this.nextElementSibling;
        menu.classList.toggle('show'); 
    }

    function changeDropdownText(event) {
        event.preventDefault(); 
        var selectedLanguage = this.getAttribute('data-language'); 

        updateNavbarItems(selectedLanguage);

        var menu = this.parentElement.parentElement;
        menu.classList.remove('show');
    }

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

    document.querySelectorAll('.dropdown-toggle').forEach(function(element) {
        element.addEventListener('click', toggleDropdownMenu);
    });

    document.querySelectorAll('.dropdown-item').forEach(function(element) {
        element.addEventListener('click', changeDropdownText);
    });

    let currentSlideIndex = 0;

    function showSlides() {
        const slides = document.querySelectorAll('.slides');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';  
        }
        currentSlideIndex++;
        if (currentSlideIndex > slides.length) { currentSlideIndex = 1 }    
        slides[currentSlideIndex - 1].style.display = 'block';  
        setTimeout(showSlides, 3000); 
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

    showSlides();

    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(-1);
    });
    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(1);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    function toggleDropdownMenu(event) {
        var menu = this.nextElementSibling;
        menu.classList.toggle('show'); 
    }

    function changeDropdownText(event) {
        event.preventDefault(); 
        var selectedLanguage = this.getAttribute('data-language'); 

        updateNavbarItems(selectedLanguage);

        var menu = this.parentElement.parentElement;
        menu.classList.remove('show');
    }

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

    document.querySelectorAll('.dropdown-toggle').forEach(function(element) {
        element.addEventListener('click', toggleDropdownMenu);
    });

    document.querySelectorAll('.dropdown-item').forEach(function(element) {
        element.addEventListener('click', changeDropdownText);
    });

    let currentSlideIndex = 0;

    function showSlides() {
        const slides = document.querySelectorAll('.slides');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';  
        }
        currentSlideIndex++;
        if (currentSlideIndex > slides.length) { currentSlideIndex = 1 }    
        slides[currentSlideIndex - 1].style.display = 'block';  
        setTimeout(showSlides, 3000); 
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

    showSlides();

    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(-1);
    });
    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(1);
    });

    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Redirect to another page after form submission
        window.location.href = 'thankyou.html'; // Change 'thankyou.html' to your desired page
    });
});