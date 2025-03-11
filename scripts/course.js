document.addEventListener('DOMContentLoaded', () => {
    // Course list array
    const courses = [
        {
            code: "CSE 110",
            name: "Programming Building Blocks",
            credits: 3,
            category: "CSE",
            completed: true
        },
        {
            code: "CSE 111",
            name: "Programming with Functions",
            credits: 3,
            category: "CSE",
            completed: true
        },
        {
            code: "CSE 210",
            name: "Programming with Classes",
            credits: 3,
            category: "CSE",
            completed: false
        },
        {
            code: "WDD 130",
            name: "Web Fundamentals",
            credits: 3,
            category: "WDD",
            completed: true
        },
        {
            code: "WDD 131",
            name: "Intro to CSS and HTML",
            credits: 3,
            category: "WDD",
            completed: true
        },
        {
            code: "WDD 231",
            name: "Advanced CSS and JavaScript",
            credits: 3,
            category: "WDD",
            completed: false
        }
    ];
    
    const courseContainer = document.getElementById('course-container');
    const totalCreditsElement = document.getElementById('total-credits');
    const allBtn = document.getElementById('btn-all');
    const cseBtn = document.getElementById('btn-cse');
    const wddBtn = document.getElementById('btn-wdd');
    
    let currentFilter = 'all';
    
    // Function to display courses
    function displayCourses(filter = 'all') {
        // Clear the container
        courseContainer.innerHTML = '';
        
        // Filter courses based on selection
        let filteredCourses;
        if (filter === 'all') {
            filteredCourses = courses;
        } else {
            filteredCourses = courses.filter(course => course.category === filter);
        }
        
        // Display courses
        filteredCourses.forEach(course => {
            const card = document.createElement('div');
            card.className = `course-card ${course.completed ? 'completed' : ''}`;
            
            card.innerHTML = `
                <h3>${course.code}</h3>
            `;
            
            courseContainer.appendChild(card);
        });
        
        // Calculate and display total credits
        const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
    }
    
    // Initial display
    displayCourses();
    
    // Filter button event listeners
    allBtn.addEventListener('click', () => {
        allBtn.classList.add('active');
        cseBtn.classList.remove('active');
        wddBtn.classList.remove('active');
        currentFilter = 'all';
        displayCourses(currentFilter);
    });
    
    cseBtn.addEventListener('click', () => {
        allBtn.classList.remove('active');
        cseBtn.classList.add('active');
        wddBtn.classList.remove('active');
        currentFilter = 'CSE';
        displayCourses(currentFilter);
    });
    
    wddBtn.addEventListener('click', () => {
        allBtn.classList.remove('active');
        cseBtn.classList.remove('active');
        wddBtn.classList.add('active');
        currentFilter = 'WDD';
        displayCourses(currentFilter);
    });
});