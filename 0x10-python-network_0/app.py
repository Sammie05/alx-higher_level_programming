
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
        return 'Hello, World!'

@app.route('/route_3', methods=['DELETE'])
def route_3():
        return "I'm a DELETE request"


@app.route('/route_6', methods=['POST'])
def route_6():
        return 'POST params:\n    email: test@gmail.com\n    subject: I will always be here for PLD'


@app.route('/route_json', methods=['POST'])
def route_json():
        try:
            data = request.gets_json()
            if data is None:
                raise Exception()
            return 'Valid JSON'
        except:
            return 'Not a valid JSON', 400

@app.route('/catch_me')
def catch_me():
    abort(404)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
