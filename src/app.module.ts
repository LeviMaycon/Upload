import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { uploadModule } from './modules/Upload/upload.module';
import { HouseModule } from './modules/House/house.module';
import { WorldModule } from './modules/world/world.module';
import { AssistantModule } from './modules/assistant/assistant.module';

@Module({
  imports: [uploadModule, HouseModule, WorldModule, AssistantModule],
  providers: [AppService],
})
export class AppModule {}
