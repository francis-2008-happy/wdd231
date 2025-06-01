// Weather API implementation
const apiKey = '70ef4e203b70aca186891e8218bee972'; // Get from OpenWeatherMap
const city = 'Timbuktu';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

// Fetch current weather
fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById('current-temp').textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById('weather-desc').textContent = data.weather[0].description;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    });

// Fetch 3-day forecast
fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        const forecastContainer = document.getElementById('forecast-container');
        forecastContainer.innerHTML = '';

        // Get unique days (3 days)
        const dailyForecasts = [];
        const dates = new Set();

        data.list.forEach(item => {
            const date = new Date(item.dt * 1000).toLocaleDateString();
            if (!dates.has(date) && dates.size < 3) {
                dates.add(date);
                dailyForecasts.push({
                    date: date,
                    temp: Math.round(item.main.temp),
                    icon: item.weather[0].icon
                });
            }
        });

        // Display forecasts
        dailyForecasts.forEach(day => {
            const forecastElement = document.createElement('div');
            forecastElement.className = 'forecast-day';
            forecastElement.innerHTML = `
                <div>${day.date}</div>
                <img src="https://openweathermap.org/img/wn/${day.icon}.png" alt="">
                <div>${day.temp}°C</div>
            `;
            forecastContainer.appendChild(forecastElement);
        });
    });