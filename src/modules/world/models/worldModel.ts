import { Expose } from "class-transformer";

export class worldModel {
    @Expose()
    id: number

    name: string
    @Expose()
    uploads: []
}