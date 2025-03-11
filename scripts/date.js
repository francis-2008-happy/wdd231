document.addEventListener('DOMContentLoaded', () => {
    // Set the current year for copyright
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    // Set the last modified date
    document.getElementById('lastModified').textContent = `Last Update: ${document.lastModified}`;
});