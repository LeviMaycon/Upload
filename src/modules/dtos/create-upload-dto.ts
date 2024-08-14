import { IsNotEmpty } from "class-validator";

export class CreateUploadDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    environmentId: number;


    @IsNotEmpty()
    password: string
}