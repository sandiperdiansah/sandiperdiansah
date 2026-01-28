import 'dotenv/config';
import path from 'path';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,

	migrationsTableName: 'migrations',
	entities: [path.join(__dirname, '..', '**', '*.entity.{ts,js}')],
	migrations: [path.join(__dirname, '**', 'migrations', '*.{ts,js}')],
});

export default dataSource;
