document.addEventListener('DOMContentLoaded', function() {
    // Example: Add an active class to the current nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Optional: Form submission handling (if you add a contact form)
    // const contactForm = document.getElementById('contactForm');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
    //         alert('Thank you for your message! This is a placeholder. You would typically send this to a backend service.');
    //         // Here you would typically send form data to a server using fetch or XMLHttpRequest
    //     });
    // }

    // You can add more interactive elements here, like:
    // - Simple animations on scroll (using libraries or plain JS)
    // - Filtering projects
    // - A "back to top" button
});
const card = document.getElementById('myProfileCard');
const cardInner = document.getElementById('cardInner');
let clickTimer;

card.addEventListener('click', function(e) {
    // Clear existing timer
    clearTimeout(clickTimer);

    // Wait a moment to see if a second click happens
    clickTimer = setTimeout(() => {
        // SINGLE CLICK ACTION: Change Opacity / Zoom
        card.classList.toggle('is-active');
    }, 250); 
});

card.addEventListener('dblclick', function(e) {
    // Clear the single click timer so it doesn't run
    clearTimeout(clickTimer);

    // DOUBLE CLICK ACTION: Flip the card
    cardInner.classList.toggle('is-flipped');
});
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.getElementById('typing-text');
    
    // We split the text into parts so we can style the middle one
    const part1 = "I am a motivated ";
    const bluePart = "Software Developer";
    const part3 = " with a strong foundation in web development. I enjoy building responsive, user-friendly applications and solving real-world problems through clean, efficient code. I am continuously learning new technologies to grow professionally.";
    
    let i = 0;
    let j = 0;
    let k = 0;

    function type() {
        // Type Part 1
        if (i < part1.length) {
            typingElement.innerHTML += part1.charAt(i);
            i++;
            setTimeout(type, 30);
        } 
        // Type the Blue Part
        else if (j < bluePart.length) {
            if (j === 0) typingElement.innerHTML += `<strong style="color: #0d6efd;">`;
            
            // Find the strong tag and add text inside it
            const strongTag = typingElement.querySelector('strong');
            strongTag.innerHTML += bluePart.charAt(j);
            j++;
            setTimeout(type, 30);
        } 
        // Type Part 3
        else if (k < part3.length) {
            typingElement.innerHTML += part3.charAt(k);
            k++;
            setTimeout(type, 30);
        }
        else {
            // Stop cursor blinking or hide it when done
            document.querySelector('.typing-cursor').style.animation = "none";
            document.querySelector('.typing-cursor').style.opacity = "0";
        }
    }

    type();
});
