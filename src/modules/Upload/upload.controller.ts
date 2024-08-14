import { Body, Controller, Post } from "@nestjs/common";
import { CreateUploadDto } from "../dtos/create-upload-dto";
import { UploadService } from "./upload.service";

@Controller('uploads')
export class UploadController {
    constructor(private readonly uploadService: UploadService){}

    @Post()
    create(@Body() createUploadDto: CreateUploadDto){
        return this.uploadService.create(createUploadDto)
    }
}