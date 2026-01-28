import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
	inject: [ConfigService],
	useFactory: (configService: ConfigService) => {
		return {
			type: configService.get<'postgres'>('DB_TYPE', 'postgres'),
			host: configService.get<string>('DB_HOST', 'localhost'),
			port: configService.get<number>('DB_PORT', 5432),
			username: configService.get<string>('DB_USERNAME', 'postgres'),
			password: configService.get<string>('DB_PASSWORD', 'postgres'),
			database: configService.get<string>('DB_DATABASE', 'postgres'),

			synchronize: false,
			logging: configService.get<boolean>('DB_LOGGING', false),

			entities: [join(__dirname, '..', '..', '**', '*.entity.{ts,js}')],
			migrations: [
				join(__dirname, '..', '..', 'database', 'migrations', '*.{ts,js}'),
			],
		};
	},
};
