import { UserEntity } from '@/app/user/user.entity';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('sessions')
export class SessionEntity extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', unique: true, nullable: false })
	token: string;

	@Column({ type: 'varchar', nullable: true })
	ipAddress?: string;

	@Column({ type: 'varchar', nullable: true })
	userAgent?: string;

	@Column({ type: 'timestamptz', nullable: false })
	expiresAt: Date;

	@CreateDateColumn({ type: 'timestamptz' })
	createdAt: Date;

	@UpdateDateColumn({ type: 'timestamptz' })
	updatedAt: Date;

	// relation
	@ManyToOne(() => UserEntity, (user) => user.sessions, {
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'userId', referencedColumnName: 'id' })
	user: UserEntity;
}
