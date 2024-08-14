-- DropForeignKey
ALTER TABLE "Upload" DROP CONSTRAINT "Upload_environmentId_fkey";

-- AlterTable
ALTER TABLE "Upload" ALTER COLUMN "environmentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Upload" ADD CONSTRAINT "Upload_environmentId_fkey" FOREIGN KEY ("environmentId") REFERENCES "Environment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
