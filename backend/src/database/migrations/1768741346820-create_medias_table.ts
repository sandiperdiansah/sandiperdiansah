import { DefaultMediaType } from '@/default';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMediasTable1768741346820 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'medias',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'url',
						type: 'text',
						isNullable: false,
					},
					{
						name: 'type',
						type: 'enum',
						enum: Object.values(DefaultMediaType),
						isNullable: false,
					},
					{
						name: 'projectId',
						type: 'uuid',
						isNullable: true,
					},
					{
						name: 'createdAt',
						type: 'timestamptz',
						default: 'CURRENT_TIMESTAMP',
					},
					{
						name: 'updatedAt',
						type: 'timestamptz',
						default: 'CURRENT_TIMESTAMP',
						onUpdate: 'CURRENT_TIMESTAMP',
					},
					{
						name: 'deletedAt',
						type: 'timestamptz',
						isNullable: true,
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('ms_medias');
	}
}
