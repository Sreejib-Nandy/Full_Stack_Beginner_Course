async function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = "01537d797ef74a49aae122018251309"; 
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("API request failed with status " + response.status);
        }

        const weatherData = await response.json();
        document.getElementById('weather').textContent =
            `Weather in ${weatherData.location.name}: ${weatherData.current.temp_c}°C, ${weatherData.current.condition.text}`;

    } catch (error) {
        console.error("Error fetching weather:", error);
        document.getElementById('weather').textContent =
            'Unable to fetch weather data. Please try again later.';
    }
}