import { ConflictException, Injectable, NotFoundException, Response } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateAssistantDto } from "../dtos/create-assistant-dto";
import { plainToInstance } from "class-transformer";
import { AssistantModel } from "./models/assistantModel";
import { UpdateAssistantDto } from "../dtos/update-assistant-dto";



@Injectable()
export class AssistantService {
    constructor(private readonly prisma: PrismaService) { }


    async create(dto: CreateAssistantDto) {
        const assistant = await this.prisma.assistant.findFirst({
            where: {
                name: dto.name
            }
        })
        if (assistant) {
            throw new ConflictException(`Você não pode criar outro assistant`)
        }
        const assistantMapper = plainToInstance(AssistantModel, dto)
        return await this.prisma.assistant.create({
            data: {
                name: assistantMapper.name,
                function: assistantMapper.function,
                worldId: assistantMapper.worldId
            }
        })
    }

    async findOne(id) {
        const assistant = await this.prisma.assistant.findUnique({
            where: {
                id: id
            }
        })
        if (!assistant) {
            throw new NotFoundException(`This assistant not exists!`)
        }

        return assistant
    }

    async findAll() {
        return await this.prisma.assistant.findMany({
            include: {
                world: true
            }
        })
    }

    async update(id: number, data: UpdateAssistantDto) {
        const assistant = await this.prisma.assistant.update({
            where: {
                id: id
            },
            include: {
                world: true
            },
            data
        })
        if (!assistant) {
            throw new NotFoundException(`This assistant with id: ${id} does't exists!`)
        }
        return assistant;
    }

    async delete(id: number) {
        const assistant = await this.prisma.assistant.delete({
            where: {
                id: id
            }
        })
        if (!assistant) {
            throw new NotFoundException(`This assistant not exists! You can't delete things doest exist.`)
        }
        return assistant
    }
}