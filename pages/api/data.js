let cachedData = null;
const axios = require("axios");

const fetchDataFromGoogleAppsScript = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_SCORE_SHEET; // Replace with your Google Apps Script URL
    const response = await axios.get(apiUrl);
    cachedData = response.data;
    console.log("Data fetched and cached successfully.");
    console.log(cachedData);
  } catch (error) {
    console.error(
      "Error fetching data from Google Apps Script:",
      error.message
    );
  }
};

fetchDataFromGoogleAppsScript();
// Set up a periodic interval to refresh the data (e.g., every 5 minutes)
const refreshIntervalMinutes = 0.3;
setInterval(fetchDataFromGoogleAppsScript, refreshIntervalMinutes * 60 * 1000);

export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET request
    if (cachedData) {
      res.json(cachedData["clan_points_overview"]);
    } else {
      res.status(404).json({ error: "Data not available" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
