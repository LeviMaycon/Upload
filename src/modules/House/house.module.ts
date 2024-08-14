import { Module } from "@nestjs/common";
import { houseController } from "./house.controller";
import { HouseService } from "./house.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    providers: [HouseService],
    controllers: [houseController]
})

export class HouseModule {}