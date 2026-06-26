# Project Case Study: HealthVerse AI — Intelligent Medical Report Analysis

- **Badge:** Featured Project | RAG + CNN | Healthcare AI | 93.6% Accuracy
- **Tech Stack:** RAG Pipeline, ChromaDB, BGE Embeddings, CNN, PyTorch, LLMs, FastAPI, Streamlit, Docker, LangSmith, OpenAI API
- **GitHub URL:** https://github.com/Ganeshpawar74/Intelligent-Medical-Report-Analysis-System-with-AI-Diagnosis-RAG-Based-Insights-

## Problem Statement
Medical image analysis is time-intensive and requires expert radiologist review. Can we speed up clinical operations by combining deep learning image classification with semantic RAG medical knowledge retrieval and natural language clinical report generation?

## Solution & System Architecture
HealthVerse AI acts as a hybrid deep-learning + generative AI medical assistant:
1. **Medical Records Ingestion:** Loads and splits clinical guidelines and transaction records.
2. **CNN Classification:** A custom **PyTorch Convolutional Neural Network (CNN)** analyzes medical scans to predict diagnostic classes.
3. **ChromaDB RAG Retrieval:** Queries a vector database holding clinical literature using **BGE Embeddings** to retrieve relevant clinical insights based on CNN outputs.
4. **LLM Report Generation:** Merges CNN classifications and RAG-retrieved text to generate a professional draft medical report.
5. **Interactive Dashboard:** Streamlit UI showing diagnostic confidence gauges, matching literature, and reports.
6. **Output Monitoring:** Integrates **LangSmith** to evaluate report readability and guard against LLM hallucination.

## Metrics & Impact
- **Diagnostic Accuracy:** Achieved **93.6% classification accuracy** over testing splits.
- **Data Scale:** Processed and ingested 5,000+ medical records and scan metrics.
- **Optimization:** Achieved a **60% reduction in knowledge retrieval latency** by optimizing chunk sizes and indexing parameters in ChromaDB.
- **Workflow:** Deployed in containers using Docker, exposing REST API endpoints via FastAPI.
