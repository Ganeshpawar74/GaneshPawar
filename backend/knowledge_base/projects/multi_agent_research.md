# Project Case Study: Multi-Agent AI Research System

- **Badge:** Featured Project | LCEL | Agent Collaboration
- **Tech Stack:** LangChain, Mistral AI, Tavily API, BeautifulSoup, LCEL, Streamlit, Python
- **GitHub URL:** https://github.com/Ganeshpawar74/Multi-Agent-Research-System

## Problem Statement
Compiling literature reviews and research papers from raw search engine hits requires massive manual web scraping, draft writing, editing, and self-review cycles.

## Solution & System Architecture
A multi-agent team collaborative research workflow built using **LangChain Expression Language (LCEL)**:
1. **Searcher Agent:** Performs targeted search queries via **Tavily API** to fetch high-relevance web documents.
2. **Reader Agent:** Parses fetched resources using **BeautifulSoup** to extract core paragraphs and facts.
3. **Writer Agent:** Assembles clean, structured markdown drafts complete with section headers and references.
4. **Critic Agent:** Reviews draft texts, provides quality feedback, and automatically loops the workflow to re-verify missing points.

## Metrics & Impact
- **Agent Count:** Orchestrates **4 specialized concurrent agents** working in a feedback loop.
- **Automation:** Refines drafts autonomously based on grading heuristics before presenting a finalized draft.
- **Impact:** Speeds up scientific literature reviews and briefing preparations by over 50%.
