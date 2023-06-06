import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateShowDto {
  @IsNotEmpty()
  @IsString()
  horario: string;

  @IsNotEmpty()
  data_show: Date;

  @IsString()
  @IsNotEmpty()
  cidade_endereco: string;

  @IsNotEmpty()
  @IsString()
  CEP_endereco: string;

  @IsNotEmpty()
  @IsString()
  rua_endereco: string;

  @IsNotEmpty()
  @IsString()
  numero_endereco: string;

  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsNumber()
  fk_TipoContrato: number;

  @IsNotEmpty()
  @IsNumber()
  fk_Cliente: number;
}
