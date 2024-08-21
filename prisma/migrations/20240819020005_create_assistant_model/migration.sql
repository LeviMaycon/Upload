/*
  Warnings:

  - Added the required column `color` to the `Features` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Features` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Features" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Assistant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "function" TEXT NOT NULL,
    "worldId" INTEGER,

    CONSTRAINT "Assistant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Assistant" ADD CONSTRAINT "Assistant_worldId_fkey" FOREIGN KEY ("worldId") REFERENCES "World"("id") ON DELETE SET NULL ON UPDATE CASCADE;
