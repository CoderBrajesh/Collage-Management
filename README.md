# Gaya College Website

A responsive college website project for **Gaya College, Gaya**, designed to provide college information, admission resources, examination forms, student management, and administrative tools through a simple web interface.

## 📌 Project Overview

The Gaya College Website is a frontend web project built using HTML, CSS, and JavaScript. It provides students and visitors with access to college-related information, downloadable resources, admission registration forms, and examination forms.

The project also includes browser-based student management and an admin panel for managing website notices.

## ✨ Features

- **Home Page:** College introduction, highlights, statistics, and campus information.
- **About Us:** College history, administration, and campus facilities.
- **Admission Registration:** Form for submitting student admission details.
- **Examination Forms:** Separate forms for regular, compartmental, and vocational examinations.
- **Student Management:** Add, view, and manage student records.
- **Admin Panel:** Create and delete college notices and updates.
- **Admission Inquiries:** Page for viewing admission inquiry information.
- **Registrations Dashboard:** View saved admission registrations.
- **Downloads & Resources:** Access college documents, prospectus, and other resources.
- **Responsive Design:** Layout designed to adapt to desktop and mobile screens.
- **Interactive UI:** Mobile navigation, animated counters, and interactive forms.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- LocalStorage API
- Font Awesome
- Google Fonts

## 📂 Project Structure

```text
Collage/
├── index.html
├── about.html
├── registration.html
├── admin.html
├── manage_students.html
├── view_inquiries.html
├── view_registrations.html
├── downloads.html
├── style.css
├── script.js
├── registration.js
├── student.js
├── admin.js
├── logo.png
├── hero.png
├── gaya_campus.png
├── sports_india.jpg
├── forms/
│   ├── regular_exam_form.html
│   ├── compartmental_exam_form.html
│   └── vocational_exam_form.html
└── resources/
    ├── admission_manual.pdf
    ├── anti_ragging.pdf
    └── prospectus_2024.pdf
```

## 🚀 How to Run the Project

No Node.js installation or package installation is required for the basic frontend.

1. Download or clone this repository.
2. Extract the project files if downloaded as a ZIP.
3. Open the `Collage` folder.
4. Double-click `index.html` to open the website in your browser.

### Run with VS Code

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

The website will open in your browser.

## 💾 Data Storage

The current project uses browser LocalStorage for features such as student records, admission registrations, and custom college updates.

**Important:** LocalStorage stores data in the browser rather than in a central database. Data is not automatically shared between different users, browsers, or devices. Clearing browser data may also remove saved records.

## 🔐 Security & Production Notes

The current admin panel is a frontend demonstration and should not be considered a secure production administration system.

Before using this project for a real college, consider implementing:

- Backend APIs and a database.
- Secure administrator authentication and authorization.
- Server-side form validation.
- Secure storage and access controls for student information.
- Proper handling of admission inquiries and registration submissions.

## 🎯 Project Objectives

- Provide a central online platform for college information.
- Make admission and examination resources easier to access.
- Demonstrate frontend form handling and browser-based data storage.
- Create a foundation for a future full-stack college management system.

## 🔮 Future Enhancements

- Backend integration using Node.js and Express.
- Database integration using MongoDB or MySQL.
- Secure admin login.
- Online admission application tracking.
- Email notifications and confirmation messages.
- Search, filtering, and export for student records.
- Deployment on a public hosting platform.

## 👨‍💻 Author

**Vijay Kumar**

## 📄 License

This project is intended for educational and development purposes. Add an appropriate open-source license before permitting others to reuse or distribute the code.
