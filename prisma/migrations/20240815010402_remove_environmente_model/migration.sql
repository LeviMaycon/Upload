/*
  Warnings:

  - You are about to drop the `Environment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Features" DROP CONSTRAINT "Features_environmentId_fkey";

-- DropForeignKey
ALTER TABLE "Upload" DROP CONSTRAINT "Upload_environmentId_fkey";

-- DropTable
DROP TABLE "Environment";

-- CreateTable
CREATE TABLE "_FeaturesToHouse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FeaturesToHouse_AB_unique" ON "_FeaturesToHouse"("A", "B");

-- CreateIndex
CREATE INDEX "_FeaturesToHouse_B_index" ON "_FeaturesToHouse"("B");

-- AddForeignKey
ALTER TABLE "_FeaturesToHouse" ADD CONSTRAINT "_FeaturesToHouse_A_fkey" FOREIGN KEY ("A") REFERENCES "Features"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FeaturesToHouse" ADD CONSTRAINT "_FeaturesToHouse_B_fkey" FOREIGN KEY ("B") REFERENCES "House"("id") ON DELETE CASCADE ON UPDATE CASCADE;
