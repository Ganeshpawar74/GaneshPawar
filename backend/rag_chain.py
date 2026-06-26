import os
from dotenv import load_dotenv
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain_community.vectorstores import Chroma
from langchain.prompts import PromptTemplate

# Load environment configs
load_dotenv()

# Setup Vector Store RAG chain variables
vectorstore = None
qa_chain = None
is_configured = False

def initialize_rag():
    """Initializes vector store and RAG QA chain dynamically."""
    global vectorstore, qa_chain, is_configured
    if is_configured:
        return True

    # Reload environment to pick up new keys dynamically
    load_dotenv()
    openai_key = os.getenv("OPENAI_API_KEY")
    mistral_key = os.getenv("MISTRAL_API_KEY")

    if not (mistral_key or openai_key):
        print("RAG Pipeline: No API keys found (OPENAI_API_KEY or MISTRAL_API_KEY). Offline fallback active.")
        return False

    try:
        # 1. Load Knowledge Base MD files
        kb_path = os.path.join(os.path.dirname(__file__), "knowledge_base")
        if not os.path.exists(kb_path):
            print(f"RAG Pipeline: Knowledge base path not found: {kb_path}")
            return False

        loader = DirectoryLoader(kb_path, glob="**/*.md", loader_cls=TextLoader)
        docs = loader.load()
        if not docs:
            print("RAG Pipeline: No markdown files found to ingest.")
            return False

        # 2. Chunking
        splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
        chunks = splitter.split_documents(docs)

        # 3. Custom Prompt Template (proper LangChain structure with variables)
        template = (
            "You are an AI assistant representing Ganesh Pawar's professional portfolio.\n"
            "Answer questions about Ganesh's skills, projects, experience, and background "
            "based ONLY on the provided context. Be enthusiastic, specific, and professional.\n"
            "If asked whether Ganesh is a good fit for a role, highlight relevant evidence.\n"
            "If you do not know the answer based on the context, state that you don't know.\n"
            "Always cite specific projects or metrics when possible.\n\n"
            "Context:\n{context}\n\n"
            "Question: {question}\n"
            "Helpful Answer:"
        )
        qa_prompt = PromptTemplate(
            template=template,
            input_variables=["context", "question"]
        )

        # 4. Ingest and build QA chain
        if mistral_key:
            from langchain_mistralai import MistralAIEmbeddings, ChatMistralAI
            from langchain.chains import RetrievalQA

            print("RAG Pipeline: Initializing with Mistral AI...")
            embeddings = MistralAIEmbeddings(api_key=mistral_key)
            vectorstore = Chroma.from_documents(chunks, embeddings)
            llm = ChatMistralAI(model="mistral-large-latest", api_key=mistral_key, temperature=0.2)
            qa_chain = RetrievalQA.from_chain_type(
                llm=llm,
                retriever=vectorstore.as_retriever(search_kwargs={"k": 4}),
                chain_type_kwargs={"prompt": qa_prompt}
            )
            is_configured = True
            print("LangChain RAG pipeline fully initialized with Mistral AI.")
            return True

        elif openai_key:
            from langchain_openai import OpenAIEmbeddings, ChatOpenAI
            from langchain.chains import RetrievalQA

            print("RAG Pipeline: Initializing with OpenAI...")
            embeddings = OpenAIEmbeddings(api_key=openai_key)
            vectorstore = Chroma.from_documents(chunks, embeddings)
            llm = ChatOpenAI(model="gpt-4o", api_key=openai_key, temperature=0.2)
            qa_chain = RetrievalQA.from_chain_type(
                llm=llm,
                retriever=vectorstore.as_retriever(search_kwargs={"k": 4}),
                chain_type_kwargs={"prompt": qa_prompt}
            )
            is_configured = True
            print("LangChain RAG pipeline fully initialized with OpenAI.")
            return True

    except Exception as e:
        print(f"RAG Pipeline Error: Failed to initialize RAG pipeline: {e}")
        return False

# Initialize at startup if key is already there
initialize_rag()

def run_rag_query(query: str) -> str:
    """Runs query against vector store chain, falling back to local simulation if offline."""
    global is_configured, qa_chain
    # Attempt initialization on the fly if key was loaded after server startup
    if not is_configured:
        initialize_rag()

    if is_configured and qa_chain:
        try:
            response = qa_chain.run(query)
            return response
        except Exception as e:
            return f"Error executing RAG search: {e}. Fallback to offline matching."

    # Mock fallback semantic matching in python in case LLM is unconfigured
    q = query.toLowerCase() if hasattr(query, 'toLowerCase') else query.lower()
    if "voiceops" in q or "langgraph" in q:
        return "Ganesh built VoiceOps: an 8-agent LangGraph voice-to-installer orchestrator utilizing Mistral and Qdrant. Exposes WebSocket logs."
    if "analyst" in q or "bi" in q:
        return "Ganesh built Agentic Data Analyst: an 8-agent LangGraph SQL querying anomaly analyst, validating with LangSmith metrics."
    if "healthverse" in q or "medical" in q:
        return "Ganesh built HealthVerse AI: a clinical text-retrieval RAG matching PyTorch CNN scans at 93.6% diagnosis accuracy."
    return "I am Ganesh's Portfolio Assistant. Setup a MISTRAL_API_KEY or OPENAI_API_KEY in .env to enable the full LangChain RAG pipeline."
