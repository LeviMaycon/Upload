import { PartialType } from "@nestjs/swagger";
import { CreateUploadDto } from "./create-upload-dto";

export class UpldateUploadDto extends PartialType(CreateUploadDto){
    firstName?: string;
    lastName?: string;
    environmentId?: number;
    password?: string;
}