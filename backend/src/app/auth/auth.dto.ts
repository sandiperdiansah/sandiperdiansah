import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class SignUpDtoRequest {
	@ApiProperty({ example: faker.person.fullName() })
	@IsNotEmpty()
	@IsString()
	name: string;

	@ApiProperty({ example: faker.internet.email() })
	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email: string;

	@ApiProperty({ example: faker.internet.password() })
	@IsNotEmpty()
	@IsString()
	@IsStrongPassword()
	password: string;
}

export class SignInDtoRequest {
	@ApiProperty({ example: faker.internet.email() })
	@IsNotEmpty()
	@IsString()
	email: string;

	@ApiProperty({ example: faker.internet.password() })
	@IsNotEmpty()
	@IsString()
	@IsStrongPassword()
	password: string;
}
