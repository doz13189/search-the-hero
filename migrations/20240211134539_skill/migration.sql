/*
  Warnings:

  - Added the required column `skill` to the `MemoryLevelsInformation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MemoryLevelsInformation" ADD COLUMN     "skill" JSONB NOT NULL;
