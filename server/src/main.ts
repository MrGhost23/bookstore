import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  });
  
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('The description of the API')
    .setVersion('1.0')
    .addTag('myapi')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(5000);
}
bootstrap();
