document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.toString()) {
        document.getElementById('loveForm').classList.add('hidden');
        document.getElementById('resultsContainer').classList.remove('hidden');

        const resultsDiv = document.getElementById('matchResults');
        resultsDiv.innerHTML = `
            <div class="match-result">
                <h3>${urlParams.get('name') || 'No name provided'}, ${urlParams.get('age') || ''}</h3>
                <p><strong>Ward/Branch:</strong> ${urlParams.get('ward') || 'Not specified'}</p>
                <p><strong>Gender:</strong> ${urlParams.get('gender') === 'male' ? 'Brother' : 'Sister'}</p>
                <p><strong>Interests:</strong> ${urlParams.get('interests') || 'Not specified'}</p>
                <p><strong>Looking for:</strong> ${urlParams.get('qualities') || 'Not specified'}</p>
            </div>
            <p>Your profile has been submitted to our matchmaking system. We'll notify you when we find compatible matches!</p>
            <button onclick="window.location.href='find-love.html'">Create Another Profile</button>
        `;
    }
});