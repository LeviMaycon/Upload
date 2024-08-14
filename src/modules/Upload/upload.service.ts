import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUploadDto } from "../dtos/create-upload-dto";


@Injectable()
export class UploadService{
    constructor(private readonly prisma: PrismaService){}


    async create(data: CreateUploadDto){
        const {environmentId,...rest} = data
        return this.prisma.upload.create({
            data: {
                ...rest,
            },
        });
    }
}