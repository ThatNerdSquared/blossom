import random
import json
from http.server import BaseHTTPRequestHandler
from pathlib import Path

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'text/plain')
        self.end_headers()
        AFFIRMATIONS = Path("./api/affirmations.txt").read_text().splitlines()
        self.wfile.write(json.dumps({ 'affirmation': random.choice(AFFIRMATIONS) }).encode())
        return
