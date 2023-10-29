from flask import Flask

api = Flask(__name__)

import asyncio
from hume import HumeStreamClient, StreamSocket
from hume.models.config import FaceConfig, ProsodyConfig, BurstConfig
import sounddevice as sd
from scipy.io.wavfile import write
import cv2
import os
from dotenv import load_dotenv

load_dotenv()

rate = 48000
duration = 2

img = 'image.jpg'
sound = 'sound.wav'

def recording():
    testrecord = sd.rec(int(rate * duration), samplerate=rate, channels=2)
    sd.wait()
    write("sound.wav", rate, testrecord)

@api.route('/request')
def data():
    response_body = {
        "emotionsf": "",
        "emotionsp": "",
        "emotionsb": "",
    }

    async def face():
        camera = cv2.VideoCapture(0)
        ret, frame = camera.read()
        cv2.imwrite(img, frame)

        client = HumeStreamClient(os.getenv('API_KEY'))
        configf = FaceConfig(identify_faces=True)
        async with client.connect([configf]) as socket:
            resultf = await socket.send_file(img)
            resultf = resultf["face"]["predictions"][0]["emotions"]
            response_body["emotionsf"] = sorted(resultf, key = lambda x: x['score'], reverse=True)


    recording()

    async def prosody():
        client = HumeStreamClient(os.getenv('API_KEY'))
        configp = ProsodyConfig()
        async with client.connect([configp]) as socket:
            resultp = await socket.send_file(sound)
            if 'warning' not in resultp['prosody'].keys():
                resultp = resultp['prosody']['predictions'][0]['emotions']
                response_body["emotionsp"] = sorted(resultp, key = lambda x: x['score'], reverse=True)
            else:
                print("No speech detected")


    async def burst():
        client = HumeStreamClient(os.getenv('API_KEY'))
        configb = BurstConfig()
        async with client.connect([configb]) as socket:
            resultb = await socket.send_file(sound)
            if 'warning' not in resultb['burst'].keys():
                resultb = resultb['burst']['predictions'][0]['emotions']
                response_body["emotionsb"] = sorted(resultb, key = lambda x: x['score'], reverse=True)
            else:
                print("No burst detected")


    asyncio.run(face())
    asyncio.run(prosody())
    # asyncio.run(burst())
    return response_body
