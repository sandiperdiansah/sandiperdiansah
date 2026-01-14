import {
	CreateProjectDtoRequest,
	FindAllProjectDtoQuery,
	PaginationProjectDtoResponse,
	UpdateProjectDtoRequest,
} from '@/app/project/dto';
import { ProjectEntity } from '@/app/project/project.entity';
import { ProjectRepository } from '@/app/project/project.repository';
import {
	DefaultWhereOrder,
	DefaultWhereSort,
	DefaultWhereStatus,
	createUniqueSlugHelper,
} from '@/default';
import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { FindOptionsWhere, Like } from 'typeorm';

@Injectable()
export class ProjectService {
	constructor(private readonly projectRepository: ProjectRepository) {}

	async create(request: CreateProjectDtoRequest): Promise<ProjectEntity> {
		try {
			const slug = createUniqueSlugHelper(request.slug);
			await this.conflicProject(slug);
			const entity = this.projectRepository.create({
				...request,
				slug,
			});

			Logger.log('PROJECT_SERVICE#CREATE');
			return await this.projectRepository.save(entity);
		} catch (error) {
			Logger.error('PROJECT_SERVICE#CREATE', error);
			throw error;
		}
	}

	async findAll(query: FindAllProjectDtoQuery): Promise<PaginationProjectDtoResponse> {
		try {
			const {
				page = 1,
				limit = 10,
				sort = DefaultWhereSort.CREATED_AT,
				order = DefaultWhereOrder.DESC,
				search,
				filterStatus,
			} = query;

			const where: FindOptionsWhere<ProjectEntity>[] = search
				? [{ name: Like(`%${search}%`) }, { slug: Like(`%${search}%`) }]
				: [{}];

			if (filterStatus && filterStatus !== DefaultWhereStatus.ALL) {
				where.forEach((project) => {
					project.isActive = filterStatus === DefaultWhereStatus.ACTIVE;
				});
			}

			const [data, count] = await this.projectRepository.findAndCount({
				where,
				order: { [sort]: order },
				skip: (page - 1) * limit,
				take: limit,
			});

			Logger.log('PROJECT_SERVICE#FIND_ALL');

			return {
				data,
				meta: {
					page,
					limit,
					count,
					pages: Math.ceil(count / limit),
				},
			};
		} catch (error) {
			Logger.error('PROJECT_SERVICE#FIND_ALL', error);
			throw error;
		}
	}

	async findOne(id: string, withDeleted = false): Promise<ProjectEntity> {
		try {
			const entity = await this.projectRepository.findOne({
				where: { id },
				withDeleted,
			});

			if (!entity) {
				Logger.log('PROJECT_SERVICE#FIND_ONE');
				throw new NotFoundException('Project not found');
			}

			Logger.log('PROJECT_SERVICE#FIND_ONE');
			return entity;
		} catch (error) {
			Logger.error('PROJECT_SERVICE#FIND_ONE', error);
			throw error;
		}
	}

	async update(id: string, request: UpdateProjectDtoRequest): Promise<ProjectEntity> {
		try {
			const entity = await this.findOne(id);

			if (request.slug && request.slug !== entity.slug) {
				await this.conflicProject(request.slug);
			}

			await this.projectRepository.update(entity.id, {
				...request,
				slug: request.slug ? createUniqueSlugHelper(request.slug) : entity.slug,
			});

			Logger.log('PROJECT_SERVICE#UPDATE');
			return this.findOne(entity.id);
		} catch (error) {
			Logger.error('PROJECT_SERVICE#UPDATE', error);
			throw error;
		}
	}

	async delete(id: string): Promise<void> {
		try {
			await this.findOne(id);
			await this.projectRepository.softDelete(id);
			Logger.log('PROJECT_SERVICE#DELETE');
		} catch (error) {
			Logger.error('PROJECT_SERVICE#DELETE', error);
			throw error;
		}
	}

	async restore(id: string): Promise<void> {
		try {
			const entity = await this.findOne(id, true);
			await this.projectRepository.restore(entity.id);
			Logger.log('PROJECT_SERVICE#RESTORE');
		} catch (error) {
			Logger.error('PROJECT_SERVICE#RESTORE', error);
			throw error;
		}
	}

	async forceDelete(id: string): Promise<void> {
		try {
			const entity = await this.findOne(id);
			await this.projectRepository.delete(entity.id);
			Logger.log('PROJECT_SERVICE#FORCE_DELETE');
		} catch (error) {
			Logger.error('PROJECT_SERVICE#FORCE_DELETE', error);
			throw error;
		}
	}

	private async conflicProject(slug: string): Promise<void> {
		const entity = await this.projectRepository.findOneBy({ slug });

		if (entity) {
			Logger.log('PROJECT_SERVICE#CONFLICT', entity);
			throw new ConflictException('Project already exists');
		}
	}
}
