import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { SessionEntity } from '../entities/session.entity';

@Injectable()
export class SessionRepository extends Repository<SessionEntity> {
	constructor(private readonly dataSource: DataSource) {
		super(SessionEntity, dataSource.createEntityManager());
	}
}
