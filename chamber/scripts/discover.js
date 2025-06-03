// Load attractions data and generate cards
document.addEventListener('DOMContentLoaded', function () {
    // Load attractions data
    fetch('data/attractions.json')
        .then(response => response.json())
        .then(data => {
            const attractions = data.attractions;
            const cardsContainer = document.getElementById('attractionCards');

            attractions.forEach(attraction => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
            <h2>${attraction.name}</h2>
            <figure>
              <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
            </figure>
            <address>${attraction.address}</address>
            <p>${attraction.description}</p>
            <button>Learn More</button>
          `;
                cardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading attractions:', error));

    // Handle last visit message
    const visitMessage = document.getElementById('visitMessage');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysSinceLastVisit === 1 ? "day" : "days";
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
        }
    }

    // Store current visit date
    localStorage.setItem('lastVisit', currentDate.toString());
});


