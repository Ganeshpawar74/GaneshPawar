# 🚀 Ganesh Pawar — AI/ML Engineer Portfolio

This is the professional portfolio of Ganesh Pawar, an AI/ML Engineer specializing in GenAI systems, multi-agent LLM orchestration (LangGraph), and RAG pipelines.

The portfolio is structured with a React TypeScript frontend and a FastAPI Python backend utilizing a RAG (Retrieval-Augmented Generation) pipeline for the portfolio chatbot.

---

## 📁 Project Structure

```
GaneshPawar_Portfolio/
├── frontend/                     # React + TS + Tailwind CSS v4 + Three.js
│   ├── src/
│   │   ├── components/           # Navbar, Hero, About, Skills, Projects, etc.
│   │   ├── data/                 # Static data catalogs (projects, skills, etc.)
│   │   ├── hooks/                # useGitHubStats, useCounterAnimation
│   │   └── App.tsx
│   ├── public/                   # Asset files (avatar, resume.pdf)
│   └── package.json
│
├── backend/                      # Python FastAPI RAG chatbot server
│   ├── knowledge_base/           # Markdown profile records for the chatbot context
│   ├── main.py                   # FastAPI routing endpoints
│   ├── rag_chain.py              # LangChain + Chroma DB vector pipeline
│   ├── github_integration.py     # GitHub statistics fetch utility
│   ├── requirements.txt          # Python dependencies
│   └── .env                      # API keys config
│
└── README.md                     # Main setup guidelines (this file)
```

---

## ⚡ Setup & Run Guidelines

To run the complete portfolio locally, follow these steps.

### 1. Backend Server Setup (FastAPI RAG)
The backend requires python 3.11. Open your terminal in the `backend/` directory:

```powershell
# Navigate to the backend folder
cd backend

# Create a virtual environment (optional, recommended)
python -m venv venv
venv\Scripts\activate

# Install python dependencies
pip install -r requirements.txt

# Start the API server
python main.py
```
*The backend API will start on: **`http://localhost:8000`***
*Mistral AI credentials have been loaded in `backend/.env`. The RAG pipeline will read and process the knowledge base markdown files on startup.*

### 2. Frontend App Setup (Vite React TS)
Open a new terminal window in the `frontend/` directory:

```powershell
# Navigate to the frontend folder
cd frontend

# Install npm dependencies
npm install

# Start the Vite development server
npm run dev
```
*The frontend development server will launch on: **`http://localhost:5173`***
*Vite has been configured with an automated dev server proxy. Frontend calls to `/api/...` will automatically route to `http://localhost:8000/api/...`.*

---

## 🤖 Dual-Mode RAG Chatbot Integration
The portfolio chatbot widget (Ask AI) features a **dual-mode intelligence pipeline**:
1. **Online Mode:** Automatically routes user queries to the FastAPI RAG server for processing via the Mistral AI large language model (`mistral-large-latest`).
2. **Offline Fallback:** If the backend is stopped or not running (e.g. static site view on Vercel), it executes a client-side semantic keyword classifier in the browser, providing instant, accurate details for questions regarding Ganesh's skills, credentials, projects, and work history.
