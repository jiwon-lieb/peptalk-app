# 🌟 **MBTI Pep Talk App** 🌟

Welcome to the MBTI Pep Talk App, a fun and interactive web app that delivers personalized pep talks based on MBTI types and user-selected moods. This app combines the power of a serverless API and a sleek, chic user interface.

---

## 🚀 **About the Project**

The MBTI Pep Talk App allows users to select their MBTI type and mood to receive a personalized pep talk. The moods supported are default, sad, and angry. This app calls the custom-built MBTI Pep Talk API to fetch messages crafted just for your personality type and mood.

This project was created to demonstrate my skills as a Technical Writer and showcase my understanding of APIs. By building both the API and the app, I aimed to illustrate how technical documentation, development, and design can come together to create an engaging and functional user experience.

This app is a creative way to mix motivation with personality psychology, and it’s only going to get better with more moods, advice, and customization in the future!

---

## 📚 **How It Works**

- User Input: Users select their MBTI type (like INTJ, ENFP, etc.) and mood (sad, angry, or etc) from a simple, stylish dropdown.

- API Call: The app sends a request to the MBTI Pep Talk API.

- Response: The app displays a pep talk customized to the selected MBTI and mood.

---

## 🛠️ **Features**

- Interactive Dropdowns: Choose your MBTI type and mood for a customized experience.

- Personalized Pep Talks: Get motivating advice tailored to you.

- Jiwon Aesthetic: Sleek, pastel colors and a baddie-inspired design.

- Responsive Design: Works beautifully on desktop, tablet, and mobile devices.

---

## 🛠️ **Setup Instructions**

### 1️⃣ Prerequisites

- Node.js (v18+ recommended)

- npm (comes with Node.js)

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/jiwon-lieb/peptalk-app.git
cd peptalk-app
```

### 3️⃣ Install Dependencies

If needed for any API utilities, install dependencies:

```bash
npm install
```

### 4️⃣ Run the App

Since this is a frontend app, you can simply open index.html in your browser, or you can use a simple local server:

```bash
npx http-server
```

Visit http://localhost:8080/ in your browser.

## 🔧 **Tech Stack**

- HTML/CSS/JavaScript: Frontend technologies used to build the app.

- MBTI Pep Talk API (Django Rest Framework): Custom-built API used to fetch personalized pep talks for MBTI types.

- Netlify: Deployed as a static site on Netlify.

## 🧪 **How to Test the App**

1. Open index.html in your browser.

2. Choose an MBTI type and mood from the dropdowns.

3. Click Get Advice and watch the pep talk appear on the screen.

If you’d like to see what’s happening behind the scenes, open the browser console (F12 or right-click -> Inspect -> Console) and see the API call and response.

## 🚀 **Deployment Instructions**

Want to deploy it yourself? Here’s how you can do it with Netlify:

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy the App:
```bash
netlify deploy --prod
```

Your app will be live at a URL like `https://your-site-name.netlify.app/`

## ❤️ **Contributing**

We welcome contributions from all baddies and non-baddies alike. If you'd like to add your own flair, feel free to follow these steps:

1. Fork the repo and clone it locally.
2. Create a new branch: `git checkout -b my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-feature`
5. Submit a pull request.

## 🐛 **Bugs & Issues**

If you encounter any issues, please submit them on the GitHub Issues page. We’ll take a look and get back to you.

## 📜 **License**

This project is licensed under the MIT License, which means you can use, modify, and distribute it freely as long as you include the original copyright.

## 💌 **Contact**

Have questions or feedback? Feel free to reach out via [email](mailto:contact@jiwonkwak.co).

Enjoy your personalized pep talks and stay fabulous! ✨

