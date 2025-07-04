// ES Module: Data Service
class MemoryDataService {
    constructor() {
        this.storageKey = 'ysaMemories';
    }

    // Simulate external API data
    getMockMemories() {
        return [
            {
                id: 1,
                title: "First YSA Beach Activity",
                date: "2024-03-15",
                category: "Activity",
                author: "Sarah Johnson",
                description: "What an amazing day at Tarkwa Bay! We had volleyball, swimming, and the most incredible sunset devotional. The spirit was so strong as we shared testimonies by the beach. This was truly a day I'll never forget - seeing everyone come together in fellowship and fun.",
                location: "Tarkwa Bay",
                attendees: 45
            },
            {
                id: 2,
                title: "Temple Trip Spiritual Experience",
                date: "2024-02-28",
                category: "Spiritual",
                author: "Michael Adebayo",
                description: "Our temple trip to Aba was life-changing. The peace I felt in the temple was indescribable. We had powerful discussions on the bus ride about eternal families and covenants. Sister Williams shared such a beautiful testimony about her conversion story.",
                location: "Aba Nigeria Temple",
                attendees: 32
            },
            {
                id: 3,
                title: "Service Project at Orphanage",
                date: "2024-04-10",
                category: "Service",
                author: "Grace Okafor",
                description: "Serving at the Sunshine Orphanage reminded me why service is so important. The children's faces lit up when we brought school supplies and played games with them. We also helped repair their playground equipment. The joy we brought to those kids was nothing compared to what they gave us in return.",
                location: "Sunshine Orphanage, Lekki",
                attendees: 28
            },
            {
                id: 4,
                title: "Monthly Game Night Victory",
                date: "2024-01-20",
                category: "Activity",
                author: "David Ogundimu",
                description: "Game night was epic! We played everything from Monopoly to charades. The highlight was definitely the scripture trivia competition. Brother Emmanuel's team somehow knew every obscure Book of Mormon reference. We laughed until our sides hurt and strengthened friendships.",
                location: "Lekki Stake Center",
                attendees: 38
            },
            {
                id: 5,
                title: "Testimony Meeting Miracle",
                date: "2024-05-05",
                category: "Spiritual",
                author: "Blessing Okoro",
                description: "During fast and testimony meeting, the Spirit was incredibly strong. Three people shared conversion stories, and there wasn't a dry eye in the room. Sister Peace talked about finding the church through the missionaries, and how it changed her entire family's trajectory. Such powerful testimonies of God's love.",
                location: "Lekki Ward Chapel",
                attendees: 52
            },
            {
                id: 6,
                title: "Cooking Class Cultural Exchange",
                date: "2024-03-30",
                category: "Activity",
                author: "Chioma Nwachuku",
                description: "Our international cooking class was amazing! We learned to make jollof rice, amala, and even tried some American dishes. The missionaries taught us how to make cookies, and we taught them proper pepper soup technique. Food really does bring people together across cultures.",
                location: "Cultural Hall",
                attendees: 25
            },
            {
                id: 7,
                title: "Career Development Workshop",
                date: "2024-04-25",
                category: "Development",
                author: "Emmanuel Taiwo",
                description: "The career workshop with industry professionals was incredibly valuable. We learned about networking, interviewed skills, and even had mock interviews. Sister Adunni from the tech industry gave amazing advice about breaking into technology careers. Many of us left with clear action plans.",
                location: "Stake Center Conference Room",
                attendees: 41
            },
            {
                id: 8,
                title: "Scripture Study Marathon",
                date: "2024-02-14",
                category: "Spiritual",
                author: "Peace Akinola",
                description: "Valentine's Day scripture study was the perfect way to show love for the Savior. We spent 4 hours going through the entire book of John, discussing Christ's love and sacrifice. The insights shared were profound, and I felt my testimony of Jesus Christ grow stronger with each chapter.",
                location: "Various Homes (Virtual)",
                attendees: 33
            },
            {
                id: 9,
                title: "Sports Day Championship",
                date: "2024-05-18",
                category: "Activity",
                author: "Joseph Adeniyi",
                description: "Sports day was competitive but so fun! We had football, basketball, and track events. The relay race was intense - Team Nephi barely beat Team Moroni at the finish line. Even those who didn't compete were amazing cheerleaders. Great way to build unity through healthy competition.",
                location: "Lekki Sports Complex",
                attendees: 56
            },
            {
                id: 10,
                title: "Pioneer Day Celebration",
                date: "2024-07-24",
                category: "Cultural",
                author: "Ruth Adeolu",
                description: "Learning about pioneer heritage was inspiring. We shared stories of modern-day pioneers - members who were first in their families to join the church. The parallels between the Utah pioneers and our own faith journeys were remarkable. We ended with traditional pioneer games and activities.",
                location: "Stake Center Grounds",
                attendees: 47
            },
            {
                id: 11,
                title: "Missionary Farewell Program",
                date: "2024-06-02",
                category: "Spiritual",
                author: "Hannah Ojo",
                description: "Elder Adebisi's farewell was both sad and exciting. His talk about courage to serve touched everyone's hearts. We presented him with a photo album of YSA memories and letters from each member. Watching him receive his mission call to Ghana was a highlight - the Spirit confirmed this was God's will.",
                location: "Lekki Ward Chapel",
                attendees: 63
            },
            {
                id: 12,
                title: "Community Garden Project",
                date: "2024-08-12",
                category: "Service",
                author: "Samuel Ogbonna",
                description: "Starting the community garden has been rewarding. We're growing vegetables to donate to local families in need. Working in the soil while discussing gospel principles created unique bonding experiences. Sister Mary's knowledge of traditional farming techniques impressed everyone. This project will feed both bodies and souls.",
                location: "Community Garden Site",
                attendees: 29
            },
            {
                id: 13,
                title: "Book Club Discussion",
                date: "2024-09-07",
                category: "Development",
                author: "Esther Bamidele",
                description: "Our book club discussion of 'Jesus the Christ' was incredibly enlightening. Each chapter sparked deep conversations about the Savior's mission and attributes. Brother John's insights about the Atonement brought new understanding to familiar scriptures. Reading together has strengthened our testimonies and friendships.",
                location: "Various Locations",
                attendees: 22
            },
            {
                id: 14,
                title: "Christmas Service Project",
                date: "2024-12-15",
                category: "Service",
                author: "Mary Oluwaseun",
                description: "Adopting families for Christmas was the best way to celebrate the season. We provided gifts, food, and most importantly, hope to 8 families. Seeing children's faces when they received new clothes and toys reminded us of God's love for all His children. This is what Christmas is really about.",
                location: "Various Family Homes",
                attendees: 44
            },
            {
                id: 15,
                title: "New Year Goal Setting Retreat",
                date: "2025-01-03",
                category: "Development",
                author: "Daniel Okwu",
                description: "Our goal-setting retreat set the tone for an amazing year. We used gospel principles to create meaningful, spiritual goals. The accountability partnerships formed will help us stay on track. Breaking into small groups allowed for personal sharing about hopes and dreams. Everyone left feeling motivated and supported.",
                location: "Retreat Center, Epe",
                attendees: 39
            }
        ];
    }

    // Data fetching with error handling
    async fetchMemories() {
        try {
            // Fetch from JSON file
            const response = await fetch('./memories.json');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const memories = data.memories;

            // Save to local storage
            this.saveToLocalStorage(memories);
            return memories;
        } catch (error) {
            console.error('Error fetching memories:', error);

            // Fallback to mock data if JSON file fails
            console.log('Falling back to mock data...');
            const memories = this.getMockMemories();
            this.saveToLocalStorage(memories);
            return memories;
        }
    }

    // Local Storage implementation
    saveToLocalStorage(memories) {
        try {
            const timestamp = new Date().toISOString();
            const data = {
                memories,
                lastUpdated: timestamp,
                userPreferences: this.getUserPreferences()
            };
            localStorage.setItem(this.storageKey, JSON.stringify(data));
            console.log('Memories saved to local storage');
        } catch (error) {
            console.error('Error saving to local storage:', error);
        }
    }

    loadFromLocalStorage() {
        try {
            const data = localStorage.getItem(this.storageKey);
            if (data) {
                const parsed = JSON.parse(data);
                console.log('Memories loaded from local storage');
                return parsed;
            }
            return null;
        } catch (error) {
            console.error('Error loading from local storage:', error);
            return null;
        }
    }

    clearLocalStorage() {
        try {
            localStorage.removeItem(this.storageKey);
            console.log('Local storage cleared');
        } catch (error) {
            console.error('Error clearing local storage:', error);
        }
    }

    getUserPreferences() {
        return {
            lastViewedCategory: 'all',
            searchHistory: [],
            favoriteMemories: []
        };
    }
}

// ES Module: UI Controller
class MemoryUIController {
    constructor(dataService) {
        this.dataService = dataService;
        this.allMemories = [];
        this.filteredMemories = [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadInitialData();
    }

    // DOM Manipulation and Event Handling
    setupEventListeners() {
        // Button event listeners
        document.getElementById('loadMemoriesBtn').addEventListener('click', () => {
            this.loadMemories();
        });

        document.getElementById('filterActivitiesBtn').addEventListener('click', () => {
            this.filterMemories('Activity');
        });

        document.getElementById('filterTestimoniesBtn').addEventListener('click', () => {
            this.filterMemories('Spiritual');
        });

        document.getElementById('showAllBtn').addEventListener('click', () => {
            this.showAllMemories();
        });

        document.getElementById('clearStorageBtn').addEventListener('click', () => {
            this.clearStorage();
        });

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.searchMemories(e.target.value);
        });

        // Modal event listeners
        const modal = document.getElementById('memoryModal');
        const closeModal = document.getElementById('closeModal');

        closeModal.addEventListener('click', () => {
            this.closeModal();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // ESC key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    async loadInitialData() {
        // Check if data exists in local storage
        const cachedData = this.dataService.loadFromLocalStorage();
        if (cachedData && cachedData.memories) {
            this.allMemories = cachedData.memories;
            this.filteredMemories = [...this.allMemories];
            this.displayMemories(this.filteredMemories);
            this.updateLoadingMessage('Memories loaded from cache. Click "Load Memories" to refresh.');
        }
    }

    async loadMemories() {
        this.showLoading();

        try {
            this.allMemories = await this.dataService.fetchMemories();
            this.filteredMemories = [...this.allMemories];
            this.displayMemories(this.filteredMemories);
        } catch (error) {
            this.showError(error.message);
        }
    }

    // Array Methods implementation
    filterMemories(category) {
        this.filteredMemories = this.allMemories.filter(memory =>
            memory.category === category
        );
        this.displayMemories(this.filteredMemories);
    }

    searchMemories(searchTerm) {
        if (!searchTerm.trim()) {
            this.filteredMemories = [...this.allMemories];
        } else {
            const term = searchTerm.toLowerCase();
            this.filteredMemories = this.allMemories.filter(memory =>
                memory.title.toLowerCase().includes(term) ||
                memory.author.toLowerCase().includes(term) ||
                memory.description.toLowerCase().includes(term) ||
                memory.category.toLowerCase().includes(term)
            );
        }
        this.displayMemories(this.filteredMemories);
    }

    showAllMemories() {
        this.filteredMemories = [...this.allMemories];
        this.displayMemories(this.filteredMemories);

        // Clear search input
        document.getElementById('searchInput').value = '';
    }

    // Template Literals for dynamic content generation
    displayMemories(memories) {
        const container = document.getElementById('memoriesContainer');

        if (memories.length === 0) {
            container.innerHTML = `
                <div class="error">
                    No memories found matching your criteria.
                </div>
            `;
            return;
        }

        // Using template literals and array methods
        const memoriesHTML = memories.map(memory => `
            <div class="memory-card" data-memory-id="${memory.id}">
                <div class="memory-category">${memory.category}</div>
                <h3 class="memory-title">${memory.title}</h3>
                <div class="memory-date">${this.formatDate(memory.date)}</div>
                <p class="memory-description">${this.truncateText(memory.description, 120)}</p>
                <div class="memory-author">— ${memory.author}</div>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="memories-grid">
                ${memoriesHTML}
            </div>
        `;

        // Add click event listeners to memory cards
        this.attachMemoryCardListeners();
    }

    attachMemoryCardListeners() {
        const memoryCards = document.querySelectorAll('.memory-card');
        memoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const memoryId = parseInt(card.dataset.memoryId);
                this.openModal(memoryId);
            });
        });
    }

    // Modal Dialog implementation
    openModal(memoryId) {
        const memory = this.allMemories.find(m => m.id === memoryId);
        if (!memory) return;

        const modal = document.getElementById('memoryModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalMeta = document.getElementById('modalMeta');
        const modalDescription = document.getElementById('modalDescription');

        modalTitle.textContent = memory.title;

        // Using template literals for modal content
        modalMeta.innerHTML = `
            <div class="meta-item">📅 ${this.formatDate(memory.date)}</div>
            <div class="meta-item">📂 ${memory.category}</div>
            <div class="meta-item">✍️ ${memory.author}</div>
            <div class="meta-item">📍 ${memory.location}</div>
            <div class="meta-item">👥 ${memory.attendees} attendees</div>
        `;

        modalDescription.textContent = memory.description;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    closeModal() {
        const modal = document.getElementById('memoryModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    clearStorage() {
        if (confirm('Are you sure you want to clear all stored data?')) {
            this.dataService.clearLocalStorage();
            this.allMemories = [];
            this.filteredMemories = [];

            const container = document.getElementById('memoriesContainer');
            container.innerHTML = `
                <div class="loading">
                    Storage cleared. Click "Load Memories" to reload data.
                </div>
            `;
        }
    }

    showLoading() {
        const container = document.getElementById('memoriesContainer');
        container.innerHTML = `
            <div class="loading">
                Loading precious memories... 
            </div>
        `;
    }

    showError(message) {
        const container = document.getElementById('memoriesContainer');
        container.innerHTML = `
            <div class="error">
                ${message}
            </div>
        `;
    }

    updateLoadingMessage(message) {
        const loadingElement = document.getElementById('loadingMessage');
        if (loadingElement) {
            loadingElement.textContent = message;
        }
    }

    // Utility functions
    formatDate(dateString) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    const dataService = new MemoryDataService();
    const uiController = new MemoryUIController(dataService);
});