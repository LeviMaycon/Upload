/*
  Warnings:

  - Added the required column `name` to the `World` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "World" ADD COLUMN     "name" TEXT NOT NULL;
