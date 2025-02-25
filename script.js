// Login Functionality
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (for demo purposes)
    if (username === 'admin' && password === 'password') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials!');
    }
});

// Sample data storage (in memory for demo)
let agriData = [
    { id: 1, cropName: 'Wheat', yield: 500, date: '2025-01-15', attachments: ['wheat.jpg'] },
    { id: 2, cropName: 'Rice', yield: 700, date: '2025-02-01', attachments: ['rice.pdf'] }
];

// Display data in dashboard
function loadData() {
    const dataBody = document.getElementById('dataBody');
    if (dataBody) {
        dataBody.innerHTML = '';
        agriData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.cropName}</td>
                <td>${item.yield}</td>
                <td>${item.date}</td>
                <td>${item.attachments.join(', ')}</td>
            `;
            dataBody.appendChild(row);
        });
    }
}

// Add new data
document.getElementById('dataForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const cropName = document.getElementById('cropName').value;
    const yieldValue = document.getElementById('yield').value;
    const date = document.getElementById('date').value;
    const attachments = Array.from(document.getElementById('attachments').files).map(file => file.name);

    const newEntry = {
        id: agriData.length + 1,
        cropName,
        yield: parseInt(yieldValue),
        date,
        attachments
    };

    agriData.push(newEntry);
    alert('Data added successfully!');
    window.location.href = 'dashboard.html';
});

// Load data when dashboard page is loaded
if (window.location.pathname.includes('dashboard.html')) {
    loadData();
}
