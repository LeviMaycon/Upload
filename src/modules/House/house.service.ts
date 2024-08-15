import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateHouseDto } from "../dtos/create-house-dto";
import { UpldateHouseDto } from "../dtos/update-house-dto";
import { connect } from "http2";

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

    async findOne(id: number){
        const foundHouse = await this.prisma.house.findUnique({
            where: {
                id:id
            }
        })
        if(!foundHouse){
            throw new NotFoundException(`This house with id ${id} doesn't exists`)
        }

        return foundHouse
    }


    async findAll(){
        return await this.prisma.house.findMany()
    }


    async delete(id: number){
        await this.findOne(id)
        return await this.prisma.house.delete({
            where: {
                id:id
            },
            include: {
                owner: true
            }
        })
    }

    async update(id: number, data: UpldateHouseDto){
        const updateHouse = {
            ...data, 
            owner: data.owner ? {connect: {id: data.owner}} : undefined
        }
        const house = await this.prisma.house.update({
            where: {
                id:id
            },
            data: updateHouse
        });
        return house
    }
}