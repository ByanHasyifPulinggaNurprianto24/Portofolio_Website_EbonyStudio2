let menu = document.querySelector('#design-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

const mainImage = document.querySelector('.main-home-image');
const sliderImages = document.querySelectorAll('.image-slider img');

sliderImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        const src = image.getAttribute('src');

        mainImage.classList.add('flip');

        setTimeout(() => {
            mainImage.src = src;
            mainImage.classList.remove('flip');
            mainImage.classList.add('show');

            setTimeout(() => {
                mainImage.classList.remove('show');
            }, 100);
        }, 100);
    });
});


document.getElementById('contactForm').onsubmit = function(event) {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.style.display = 'block';
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none';
    }
};

function checkSelection(selectElement) {
    if (selectElement.value) {
        selectElement.style.color = 'white'; 
    } else {
        selectElement.style.color = 'rgba(255, 255, 255, 0.647)';
    }
}

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});