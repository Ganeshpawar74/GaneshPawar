# Project Case Study: Agentic Data Analyst — Autonomous BI System

- **Badge:** Featured Project | Multi-Agent | LLMOps | Business Intelligence
- **Tech Stack:** LangChain, LangGraph, LangSmith, ChromaDB, Redis, NL-to-SQL, FastAPI, PostgreSQL, DuckDB, Prophet, ARIMA, Docker, GitHub Actions, Power BI
- **GitHub URL:** https://github.com/Ganeshpawar74/Agentic-Data-Analyst-Autonomous-Business-Intelligence-System

## Problem Statement
Business intelligence queries typically require manual execution of SQL scripts, visualization preparation, and PDF report exporting. Can we automate this entire workflow so a user can query database parameters in plain text and receive forecast charts and executive summaries?

## Solution & System Architecture
The system employs an **8-Agent Multi-Agent loop** configured in LangGraph:
1. **Planner Agent:** Dissects the user's natural language question.
2. **Analyst Agent:** Selects the required schemas and statistical tools.
3. **Query Engine (NL-to-SQL):** Transforms text to raw SQL queries, executing them against PostgreSQL/DuckDB.
4. **Visualization Agent:** Generates Plotly dashboard figures based on query outputs.
5. **Forecasting Agent:** Performs time-series forecasts using FB Prophet and ARIMA.
6. **Reporting Agent:** Generates structured executive summaries and PDF/HTML documents.
7. **LLM Evaluator:** Evaluates SQL structure and checks outputs for hallucinations.
8. **Feedback Loop:** Reprompts query generation if validation checks fail.

## Metrics & Impact
- **Data Scale:** Automated anomaly detection and analytics over 50,000+ data records.
- **Accuracy & Tracing:** Actively monitored with **LangSmith** for LLM hallucination and latency telemetry.
- **Speed:** Replaced days of database auditing and analyst compilation with minutes of automated multi-agent tasks.
- **Workflow:** End-to-end automation from plain English text to final styled PDF document exports.
