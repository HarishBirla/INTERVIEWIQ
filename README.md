# AI Interview Agent

An AI-powered Interview Preparation Platform built using the MERN Stack that helps users practice Technical and HR interviews through intelligent AI-generated questions, resume analysis, and personalized feedback.

## 🚀 Features

### 📄 Resume Analysis
- Upload resumes in PDF format.
- AI analyzes the resume content.
- Generates personalized interview questions based on skills, projects, and experience.

### 🎯 Interview Rounds
- Technical Interview Round
- HR Interview Round
- Realistic interview simulation experience.

### 🤖 AI-Powered Feedback
- Detailed performance evaluation.
- Strengths and improvement areas.
- Intelligent feedback generated using AI.

### 💳 Credit-Based System
- Users receive and manage interview credits.
- Razorpay integration for purchasing additional credits.

### 🔐 Authentication
- Secure Google Authentication using Firebase.
- Protected routes and user session management.

### 📊 Interview History
- View previous interview attempts.
- Access reports and feedback anytime.

### ✨ Modern UI
- Responsive design.
- Smooth animations using Framer Motion.
- User-friendly and clean interface.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Redux Toolkit
- Framer Motion
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication
- Firebase Google Authentication

### AI Integration
- OpenRouter API

### Payment Gateway
- Razorpay

### Deployment
- Render

---

## 📂 Project Structure

### Frontend (client)

```bash
client/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

### Backend (server)

```bash
server/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── public/
│
├── index.js
└── package.json
```

---

## ⚙️ Environment Variables

### Client (.env)

```env
VITE_API_URL=your_backend_url
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

### Server (.env)

```env
PORT=5000

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

CLIENT_URL=http://localhost:5173
```

---

## 🧑‍💻 Installation

### Clone Repository

```bash
git clone https://github.com/HarishBirla/INTERVIEWIQ 
cd ai-interview-agent
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## ▶️ Run Locally

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

Frontend:

```bash
http://localhost:5173
```

Backend:

```bash
http://localhost:5000
```

---

## 📸 Screens

- Home Page
- Resume Upload
- Technical Interview
- HR Interview
- AI Feedback Report
- Credit Purchase System
- Interview History

---

## 🔮 Future Enhancements

- Voice-Based Interviews
- Video Interview Simulation
- Advanced Analytics Dashboard
- Multiple Resume Support
- Interview Difficulty Levels
- Company-Specific Question Sets

---

## 👨‍💻 Author

**Harish Birla**

- LinkedIn: https://www.linkedin.com/in/harish-birla-42523627b/
- Email: birlaharish3@gmail.com

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.
