let currentSlide = 0;

function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('opened');
    document.getElementById('invite').style.display = 'block';

    // Play background music
    const audio = document.getElementById('weddingMusic');
    audio.play().catch(error => console.log("Audio playback failed:", error));

    // Start the image carousel
    startCarousel();
}

function startCarousel() {
    const slides = document.querySelectorAll('#carousel img');
    const captions = document.querySelectorAll('#carousel .caption');
    slides.forEach(slide => slide.style.display = 'none');
    captions.forEach(caption => caption.style.display = 'none');

    function showSlide() {
        if (currentSlide < slides.length) {
            slides[currentSlide].style.display = 'block';
            captions[currentSlide].style.display = 'block';
        } else {
            document.getElementById('finalMessage').style.display = 'block';
            document.getElementById('inviteMessage').style.display = 'block';
            document.getElementById('rsvpBtn').style.display = 'block';
            document.getElementById('saveDate').style.display = 'block';
            return;
        }

        setTimeout(() => {
            slides[currentSlide].style.display = 'none';
            captions[currentSlide].style.display = 'none';
            currentSlide++;
            showSlide();
        }, 2500);
    }

    document.getElementById('carousel').style.display = 'block';
    showSlide();
}

// Swipe functionality
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

let xDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
    if (!xDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let xDiff = xDown - xUp;

    if (xDiff > 0) {
        nextSlide();
    } else {
        prevSlide();
    }

    xDown = null;
}

function nextSlide() {
    if (currentSlide < document.querySelectorAll('#carousel img').length - 1) {
        document.querySelectorAll('#carousel img')[currentSlide].style.display = 'none';
        document.querySelectorAll('#carousel .caption')[currentSlide].style.display = 'none';
        currentSlide++;
        document.querySelectorAll('#carousel img')[currentSlide].style.display = 'block';
        document.querySelectorAll('#carousel .caption')[currentSlide].style.display = 'block';
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        document.querySelectorAll('#carousel img')[currentSlide].style.display = 'none';
        document.querySelectorAll('#carousel .caption')[currentSlide].style.display = 'none';
        currentSlide--;
        document.querySelectorAll('#carousel img')[currentSlide].style.display = 'block';
        document.querySelectorAll('#carousel .caption')[currentSlide].style.display = 'block';
    }
}

function rsvp() {
    alert("Thank you for RSVPing! See you at the wedding!");
}
