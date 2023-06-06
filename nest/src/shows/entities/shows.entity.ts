import { shows } from '@prisma/client';

export class ShowEntity implements shows {
  ID_shows: number;
  horario: string;
  data_show: Date;
  cidade_endereco: string;
  CEP_endereco: string;
  rua_endereco: string;
  numero_endereco: string;
  titulo: string;
  fk_TipoContrato: number;
  fk_Cliente: number;
}
