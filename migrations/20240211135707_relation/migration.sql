/*
  Warnings:

  - Added the required column `memoryInformationId` to the `MemoryLevelsInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memoryInformationId` to the `MemoryTags` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MemoryLevelsInformation" ADD COLUMN     "memoryInformationId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "MemoryTags" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "memoryInformationId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "MemoryLevelsInformation" ADD CONSTRAINT "MemoryLevelsInformation_memoryInformationId_fkey" FOREIGN KEY ("memoryInformationId") REFERENCES "MemoryInformation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemoryTags" ADD CONSTRAINT "MemoryTags_memoryInformationId_fkey" FOREIGN KEY ("memoryInformationId") REFERENCES "MemoryInformation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
