# Project Case Study: SamaSocial — Course Planning Assistant

- **Badge:** Course Architect & Schema Gen
- **Tech Stack:** OpenAI API, Python, JSON Schema, Streamlit, ReportLab
- **GitHub URL:** https://github.com/Ganeshpawar74/Samasocial-AI-Course-Planning-Assistant

## Problem Statement
Creating academic curricula requires planning lecture dates, prerequisites, and generating structured syllabus outlines, which is typically a slow manual process.

## Solution & System Architecture
A syllabus generation system:
1. **Goal Inputs:** Accepts target topics, duration, and target experience level.
2. **Structured Outputs:** Uses OpenAI API function calling with **JSON Schema** validators to generate structured lectures and dates.
3. **Course Assembly:** Sequences topics based on dependencies.
4. **PDF Generator:** Compiles structured schemas into formatted PDFs using the **ReportLab** library.

## Metrics & Impact
- **Generation Speed:** Automates curriculum generation, replacing hours of manual planning.
- **Export Formats:** Outputs curriculum schemas into validated JSON and PDF formats.
- **Impact:** Speeds up curriculum drafting and course scheduling for educators.
