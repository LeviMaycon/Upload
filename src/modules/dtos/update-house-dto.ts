import { PartialType } from "@nestjs/swagger";
import { CreateHouseDto } from "./create-house-dto";

export class UpldateHouseDto extends PartialType(CreateHouseDto){
    description?: string;
    name?: string;
    owner?: number;
}