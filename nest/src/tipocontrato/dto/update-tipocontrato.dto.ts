import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoContratoDto } from './create-tipocontrato.dto';

export class UpdateTipoContratoDto extends PartialType(CreateTipoContratoDto) {}
