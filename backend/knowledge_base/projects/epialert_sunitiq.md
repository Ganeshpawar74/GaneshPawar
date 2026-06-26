# Project Case Study: EpiAlert — Disease Spikes Classification

- **Badge:** Epidemiology ML Model
- **Tech Stack:** PyTorch, Scikit-learn, FastAPI, Python, Pandas, Docker
- **GitHub URL:** https://github.com/Ganeshpawar74/EpiAlert_Sunitiq

## Problem Statement
Detecting early disease outbreaks requires analyzing clinical incident logs to catch spikes. Manual tracking leads to delays.

## Solution & System Architecture
A machine learning classification pipeline:
1. **Feature Engineering:** Scales incident rate metrics and computes geographic features using Pandas.
2. **ML Modeling:** Builds PyTorch network classifiers to predict whether data represents normal variations or critical disease spikes.
3. **Backend Service:** Exposes model prediction REST endpoints using FastAPI.
4. **Outbreak Alerts:** Automatically alerts user dashboards upon identifying critical anomalies.

## Metrics & Impact
- **Classification Speed:** Delivers incident evaluations in real time.
- **Manual Workload Reduction:** Saves **40% of manual triage effort** for tracking spikes.
- **Impact:** Speeds up response planning for infectious disease monitoring.
