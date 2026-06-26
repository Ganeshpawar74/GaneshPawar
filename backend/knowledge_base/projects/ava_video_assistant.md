# Project Case Study: AVA — AI Video Intelligence Assistant

- **Badge:** Featured Project | RAG | Video Transcription & QA
- **Tech Stack:** Sarvam AI, Whisper, Mistral AI, LangChain, ChromaDB, Streamlit, Python, RAG
- **GitHub URL:** https://github.com/Ganeshpawar74/AVA-AI-Video-Assistant

## Problem Statement
Extracting specific milestones, insights, and decision summaries from lengthy webinars or video recordings is time-consuming. How do we automate structured intelligence extraction and expose interactive Q&A over video files?

## Solution & System Architecture
AVA acts as a video intelligence parsing assistant:
1. **Video Ingestion:** Accepts uploaded video files and extracts the audio stream.
2. **Audio Transcription:** Employs **Whisper** and **Sarvam AI** APIs to create high-accuracy time-coded transcriptions.
3. **Chunking & Indexing:** Chunks transcript text and stores representations in **ChromaDB** using semantic embeddings.
4. **Insight Extraction:** Automatically isolates action items, key questions, and milestones.
5. **RAG Q&A Interface:** Connects a chatbot interface via **LangChain** and **Mistral AI** to answer questions referencing the time-coded context.

## Metrics & Impact
- **Transcription Accuracy:** Achieved **95% transcription accuracy** using specialized models.
- **Latency:** Exposes retrieval lookups with **under 150ms search latency**.
- **Impact:** Speeds up meeting review and action item tracking by automating the documentation of video files.
