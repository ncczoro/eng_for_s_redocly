import 'dotenv/config';
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { RedocModule, RedocOptions } from 'nestjs-redoc';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({ type: VersioningType.URI });
  const swaggerVariable = {
    title: 'Love spoonx',
    description: 'Love spoonx',
    version: 'v1.0',
    logoUrl:
      'https://avatars.githubusercontent.com/u/31015991?s=400&u=013ad05b6a8b5c44dc4e7aca732eacd6992ec0f0&v=4',
    backgroundColor: '#F0F0F0',
  };

  const config = new DocumentBuilder()
    .setTitle(swaggerVariable.title)
    .setDescription(swaggerVariable.description)
    .setVersion(swaggerVariable.version)
    .addTag('open_api')
    .addTag('open_api_auth')
    .addTag('product')
    .addTag('ordering')
    .addBasicAuth()
    .addBearerAuth()
    .addOAuth2()
    .addApiKey()
    .addCookieAuth()
    .build();
  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
    ignoreGlobalPrefix: true,
  };
  const document = SwaggerModule.createDocument(app, config, options);
  // SwaggerModule.setup('api', app, document);
  const redocOptions: RedocOptions = {
    title: swaggerVariable.title,
    // logo: {
    //   url: swaggerVariable.logoUrl,
    //   backgroundColor: swaggerVariable.backgroundColor,
    // },
    sortPropsAlphabetically: true,
    hideDownloadButton: true,
    hideHostname: false,
    noAutoAuth: true,
    pathInMiddlePanel: true,
    auth: {
      enabled: true,
      user: 'happy',
      password: 'happy',
    },
    tagGroups: [
      {
        name: 'Auth',
        tags: ['open_api_auth'],
      },
      {
        name: 'Open api',
        tags: ['open_api'],
      },
      {
        name: 'Product api',
        tags: ['product'],
      },
      {
        name: 'Ordering api',
        tags: ['ordering'],
      },
    ],
  };
  // Instead of using SwaggerModule.setup() you call this module
  await RedocModule.setup('', app, document, redocOptions);
  app.enableCors();
  const port = process.env.PORT || 3440;
  await app.listen(port, () => {
    console.log(`app running on port ${port}`);
  });
}
bootstrap();
