import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateHouseDto } from "../dtos/create-house-dto";

@Injectable()
export class HouseService {
    constructor(private readonly prisma: PrismaService){}


    async create(data: CreateHouseDto){
        const foundHouse = await this.prisma.house.findFirst({
            where: {
                name: data.name
            }
        })
        if(foundHouse){
            throw new ConflictException('This house already exists!')
        }
        return await this.prisma.house.create({
            data : {
                name: data.name,
                description: data.description,
                owner: {
                    connect: {id: data.owner},
                }
            }
        })
    }
}