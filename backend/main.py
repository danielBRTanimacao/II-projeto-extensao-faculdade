from flask import Flask, jsonify, render_template
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

JSON_FILE = os.path.join(os.path.dirname(__file__), "courses.json")
EVENTS_JSON_FILE = os.path.join(os.path.dirname(__file__), "events.json")

def load_courses(file_name):
    with open(file_name, "r", encoding="utf-8") as file:
        return json.load(file)

@app.route('/', methods=["GET"])
def course_request():
    courses = load_courses(JSON_FILE)
    return jsonify(courses)

@app.route('/events', methods=["GET"])
def events_request():
    courses = load_courses(EVENTS_JSON_FILE)
    return jsonify(courses)

@app.route('/interface')
def interface_updates(): # ESSE CODIGO SERA ALTERADO NO MAIN
    events = load_courses(EVENTS_JSON_FILE)
    return render_template("index.html", events=events)

if __name__ == "__main__":
    app.run(debug=True)
