import { ProjectEntity } from '@/app/project/project.entity';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

export enum MediaType {
	IMAGE = 'image',
	AUDIO = 'audio',
	VIDEO = 'video',
	FILE = 'file',
}

@Entity('ms_medias')
export class MediaEntity extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'text', nullable: false })
	url: string;

	@Column({ type: 'enum', enum: MediaType, nullable: false })
	type: MediaType;

	@CreateDateColumn({ type: 'timestamptz' })
	createdAt: Date;

	@UpdateDateColumn({ type: 'timestamptz' })
	updatedAt: Date;

	@DeleteDateColumn({ type: 'timestamptz' })
	deletedAt?: Date;

	@ManyToOne(() => ProjectEntity, (project) => project.medias)
	project: ProjectEntity;
}
