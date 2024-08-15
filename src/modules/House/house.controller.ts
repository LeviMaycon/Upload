import { Controller, Post, Body, Param, Get, Delete, Patch } from "@nestjs/common";
import { HouseService } from "./house.service";
import { CreateHouseDto } from "../dtos/create-house-dto";

@Controller('houses')
export class houseController{
    constructor(private readonly houseService: HouseService){}


    @Post()
    async create(@Body() createHouseDto:CreateHouseDto) {
        return await this.houseService.create(createHouseDto)
    }

    @Get(':id')
    async findOne(@Param('id') id: string ){
        return await this.houseService.findOne(Number(id))
    }


    @Get()
    async findMany(){
        return await this.houseService.findAll()
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.houseService.delete(Number(id))
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateHouseDto: CreateHouseDto){
        return await this.houseService.update(Number(id), updateHouseDto)
    }
}