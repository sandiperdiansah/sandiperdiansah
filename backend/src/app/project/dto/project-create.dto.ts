import { ProjectDto } from '@/app/project/dto';
import { HttpStatus } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProjectDtoRequest {
	@ApiProperty({ example: 'Project Name' })
	@IsNotEmpty()
	@IsString()
	name: string;

	@ApiProperty({ example: 'project-slug' })
	@IsNotEmpty()
	@IsString()
	slug: string;

	@ApiPropertyOptional({ example: 'Project Description' })
	@IsOptional()
	@IsString()
	description?: string;

	@ApiPropertyOptional({ example: 'Project Thumbnail' })
	@IsOptional()
	@IsString()
	thumbnail?: string;

	@ApiPropertyOptional({ example: true })
	@IsOptional()
	@IsBoolean()
	isActive?: boolean;
}

export class CreateProjectDtoResponse {
	@ApiProperty({ example: HttpStatus.CREATED })
	statusCode: number;

	@ApiProperty({ example: 'Create project successful' })
	message: string;

	@ApiProperty({ type: () => ProjectDto })
	data: ProjectDto;
}
