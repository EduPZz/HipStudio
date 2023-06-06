import { tipocontrato } from '@prisma/client';

export class Tipocontrato implements tipocontrato {
  ID_tipoContrato: number;
  nome: string;
  can_music: boolean;
  can_shows: boolean;
  can_albun: boolean;
  can_letra: boolean;
}
