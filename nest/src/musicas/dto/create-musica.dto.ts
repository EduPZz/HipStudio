import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMusicaDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsString()
  feats: string;

  @IsNumber()
  fk_album: number;

  @IsNotEmpty()
  @IsString()
  letra: string;

  @IsNotEmpty()
  @IsNumber()
  fk_TipoContrato: number;

  @IsNotEmpty()
  @IsNumber()
  fk_Cliente: number;
}
