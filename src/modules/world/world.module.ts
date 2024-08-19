import { Module } from "@nestjs/common";
import { WorldController } from "./world.controller";
import { WorldService } from "./world.service";
import { PrismaModule } from "src/prisma/prisma.module";


@Module({
    imports: [PrismaModule],
    providers: [WorldService],
    controllers: [WorldController]
})


export class WorldModule {}