document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addStudentForm');
    const tableBody = document.getElementById('studentTableBody');
    const noDataMsg = document.getElementById('noDataMsg');

    // Pre-populate with default data if empty (for demonstration)
    initializeDefaultData();

    // Load existing students
    loadStudents();

    // Handle Form Submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const student = {
            id: document.getElementById('studentId').value,
            name: document.getElementById('studentName').value,
            course: document.getElementById('studentCourse').value,
            session: document.getElementById('studentSession').value,
            status: document.getElementById('studentStatus').value,
            timestamp: Date.now() // Unique key for deletion if ID isn't unique enough
        };

        saveStudent(student);
        form.reset();
        loadStudents();
    });
});

function initializeDefaultData() {
    if (!localStorage.getItem('collegeStudents')) {
        const defaultStudents = [
            { id: 'GC/23/MCA/001', name: 'Aarav Sharma', course: 'MCA', session: '2023-25', status: 'Active', timestamp: 1 },
            { id: 'GC/23/BCA/045', name: 'Priya Singh', course: 'BCA', session: '2023-26', status: 'Active', timestamp: 2 },
            { id: 'GC/22/MBA/012', name: 'Rahul Vermeer', course: 'MBA', session: '2022-24', status: 'Thesis Pending', timestamp: 3 },
            { id: 'GC/24/BSC/102', name: 'Neha Gupta', course: 'B.Sc (IT)', session: '2024-27', status: 'Active', timestamp: 4 }
        ];
        localStorage.setItem('collegeStudents', JSON.stringify(defaultStudents));
    }
}

function saveStudent(student) {
    let students = JSON.parse(localStorage.getItem('collegeStudents')) || [];
    students.unshift(student); // Add new student to the top
    localStorage.setItem('collegeStudents', JSON.stringify(students));
}

function loadStudents() {
    const students = JSON.parse(localStorage.getItem('collegeStudents')) || [];
    const tableBody = document.getElementById('studentTableBody');
    const noDataMsg = document.getElementById('noDataMsg');

    tableBody.innerHTML = '';

    if (students.length === 0) {
        noDataMsg.style.display = 'block';
        return;
    } else {
        noDataMsg.style.display = 'none';
    }

    students.forEach(student => {
        const row = document.createElement('tr');

        let statusClass = 'active-status';
        if (student.status === 'Thesis Pending') statusClass = 'pending-status';
        else if (student.status === 'Inactive') statusClass = 'inactive-status';

        row.innerHTML = `
            <td>${student.id}</td>
            <td><strong>${student.name}</strong></td>
            <td>${student.course}</td>
            <td>${student.session}</td>
            <td><span class="status-badge ${statusClass}">${student.status}</span></td>
            <td>
                <button onclick="deleteStudent(${student.timestamp})" class="action-btn" title="Delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteStudent(timestamp) {
    if (confirm('Are you sure you want to delete this student record?')) {
        let students = JSON.parse(localStorage.getItem('collegeStudents')) || [];
        students = students.filter(s => s.timestamp !== timestamp);
        localStorage.setItem('collegeStudents', JSON.stringify(students));
        loadStudents();
    }
}
