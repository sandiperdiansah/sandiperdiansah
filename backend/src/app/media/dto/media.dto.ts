import { MediaType } from '@/app/media/media.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { v4 as uuid } from 'uuid';

export class MediaDto {
	@ApiProperty({ example: uuid() })
	id: string;

	@ApiProperty({ example: 'https://placehold.co/600*400.webp' })
	url: string;

	@ApiProperty({ example: MediaType.IMAGE })
	type: MediaType;

	@ApiProperty({ example: new Date() })
	createdAt: Date;

	@ApiProperty({ example: new Date() })
	updatedAt: Date;

	@ApiPropertyOptional({ example: null })
	deletedAt?: Date;
}
