document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loveForm');
    const resultsContainer = document.getElementById('resultsContainer');
    const matchResults = document.getElementById('matchResults');

    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.toString()) {
        form.classList.add('hidden');
        resultsContainer.classList.remove('hidden');

        matchResults.innerHTML = `
            <h2>${escapeHtml(urlParams.get('name') || 'No name provided')}</h2>
            <p><strong>Age:</strong> ${escapeHtml(urlParams.get('age') || 'Not specified')}</p>
            <p><strong>Ward/Branch:</strong> ${escapeHtml(urlParams.get('ward') || 'Not specified')}</p>
            <p><strong>Gender:</strong> ${urlParams.get('gender') === 'male' ? 'Brother' : 'Sister'}</p>
            <h3>Interests/Hobbies</h3>
            <p>${escapeHtml(urlParams.get('interests') || 'Not specified')}</p>
            <h3>Looking For In A Partner</h3>
            <p>${escapeHtml(urlParams.get('qualities') || 'Not specified')}</p>
            <p>Your profile has been submitted to our matchmaking system. We'll notify you when we find compatible matches!</p>
            <a href="find_love.html">Create New Profile</a>
        `;
    }

    function escapeHtml(unsafe) {
        return unsafe ? unsafe.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;") : '';
    }
});
