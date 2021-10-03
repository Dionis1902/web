from flask import Flask, request, render_template, jsonify, abort, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from enum import Enum

from marshmallow import fields

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///main.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

ma = Marshmallow(app)


class Animals(Enum):
    MAMMAL = 'mammal'
    REPTILE = 'reptile'
    BIRDS = 'birds'
    FISH = 'fish'


class Animal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    description = db.Column(db.Text)
    price = db.Column(db.Integer)
    type = db.Column(db.Enum(Animals))


class AnimalSchema(ma.Schema):
    type = fields.Method("get_type")

    @staticmethod
    def get_type(obj):
        return obj.type.value

    class Meta:
        fields = ("id", "title", "description", "price", "type")


animal_schema = AnimalSchema()
animals_schema = AnimalSchema(many=True)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/add', methods=['GET', 'POST'])
def add_animal():
    if request.method == 'POST':
        data = dict(request.form)
        animal = Animal(title=data['title'],
                        description=data['description'],
                        price=data['price'],
                        type=Animals(data['type']))
        db.session.add(animal)
        db.session.commit()
    return render_template('add.html', title="Add animal")


@app.route('/get')
def get_animals():
    animals = reversed(Animal.query.all())
    return jsonify(animals_schema.dump(animals))


@app.route('/edit/<animal_id>', methods=['GET', 'POST'])
def edit_animal(animal_id):
    animal = Animal.query.filter_by(id=animal_id).first()
    if not animal:
        return abort(404)
    if request.method == 'POST':
        data = dict(request.form)
        animal.title = data['title']
        animal.description = data['description']
        animal.price = data['price']
        animal.type = Animals(data['type'])
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('add.html', title="Edit animal",
                           name=animal.title,
                           description=animal.description,
                           price=animal.price,
                           type=animal.type.value)


@app.route('/delete/<animal_id>', methods=['POST'])
def delete_animal(animal_id):
    animal = Animal.query.filter_by(id=animal_id).first()
    if animal:
        db.session.delete(animal)
        db.session.commit()
    return jsonify(sucsess=True)


if __name__ == '__main__':
    db.create_all()
    app.run()
