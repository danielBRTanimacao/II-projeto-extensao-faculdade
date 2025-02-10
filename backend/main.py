from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

JSON_FILE = os.path.join(os.path.dirname(__file__), "courses.json")
EVENTS_JSON_FILE = os.path.join(os.path.dirname(__file__), "events.json")

def load_data(file_name):
    if not os.path.exists(file_name):
        return []
    with open(file_name, "r", encoding="utf-8") as file:
        return json.load(file)

@app.route('/courses', methods=["GET"])
def get_courses():
    courses = load_data(JSON_FILE)
    return jsonify(courses)

@app.route('/interface', method=['GET'])
def interface_updates():
    return "interface"

@app.route('/events', methods=["GET"])
def get_events():
    events = load_data(EVENTS_JSON_FILE)
    return jsonify(events)

if __name__ == "__main__":
    app.run(debug=False)
