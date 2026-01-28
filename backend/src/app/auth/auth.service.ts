import { AccountRepository, SessionRepository } from '@/app/auth/repositories';
import { UserService } from '@/app/user/user.service';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { SignUpDtoRequest } from './auth.dto';

@Injectable()
export class AuthService {
	constructor(
		private readonly accountRepository: AccountRepository,
		private readonly sessionRepository: SessionRepository,
		private readonly userService: UserService,
		private readonly dataSource: DataSource,
	) {}

	async signUp(request: SignUpDtoRequest) {
		const queryRunner = this.dataSource.createQueryRunner();

		await queryRunner.connect();
		await queryRunner.startTransaction();

		try {
			await this.userService.conflict({ email: request.email });
		} catch (error) {
			await queryRunner.rollbackTransaction();
			throw error;
		} finally {
			await queryRunner.release();
		}
	}

	async signIn() {}

	async signOut() {}

	async refresh() {}
}
