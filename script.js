const getAdviceButton = document.getElementById('getAdvice');
const adviceMessage = document.getElementById('advice-message');
const mbtiSelect = document.getElementById('mbti');
const moodSelect = document.getElementById('mood');
const englishButton = document.getElementById('toggle-en');
const koreanButton = document.getElementById('toggle-ko');
const languageToggle = document.querySelector('.language-toggle');
const API_BASE = 'https://api.peptalk.jiwonkwak.co';

let currentPepTalk = { en: "", ko: "" }; // Store both language versions

getAdviceButton.addEventListener('click', async () => {
  const mbti = mbtiSelect.value;
  const mood = moodSelect.value;
  const apiUrl = `${API_BASE}/api/peptalk/random/?mbti_type=${mbti}&mood=${mood}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    // Store English and Korean versions
    currentPepTalk.en = data.pep_eng || "No advice found. Try again later.";
    currentPepTalk.ko = data.pep_kor || "격려 메시지가 없습니다. 다시 시도해 주세요!";

    // Display English by default
    adviceMessage.textContent = currentPepTalk.en;
    englishButton.classList.add("active");
    koreanButton.classList.remove("active");

    // Reveal the language toggle buttons
    languageToggle.style.display = "flex"; // Show buttons after clicking
  } catch (error) {
    adviceMessage.textContent = "Something went wrong. Please try again later.";
  }
});

// Toggle language display
englishButton.addEventListener('click', () => {
  adviceMessage.textContent = currentPepTalk.en;
  englishButton.classList.add("active");
  koreanButton.classList.remove("active");
});

koreanButton.addEventListener('click', () => {
  adviceMessage.textContent = currentPepTalk.ko;
  koreanButton.classList.add("active");
  englishButton.classList.remove("active");
});