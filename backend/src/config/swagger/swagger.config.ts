import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerConfig = (
	app: INestApplication,
	configService: ConfigService,
) => {
	const swaggerConfig = new DocumentBuilder()
		.setTitle(configService.getOrThrow<string>('SWAGGER_DOCS_TITLE'))
		.setDescription(configService.getOrThrow<string>('SWAGGER_DOCS_DESCRIPTION'))
		.setVersion(configService.getOrThrow<string>('APP_VERSION'))
		.addBearerAuth()
		.build();

	const document = SwaggerModule.createDocument(app, swaggerConfig);
	SwaggerModule.setup(
		configService.getOrThrow<string>('SWAGGER_DOCS_PATH'),
		app,
		document,
	);
};
