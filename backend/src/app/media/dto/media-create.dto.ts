import { MediaType } from '@/app/media/media.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateMediaDtoRequest {
	@ApiProperty({ example: 'https://placehold.co/600*400.webp' })
	@IsNotEmpty()
	@IsUrl()
	url: string;

	@ApiProperty({ example: MediaType.IMAGE })
	@IsNotEmpty()
	@IsEnum(MediaType)
	type: MediaType;
}
