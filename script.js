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
let farmData = [
    { id: 1, farmName: 'Farm-1', ownerName: 'Pavan', location: 'Devathapuram', area: '13.5 Acr', syNo: '120', attachments: ['meebhoomi.pdf'] },
    { id: 2, farmName: 'Farm-1', ownerName: 'Prasanna', location: 'JR Palle', area: '3.5 Acr', syNo: '121', attachments: ['meebhoomi.pdf'] }
];

let resourcesData = [
    { id: 1, name: 'Naresh', availableLocation: 'Simhadripuram', skill: 'Electrician-Motorpump-starter', type: 'Service', contactNo: '90000456789', rating: 'Good' },
    { id: 2, name: 'Sana', availableLocation: 'JR Palle', skill: 'Tractor-Plowing-Trolley-Watering-Spraying-Weed', type: 'Daily', contactNo: '92300456789', rating: 'Average' },
    { id: 3, name: 'Seenu', availableLocation: 'Devathapuram', skill: 'Pipeline and Pruning', type: 'Daily', contactNo: '92300456789', rating: 'Good' }
];

// Display data in dashboard
function loadFarmData() {
    const farmBody = document.getElementById('farmBody');
    if (farmBody) {
        farmBody.innerHTML = '';
        farmData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.farmName}</td>
                <td>${item.ownerName}</td>
                <td>${item.location}</td>
                <td>${item.area}</td>
                <td>${item.syNo}</td>
                <td>${item.attachments.join(', ')}</td>
            `;
            farmBody.appendChild(row);
        });
    }
}

function loadResourcesData() {
    const resourcesBody = document.getElementById('resourcesBody');
    if (resourcesBody) {
        resourcesBody.innerHTML = '';
        resourcesData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.availableLocation}</td>
                <td>${item.skill}</td>
                <td>${item.type}</td>
                <td>${item.contactNo}</td>
                <td>${item.rating}</td>
            `;
            resourcesBody.appendChild(row);
        });
    }
}

// Add new data
document.getElementById('dataForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Farm Data
    const farmName = document.getElementById('farmName').value;
    const ownerName = document.getElementById('ownerName').value;
    const location = document.getElementById('location').value;
    const area = document.getElementById('area').value;
    const syNo = document.getElementById('syNo').value;
    const farmAttachments = Array.from(document.getElementById('farmAttachments').files).map(file => file.name);

    // Resources Data
    const resourceName = document.getElementById('resourceName').value;
    const availableLocation = document.getElementById('availableLocation').value;
    const skill = document.getElementById('skill').value;
    const type = document.getElementById('type').value;
    const contactNo = document.getElementById('contactNo').value;
    const rating = document.getElementById('rating').value;
    const resourceAttachments = Array.from(document.getElementById('resourceAttachments').files).map(file => file.name);

    // Add Farm Data
    const newFarmEntry = {
        id: farmData.length + 1,
        farmName,
        ownerName,
        location,
        area,
        syNo,
        attachments: farmAttachments
    };
    farmData.push(newFarmEntry);

    // Add Resources Data
    const newResourceEntry = {
        id: resourcesData.length + 1,
        name: resourceName,
        availableLocation,
        skill,
        type,
        contactNo,
        rating
    };
    resourcesData.push(newResourceEntry);

    alert('Data added successfully!');
    window.location.href = 'dashboard.html';
});

// Load data when dashboard page is loaded
if (window.location.pathname.includes('dashboard.html')) {
    loadFarmData();
    loadResourcesData();
}
