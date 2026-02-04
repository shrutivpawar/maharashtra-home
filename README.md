# 🏛️ Maharashtra Home Department Portal + Chatbot
A modern, high-performance web portal inspired by the **Government of Maharashtra Home Department**. This project includes a **smart assistant chatbot** to help citizens quickly find answers about departmental services and procedures.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![AI](https://img.shields.io/badge/Assistant-Hardcoded_%E2%86%92_RAG-blue?style=for-the-badge)

---

## 🌟 Project Overview

Traditional government websites house vast amounts of data that can be difficult for citizens to navigate. This project bridges the gap between public service and modern technology by combining:

1. **Authentic UX:** A pixel-perfect replica of the Maharashtra Government's web identity, ensuring trust and familiarity.
2. **Smart Assistant:** A floating chatbot (currently rule-based / hardcoded) that answers common queries about services like ration cards, caste certificates, pensions, marriage registration, etc.  
   → **Future plan:** Upgrade to a full **Retrieval-Augmented Generation (RAG)** chatbot that reads official government acts, rules, GRs, and PDFs for accurate, grounded responses.

---

## ✨ Key Features

- **Intelligent Chatbot (currently hardcoded)** — Provides instant replies to common questions using predefined rules and keyword matching  
  → Planned upgrade: **RAG-powered AI** that retrieves exact content from official Maharashtra government documents (acts, rules, notifications) to eliminate hallucinations and ensure legal accuracy

- **Dynamic Tabbed Interface:** Custom state management for *Important, Tenders, Recruitments, Notifications* sections
- **Government Branding:** Official color palette (#433201 + gold), State Seal, multi-level navigation
- **Fully Responsive:** Desktop, tablet, mobile support with modern CSS
- **Interactive UI:** Smooth transitions, pill-shaped active tabs, professional hover effects

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Custom CSS3 (Advanced Flexbox/Grid)
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Chatbot (Phase 1):** Hardcoded rule-based logic (keyword matching + static replies)
- **Chatbot (Future Phase):** LLM + RAG pipeline (document chunking, vector store, retrieval)

---

## 🤖 Chatbot – Current & Future State

### Current Implementation (Phase 1 – Hardcoded)

- Floating chat widget with message history
- Quick-reply buttons for popular services
- Keyword-based replies for queries like:
  - रेशन कार्ड / Ration card
  - जात प्रमाणपत्र / Caste certificate
  - पेन्शन / Pension
  - लग्न नोंदणी / Marriage registration
  - अर्ज स्टेटस / Application status
- Fast, zero-dependency, no external API calls

### Planned Upgrade (Phase 2 – RAG AI)

1. Chunking & indexing of official PDFs/acts (Maharashtra Prohibition Act, Police Acts, GRs, etc.)
2. Vector database (Chroma / FAISS / Pinecone)
3. Retrieval of relevant document passages
4. Generation using a strong LLM with strict grounding instructions
5. Goal: near-zero hallucination, direct references to official text, legally reliable answers

---

## 📂 Project Structure

maharashtra-home/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Branding, Logo, Navbar with Dropdowns
│   │   ├── Hero.jsx            # Government Banner/Slider
│   │   ├── Gallery.jsx         # Photo Gallery Section
│   │   ├── Footer.jsx          # Standard Policy Links
│   │   ├── Bottom.jsx          # External Departmental Links Grid
│   │   └── FloatingChat.jsx    # Smart Assistant (currently hardcoded → future RAG)
│   ├── App.jsx                 # Main Application Logic & Tabbed Interface
│   └── styles.css              # Global CSS & Government Theme Definitions
├── public/                     # Government Seals and Static Icons
└── package.json                # Dependency Management
⚙️ Setup & Installation
Clone the Repository
bash
Copy code
git clone https://github.com/shrutivpawar/maharashtra-home.git
cd maharashtra-home
Install Dependencies
bash
Copy code
npm install
Run Development Server
bash
Copy code
npm run dev
🤝 Contributing
Contributions are welcome and appreciated!

Fork the Project

Create your Feature Branch

bash
Copy code
git checkout -b feature/AmazingFeature
Commit your Changes

bash
Copy code
git commit -m "Add some AmazingFeature"
Push to the Branch

bash
Copy code
git push origin feature/AmazingFeature
Open a Pull Request

📄 Disclaimer
This project is for educational and demonstration purposes only.
It is not an official Government of Maharashtra website and is not affiliated with any government authority.

yaml
Copy code

---

If you’d like, I can also help you add:

✅ Screenshots section  
✅ Demo link section  
✅ License section  
✅ Future roadmap  

Just tell me 👍
