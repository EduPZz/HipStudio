import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoContratoDto } from './dto/create-tipocontrato.dto';
import { UpdateTipoContratoDto } from './dto/update-tipocontrato.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipocontratoService {
  constructor(private readonly prismaService: PrismaService) {}

  create(CreateTipoContratoDto: CreateTipoContratoDto) {
    return this.prismaService.tipocontrato.create({
      data: CreateTipoContratoDto,
    });
  }

  findAll() {
    return this.prismaService.tipocontrato.findMany();
  }

  async findOne(id: number) {
    const exists = await this.prismaService.tipocontrato.findFirst({
      where: { ID_tipoContrato: id },
    });

    if (!exists) {
      throw new NotFoundException();
    }

    return this.prismaService.tipocontrato.findFirst({
      where: { ID_tipoContrato: id },
    });
  }

  async update(id: number, UpdateTipoContratoDto: UpdateTipoContratoDto) {
    const exists = await this.prismaService.tipocontrato.findFirst({
      where: { ID_tipoContrato: id },
    });

    if (!exists) {
      throw new NotFoundException();
    }

    return this.prismaService.tipocontrato.update({
      where: { ID_tipoContrato: id },
      data: UpdateTipoContratoDto,
    });
  }

  async remove(id: number) {
    const exists = await this.prismaService.tipocontrato.findFirst({
      where: { ID_tipoContrato: id },
    });

    if (!exists) {
      throw new NotFoundException();
    }

    return this.prismaService.tipocontrato.delete({
      where: { ID_tipoContrato: id },
    });
  }
}
