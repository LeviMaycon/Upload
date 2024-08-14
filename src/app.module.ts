import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { uploadModule } from './modules/Upload/upload.module';

@Module({
  imports: [uploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
