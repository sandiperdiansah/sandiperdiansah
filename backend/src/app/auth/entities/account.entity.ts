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

@Entity('accounts')
export class AccountEntity extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', nullable: true })
	password?: string;

	@Column({ type: 'varchar', nullable: true })
	accessToken?: string;

	@Column({ type: 'varchar', nullable: true })
	refreshToken?: string;

	@Column({ type: 'timestamptz', nullable: true })
	accessTokenExpiresAt?: Date;

	@Column({ type: 'timestamptz', nullable: true })
	refreshTokenExpiresAt?: Date;

	@CreateDateColumn({ type: 'timestamptz' })
	createdAt: Date;

	@UpdateDateColumn({ type: 'timestamptz' })
	updatedAt: Date;

	// relation
	@ManyToOne(() => UserEntity, (user) => user.accounts, {
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'userId', referencedColumnName: 'id' })
	user: UserEntity;
}
