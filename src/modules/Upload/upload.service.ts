import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUploadDto } from "../dtos/create-upload-dto";
import { UpldateUploadDto } from "../dtos/update-upload-dto";
import { error } from "console";


@Injectable()
export class UploadService {
    constructor(private readonly prisma: PrismaService) { }


    async create(data: CreateUploadDto) {
        const foundName = await this.prisma.upload.findFirst({
            where: {
                AND: [
                    {
                        firstName: data.firstName
                    },
                    {
                        lastName: data.lastName
                    }
                ]
            }
        })
        if(foundName){
            throw new ConflictException('This upload already exists in database')
        }
        return await this.prisma.upload.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                password: data.password
            },
        });
    }

    async findUnique(id: number) {

        const upload = await this.prisma.upload.findUnique({
            where: {
                id: id
            }
        })
        if (!upload) {
            throw new NotFoundException(`upload with ${id} not exists!`)
        }
        return upload
    }

    async findMany() {
        const allUploads = await this.prisma.upload.findMany()
        return allUploads
    }

    async update(id: number, data: UpldateUploadDto) {
        const upload = await this.prisma.upload.update({
            where: {
                id: id
            },
            data,
        });
        return upload;
    }

    async delete(id: number) {
        await this.findUnique(id)

        return await this.prisma.upload.delete({
            where: {
                id: id
            }
        });
    }

}