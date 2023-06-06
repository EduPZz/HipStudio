import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AlbumsModule } from './albums/albums.module';
import { ClientesModule } from './clientes/clientes.module';
import { ContratosModule } from './contratos/contratos.module';
import { DistribuicoesModule } from './distribuicoes/distribuicoes.module';
import { DistribuidorasModule } from './distribuidoras/distribuidoras.module';
import { LetrasModule } from './letras/letras.module';
import { MusicasModule } from './musicas/musicas.module';
import { ShowsModule } from './shows/shows.module';
import { TipocontratoModule } from './tipocontrato/tipocontrato.module';
import { ExportsModule } from './exports/exports.module';

@Module({
  imports: [PrismaModule, AlbumsModule, ClientesModule, ContratosModule, DistribuicoesModule, DistribuidorasModule, LetrasModule, MusicasModule, ShowsModule, TipocontratoModule, ExportsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
