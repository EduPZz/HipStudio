import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
const json2csv = require('json2csv');

@Injectable()
export class ExportsService {
  constructor(private readonly prismaService: PrismaService) {}

  async exportAlbum() {
    const albuns = await this.prismaService.album.findMany();

    const fields = [
      'ID_album',
      'nome',
      'capa',
      'produtor',
      'fk_TipoContrato',
      'fk_Cliente',
    ];

    const csv = json2csv.parse(albuns, { fields });
    return csv;
  }

  async exportCliente() {
    const cliente = await this.prismaService.cliente.findMany();

    const fields = [
      'ID_album',
      'nome',
      'capa',
      'produtor',
      'fk_TipoContrato',
      'fk_Cliente',
    ];

    const csv = json2csv.parse(cliente, { fields });
    return csv;
  }

  async exportContrato() {
    const contrato = await this.prismaService.contrato.findMany();

    const fields = [
      'ID_contrato',
      'data_contrato',
      'duracao_semestres',
      'fk_TipoContrato',
      'valor',
      'fk_Cliente',
    ];

    const csv = json2csv.parse(contrato, { fields });
    return csv;
  }

  async exportDistribuicao() {
    const distribuicao = await this.prismaService.distribuicao.findMany();

    const fields = ['ID_Distribuicao', 'fk_distribuidora', 'fk_tipoContrato'];

    const csv = json2csv.parse(distribuicao, { fields });
    return csv;
  }

  async exportDistribuidora() {
    const distribuidora = await this.prismaService.distribuidora.findMany();

    const fields = ['ID_distribuidora', 'nome', 'plataforma'];

    const csv = json2csv.parse(distribuidora, { fields });
    return csv;
  }

  async exportLetra() {
    const letra = await this.prismaService.letra.findMany();

    const fields = [
      'ID_letra',
      'conteudo',
      'titulo',
      'fk_TipoContrato',
      'fk_Cliente',
    ];

    const csv = json2csv.parse(letra, { fields });
    return csv;
  }

  async exportMusica() {
    const musica = await this.prismaService.musica.findMany();

    const fields = [
      'ID_musica',
      'nome',
      'feats',
      'fk_album',
      'letra',
      'fk_TipoContrato',
      'fk_Cliente',
    ];

    const csv = json2csv.parse(musica, { fields });
    return csv;
  }
  async exportShows() {
    const shows = await this.prismaService.shows.findMany();

    const fields = [
      'ID_shows',
      'horario',
      'data_show',
      'cidade_endereco',
      'CEP_endereco',
      'rua_endereco',
      'numero_endereco',
      'titulo',
      'fk_TipoContrato',
      'fk_Cliente',
    ];

    const csv = json2csv.parse(shows, { fields });
    return csv;
  }
  async exportTipocontrato() {
    const tipocontrato = await this.prismaService.tipocontrato.findMany();

    const fields = [
      'ID_tipoContrato',
      'nome',
      'can_music',
      'can_shows',
      'can_albun',
      'can_letra',
    ];

    const csv = json2csv.parse(tipocontrato, { fields });
    return csv;
  }
}
