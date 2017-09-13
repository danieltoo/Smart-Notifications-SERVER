from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
socketio = SocketIO(app)
messages = []



@socketio.on('connect')
def handler_connect():
	print("Se unió un dispositivo")
	return 

@socketio.on('message')
def handler_menssage(message):
	print(message)
	global messages
	messages.append(message)
	print(messages)
	emit('message', message, broadcast=True)
	return 


if __name__ == '__main__':
    socketio.run(app, port=3000,host="10.0.0.7")
