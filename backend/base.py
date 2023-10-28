from flask import Flask

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body


import asyncio
from hume import HumeStreamClient, StreamSocket
from hume.models.config import FaceConfig
import os
from dotenv import load_dotenv

load_dotenv()

import cv2
camera = cv2.VideoCapture(0)
ret, frame = camera.read()
# Optionally encode the frame into a more readable format
# ret, encoded = cv2.imencode(".jpg", frame)

os.chdir(r'C:\Users\sandrew\Code\flaskHack\calhack2023\backend') 
cv2.imwrite('image.jpg', frame)


@api.route('/request-frame')
def data():
    response_body = {
        "emotions": "",
    }

    async def main():
        client = HumeStreamClient(os.getenv('API_KEY'))
        config = FaceConfig(identify_faces=True)
        async with client.connect([config]) as socket:
            result = await socket.send_file('image.jpg')
            response_body["emotions"] = result["face"]["predictions"][0]["emotions"]
            print(response_body)   

    asyncio.run(main())
    return response_body

