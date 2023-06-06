import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { PrismaClientExceptionFilter } from './filters/prisma-client-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ativar o cors para receber requisões locais
  app.enableCors();

  // Ativar camadas de proteções
  app.use(helmet());

  // Validações do DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  await app.listen(3000);
}
bootstrap();
