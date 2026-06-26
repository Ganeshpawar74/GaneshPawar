# Project Case Study: SamaSocial — Multi-Source Learning Assistant

- **Badge:** Study Planner & RAG
- **Tech Stack:** Python, LangChain, VectorDB, RAG, Streamlit, OpenAI API
- **GitHub URL:** https://github.com/Ganeshpawar74/Samasocial-Multi-Source-AI-Learning-Assistant

## Problem Statement
Students study using fragmented materials across local PDFs, web pages, and educational videos. Organizing this material into a unified study guide is challenging.

## Solution & System Architecture
A study guide and learning pipeline:
1. **Multi-Format Ingestion:** Loads materials from PDF files, web links, and text transcripts.
2. **Context Synthesis:** Employs **LangChain** text splitters and embeddings to store text segments in a vector store database.
3. **RAG Q&A Engine:** Exposes conversational search over all uploaded courses.
4. **Curriculum Scheduler:** Creates calendar study schedules based on exam dates and content size.

## Metrics & Impact
- **Ingestion Accuracy:** Integrates different input formats into a single indexed guide.
- **Planner Output:** Delivers detailed, scheduled calendars for study tasks.
- **Impact:** Speeds up academic prep and helps students review course materials.
