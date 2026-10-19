document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });

    // Stats Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace('+', '').replace('%', ''); // Clean current text if needed

                // Lower inc to slow and higher to slow
                const inc = target / speed;

                if (count < target) {
                    // Check if it's percentage or just number
                    if (counter.getAttribute('data-target').includes('%')) {
                        counter.innerText = Math.ceil(count + inc) + "%";
                    } else {
                        counter.innerText = Math.ceil(count + inc) + "+";
                    }

                    setTimeout(updateCount, 20);
                } else {
                    if (counter.getAttribute('data-target').includes('%')) {
                        counter.innerText = target + "%";
                    } else {
                        counter.innerText = target + "+";
                    }
                }
            };
            updateCount();
        });
    }

    // Intersection Observer to trigger counter animation when in view
    let counterSection = document.querySelector('.stats');
    let options = {
        rootMargin: '0px',
        threshold: 0.5
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, options);

    if (counterSection) {
        observer.observe(counterSection);
    }

    // Automatic Date Update for News Ticker
    /* 
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
        const today = new Date();
        // Displays like: "Mon, Dec 23, 2025" - Automatically updates every day
        dateElement.innerText = "Updates: " + today.toLocaleDateString('en-US', options);
    }
    */

    // Dynamic Content Loader (From Admin Panel)
    const tickerContent = document.querySelector('.ticker-content');
    if (tickerContent) {
        const updates = JSON.parse(localStorage.getItem('collegeUpdates')) || [];

        // Reverse loop to keep latest first if we prepend, but standard array is usually oldest first? 
        // In admin.js we unshifted, so index 0 is newest.
        // We want newest to appear first in the ticker (leftmost).
        // Since it's a marquee-like effect or just a list, let's prepend them.

        updates.slice().reverse().forEach(update => { // Reverse to maintain order when prepending
            const span = document.createElement('span');
            span.className = 'ticker-item';
            span.innerHTML = `${update.icon} <strong>${update.label}:</strong> ${update.content}`;
            span.style.backgroundColor = '#fff7ed'; // Highlight custom updates
            span.style.borderLeft = '3px solid var(--secondary-color)';

            // Insert after the first item (if we want to keep the hardcoded "Admission Open" first? 
            // Or just prepend to be the very first thing).
            // Let's prepend to be the very first thing the user sees.
            tickerContent.insertBefore(span, tickerContent.firstChild);
        });
    }

    // Inquiry Form Handling (Homepage)
    const inquiryForm = document.querySelector('.inquiry-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const course = document.getElementById('course').value;
            const message = document.getElementById('message').value;

            const inquiryData = {
                id: Date.now(),
                date: new Date().toLocaleDateString(),
                name, email, phone, course, message
            };

            let inquiries = JSON.parse(localStorage.getItem('collegeInquiries')) || [];
            inquiries.unshift(inquiryData);
            localStorage.setItem('collegeInquiries', JSON.stringify(inquiries));

            alert(`Thank you, ${name}! Your inquiry has been sent. Redirecting to view submitted data...`);
            inquiryForm.reset();
            window.location.href = 'view_inquiries.html';
        });
    }
});
