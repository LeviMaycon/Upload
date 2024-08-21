import { Expose } from "class-transformer";

export class AssistantModel {
    @Expose()
    id: number

    name:     string
    function:string
    @Expose()
    world: []

    worldId: number
}