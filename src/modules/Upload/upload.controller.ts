import { Body, Controller, Param, Post, Get, Patch, Delete } from "@nestjs/common";
import { CreateUploadDto } from "../dtos/create-upload-dto";
import { UploadService } from "./upload.service";
import { UpldateUploadDto } from "../dtos/update-upload-dto";

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

    @Patch(':id')
    async update(@Param('id') id:number, @Body() updateUploadDto:UpldateUploadDto){
        return await this.uploadService.update(Number(id), updateUploadDto)
    }
}