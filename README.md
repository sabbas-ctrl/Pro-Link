# 🌐 Online Business Card Builder

Create, customize, and share your **digital business card** instantly — no printing required!  
This web application allows users to design professional online visiting cards, personalize colors, add social media links, and share them via **unique URLs** or **QR codes**.  

🚀 **Live Demo:** [Coming Soon]  
🛠 Built with **React, Firebase, Tailwind CSS, and Vite**.

---

## ✨ Features

- 🆕 **Create Your Own Digital Business Card**
- 🎨 **Full Customization** — change colors, theme (light/dark), and background.
- 🌍 **Shareable Public Link** — e.g., `yourdomain.com/username`
- 📱 **Social Media Integration** — LinkedIn, Twitter, Instagram, WhatsApp, YouTube, TikTok, Email, and more.
- 📩 **Contact Buttons** — Direct email or message options.
- 🖼 **(Coming Soon)** Logo & profile image upload.
- 📲 **QR Code Generation** for easy sharing.
- ☁ Powered by **Firebase Authentication & Firestore**.

---

## 📸 Screenshots

| Builder Page | Public Card |
|--------------|-------------|
| ![Builder Page Screenshot](docs/builder.png) | ![Public Card Screenshot](docs/public-card.png) |

---

## 🛠 Tech Stack

- **Frontend:** React (Vite), Tailwind CSS, Framer Motion
- **Backend & Database:** Firebase Firestore
- **Authentication:** Firebase Auth (Email & Google Login)
- **Deployment:** Vercel (Frontend), Firebase Hosting (optional)

---

## 📂 Project Structure

```
src/
├── components/ # Reusable UI components
├── pages/ # Dashboard, CardBuilder, PublicCard
├── firebaseClient.js # Firebase config & initialization
├── App.jsx # Main routes
├── index.css # Tailwind CSS
```

---

## 🔧 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/sabbas-ctrl/Pro-Link
cd Pro-Link
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Set up Firebase
- Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/).
- Enable **Authentication → Email/Password & Google**.
- Enable **Firestore Database**.
- (Optional) Enable **Firebase Storage** for profile images.
- Copy your Firebase config into `src/firebaseClient.js`.

**Example:**
```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET.appspot.com",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```

### 4️⃣ Run locally
```bash
npm run dev
```

### 5️⃣ Deploy
- **Vercel** → Connect GitHub repo & deploy.
- **Firebase Hosting** → `firebase deploy`.

---

## 📄 Firestore Data Structure
```json
{
  "username": "john-doe",
  "ownerId": "firebaseAuthUID",
  "displayName": "John Doe",
  "title": "Full Stack Developer",
  "bio": "Building modern web applications.",
  "theme": {
    "mode": "light",
    "bgColor": "#ffffff",
    "primaryBtnColor": "#007bff"
  },
  "socials": {
    "linkedin": "https://linkedin.com/in/johndoe",
    "twitter": null,
    "instagram": "https://instagram.com/johndoe"
  },
  "createdAt": "...",
  "updatedAt": "..."
}
```

---

## 🚀 Roadmap
- ✅ Basic card creation & public display
- ✅ Light/Dark themes
- ⏳ Logo & profile image upload (Firebase Storage)
- ⏳ QR code generation for each card
- ⏳ Analytics (clicks, visits)
- ⏳ Template library

---

## 🔍 Keywords
`online business card maker` &nbsp; `digital visiting card generator` &nbsp; `react firebase project` &nbsp; `share business card via link` &nbsp; `customizable business card app` &nbsp; `create QR code business card`

