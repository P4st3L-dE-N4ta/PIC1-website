import asyncio
from websockets.asyncio.server import serve


async def handler(sock):
    async for msg in sock:
        print("Received", msg)
        
        # Broadcast to every connection
        # (website will ignore this broadcast)
        for socket in a.connections:
            print("Sent", msg)
            await socket.send(msg)

async def main():
    async with serve(handler, "localhost", 5555) as server:
        global a
        a = server
        await server.serve_forever()


if __name__ == "__main__":
    asyncio.run (main())

