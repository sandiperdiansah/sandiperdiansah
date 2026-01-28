import { AccountEntity, SessionEntity } from '@/app/auth/entities';
import { AccountRepository, SessionRepository } from '@/app/auth/repositories';
import { UserModule } from '@/app/user/user.module';
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
	imports: [
		forwardRef(() => UserModule),
		TypeOrmModule.forFeature([AccountEntity, SessionEntity]),
	],
	controllers: [AuthController],
	providers: [AuthService, AccountRepository, SessionRepository],
})
export class AuthModule {}
