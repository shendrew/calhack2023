import asyncio
from hume import HumeStreamClient, StreamSocket
from hume.models.config import FaceConfig
from hume.models.config import LanguageConfig
import os

import cv2
camera = cv2.VideoCapture(0)
ret, frame = camera.read()
# Optionally encode the frame into a more readable format
# ret, encoded = cv2.imencode(".jpg", frame)

os.chdir(r'C:\Users\sandrew\Code\flaskHack\calhack2023\backend') 
cv2.imwrite('image.jpg', frame)

async def main():
    # client = HumeStreamClient(os.getenv('API_KEY'))
    config = FaceConfig(identify_faces=True)
    async with client.connect([config]) as socket:
        result = await socket.send_file('image.jpg')
        response_body = result["face"]["predictions"][0]["emotions"]
        print(response_body)        

asyncio.run(main())