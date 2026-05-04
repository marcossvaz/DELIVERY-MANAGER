-- CreateEnum
CREATE TYPE "Employee_Type" AS ENUM ('MANAGER', 'BOSS');

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" DOUBLE PRECISION NOT NULL,
    "rg" TEXT NOT NULL,
    "type" "Employee_Type" NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);
