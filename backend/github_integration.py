import requests

def fetch_github_repos():
    """Fetches repository list from Ganesh's GitHub API, with fallback static metadata."""
    try:
        url = "https://api.github.com/users/Ganeshpawar74/repos"
        res = requests.get(url, timeout=5)
        if res.status_code == 200:
            return res.json()
        print(f"GitHub API returned status code {res.status_code}")
    except Exception as e:
        print(f"Failed to fetch GitHub statistics: {e}")
        
    # Return basic static structure as fallback
    return [
        {
            "name": "VoiceOps",
            "stargazers_count": 12,
            "forks_count": 4,
            "language": "Python",
            "html_url": "https://github.com/Ganeshpawar74/VoiceOps"
        },
        {
            "name": "Agentic-Data-Analyst",
            "stargazers_count": 8,
            "forks_count": 2,
            "language": "Python",
            "html_url": "https://github.com/Ganeshpawar74/Agentic-Data-Analyst"
        },
        {
            "name": "HealthVerse-AI",
            "stargazers_count": 15,
            "forks_count": 3,
            "language": "Python",
            "html_url": "https://github.com/Ganeshpawar74/HealthVerse-AI"
        }
    ]
