import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';

@Module({
  providers: [AppService, ChatGateway]
})
export class AppModule {}
