import { swaggerConfig } from '@/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';

async function bootstrap() {
	const app = await NestFactory.create(MainModule, {
		logger: ['verbose', 'log', 'error', 'warn'],
		cors: {
			origin: process.env.CORS_ALLOWED_ORIGINS?.split(','),
			methods: process.env.CORS_ALLOWED_METHODS?.split(','),
			allowedHeaders: process.env.CORS_ALLOWED_HEADERS?.split(','),
			credentials: true,
		},
	});

	const configService = app.get(ConfigService);

	app.setGlobalPrefix('api', { exclude: ['/', '/health'] });
	app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
	swaggerConfig(app, configService);

	const PORT = configService.getOrThrow<number>('APP_PORT');
	await app.listen(PORT, () => {
		Logger.log(`server runing -> http://localhost:${PORT}`);
	});
}
void bootstrap();
