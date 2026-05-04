# 🧠 AI Notes Summarizer

A web-based application that summarizes text and PDF notes using AI.
Built with Flask and powered by local LLMs via Ollama.



## 🚀 Features

- Summarize plain text input
- Upload and summarize PDF files
- Choose summary style (Short / Detailed)
- Bullet-point summaries
- Drag & drop PDF upload
- Remove uploaded file option
- Loading spinner for better user experience
- Clean and aesthetic UI (pure CSS, no frameworks)

## 🛠️ Tech Stack

- Backend: Python, Flask
- Frontend: HTML, CSS, JavaScript
- AI Model: Ollama (local LLMs like phi3, llama3)

## 📦 Installation & Setup

1. Clone the repository
    ```
    git clone <your-repo-url>
    cd AI_Notes_Summarizer
    ```
2. Create virtual environment
    ```
    python -m venv venv
    venv\Scripts\activate
    ```
3. Install dependencies
    ```
    pip install -r requirements.txt
    ```
4. Install Ollama

    Download and install from: https://ollama.com

5. Run a model

    ollama run phi3

6. Run the application

    python app.py

7. Open in browser

    http://127.0.0.1:5000/


## ⚠️ Important Notes

- Ollama must be running before using the app
- Works best with text-based PDFs (not scanned images)
- Large inputs may take time depending on system performance
- Requires decent RAM for smooth AI performance


## 📌 Future Improvements

- Download summary as .txt or .pdf
- Performance optimization
- Dark mode toggle
- Deploy as a public web app

## Author

**Sujal Chowdhary**