from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({
        "message":"Welcome to Flask Backend"
    })

@app.route("/api")
def api():
    return jsonify({
        "name":"Ritika",
        "course":"DevOps and cloud"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000)