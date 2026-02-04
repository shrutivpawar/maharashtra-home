# 🏛️ Maharashtra Home Department Portal + RAG AI Chatbot

A modern, high-performance web portal inspired by the **Government of Maharashtra Home Department**. This project integrates a **Retrieval-Augmented Generation (RAG) Chatbot** designed to provide citizens with instant, accurate, and context-aware responses to legal and departmental queries.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![AI](https://img.shields.io/badge/AI-RAG_Chatbot-blue?style=for-the-badge)

---

## 🌟 Project Overview

Traditional government websites house vast amounts of data that can be difficult for citizens to navigate. This project bridges the gap between public service and modern technology by combining:

1.  **Authentic UX:** A pixel-perfect replica of the Maharashtra Government's web identity, ensuring trust and familiarity.
2.  **AI Efficiency:** A RAG-powered chatbot that "reads" government acts (e.g., *Maharashtra Prohibition Act*, *Police Complaint Authority Rules*) and provides direct answers, reducing manual search time.

---

## ✨ Key Features

* **Intelligent RAG Chatbot:** Uses Retrieval-Augmented Generation to minimize AI hallucinations and ensure answers are grounded in official government documents.
* **Dynamic Tabbed Interface:** A custom-built state management system for *Important Links, Tenders, Recruitments,* and *Notifications* that mimics the official portal’s behavior.
* **Government Branding:** Includes official color palettes (#433201 and gold), the State Seal, and a structured multi-level navigation bar.
* **Fully Responsive:** Optimized for desktop, tablet, and mobile viewing with CSS Flexbox and Grid.
* **Interactive UI:** Smooth transitions, active "pill-shaped" tab states, and hover effects designed for a professional public-sector feel.

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Custom CSS3 (Advanced Flexbox/Grid)
* **State Management:** React Hooks (`useState`, `useEffect`)
* **AI Architecture:** LLM Integration with RAG Logic (Processing departmental PDFs and Acts).

---

## 🤖 How the RAG Chatbot Works

Unlike standard chatbots that guess answers, this system uses a **Vector Knowledge Base** approach:

1.  **Retrieval:** When a user asks a question (e.g., *"How do I file a complaint with the Police Authority?"*), the system searches a database of indexed government PDFs.
2.  **Augmentation:** Relevant text snippets are retrieved from official documents.
3.  **Generation:** The LLM generates a response based **strictly** on those official snippets, ensuring high accuracy and legal reliability.



---

## 📂 Project Structure

```text
maharashtra-home/
├── src/
│   ├── components/
│   │   ├── Header.jsx    # Branding, Logo, and Navbar with Dropdowns
│   │   ├── Hero.jsx      # Government Banner/Slider
│   │   ├── Gallery.jsx   # Photo Gallery Section
│   │   ├── Footer.jsx    # Standard Policy Links
│   │   └── Bottom.jsx    # External Departmental Links Grid
│   ├── App.jsx           # Main Application Logic & Tabbed Interface
│   └── styles.css        # Global CSS & Government Theme Definitions
├── public/               # Government Seals and Static Icons
└── package.json          # Dependency Management
```



---

## ⚙️ Setup & Installation
Follow these steps to run the project locally:

Clone the Repo:

```
git clone [https://github.com/shrutivpawar/maharashtra-home.git](https://github.com/shrutivpawar/maharashtra-home.git)
cd maharashtra-home
```

Install Dependencies:

```
npm install
```

Run Development Server:

```
npm run dev
```


---
## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request



---

## 📜 Disclaimer
This project is a functional prototype created for educational and demonstration purposes. It is not the official website of the Government of Maharashtra.
