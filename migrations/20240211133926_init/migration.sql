-- CreateTable
CREATE TABLE "MemoryInformation" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MemoryInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemoryLevelsInformation" (
    "id" SERIAL NOT NULL,
    "level" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MemoryLevelsInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemoryTags" (
    "id" SERIAL NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "MemoryTags_pkey" PRIMARY KEY ("id")
);
