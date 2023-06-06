import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMusicaDto } from './dto/create-musica.dto';
import { UpdateMusicaDto } from './dto/update-musica.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MusicasService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createMusicaDto: CreateMusicaDto) {
    const id_tipo = createMusicaDto.fk_TipoContrato;

    const cantCreate = await this.prismaService.tipocontrato.findFirst({
      where: { ID_tipoContrato: id_tipo, can_music: false },
    });

    if (cantCreate) {
      throw new BadRequestException(
        `Esse tipo de contrato não suporta musicas`,
      );
    }

    return this.prismaService.musica.create({
      data: createMusicaDto,
    });
  }

  findAll() {
    return this.prismaService.musica.findMany();
  }

  async findOne(id: number) {
    const exists = await this.prismaService.musica.findFirst({
      where: { ID_musica: id },
    });

    if (!exists) {
      throw new NotFoundException();
    }
    return this.prismaService.musica.findFirst({
      where: { ID_musica: id },
    });
  }

  async update(id: number, updateMusicaDto: UpdateMusicaDto) {
    const exists = await this.prismaService.musica.findFirst({
      where: { ID_musica: id },
    });

    if (!exists) {
      throw new NotFoundException();
    }

    const id_tipo = updateMusicaDto.fk_TipoContrato;

    const cantCreate = await this.prismaService.tipocontrato.findFirst({
      where: { ID_tipoContrato: id_tipo, can_music: false },
    });

    if (cantCreate) {
      throw new BadRequestException(
        'Esse tipo de contrato não suporta musicas',
      );
    }

    return this.prismaService.musica.update({
      where: { ID_musica: id },
      data: updateMusicaDto,
    });
  }

  async remove(id: number) {
    const exists = await this.prismaService.musica.findFirst({
      where: { ID_musica: id },
    });

    if (!exists) {
      throw new NotFoundException();
    }

    return this.prismaService.musica.delete({
      where: { ID_musica: id },
    });
  }
}
