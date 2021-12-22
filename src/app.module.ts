import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { FileModule } from './files/file.module';
import { TrackModule } from './track/track.module';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://Ilia:111111111@cluster0.gbvsl.mongodb.net/music-platform-back?retryWrites=true&w=majority',
    ),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
