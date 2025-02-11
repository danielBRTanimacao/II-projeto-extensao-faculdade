from flask import Flask, jsonify, render_template, request
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

def save_courses(file_name, data):
    with open(file_name, "w", encoding="utf-8") as file:
        json.dump(data, file, indent=4, ensure_ascii=False)

@app.route('/events', methods=["GET"])
def events_request():
    events = load_courses(EVENTS_JSON_FILE)
    return jsonify(events)

@app.route('/create', methods=['POST'])
def create_event():
    events = load_courses(EVENTS_JSON_FILE)

    new_event = request.json

    if not new_event.get("title") or not new_event.get("date"):
        return jsonify({"error": "Título e data são obrigatórios"}), 400

    events.append(new_event)
    save_courses(EVENTS_JSON_FILE, events)

    return jsonify({"message": "Evento criado com sucesso!"}), 201

@app.route('/update/<int:event_id>', methods=['GET', 'POST'])
def update_event(event_id):
    events = load_courses(EVENTS_JSON_FILE)

    if event_id < 0 or event_id >= len(events):
        return jsonify({"error": "Evento não encontrado"}), 404

    if request.method == "POST":
        title = request.form.get("title")
        date = request.form.get("date")
        text = request.form.get("text")
        about = request.form.get("about")
        img_file = request.files.get("imgOpacity")

        if not title or not date:
            return jsonify({"error": "Título e data são obrigatórios"}), 400

        events[event_id]["title"] = title
        events[event_id]["date"] = date
        events[event_id]["text"] = text
        events[event_id]["about"] = about

        if img_file and img_file.filename:
            img_path = f"static/uploads/{img_file.filename}"
            img_file.save(img_path)
            events[event_id]["image"] = img_path

        save_courses(EVENTS_JSON_FILE, events)

        return render_template("index.html", events=events)

    return render_template("update.html", event=events[event_id], event_id=event_id)

@app.route('/delete/<int:event_id>', methods=['DELETE'])
def delete_event(event_id):
    events = load_courses(EVENTS_JSON_FILE)
    
    if 0 <= event_id < len(events):
        del events[event_id]
        save_courses(EVENTS_JSON_FILE, events)
        return jsonify({"message": "Evento deletado com sucesso!"}), 200
    
    return jsonify({"error": "Evento não encontrado"}), 404

@app.route('/interface', methods=['GET', 'POST'])
def interface_updates():
    events = load_courses(EVENTS_JSON_FILE)
    return render_template("index.html", events=events)

if __name__ == "__main__":
    app.run(debug=True)
