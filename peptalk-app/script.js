// Base URL for the API
const API_URL = 'https://peptalk-api.netlify.app/.netlify/functions/server';

document.getElementById('getAdviceButton').addEventListener('click', async () => {
  // Get user inputs
  const mbti = document.getElementById('mbti').value;
  const mood = document.getElementById('mood').value;

  try {
    // Call the API
    const response = await fetch(`${API_URL}/${mbti}?mood=${mood}`);
    const data = await response.json();

    // Display advice
    document.getElementById('advice').innerText = data.message;
  } catch (error) {
    document.getElementById('advice').innerText = 'Error fetching advice. Please try again later.';
  }
});
