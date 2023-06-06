import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShowsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createShowDto: CreateShowDto) {
    const id_tipo = createShowDto.fk_TipoContrato;

    const cantCreate = await this.prismaService.tipocontrato.findFirst({
      where: { ID_tipoContrato: id_tipo, can_shows: false },
    });

    if (cantCreate) {
      throw new BadRequestException('Esse tipo de contrato não suporta shows');
    }

    return this.prismaService.shows.create({
      data: createShowDto,
    });
  }

  findAll() {
    return this.prismaService.shows.findMany();
  }

  async findOne(id: number) {
    const exists = await this.prismaService.shows.findFirst({
      where: { ID_shows: id },
    });

    if (!exists) {
      throw new NotFoundException();
    }
    return this.prismaService.shows.findFirst({
      where: { ID_shows: id },
    });
  }

  async update(id: number, updateShowDto: UpdateShowDto) {
    const exists = await this.prismaService.shows.findFirst({
      where: { ID_shows: id },
    });

    if (!exists) {
      throw new NotFoundException();
    }

    const id_tipo = updateShowDto.fk_TipoContrato;

    const cantCreate = await this.prismaService.tipocontrato.findFirst({
      where: { ID_tipoContrato: id_tipo, can_shows: false },
    });

    if (cantCreate) {
      throw new BadRequestException('Esse tipo de contrato não suporta shows');
    }

    return this.prismaService.shows.update({
      where: { ID_shows: id },
      data: updateShowDto,
    });
  }

  async remove(id: number) {
    const exists = await this.prismaService.tipocontrato.findFirst({
      where: { ID_tipoContrato: id },
    });

    if (!exists) {
      throw new NotFoundException();
    }

    return this.prismaService.shows.delete({
      where: { ID_shows: id },
    });
  }
}
