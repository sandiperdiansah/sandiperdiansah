import {
	BaseEntity,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('ms_projects')
export class ProjectEntity extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', nullable: false })
	name: string;

	@Column({ type: 'varchar', nullable: false, unique: true })
	slug: string;

	@Column({ type: 'text', nullable: true })
	description?: string;

	@Column({ type: 'varchar', nullable: true })
	thumbnail?: string;

	@Column({ type: 'boolean', nullable: false, default: true })
	isActive: boolean;

	@CreateDateColumn({ type: 'timestamptz' })
	createdAt: Date;

	@UpdateDateColumn({ type: 'timestamptz' })
	updatedAt: Date;

	@DeleteDateColumn({ type: 'timestamptz' })
	deletedAt?: Date;
}
