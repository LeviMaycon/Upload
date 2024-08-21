import { IsNotEmpty } from "class-validator";

export class CreateAssistantDto {
    @IsNotEmpty()
    name: string
}