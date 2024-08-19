import { Controller, Body, Post, Param, Get, Delete, Patch } from "@nestjs/common";
import { CreateWorldDto } from "../dtos/create-world-dto";
import { WorldService } from "./world.service";
import { UpdateWorldDto } from "../dtos/update-world-dto";

@Controller('worlds')
export class WorldController{
    constructor(private readonly worldService: WorldService){}


    //create a new world
    @Post()
    async create(@Body() createWorldDto:CreateWorldDto){
        return await this.worldService.create(createWorldDto)
    }

    // find unique world
    @Get(':id')
    async findUnique(@Param('id') id: string){
        return await this.worldService.findUnique(Number(id))
    }

    // delete world
    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.worldService.delete(Number(id))
    }

    @Get()
    async findAll(){
        return await this.worldService.findAll()
    }

    @Patch(':id')
    async update(@Param('id') id:string, @Body() updateWorldDto: UpdateWorldDto){
        return await this.worldService.update(Number(id), updateWorldDto)
    }
}