-- DropForeignKey
ALTER TABLE "World" DROP CONSTRAINT "World_uploadId_fkey";

-- AlterTable
ALTER TABLE "World" ALTER COLUMN "uploadId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "World" ADD CONSTRAINT "World_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE SET NULL ON UPDATE CASCADE;
