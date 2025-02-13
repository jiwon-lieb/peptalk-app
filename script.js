const getAdviceButton = document.getElementById('getAdvice');
const adviceMessage = document.getElementById('advice-message');
const mbtiSelect = document.getElementById('mbti_type');
const moodSelect = document.getElementById('mood');
const API_BASE = 'https://api.peptalk.jiwonkwak.co';

getAdviceButton.addEventListener('click', async () => {
  const mbti = mbtiSelect.value;
  const mood = moodSelect.value;
  const apiUrl = `${API_BASE}/api/peptalk/${mbti_type}?mood=${mood}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.message) {
      adviceMessage.textContent = data.message;
    } else {
      adviceMessage.textContent = 'No advice found. Try again later.';
    }
  } catch (error) {
    adviceMessage.textContent = 'Something went wrong. Please try again later.';
  }
});
