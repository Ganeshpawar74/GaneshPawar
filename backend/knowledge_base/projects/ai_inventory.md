# Project Case Study: AI Inventory Forecasting & Decision Support

- **Badge:** Demand Forecasting & ML
- **Tech Stack:** Scikit-learn, Prophet, ARIMA, Streamlit, Plotly, Python, SQL
- **GitHub URL:** https://github.com/Ganeshpawar74/AI-Inventory-Forecasting

## Problem Statement
Supply chain companies struggle with stockouts and excess inventory costs. Accurate forecasting is needed over seasonal transaction logs.

## Solution & System Architecture
A data analysis and time-series forecasting system:
1. **Data Ingest:** Pulls historical transactions using SQL queries from relational databases.
2. **Feature Engineering:** Creates time features (month, day, holidays, lag metrics).
3. **Forecasting Model:** Ensembles statistical **ARIMA** models with **Prophet** forecasting libraries to forecast product demand.
4. **Interactive Dashboard:** Built with Streamlit and Plotly to explore forecasts and safety thresholds.

## Metrics & Impact
- **Data Scale:** Handled forecasting models over **50,000+ historical transaction records**.
- **Accuracy Boost:** Drove a **+20% forecasting accuracy increase** compared to simple rolling average benchmarks.
- **Impact:** Lowers warehouse storage costs and minimizes delivery delay risks.
