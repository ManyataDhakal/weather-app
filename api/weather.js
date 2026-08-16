export default async function handler(req, res) {
    const { city } = req.query;

    const apiKey = process.env.OPENWEATHER_API_KEY;

    const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURIComponent(city)}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({
            message: "Unable to fetch weather data"
        });
    }
}