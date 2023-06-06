import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateTipoContratoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsBoolean()
  can_music: boolean;

  @IsBoolean()
  can_shows: boolean;

  @IsBoolean()
  can_albun: boolean;

  @IsBoolean()
  can_letra: boolean;
}
