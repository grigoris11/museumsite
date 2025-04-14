function startExperience() {
    const welcome = document.querySelector('.vr-start-wrapper');
    const panorama = document.getElementById('panorama');

    if (welcome) welcome.style.display = 'none';
    if (panorama) {
        panorama.style.display = 'block';
        panorama.style.position = 'fixed';
        panorama.style.top = '0';
        panorama.style.left = '0';
        panorama.style.width = '100vw';
        panorama.style.height = '100vh';
        panorama.style.zIndex = '10';
    }

    history.pushState({ vrStarted: true }, '');
    window.viewer = pannellum.viewer('panorama', window.tourConfig);
}

window.addEventListener('popstate', function (event) {
    const welcome = document.querySelector('.vr-start-wrapper');
    const panorama = document.getElementById('panorama');

    if (!event.state || !event.state.vrStarted) {
        if (welcome) welcome.style.display = 'block';
        if (panorama) {
            panorama.style.display = 'none';
            panorama.removeAttribute('style'); // reset fullscreen styles
        }

        // 👇 Optional: redirect to another page (like home)
        window.location.href = "vr-tour.html";
    }
});

let currentIndex = 0;
let imageElements = [];

function openModal(src) {
    imageElements = Array.from(document.querySelectorAll('.image-wall img'));
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalContent");

    currentIndex = imageElements.findIndex(img => img.getAttribute('onclick')?.includes(src));

    modalImg.src = src;
    modal.classList.add("active");
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.classList.remove("active");
    document.body.style.overflow = '';
}

function changeImage(direction) {
    if (imageElements.length === 0) return;

    currentIndex = (currentIndex + direction + imageElements.length) % imageElements.length;

    const newSrcMatch = imageElements[currentIndex].getAttribute('onclick').match(/'([^']+)'/);
    if (newSrcMatch) {
        const newSrc = newSrcMatch[1];
        document.getElementById("modalContent").src = newSrc;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // DOM ready
});

