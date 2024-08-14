import { Controller, Post, Body } from "@nestjs/common";
import { HouseService } from "./house.service";
import { CreateHouseDto } from "../dtos/create-house-dto";

@Controller('houses')
export class houseController{
    constructor(private readonly houseService: HouseService){}


    @Post()
    async create(@Body() createHouseDto:CreateHouseDto) {
        return await this.houseService.create(createHouseDto)
    }
}