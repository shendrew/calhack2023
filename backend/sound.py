import asyncio
from hume import HumeStreamClient
from hume.models.config import ProsodyConfig, BurstConfig
from pathlib import Path
import base64
import sounddevice as sd
from scipy.io.wavfile import write
rate = 48000
duration = 2

recordpath = "D:/coding/calhacks/recordings/test.wav"

def recording():
    testrecord = sd.rec(int(rate * duration), samplerate=rate, channels=2)
    sd.wait()
    write(recordpath, rate, testrecord)

def encode_data(filepath: Path) -> str:
    with Path(filepath).open('rb') as fp:
        bytes_data = base64.b64encode(fp.read())
        encoded_data = bytes_data.decode("utf-8")
        return encoded_data

filepath = r"D:\coding\calhacks\recordings"

recording()
async def upload():
    client = HumeStreamClient("qhXuN4A0YxSwqHqtnvGWCj9vFEkEzzNivGyX5FvPPZw93jBg")
    configp = ProsodyConfig()
    configb = BurstConfig()
    async with client.connect([configp]) as socket:
        resultp = await socket.send_file(recordpath)
        if 'warning' not in resultp['prosody'].keys():
            resultp = resultp['prosody']['predictions'][0]['emotions']
            sortedp = sorted(resultp, key = lambda x: x['score'], reverse=True)
            print(sortedp)
        else:
            print("No speech detected")
    async with client.connect([configb]) as socket:
        resultb = await socket.send_file(recordpath)
        if 'warning' not in resultb['burst'].keys():
            resultb = resultb['burst']['predictions'][0]['emotions']
            sortedb = sorted(resultb, key = lambda x: x['score'], reverse=True)
            print(sortedb[0])
        else:
            print("No burst detected")


asyncio.run(upload())