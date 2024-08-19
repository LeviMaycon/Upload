/*
  Warnings:

  - You are about to drop the column `uploadId` on the `World` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "World" DROP CONSTRAINT "World_uploadId_fkey";

-- AlterTable
ALTER TABLE "Upload" ADD COLUMN     "worldId" INTEGER;

-- AlterTable
ALTER TABLE "World" DROP COLUMN "uploadId";

-- AddForeignKey
ALTER TABLE "Upload" ADD CONSTRAINT "Upload_worldId_fkey" FOREIGN KEY ("worldId") REFERENCES "World"("id") ON DELETE SET NULL ON UPDATE CASCADE;
