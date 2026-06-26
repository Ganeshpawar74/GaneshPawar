# Project Case Study: VoiceOps — AI-Powered Voice Software Installation Agent

- **Badge:** Featured Project | Multi-Agent | LangGraph | Production-Grade
- **Tech Stack:** LangGraph, Mistral AI, Qdrant RAG, Playwright, FastAPI, Docker, Redis, Celery, faster-whisper STT, PostgreSQL, WebSocket, SHA-256, CI/CD
- **GitHub URL:** https://github.com/Ganeshpawar74/VoiceOps-AI-Powered-Voice-Software-Installation-Agent

## Problem Statement
Can an AI autonomously handle the entire software installation process — from hearing a voice command to verified installation on a target system — without human intervention?

## Solution & System Architecture
VoiceOps uses a coordinated **8-Agent LangGraph Pipeline** structured as follows:
1. **Speech (STT) Agent:** Transcribes user voice commands using `faster-whisper`.
2. **Intent Agent:** Detects user intent and parses the target software name/actions.
3. **Planner Agent:** Creates an execution plan for downloading and installing.
4. **Browser Agent:** Autonomously navigates the web using `Playwright` to search for download links.
5. **Download Agent:** Downloads the installer, verifying package integrity with `SHA-256` matching.
6. **Install Agent:** Executes the installer silently or with parameters.
7. **Monitor Agent:** Checks target process tables to verify the software launches correctly.
8. **Notify Agent:** Updates the user with real-time SSE/WebSocket status signals.

## Metrics & Impact
- **Agents:** 8 coordinated autonomous planner agents.
- **Process Automation:** 100% end-to-end voice-command-to-verified-installation.
- **Security:** Integrated SHA-256 download checksum integrity validation.
- **Real-time logs:** Built using WebSockets to show immediate progress logs on the client dashboard.
- **Impact:** Replaced manual software provisioning steps with autonomous agent executions.
