import asyncio
from websockets.asyncio.client import connect
from websockets.exceptions import ConnectionClosed


async def handler():

    # This will have to be changed to the hostname
    # of the python server, running on a different machine

    hostname = "localhost"
    port = "5555"

    address = "ws://"+hostname+":"+port
    async for sock in connect(address):
        try:
            msg = await sock.recv()
            send_serial(msg)
        except ConnectionClosed:
            continue

def send_serial(msg):
    print("Processing:", msg )
    return


if __name__ == "__main__":
    asyncio.run(handler())

