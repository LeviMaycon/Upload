import { Body, Controller, Param, Post, Get, Patch, Delete } from "@nestjs/common";
import { CreateAssistantDto } from "../dtos/create-assistant-dto";
import { AssistantService } from "./assistant.service";
import { UpdateAssistantDto } from "../dtos/update-assistant-dto";


@Controller('assistant')
export class AssistantController {
    constructor(private readonly assistantService: AssistantService){}

    @Post()
    async create(@Body() createAssistantDto: CreateAssistantDto){
        return this.assistantService.create(createAssistantDto)
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return this.assistantService.findOne(Number(id))
    }

    @Get()
    async finAll(){
        return this.assistantService.findAll()
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: UpdateAssistantDto){
        return this.assistantService.update(Number(id), data)
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.assistantService.delete(Number(id))
    }
}