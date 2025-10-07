import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'ws';

interface ChatMessage {
  videoId: string;
  authorId: string;
  body: string;
  timestamp: number;
}

@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(ChatGateway.name);

  @WebSocketServer()
  server!: Server;

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.protocol}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.protocol}`);
  }

  @SubscribeMessage('chat_message')
  handleMessage(client: Socket, payload: ChatMessage) {
    this.logger.log(`Received message for video ${payload.videoId}`);
    this.server.clients.forEach((ws) => {
      if (ws.readyState === ws.OPEN) {
        ws.send(JSON.stringify({ type: 'chat_message', payload }));
      }
    });
    return payload;
  }
}
