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
    { id: 1, farmName: 'Farm-1', ownerName: 'Pavan', location: 'Devathapuram', area: '13.5 Acr', syNo: '120' },
    { id: 2, farmName: 'Farm-1', ownerName: 'Prasanna', location: 'JR Palle', area: '3.5 Acr', syNo: '121' }
];

let assetData = [];

let cropData = [
    { id: 1, cropName: 'Lime', density: 100, plantsPerAcre: 350, variety: 'Sweet', planted: '2022-03-11', days: 560 }
];

let resourcesData = [
    { id: 1, name: 'Naresh', availableLocation: 'Simhadripuram', skill: 'Electrician-Motorpump-starter', type: 'Service', contactNo: '90000456789', rating: 'Good' },
    { id: 2, name: 'Sana', availableLocation: 'JR Palle', skill: 'Tractor-Plowing-Trolley-Watering-Spraying-Weed', type: 'Daily', contactNo: '92300456789', rating: 'Average' },
    { id: 3, name: 'Seenu', availableLocation: 'Devathapuram', skill: 'Pipeline and Pruning', type: 'Daily', contactNo: '92300456789', rating: 'Good' }
];

// Function to load Farm data
function loadFarmData() {
    const farmSection = document.getElementById('farmSection');
    const farmBody = document.getElementById('farmBody');
    if (farmSection && farmBody) {
        farmBody.innerHTML = '';
        farmData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.farmName}</td>
                <td>${item.ownerName}</td>
                <td>${item.location}</td>
                <td>${item.area}</td>
                <td>${item.syNo}</td>
                <td><a href="https://meebhoomi.ap.gov.in/" target="_blank">AP meeboomi</a></td>
            `;
            farmBody.appendChild(row);
        });
        farmSection.style.display = 'block';
    }
}

// Function to load Asset data
function loadAssetData() {
    const assetSection = document.getElementById('assetSection');
    const assetBody = document.getElementById('assetBody');
    if (assetSection && assetBody) {
        assetBody.innerHTML = '';
        assetData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.assetName}</td>
                <td>${item.type}</td>
                <td>${item.location}</td>
                <td>${item.status}</td>
            `;
            assetBody.appendChild(row);
        });
        assetSection.style.display = 'block';
    }
}

// Function to load Crop data
function loadCropData() {
    const cropSection = document.getElementById('cropSection');
    const cropBody = document.getElementById('cropBody');
    if (cropSection && cropBody) {
        cropBody.innerHTML = '';
        cropData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.cropName}</td>
                <td>${item.density}</td>
                <td>${item.plantsPerAcre}</td>
                <td>${item.variety}</td>
                <td>${item.planted}</td>
                <td>${item.days}</td>
            `;
            cropBody.appendChild(row);
        });
        cropSection.style.display = 'block';
    }
}

// Function to load Resources data
function loadResourcesData() {
    const resourcesSection = document.getElementById('resourcesSection');
    const resourcesBody = document.getElementById('resourcesBody');
    if (resourcesSection && resourcesBody) {
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
        resourcesSection.style.display = 'block';
    }
}

// Show data only when navigating to specific components
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('dashboard.html')) {
        const hash = window.location.hash;
        if (hash === '#farm') {
            loadFarmData();
        } else if (hash === '#asset') {
            loadAssetData();
        } else if (hash === '#crop') {
            loadCropData();
        } else if (hash === '#resources') {
            loadResourcesData();
        }
        // Hide all sections by default
        document.querySelectorAll('.data-display').forEach(section => {
            section.style.display = 'none';
        });
    }
});

// Add Farm data
document.getElementById('farmForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const farmName = document.getElementById('farmName').value;
    const ownerName = document.getElementById('ownerName').value;
    const location = document.getElementById('location').value;
    const area = document.getElementById('area').value;
    const syNo = document.getElementById('syNo').value;

    const newFarmEntry = {
        id: farmData.length + 1,
        farmName,
        ownerName,
        location,
        area,
        syNo
    };
    farmData.push(newFarmEntry);

    alert('Farm data added successfully!');
    window.location.href = 'dashboard.html#farm';
});

// Add Asset data
document.getElementById('assetForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const assetName = document.getElementById('assetName').value;
    const assetType = document.getElementById('assetType').value;
    const assetLocation = document.getElementById('assetLocation').value;
    const assetStatus = document.getElementById('assetStatus').value;

    const newAssetEntry = {
        id: assetData.length + 1,
        assetName,
        type: assetType,
        location: assetLocation,
        status: assetStatus
    };
    assetData.push(newAssetEntry);

    alert('Asset data added successfully!');
    window.location.href = 'dashboard.html#asset';
});

// Add Crop data
document.getElementById('cropForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const cropName = document.getElementById('cropName').value;
    const density = document.getElementById('density').value;
    const plantsPerAcre = document.getElementById('plantsPerAcre').value;
    const variety = document.getElementById('variety').value;
    const planted = document.getElementById('planted').value;
    const days = document.getElementById('days').value;

    const newCropEntry = {
        id: cropData.length + 1,
        cropName,
        density: parseInt(density),
        plantsPerAcre: parseInt(plantsPerAcre),
        variety,
        planted,
        days: parseInt(days)
    };
    cropData.push(newCropEntry);

    alert('Crop data added successfully!');
    window.location.href = 'dashboard.html#crop';
});

// Add Resources data
document.getElementById('resourcesForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const resourceName = document.getElementById('resourceName').value;
    const availableLocation = document.getElementById('availableLocation').value;
    const skill = document.getElementById('skill').value;
    const type = document.getElementById('type').value;
    const contactNo = document.getElementById('contactNo').value;
    const rating = document.getElementById('rating').value;

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

    alert('Resources data added successfully!');
    window.location.href = 'dashboard.html#resources';
});
