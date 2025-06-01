// Set timestamp when page loads
document.addEventListener('DOMContentLoaded', function () {
    const now = new Date();
    document.getElementById('timestamp').value = now.toISOString();

    // Create membership cards
    const membershipCards = [
        {
            level: 'np',
            title: 'NP Membership',
            description: 'For non-profit organizations',
            fee: 'No fee'
        },
        {
            level: 'bronze',
            title: 'Bronze Membership',
            description: 'Basic business membership',
            fee: '$200/year'
        },
        {
            level: 'silver',
            title: 'Silver Membership',
            description: 'Enhanced business benefits',
            fee: '$400/year'
        },
        {
            level: 'gold',
            title: 'Gold Membership',
            description: 'Premium business advantages',
            fee: '$600/year'
        }
    ];

    const cardsContainer = document.querySelector('.membership-cards');

    membershipCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = `membership-card ${card.level}-card`;
        cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            <p><strong>${card.fee}</strong></p>
            <button class="info-btn" data-level="${card.level}">Learn More</button>
        `;
        cardsContainer.appendChild(cardElement);
    });

    // Modal functionality
    const modalBtns = document.querySelectorAll('.info-btn');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close');

    modalBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const level = this.getAttribute('data-level');
            document.getElementById(`${level}Modal`).style.display = 'block';
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            this.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
});

// Add to join.js
document.getElementById('joinForm').addEventListener('submit', function (e) {
    if (!this.checkValidity()) {
        e.preventDefault();
        // Show validation messages
    }
});