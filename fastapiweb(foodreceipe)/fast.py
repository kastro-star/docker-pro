from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from pathlib import Path

app = FastAPI()

# Get the current directory where fast.py is located
current_dir = Path(__file__).parent

# Mount the assets directory to serve static files
app.mount("/assets", StaticFiles(directory=str(current_dir / "assets")), name="assets")

@app.get("/", response_class=HTMLResponse)
async def read_items():
    # Read the content from index.html file
    html_file = current_dir / "index.html"
    print(html_file)
    with open(html_file, "r", encoding="utf-8") as f:
        html_content = f.read()
    return html_content 