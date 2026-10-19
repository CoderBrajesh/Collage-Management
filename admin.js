document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('updateForm');
    const updatesList = document.getElementById('updatesList');
    const successMsg = document.getElementById('successMsg');

    // Load existing updates
    loadUpdates();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const content = document.getElementById('noticeContent').value;
        const type = document.getElementById('noticeType').value;

        let icon = '';
        let label = '';

        switch (type) {
            case 'admission': icon = '🔴'; label = 'Admission'; break;
            case 'exam': icon = '📢'; label = 'Exam Alert'; break;
            case 'event': icon = '🗓️'; label = 'Event'; break;
            default: icon = 'ℹ️'; label = 'Notice'; break;
        }

        const newUpdate = {
            id: Date.now(),
            content: content,
            type: type,
            icon: icon,
            label: label,
            date: new Date().toLocaleDateString()
        };

        saveUpdate(newUpdate);

        // Show success
        successMsg.style.display = 'block';
        form.reset();
        setTimeout(() => successMsg.style.display = 'none', 3000);

        // Reload list
        loadUpdates();
    });
});

function saveUpdate(update) {
    let updates = JSON.parse(localStorage.getItem('collegeUpdates')) || [];
    updates.unshift(update); // Add to top
    localStorage.setItem('collegeUpdates', JSON.stringify(updates));
}

function loadUpdates() {
    const updates = JSON.parse(localStorage.getItem('collegeUpdates')) || [];
    const list = document.getElementById('updatesList');
    list.innerHTML = '';

    if (updates.length === 0) {
        list.innerHTML = '<p style="color:#94a3b8; font-style:italic;">No custom updates posted yet.</p>';
        return;
    }

    updates.forEach(update => {
        const div = document.createElement('div');
        div.className = 'preview-item';
        div.innerHTML = `
            <div>
                <strong>${update.icon} ${update.label}:</strong> ${update.content}
                <br><small style="color:#64748b">${update.date}</small>
            </div>
            <button onclick="deleteUpdate(${update.id})" class="delete-btn">Delete</button>
        `;
        list.appendChild(div);
    });
}

function deleteUpdate(id) {
    let updates = JSON.parse(localStorage.getItem('collegeUpdates')) || [];
    updates = updates.filter(u => u.id !== id);
    localStorage.setItem('collegeUpdates', JSON.stringify(updates));
    loadUpdates();
}

function clearAllUpdates() {
    if (confirm('Are you sure you want to delete all custom updates?')) {
        localStorage.removeItem('collegeUpdates');
        loadUpdates();
    }
}
