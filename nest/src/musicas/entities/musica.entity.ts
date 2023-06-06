import { musica } from '@prisma/client';

export class MusicaEntity implements musica {
  ID_musica: number;
  nome: string;
  feats: string;
  fk_album: number;
  letra: string;
  fk_TipoContrato: number;
  fk_Cliente: number;
}
