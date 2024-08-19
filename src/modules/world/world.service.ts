import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateWorldDto } from "../dtos/create-world-dto";
import { plainToInstance } from "class-transformer";
import { worldModel } from "./models/worldModel";
import { UpdateWorldDto } from "../dtos/update-world-dto";

@Injectable()
export class WorldService{
    constructor(private readonly prisma: PrismaService){}


    async create(dto: CreateWorldDto){
        const foundNameWorld = this.prisma.world.findFirst({
            where: {
                name: dto.name
            }
        })
        if(!foundNameWorld){
            throw new ConflictException(`There already exists a world with that name`)
        }
        const worldMapper = plainToInstance(worldModel, dto)
        return await this.prisma.world.create({
            data: {
                name:  worldMapper.name,
            }
        })
    }

    async findUnique(id:number){
        const world = await this.prisma.world.findUnique({
            where: {
                id: id
            }
        })
        if(!world){
            throw new NotFoundException(`This world id: ${id} doesn't exists!`)
        }
        return world
    }

    async delete(id:number){
        await this.findUnique(id)

        return await this.prisma.world.delete({
            where: {
                id: id
            }
        })
    }

    async findAll(){
        return await this.prisma.world.findMany()
    }

    async update(id: number, data: UpdateWorldDto){
        const world = await this.prisma.world.update({
            where: {
                id: id
            },
            include: {
                Upload: true
            },
            data
        })
        if(!world){
            throw new NotFoundException(`This world with id: ${id} does't exists!`)
        }
        return world
    }
}