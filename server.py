import asyncio
from websockets.asyncio.server import serve


async def handler(sock):
    async for msg in sock:
        if isinstance(msg, str):
            print("Received text:", msg)
        elif isinstance(msg, bytes):
            print(f"Received binary message of length {len(msg)} bytes")
        # Broadcast to every connection
        for socket in a.connections:
            await socket.send(msg)  # msg can be str or bytes

async def main():
    async with serve(handler, "localhost", 5555) as server:
        global a
        a = server
        await server.serve_forever()


if __name__ == "__main__":
    asyncio.run (main())

