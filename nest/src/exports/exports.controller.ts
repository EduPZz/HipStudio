import { Controller, Get, Post, Res } from '@nestjs/common';
import { ExportsService } from './exports.service';
import { Response } from 'express';

@Controller('exports')
export class ExportsController {
  constructor(private readonly exportsService: ExportsService) {}

  @Get('album')
  async exportAlbum(@Res() res: Response) {
    const csv = await this.exportsService.exportAlbum();
    res.header('Content-Type', 'text/csv');
    res.attachment('Estudio_Albuns.csv');
    return res.send(csv);
  }

  @Get('cliente')
  async exportCliente(@Res() res: Response) {
    const csv = await this.exportsService.exportCliente();
    res.header('Content-Type', 'text/csv');
    res.attachment('Estudio_Cliente.csv');
    return res.send(csv);
  }

  @Get('contrato')
  async exportContrato(@Res() res: Response) {
    const csv = await this.exportsService.exportContrato();
    res.header('Content-Type', 'text/csv');
    res.attachment('Estudio_Contrato.csv');
    return res.send(csv);
  }

  @Get('distribuicao')
  async exportDistribuicao(@Res() res: Response) {
    const csv = await this.exportsService.exportDistribuicao();
    res.header('Content-Type', 'text/csv');
    res.attachment('Estudio_Distribuicao.csv');
    return res.send(csv);
  }

  @Get('distribuidora')
  async exportDistribuidora(@Res() res: Response) {
    const csv = await this.exportsService.exportDistribuidora();
    res.header('Content-Type', 'text/csv');
    res.attachment('Estudio_Distribuidora.csv');
    return res.send(csv);
  }

  @Get('letra')
  async exportLetra(@Res() res: Response) {
    const csv = await this.exportsService.exportLetra();
    res.header('Content-Type', 'text/csv');
    res.attachment('Estudio_letra.csv');
    return res.send(csv);
  }

  @Get('musica')
  async exportMusica(@Res() res: Response) {
    const csv = await this.exportsService.exportMusica();
    res.header('Content-Type', 'text/csv');
    res.attachment('Estudio_Musica.csv');
    return res.send(csv);
  }

  @Get('shows')
  async exportShows(@Res() res: Response) {
    const csv = await this.exportsService.exportShows();
    res.header('Content-Type', 'text/csv');
    res.attachment('Estudio_shows.csv');
    return res.send(csv);
  }

  @Get('tipocontrato')
  async exportTipocontrato(@Res() res: Response) {
    const csv = await this.exportsService.exportTipocontrato();
    res.header('Content-Type', 'text/csv');
    res.attachment('Estudio_tipocontrato.csv');
    return res.send(csv);
  }
}
