import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { AssistantService } from "./assistant.service";
import { AssistantController } from "./assistant.controller";


@Module({
    imports: [PrismaModule],
    providers: [AssistantService],
    controllers: [AssistantController]
})


export class AssistantModule {}