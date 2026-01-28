import { AuthService } from '@/app/auth/auth.service';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SignUpDtoRequest } from './auth.dto';

@ApiTags('Auth')
@Controller()
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@ApiOperation({ summary: 'Sign Up' })
	@HttpCode(HttpStatus.CREATED)
	@Post('sign-up')
	async signUp(@Body() body: SignUpDtoRequest) {
		const response = await this.authService.signUp(body);
		return {
			message: 'Sign Up successful',
			data: response,
		};
	}

	@ApiOperation({ summary: 'Sign In' })
	@HttpCode(HttpStatus.OK)
	@Post('sign-in')
	async signIn() {
		const response = await this.authService.signIn();
		return {
			message: 'Sign In successful',
			data: response,
		};
	}

	@ApiOperation({ summary: 'Sign Out' })
	@HttpCode(HttpStatus.OK)
	@Post('sign-out')
	async signOut() {
		await this.authService.signOut();
		return { message: 'Sign Out successful' };
	}

	@ApiOperation({ summary: 'Refresh Token' })
	@HttpCode(HttpStatus.OK)
	@Post('refresh')
	async refresh() {
		await this.authService.refresh();
		return { message: 'Refresh successful' };
	}
}
