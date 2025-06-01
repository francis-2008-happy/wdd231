document.addEventListener('DOMContentLoaded', function () {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Display submitted information
    const confirmationContent = document.getElementById('confirmationContent');

    if (urlParams.has('firstName')) {
        confirmationContent.innerHTML = `
            <p><strong>Name:</strong> ${urlParams.get('firstName')} ${urlParams.get('lastName')}</p>
            <p><strong>Email:</strong> ${urlParams.get('email')}</p>
            <p><strong>Phone:</strong> ${urlParams.get('phone')}</p>
            <p><strong>Business Name:</strong> ${urlParams.get('businessName')}</p>
            <p><strong>Membership Level:</strong> ${getMembershipLevelName(urlParams.get('membershipLevel'))}</p>
            <p><strong>Application Submitted:</strong> ${new Date(urlParams.get('timestamp')).toLocaleString()}</p>
        `;
    } else {
        confirmationContent.innerHTML = '<p>No submission data found.</p>';
    }

    function getMembershipLevelName(level) {
        switch (level) {
            case 'np': return 'NP Membership (Non-Profit)';
            case 'bronze': return 'Bronze Membership';
            case 'silver': return 'Silver Membership';
            case 'gold': return 'Gold Membership';
            default: return 'Unknown';
        }
    }
});