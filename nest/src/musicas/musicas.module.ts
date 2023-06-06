import { Module } from '@nestjs/common';
import { MusicasService } from './musicas.service';
import { MusicasController } from './musicas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MusicasController],
  providers: [MusicasService],
})
export class MusicasModule {}
