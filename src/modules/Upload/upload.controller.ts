import { Body, Controller, Param, Post, Get, Put, Delete } from "@nestjs/common";
import { CreateUploadDto } from "../dtos/create-upload-dto";
import { UploadService } from "./upload.service";

@Controller('uploads')
export class UploadController {
    constructor(private readonly uploadService: UploadService){}

    @Post()
    async create(@Body() createUploadDto: CreateUploadDto){
        return await this.uploadService.create(createUploadDto)
    }

    @Get(':id')
    async findUnique(@Param('id') id: string){
        return await this.uploadService.findUnique(Number(id));
    }

    @Get()
    async findAll(){
        return await this.uploadService.findMany()
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.uploadService.delete(Number(id));
    }
}