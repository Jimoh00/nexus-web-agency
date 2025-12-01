gsap.registerPlugin(ScrollTrigger);


const menuBtn = document.getElementById("menuBtn");
const navBar = document.querySelector(".navbar");
const iconDiv = document.querySelector(".menu-icon");

menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("active");
});

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down & past 100px - hide navbar
        navbar.classList.add("hidden")
    } else {
        // Scrolling up - show navbar
        navbar.classList.remove("hidden")
    }
    
    lastScroll = currentScroll;
});


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navBar.classList.contains('active')) {
            navBar.classList.remove('active');
        }
    });
});


gsap.from(".main-header", {
    y: 15,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
});

gsap.from(".hero-text", {
    y: 15,
    opacity: 0,
    delay: 0.7,
    ease: "power2.out"
});

gsap.from(".card", {
    y: 45,
    opacity: 0,
    stagger: 0.2,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".service-section",
        start: "top 70%"
    }
});

gsap.from(".project-card", {
    y: 45,
    opacity: 0,
    delay: 0.2,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".work-section",
        start: "top 60%",
    }
});

gsap.from(".step-number", {
    y: "400px",
    opacity: 0,
    delay: 0.2,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".process-card",
        start: "top 40%",
    }
});

const testimonialWrapper = document.querySelector(".testimonial-wrapper");
const testimonialCards = document.querySelector(".testimonial-cards");

function initTestimonialScroll() {
    const scrollDistance = testimonialCards.scrollWidth - testimonialWrapper.clientWidth;
    
    ScrollTrigger.create({
        trigger: ".testimonial-section",
        start: "top top",
        pin: true,
        scrub: 1,
        end: () => `+=${scrollDistance}`,
        anticipatePin: 1,
        animation: gsap.to(testimonialCards, {
            x: -scrollDistance,
            ease: "none"
        })
    });
}

initTestimonialScroll();

// Reinit on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});