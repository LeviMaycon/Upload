import { IsNotEmpty } from "class-validator";

export class CreateWorldDto{
    @IsNotEmpty()
    name: string
}