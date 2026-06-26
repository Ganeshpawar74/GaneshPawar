# Project Case Study: LegalX — AI Legal Knowledge Centre

- **Badge:** Featured Project | RAG | Audio TTS Output
- **Tech Stack:** Mistral AI, Python, RAG Pipeline, ChromaDB, Text-to-Speech (TTS), Streamlit
- **GitHub URL:** https://github.com/Ganeshpawar74/LegalX-AI-Knowledge-Centre

## Problem Statement
Comprehending dense, complicated legal codes and cases is difficult for non-lawyers. How can we make legal information more accessible and include verbal summary options for accessibility?

## Solution & System Architecture
An interactive legal RAG search assistant dashboard:
1. **Document Loader:** Ingests legal briefing PDFs and court case history documents.
2. **Vector Ingestion:** Splits text recursively and builds semantic embeddings stored in **ChromaDB**.
3. **Retrieval System:** Matches user legal queries to related codes and files.
4. **TTS synthesis:** Uses Python text-to-speech engines to generate audio summaries of legal briefs.
5. **Interactive Dashboard:** Allows downloading audio card briefings and querying details.

## Metrics & Impact
- **Accuracy:** Rated at **92% relevance score** by evaluating retrieval matches.
- **Audio Output:** Provides instant, accessible TTS summaries of target findings.
- **Impact:** Democratizes complex legal documents by providing clear, audible, and vector-searched summaries.
