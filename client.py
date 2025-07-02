import asyncio
from websockets.asyncio.client import connect
from websockets.exceptions import ConnectionClosed

from PIL import Image
import io

async def handler():
    hostname = "localhost"  # Change to your server's IP if needed
    port = "5555"
    address = f"ws://{hostname}:{port}"

    async for sock in connect(address):
        try:
            while True:  # Keep receiving messages until connection closes
                msg = await sock.recv()

                if isinstance(msg, str):
                    print("Received text message")
                    send_serial(msg.encode('utf-8'))  # convert text to bytes before sending serial
                elif isinstance(msg, bytes):
                    print(f"Received binary message ({len(msg)} bytes)")
                    #binary_data = msg  # your image bytes here
                    #image = Image.open(io.BytesIO(binary_data))
                    #image.save('received_image.png')
                    send_serial(msg)  # send raw bytes as-is to serial

        except ConnectionClosed:
            print("Connection closed, retrying...")
            continue  # Reconnect automatically on disconnect

def send_serial(msg: bytes):
    """
    Send msg bytes to Raspberry Pi serial.
    For now, just print the raw bytes.
    Replace this with your actual serial code.
    """

    print("Sending to serial:", msg)
    # Example: serial_port.write(msg)
    return

if __name__ == "__main__":
    asyncio.run(handler())
