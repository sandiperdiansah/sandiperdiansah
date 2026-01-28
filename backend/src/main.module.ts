import { AppModule } from '@/app/app.module';
import { typeOrmAsyncConfig } from '@/config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: [
				'.env.production',
				'.env.staging',
				'.env.development',
				'.env',
			],
		}),
		TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
		AppModule,
	],
})
export class MainModule {}
