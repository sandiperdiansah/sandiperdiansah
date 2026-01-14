import { ProjectDto } from '@/app/project/dto';
import { HttpStatus } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateProjectDtoRequest {
	@ApiPropertyOptional({ example: 'Project Name' })
	@IsOptional()
	@IsString()
	name?: string;

	@ApiPropertyOptional({ example: 'project-slug' })
	@IsOptional()
	@IsString()
	slug?: string;

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

export class UpdateProjectDtoResponse {
	@ApiProperty({ example: HttpStatus.OK })
	statusCode: number;

	@ApiProperty({ example: 'Update project successful' })
	message: string;

	@ApiProperty({ type: () => ProjectDto })
	data: ProjectDto;
}
