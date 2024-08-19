import {IsNotEmpty} from "class-validator";

export class CreateHouseDto {
    @IsNotEmpty()
    name: string

    description: string
    
    owner: number
}