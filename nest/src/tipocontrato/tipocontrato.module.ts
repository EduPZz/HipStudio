import { Module } from '@nestjs/common';
import { TipocontratoService } from './tipocontrato.service';
import { TipocontratoController } from './tipocontrato.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TipocontratoController],
  providers: [TipocontratoService],
})
export class TipocontratoModule {}
