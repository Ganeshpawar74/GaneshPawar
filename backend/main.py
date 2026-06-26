from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from rag_chain import run_rag_query
from github_integration import fetch_github_repos

app = FastAPI(title="Ganesh Pawar Portfolio AI Assistant API", version="1.0.0")

# CORS middleware config to allow localized frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatQuery(BaseModel):
    query: str

@app.get("/")
def read_root():
    return {"status": "online", "message": "Ganesh Pawar Portfolio API endpoints running successfully."}

@app.post("/api/chat")
async def chat_endpoint(payload: ChatQuery):
    if not payload.query:
        raise HTTPException(status_code=400, detail="Empty query string.")
    
    response = run_rag_query(payload.query)
    return {"response": response}

@app.get("/api/github-stats")
async def github_stats_endpoint():
    repos = fetch_github_repos()
    return {"repos": repos}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
