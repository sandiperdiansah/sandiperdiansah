import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { version } from '../../package.json';

class WelComeDtoResponse {
	@ApiProperty({ example: 'Welcome to API!' })
	message: string;

	@ApiProperty({ example: process.env.APP_ENV })
	environment: string;

	@ApiProperty({ example: version })
	version: string;
}

class HealthDtoResponse {
	@ApiProperty({ example: 'Server is healty' })
	message: string;
}

@Controller()
export class AppController {
	@ApiOperation({ summary: 'Welcome' })
	@ApiOkResponse({ type: () => WelComeDtoResponse })
	@Get()
	@HttpCode(HttpStatus.OK)
	welcome(): WelComeDtoResponse {
		return {
			message: 'Welcome to API!',
			environment: process.env.NODE_ENV!,
			version: version,
		};
	}

	@ApiOperation({ summary: 'Health check' })
	@ApiOkResponse({ type: () => HealthDtoResponse })
	@Get('health')
	@HttpCode(HttpStatus.OK)
	health(): string {
		return 'Server is healthy';
	}
}
