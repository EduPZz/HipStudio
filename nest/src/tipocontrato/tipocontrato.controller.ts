import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TipocontratoService } from './tipocontrato.service';
import { CreateTipoContratoDto } from './dto/create-tipocontrato.dto';
import { UpdateTipoContratoDto } from './dto/update-tipocontrato.dto';

@Controller('tipocontrato')
export class TipocontratoController {
  constructor(private readonly tipocontratoService: TipocontratoService) {}

  @Post()
  create(@Body() CreateTipoContratoDto: CreateTipoContratoDto) {
    return this.tipocontratoService.create(CreateTipoContratoDto);
  }

  @Get()
  findAll() {
    return this.tipocontratoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.tipocontratoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() UpdateTipoContratoDto: UpdateTipoContratoDto,
  ) {
    return this.tipocontratoService.update(+id, UpdateTipoContratoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.tipocontratoService.remove(+id);
  }
}
