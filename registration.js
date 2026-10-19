document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Gather Data
            const formData = {
                id: Date.now(),
                appliedDate: new Date().toLocaleDateString(),
                courseType: document.getElementById('course-type').value,
                courseName: document.getElementById('course-name').value,
                firstName: document.getElementById('first-name').value,
                lastName: document.getElementById('last-name').value,
                dob: document.getElementById('dob').value,
                gender: document.getElementById('gender').value,
                category: document.getElementById('category').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                fatherName: document.getElementById('father-name').value,
                city: document.getElementById('city').value
            };

            // Save to LocalStorage
            let registrations = JSON.parse(localStorage.getItem('studentRegistrations')) || [];
            registrations.unshift(formData);
            localStorage.setItem('studentRegistrations', JSON.stringify(registrations));

            // Success & Redirect
            alert('Application Submitted Successfully! Redirecting to status page...');
            window.location.href = 'view_registrations.html';
        });
    }
});
